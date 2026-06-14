#!/usr/bin/env python3
"""AI Tool Directory — ingestion pipeline.

Crawl curated sources (Product Hunt AI, GitHub awesome-lists), extract/clean
structured fields with Claude (or a heuristic fallback), detect affiliate
programs, dedupe by domain, and upsert into Postgres.

Usage:
    python ingest/run.py                      # all sources, enrich, status=pending
    python ingest/run.py --source github --limit 20 --no-crawl
    python ingest/run.py --status live --limit 40
    python ingest/run.py --dry-run            # discover only, write nothing

Env: DATABASE_URL (required), ANTHROPIC_API_KEY (optional, enables Claude),
     FIRECRAWL_API_KEY (optional), PRODUCTHUNT_TOKEN (optional).
"""
from __future__ import annotations

import argparse
import sys

from affiliate import detect_affiliate
from config import CATEGORIES, load_config
from crawl import fetch_page
from db import (
    connect,
    count_listings,
    ensure_categories,
    insert_listing,
    load_existing,
    touch_listing,
    unique_slug,
)
from extract import enrich
from normalize import domain_of, normalize_name
from sources import Candidate, github_awesome, producthunt


def gather(cfg, source: str) -> list[Candidate]:
    candidates: list[Candidate] = []
    if source in ("all", "producthunt"):
        candidates += producthunt.fetch_candidates(cfg)
    if source in ("all", "github"):
        candidates += github_awesome.fetch_candidates(cfg)

    # Dedupe by domain across sources, preserving order.
    seen: set[str] = set()
    deduped: list[Candidate] = []
    for c in candidates:
        d = domain_of(c.url)
        if not d or d in seen:
            continue
        seen.add(d)
        deduped.append(c)
    return deduped[: cfg.max_per_source]


def fetch_pricing_text(cfg, url: str) -> str:
    page = fetch_page(cfg, url.rstrip("/") + "/pricing")
    return page.get("text", "") if page.get("ok") else ""


def main() -> int:
    parser = argparse.ArgumentParser(description="AI Tool Directory ingester")
    parser.add_argument("--source", choices=["all", "github", "producthunt"], default="all")
    parser.add_argument("--limit", type=int, default=None, help="max candidates this run")
    parser.add_argument("--status", choices=["pending", "live"], default="pending",
                        help="status for newly inserted tools")
    parser.add_argument("--no-enrich", action="store_true", help="disable Claude extraction")
    parser.add_argument("--no-crawl", action="store_true", help="skip per-tool homepage crawl")
    parser.add_argument("--dry-run", action="store_true", help="discover only; write nothing")
    args = parser.parse_args()

    cfg = load_config(default_status=args.status, enrich=not args.no_enrich,
                      max_per_source=args.limit)

    if not cfg.database_url:
        print("✗ DATABASE_URL is not set.", file=sys.stderr)
        return 1

    backend = "Firecrawl" if cfg.firecrawl_api_key else "Crawl4AI/httpx"
    print("AI Tool Directory — ingest")
    print(f"  crawler backend : {backend}")
    print(f"  extraction      : {'Claude (' + cfg.anthropic_model + ')' if (cfg.enrich and cfg.has_claude) else 'heuristic'}")
    print(f"  new-tool status : {args.status}")
    print(f"  max per source  : {cfg.max_per_source}")
    print()

    print("Discovering candidates…")
    candidates = gather(cfg, args.source)
    print(f"→ {len(candidates)} unique candidate tools after dedupe\n")

    if args.dry_run:
        for c in candidates[:25]:
            print(f"  [{c.source}] {c.name} — {c.url}")
        if len(candidates) > 25:
            print(f"  … and {len(candidates) - 25} more")
        print("\n(dry run — nothing written)")
        return 0

    conn = connect(cfg.database_url)
    try:
        cat_map = ensure_categories(conn, CATEGORIES)
        by_domain, by_name, slugs = load_existing(conn)
        print(f"Existing listings: {len(slugs)} ({len(by_domain)} domains)\n")

        inserted = updated = failed = 0
        for i, c in enumerate(candidates, 1):
            d = domain_of(c.url)
            nkey = normalize_name(c.name)
            try:
                existing = by_domain.get(d) or by_name.get(nkey)
                if existing:
                    touch_listing(conn, existing["id"], {
                        "tagline": c.source_description,
                        "description_md": c.source_description,
                    })
                    updated += 1
                    print(f"  [{i}/{len(candidates)}] ~ {c.name} (exists, refreshed)")
                    continue

                page: dict = {}
                pricing_text = ""
                if not args.no_crawl:
                    page = fetch_page(cfg, c.url)
                    pricing_text = fetch_pricing_text(cfg, c.url)
                html = page.get("html", "")

                enriched = enrich(cfg, {
                    "name": c.name,
                    "url": c.url,
                    "source_description": c.source_description,
                    "page_text": page.get("text", ""),
                    "pricing_text": pricing_text,
                })
                has_aff, network = detect_affiliate(html) if html else (False, None)

                slug = unique_slug(c.name or d, slugs)
                listing = {
                    "slug": slug,
                    "name": c.name,
                    "website_url": c.url,
                    "affiliate_network": network,
                    "source": f"ingest:{c.source}",
                    **enriched,
                }
                new_id = insert_listing(conn, listing, cat_map, args.status)
                by_domain[d] = {"id": new_id, "slug": slug}
                if nkey:
                    by_name[nkey] = {"id": new_id, "slug": slug}
                inserted += 1
                aff = f" · affiliate:{network or 'detected'}" if has_aff else ""
                print(f"  [{i}/{len(candidates)}] + {c.name} → {enriched['category_slug']}{aff}")
            except Exception as e:  # noqa: BLE001
                failed += 1
                print(f"  [{i}/{len(candidates)}] ✗ {c.name}: {e}")

        conn.commit()
        total = count_listings(conn)
        print(f"\n✓ Done. inserted={inserted} updated={updated} failed={failed}")
        print(f"  Total listings in DB: {total}")
        return 0
    finally:
        conn.close()


if __name__ == "__main__":
    raise SystemExit(main())

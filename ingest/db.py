"""Postgres I/O for the ingester (psycopg 3).

Idempotent by design:
  * categories are upserted by slug,
  * an existing tool (matched by domain) gets last_checked_at refreshed and any
    NULL content fields back-filled — never clobbering curated data,
  * new tools are inserted with a unique slug and the configured status.
"""
from __future__ import annotations

import psycopg

from normalize import domain_of, normalize_name, slugify


def connect(dsn: str) -> psycopg.Connection:
    return psycopg.connect(dsn, autocommit=False)


def ensure_categories(conn: psycopg.Connection, categories: list[dict]) -> dict[str, int]:
    with conn.cursor() as cur:
        for c in categories:
            cur.execute(
                """
                INSERT INTO categories (slug, name)
                VALUES (%s, %s)
                ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
                """,
                (c["slug"], c["name"]),
            )
        cur.execute("SELECT slug, id FROM categories")
        return {row[0]: row[1] for row in cur.fetchall()}


def load_existing(
    conn: psycopg.Connection,
) -> tuple[dict[str, dict], dict[str, dict], set[str]]:
    """Return (domain -> {id,slug}), (normalized-name -> {id,slug}), and all slugs."""
    by_domain: dict[str, dict] = {}
    by_name: dict[str, dict] = {}
    slugs: set[str] = set()
    with conn.cursor() as cur:
        cur.execute("SELECT id, slug, name, website_url FROM listings")
        for lid, slug, name, url in cur.fetchall():
            slugs.add(slug)
            d = domain_of(url)
            if d and d not in by_domain:
                by_domain[d] = {"id": lid, "slug": slug}
            n = normalize_name(name)
            if n and n not in by_name:
                by_name[n] = {"id": lid, "slug": slug}
    return by_domain, by_name, slugs


def unique_slug(base: str, taken: set[str]) -> str:
    base = slugify(base)
    slug = base
    n = 2
    while slug in taken:
        slug = f"{base}-{n}"
        n += 1
    taken.add(slug)
    return slug


def touch_listing(conn: psycopg.Connection, listing_id: int, fields: dict) -> None:
    """Refresh last_checked_at and back-fill any NULL content fields."""
    with conn.cursor() as cur:
        cur.execute(
            """
            UPDATE listings SET
                last_checked_at = now(),
                updated_at      = now(),
                tagline         = COALESCE(tagline, %s),
                description_md  = COALESCE(description_md, %s),
                pricing_text    = COALESCE(pricing_text, %s),
                affiliate_network = COALESCE(affiliate_network, %s)
            WHERE id = %s
            """,
            (
                fields.get("tagline") or None,
                fields.get("description_md") or None,
                fields.get("pricing_text") or None,
                fields.get("affiliate_network") or None,
                listing_id,
            ),
        )


def insert_listing(
    conn: psycopg.Connection, listing: dict, cat_map: dict[str, int], status: str
) -> int:
    category_id = cat_map.get(listing.get("category_slug"))
    with conn.cursor() as cur:
        cur.execute(
            """
            INSERT INTO listings (
                slug, name, tagline, description_md, website_url,
                affiliate_network, category_id, use_cases, best_for, not_for,
                pricing_text, has_free_tier, tags, status, source, last_checked_at
            ) VALUES (
                %s, %s, %s, %s, %s,
                %s, %s, %s, %s, %s,
                %s, %s, %s, %s::listing_status, %s, now()
            )
            ON CONFLICT (slug) DO UPDATE SET last_checked_at = now()
            RETURNING id
            """,
            (
                listing["slug"],
                listing["name"],
                listing.get("tagline") or None,
                listing.get("description_md") or None,
                listing["website_url"],
                listing.get("affiliate_network") or None,
                category_id,
                listing.get("use_cases") or [],
                listing.get("best_for") or None,
                listing.get("not_for") or None,
                listing.get("pricing_text") or None,
                bool(listing.get("has_free_tier")),
                listing.get("tags") or [],
                status,
                listing.get("source") or "ingest",
            ),
        )
        return cur.fetchone()[0]


def count_listings(conn: psycopg.Connection) -> int:
    with conn.cursor() as cur:
        cur.execute("SELECT count(*) FROM listings")
        return int(cur.fetchone()[0])

"""Source: Product Hunt's AI topic, ranked by votes.

Requires a Product Hunt developer token (PRODUCTHUNT_TOKEN). When absent, the
source is skipped gracefully so the rest of the pipeline still runs.
Create a token at https://www.producthunt.com/v2/oauth/applications
"""
from __future__ import annotations

import httpx

from config import Config
from normalize import is_skippable, normalize_url
from sources import Candidate

_ENDPOINT = "https://api.producthunt.com/v2/api/graphql"

_QUERY = """
query AiPosts($first: Int!) {
  posts(topic: "artificial-intelligence", order: VOTES, first: $first) {
    edges {
      node {
        name
        tagline
        website
        url
      }
    }
  }
}
"""


def fetch_candidates(cfg: Config) -> list[Candidate]:
    if not cfg.producthunt_token:
        print("  · Product Hunt: skipped (set PRODUCTHUNT_TOKEN to enable)")
        return []

    try:
        resp = httpx.post(
            _ENDPOINT,
            headers={
                "Authorization": f"Bearer {cfg.producthunt_token}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json={"query": _QUERY, "variables": {"first": min(cfg.max_per_source, 50)}},
            timeout=30.0,
        )
        resp.raise_for_status()
        edges = resp.json().get("data", {}).get("posts", {}).get("edges", [])
    except Exception as e:  # noqa: BLE001
        print(f"  · Product Hunt failed: {e}")
        return []

    out: list[Candidate] = []
    seen: set[str] = set()
    for edge in edges:
        node = edge.get("node", {})
        # `website` is the maker's product URL; fall back to the PH listing url.
        url = node.get("website") or node.get("url") or ""
        if not url or is_skippable(url):
            continue
        canon = normalize_url(url)
        if canon in seen:
            continue
        seen.add(canon)
        out.append(
            Candidate(
                name=(node.get("name") or "").strip(),
                url=canon,
                source_description=(node.get("tagline") or "").strip(),
                source="producthunt",
            )
        )
    print(f"  · Product Hunt: +{len(out)} candidates")
    return out

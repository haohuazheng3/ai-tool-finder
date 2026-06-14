"""Source: curated 'awesome-ai-tools'-style lists on GitHub.

Parses markdown bullet links of the form `- [Name](https://url) - description`
from a set of well-known community lists. No API key required.
"""
from __future__ import annotations

import re

import httpx

from config import Config
from normalize import is_skippable, normalize_url
from sources import Candidate, clean_markdown

AWESOME_LISTS = [
    # Tool-focused list first, then the broader generative-AI list.
    "https://raw.githubusercontent.com/mahseema/awesome-ai-tools/main/README.md",
    "https://raw.githubusercontent.com/steven2358/awesome-generative-ai/master/README.md",
]

# - [Name](https://example.com) — description    (also handles *, and :/-/— separators)
_LINK_RE = re.compile(r"^\s*[-*]\s*\[([^\]]+)\]\((https?://[^)\s]+)\)\s*[—\-:|]*\s*(.*)$")


def fetch_candidates(cfg: Config) -> list[Candidate]:
    out: list[Candidate] = []
    seen: set[str] = set()

    for list_url in AWESOME_LISTS:
        try:
            resp = httpx.get(list_url, timeout=20.0, follow_redirects=True)
            resp.raise_for_status()
            text = resp.text
        except Exception as e:  # noqa: BLE001
            print(f"  · github list failed ({list_url}): {e}")
            continue

        count_before = len(out)
        for line in text.splitlines():
            m = _LINK_RE.match(line)
            if not m:
                continue
            name = clean_markdown(m.group(1))
            url = m.group(2).strip()
            desc = clean_markdown(m.group(3))
            if not name or len(name) > 60:
                continue
            if is_skippable(url):
                continue
            canon = normalize_url(url)
            if canon in seen:
                continue
            seen.add(canon)
            out.append(
                Candidate(name=name, url=canon, source_description=desc, source="github-awesome")
            )
            if len(out) >= cfg.max_per_source:
                break
        print(f"  · {list_url.split('/')[4]}: +{len(out) - count_before} candidates")
        if len(out) >= cfg.max_per_source:
            break

    return out

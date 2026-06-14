"""Structured extraction + classification.

With ANTHROPIC_API_KEY set, Claude cleans the raw crawl into structured fields
and classifies the tool. Without a key, a deterministic heuristic fills in
sensible defaults so the pipeline still runs end-to-end.
"""
from __future__ import annotations

import json
import re

from config import CATEGORIES, DEFAULT_CATEGORY, Config

_EXTRACT_SCHEMA = {
    "type": "object",
    "properties": {
        "tagline": {"type": "string", "description": "Punchy one-liner, <= 90 chars, no trailing period."},
        "description_md": {"type": "string", "description": "2-4 sentence markdown description."},
        "pricing_text": {"type": "string", "description": "Short pricing summary, e.g. 'Free tier; Pro from $20/mo'."},
        "has_free_tier": {"type": "boolean"},
        "use_cases": {"type": "array", "items": {"type": "string"}, "description": "3-6 concrete task phrases."},
        "best_for": {"type": "string", "description": "ONE sentence: who it's best for."},
        "not_for": {"type": "string", "description": "ONE sentence: who it's NOT for."},
        "tags": {"type": "array", "items": {"type": "string"}},
        "category_slug": {"type": "string", "enum": [c["slug"] for c in CATEGORIES]},
    },
    "required": ["tagline", "description_md", "has_free_tier", "use_cases", "category_slug"],
}


def _first_sentences(text: str, n: int = 2) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    parts = re.split(r"(?<=[.!?])\s+", text)
    return " ".join(parts[:n]).strip()


def classify_category(text: str) -> str:
    """Keyword-scored category pick (used when Claude is unavailable)."""
    blob = (text or "").lower()
    best, best_score = DEFAULT_CATEGORY, 0
    for c in CATEGORIES:
        score = sum(blob.count(k) for k in c["keywords"])
        if score > best_score:
            best, best_score = c["slug"], score
    return best


def _heuristic(raw: dict) -> dict:
    blob = " ".join(
        str(raw.get(k, "")) for k in ("name", "source_description", "page_text", "pricing_text")
    )
    desc = raw.get("source_description") or _first_sentences(raw.get("page_text", ""), 3)
    has_free = bool(re.search(r"\bfree\b", blob, re.I)) and "free trial" not in blob.lower()
    pricing = raw.get("pricing_text") or ("Free tier available" if has_free else "See website for pricing")
    return {
        "tagline": _first_sentences(raw.get("source_description") or desc, 1)[:90] or raw.get("name", ""),
        "description_md": desc or f"{raw.get('name','')} is an AI tool.",
        "pricing_text": pricing,
        "has_free_tier": has_free,
        "use_cases": [],
        "best_for": "",
        "not_for": "",
        "tags": [],
        "category_slug": classify_category(blob),
    }


def _via_claude(cfg: Config, raw: dict) -> dict | None:
    try:
        import anthropic
    except Exception:
        return None
    try:
        client = anthropic.Anthropic(api_key=cfg.anthropic_api_key)
        prompt = (
            "You are cleaning a raw web crawl into a structured directory entry for an AI tool. "
            "Be accurate and concise; do not invent facts. Classify it into exactly one category.\n\n"
            f"Tool name: {raw.get('name','')}\n"
            f"URL: {raw.get('url','')}\n"
            f"Source description: {raw.get('source_description','')}\n\n"
            f"Homepage text (truncated):\n{(raw.get('page_text','') or '')[:6000]}\n\n"
            f"Pricing page text (truncated):\n{(raw.get('pricing_text','') or '')[:3000]}\n"
        )
        msg = client.messages.create(
            model=cfg.anthropic_model,
            max_tokens=1024,
            tools=[{
                "name": "emit_listing",
                "description": "Emit the structured listing fields.",
                "input_schema": _EXTRACT_SCHEMA,
            }],
            tool_choice={"type": "tool", "name": "emit_listing"},
            messages=[{"role": "user", "content": prompt}],
        )
        for block in msg.content:
            if getattr(block, "type", None) == "tool_use":
                data = block.input
                if isinstance(data, str):
                    data = json.loads(data)
                return data
    except Exception as e:  # noqa: BLE001
        print(f"    · Claude extraction failed: {e}; using heuristic")
    return None


def enrich(cfg: Config, raw: dict) -> dict:
    """Return structured fields for a candidate tool."""
    result = _via_claude(cfg, raw) if (cfg.enrich and cfg.has_claude) else None
    if not result:
        result = _heuristic(raw)

    # Normalize / guard fields.
    slug = result.get("category_slug")
    if slug not in {c["slug"] for c in CATEGORIES}:
        result["category_slug"] = classify_category(
            " ".join(str(raw.get(k, "")) for k in ("name", "source_description", "page_text"))
        )
    result.setdefault("use_cases", [])
    result.setdefault("tags", [])
    result.setdefault("best_for", "")
    result.setdefault("not_for", "")
    result.setdefault("pricing_text", "See website for pricing")
    result["has_free_tier"] = bool(result.get("has_free_tier"))
    return result

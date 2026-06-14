"""Configuration + canonical taxonomy for the ingestion pipeline."""
from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

try:
    from dotenv import load_dotenv

    ROOT = Path(__file__).resolve().parent.parent
    load_dotenv(ROOT / ".env.local")
    load_dotenv(ROOT / ".env")
except Exception:  # dotenv is optional
    pass


@dataclass
class Config:
    database_url: str
    anthropic_api_key: str | None
    anthropic_model: str
    firecrawl_api_key: str | None
    producthunt_token: str | None
    max_per_source: int
    default_status: str  # "pending" | "live"
    enrich: bool

    @property
    def has_claude(self) -> bool:
        return bool(self.anthropic_api_key)


def load_config(
    *, default_status: str = "pending", enrich: bool = True, max_per_source: int | None = None
) -> Config:
    return Config(
        database_url=os.environ.get("DATABASE_URL", ""),
        anthropic_api_key=os.environ.get("ANTHROPIC_API_KEY") or None,
        anthropic_model=os.environ.get("ANTHROPIC_MODEL", "claude-opus-4-8"),
        firecrawl_api_key=os.environ.get("FIRECRAWL_API_KEY") or None,
        producthunt_token=os.environ.get("PRODUCTHUNT_TOKEN") or None,
        max_per_source=max_per_source
        or int(os.environ.get("INGEST_MAX_PER_SOURCE", "60")),
        default_status=os.environ.get("INGEST_DEFAULT_STATUS", default_status),
        enrich=enrich,
    )


# Canonical task categories — kept in sync with src/data/categories.ts.
# `keywords` drive the heuristic classifier used when Claude enrichment is off.
CATEGORIES: list[dict] = [
    {"slug": "ai-writing", "name": "AI Writing & Content",
     "keywords": ["writing", "copywriting", "content", "blog", "article", "essay", "paraphrase", "grammar"]},
    {"slug": "ai-image", "name": "AI Image Generation",
     "keywords": ["image", "art", "photo", "text-to-image", "diffusion", "illustration", "avatar", "logo image"]},
    {"slug": "ai-video", "name": "AI Video",
     "keywords": ["video", "avatar video", "editing", "clip", "animation", "text-to-video", "dubbing"]},
    {"slug": "ai-coding", "name": "AI Coding",
     "keywords": ["code", "coding", "developer", "programming", "ide", "copilot", "autocomplete", "app builder"]},
    {"slug": "ai-customer-support", "name": "AI Customer Support",
     "keywords": ["support", "customer", "helpdesk", "chatbot", "ticket", "service", "agent"]},
    {"slug": "ai-data", "name": "AI Data & Research",
     "keywords": ["data", "analytics", "analysis", "research", "spreadsheet", "sql", "insights", "bi"]},
    {"slug": "ai-marketing", "name": "AI Marketing & Sales",
     "keywords": ["marketing", "sales", "outreach", "ads", "ad creative", "lead", "crm", "email campaign"]},
    {"slug": "ai-voice", "name": "AI Voice & Audio",
     "keywords": ["voice", "speech", "tts", "text-to-speech", "audio", "transcription", "podcast", "dubbing"]},
    {"slug": "ai-productivity", "name": "AI Productivity & Meetings",
     "keywords": ["productivity", "meeting", "notes", "notetaker", "calendar", "scheduling", "tasks", "summary"]},
    {"slug": "ai-design", "name": "AI Design & Branding",
     "keywords": ["design", "branding", "logo", "ui", "mockup", "graphic", "brand"]},
    {"slug": "ai-music", "name": "AI Music",
     "keywords": ["music", "song", "soundtrack", "beat", "audio generation", "royalty-free"]},
    {"slug": "ai-assistant", "name": "AI Assistants & Chatbots",
     "keywords": ["assistant", "chatbot", "chat", "llm", "gpt", "reasoning", "general purpose"]},
    {"slug": "ai-seo", "name": "AI SEO",
     "keywords": ["seo", "search engine", "keyword", "ranking", "serp", "optimization"]},
]

CATEGORY_SLUGS = [c["slug"] for c in CATEGORIES]
DEFAULT_CATEGORY = "ai-assistant"

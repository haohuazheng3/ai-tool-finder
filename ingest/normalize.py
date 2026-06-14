"""URL / name normalization + slug helpers."""
from __future__ import annotations

import re
from urllib.parse import urlparse, urlunparse

_TRACKING_PARAMS = re.compile(r"(utm_|ref=|fbclid|gclid)", re.I)


def normalize_url(url: str) -> str:
    """Return a clean canonical URL (scheme + host + path, no query/fragment)."""
    if not url:
        return ""
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    p = urlparse(url)
    host = (p.netloc or "").lower()
    if host.startswith("www."):
        host = host[4:]
    path = p.path.rstrip("/")
    return urlunparse(("https", host, path, "", "", ""))


def domain_of(url: str) -> str:
    """Bare registrable host (sans www), lowercased."""
    if not url:
        return ""
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    host = (urlparse(url).netloc or "").lower()
    return host[4:] if host.startswith("www.") else host


def normalize_name(name: str) -> str:
    return re.sub(r"[^a-z0-9]", "", (name or "").lower())


def slugify(value: str) -> str:
    value = (value or "").lower().strip()
    value = value.replace("&", " and ")
    value = re.sub(r"['’`]", "", value)
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "tool"


# Hosts we never want as standalone "tools" (aggregators, repos, social, media).
SKIP_DOMAINS = {
    # platforms / social / repos
    "github.com", "github.blog", "raw.githubusercontent.com", "twitter.com", "x.com",
    "youtube.com", "youtu.be", "reddit.com", "medium.com", "discord.gg",
    "discord.com", "producthunt.com", "linkedin.com", "facebook.com",
    "wikipedia.org", "apps.apple.com", "play.google.com", "t.me",
    "huggingface.co", "arxiv.org", "lmsys.org", "substack.com",
    # news / media outlets
    "sequoiacap.com", "wired.com", "wsj.com", "nytimes.com", "theverge.com",
    "techcrunch.com", "forbes.com", "bloomberg.com", "ft.com", "cnbc.com",
    "venturebeat.com", "arstechnica.com", "economist.com", "theatlantic.com",
    "blogs.microsoft.com",
}

# Path segments that signal an article/blog post rather than a product homepage.
_ARTICLE_PATH = re.compile(
    r"/(blog|news|news-updates|article|articles|story|stories|posts?|research|paper|papers|"
    r"20\d\d)(/|$)",
    re.I,
)


def _looks_like_article(url: str) -> bool:
    path = urlparse(url if url.startswith("http") else "https://" + url).path
    if _ARTICLE_PATH.search(path):
        return True
    # Long hyphenated slugs are almost always article titles, not product pages.
    for segment in path.strip("/").split("/"):
        if segment.count("-") >= 4:
            return True
    return False


def is_skippable(url: str) -> bool:
    d = domain_of(url)
    if not d or "." not in d:
        return True
    if any(d == s or d.endswith("." + s) for s in SKIP_DOMAINS):
        return True
    return _looks_like_article(url)

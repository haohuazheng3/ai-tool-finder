"""Page fetching with pluggable backends.

Order of preference:
  1. Firecrawl hosted API   (if FIRECRAWL_API_KEY is set)
  2. Crawl4AI               (if the package is importable)
  3. httpx + html2text      (always-available fallback)

Returns a dict: {"html": str, "text": str, "ok": bool}.
"""
from __future__ import annotations

import httpx

from config import Config

_UA = "Mozilla/5.0 (compatible; AIToolDirectoryBot/1.0; +https://example.com/bot)"
_TIMEOUT = 20.0


def _empty() -> dict:
    return {"html": "", "text": "", "ok": False}


def _via_httpx(url: str) -> dict:
    try:
        with httpx.Client(follow_redirects=True, timeout=_TIMEOUT, headers={"User-Agent": _UA}) as c:
            r = c.get(url)
            r.raise_for_status()
            html = r.text
    except Exception as e:  # noqa: BLE001
        print(f"    · fetch failed ({url}): {e}")
        return _empty()
    try:
        import html2text

        h = html2text.HTML2Text()
        h.ignore_links = False
        h.ignore_images = True
        h.body_width = 0
        text = h.handle(html)
    except Exception:
        # crude fallback: strip tags
        from bs4 import BeautifulSoup

        text = BeautifulSoup(html, "html.parser").get_text(" ", strip=True)
    return {"html": html, "text": text[:20000], "ok": True}


def _via_firecrawl(cfg: Config, url: str) -> dict:
    try:
        with httpx.Client(timeout=60.0) as c:
            r = c.post(
                "https://api.firecrawl.dev/v1/scrape",
                headers={"Authorization": f"Bearer {cfg.firecrawl_api_key}"},
                json={"url": url, "formats": ["markdown", "html"]},
            )
            r.raise_for_status()
            data = r.json().get("data", {})
            return {
                "html": data.get("html", "") or "",
                "text": (data.get("markdown") or "")[:20000],
                "ok": True,
            }
    except Exception as e:  # noqa: BLE001
        print(f"    · firecrawl failed ({url}): {e}; falling back to httpx")
        return _via_httpx(url)


def _crawl4ai_available() -> bool:
    try:
        import crawl4ai  # noqa: F401

        return True
    except Exception:
        return False


def _via_crawl4ai(url: str) -> dict:
    try:
        import asyncio

        from crawl4ai import AsyncWebCrawler  # type: ignore

        async def _run() -> dict:
            async with AsyncWebCrawler() as crawler:
                result = await crawler.arun(url=url)
                return {
                    "html": getattr(result, "html", "") or "",
                    "text": (getattr(result, "markdown", "") or "")[:20000],
                    "ok": bool(getattr(result, "success", True)),
                }

        return asyncio.run(_run())
    except Exception as e:  # noqa: BLE001
        print(f"    · crawl4ai failed ({url}): {e}; falling back to httpx")
        return _via_httpx(url)


def fetch_page(cfg: Config, url: str) -> dict:
    if not url:
        return _empty()
    if cfg.firecrawl_api_key:
        return _via_firecrawl(cfg, url)
    if _crawl4ai_available():
        return _via_crawl4ai(url)
    return _via_httpx(url)

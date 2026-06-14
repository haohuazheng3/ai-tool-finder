"""Detect whether a tool runs an affiliate / partner program.

Heuristics:
  * Footer/nav links whose text says Affiliate / Partners / Referral.
  * Outbound links to known affiliate-network domains.
The affiliateUrl itself is left for a human to fill in /admin once they join the
program — here we only record whether a program likely exists and which network.
"""
from __future__ import annotations

import re

from bs4 import BeautifulSoup

# network domain fragment -> canonical network name
_NETWORKS = {
    "rewardful.com": "Rewardful",
    "getrewardful.com": "Rewardful",
    "firstpromoter.com": "FirstPromoter",
    "fprt.io": "FirstPromoter",
    "partnerstack.com": "PartnerStack",
    "impact.com": "Impact",
    "impactradius": "Impact",
    "refersion.com": "Refersion",
    "tapfiliate.com": "Tapfiliate",
    "reditus": "Reditus",
    "getreditus.com": "Reditus",
    "leaddyno.com": "LeadDyno",
    "post-affiliate-pro": "Post Affiliate Pro",
    "shareasale.com": "ShareASale",
    "cj.com": "CJ Affiliate",
    "partnero.com": "Partnero",
}

_LINK_TEXT = re.compile(r"\b(affiliate|affiliates|partners?|referral|become a partner)\b", re.I)


def detect_affiliate(html: str) -> tuple[bool, str | None]:
    """Return (has_program, network_name_or_None)."""
    if not html:
        return False, None

    # 1) Known network domains anywhere in the markup.
    lower = html.lower()
    for fragment, network in _NETWORKS.items():
        if fragment in lower:
            return True, network

    # 2) Affiliate/partner link text.
    try:
        soup = BeautifulSoup(html, "html.parser")
    except Exception:
        return False, None

    for a in soup.find_all("a"):
        text = (a.get_text(" ", strip=True) or "")
        href = (a.get("href") or "")
        if _LINK_TEXT.search(text) or _LINK_TEXT.search(href):
            # Ignore generic "partners" that are clearly integrations pages? Keep simple: flag it.
            return True, None

    return False, None

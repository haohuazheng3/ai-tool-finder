"""Candidate discovery sources."""
from __future__ import annotations

import re
from dataclasses import dataclass


@dataclass
class Candidate:
    name: str
    url: str
    source_description: str
    source: str


_MD_LINK = re.compile(r"!?\[([^\]]*)\]\([^)]*\)")
_MD_IMG = re.compile(r"<img[^>]*>")
_MD_TOKENS = re.compile(r"[`*_~]+")


def clean_markdown(text: str) -> str:
    """Strip badges/links/formatting from a markdown fragment for plain prose."""
    if not text:
        return ""
    text = _MD_IMG.sub("", text)
    text = _MD_LINK.sub(r"\1", text)
    text = _MD_TOKENS.sub("", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip(" -–—:·.")

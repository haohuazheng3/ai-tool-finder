# Ingestion pipeline

Crawls curated sources, extracts/cleans structured fields with Claude (or a
heuristic fallback), detects affiliate programs, dedupes by domain **and** name,
and upserts into the same Postgres the web app reads from.

## Run it

```bash
# from the repo root, with DATABASE_URL set (in .env.local)
python3 -m venv ingest/.venv
ingest/.venv/bin/pip install -r ingest/requirements.txt

# discover only, write nothing
ingest/.venv/bin/python ingest/run.py --dry-run

# real run: GitHub awesome-lists, 40 tools, inserted as `pending`
ingest/.venv/bin/python ingest/run.py --source github --limit 40

# enrich with Claude + crawl pricing pages, publish straight to `live`
ANTHROPIC_API_KEY=sk-... ingest/.venv/bin/python ingest/run.py --status live --limit 80
```

## Flags

| Flag | Default | Meaning |
|------|---------|---------|
| `--source {all,github,producthunt}` | `all` | Which sources to pull from |
| `--limit N` | env `INGEST_MAX_PER_SOURCE` (60) | Max candidates this run |
| `--status {pending,live}` | `pending` | Status for newly inserted tools |
| `--no-enrich` | off | Disable Claude extraction (heuristic only) |
| `--no-crawl` | off | Skip per-tool homepage crawl (faster) |
| `--dry-run` | off | Discover only; write nothing |

## How it works

1. **Sources** (`sources/`) — Product Hunt's AI topic (needs `PRODUCTHUNT_TOKEN`)
   and GitHub `awesome-ai-tools`-style lists (no key needed). Article/news links
   and media domains are filtered out.
2. **Crawl** (`crawl.py`) — Firecrawl → Crawl4AI → `httpx` fallback, auto-detected.
3. **Extract** (`extract.py`) — Claude tool-use returns structured fields and the
   task category; without a key, a keyword classifier + first-sentence heuristic
   fills in defaults.
4. **Affiliate** (`affiliate.py`) — scans page markup for known networks
   (Rewardful, FirstPromoter, PartnerStack, Impact, …) and Affiliate/Partners
   links; records `affiliateNetwork`. The actual `affiliateUrl` is filled in via
   `/admin` once you've joined the program.
5. **Dedupe + upsert** (`db.py`) — existing tools (matched by domain or name) get
   `last_checked_at` refreshed and NULL fields back-filled; new tools are inserted
   with a unique slug. Curated content, featured flags, and affiliate URLs are
   never clobbered.

## Environment

`DATABASE_URL` (required), `ANTHROPIC_API_KEY` + `ANTHROPIC_MODEL` (optional, for
Claude), `FIRECRAWL_API_KEY` (optional crawler), `PRODUCTHUNT_TOKEN` (optional
source), `INGEST_MAX_PER_SOURCE`, `INGEST_DEFAULT_STATUS`.

Scheduled weekly via `.github/workflows/weekly-ingest.yml`.

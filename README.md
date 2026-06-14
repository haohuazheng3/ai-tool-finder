# AI Tool Finder — a task-organized AI tools directory

A production-grade directory of AI tools, organized by **the job a visitor is trying
to get done** (write, design, code, support customers…) rather than an A–Z dump.
Built to monetize from day one: every visit button is affiliate-first and logged,
and tools can buy a self-serve **Featured** placement via Stripe.

> **Why task-oriented?** Generic mega-directories are saturated. Visitors who arrive
> ready to *choose a tool for a specific job* have high purchase intent — which is
> exactly who affiliate and sponsorship revenue depends on.

## Features

- **Task-first browsing** — categories, `/best/[task]` ranked guides, and `X vs Y`
  comparison pages are first-class, SEO-optimized product surfaces.
- **Affiliate-first monetization** — visit buttons route through `/api/go/[id]`,
  which logs an outbound click then 302s to the affiliate URL (falling back to the
  website), with `rel="sponsored nofollow"`.
- **Self-serve Featured placements** — Stripe Checkout subscription → webhook flips
  the listing to featured (top placement + “Sponsored” badge) for the paid window.
- **Submit & review loop** — `/submit` (Clerk-gated) → `submissions` → `/admin`
  approval creates the live listing.
- **Built-in SEO** — dynamic per-page metadata + OpenGraph images, `sitemap.xml`
  (every listing/category/best/vs page), `robots.txt`, `SoftwareApplication`
  JSON-LD, canonicals, and daily ISR.
- **Real data** — ships with **140 curated, real AI tools** across 13 categories,
  plus a Python ingester (Crawl4AI/Firecrawl + Claude) that refreshes weekly.
- **Graceful degradation** — browsing needs no login; the site builds and runs with
  only `DATABASE_URL`. Clerk, Stripe, and Plausible activate when their keys exist.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind + shadcn/ui · Neon Postgres + Drizzle
ORM · Clerk (auth for `/submit` + `/admin`) · Stripe (Featured subscriptions) ·
Plausible · Vercel · Python ingester (Crawl4AI/Firecrawl + Anthropic Claude).

---

## Quick start (local)

```bash
# 1. Install
npm install

# 2. Configure env — at minimum DATABASE_URL
cp .env.example .env.local
#   For a quick local DB:
#   docker run -d --name aitool-pg -e POSTGRES_PASSWORD=postgres \
#     -e POSTGRES_USER=postgres -e POSTGRES_DB=ai_directory -p 5432:5432 postgres:16-alpine
#   then set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ai_directory

# 3. Migrate + seed (140 real tools, 13 categories)
npm run db:migrate
npm run db:seed

# 4. Run
npm run dev          # http://localhost:3000
```

That's it — the full directory works (home, categories, best-of, detail, vs,
search, sitemap) with no Clerk/Stripe keys. Add those when you want auth and
payments.

### Useful scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` / `build` / `start` | Next.js dev / production build / serve |
| `npm run db:generate` | Generate a Drizzle migration from the schema |
| `npm run db:migrate` | Apply migrations |
| `npm run db:seed` | Upsert the 140-tool seed dataset (idempotent) |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run typecheck` | `tsc --noEmit` |

---

## Environment variables

See [`.env.example`](.env.example). Only `DATABASE_URL` is required.

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_APP_URL` | yes (prod) | Base URL for canonicals, sitemap, OG, Stripe redirects |
| `DATABASE_URL` | **yes** | Neon (pooled) or any Postgres connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` | for auth | Clerk keys (enables `/submit`, `/admin` gating) |
| `ADMIN_EMAILS` | for admin | Comma-separated emails allowed into `/admin` |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | for payments | Stripe API + webhook signing secret |
| `NEXT_PUBLIC_STRIPE_FEATURED_PRICE_ID` | for payments | Recurring Price ID for the Featured plan |
| `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL` | for ingester | Claude extraction/classification |
| `FIRECRAWL_API_KEY` | optional | Alternative crawler for the ingester |
| `PRODUCTHUNT_TOKEN` | optional | Enables the Product Hunt source |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | optional | Plausible analytics + outbound tracking |

---

## Monetization flows

- **Affiliate clicks.** All visit CTAs point to `/api/go/[id]`. The route inserts a
  `click_events` row, then redirects to `affiliateUrl || websiteUrl`. Set affiliate
  links per tool in `/admin` once you've joined each program; `affiliateNetwork`
  is auto-detected by the ingester. Featured + non-expired listings sort to the top
  everywhere and show a “Sponsored” badge.
- **Featured (Stripe).** `/advertise` → Checkout (subscription) →
  `checkout.session.completed` webhook → listing flipped to `featured` with
  `featuredUntil = current_period_end`. `customer.subscription.updated/deleted`
  keep it in sync; the billing portal lives at `/api/stripe/portal`.

### Stripe setup

1. Create a **recurring Price** (e.g. $99/month) → put its id in
   `NEXT_PUBLIC_STRIPE_FEATURED_PRICE_ID`.
2. Add an endpoint `https://YOUR_DOMAIN/api/stripe/webhook` for events
   `checkout.session.completed`, `customer.subscription.updated`,
   `customer.subscription.deleted` → copy the signing secret to
   `STRIPE_WEBHOOK_SECRET`.
3. Local testing: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

### Clerk setup

1. Create a Clerk app; copy the publishable + secret keys.
2. Set `ADMIN_EMAILS` to the addresses allowed into `/admin`.
3. Sign-in/up live at `/sign-in` and `/sign-up`. Without Clerk keys, `/submit`
   accepts anonymous submissions and `/admin` is open **for local dev only** —
   configure Clerk before deploying publicly.

---

## Data ingestion

The seed gives you 140 real tools immediately. To keep the directory growing, the
[`ingest/`](ingest/) Python pipeline crawls Product Hunt + GitHub awesome-lists,
extracts/cleans fields with Claude (heuristic fallback when no key), detects
affiliate programs, dedupes, and upserts. New tools land as `pending` for review.

```bash
python3 -m venv ingest/.venv
ingest/.venv/bin/pip install -r ingest/requirements.txt
ingest/.venv/bin/python ingest/run.py --dry-run            # preview
ingest/.venv/bin/python ingest/run.py --source github --limit 40
```

See [`ingest/README.md`](ingest/README.md) for the full flag reference. It runs
weekly via [`.github/workflows/weekly-ingest.yml`](.github/workflows/weekly-ingest.yml).

---

## Deploy to Vercel

1. **Push to GitHub**, then **Import** the repo in Vercel (framework auto-detected
   as Next.js).
2. **Provision Postgres** — create a Neon project, copy the **pooled** connection
   string.
3. **Apply the schema** once (locally, against the prod DB):
   ```bash
   DATABASE_URL="postgresql://…neon…?sslmode=require" npm run db:migrate
   DATABASE_URL="postgresql://…neon…?sslmode=require" npm run db:seed
   ```
4. **Set environment variables** in Vercel → Project → Settings → Environment
   Variables (everything from the table above; set `NEXT_PUBLIC_APP_URL` to your
   production URL).
5. **Deploy.** Add the Stripe webhook endpoint and Clerk allowed origins for the
   production domain.
6. **(Optional) weekly ingest** — add `DATABASE_URL`, `ANTHROPIC_API_KEY`, etc. as
   GitHub Actions secrets so the scheduled job can refresh data. Add a Vercel
   **Deploy Hook** as `VERCEL_DEPLOY_HOOK_URL` to rebuild ISR pages after each run.

> Migrations are intentionally **not** run during the Vercel build (build env may
> not reach the DB). Run `db:migrate` from your machine or a CI step.

---

## Project structure

```
src/
  app/
    page.tsx                  Home (hero search, featured, categories, latest)
    category/[slug]/          Task category + filters
    best/[task]/              Ranked "Best X" guide
    [slug]/                   Listing detail  +  "a-vs-b" comparison (same route)
    search/                   Keyword + tag/free/category filtering
    advertise/                Stripe Checkout for Featured  (+ /success)
    submit/                   Submit/claim a tool (Clerk-gated)
    admin/                    Review submissions, toggle featured, see clicks
    api/go/[id]/              Affiliate-first outbound redirect + click logging
    api/stripe/{checkout,webhook,portal}/
    api/og/                   Dynamic OpenGraph image
    sitemap.ts  robots.ts
  components/                 UI (shadcn) + listing card, filters, compare table…
  lib/
    db/  schema.ts queries.ts admin-queries.ts seed.ts migrate.ts
    seo.ts env.ts auth.ts stripe.ts featured.ts slug.ts
  data/  categories.ts  seed-listings.ts   (140 curated tools)
ingest/                       Python ingestion pipeline
drizzle/                      Generated SQL migrations
```

## Data model (Drizzle)

`categories`, `listings` (the core unit — content, affiliate, featured, Stripe
linkage, status), `click_events` (proof-of-traffic), `submissions`
(review queue). See [`src/lib/db/schema.ts`](src/lib/db/schema.ts).

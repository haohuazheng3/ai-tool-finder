#!/usr/bin/env node
/**
 * Weekly Google Search Console report → action list.
 *
 * Pulls the last 28 days of Search Analytics and buckets queries into:
 *   • Title/meta fixes  — high impressions, low CTR
 *   • Near page-1 wins  — impressions at position 11–30 (improve content + internal links)
 *   • Build/expand page — high-impression queries with no clicks (demand we're not capturing)
 * Plus top pages and overall totals.
 *
 * Env: GOOGLE_SERVICE_ACCOUNT_JSON (service-account JSON string), SITE_URL (default https://toolsbytask.com/).
 * Output: markdown to stdout and, in CI, to $GITHUB_STEP_SUMMARY.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'

const SITE_URL = process.env.SITE_URL || 'https://toolsbytask.com/'
const saRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
if (!saRaw) { console.error('GOOGLE_SERVICE_ACCOUNT_JSON not set'); process.exit(1) }
const sa = JSON.parse(saRaw)

const b64url = (x) => Buffer.from(x).toString('base64url')

async function accessToken() {
  const now = Math.floor(Date.now() / 1000)
  const unsigned = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' })) + '.' +
    b64url(JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: sa.token_uri, iat: now, exp: now + 3600 }))
  const sign = crypto.createSign('RSA-SHA256'); sign.update(unsigned); sign.end()
  const jwt = unsigned + '.' + sign.sign(sa.private_key).toString('base64url')
  const r = await fetch(sa.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }) })
  const j = await r.json()
  if (!j.access_token) throw new Error('token: ' + JSON.stringify(j))
  return j.access_token
}

async function query(at, body) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`, {
    method: 'POST', headers: { Authorization: `Bearer ${at}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  })
  const j = await r.json()
  if (j.error) throw new Error(JSON.stringify(j.error))
  return j.rows || []
}

const d = (off) => new Date(Date.now() - off * 86400000).toISOString().slice(0, 10)

async function main() {
  const at = await accessToken()
  const startDate = d(28), endDate = d(2)
  const [byQuery, byPage] = await Promise.all([
    query(at, { startDate, endDate, dimensions: ['query'], rowLimit: 500 }),
    query(at, { startDate, endDate, dimensions: ['page'], rowLimit: 100 }),
  ])

  const lines = []
  const out = (s = '') => lines.push(s)
  out(`# GSC report — ${SITE_URL}`)
  out(`_${startDate} → ${endDate}_`)
  out('')
  const totalImpr = byQuery.reduce((n, r) => n + r.impressions, 0)
  const totalClicks = byQuery.reduce((n, r) => n + r.clicks, 0)
  out(`**Totals:** ${totalImpr} impressions · ${totalClicks} clicks · ${byQuery.length} queries · ${byPage.length} pages`)
  out('')

  if (!byQuery.length) {
    out('_No Search Console data yet — a brand-new site takes days–weeks to accrue impressions. This task will produce an action list once data arrives._')
  } else {
    const titleFix = byQuery.filter((r) => r.impressions >= 20 && r.ctr < 0.02).sort((a, b) => b.impressions - a.impressions).slice(0, 20)
    const nearWin = byQuery.filter((r) => r.position > 10 && r.position <= 30 && r.impressions >= 10).sort((a, b) => b.impressions - a.impressions).slice(0, 20)
    const buildPage = byQuery.filter((r) => r.impressions >= 30 && r.clicks === 0).sort((a, b) => b.impressions - a.impressions).slice(0, 20)

    const tbl = (rows) => { out('| query | impr | clicks | ctr | pos |'); out('|---|--:|--:|--:|--:|'); rows.forEach((r) => out(`| ${r.keys[0]} | ${r.impressions} | ${r.clicks} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} |`)) }

    out('## ✍️ Fix titles/meta (high impressions, low CTR)'); titleFix.length ? tbl(titleFix) : out('_none_'); out('')
    out('## 🎯 Near page-1 — improve content + internal links (pos 11–30)'); nearWin.length ? tbl(nearWin) : out('_none_'); out('')
    out('## 🆕 Build/expand a page for these (impressions, zero clicks)'); buildPage.length ? tbl(buildPage) : out('_none_'); out('')
    out('## 📄 Top pages by impressions')
    out('| page | impr | clicks | ctr | pos |'); out('|---|--:|--:|--:|--:|')
    byPage.sort((a, b) => b.impressions - a.impressions).slice(0, 20).forEach((r) => out(`| ${r.keys[0].replace(SITE_URL, '/')} | ${r.impressions} | ${r.clicks} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} |`))
  }

  const md = lines.join('\n')
  console.log(md)
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n')
}
main().catch((e) => { console.error(e); process.exit(1) })

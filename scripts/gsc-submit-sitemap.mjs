#!/usr/bin/env node
/**
 * (Re)submit the sitemap to Google Search Console so Google re-reads it after a
 * content update. Uses the service account (full `webmasters` scope) and tries
 * both the Domain property (sc-domain:…) and the URL-prefix property.
 *
 * Env: GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_B64.
 * Run:  node scripts/gsc-submit-sitemap.mjs
 */
import crypto from 'node:crypto'

const HOST = (process.env.SITE_HOST || 'toolsbytask.com').replace(/^https?:\/\//, '').replace(/\/$/, '')
const SITEMAP = `https://${HOST}/sitemap.xml`
const saRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  || (process.env.GOOGLE_SERVICE_ACCOUNT_B64 && Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_B64, 'base64').toString('utf8'))
if (!saRaw) { console.error('Set GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_B64'); process.exit(1) }
const sa = JSON.parse(saRaw)
const b64url = (x) => Buffer.from(x).toString('base64url')

async function accessToken() {
  const now = Math.floor(Date.now() / 1000)
  const unsigned = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' })) + '.' +
    b64url(JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: sa.token_uri, iat: now, exp: now + 3600 }))
  const sign = crypto.createSign('RSA-SHA256'); sign.update(unsigned); sign.end()
  const jwt = unsigned + '.' + sign.sign(sa.private_key).toString('base64url')
  const r = await fetch(sa.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }) })
  const j = await r.json()
  if (!j.access_token) throw new Error('token: ' + JSON.stringify(j))
  return j.access_token
}

async function submit(at, siteUrl) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(SITEMAP)}`
  const r = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${at}` } })
  const body = r.ok ? '' : ' — ' + (await r.text()).slice(0, 160)
  console.log(`submit ${siteUrl}: HTTP ${r.status}${r.ok ? ' ✓' : body}`)
  return r.ok
}

async function main() {
  const at = await accessToken()
  console.log(`SA: ${sa.client_email}`)
  let ok = false
  for (const site of [`sc-domain:${HOST}`, `https://${HOST}/`]) {
    try { ok = (await submit(at, site)) || ok } catch (e) { console.log(`submit ${site}: ${e.message}`) }
  }
  if (!ok) { console.error('No property accepted the sitemap (SA may lack GSC access).'); process.exitCode = 1 }
}
main().catch((e) => { console.error(e); process.exit(1) })

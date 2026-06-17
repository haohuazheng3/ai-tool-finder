#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver…) with every live URL in the sitemap.
 *
 * IndexNow needs no account: we host the key at /<key>.txt and reference it as
 * keyLocation. The key is public by design, so it lives in the repo.
 *
 * Env: SITE_URL (default https://toolsbytask.com).
 * Run: `node scripts/indexnow-ping.mjs` (daily in CI, or manually after a deploy).
 */
const KEY = 'd54f5bcc97ad442b31202e93f1e6a43e'
const SITE = (process.env.SITE_URL || 'https://toolsbytask.com').replace(/\/$/, '')
const host = new URL(SITE).host

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean)
}

async function main() {
  const urlList = await sitemapUrls()
  if (!urlList.length) {
    console.error('No URLs found in sitemap — nothing to submit.')
    process.exit(1)
  }
  // IndexNow accepts up to 10,000 URLs per request.
  for (let i = 0; i < urlList.length; i += 10000) {
    const batch = urlList.slice(i, i + 10000)
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: batch }),
    })
    // 200/202 = accepted. 4xx tells us key/host problems.
    console.log(`IndexNow: HTTP ${res.status} for ${batch.length} URLs${res.ok ? ' ✓' : ' — ' + (await res.text()).slice(0, 200)}`)
    if (!res.ok && res.status !== 202) process.exitCode = 1
  }
  console.log(`Submitted ${urlList.length} URLs from ${SITE}/sitemap.xml`)
}
main().catch((e) => {
  console.error(e)
  process.exit(1)
})

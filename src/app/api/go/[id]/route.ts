import { NextResponse, type NextRequest } from 'next/server'
import { getListingForRedirect, recordClick } from '@/lib/db/queries'

// Needs the Postgres client, so run on Node (not Edge). Never cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Outbound click handler. Logs the click (proof-of-traffic / affiliate signal)
 * then 302-redirects to the affiliate URL when present, else the website.
 *
 * The page-level anchors that point here already carry rel="sponsored nofollow",
 * and next.config sets X-Robots-Tag: noindex for this path.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const home = new URL('/', req.url)
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.redirect(home, 302)
  }

  const listing = await getListingForRedirect(id)
  if (!listing) {
    return NextResponse.redirect(home, 302)
  }

  // Best-effort logging — must never block or break the redirect.
  const ref = req.nextUrl.searchParams.get('ref') ?? req.headers.get('referer')
  await recordClick(id, ref)

  const target = listing.affiliateUrl || listing.websiteUrl
  try {
    // Validate it's an absolute URL before redirecting.
    const url = new URL(target)
    return NextResponse.redirect(url.toString(), 302)
  } catch {
    return NextResponse.redirect(home, 302)
  }
}

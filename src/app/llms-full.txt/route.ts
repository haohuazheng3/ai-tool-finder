import { getListings } from '@/lib/db/queries'
import { SITE } from '@/lib/constants'
import { env } from '@/lib/env'
import { freeTierLabel } from '@/lib/pricing'

export const revalidate = 86400

/** llms-full.txt — one compact, attributable block per tool for AI engines to cite. */
export async function GET() {
  const tools = await getListings({ limit: 1000, sort: 'featured' })
  const out: string[] = []
  out.push(`# ${SITE.name} — full tool data`)
  out.push(`> ${tools.length} AI tools, organized by task. Each entry is honest, structured, and refreshed weekly.`)
  out.push('')
  for (const t of tools) {
    out.push(`## ${t.name}${t.category ? ` (${t.category.name})` : ''}`)
    if (t.tagline) out.push(t.tagline)
    out.push(`- URL: ${env.appUrl}/${t.slug}`)
    out.push(`- Website: ${t.websiteUrl}`)
    out.push(`- Pricing: ${t.pricingText ?? 'n/a'} — ${freeTierLabel(t)}`)
    if (t.bestFor) out.push(`- Best for: ${t.bestFor}`)
    if (t.notFor) out.push(`- Not for: ${t.notFor}`)
    if (t.useCases.length) out.push(`- Use cases: ${t.useCases.join(', ')}`)
    out.push('')
  }
  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
  })
}

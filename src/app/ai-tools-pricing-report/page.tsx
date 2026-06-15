import Link from 'next/link'
import type { Metadata } from 'next'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { getPricingReport } from '@/lib/db/seo-queries'
import { SITE } from '@/lib/constants'
import { absoluteUrl } from '@/lib/env'
import { breadcrumbLd, buildMetadata } from '@/lib/seo'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'AI Tool Pricing & Free-Tier Index (2026 Data)',
    description: 'Original data: what % of AI tools have a free tier, median starting prices by category, and the cheapest tool in each AI category — across our full catalog.',
    path: '/ai-tools-pricing-report',
    ogSubtitle: 'Original pricing & free-tier data',
  })
}

function Bar({ pct }: { pct: number }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-muted">
      <div className="h-2.5 rounded-full bg-primary" style={{ width: `${Math.max(2, pct)}%` }} />
    </div>
  )
}

export default async function PricingReportPage() {
  const r = await getPricingReport()
  const topFree = [...r.categories].sort((a, b) => b.freePct - a.freePct)[0]
  const cheapestOverall = r.categories
    .map((c) => c.cheapest)
    .filter((x): x is NonNullable<typeof x> => !!x)
    .sort((a, b) => a.price - b.price)[0]

  const faqs: Faq[] = [
    { q: 'What percentage of AI tools have a free tier?', a: `${r.freePct}% of the ${r.totalTools} AI tools we track offer a free tier or free plan.` },
    { q: 'What is the median price of a paid AI tool?', a: r.overallMedian ? `The median starting price across paid AI tools is about $${r.overallMedian}/month.` : 'Pricing varies widely by category.' },
    { q: 'Which AI category has the most free tools?', a: topFree ? `${topFree.name} — ${topFree.freePct}% of tools there offer a free tier.` : 'Free-tier availability varies by category.' },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'AI Tool Pricing Index', path: '/ai-tools-pricing-report' }]),
        {
          '@context': 'https://schema.org', '@type': 'Dataset',
          name: 'AI Tool Pricing & Free-Tier Index',
          description: `Aggregate pricing and free-tier statistics across ${r.totalTools} AI tools, by task category.`,
          url: absoluteUrl('/ai-tools-pricing-report'),
          creator: { '@type': 'Organization', name: SITE.name },
          isAccessibleForFree: true,
        },
      ]} />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span className="text-foreground">Pricing Index</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Tool Pricing &amp; Free-Tier Index (2026)</h1>
      <AnswerCapsule>
        Across {r.totalTools} AI tools we track, <strong>{r.freePct}% offer a free tier</strong>
        {r.overallMedian ? <>, and the median paid starting price is <strong>${r.overallMedian}/mo</strong></> : null}.
        {topFree ? <> {topFree.name} is the most free-friendly category ({topFree.freePct}% free)</> : null}
        {cheapestOverall ? <>; the cheapest tracked tool is {cheapestOverall.name} at ${cheapestOverall.price}/mo.</> : '.'}
      </AnswerCapsule>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Tools tracked', value: r.totalTools },
          { label: 'Offer a free tier', value: `${r.freePct}%` },
          { label: 'Median price', value: r.overallMedian ? `$${r.overallMedian}/mo` : '—' },
          { label: 'Categories', value: r.categories.length },
        ].map((s) => (
          <Card key={s.label} className="p-4">
            <div className="text-2xl font-bold tabular-nums">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold">Free-tier availability by category</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground">
              <th className="p-3">Category</th>
              <th className="p-3">Tools</th>
              <th className="p-3 w-40">% with free tier</th>
              <th className="p-3">Median price</th>
              <th className="p-3">Cheapest</th>
            </tr>
          </thead>
          <tbody>
            {r.categories.map((c) => (
              <tr key={c.slug} className="border-b align-middle last:border-0">
                <td className="p-3"><Link href={`/best/${c.slug}/free`} className="font-medium hover:underline">{c.name}</Link></td>
                <td className="p-3 tabular-nums">{c.total}</td>
                <td className="p-3"><div className="flex items-center gap-2"><Bar pct={c.freePct} /><span className="tabular-nums text-xs text-muted-foreground">{c.freePct}%</span></div></td>
                <td className="p-3 tabular-nums">{c.medianPrice ? `$${c.medianPrice}/mo` : '—'}</td>
                <td className="p-3">{c.cheapest ? <Link href={`/${c.cheapest.slug}`} className="hover:underline">{c.cheapest.name} (${c.cheapest.price})</Link> : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="mt-8 p-5">
        <h2 className="text-base font-semibold">Cite this data</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Data from {SITE.name}, refreshed regularly. Citation:
        </p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs">
{`${SITE.name}, "AI Tool Pricing & Free-Tier Index" (2026), ${absoluteUrl('/ai-tools-pricing-report')}`}
        </pre>
      </Card>

      <FaqSection faqs={faqs} />
    </div>
  )
}

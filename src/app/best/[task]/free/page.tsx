import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { ToolRankList } from '@/components/tool-rank-list'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug } from '@/lib/db/queries'
import { getFreeListings } from '@/lib/db/seo-queries'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((task) => ({ task }))
}

function staticCat(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

export async function generateMetadata({ params }: { params: { task: string } }): Promise<Metadata> {
  const cat = (await getCategoryBySlug(params.task)) ?? staticCat(params.task)
  if (!cat) return {}
  const name = cat.name.replace(/^AI /, '')
  return buildMetadata({
    title: `Best Free AI ${name} Tools (2026)`,
    description: `The best genuinely free AI ${name.toLowerCase()} tools — ranked, with real free-tier limits, pricing, and who each is best for.`,
    path: `/best/${params.task}/free`,
    ogSubtitle: 'Free tools with honest free-tier limits',
  })
}

export default async function BestFreePage({ params }: { params: { task: string } }) {
  const cat = (await getCategoryBySlug(params.task)) ?? staticCat(params.task)
  if (!cat) notFound()
  const tools = await getFreeListings(params.task, 20)
  // Quality gate: don't ship a thin "free" page.
  if (tools.length < 3) notFound()

  const name = cat.name.replace(/^AI /, '')
  const top = tools[0]
  const names = tools.slice(0, 3).map((t) => t.name).join(', ')
  const headline = `Best Free AI ${name} Tools`

  const faqs: Faq[] = [
    { q: `What is the best free AI ${name.toLowerCase()} tool?`, a: `${top.name} is our top free pick — ${top.bestFor ?? top.tagline ?? 'it offers a capable free tier.'}` },
    { q: `Are there genuinely free AI ${name.toLowerCase()} tools?`, a: `Yes — ${tools.length} ${cat.name.toLowerCase()} tools in our directory offer a free tier or free plan, including ${names}. Check each tool's free-tier limits before committing.` },
    { q: `Do free AI ${name.toLowerCase()} tools have limits?`, a: `Almost always. Free tiers typically cap usage, features, or output quality. We list each tool's pricing so you can see where the free plan ends and paid begins.` },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: cat.name, path: `/category/${params.task}` },
          { name: 'Free', path: `/best/${params.task}/free` },
        ]),
        itemListLd(tools, headline),
      ]} />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/category/${params.task}`} className="hover:text-foreground">{cat.name}</Link> /{' '}
        <span className="text-foreground">Best Free</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline} (2026)</h1>
      <AnswerCapsule>
        The best free AI {name.toLowerCase()} tool is <strong>{top.name}</strong>
        {top.bestFor ? ` — ${top.bestFor.replace(/\.$/, '')}.` : '.'} {tools.length} {cat.name.toLowerCase()} tools
        in our directory offer a free tier, including {names}. Each entry below shows its real free-tier limits and where paid plans start.
      </AnswerCapsule>

      <div className="mt-2 text-sm">
        <Link href={`/best/${params.task}`} className="text-primary hover:underline">See all {name} tools (incl. paid) →</Link>
      </div>

      <ToolRankList tools={tools} showFreeTier />
      <FaqSection faqs={faqs} />
    </div>
  )
}

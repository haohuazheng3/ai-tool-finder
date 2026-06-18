import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { ToolRankList } from '@/components/tool-rank-list'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug } from '@/lib/db/queries'
import { getCheapestListings, MIN_CHEAPEST } from '@/lib/db/seo-queries'
import { startingPrice } from '@/lib/pricing'
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
    title: `Cheapest AI ${name} Tools (2026): Priced & Ranked`,
    description: `The cheapest AI ${name.toLowerCase()} tools ranked by real starting price — including free options — with honest pros, cons, and what each entry plan actually gets you.`,
    path: `/best/${params.task}/cheapest`,
    ogSubtitle: 'Ranked by real starting price',
  })
}

export default async function CheapestPage({ params }: { params: { task: string } }) {
  const cat = (await getCategoryBySlug(params.task)) ?? staticCat(params.task)
  if (!cat) notFound()
  const tools = await getCheapestListings(params.task, 15)
  if (tools.length < MIN_CHEAPEST) notFound() // quality gate

  const name = cat.name.replace(/^AI /, '')
  const cheapest = tools[0]
  const cheapestPrice = startingPrice(cheapest.pricingText)
  const freeOnes = tools.filter((t) => t.hasFreeTier)
  const headline = `Cheapest AI ${name} Tools`

  const faqs: Faq[] = [
    { q: `What is the cheapest AI ${name.toLowerCase()} tool?`, a: `${cheapest.name}${cheapestPrice ? ` starts at about $${cheapestPrice}/mo` : ''} — ${cheapest.bestFor ?? cheapest.tagline ?? 'the lowest entry price in this category.'}${freeOnes.length ? ` If you want $0, ${freeOnes.slice(0, 3).map((t) => t.name).join(', ')} offer a free tier.` : ''}` },
    { q: `Are there free AI ${name.toLowerCase()} tools?`, a: freeOnes.length ? `Yes — ${freeOnes.length} of the tools here offer a free tier, including ${freeOnes.slice(0, 3).map((t) => t.name).join(', ')}. Check each one's limits before relying on it.` : `Most ${name.toLowerCase()} tools here are paid; the cheapest entry plan is ${cheapest.name}${cheapestPrice ? ` at ~$${cheapestPrice}/mo` : ''}.` },
    { q: `Does cheapest mean worst?`, a: `Not necessarily — but the trade-offs are real, which is why each tool below lists what it's NOT good for. The lowest price often means tighter limits or fewer features, so match the plan to your actual volume.` },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: cat.name, path: `/category/${params.task}` },
          { name: 'Cheapest', path: `/best/${params.task}/cheapest` },
        ]),
        itemListLd(tools, headline),
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/category/${params.task}`} className="hover:text-foreground">{cat.name}</Link> /{' '}
        <span className="text-foreground">Cheapest</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline} (2026)</h1>
      <AnswerCapsule>
        The cheapest AI {name.toLowerCase()} tool is <strong>{cheapest.name}</strong>
        {cheapestPrice ? ` at about $${cheapestPrice}/mo` : ''}{cheapest.bestFor ? ` — ${cheapest.bestFor.replace(/\.$/, '')}.` : '.'}{' '}
        {freeOnes.length ? <>For $0, {freeOnes.slice(0, 3).map((t) => t.name).join(', ')} have free tiers.</> : null}{' '}
        Below are the {tools.length} lowest-priced options, ranked by real starting price, each with the catch shown.
      </AnswerCapsule>

      <div className="mt-2 flex flex-wrap gap-3 text-sm">
        <Link href={`/best/${params.task}`} className="text-primary hover:underline">All {name} tools (by quality) →</Link>
        <Link href={`/best/${params.task}/free`} className="text-primary hover:underline">Best free {name} tools →</Link>
      </div>

      <ToolRankList tools={tools} showFreeTier />
      <FaqSection faqs={faqs} />
    </div>
  )
}

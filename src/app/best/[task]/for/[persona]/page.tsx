import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { ToolRankList } from '@/components/tool-rank-list'
import { CATEGORIES } from '@/data/categories'
import { getPersona } from '@/data/personas'
import { getCategoryBySlug } from '@/lib/db/queries'
import { getPersonaListings, getQualifyingPersonaPairs } from '@/lib/db/seo-queries'
import { MIN_PERSONA_TOOLS } from '@/data/personas'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export async function generateStaticParams() {
  return getQualifyingPersonaPairs()
}

function staticCat(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

export async function generateMetadata({
  params,
}: {
  params: { task: string; persona: string }
}): Promise<Metadata> {
  const cat = (await getCategoryBySlug(params.task)) ?? staticCat(params.task)
  const persona = getPersona(params.persona)
  if (!cat || !persona) return {}
  const name = cat.name.replace(/^AI /, '')
  return buildMetadata({
    title: `Best AI ${name} Tools for ${persona.label} (2026)`,
    description: `The best AI ${name.toLowerCase()} tools for ${persona.label.toLowerCase()} — ranked for ${persona.blurb}, with honest pros/cons and pricing.`,
    path: `/best/${params.task}/for/${params.persona}`,
    ogSubtitle: `For ${persona.label}`,
  })
}

export default async function BestForPersonaPage({
  params,
}: {
  params: { task: string; persona: string }
}) {
  const cat = (await getCategoryBySlug(params.task)) ?? staticCat(params.task)
  const persona = getPersona(params.persona)
  if (!cat || !persona || !persona.categories.includes(params.task)) notFound()

  const tools = await getPersonaListings(params.task, persona, 15)
  if (tools.length < MIN_PERSONA_TOOLS) notFound() // quality gate

  const name = cat.name.replace(/^AI /, '')
  const top = tools[0]
  const headline = `Best AI ${name} Tools for ${persona.label}`

  const faqs: Faq[] = [
    { q: `What is the best AI ${name.toLowerCase()} tool for ${persona.label.toLowerCase()}?`, a: `${top.name} — ${top.bestFor ?? top.tagline ?? 'a strong fit for this use case.'}` },
    { q: `How did you pick these tools for ${persona.label.toLowerCase()}?`, a: `We matched our ${cat.name.toLowerCase()} catalog against the real needs of ${persona.blurb}, then ranked by capability, value, and free-tier availability.` },
    { q: `Are any of these free for ${persona.label.toLowerCase()}?`, a: tools.some((t) => t.hasFreeTier) ? `Yes — ${tools.filter((t) => t.hasFreeTier).map((t) => t.name).slice(0, 3).join(', ')} offer a free tier.` : `Most options here are paid; check each tool's pricing for trials.` },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: cat.name, path: `/category/${params.task}` },
          { name: `For ${persona.label}`, path: `/best/${params.task}/for/${params.persona}` },
        ]),
        itemListLd(tools, headline),
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/best/${params.task}`} className="hover:text-foreground">Best {cat.name}</Link> /{' '}
        <span className="text-foreground">For {persona.label}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline} (2026)</h1>
      <AnswerCapsule>
        For {persona.blurb}, the best AI {name.toLowerCase()} tool is <strong>{top.name}</strong>
        {top.bestFor ? ` — ${top.bestFor.replace(/\.$/, '')}.` : '.'} Below are {tools.length} options ranked for this exact use case, with honest pros, cons, and pricing.
      </AnswerCapsule>

      <ToolRankList tools={tools} />
      <FaqSection faqs={faqs} />
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { Layers } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { STACKS } from '@/data/stacks'
import { getStackResolved } from '@/lib/db/seo-queries'
import { breadcrumbLd, buildMetadata } from '@/lib/seo'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'AI Tool Stacks: The Cheapest Setup for Each Goal',
    description:
      'Ready-made AI tool stacks for real goals — faceless YouTube, a newsletter, a Shopify store, an indie app and more. One tool per job, the real monthly cost, and a free version.',
    path: '/stacks',
    ogSubtitle: 'One tool per job · real monthly cost',
  })
}

const faqs: Faq[] = [
  { q: 'What is an AI tool stack?', a: 'A stack is the small set of AI tools you combine to get a whole job done — for example a faceless YouTube channel needs a script writer, a voice generator, a video tool, and a thumbnail maker. We pick the cheapest solid tool for each job so you do not overpay for an all-in-one.' },
  { q: 'How are the stacks priced?', a: 'Each stack page sums the real starting price of the cheapest paid tool per job, and counts how many jobs have a genuinely free option — so you see both the low-cost total and the free path.' },
  { q: 'Are these affiliate picks?', a: 'Picks are chosen by price and fit from our catalog, with each tool’s honest downsides shown. Sponsored tools are labeled on their own pages and never reordered into a stack by payment.' },
]

export default async function StacksIndex() {
  const resolved = (await Promise.all(STACKS.map((s) => getStackResolved(s.slug)))).filter(
    (x): x is NonNullable<typeof x> => !!x,
  )

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'AI tool stacks', path: '/stacks' },
      ])} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Stacks</span>
      </nav>

      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
        <Layers className="size-7 text-primary" /> AI tool stacks
      </h1>
      <AnswerCapsule>
        A stack is the handful of AI tools that together get a real goal done. For each goal below we pick the
        <strong> cheapest solid tool per job</strong>, show the <strong>real monthly total</strong>, and flag the free path —
        so you can build, say, a faceless YouTube channel without buying one bloated all-in-one.
      </AnswerCapsule>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {resolved.map(({ stack, steps, paidTotal, freeCovered }) => (
          <Card key={stack.slug} className="flex flex-col p-5">
            <Link href={`/stacks/${stack.slug}`} className="text-lg font-semibold hover:underline">
              {stack.title}
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">For {stack.audience}.</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span><span className="font-semibold tabular-nums">~${paidTotal}</span><span className="text-muted-foreground">/mo</span></span>
              <span className="text-muted-foreground">{steps.length} tools</span>
              <span className="text-muted-foreground">{freeCovered}/{steps.length} free-capable</span>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              {steps.map((s) => s.pick?.name).filter(Boolean).join(' · ')}
            </div>
            <Link href={`/stacks/${stack.slug}`} className="mt-3 text-sm font-medium text-primary hover:underline">
              See the build →
            </Link>
          </Card>
        ))}
      </div>

      <FaqSection faqs={faqs} />
    </div>
  )
}

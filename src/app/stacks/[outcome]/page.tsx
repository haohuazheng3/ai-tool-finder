import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, X, ThumbsUp, AlertTriangle } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import { STACK_SLUGS, getStack } from '@/data/stacks'
import { getStackResolved } from '@/lib/db/seo-queries'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return STACK_SLUGS.map((outcome) => ({ outcome }))
}

export async function generateMetadata({ params }: { params: { outcome: string } }): Promise<Metadata> {
  const stack = getStack(params.outcome)
  if (!stack) return {}
  return buildMetadata({
    title: `Cheapest AI Tool Stack for a ${stack.title} (2026)`,
    description: `The cheapest AI tool stack to run a ${stack.title.toLowerCase()} — one tool per job, real monthly cost, and a fully-free version. Built from honest pros/cons, not affiliate hype.`,
    path: `/stacks/${params.outcome}`,
    ogSubtitle: 'One tool per job · real monthly cost',
  })
}

export default async function StackPage({ params }: { params: { outcome: string } }) {
  const data = await getStackResolved(params.outcome)
  if (!data) notFound()
  const { stack, steps, paidTotal, freeCovered } = data
  const picks = steps.map((s) => s.pick).filter((p): p is NonNullable<typeof p> => !!p)
  if (picks.length < 2) notFound() // quality gate

  const faqs: Faq[] = [
    { q: `What AI tools do I need for a ${stack.title.toLowerCase()}?`, a: `${steps.map((s) => `${s.role.toLowerCase()} (${s.pick?.name ?? '—'})`).join(', ')}. That's ${steps.length} jobs; you don't need one expensive all-in-one.` },
    { q: `How much does an AI ${stack.title.toLowerCase()} stack cost per month?`, a: `Picking the cheapest paid tool for each job, about $${paidTotal}/mo total. ${freeCovered} of ${steps.length} jobs also have a genuinely free option, so you can start at or near $0.` },
    { q: `Can I build a ${stack.title.toLowerCase()} stack for free?`, a: freeCovered === steps.length ? `Yes — every job here has a free tier, so a fully-free stack is possible (with the usual free-tier limits).` : `Partly — ${freeCovered} of ${steps.length} jobs have a free tier. The rest have low-cost entry plans listed below.` },
  ]

  return (
    <div className="container max-w-3xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'AI tool stacks', path: '/stacks' },
          { name: stack.title, path: `/stacks/${params.outcome}` },
        ]),
        itemListLd(picks, `AI tool stack for a ${stack.title}`),
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/stacks" className="hover:text-foreground">Stacks</Link> /{' '}
        <span className="text-foreground">{stack.title}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">The cheapest AI tool stack for a {stack.title.toLowerCase()}</h1>
      <AnswerCapsule>
        Running a {stack.title.toLowerCase()} takes {steps.length} AI jobs. Pick the cheapest solid tool for each and the
        whole stack costs about <strong>${paidTotal}/mo</strong>{freeCovered > 0 ? <> — or as little as <strong>$0</strong> using the {freeCovered} free option{freeCovered === 1 ? '' : 's'}</> : ''}.
        Here's the build, with each tool's honest catch.
      </AnswerCapsule>

      <p className="mt-4 text-muted-foreground">{stack.intro}</p>

      {/* The stack table */}
      <div className="mt-6 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground">
              <th className="p-3">Job</th>
              <th className="p-3">Cheapest pick</th>
              <th className="p-3">From</th>
              <th className="p-3">Free option</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s.role} className="border-b align-top last:border-0">
                <td className="p-3 font-medium">{s.role}</td>
                <td className="p-3">
                  {s.pick ? (
                    <Link href={`/${s.pick.slug}`} className="font-medium text-primary hover:underline">{s.pick.name}</Link>
                  ) : '—'}
                  <div className="text-xs text-muted-foreground">{s.categoryName}</div>
                </td>
                <td className="p-3 tabular-nums">{s.pickPrice != null ? `$${s.pickPrice}/mo` : (s.pick?.hasFreeTier ? 'Free' : '—')}</td>
                <td className="p-3">
                  {s.free ? <Link href={`/${s.free.slug}`} className="hover:underline">{s.free.name}</Link> : <span className="text-muted-foreground">none free</span>}
                </td>
              </tr>
            ))}
            <tr className="bg-muted/30 font-semibold">
              <td className="p-3" colSpan={2}>Total to run this stack</td>
              <td className="p-3 tabular-nums" colSpan={2}>~${paidTotal}/mo &nbsp;<span className="font-normal text-muted-foreground">({freeCovered}/{steps.length} jobs free-capable)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The honest catch per pick */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">The honest catch on each pick</h2>
        <div className="mt-3 space-y-3">
          {steps.filter((s) => s.pick).map((s) => (
            <Card key={s.role} className="p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-medium">{s.role}: <Link href={`/${s.pick!.slug}`} className="text-primary hover:underline">{s.pick!.name}</Link></div>
                <VisitButton id={s.pick!.id} name={s.pick!.name} label="Visit" size="sm" />
              </div>
              {s.pick!.bestFor && (
                <p className="mt-2 flex gap-1.5 text-sm"><ThumbsUp className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /><span><span className="font-medium">Best for:</span> <span className="text-muted-foreground">{s.pick!.bestFor}</span></span></p>
              )}
              {s.pick!.notFor && (
                <p className="mt-1 flex gap-1.5 text-sm"><AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" /><span><span className="font-medium">Watch out:</span> <span className="text-muted-foreground">{s.pick!.notFor}</span></span></p>
              )}
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                {s.pick!.hasFreeTier ? <><Check className="size-3.5 text-emerald-600" /> Has a free tier</> : <><X className="size-3.5" /> No free tier — {s.pickPrice != null ? `from $${s.pickPrice}/mo` : 'paid'}</>}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-6 text-sm">
        <Link href="/stacks" className="text-primary hover:underline">← See all AI tool stacks</Link>
      </div>

      <FaqSection faqs={faqs} />
    </div>
  )
}

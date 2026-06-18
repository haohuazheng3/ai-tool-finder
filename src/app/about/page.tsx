import Link from 'next/link'
import type { Metadata } from 'next'
import { ShieldCheck, Scale, Database, AlertTriangle } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { SITE } from '@/lib/constants'
import { breadcrumbLd, buildMetadata } from '@/lib/seo'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'About & Methodology',
    description: `How ${SITE.name} chooses, organizes, and ranks AI tools — our independence rules, how we handle affiliate links, and the data behind every recommendation.`,
    path: '/about',
    ogSubtitle: 'How we rank — and why you can trust it',
  })
}

const principles = [
  {
    icon: Database,
    title: 'We store decision data, not just discovery data',
    body: 'Most directories list a name, a logo, and a tagline. For every one of our tools we also record what it is NOT good for, whether the free tier is real, and its actual starting price. That is the data that actually helps you decide — and it is the first thing we check before recommending anything.',
  },
  {
    icon: Scale,
    title: 'Rankings are not for sale',
    body: 'Some tools pay for a Featured placement. Those are always labeled "Sponsored" on their own cards, and they never get silently reordered to the top of a guide or the picker. Payment buys a label, not a rank.',
  },
  {
    icon: ShieldCheck,
    title: 'We disclose affiliate links',
    body: 'When you visit a tool through us, we may earn a commission at no extra cost to you. We keep this honest by writing the cons even for tools that pay us, and by never recommending a tool we would not point a friend to.',
  },
  {
    icon: AlertTriangle,
    title: 'We say who should NOT buy',
    body: 'Every tool page has a "Not for" line. Honest advice tells you when something is the wrong choice — that is how you delete most of your options quickly and confidently.',
  },
]

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-10">
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ])} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">About</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About {SITE.name}</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        {SITE.name} is a task-organized directory of AI tools built around one idea: the hard part isn’t
        finding AI tools — there are thousands — it’s deciding which one is right for <em>your</em> job, budget,
        and dealbreakers. So we built the directory that tells you the truth, including the parts other lists leave out.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">How we work</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} className="p-5">
              <p.icon className="size-5 text-primary" />
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">How we organize tools</h2>
        <p className="mt-2 text-muted-foreground">
          We group tools by the job you’re hiring them to do — writing, images, video, coding, support, and so on —
          not as one giant alphabetical dump. From there you can narrow by what matters: a ranked
          {' '}<Link href="/match" className="text-primary hover:underline">best-fit picker</Link>, the
          {' '}<Link href="/guides/the-truth-about-free-ai-tools" className="text-primary hover:underline">genuinely free options</Link>,
          the cheapest by real price, head-to-head comparisons, or ready-made
          {' '}<Link href="/stacks" className="text-primary hover:underline">tool stacks</Link> for a whole project.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Our data &amp; corrections</h2>
        <p className="mt-2 text-muted-foreground">
          Pricing and free tiers change constantly, and our positioning only works if the data is right. We update
          listings regularly and publish original analysis like our
          {' '}<Link href="/ai-tools-pricing-report" className="text-primary hover:underline">AI pricing index</Link>.
          If you spot something out of date or wrong — especially a tool’s pricing or free-tier limits — please tell us
          on the <Link href="/contact" className="text-primary hover:underline">contact page</Link> and we’ll fix it.
          Tool makers can <Link href="/submit" className="text-primary hover:underline">submit or claim a listing</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Who writes this</h2>
        <p className="mt-2 text-muted-foreground">
          Listings and <Link href="/guides" className="text-primary hover:underline">guides</Link> are produced and
          reviewed by the {SITE.name} editorial team. We aim for the opposite of a hype list: specific, current, and
          willing to tell you what not to buy.
        </p>
      </section>
    </div>
  )
}

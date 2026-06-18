import Link from 'next/link'
import type { Metadata } from 'next'
import { Mail, Flag, Megaphone, PlusCircle } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { SITE } from '@/lib/constants'
import { breadcrumbLd, buildMetadata } from '@/lib/seo'

export const revalidate = 86400

const EMAIL = 'contact@toolsbytask.com'

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Contact',
    description: `Get in touch with ${SITE.name} — corrections, partnerships, getting your AI tool listed, or advertising. Email ${EMAIL}.`,
    path: '/contact',
    ogSubtitle: 'Corrections, partnerships & listings',
  })
}

const reasons = [
  { icon: Flag, title: 'Corrections', body: 'Spotted wrong pricing, a stale free-tier limit, or an out-of-date fact? Tell us and we’ll fix it fast — accuracy is the whole point.' },
  { icon: PlusCircle, title: 'Get listed or claim a tool', body: 'Made an AI tool? The fastest route is to submit it for review; for edits to an existing listing, email us.' },
  { icon: Megaphone, title: 'Advertise / partnerships', body: 'Interested in a Featured placement or a partnership? We’re happy to talk — sponsored placements are always labeled.' },
]

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${SITE.name}`,
          url: 'https://toolsbytask.com/contact',
        },
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Contact</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact us</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Questions, corrections, partnerships, or getting your tool listed — here’s how to reach the {SITE.name} team.
      </p>

      <Card className="mt-6 flex flex-col items-center gap-3 p-8 text-center">
        <Mail className="size-8 text-primary" />
        <div className="text-sm text-muted-foreground">Email us at</div>
        <a href={`mailto:${EMAIL}`} className="text-xl font-semibold text-primary hover:underline sm:text-2xl">
          {EMAIL}
        </a>
        <p className="max-w-md text-sm text-muted-foreground">
          We read every message. For corrections, please include the tool name and a link to the source so we can verify and update quickly.
        </p>
      </Card>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {reasons.map((r) => (
          <Card key={r.title} className="p-5">
            <r.icon className="size-5 text-primary" />
            <h2 className="mt-2 text-sm font-semibold">{r.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{r.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link href="/submit" className="rounded-md border px-4 py-2 font-medium hover:bg-accent">Submit a tool →</Link>
        <Link href="/advertise" className="rounded-md border px-4 py-2 font-medium hover:bg-accent">Advertise →</Link>
        <Link href="/about" className="rounded-md border px-4 py-2 font-medium hover:bg-accent">How we rank →</Link>
      </div>
    </div>
  )
}

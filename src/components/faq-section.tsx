import { JsonLd } from '@/components/json-ld'
import { faqPageLd } from '@/lib/seo'

export type Faq = { q: string; a: string }

/** Renders visible FAQ Q&A + matching FAQPage JSON-LD (both required for GEO). */
export function FaqSection({ faqs, heading = 'Frequently asked questions' }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <dl className="mt-4 divide-y rounded-xl border">
        {faqs.map((f) => (
          <div key={f.q} className="p-4">
            <dt className="font-medium">{f.q}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd data={faqPageLd(faqs)} />
    </section>
  )
}

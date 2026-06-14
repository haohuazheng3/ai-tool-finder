import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { VisitButton } from '@/components/visit-button'
import { logoUrlFor } from '@/lib/utils'
import type { ListingWithCategory } from '@/lib/db/schema'

function Bool({ value }: { value: boolean }) {
  return value ? (
    <Check className="size-5 text-emerald-600" aria-label="Yes" />
  ) : (
    <X className="size-5 text-muted-foreground" aria-label="No" />
  )
}

const ROWS: { label: string; render: (l: ListingWithCategory) => React.ReactNode }[] = [
  { label: 'Tagline', render: (l) => l.tagline ?? '—' },
  { label: 'Category', render: (l) => l.category?.name ?? '—' },
  { label: 'Pricing', render: (l) => l.pricingText ?? '—' },
  { label: 'Free tier', render: (l) => <Bool value={l.hasFreeTier} /> },
  { label: 'Best for', render: (l) => l.bestFor ?? '—' },
  { label: 'Not for', render: (l) => l.notFor ?? '—' },
  {
    label: 'Use cases',
    render: (l) => (
      <div className="flex flex-wrap gap-1">
        {l.useCases.length ? l.useCases.map((u) => <Badge key={u} variant="muted">{u}</Badge>) : '—'}
      </div>
    ),
  },
]

export function CompareTable({ a, b }: { a: ListingWithCategory; b: ListingWithCategory }) {
  const cols = [a, b]
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b bg-muted/40">
            <th className="w-32 p-4 text-left align-bottom font-medium text-muted-foreground" />
            {cols.map((l) => (
              <th key={l.id} className="p-4 text-left align-bottom">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrlFor(l)}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-lg border bg-white object-contain p-1"
                  />
                  <Link href={`/${l.slug}`} className="text-base font-semibold hover:underline">
                    {l.name}
                  </Link>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label} className="border-b last:border-0 align-top">
              <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
              {cols.map((l) => (
                <td key={l.id} className="p-4">
                  {row.render(l)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-4" />
            {cols.map((l) => (
              <td key={l.id} className="p-4">
                <VisitButton id={l.id} name={l.name} size="sm" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

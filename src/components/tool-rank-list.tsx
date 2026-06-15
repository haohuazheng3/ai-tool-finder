import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import { isActivelyFeatured } from '@/lib/featured'
import { freeTierLabel } from '@/lib/pricing'
import { logoUrlFor } from '@/lib/utils'
import type { ListingWithCategory } from '@/lib/db/schema'

/** Numbered, editorial ranked list used by /best, /best/free, /best/for/[persona]. */
export function ToolRankList({
  tools,
  showFreeTier = false,
}: {
  tools: ListingWithCategory[]
  showFreeTier?: boolean
}) {
  return (
    <ol className="mt-8 space-y-4">
      {tools.map((l, i) => (
        <li key={l.id}>
          <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
            <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2">
              <span className="text-2xl font-bold tabular-nums text-muted-foreground">#{i + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrlFor(l)}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                className="size-12 rounded-lg border bg-white object-contain p-1.5"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Link href={`/${l.slug}`} className="text-lg font-semibold hover:underline">
                  {l.name}
                </Link>
                {isActivelyFeatured(l) && (
                  <Badge variant="sponsored" className="gap-1"><Sparkles className="size-3" /> Sponsored</Badge>
                )}
                {showFreeTier ? (
                  <Badge variant="success">{freeTierLabel(l)}</Badge>
                ) : (
                  l.hasFreeTier && <Badge variant="success">Free tier</Badge>
                )}
              </div>
              {l.tagline && <p className="mt-0.5 text-muted-foreground">{l.tagline}</p>}
              {l.bestFor && (
                <p className="mt-2 text-sm">
                  <span className="font-medium text-foreground">Best for: </span>
                  <span className="text-muted-foreground">{l.bestFor}</span>
                </p>
              )}
              {l.notFor && (
                <p className="mt-1 text-sm">
                  <span className="font-medium text-foreground">Not for: </span>
                  <span className="text-muted-foreground">{l.notFor}</span>
                </p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">{l.pricingText}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <VisitButton id={l.id} name={l.name} label="Visit" size="sm" />
              <Link href={`/${l.slug}`} className="text-center text-xs text-muted-foreground hover:text-foreground">
                Read more
              </Link>
            </div>
          </Card>
        </li>
      ))}
    </ol>
  )
}

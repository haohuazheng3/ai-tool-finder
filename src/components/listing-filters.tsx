'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'name', label: 'Name (A–Z)' },
  { value: 'free', label: 'Free first' },
]

const selectClass =
  'h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function ListingFilters({ tags = [] }: { tags?: string[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sort = searchParams.get('sort') ?? 'featured'
  const free = searchParams.get('free') === '1'
  const tag = searchParams.get('tag') ?? ''

  function update(next: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString())
    for (const [key, value] of Object.entries(next)) {
      if (!value) params.delete(key)
      else params.set(key, value)
    }
    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  const hasActiveFilter = free || Boolean(tag) || sort !== 'featured'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Sort</span>
        <select
          className={selectClass}
          value={sort}
          onChange={(e) => update({ sort: e.target.value === 'featured' ? null : e.target.value })}
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      {tags.length > 0 && (
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Tag</span>
          <select className={selectClass} value={tag} onChange={(e) => update({ tag: e.target.value || null })}>
            <option value="">All</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      )}

      <button
        type="button"
        onClick={() => update({ free: free ? null : '1' })}
        className={cn(
          'h-9 rounded-md border px-3 text-sm shadow-sm transition-colors',
          free ? 'border-primary bg-accent text-accent-foreground' : 'border-input bg-background hover:bg-accent',
        )}
        aria-pressed={free}
      >
        Free tier only
      </button>

      {hasActiveFilter && (
        <button
          type="button"
          onClick={() => router.push(pathname, { scroll: false })}
          className="text-sm text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Reset
        </button>
      )}
    </div>
  )
}

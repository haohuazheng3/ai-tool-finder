'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, ThumbsUp, AlertTriangle, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'

/** Trimmed, client-safe shape of a listing for the matcher. */
export type MatchTool = {
  id: number
  slug: string
  name: string
  category: string
  categoryName: string
  free: boolean
  price: number | null
  pricingText: string
  bestFor: string
  notFor: string
  text: string // lowercased haystack (bestFor + useCases + tags) for priority scoring
  featured: boolean
  featuredRank: number | null
}

type Cat = { slug: string; name: string }
type Budget = 'free' | 'u20' | 'u50' | 'any'
type Priority = 'cheapest' | 'capable' | 'beginner' | 'teams'

const BUDGETS: { id: Budget; label: string; hint: string }[] = [
  { id: 'free', label: 'Free only', hint: 'Show me tools with a real free tier' },
  { id: 'u20', label: 'Under $20/mo', hint: 'Cheap paid plans (or free)' },
  { id: 'u50', label: 'Under $50/mo', hint: 'Mid-range (or free)' },
  { id: 'any', label: 'Any budget', hint: 'Show the best regardless of price' },
]

const PRIORITIES: { id: Priority; label: string; hint: string; kw: string[] }[] = [
  { id: 'cheapest', label: 'Cheapest', hint: 'Lowest cost that does the job', kw: [] },
  { id: 'capable', label: 'Most capable', hint: 'Power over price', kw: [] },
  { id: 'beginner', label: 'Easiest for beginners', hint: 'Simple, fast to start', kw: ['beginner', 'easy', 'simple', 'intuitive', 'no-code', 'no code', 'friendly', 'getting started'] },
  { id: 'teams', label: 'Best for teams', hint: 'Collaboration & scale', kw: ['team', 'agency', 'enterprise', 'collaborat', 'brand', 'workflow', 'scale', 'client'] },
]

function Step({ n, total, title }: { n: number; total: number; title: string }) {
  return (
    <div className="mb-4">
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Step {n} of {total}
      </div>
      <h2 className="mt-1 text-xl font-semibold">{title}</h2>
    </div>
  )
}

export function ToolMatcher({ tools, categories }: { tools: MatchTool[]; categories: Cat[] }) {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState<string | null>(null)
  const [budget, setBudget] = useState<Budget | null>(null)
  const [priority, setPriority] = useState<Priority | null>(null)

  const results = useMemo(() => {
    if (!category || !budget || !priority) return []
    let pool = tools.filter((t) => t.category === category)
    if (budget === 'free') pool = pool.filter((t) => t.free)
    else if (budget === 'u20') pool = pool.filter((t) => t.free || (t.price != null && t.price <= 20))
    else if (budget === 'u50') pool = pool.filter((t) => t.free || (t.price != null && t.price <= 50))

    const featRank = (t: MatchTool) => (t.featured ? 0 : 1) * 1000 + (t.featuredRank ?? 500)
    const kw = PRIORITIES.find((p) => p.id === priority)?.kw ?? []
    const kwScore = (t: MatchTool) => kw.reduce((s, k) => s + (t.text.includes(k) ? 1 : 0), 0)

    const sorted = [...pool].sort((a, b) => {
      if (priority === 'cheapest') {
        const pa = a.free ? -1 : a.price ?? 9999
        const pb = b.free ? -1 : b.price ?? 9999
        if (pa !== pb) return pa - pb
        return featRank(a) - featRank(b)
      }
      if (priority === 'capable') return featRank(a) - featRank(b)
      // beginner / teams: keyword fit first, then featured
      const ka = kwScore(a)
      const kb = kwScore(b)
      if (ka !== kb) return kb - ka
      return featRank(a) - featRank(b)
    })
    return sorted.slice(0, 3)
  }, [tools, category, budget, priority])

  const reset = () => {
    setStep(1)
    setCategory(null)
    setBudget(null)
    setPriority(null)
  }

  const catName = categories.find((c) => c.slug === category)?.name

  return (
    <Card className="p-5 sm:p-6">
      {/* Progress */}
      {step <= 3 && (
        <div className="mb-5 flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
      )}

      {step === 1 && (
        <div>
          <Step n={1} total={3} title="What do you want to do?" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => {
                  setCategory(c.slug)
                  setStep(2)
                }}
                className="rounded-lg border p-3 text-left text-sm font-medium transition-colors hover:border-primary hover:bg-accent"
              >
                {c.name.replace(/^AI /, '')}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <button onClick={() => setStep(1)} className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> Back
          </button>
          <Step n={2} total={3} title="What's your budget?" />
          <div className="grid gap-2 sm:grid-cols-2">
            {BUDGETS.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setBudget(b.id)
                  setStep(3)
                }}
                className="rounded-lg border p-3 text-left transition-colors hover:border-primary hover:bg-accent"
              >
                <div className="text-sm font-medium">{b.label}</div>
                <div className="text-xs text-muted-foreground">{b.hint}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <button onClick={() => setStep(2)} className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> Back
          </button>
          <Step n={3} total={3} title="What matters most?" />
          <div className="grid gap-2 sm:grid-cols-2">
            {PRIORITIES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPriority(p.id)
                  setStep(4)
                }}
                className="rounded-lg border p-3 text-left transition-colors hover:border-primary hover:bg-accent"
              >
                <div className="text-sm font-medium">{p.label}</div>
                <div className="text-xs text-muted-foreground">{p.hint}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              {catName?.replace(/^AI /, '')} · {BUDGETS.find((b) => b.id === budget)?.label} ·{' '}
              {PRIORITIES.find((p) => p.id === priority)?.label}
            </div>
            <Button variant="outline" size="sm" onClick={reset}>
              <RotateCcw className="size-3.5" /> Start over
            </Button>
          </div>

          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
              No tool matched those filters. Try a wider budget —{' '}
              <button className="text-primary underline" onClick={() => setStep(2)}>change budget</button>.
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Your top {results.length === 1 ? 'match' : `${results.length} matches`} — with the honest catch shown up front:
              </p>
              {results.map((t, i) => (
                <Card key={t.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-muted-foreground">#{i + 1}</span>
                        <Link href={`/${t.slug}`} className="font-semibold hover:underline">{t.name}</Link>
                        {t.free ? <Badge variant="success">Free tier</Badge> : null}
                        <Badge variant="muted">{t.free ? 'Free' : t.price != null ? `from $${t.price}/mo` : 'See pricing'}</Badge>
                      </div>
                      {t.bestFor && (
                        <p className="mt-2 flex gap-1.5 text-sm">
                          <ThumbsUp className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                          <span><span className="font-medium">Best for:</span> <span className="text-muted-foreground">{t.bestFor}</span></span>
                        </p>
                      )}
                      {t.notFor && (
                        <p className="mt-1 flex gap-1.5 text-sm">
                          <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                          <span><span className="font-medium">Watch out:</span> <span className="text-muted-foreground">{t.notFor}</span></span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <VisitButton id={t.id} name={t.name} label="Visit" size="sm" />
                    <Link href={`/${t.slug}`} className="text-xs text-muted-foreground hover:text-foreground">Read full review →</Link>
                  </div>
                </Card>
              ))}
              <div className="pt-1 text-center text-xs text-muted-foreground">
                Rankings are honest — sponsored tools are labeled on their pages, never reordered here by payment.
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}

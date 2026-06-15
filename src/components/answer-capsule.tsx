import { Sparkles } from 'lucide-react'

/**
 * A 40–60 word direct-answer capsule rendered right under the H1.
 * This is the single highest-leverage GEO element — the snippet AI engines and
 * featured-snippets lift verbatim.
 */
export function AnswerCapsule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 rounded-xl border border-primary/20 bg-accent/40 p-4">
      <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
      <p className="text-[15px] leading-7 text-foreground/90">{children}</p>
    </div>
  )
}

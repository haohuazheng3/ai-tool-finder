/**
 * Local near-duplicate detection — a quality gate that needs NO external
 * embedding API. We build TF (term-frequency) vectors from word tokens and
 * compute cosine similarity. Good enough to catch templated/near-identical
 * editorial across programmatic pages (the thing Google penalizes).
 *
 * Upgrade path: swap tokenVector() for a real embedding (Voyage/OpenAI) if a
 * key is ever provided; the cosine math is unchanged.
 */
const STOP = new Set(
  'a an the and or but of for to in on at by with from as is are be best ai tool tools your you it its that this'.split(' '),
)

function tokenVector(text: string): Map<string, number> {
  const v = new Map<string, number>()
  for (const raw of text.toLowerCase().split(/[^a-z0-9]+/)) {
    if (raw.length < 3 || STOP.has(raw)) continue
    v.set(raw, (v.get(raw) ?? 0) + 1)
  }
  return v
}

export function cosineSim(a: string, b: string): number {
  const va = tokenVector(a)
  const vb = tokenVector(b)
  let dot = 0
  for (const [k, x] of va) dot += x * (vb.get(k) ?? 0)
  const mag = (v: Map<string, number>) => Math.sqrt([...v.values()].reduce((s, x) => s + x * x, 0))
  const denom = mag(va) * mag(vb)
  return denom === 0 ? 0 : dot / denom
}

/** True if `text` is >= threshold cosine-similar to any string in `others`. */
export function isNearDuplicate(text: string, others: string[], threshold = 0.85): boolean {
  return others.some((o) => cosineSim(text, o) >= threshold)
}

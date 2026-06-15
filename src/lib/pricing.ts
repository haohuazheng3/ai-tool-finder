/**
 * Best-effort parsing of a numeric starting price from free-text pricingText
 * (e.g. "Free tier; Pro from ~$20/user/mo" -> 20). Powers the pricing report
 * and "free tier limits" columns. Returns null when no price is parseable
 * (custom/enterprise/unknown).
 */
export function startingPrice(pricingText?: string | null): number | null {
  if (!pricingText) return null
  // Find all $-amounts and take the smallest non-zero (the entry price).
  const matches = [...pricingText.matchAll(/\$\s?(\d+(?:\.\d+)?)/g)].map((m) => parseFloat(m[1]))
  const positive = matches.filter((n) => n > 0)
  if (positive.length === 0) return null
  return Math.min(...positive)
}

/** Short "free tier" summary for a tool, used as a table column. */
export function freeTierLabel(t: { hasFreeTier: boolean; pricingText?: string | null }): string {
  if (!t.hasFreeTier) {
    const p = startingPrice(t.pricingText)
    return p ? `Paid — from $${p}/mo` : 'Paid only'
  }
  const text = (t.pricingText ?? '').toLowerCase()
  if (text.includes('free trial') && !text.includes('free tier') && !text.includes('free plan')) {
    return 'Free trial'
  }
  return 'Free tier'
}

export function median(nums: number[]): number | null {
  if (!nums.length) return null
  const s = [...nums].sort((a, b) => a - b)
  const mid = Math.floor(s.length / 2)
  return s.length % 2 ? s[mid] : Math.round(((s[mid - 1] + s[mid]) / 2) * 100) / 100
}

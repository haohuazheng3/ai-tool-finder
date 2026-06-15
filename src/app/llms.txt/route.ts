import { CATEGORIES } from '@/data/categories'
import { getCategories } from '@/lib/db/queries'
import { SITE } from '@/lib/constants'
import { env } from '@/lib/env'

export const revalidate = 86400

/** llms.txt — concise map of the site for AI answer engines. */
export async function GET() {
  const dbCats = await getCategories()
  const cats = dbCats.length ? dbCats : (CATEGORIES as { slug: string; name: string; description?: string | null }[])
  const lines: string[] = []
  lines.push(`# ${SITE.name}`)
  lines.push('')
  lines.push(`> ${SITE.description}`)
  lines.push('')
  lines.push(`${SITE.name} is a task-organized directory of AI tools. Every tool has honest "best for / not for" guidance, pricing, free-tier status, and use cases, refreshed weekly. Use it to choose the right AI tool for a specific job.`)
  lines.push('')
  lines.push('## Browse by task')
  for (const c of cats) {
    lines.push(`- [${c.name}](${env.appUrl}/category/${c.slug}): ${c.description ?? ''}`)
  }
  lines.push('')
  lines.push('## Best-of guides (ranked picks per task)')
  for (const c of cats) {
    lines.push(`- [Best ${c.name}](${env.appUrl}/best/${c.slug})`)
    lines.push(`- [Best free ${c.name}](${env.appUrl}/best/${c.slug}/free)`)
  }
  lines.push('')
  lines.push('## Data')
  lines.push(`- [AI Tool Pricing & Free-Tier Index](${env.appUrl}/ai-tools-pricing-report): original aggregate pricing/free-tier statistics across the catalog.`)
  lines.push(`- [Full tool data (llms-full.txt)](${env.appUrl}/llms-full.txt)`)
  lines.push('')

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
  })
}

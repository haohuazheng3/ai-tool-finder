/**
 * Validated persona allowlist for /best/[task]/for/[persona] pages.
 *
 * Each persona only applies to the categories where it has genuine search demand,
 * and `match` keywords are tested against each tool's text (useCases, tags,
 * bestFor, description, name). A page renders ONLY if >= MIN_PERSONA_TOOLS tools
 * genuinely qualify — never a thin shell.
 */
export type Persona = {
  slug: string
  label: string
  /** Short blurb used in the page intro / answer capsule. */
  blurb: string
  /** Category slugs this persona is relevant to. */
  categories: string[]
  /** Keywords matched (case-insensitive) against tool text to qualify it. */
  match: string[]
}

export const MIN_PERSONA_TOOLS = 4

export const PERSONAS: Persona[] = [
  {
    slug: 'students',
    label: 'Students',
    blurb: 'students writing essays, taking notes, and doing research on a budget',
    categories: ['ai-writing', 'ai-data', 'ai-productivity'],
    match: ['student', 'study', 'studie', 'essay', 'academic', 'homework', 'research', 'note', 'summar', 'paraphras', 'grammar', 'citation'],
  },
  {
    slug: 'youtube-creators',
    label: 'YouTube creators',
    blurb: 'YouTubers and short-form creators producing video, thumbnails, and scripts',
    categories: ['ai-video', 'ai-image', 'ai-writing', 'ai-voice'],
    match: ['video', 'youtube', 'short', 'clip', 'creator', 'social', 'thumbnail', 'script', 'voiceover', 'dub', 'caption', 'edit'],
  },
  {
    slug: 'shopify-sellers',
    label: 'Shopify & e-commerce sellers',
    blurb: 'e-commerce sellers writing product copy and creating product visuals',
    categories: ['ai-writing', 'ai-image', 'ai-marketing'],
    match: ['ecommerce', 'e-commerce', 'product', 'shopify', 'store', 'ad', 'marketing', 'copywriting', 'description', 'photo', 'background'],
  },
  {
    slug: 'small-business',
    label: 'Small businesses',
    blurb: 'small businesses that need affordable, easy AI without a big team',
    categories: ['ai-writing', 'ai-marketing', 'ai-customer-support', 'ai-design', 'ai-seo'],
    match: ['small business', 'smb', 'budget', 'affordable', 'team', 'marketing', 'support', 'customer', 'easy', 'all-in-one', 'campaign'],
  },
  {
    slug: 'agencies',
    label: 'Agencies & teams',
    blurb: 'agencies and teams managing clients, brand voice, and collaboration',
    categories: ['ai-writing', 'ai-marketing', 'ai-design', 'ai-seo'],
    match: ['team', 'agency', 'client', 'collaborat', 'brand', 'workflow', 'enterprise', 'campaign', 'scale'],
  },
  {
    slug: 'beginners',
    label: 'Beginners',
    blurb: 'beginners who want simple, easy-to-start AI tools',
    categories: ['ai-writing', 'ai-image', 'ai-video', 'ai-assistant', 'ai-design'],
    match: ['beginner', 'easy', 'simple', 'no-code', 'no code', 'intuitive', 'free', 'getting started', 'user-friendly', 'friendly'],
  },
  {
    slug: 'solo-developers',
    label: 'Solo developers',
    blurb: 'indie and solo developers shipping software faster',
    categories: ['ai-coding'],
    match: ['developer', 'code', 'coding', 'programming', 'app', 'ide', 'autocomplete', 'solo', 'indie', 'build'],
  },
  {
    slug: 'marketers',
    label: 'Marketers',
    blurb: 'marketers running content, ads, and growth campaigns',
    categories: ['ai-marketing', 'ai-writing', 'ai-seo', 'ai-image'],
    match: ['marketing', 'marketer', 'ad', 'campaign', 'seo', 'email', 'outreach', 'lead', 'growth', 'copywriting', 'social'],
  },
  {
    slug: 'podcasters',
    label: 'Podcasters',
    blurb: 'podcasters recording, editing, and transcribing audio',
    categories: ['ai-voice', 'ai-productivity', 'ai-video'],
    match: ['podcast', 'audio', 'transcri', 'voice', 'record', 'editing', 'speech', 'cleanup', 'noise'],
  },
  {
    slug: 'authors',
    label: 'Authors & novelists',
    blurb: 'authors and novelists drafting long-form fiction',
    categories: ['ai-writing'],
    match: ['fiction', 'novel', 'story', 'storytelling', 'author', 'creative writing', 'manuscript', 'prose', 'character', 'long-form'],
  },
]

export const PERSONA_SLUGS = PERSONAS.map((p) => p.slug)

export function getPersona(slug: string): Persona | null {
  return PERSONAS.find((p) => p.slug === slug) ?? null
}

/** Does a tool's combined text qualify it for a persona? */
export function toolMatchesPersona(
  tool: { name: string; tagline?: string | null; descriptionMd?: string | null; bestFor?: string | null; useCases: string[]; tags: string[] },
  persona: Persona,
): boolean {
  const hay = [
    tool.name,
    tool.tagline ?? '',
    tool.descriptionMd ?? '',
    tool.bestFor ?? '',
    tool.useCases.join(' '),
    tool.tags.join(' '),
  ]
    .join(' ')
    .toLowerCase()
  return persona.match.some((k) => hay.includes(k))
}

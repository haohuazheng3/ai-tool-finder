/**
 * Task-oriented categories. The directory is organized by the job a visitor is
 * trying to get done, not an A–Z dump. `bestTask` is the slug used by /best/[task].
 */
export type CategorySeed = {
  slug: string
  name: string
  description: string
  sortOrder: number
  /** Short headline used on /best/[task] pages. */
  bestHeadline: string
}

export const CATEGORIES: CategorySeed[] = [
  {
    slug: 'ai-writing',
    name: 'AI Writing & Content',
    description:
      'AI writers, copywriting, and content tools for blog posts, marketing copy, and long-form drafting.',
    bestHeadline: 'Best AI Writing Tools',
    sortOrder: 10,
  },
  {
    slug: 'ai-image',
    name: 'AI Image Generation',
    description:
      'Text-to-image generators and AI art tools for marketing visuals, concept art, and product imagery.',
    bestHeadline: 'Best AI Image Generators',
    sortOrder: 20,
  },
  {
    slug: 'ai-video',
    name: 'AI Video',
    description:
      'AI video generation, avatars, and editing tools for explainers, ads, and social clips.',
    bestHeadline: 'Best AI Video Tools',
    sortOrder: 30,
  },
  {
    slug: 'ai-coding',
    name: 'AI Coding',
    description:
      'AI pair programmers, code assistants, and app builders that ship software faster.',
    bestHeadline: 'Best AI Coding Tools',
    sortOrder: 40,
  },
  {
    slug: 'ai-customer-support',
    name: 'AI Customer Support',
    description:
      'AI chatbots and helpdesk agents that resolve tickets and answer customers automatically.',
    bestHeadline: 'Best AI Customer Support Tools',
    sortOrder: 50,
  },
  {
    slug: 'ai-data',
    name: 'AI Data & Research',
    description:
      'AI analysts and research assistants that query data, surface insights, and summarize sources.',
    bestHeadline: 'Best AI Data & Research Tools',
    sortOrder: 60,
  },
  {
    slug: 'ai-marketing',
    name: 'AI Marketing & Sales',
    description:
      'AI tools for outreach, ad creative, lead enrichment, and growth campaigns.',
    bestHeadline: 'Best AI Marketing & Sales Tools',
    sortOrder: 70,
  },
  {
    slug: 'ai-voice',
    name: 'AI Voice & Audio',
    description:
      'AI voice generation, text-to-speech, dubbing, and audio cleanup tools.',
    bestHeadline: 'Best AI Voice & Audio Tools',
    sortOrder: 80,
  },
  {
    slug: 'ai-productivity',
    name: 'AI Productivity & Meetings',
    description:
      'AI note-takers, meeting assistants, and schedulers that automate busywork.',
    bestHeadline: 'Best AI Productivity Tools',
    sortOrder: 90,
  },
  {
    slug: 'ai-design',
    name: 'AI Design & Branding',
    description:
      'AI design assistants for logos, UI mockups, brand kits, and social graphics.',
    bestHeadline: 'Best AI Design Tools',
    sortOrder: 100,
  },
  {
    slug: 'ai-music',
    name: 'AI Music',
    description:
      'AI music generators for songs, soundtracks, and royalty-free background audio.',
    bestHeadline: 'Best AI Music Generators',
    sortOrder: 110,
  },
  {
    slug: 'ai-assistant',
    name: 'AI Assistants & Chatbots',
    description:
      'General-purpose AI chat assistants for everyday work, research, and reasoning.',
    bestHeadline: 'Best AI Assistants',
    sortOrder: 120,
  },
  {
    slug: 'ai-seo',
    name: 'AI SEO',
    description:
      'AI SEO tools for content optimization, keyword research, and search rankings.',
    bestHeadline: 'Best AI SEO Tools',
    sortOrder: 130,
  },
]

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug)

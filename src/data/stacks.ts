/**
 * Curated "outcome → AI tool stack" recipes for /stacks/[outcome].
 *
 * Each step maps a real job to one of the 13 task categories; the page resolves
 * the cheapest qualifying tool per step from LIVE data (and a free option), then
 * sums a real monthly cost. This is a cross-category asset no single-tool
 * directory builds. Intros are hand-written (unique editorial), not templated.
 */
export type StackStep = {
  /** Human role in the workflow, e.g. "Write the script". */
  role: string
  /** Category slug to pull the tool from. */
  category: string
}

export type StackSeed = {
  slug: string
  title: string
  /** Who this stack is for — used in the H1/intro. */
  audience: string
  /** Unique editorial intro (2–3 sentences, specific to this outcome). */
  intro: string
  steps: StackStep[]
}

export const STACKS: StackSeed[] = [
  {
    slug: 'faceless-youtube-channel',
    title: 'Faceless YouTube channel',
    audience: 'creators running a faceless, voiceover-style YouTube channel',
    intro:
      'A faceless channel is really four jobs glued together: write a tight script, turn it into a natural voiceover, generate or assemble the visuals, and make a thumbnail that earns the click. You do not need one expensive all-in-one — the cheapest path is one focused tool per job. Below is the lowest-cost stack from our catalog, plus a fully-free version.',
    steps: [
      { role: 'Write the script', category: 'ai-writing' },
      { role: 'Generate the voiceover', category: 'ai-voice' },
      { role: 'Make the video', category: 'ai-video' },
      { role: 'Design the thumbnail', category: 'ai-image' },
    ],
  },
  {
    slug: 'solo-newsletter',
    title: 'Solo newsletter',
    audience: 'solo writers shipping a regular newsletter without a team',
    intro:
      'A one-person newsletter lives or dies on consistency, so the stack should remove the two things that stall you: the blank page and the header image. Pair a drafting assistant with an image generator, and add a light SEO checker if you also publish issues as web posts. Here is the cheapest combination, with a free-only fallback.',
    steps: [
      { role: 'Draft the issue', category: 'ai-writing' },
      { role: 'Create the header image', category: 'ai-image' },
      { role: 'Optimize the web version', category: 'ai-seo' },
    ],
  },
  {
    slug: 'shopify-store',
    title: 'Shopify / e-commerce store',
    audience: 'e-commerce sellers writing product copy and creating product visuals',
    intro:
      'For a store, AI pays for itself on two repetitive jobs: writing product descriptions that convert, and producing clean product or lifestyle imagery without a photographer. Add an ad-creative tool when you start running paid traffic. This stack picks the cheapest tool for each, so margin stays intact.',
    steps: [
      { role: 'Write product descriptions', category: 'ai-writing' },
      { role: 'Create product images', category: 'ai-image' },
      { role: 'Generate ad creative', category: 'ai-marketing' },
    ],
  },
  {
    slug: 'indie-app',
    title: 'Indie app / solo dev',
    audience: 'indie and solo developers shipping software faster',
    intro:
      'Shipping solo means wearing every hat, so the stack covers the three that slow you most: writing and reviewing code, a general assistant for planning and debugging, and quick UI/brand visuals so the product does not look unfinished. Here is the lowest-cost set, plus the strong free options developers actually use.',
    steps: [
      { role: 'Write & review code', category: 'ai-coding' },
      { role: 'Plan & debug (assistant)', category: 'ai-assistant' },
      { role: 'Design UI & brand assets', category: 'ai-design' },
    ],
  },
  {
    slug: 'podcast',
    title: 'Podcast',
    audience: 'podcasters recording, cleaning, and repurposing audio',
    intro:
      'A podcast workflow has three AI-shaped jobs: clean and enhance the raw audio, transcribe it accurately for show notes and search, and turn each episode into written promo. Specialised audio tools beat a do-everything app on quality here. This is the cheapest stack, with free tiers where they hold up.',
    steps: [
      { role: 'Record & clean audio', category: 'ai-voice' },
      { role: 'Transcribe & take notes', category: 'ai-productivity' },
      { role: 'Write show notes & promo', category: 'ai-writing' },
    ],
  },
  {
    slug: 'content-marketing',
    title: 'Content marketing engine',
    audience: 'marketers running a content + SEO engine',
    intro:
      'A content engine needs four moving parts working together: drafting at volume, optimizing each piece for search, producing supporting visuals, and distributing through ads or email. The trap is paying enterprise prices for all four. This stack assembles the cheapest credible tool per role, with free options flagged.',
    steps: [
      { role: 'Draft content', category: 'ai-writing' },
      { role: 'Optimize for search', category: 'ai-seo' },
      { role: 'Create visuals', category: 'ai-image' },
      { role: 'Run campaigns', category: 'ai-marketing' },
    ],
  },
  {
    slug: 'personal-brand',
    title: 'Personal brand creator',
    audience: 'creators building a personal brand across text, image, and video',
    intro:
      'Building a personal brand means showing up everywhere without burning out, so the stack spans the formats audiences expect: written posts, scroll-stopping images, short video, and a general assistant to keep ideas flowing. Here is the most affordable way to cover all four from our catalog.',
    steps: [
      { role: 'Write posts', category: 'ai-writing' },
      { role: 'Make images', category: 'ai-image' },
      { role: 'Create short video', category: 'ai-video' },
      { role: 'Brainstorm (assistant)', category: 'ai-assistant' },
    ],
  },
  {
    slug: 'saas-support',
    title: 'SaaS customer support',
    audience: 'small SaaS teams automating customer support',
    intro:
      'For a lean SaaS team, AI support is about deflecting repetitive tickets without sounding robotic: an AI support agent on the front line, a general assistant for internal answers, and a writing tool to keep help-docs and macros current. This stack picks the cheapest dependable option for each.',
    steps: [
      { role: 'Deflect tickets', category: 'ai-customer-support' },
      { role: 'Internal Q&A (assistant)', category: 'ai-assistant' },
      { role: 'Maintain help docs', category: 'ai-writing' },
    ],
  },
]

export const STACK_SLUGS = STACKS.map((s) => s.slug)

export function getStack(slug: string): StackSeed | null {
  return STACKS.find((s) => s.slug === slug) ?? null
}

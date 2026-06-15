import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

// Explicitly welcome AI answer-engine crawlers (GEO): being cited by
// ChatGPT/Claude/Perplexity/Google AI is the fastest impressions path for a new site.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot', 'Amazonbot', 'cohere-ai',
]

const DISALLOW = ['/api/', '/admin', '/advertise/success']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${env.appUrl}/sitemap.xml`,
  }
}

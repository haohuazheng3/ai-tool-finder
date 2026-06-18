/**
 * Catalog expansion (curated 2026-06, agent-drafted + reviewed). Real, well-known
 * tools authored to the same decision-data quality bar as seed-listings.ts
 * (hedged real pricing, honest bestFor/notFor). Concatenated by seed-core + static-data.
 */
import type { SeedListing } from './seed-listings'

export const SEED_LISTINGS_EXTRA: SeedListing[] = [
  {
    "slug": "writer-com",
    "name": "Writer",
    "tagline": "Enterprise AI writing platform with brand voice and governance",
    "websiteUrl": "https://writer.com",
    "descriptionMd": "Writer is an enterprise-grade AI writing platform that lets teams train a custom AI on their brand voice, style guide, and terminology. It offers AI generation, snippet libraries, grammar checking, and workflow integrations for content at scale. It's designed for marketing and content teams who need consistency and compliance across all outputs.",
    "pricingText": "No permanent free tier (free trial available); Team from ~$18/user/mo, Enterprise custom pricing",
    "hasFreeTier": false,
    "bestFor": "Enterprise marketing and content teams that need a brand-voice-trained AI with governance and team collaboration.",
    "notFor": "Individual freelancers or students who just need a low-cost general-purpose writing helper.",
    "useCases": [
      "Brand voice training",
      "Blog and marketing copy",
      "Style guide enforcement",
      "Team content workflows"
    ],
    "tags": [
      "enterprise",
      "brand-voice",
      "governance",
      "content-marketing"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lex",
    "name": "Lex",
    "tagline": "Minimalist AI word processor for focused long-form writing",
    "websiteUrl": "https://lex.page",
    "descriptionMd": "Lex is a clean, distraction-free word processor with AI assistance built in, letting writers press a shortcut to get suggestions, continuations, and rewrites inline. It targets essayists, bloggers, and knowledge workers who want AI help inside a focused writing environment. Lex emphasizes the drafting experience over template-heavy generation.",
    "pricingText": "Free tier with limited AI requests; Pro from ~$12/mo",
    "hasFreeTier": true,
    "bestFor": "Essayists, bloggers, and knowledge workers who want minimalist, focused long-form drafting with inline AI suggestions.",
    "notFor": "Teams needing bulk content generation, SEO tooling, or multi-user brand governance features.",
    "useCases": [
      "Long-form essay drafting",
      "Blog post writing",
      "Inline AI continuations",
      "Rewriting and editing"
    ],
    "tags": [
      "long-form",
      "word-processor",
      "essays",
      "focused-writing"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hyperwrite",
    "name": "HyperWrite",
    "tagline": "Personal AI assistant for writing, research, and browsing tasks",
    "websiteUrl": "https://www.hyperwriteai.com",
    "descriptionMd": "HyperWrite is an AI assistant with a Chrome extension that follows instructions across the web, can type for you, fill forms, and assist with writing in any browser-based editor. Its AutoWrite and TypeAhead features generate and complete text inline. It combines a general writing assistant with an early agentic browsing capability.",
    "pricingText": "Free plan (limited generations); Premium from ~$20/mo, Ultra from ~$45/mo",
    "hasFreeTier": true,
    "bestFor": "Users who want AI writing help embedded across all browser-based apps plus light web-browsing automation.",
    "notFor": "Users seeking deep SEO analytics, enterprise brand governance, or offline desktop tooling.",
    "useCases": [
      "Inline writing assistance",
      "Email and doc drafting",
      "Browser-based task automation",
      "Research summaries"
    ],
    "tags": [
      "browser-extension",
      "ai-writer",
      "automation",
      "productivity"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hypotenuse-ai",
    "name": "Hypotenuse AI",
    "tagline": "Bulk AI content generation for ecommerce and content teams",
    "websiteUrl": "https://www.hypotenuse.ai",
    "descriptionMd": "Hypotenuse AI specializes in generating product descriptions, blog articles, and marketing copy at scale, with a strong focus on ecommerce use cases like bulk product catalog writing. It supports brand guidelines, multiple languages, and integrations with platforms like Shopify. Teams use it to produce hundreds of consistent product pages quickly.",
    "pricingText": "Free trial (limited credits); Individual from ~$29/mo, Teams plans higher, Enterprise custom",
    "hasFreeTier": false,
    "bestFor": "Ecommerce teams and content agencies that need to generate large volumes of product descriptions and articles consistently.",
    "notFor": "Individual writers who need a free everyday writing assistant for short personal tasks.",
    "useCases": [
      "Product description generation",
      "Bulk content creation",
      "Blog article drafting",
      "Multilingual content"
    ],
    "tags": [
      "ecommerce",
      "bulk-content",
      "product-descriptions",
      "content-marketing"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hemingway-editor",
    "name": "Hemingway Editor",
    "tagline": "Readability editor that flags complex sentences and adverbs",
    "websiteUrl": "https://hemingwayapp.com",
    "descriptionMd": "Hemingway Editor color-codes text to flag passive voice, complex sentences, excessive adverbs, and hard-to-read phrasing, pushing writers toward clearer prose. It offers a free web version and a paid desktop app for offline use. It's a classic tool for writers who want to self-edit for readability rather than generate new content.",
    "pricingText": "Free web version available; Desktop app is a one-time purchase of ~$19.99",
    "hasFreeTier": true,
    "bestFor": "Writers and editors who want to self-edit for clarity, conciseness, and readability using instant visual feedback.",
    "notFor": "Users looking for AI content generation or paraphrasing — it is an editing-only tool.",
    "useCases": [
      "Readability editing",
      "Passive voice detection",
      "Sentence simplification",
      "Blog post polishing"
    ],
    "tags": [
      "editing",
      "readability",
      "grammar",
      "clarity"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "prowritingaid",
    "name": "ProWritingAid",
    "tagline": "In-depth editing and style analysis for writers and authors",
    "websiteUrl": "https://prowritingaid.com",
    "descriptionMd": "ProWritingAid offers deep grammar, style, and readability analysis with over 20 in-document reports covering pacing, overused words, and sentence variety. It integrates with Word, Google Docs, Scrivener, and the browser, and is popular with novelists and academics. A lifetime license option makes it attractive for long-term users.",
    "pricingText": "Free plan (limited document length); Premium from ~$10-20/mo; lifetime license option ~$399 one-time",
    "hasFreeTier": true,
    "bestFor": "Novelists, academics, and serious writers who want the deepest style and readability analysis beyond grammar fixes.",
    "notFor": "Marketers or teams wanting AI content generation — it focuses on editing existing text, not generating new copy.",
    "useCases": [
      "Grammar and style editing",
      "Novel manuscript review",
      "Academic writing analysis",
      "Readability and pacing reports"
    ],
    "tags": [
      "editing",
      "grammar",
      "style-analysis",
      "fiction"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "jenni-ai",
    "name": "Jenni AI",
    "tagline": "AI writing assistant built for academic and research writing",
    "websiteUrl": "https://jenni.ai",
    "descriptionMd": "Jenni AI is designed for students and researchers writing academic papers, theses, and essays, with AI autocomplete, citation generation (APA, MLA, Chicago), and a research library. It helps users maintain their own voice while using AI to overcome writer's block. It's one of the few AI writing tools with native academic citation workflows.",
    "pricingText": "Free plan (limited AI words/day); Unlimited from ~$20/mo",
    "hasFreeTier": true,
    "bestFor": "Students and researchers who need AI writing assistance with proper academic citation support built in.",
    "notFor": "Marketing or content teams needing ad copy, campaign generation, or SEO-focused article production.",
    "useCases": [
      "Academic essay writing",
      "Research paper drafting",
      "Citation generation",
      "Literature review support"
    ],
    "tags": [
      "academic",
      "research",
      "students",
      "citations"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "smodin",
    "name": "Smodin",
    "tagline": "Multilingual AI writer, paraphraser, and plagiarism detector",
    "websiteUrl": "https://smodin.io",
    "descriptionMd": "Smodin is a multilingual writing platform combining an AI essay and article writer, paraphrasing tool, plagiarism checker, and citation generator. It supports dozens of languages, making it a go-to for non-English speakers who need AI writing assistance. It's popular with students globally.",
    "pricingText": "Free tier (limited daily usage); Essentials from ~$10/mo, Productive ~$29/mo",
    "hasFreeTier": true,
    "bestFor": "Non-English-speaking students and writers who need multilingual AI writing, paraphrasing, and plagiarism checking in one place.",
    "notFor": "Enterprise teams or advanced marketers who need brand voice controls, CMS integrations, or high output volume.",
    "useCases": [
      "Multilingual essay writing",
      "Paraphrasing text",
      "Plagiarism checking",
      "Short-form content creation"
    ],
    "tags": [
      "multilingual",
      "paraphrasing",
      "plagiarism-checker",
      "students"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "wordvice-ai",
    "name": "Wordvice AI",
    "tagline": "AI proofreader and paraphraser for academic writing",
    "websiteUrl": "https://wordvice.ai",
    "descriptionMd": "Wordvice AI provides AI-powered proofreading, paraphrasing, and text summarization with a focus on academic and professional English editing. It's backed by Wordvice, a professional human editing service, giving it credibility with researchers and non-native English speakers. The tool emphasizes natural, fluent academic English output.",
    "pricingText": "Free plan (limited characters per use); Premium from ~$9.99/mo",
    "hasFreeTier": true,
    "bestFor": "Non-native English speakers and academics who need thorough proofreading and paraphrasing aimed at polished academic prose.",
    "notFor": "Content marketers needing bulk generation, SEO tooling, or marketing-copy templates.",
    "useCases": [
      "Academic proofreading",
      "Paraphrasing for clarity",
      "Text summarization",
      "Professional email editing"
    ],
    "tags": [
      "proofreading",
      "academic",
      "paraphrasing",
      "grammar"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "paragraph-ai",
    "name": "ParagraphAI",
    "tagline": "AI writing keyboard and assistant for mobile and everyday tasks",
    "websiteUrl": "https://paragraphai.com",
    "descriptionMd": "ParagraphAI offers an AI writing assistant accessible via a mobile keyboard, browser extension, and web app, enabling quick email replies, message drafting, and short content generation anywhere. It targets professionals who need fast writing help on mobile and desktop. It supports custom tone and style preferences.",
    "pricingText": "Free plan available; Premium from ~$8-10/mo",
    "hasFreeTier": true,
    "bestFor": "Professionals who need fast, on-the-go AI writing help directly in their phone keyboard and browser across all apps.",
    "notFor": "Long-form content creators or SEO writers who need research, outlining, and optimization workflows.",
    "useCases": [
      "Mobile email drafting",
      "Quick message replies",
      "Social media captions",
      "Tone and style customization"
    ],
    "tags": [
      "mobile",
      "keyboard",
      "browser-extension",
      "email"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "type-ai",
    "name": "Type",
    "tagline": "AI-first document editor for fast content drafting",
    "websiteUrl": "https://type.ai",
    "descriptionMd": "Type is an AI-native document editor that generates first drafts, suggests rewrites, and continues text inline, designed to feel like a smart writing environment rather than a template tool. It emphasizes speed from blank page to polished draft for marketers and founders. Context-aware suggestions update as the document evolves.",
    "pricingText": "Free trial available; paid plans from ~$29/mo",
    "hasFreeTier": false,
    "bestFor": "Marketers, founders, and content creators who want a fast, AI-native editor that drafts and rewrites within a clean document environment.",
    "notFor": "Users who need academic citation tools, fiction-specific features, or deep SEO scoring.",
    "useCases": [
      "Blog post drafting",
      "Marketing copy creation",
      "First-draft generation",
      "Newsletter writing"
    ],
    "tags": [
      "ai-writer",
      "document-editor",
      "drafting",
      "marketing"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "photoroom",
    "name": "Photoroom",
    "tagline": "AI product photo studio for e-commerce backgrounds",
    "websiteUrl": "https://www.photoroom.com",
    "descriptionMd": "Photoroom is a mobile-first and web AI photo editor purpose-built for product photography, letting users instantly remove backgrounds, add AI-generated scenes, and batch-process thousands of e-commerce images. Its AI tools handle lighting, shadows, and staging to create studio-quality shots. Widely used by Shopify merchants and marketplace sellers.",
    "pricingText": "Free tier (watermarked, ~250 exports/mo); paid from ~$8/mo (Pro). Credit-based batch exports on higher tiers.",
    "hasFreeTier": true,
    "bestFor": "E-commerce sellers who need high-volume, studio-quality product photos without a physical studio setup.",
    "notFor": "Complex creative illustrations or artistic image generation — it is optimised for product photography, not generative art.",
    "useCases": [
      "Remove product backgrounds",
      "Generate lifestyle scene backgrounds",
      "Batch-process product photos",
      "Resize listing images at scale"
    ],
    "tags": [
      "product-photography",
      "background-removal",
      "e-commerce",
      "photo-editing"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "clipdrop",
    "name": "Clipdrop",
    "tagline": "Suite of AI image editing tools in one workspace",
    "websiteUrl": "https://clipdrop.co",
    "descriptionMd": "Clipdrop bundles a broad set of AI image utilities — background removal, object cleanup, relighting, upscaling, text removal, and image generation — into a single browser-based interface. It is especially valued by designers who need quick, one-click corrections on photos. An API lets developers embed individual tools.",
    "pricingText": "Free tier with daily limits and watermark; Pro ~$9/mo (no watermark, HD). API priced per operation.",
    "hasFreeTier": true,
    "bestFor": "Designers and developers who need a versatile toolkit of image correction utilities (remove objects, relight, upscale) rather than just a generator.",
    "notFor": "Generating highly artistic or stylised images from scratch — its generative features are secondary to its editing tools.",
    "useCases": [
      "Remove backgrounds or objects",
      "Relight product or portrait photos",
      "Upscale low-resolution images",
      "Clean up text or logos"
    ],
    "tags": [
      "background-removal",
      "image-editing",
      "upscaling",
      "api"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "nightcafe",
    "name": "NightCafe",
    "tagline": "AI art generator with many models and community challenges",
    "websiteUrl": "https://creator.nightcafe.studio",
    "descriptionMd": "NightCafe is a browser-based AI art platform that aggregates many models including Stable Diffusion, DALL-E, and FLUX, letting users generate artwork without installing anything locally. The platform has a strong community layer — daily challenges, voting, and galleries — where users can earn extra credits. It is credit-based but offers a meaningful permanent free tier with daily credits.",
    "pricingText": "Free tier: ~5 credits/day; paid plans from ~$6/mo for more credits. Community activity earns bonus credits.",
    "hasFreeTier": true,
    "bestFor": "Hobbyist artists who want to experiment across many AI models and enjoy a community-driven, gamified creative experience.",
    "notFor": "High-volume commercial production workflows that need consistent output at scale and low per-image cost.",
    "useCases": [
      "Experiment with multiple AI art models",
      "Join daily art challenges",
      "Generate stylised artwork",
      "Explore community prompts"
    ],
    "tags": [
      "ai-art",
      "community",
      "multi-model",
      "credit-based"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "civitai",
    "name": "Civitai",
    "tagline": "Large open-source AI model sharing community",
    "websiteUrl": "https://civitai.com",
    "descriptionMd": "Civitai is a large community hub for sharing and downloading Stable Diffusion models, LoRAs, embeddings, and checkpoints, with tens of thousands of community-trained models. Beyond model hosting, it offers a cloud-based generator using its Buzz credit currency and on-server model training. Users earn Buzz through site activity or can purchase more.",
    "pricingText": "Free to browse and download models; cloud generation uses Buzz credits (earnable or purchasable). Membership from ~$10/mo.",
    "hasFreeTier": true,
    "bestFor": "Power users who want to browse, download, and run community fine-tuned Stable Diffusion models or train custom LoRAs without a local GPU.",
    "notFor": "Casual users who just want a simple prompt-to-image experience — the breadth and Buzz system have a learning curve.",
    "useCases": [
      "Download fine-tuned models and LoRAs",
      "Generate images in-browser",
      "Train custom LoRA models",
      "Discover community AI art styles"
    ],
    "tags": [
      "model-sharing",
      "stable-diffusion",
      "community",
      "lora"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "magnific-ai",
    "name": "Magnific AI",
    "tagline": "AI upscaler that adds creative detail at high resolution",
    "websiteUrl": "https://www.magnific.com",
    "descriptionMd": "Magnific AI is a premium AI upscaler and image enhancer that uses generative AI to hallucinate and add coherent new detail (textures, skin pores, fabric weave) during upscaling, guided by a creativity slider. It is widely used by photographers and digital artists to turn midres outputs or photographs into print-ready files. No free plan is offered.",
    "pricingText": "No free tier or trial. Plans from ~$39/mo (Pro) to ~$99/mo (Premium) and higher (Business). Credit-based; credits do not roll over.",
    "hasFreeTier": false,
    "bestFor": "Photographers and digital artists who need to upscale AI-generated or photographic images to print quality with added detail.",
    "notFor": "Users who want to generate images from text prompts — Magnific only enhances or upscales existing images.",
    "useCases": [
      "Upscale AI images to print resolution",
      "Add texture and detail to photos",
      "Enhance product imagery for print",
      "Improve resolution of old photos"
    ],
    "tags": [
      "upscaling",
      "enhancement",
      "photography",
      "print"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "getimg-ai",
    "name": "Getimg.ai",
    "tagline": "Full-stack AI image platform: generate, edit, train, animate",
    "websiteUrl": "https://getimg.ai",
    "descriptionMd": "Getimg.ai is a comprehensive web-based AI image platform supporting text-to-image across many models (including FLUX and SDXL), AI editing, inpainting, custom model training via DreamBooth, and basic image-to-video. The free tier provides 100 credits per month with no credit card. Paid plans unlock commercial rights, higher resolution, and video.",
    "pricingText": "Free tier: 100 credits/mo (no card required). Paid plans from ~$12/mo. Credit-based.",
    "hasFreeTier": true,
    "bestFor": "Creators who want a single platform covering generation, editing, and custom model training without local infrastructure.",
    "notFor": "Enterprise teams needing strict SLA, dedicated compute, or on-premise deployment.",
    "useCases": [
      "Generate images with FLUX or SDXL",
      "Train a custom DreamBooth model",
      "Inpaint and edit image regions",
      "Animate generated images"
    ],
    "tags": [
      "text-to-image",
      "model-training",
      "inpainting",
      "flux"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "mage-space",
    "name": "Mage.space",
    "tagline": "Unlimited free Stable Diffusion generation in your browser",
    "websiteUrl": "https://www.mage.space",
    "descriptionMd": "Mage.space offers unlimited free text-to-image generation using Stable Diffusion and FLUX models directly in the browser, with no account required for basic use. The free tier runs many models with safety filters and outputs to a public gallery; paid tiers unlock private images, faster speeds, LoRA support, and custom model imports. It is one of the most accessible free Stable Diffusion frontends.",
    "pricingText": "Free tier: unlimited generations, many models, slower speeds, public gallery. Paid plans from ~$8/mo to ~$30/mo.",
    "hasFreeTier": true,
    "bestFor": "Users who want to experiment freely with Stable Diffusion in a browser without installation, accounts, or credit limits.",
    "notFor": "Professional workflows requiring private outputs, fast generation speeds, or guaranteed uptime — those require a paid tier.",
    "useCases": [
      "Generate unlimited free images",
      "Browse and switch between models",
      "Use LoRAs and custom imports (paid)",
      "Rapid prompt experimentation"
    ],
    "tags": [
      "stable-diffusion",
      "free",
      "no-install",
      "browser-based"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "artbreeder",
    "name": "Artbreeder",
    "tagline": "Blend and evolve images with GAN-powered sliders",
    "websiteUrl": "https://www.artbreeder.com",
    "descriptionMd": "Artbreeder is a collaborative AI art tool that uses GANs to let users blend existing images by adjusting sliders for traits like age, style, or mood, and to mix multiple images together. Its community remixing model means creations build on each other. It is particularly known for portrait and character creation rather than arbitrary text-to-image.",
    "pricingText": "Free tier: ~10 credits/mo with public images. Paid plans from ~$7-9/mo (Starter) up to ~$39/mo.",
    "hasFreeTier": true,
    "bestFor": "Artists and storytellers who want to blend, evolve, and remix portraits or character art through visual sliders rather than text prompts.",
    "notFor": "Users who want precise photorealistic outputs from detailed text prompts — its GAN approach produces a distinct, blended aesthetic.",
    "useCases": [
      "Create and evolve character portraits",
      "Blend two images into hybrids",
      "Generate landscapes by gene mixing",
      "Explore community remixes"
    ],
    "tags": [
      "gan",
      "character-creation",
      "collaborative",
      "blending"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lexica",
    "name": "Lexica",
    "tagline": "Stable Diffusion search engine and image generator",
    "websiteUrl": "https://lexica.art",
    "descriptionMd": "Lexica started as a searchable database of Stable Diffusion images and their prompts, making it easy to discover how to prompt for specific styles. It has since added its own fast image generator (Aperture model) with a free tier. The dual role — search engine and generator — makes it useful for learning prompting by studying real examples.",
    "pricingText": "Free tier: ~100 generations/mo. Paid plans from ~$10/mo (Starter) to ~$60/mo (Max). Annual billing saves ~20%.",
    "hasFreeTier": true,
    "bestFor": "Prompters who want to discover and study effective Stable Diffusion prompts while also having a fast generator to test them.",
    "notFor": "Users who need the latest frontier models or very high generation volume — Lexica uses its own Aperture model.",
    "useCases": [
      "Search images by visual style",
      "Study prompts for an aesthetic",
      "Generate with the Aperture model",
      "Find prompt inspiration"
    ],
    "tags": [
      "prompt-search",
      "stable-diffusion",
      "discovery",
      "generation"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "remove-bg",
    "name": "remove.bg",
    "tagline": "One-click AI background removal for photos",
    "websiteUrl": "https://www.remove.bg",
    "descriptionMd": "remove.bg is a focused single-purpose tool that automatically detects and removes image backgrounds in seconds using AI. It is widely used by e-commerce teams, designers, and photographers for product images and portraits. The free tier delivers reduced-resolution results; full HD output requires credits. An API enables bulk processing.",
    "pricingText": "Free tier: unlimited removals at low resolution. Paid from ~$3 one-off or subscriptions from ~$8/mo for HD credits. API priced per image.",
    "hasFreeTier": true,
    "bestFor": "E-commerce sellers and designers who need fast, accurate background removal on product photos or portraits at volume.",
    "notFor": "Creative image generation or editing beyond background removal — it does one thing only.",
    "useCases": [
      "Remove product photo backgrounds",
      "Create transparent-background assets",
      "Bulk process via API",
      "Prepare portrait cutouts"
    ],
    "tags": [
      "background-removal",
      "product-photography",
      "api",
      "e-commerce"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "vance-ai",
    "name": "Vance AI",
    "tagline": "AI photo enhancement: upscale, denoise, sharpen, restore",
    "websiteUrl": "https://vanceai.com",
    "descriptionMd": "Vance AI is an all-in-one AI photo enhancement platform covering image upscaling, noise reduction, sharpening, background removal, face restoration, and photo-to-art — accessible via browser or desktop app. Each tool is available individually or as a bundle. It is particularly strong for restoring old, blurry, or low-resolution photographs.",
    "pricingText": "Free tier: ~3 credits/mo (previews). Paid subscriptions from ~$9.90/mo (100 credits). One-time credit packs available.",
    "hasFreeTier": true,
    "bestFor": "Photographers and archivists who need to restore, denoise, or upscale old and low-quality photos without complex software.",
    "notFor": "AI art generation from text prompts — Vance AI works only on enhancing or transforming existing images.",
    "useCases": [
      "Upscale low-resolution photos",
      "Restore old or damaged photographs",
      "Remove noise from scanned images",
      "Apply AI art styles to photos"
    ],
    "tags": [
      "upscaling",
      "photo-restoration",
      "enhancement",
      "denoising"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "pictory-ai",
    "name": "Pictory",
    "tagline": "Turn text and articles into branded videos automatically",
    "websiteUrl": "https://pictory.ai",
    "descriptionMd": "Pictory is an AI-powered video creation platform that converts blog posts, scripts, and long-form content into short shareable videos. It pairs text with relevant stock footage from a large library. Widely used by content marketers and course creators for automated video repurposing at scale.",
    "pricingText": "Paid plans start around ~$19-23/mo (billed annually); no permanent free plan, 14-day free trial only.",
    "hasFreeTier": false,
    "bestFor": "Bloggers and marketers who want to repurpose written content into social-ready videos without manual editing.",
    "notFor": "Anyone needing custom motion graphics, complex timelines, or AI-generated talking avatars.",
    "useCases": [
      "Blog-to-video repurposing",
      "Social media snippet creation",
      "Course and training content",
      "Faceless video channels"
    ],
    "tags": [
      "text-to-video",
      "content-repurposing",
      "social-media",
      "stock-footage"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "veed-io",
    "name": "VEED.IO",
    "tagline": "Browser-based AI video editor with auto-subtitles and avatars",
    "websiteUrl": "https://www.veed.io",
    "descriptionMd": "VEED is a browser-based video editor used by millions of creators. It offers AI auto-subtitles in many languages, filler-word removal, AI avatars, dubbing, and one-click aspect-ratio resizing for multi-platform publishing. Premium AI features run on a credit system that resets monthly.",
    "pricingText": "Free plan available (with watermark); paid plans start around ~$12-24/mo billed annually. AI-heavy features consume credits at varying rates.",
    "hasFreeTier": true,
    "bestFor": "Solo creators and small teams who want an all-in-one browser editor with strong subtitle and dubbing AI — no install needed.",
    "notFor": "High-volume AI video generation workflows where per-credit costs can add up quickly.",
    "useCases": [
      "Auto-subtitle and captioning",
      "Video dubbing and translation",
      "AI avatar spokesperson videos",
      "Social media multi-format export"
    ],
    "tags": [
      "browser-editor",
      "subtitles",
      "dubbing",
      "ai-avatar"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "d-id",
    "name": "D-ID",
    "tagline": "Animate still photos into talking AI avatars at scale",
    "websiteUrl": "https://www.d-id.com",
    "descriptionMd": "D-ID's Creative Reality Studio turns static images into lifelike talking-head videos using deep-learning face animation. It supports 100+ languages, multiple avatar generations, interactive web agents, and video translation with re-rendered lip sync. Used widely in e-learning, marketing, and customer support.",
    "pricingText": "Plans reportedly start around ~$4.70/mo (Lite) up to ~$108/mo (Advanced); 14-day free trial. Verify current tiers at d-id.com.",
    "hasFreeTier": false,
    "bestFor": "Teams that need to produce multilingual talking-head spokesperson videos from a photo, without filming anyone.",
    "notFor": "Workflows requiring photorealistic full-body motion or complex scene composition beyond head-and-shoulders format.",
    "useCases": [
      "E-learning narrator videos",
      "Multilingual marketing content",
      "Customer-support digital agents",
      "Video translation and lip-sync"
    ],
    "tags": [
      "ai-avatar",
      "talking-head",
      "face-animation",
      "multilingual"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "colossyan",
    "name": "Colossyan",
    "tagline": "AI video studio with many avatars for L&D and HR teams",
    "websiteUrl": "https://www.colossyan.com",
    "descriptionMd": "Colossyan is an enterprise-focused AI video platform primarily targeting learning-and-development teams. It provides 170+ stock AI avatars, custom avatar creation, multi-scene editing, and auto-translation into dozens of languages. The platform emphasizes compliance-friendly content creation with no camera or studio needed.",
    "pricingText": "Free plan available (limited minutes/mo, watermarked); paid plans start around ~$19-27/mo. Business higher; Enterprise custom.",
    "hasFreeTier": true,
    "bestFor": "L&D and HR teams that regularly produce training videos at scale and need diverse, professional-looking presenters.",
    "notFor": "Individual content creators or social-media-first workflows where the pricing is disproportionate to output volume.",
    "useCases": [
      "Corporate training and onboarding",
      "HR policy explanation videos",
      "Multilingual employee communications",
      "Compliance and safety training"
    ],
    "tags": [
      "ai-avatar",
      "enterprise",
      "learning-development",
      "hr"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hour-one",
    "name": "Hour One",
    "tagline": "AI presenter videos for enterprise training and comms",
    "websiteUrl": "https://hourone.ai",
    "descriptionMd": "Hour One is an enterprise AI video platform that converts text scripts into polished presenter-led videos using realistic virtual humans. It is designed for internal communications, L&D, and marketing teams that need consistent on-brand video output without scheduling actors or studios. The platform offers custom avatar creation.",
    "pricingText": "Free plan reportedly available; paid plans start around ~$30/mo. Enterprise custom. Verify at hourone.ai.",
    "hasFreeTier": true,
    "bestFor": "Enterprise teams that want polished, brand-consistent presenter videos produced entirely from scripts, at high throughput.",
    "notFor": "Small creators or freelancers — the value proposition scales with volume and team usage.",
    "useCases": [
      "Internal corporate communications",
      "Employee onboarding videos",
      "Product explainer content",
      "Multilingual training localization"
    ],
    "tags": [
      "ai-avatar",
      "enterprise",
      "text-to-video",
      "presenter"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "vyond",
    "name": "Vyond",
    "tagline": "Business animation platform for explainer and training videos",
    "websiteUrl": "https://www.vyond.com",
    "descriptionMd": "Vyond is a long-established business animation platform that lets non-designers create character-based animated videos for training, marketing, and internal comms. It offers customizable animated characters, scene templates, lip-synced dialogue, and an AI script assistant. Pricing is oriented toward business and enterprise buyers.",
    "pricingText": "No permanent free plan; plans start around ~$58/mo billed annually. Monthly billing higher. AI features have credit caps — verify at vyond.com.",
    "hasFreeTier": false,
    "bestFor": "Instructional designers and corporate trainers who need template-driven character animation without animation skills.",
    "notFor": "Creators who need photorealistic video generation or cheap individual subscriptions — pricing is enterprise-oriented.",
    "useCases": [
      "Employee training videos",
      "Explainer and product demo animation",
      "Internal communications",
      "Sales enablement content"
    ],
    "tags": [
      "animation",
      "explainer-video",
      "corporate-training",
      "character-animation"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lumen5",
    "name": "Lumen5",
    "tagline": "Transform articles into engaging social videos",
    "websiteUrl": "https://lumen5.com",
    "descriptionMd": "Lumen5 is one of the earliest AI-assisted video creation tools, designed to convert written content into video slideshows with matching stock media. It uses NLP to extract key sentences, pairs them with visuals, and produces branded video content for social media. Popular with marketing teams for content repurposing at volume.",
    "pricingText": "Free Community plan (watermarked, ~5 videos/mo); paid plans start at ~$29/mo (Basic) up to ~$199/mo (Professional).",
    "hasFreeTier": true,
    "bestFor": "Marketing teams and bloggers who want a fast, template-driven way to repurpose written content into social video.",
    "notFor": "Creators needing talking-head avatars, AI voiceover, or dynamic motion graphics — Lumen5 is a slideshow-style format.",
    "useCases": [
      "Blog-to-video repurposing",
      "Social media content calendar",
      "Brand awareness campaigns",
      "Newsletter-to-video conversion"
    ],
    "tags": [
      "text-to-video",
      "content-repurposing",
      "social-media",
      "marketing"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "tavus",
    "name": "Tavus",
    "tagline": "Personalized AI video with your own digital replica",
    "websiteUrl": "https://www.tavus.io",
    "descriptionMd": "Tavus is a developer-focused AI video platform that lets you create a digital replica of yourself or a spokesperson, then generate many personalized videos from a single recording. Its Conversational Video Interface enables real-time interactive video agents. Used for personalized outreach, onboarding, and embedded AI video assistants.",
    "pricingText": "Starter ~$1/mo (very limited); Hobbyist ~$39/mo; Business ~$199/mo; Enterprise custom. Usage beyond plan billed pay-as-you-go.",
    "hasFreeTier": false,
    "bestFor": "Sales teams and SaaS products needing to embed personalized or interactive AI video at scale via API.",
    "notFor": "Casual content creators — the platform is API-first and pricing scales with video volume.",
    "useCases": [
      "Personalized sales outreach videos",
      "AI onboarding video assistants",
      "Real-time conversational video",
      "Developer-embedded video"
    ],
    "tags": [
      "personalized-video",
      "digital-replica",
      "api",
      "conversational-ai"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hedra",
    "name": "Hedra",
    "tagline": "Animate characters from images and audio with AI",
    "websiteUrl": "https://www.hedra.com",
    "descriptionMd": "Hedra is an AI character video platform focused on turning still images and voice audio into expressive talking characters, powered by its Character model. It supports many video and image generation models under one credit balance, and offers real-time Live Avatars for streaming. Popular among indie creators and developers.",
    "pricingText": "Free tier available (~100 credits/mo, watermarked); paid plans at ~$15/mo (Basic), ~$30/mo (Creator), ~$75/mo (Professional) with commercial rights.",
    "hasFreeTier": true,
    "bestFor": "Creators and developers who want expressive character animation from a photo plus a voice clip, with multiple models.",
    "notFor": "Enterprise teams needing SLA, dedicated support, or native LMS/CRM integrations.",
    "useCases": [
      "Animated character content",
      "Talking avatar social videos",
      "Indie game and VTuber content",
      "Prototyping AI video agents"
    ],
    "tags": [
      "character-animation",
      "ai-avatar",
      "image-to-video",
      "indie-creator"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "submagic",
    "name": "Submagic",
    "tagline": "AI captions and short-form video editing for creators",
    "websiteUrl": "https://www.submagic.co",
    "descriptionMd": "Submagic auto-generates stylized captions, adds B-roll, and trims long-form video into short clips optimized for TikTok, Reels, and Shorts. It focuses specifically on the short-form creator workflow — accurate transcription, emoji-punctuated captions, and one-click platform formatting.",
    "pricingText": "Starter plan around ~$12/mo (limited videos, 1080p); higher tiers up to Enterprise. Verify at submagic.co.",
    "hasFreeTier": false,
    "bestFor": "Short-form video creators on TikTok, Reels, and Shorts who want polished auto-captions and clip editing without manual work.",
    "notFor": "Long-form video producers or anyone needing AI avatars, dubbing, or full video generation — Submagic only edits existing footage.",
    "useCases": [
      "Auto-caption for Reels and TikTok",
      "Podcast clip repurposing",
      "Long-form to short-form trimming",
      "Social caption styling"
    ],
    "tags": [
      "captions",
      "short-form",
      "social-media",
      "repurposing"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "vidyo-ai",
    "name": "Vidyo.ai",
    "tagline": "Auto-clip long videos into viral short-form content",
    "websiteUrl": "https://vidyo.ai",
    "descriptionMd": "Vidyo.ai automatically identifies the most engaging moments in long-form video — podcasts, webinars, streams — and clips them into captioned short videos for TikTok, YouTube Shorts, and Reels. It handles auto-reframing, caption styling, and scheduling in a single workflow at an accessible price point.",
    "pricingText": "Free plan available; paid plans start around ~$15-25/mo (Lite/Essential tiers). Higher Pro plan with scheduling ~$49/mo — verify at vidyo.ai.",
    "hasFreeTier": true,
    "bestFor": "Podcasters, streamers, and webinar hosts who want to automatically extract and publish short clips without reviewing hours of footage.",
    "notFor": "Teams needing AI avatar generation, enterprise branding, or deep video production pipelines.",
    "useCases": [
      "Podcast-to-shorts repurposing",
      "Webinar highlight clipping",
      "Live stream clip extraction",
      "Multi-platform short publishing"
    ],
    "tags": [
      "auto-clipping",
      "short-form",
      "repurposing",
      "podcasts"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "codeium",
    "name": "Codeium",
    "tagline": "Free AI code completion for 70+ languages",
    "websiteUrl": "https://codeium.com",
    "descriptionMd": "Codeium (now part of the Windsurf family) offers AI-powered autocomplete, chat, and search across 70+ programming languages and 40+ editors including VS Code, JetBrains, and Neovim. The free individual tier provides unlimited completions with no hard monthly cap.",
    "pricingText": "Free individual tier (unlimited completions); Pro reportedly ~$15/mo; Teams ~$30/user/mo — verify at codeium.com",
    "hasFreeTier": true,
    "bestFor": "Individual developers who want genuinely unlimited AI completions without a subscription.",
    "notFor": "Teams needing advanced admin controls or enterprise SSO on a budget.",
    "useCases": [
      "Inline code autocomplete",
      "Multi-line code generation",
      "AI chat in the IDE",
      "Code search across the repo"
    ],
    "tags": [
      "autocomplete",
      "multi-language",
      "ide-plugin",
      "free"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "aider",
    "name": "Aider",
    "tagline": "Open-source AI pair programmer in your terminal",
    "websiteUrl": "https://aider.chat",
    "descriptionMd": "Aider is a free, open-source CLI tool that lets you pair program with LLMs (Claude, GPT, Gemini, local models) directly from your terminal. It builds a map of your entire codebase, makes multi-file edits, and auto-commits changes with descriptive git messages. You pay only for the API tokens you consume.",
    "pricingText": "Free and open-source; you pay only underlying LLM API costs — light use ~$5-20/mo, heavy use can reach $50-200+/mo",
    "hasFreeTier": true,
    "bestFor": "Terminal-native developers who want maximum model flexibility and full open-source transparency.",
    "notFor": "Developers who prefer a GUI or managed IDE experience over a CLI workflow.",
    "useCases": [
      "Multi-file refactoring from a prompt",
      "Bug fixes via natural language",
      "Adding features to existing codebases",
      "Automated git commits"
    ],
    "tags": [
      "open-source",
      "cli",
      "multi-model",
      "terminal"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "qodo",
    "name": "Qodo",
    "tagline": "AI code review and test generation for teams",
    "websiteUrl": "https://www.qodo.ai",
    "descriptionMd": "Qodo (formerly CodiumAI) provides AI-driven code review inside VS Code and JetBrains and automated pull-request analysis on GitHub, GitLab, Bitbucket, and Azure DevOps. It focuses heavily on test generation and catching logic bugs before they ship. The free tier includes monthly PR reviews and IDE credits.",
    "pricingText": "Free tier (limited PR reviews + IDE credits); Teams ~$30/user/mo (annual); Enterprise custom — verify at qodo.ai",
    "hasFreeTier": true,
    "bestFor": "Teams that want AI-assisted PR reviews and automated test generation baked into their git workflow.",
    "notFor": "Solo developers who only need inline autocomplete and don't work with pull requests.",
    "useCases": [
      "Automated PR code review",
      "AI-generated unit tests",
      "In-IDE code quality suggestions",
      "Logic-bug detection"
    ],
    "tags": [
      "code-review",
      "testing",
      "pr-automation",
      "ide-plugin"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "devin",
    "name": "Devin",
    "tagline": "Autonomous AI software engineer that ships PRs",
    "websiteUrl": "https://devin.ai",
    "descriptionMd": "Devin by Cognition is an autonomous AI agent that can plan, write code, run tests, fix bugs, and open pull requests with minimal human direction. It operates inside a sandboxed environment with its own browser, terminal, and editor. Devin 2.0 cut the entry price dramatically.",
    "pricingText": "No permanent free tier; starts at ~$20/mo (pay-per-ACU); Team plan ~$500/mo; Enterprise custom — verify at devin.ai",
    "hasFreeTier": false,
    "bestFor": "Engineering teams that want to delegate full end-to-end tasks — from issue to merged PR — without constant supervision.",
    "notFor": "Developers who need deep IDE integration for line-by-line pair programming rather than delegated autonomous tasks.",
    "useCases": [
      "Autonomous feature implementation",
      "Bug triage and repair",
      "Code migration and refactoring",
      "Writing and running tests"
    ],
    "tags": [
      "autonomous-agent",
      "full-stack",
      "agentic",
      "enterprise"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "coderabbit",
    "name": "CodeRabbit",
    "tagline": "AI code review bot for GitHub and GitLab PRs",
    "websiteUrl": "https://www.coderabbit.ai",
    "descriptionMd": "CodeRabbit automatically reviews every pull request with contextual inline comments, security checks, and actionable suggestions. It integrates with GitHub, GitLab, Bitbucket, and Azure DevOps. Public and open-source repos can use the full feature set for free.",
    "pricingText": "Free for public/open-source repos; Pro ~$24/user/mo; Pro Plus ~$48/user/mo; Enterprise custom — verify at coderabbit.ai",
    "hasFreeTier": true,
    "bestFor": "Teams who want automated, contextual PR reviews on every merge request without changing their git workflow.",
    "notFor": "Developers who want in-editor autocomplete — CodeRabbit focuses on PR-level review, not real-time coding.",
    "useCases": [
      "Automated pull request summaries",
      "Inline review comments",
      "Security issue flagging",
      "Review coverage reporting"
    ],
    "tags": [
      "code-review",
      "pr-automation",
      "github",
      "gitlab"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "augment-code",
    "name": "Augment Code",
    "tagline": "AI coding agent built for large, complex codebases",
    "websiteUrl": "https://www.augmentcode.com",
    "descriptionMd": "Augment Code is an AI coding assistant designed for enterprise-scale repositories where cross-file context matters. It indexes the full codebase and provides inline completions, multi-step agentic edits, and architectural awareness. Available as a VS Code and JetBrains extension.",
    "pricingText": "Indie from ~$20/mo; Developer ~$50/mo; Business from ~$100/mo; Enterprise custom — verify at augmentcode.com",
    "hasFreeTier": false,
    "bestFor": "Engineers working in large monorepos or microservices who need AI that understands the whole codebase.",
    "notFor": "Solo developers on greenfield side projects who don't need deep codebase indexing.",
    "useCases": [
      "Full-codebase contextual completion",
      "Multi-file agentic refactoring",
      "Architecture-aware generation",
      "Onboarding to large repos"
    ],
    "tags": [
      "enterprise",
      "large-codebase",
      "agentic",
      "ide-plugin"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "pieces-for-developers",
    "name": "Pieces for Developers",
    "tagline": "AI context manager and code snippet organizer",
    "websiteUrl": "https://pieces.app",
    "descriptionMd": "Pieces for Developers captures, organizes, and resurfaces code snippets, terminal commands, and dev context across your workflow — browser, IDE, terminal, and notes. Its on-device AI can tag, search, and explain snippets without sending data to the cloud. The free individual plan is permanent.",
    "pricingText": "Free individual plan (permanent, local AI, unlimited snippets); Teams pricing on request; Enterprise custom",
    "hasFreeTier": true,
    "bestFor": "Developers drowning in browser tabs and copy-paste chaos who want a unified AI layer across their dev tools.",
    "notFor": "Teams looking for a pure code-completion or PR-review tool — Pieces is a context manager, not an autocomplete engine.",
    "useCases": [
      "Save and tag reusable snippets",
      "AI-powered snippet search",
      "On-device context capture",
      "Cross-tool workflow integration"
    ],
    "tags": [
      "snippets",
      "context-manager",
      "on-device-ai",
      "workflow"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sweep-ai",
    "name": "Sweep",
    "tagline": "AI developer that turns GitHub issues into pull requests",
    "websiteUrl": "https://sweep.dev",
    "descriptionMd": "Sweep is an AI coding agent that reads your GitHub issues or Jira tickets, understands your codebase, writes the code, and opens a pull request to review. Originally a GitHub App, Sweep has expanded to a JetBrains IDE plugin with AI completions and agentic edits.",
    "pricingText": "Free tier for open-source repos; paid plans from ~$120/mo — verify current plans at sweep.dev",
    "hasFreeTier": true,
    "bestFor": "Teams who want to convert GitHub issues into merged PRs with minimal manual coding effort.",
    "notFor": "Developers who want synchronous pair-programming in the editor rather than async issue-to-PR automation.",
    "useCases": [
      "Issue-to-PR automation",
      "Boilerplate generation",
      "Bug fix from a ticket",
      "Small feature implementation"
    ],
    "tags": [
      "github",
      "issue-automation",
      "pr-bot",
      "agentic"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "zed-ai",
    "name": "Zed",
    "tagline": "Blazing-fast open-source editor with built-in AI",
    "websiteUrl": "https://zed.dev",
    "descriptionMd": "Zed is a high-performance, open-source code editor written in Rust, built for speed and real-time collaboration. It ships with native AI features including inline edit predictions, an AI assistant panel, and support for multiple model providers. The base editor and a monthly allotment of edit predictions are free.",
    "pricingText": "Free (editor + ~2,000 edit predictions/mo); Pro ~$10/user/mo (unlimited predictions + tokens); Business ~$30/seat/mo — verify at zed.dev",
    "hasFreeTier": true,
    "bestFor": "Performance-obsessed developers who want a snappy native editor with flexible AI model choice baked in.",
    "notFor": "Developers deeply invested in the VS Code extension ecosystem — Zed has a smaller extension library.",
    "useCases": [
      "Ultra-fast code editing",
      "AI-assisted inline edits",
      "Real-time collaborative coding",
      "Multi-model AI assistant"
    ],
    "tags": [
      "editor",
      "open-source",
      "rust",
      "multi-model"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "mutable-ai",
    "name": "Mutable AI",
    "tagline": "AI-accelerated development with codebase chat",
    "websiteUrl": "https://mutable.ai",
    "descriptionMd": "Mutable AI offers AI autocomplete, codebase-level chat, and automated documentation generation for software teams. It supports connecting your entire repository so the AI can answer questions and suggest edits with full project context. It integrates with standard editors via an extension.",
    "pricingText": "Free tier reportedly available; paid plans from ~$20/mo — verify current plans at mutable.ai",
    "hasFreeTier": true,
    "bestFor": "Developers who want AI that can both write code and auto-generate up-to-date documentation from the codebase.",
    "notFor": "Teams that need enterprise-grade compliance, audit logs, or on-premises deployment.",
    "useCases": [
      "AI code autocomplete",
      "Natural language codebase Q&A",
      "Automated doc generation",
      "Refactoring with repo context"
    ],
    "tags": [
      "autocomplete",
      "documentation",
      "codebase-chat",
      "ide-plugin"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "continue-dev",
    "name": "Continue",
    "tagline": "Open-source AI coding assistant for VS Code and JetBrains",
    "websiteUrl": "https://www.continue.dev",
    "descriptionMd": "Continue is an open-source IDE extension that brings customizable AI chat, inline autocomplete, and agentic edits to VS Code and JetBrains. It supports any LLM provider (Anthropic, OpenAI, local Ollama, etc.) and keeps code on your machine. Its open-source repository remains active on GitHub.",
    "pricingText": "Free and open-source (self-hosted with your own API keys); hosted plans reportedly from ~$10/mo — check continue.dev",
    "hasFreeTier": true,
    "bestFor": "Developers who want a fully open-source, self-hosted AI assistant with control over which models and data leave their machine.",
    "notFor": "Developers who prefer a fully managed, no-configuration coding assistant out of the box.",
    "useCases": [
      "Bring-your-own-model AI chat",
      "Inline autocomplete with local LLMs",
      "Codebase-aware Q&A",
      "Custom AI workflows"
    ],
    "tags": [
      "open-source",
      "self-hosted",
      "vscode",
      "jetbrains"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "decagon",
    "name": "Decagon",
    "tagline": "AI concierge that resolves most support tickets autonomously",
    "websiteUrl": "https://decagon.ai",
    "descriptionMd": "Decagon is an enterprise AI platform that builds and scales AI support agents using LLMs to handle chat, email, and voice tickets end-to-end. Its agents can autonomously process refunds, answer product questions, and take actions across systems. Customers report high deflection rates.",
    "pricingText": "Custom enterprise pricing; contact sales — no public tiers.",
    "hasFreeTier": false,
    "bestFor": "Enterprise and mid-market teams needing high-autonomy agents that take real actions across systems, not just answer questions.",
    "notFor": "Small businesses or teams needing self-serve setup — Decagon is a white-glove enterprise product.",
    "useCases": [
      "Autonomous ticket resolution",
      "Refund and subscription management",
      "Multi-channel deflection",
      "Voice support"
    ],
    "tags": [
      "ai-agent",
      "enterprise",
      "ticket-deflection",
      "autonomous"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "maven-agi",
    "name": "Maven AGI",
    "tagline": "Enterprise AI agent platform for support automation",
    "websiteUrl": "https://www.mavenagi.com",
    "descriptionMd": "Maven AGI is an enterprise AI agent platform built to automate customer support across voice, chat, and email with many native connectors to Salesforce, Zendesk, Freshdesk, and Twilio. Its agents can handle complex multi-step support flows and integrate deeply into existing CX stacks.",
    "pricingText": "Custom pricing only; annual contracts — contact sales. No public tiers.",
    "hasFreeTier": false,
    "bestFor": "Large enterprises with complex CRM and telephony stacks who need a deeply integrated, voice-capable AI support platform.",
    "notFor": "Startups or SMBs — pricing and implementation complexity are oriented toward enterprise buyers.",
    "useCases": [
      "Voice-to-voice autonomous support",
      "Email and chat deflection",
      "CRM-integrated workflows",
      "Multi-channel automation"
    ],
    "tags": [
      "ai-agent",
      "enterprise",
      "voice-ai",
      "crm-integration"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "aisera",
    "name": "Aisera",
    "tagline": "Agentic AI for IT, HR, and customer service at scale",
    "websiteUrl": "https://aisera.com",
    "descriptionMd": "Aisera is an enterprise AI Service Management platform that automates support across IT, HR, and customer service through conversational AI agents, NLU search, and agentic automation. It integrates with 100+ enterprise apps including Salesforce and Zendesk.",
    "pricingText": "Custom enterprise pricing only; contact sales. No self-serve plans.",
    "hasFreeTier": false,
    "bestFor": "Large enterprises needing one AI platform to unify IT helpdesk, HR service, and customer service automation.",
    "notFor": "Teams with a single-channel use case or companies not on enterprise software stacks.",
    "useCases": [
      "IT helpdesk auto-resolution",
      "HR service request automation",
      "Customer query deflection",
      "Multi-department orchestration"
    ],
    "tags": [
      "enterprise-ai",
      "itsm",
      "conversational-ai",
      "agentic"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "cognigy-ai",
    "name": "Cognigy.AI",
    "tagline": "Enterprise conversational AI for contact centers",
    "websiteUrl": "https://www.cognigy.com",
    "descriptionMd": "Cognigy.AI is a leading enterprise conversational AI platform for automating contact center voice and chat interactions (now part of NICE). It powers AI agents for inbound and outbound customer service across 100+ languages and integrates with major CCaaS infrastructure.",
    "pricingText": "Custom pricing reportedly starting around ~$2,500/mo; enterprise-only, contact sales.",
    "hasFreeTier": false,
    "bestFor": "Global enterprises running high-volume contact centers needing multilingual voice and chat AI tied to CCaaS.",
    "notFor": "Companies not operating at contact-center scale — cost and complexity are prohibitive for smaller teams.",
    "useCases": [
      "Inbound call deflection",
      "Multilingual chat automation",
      "Agent assist for live agents",
      "Contact center orchestration"
    ],
    "tags": [
      "conversational-ai",
      "contact-center",
      "voice-ai",
      "enterprise"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "mavenoid",
    "name": "Mavenoid",
    "tagline": "AI support built specifically for physical products",
    "websiteUrl": "https://www.mavenoid.com",
    "descriptionMd": "Mavenoid is an intelligent support platform purpose-built for brands that sell physical or complex products — consumer electronics, smart home devices, machinery. Its AI handles troubleshooting, setup guidance, and warranty claims via text, image, and video, automating a large share of support requests.",
    "pricingText": "Custom pricing; contact sales. No self-serve pricing listed.",
    "hasFreeTier": false,
    "bestFor": "Hardware brands and manufacturers needing AI that understands technical product issues and step-by-step troubleshooting.",
    "notFor": "Pure software SaaS companies — its NLU is optimized for physical product support, not generic helpdesk.",
    "useCases": [
      "Product setup and troubleshooting",
      "Warranty claim triage",
      "Field service deflection",
      "Post-purchase support"
    ],
    "tags": [
      "hardware-support",
      "troubleshooting",
      "product-support",
      "technical-ai"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "eesel-ai",
    "name": "eesel AI",
    "tagline": "Self-serve AI teammate that lives inside your helpdesk",
    "websiteUrl": "https://www.eesel.ai",
    "descriptionMd": "eesel AI is a coachable AI support agent that plugs into Zendesk, Freshdesk, Jira, and other helpdesks within minutes, learns from past replies and docs, and handles frontline tickets autonomously or drafts replies for agent review. It offers a human-in-the-loop mode to control AI before it responds.",
    "pricingText": "Paid plans based on resolution volume; free trial offered — check website for current tiers.",
    "hasFreeTier": true,
    "bestFor": "SMBs and mid-market teams wanting a fast, self-serve AI agent inside their existing helpdesk without heavy implementation.",
    "notFor": "Enterprises needing deep CRM integrations, custom voice agents, or white-glove onboarding.",
    "useCases": [
      "Frontline ticket auto-response",
      "AI-drafted replies for review",
      "Knowledge-base deflection",
      "Multi-language support"
    ],
    "tags": [
      "smb",
      "self-serve",
      "helpdesk-ai",
      "zendesk"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lorikeet",
    "name": "Lorikeet",
    "tagline": "AI concierge that solves complex support cases end-to-end",
    "websiteUrl": "https://www.lorikeetcx.ai",
    "descriptionMd": "Lorikeet is an AI support agent that resolves complex, multi-step customer cases by connecting to backend systems like Stripe, Shopify, and Zendesk and taking real actions — not just answering questions. It is built for fast-growing tech companies with complex support workflows.",
    "pricingText": "Subscription/quote-based pricing; no public tiers — contact sales.",
    "hasFreeTier": false,
    "bestFor": "Fast-growing tech companies whose support requires agents to take actions in Stripe, Shopify, or other business systems.",
    "notFor": "Teams needing only FAQ-style deflection — Lorikeet's value is action-taking for complex cases.",
    "useCases": [
      "Complex case resolution",
      "Payment/subscription management",
      "Multi-step workflow automation",
      "Escalation to humans"
    ],
    "tags": [
      "agentic-ai",
      "complex-support",
      "workflow-automation",
      "fintech"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "twig-ai",
    "name": "Twig",
    "tagline": "Autonomous AI support with transparent per-ticket pricing",
    "websiteUrl": "https://www.twig.so",
    "descriptionMd": "Twig is an autonomous AI support platform that triages, self-evaluates, and resolves Tier 1 tickets end-to-end, integrating natively with Zendesk, Salesforce, Intercom, and others. It offers a transparent per-ticket pricing model and a small free tier with fast self-serve setup.",
    "pricingText": "Reportedly ~$5 per resolved ticket; free tier includes ~100 answers. Self-serve setup.",
    "hasFreeTier": true,
    "bestFor": "B2B SaaS and fintech support teams wanting transparent per-ticket pricing without long-term enterprise contracts.",
    "notFor": "High-volume consumer support where per-ticket pricing becomes costly versus seat-based models.",
    "useCases": [
      "Tier 1 ticket auto-resolution",
      "API-connected agent actions",
      "Multi-channel deployment",
      "Knowledge gap detection"
    ],
    "tags": [
      "b2b-saas",
      "per-ticket",
      "autonomous",
      "zendesk"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "help-scout",
    "name": "Help Scout",
    "tagline": "Human-centered help desk with built-in AI answers",
    "websiteUrl": "https://www.helpscout.com",
    "descriptionMd": "Help Scout is a widely-used customer support platform for SMBs and growing teams, with built-in AI: AI Answers (a chatbot resolving many conversations), AI Drafts for reply suggestions, AI Assist for tone, and AI Summarize for long threads. AI Answers uses pay-per-resolution pricing.",
    "pricingText": "Base plans from ~$20/user/mo (Standard); AI Answers charged separately (~$0.75 per resolution). Free trial available.",
    "hasFreeTier": false,
    "bestFor": "SMBs and mid-market teams wanting a polished, human-first help desk with practical AI features adopted incrementally.",
    "notFor": "Enterprises needing deep telephony, complex multi-step agent workflows, or high-volume automation.",
    "useCases": [
      "Email inbox and live chat",
      "AI FAQ deflection",
      "AI draft generation",
      "Knowledge base self-service"
    ],
    "tags": [
      "smb",
      "help-desk",
      "email-support",
      "shared-inbox"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "yuma-ai",
    "name": "Yuma AI",
    "tagline": "AI support agent built for ecommerce brands on Shopify",
    "websiteUrl": "https://yuma.ai",
    "descriptionMd": "Yuma AI is a customer service automation platform built specifically for ecommerce brands, deeply integrated with Shopify, WooCommerce, and Magento plus tools like Recharge, Loop, and shipping carriers. Its AI agents handle order-status inquiries, returns, refunds, and subscription changes end-to-end following merchant SOPs.",
    "pricingText": "Custom pricing based on conversation volume; contact sales. No public self-serve pricing.",
    "hasFreeTier": false,
    "bestFor": "DTC ecommerce brands on Shopify that want AI to autonomously handle order-related support without human escalation.",
    "notFor": "Non-ecommerce businesses or companies not using Shopify-adjacent tech stacks.",
    "useCases": [
      "Order-status (WISMO) automation",
      "Returns and refunds",
      "Subscription/cancellation handling",
      "Ecommerce deflection"
    ],
    "tags": [
      "ecommerce",
      "shopify",
      "ai-agent",
      "order-management"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "devrev",
    "name": "DevRev",
    "tagline": "AI support platform bridging tickets and product dev",
    "websiteUrl": "https://devrev.ai",
    "descriptionMd": "DevRev is an AI-native platform that unifies customer support and product development so support agents and engineers work from the same system. Its AI agent auto-resolves many tickets, triages and routes issues, and connects support data to product roadmaps.",
    "pricingText": "Starter ~$19.99/user/mo, Pro ~$59.99/user/mo; AI deflection add-on consumption-based; Enterprise by negotiation.",
    "hasFreeTier": true,
    "bestFor": "SaaS product companies wanting to close the loop between support tickets and engineering bug/feature workflows.",
    "notFor": "Pure support teams with no product-engineering overlap — the product-dev integration is core to its value.",
    "useCases": [
      "AI ticket triage and routing",
      "Issue-to-engineering linking",
      "Knowledge-base deflection",
      "Support-to-product analytics"
    ],
    "tags": [
      "product-led",
      "support-plus-dev",
      "ai-agent",
      "saas"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "scite-ai",
    "name": "Scite",
    "tagline": "Smart Citations — see how research has been cited in context",
    "websiteUrl": "https://scite.ai",
    "descriptionMd": "Scite classifies each citation in a paper as supporting, contrasting, or mentioning the cited work, giving researchers a way to evaluate the reliability of any study. It indexes over a billion citation statements and includes an AI assistant for asking questions against the scientific literature.",
    "pricingText": "Paid plans from ~$12/mo (annual) or ~$20/mo (monthly); institutional licensing available; 7-day free trial.",
    "hasFreeTier": false,
    "bestFor": "Researchers who need to quickly assess whether a paper's findings have been supported or challenged by later literature.",
    "notFor": "General consumers or students looking for a free citation manager — pricing targets academic professionals.",
    "useCases": [
      "Citation reliability assessment",
      "Systematic literature review",
      "AI research Q&A",
      "Evidence strength evaluation"
    ],
    "tags": [
      "academic-research",
      "citations",
      "literature-review",
      "ai-assistant"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "research-rabbit",
    "name": "Research Rabbit",
    "tagline": "Visualize and navigate academic citation networks",
    "websiteUrl": "https://www.researchrabbit.ai",
    "descriptionMd": "Research Rabbit lets researchers build visual maps of how papers connect through citations, making it easy to discover related works and trace research lineages. It indexes hundreds of millions of articles and integrates with Zotero. The core platform is free, popular with graduate students and academics.",
    "pricingText": "Core functionality is free; a premium tier with expanded features exists but pricing is not publicly listed — check the site.",
    "hasFreeTier": true,
    "bestFor": "Researchers who want to visually explore how a body of literature connects and quickly find papers they haven't seen.",
    "notFor": "Teams needing enterprise SSO, bulk export, or data-pipeline integration — it is a personal discovery tool.",
    "useCases": [
      "Literature discovery",
      "Citation network visualization",
      "Systematic review scoping",
      "Zotero integration"
    ],
    "tags": [
      "academic-research",
      "citation-mapping",
      "literature-discovery",
      "free"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "scispace",
    "name": "SciSpace",
    "tagline": "AI copilot for reading and understanding research papers",
    "websiteUrl": "https://scispace.com",
    "descriptionMd": "SciSpace lets users upload any research PDF and ask the AI questions about it, extract tables and equations, get plain-language explanations of methods, and generate literature reviews. It provides access to over 200 million papers with semantic search. Widely used by students and academics to absorb technical literature.",
    "pricingText": "Free tier with limited AI queries; Premium ~$12/mo; team/lab plans higher — confirm on the site.",
    "hasFreeTier": true,
    "bestFor": "Anyone who needs to quickly understand dense research papers, especially outside their core specialty.",
    "notFor": "Researchers who need raw data extraction at scale or institutional-database integration.",
    "useCases": [
      "PDF paper Q&A",
      "Literature review generation",
      "Equation and table extraction",
      "Research discovery"
    ],
    "tags": [
      "academic-research",
      "pdf-analysis",
      "literature-review",
      "reading-assistant"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "semantic-scholar",
    "name": "Semantic Scholar",
    "tagline": "Free AI-powered academic search engine by AI2",
    "websiteUrl": "https://www.semanticscholar.org",
    "descriptionMd": "Semantic Scholar is a free, AI-driven academic search engine built by the Allen Institute for AI, indexing over 200 million papers. It uses NLP to surface influential citations, author impact metrics, and semantically related papers beyond keyword matching. A free public API is available for developers.",
    "pricingText": "Completely free to use, including the API. No paid tiers.",
    "hasFreeTier": true,
    "bestFor": "Researchers and developers who need a high-quality, freely accessible academic index with a documented API.",
    "notFor": "Users who need full-text access to paywalled papers — it provides metadata and abstracts, not hosted articles.",
    "useCases": [
      "Semantic academic search",
      "Paper impact analysis",
      "Research API integration",
      "Citation graph exploration"
    ],
    "tags": [
      "academic-search",
      "free",
      "api",
      "bibliometrics"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "pecan-ai",
    "name": "Pecan AI",
    "tagline": "Predictive analytics built for business teams, not data scientists",
    "websiteUrl": "https://www.pecan.ai",
    "descriptionMd": "Pecan AI enables revenue, marketing, and operations teams to build and deploy predictive models — churn, lifetime value, demand forecasting — without deep data science expertise. It connects to existing data warehouses and automates feature engineering and model selection.",
    "pricingText": "No free tier. Paid plans reportedly start around ~$750-950/mo (Starter tiers); Enterprise custom — confirm directly.",
    "hasFreeTier": false,
    "bestFor": "Business teams who need production-ready predictive models on their own data without hiring a data science team.",
    "notFor": "Data scientists who want fine-grained control over model architecture — the platform abstracts the ML layer by design.",
    "useCases": [
      "Churn prediction",
      "Revenue forecasting",
      "Customer LTV modeling",
      "Demand planning"
    ],
    "tags": [
      "predictive-analytics",
      "no-code-ml",
      "business-intelligence",
      "forecasting"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "kanaries-rath",
    "name": "Kanaries (RATH)",
    "tagline": "Automated exploratory data analysis and AI visualization",
    "websiteUrl": "https://kanaries.net",
    "descriptionMd": "Kanaries RATH is an open-source automated EDA tool that identifies patterns, correlations, and relationships in tabular data with minimal manual configuration. Users can query data in natural language via a built-in AI copilot. The core project is open-source with a growing community.",
    "pricingText": "Open-source RATH is free; cloud-hosted features (AutoPilot, GPT exploration, collaboration) may require a paid plan — check kanaries.net.",
    "hasFreeTier": true,
    "bestFor": "Data analysts who want automated pattern discovery on tabular datasets without writing extensive EDA code.",
    "notFor": "Non-technical business users needing a plug-and-play BI dashboard — the open-source version needs some setup.",
    "useCases": [
      "Automated EDA",
      "Pattern and anomaly discovery",
      "Natural language data queries",
      "Causal analysis"
    ],
    "tags": [
      "open-source",
      "eda",
      "data-visualization",
      "automated-analytics"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sourcetable",
    "name": "Sourcetable",
    "tagline": "AI spreadsheet that connects to your databases and APIs",
    "websiteUrl": "https://sourcetable.com",
    "descriptionMd": "Sourcetable combines a spreadsheet interface with live database connectivity, letting users query Postgres, MySQL, and 100+ integrations using natural language or SQL, then work with results in spreadsheet views. The AI layer can generate charts, write formulas, and answer questions about the data.",
    "pricingText": "Free tier with basic functionality; Pro ~$20/user/mo; database-connectivity plans higher — check the site.",
    "hasFreeTier": true,
    "bestFor": "Analysts who need live database data in a spreadsheet and want AI to handle query generation and visualization.",
    "notFor": "Data engineers needing version-controlled pipelines or dbt — Sourcetable is an analyst-facing interface layer.",
    "useCases": [
      "Natural language database queries",
      "Live data spreadsheets",
      "Automated chart generation",
      "SQL-free exploration"
    ],
    "tags": [
      "ai-spreadsheet",
      "database",
      "natural-language",
      "data-analysis"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "formula-bot",
    "name": "Formula Bot",
    "tagline": "Generate Excel and Google Sheets formulas with AI",
    "websiteUrl": "https://formulabot.com",
    "descriptionMd": "Formula Bot translates plain-English descriptions into Excel formulas, Google Sheets formulas, SQL queries, and VBA scripts. It also includes a data analysis chat mode where users ask questions about spreadsheet data and receive formula-based answers.",
    "pricingText": "Free tier for basic formula generation; paid plans reportedly from ~$18/mo (Starter) up to ~$99/mo (Business). Confirm on the site.",
    "hasFreeTier": true,
    "bestFor": "Spreadsheet users who frequently need complex formulas but don't want to memorize Excel/Sheets syntax.",
    "notFor": "Teams needing collaborative data workflows or dashboards — it is a formula assistant, not a full analytics platform.",
    "useCases": [
      "Excel formula generation",
      "Google Sheets automation",
      "SQL query writing",
      "VBA script creation"
    ],
    "tags": [
      "excel",
      "google-sheets",
      "formula-generation",
      "sql"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "genspark",
    "name": "Genspark",
    "tagline": "AI super-agent that researches, synthesizes, and creates",
    "websiteUrl": "https://www.genspark.ai",
    "descriptionMd": "Genspark is an AI research and productivity agent that can autonomously execute multi-step research tasks, generate reports, create presentations, and produce images or video from a single prompt. It is positioned as a broader-output alternative to pure search assistants.",
    "pricingText": "Free tier (~100 daily credits); Plus ~$24.99/mo; Pro ~$249.99/mo. Confirm current pricing on the site.",
    "hasFreeTier": true,
    "bestFor": "Knowledge workers who want a single AI agent to source, synthesize, and produce research outputs with minimal manual steps.",
    "notFor": "Users needing deep domain accuracy (medical/legal) — it is a generalist agent and outputs should be verified.",
    "useCases": [
      "Automated research reports",
      "Competitive intelligence",
      "Multi-step research tasks",
      "Presentation generation"
    ],
    "tags": [
      "ai-research-agent",
      "web-research",
      "report-generation",
      "productivity"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sourcely",
    "name": "Sourcely",
    "tagline": "Find credible academic sources for any text instantly",
    "websiteUrl": "https://sourcely.net",
    "descriptionMd": "Sourcely takes a passage of text and automatically matches it with relevant academic papers from a database of over 200 million articles, returning formatted citations in APA, MLA, Chicago, and other styles. It is aimed at students and writers who need to back up claims with peer-reviewed sources quickly.",
    "pricingText": "Limited free demo; paid access from ~$7 single-use; monthly plans ~$14-17/mo. Confirm on the site.",
    "hasFreeTier": true,
    "bestFor": "Students and academic writers who need to quickly find and cite real peer-reviewed sources for specific claims.",
    "notFor": "Professional researchers who need nuanced literature discovery or citation network analysis.",
    "useCases": [
      "Academic source finding",
      "Automated citation generation",
      "Essay reference support",
      "Multi-format citation export"
    ],
    "tags": [
      "citations",
      "academic-writing",
      "source-finding",
      "students"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sixth-sense-abm",
    "name": "6sense",
    "tagline": "Predict which accounts are ready to buy",
    "websiteUrl": "https://6sense.com",
    "descriptionMd": "6sense is an AI-powered account-based marketing and sales intelligence platform that uses intent data and predictive scoring to surface in-market buyers. It aggregates anonymous buying signals across the web and your own properties to rank accounts by purchase likelihood, aligning marketing and sales around the same intelligence.",
    "pricingText": "Custom pricing; estimates suggest $40K-$100K+/yr for mid-market, higher for enterprise. A nominal free tier offers limited data credits.",
    "hasFreeTier": true,
    "bestFor": "B2B companies running coordinated ABM programs that need to prioritize which accounts to work from a large TAM.",
    "notFor": "SMBs or early-stage teams without a defined ICP and the budget for a six-figure annual contract.",
    "useCases": [
      "Identify anonymous website visitors",
      "Score accounts by purchase readiness",
      "Coordinate ads and sales outreach",
      "Measure campaign influence on pipeline"
    ],
    "tags": [
      "abm",
      "intent-data",
      "predictive-scoring",
      "enterprise"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "outreach-io",
    "name": "Outreach",
    "tagline": "AI-first sales execution platform for revenue teams",
    "websiteUrl": "https://www.outreach.io",
    "descriptionMd": "Outreach is a mature sales engagement platform that automates multi-step sequences across email, phone, and LinkedIn while surfacing AI-driven coaching and deal insights. Its AI layer adds call summaries, coaching nudges, and deal health scores on top of the core sequencing engine.",
    "pricingText": "Quote-only; third-party benchmarks suggest ~$100-140/user/mo to start; 50-seat contracts often ~$70K-90K/yr plus implementation.",
    "hasFreeTier": false,
    "bestFor": "Enterprise sales teams needing deep CRM integration, compliance controls, and AI deal intelligence on a sequencing platform.",
    "notFor": "Small sales teams or solo founders who need a lightweight, self-serve tool they can spin up in a day.",
    "useCases": [
      "Multi-step outbound sequences",
      "AI call summaries and coaching",
      "Deal health scoring",
      "Pipeline forecasting"
    ],
    "tags": [
      "sales-engagement",
      "outbound",
      "enterprise",
      "sequences"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "salesloft",
    "name": "Salesloft",
    "tagline": "Revenue orchestration platform for the full sales cycle",
    "websiteUrl": "https://salesloft.com",
    "descriptionMd": "Salesloft combines sales engagement (cadences, dialer, email), conversation intelligence, and deal management into one revenue orchestration platform. Its AI surfaces next-best-action recommendations, call coaching, and pipeline analytics. It is expanding forecasting capabilities following its merger with Clari.",
    "pricingText": "Quote-only; benchmarks put Essentials ~$75-100/user/mo and Advanced ~$125-150/user/mo (annual). Median contract ~$30K/yr.",
    "hasFreeTier": false,
    "bestFor": "Mid-market and enterprise teams wanting one platform for outbound sequences, conversation intelligence, and forecasting.",
    "notFor": "Teams that only need basic email sequencing without pipeline management or forecasting.",
    "useCases": [
      "Multi-channel cadences",
      "Call recording and coaching",
      "Deal progress tracking",
      "Revenue forecasting"
    ],
    "tags": [
      "sales-engagement",
      "revenue-orchestration",
      "conversation-intelligence",
      "enterprise"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "reply-io",
    "name": "Reply.io",
    "tagline": "Multichannel sales outreach with an AI SDR agent",
    "websiteUrl": "https://reply.io",
    "descriptionMd": "Reply.io automates outbound sequences across email, LinkedIn, phone, and SMS, and includes Jason AI, an autonomous SDR agent that can prospect, personalize, and handle early-stage replies. It offers a lower entry price than enterprise alternatives, suiting lean sales teams.",
    "pricingText": "Email-only plans from ~$49/mo. Full multichannel (email + LinkedIn + phone) runs ~$150-190/user/mo with add-ons. AI SDR priced separately.",
    "hasFreeTier": false,
    "bestFor": "Lean B2B sales teams wanting affordable multichannel sequencing plus an AI SDR without an enterprise contract.",
    "notFor": "Teams expecting the headline price to cover LinkedIn and phone — true multichannel cost is several times the base.",
    "useCases": [
      "Cold email sequences",
      "LinkedIn automation",
      "AI SDR outreach",
      "Messaging A/B testing"
    ],
    "tags": [
      "sales-engagement",
      "cold-email",
      "ai-sdr",
      "multichannel"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "warmly-ai",
    "name": "Warmly",
    "tagline": "Deanonymize website visitors and trigger warm outbound",
    "websiteUrl": "https://warmly.ai",
    "descriptionMd": "Warmly identifies the companies (and sometimes individuals) behind anonymous website visits, enriches them with intent signals, and can route warm leads into outbound sequences or Slack alerts. It bridges inbound traffic and outbound follow-up, with an AI chat agent for live visitors.",
    "pricingText": "Free tier identifies up to ~500 companies/mo. Paid plans from ~$10,000/yr (deanonymization) up to ~$30,000/yr; annual commitment, no monthly.",
    "hasFreeTier": true,
    "bestFor": "B2B SaaS companies with meaningful website traffic that want to convert anonymous visits into sourced pipeline.",
    "notFor": "Early-stage startups with low traffic, or teams without someone to act on real-time signals.",
    "useCases": [
      "Identify companies visiting your site",
      "Route high-intent visitors to reps",
      "Trigger outbound on key page visits",
      "Engage live visitors via AI chat"
    ],
    "tags": [
      "visitor-deanonymization",
      "intent-data",
      "warm-outbound",
      "b2b"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "common-room",
    "name": "Common Room",
    "tagline": "Turn community and product signals into pipeline",
    "websiteUrl": "https://www.commonroom.io",
    "descriptionMd": "Common Room aggregates signals from GitHub, Slack communities, LinkedIn, product usage, and social channels to surface contacts showing real buying intent. It is designed for companies selling to developers or technical buyers, where community engagement is a strong buying signal.",
    "pricingText": "No self-serve pricing; Essential reportedly ~$2,100-2,500/mo (annual, 5 seats); Advanced/Enterprise custom. No free tier.",
    "hasFreeTier": false,
    "bestFor": "Developer-focused SaaS companies that want to convert GitHub stars, Slack members, and contributors into pipeline.",
    "notFor": "Traditional B2B companies without a developer community or product-led-growth motion to draw signals from.",
    "useCases": [
      "Aggregate community + product signals",
      "Score members by intent",
      "Alert reps when champions re-engage",
      "Map members to CRM accounts"
    ],
    "tags": [
      "community-led-growth",
      "developer-tools",
      "plg",
      "intent-signals"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "la-growth-machine",
    "name": "La Growth Machine",
    "tagline": "Multichannel outreach across LinkedIn, email, and phone",
    "websiteUrl": "https://lagrowthmachine.com",
    "descriptionMd": "La Growth Machine is a European multichannel outreach tool that automates sequences across LinkedIn, email, and phone from a single visual workflow builder. Each sending identity runs its own sequence, suiting agencies managing multiple sender profiles. It is well-regarded for reliable LinkedIn automation.",
    "pricingText": "Priced per sending identity; Basic ~EUR 60/identity/mo (LinkedIn + email); Pro ~EUR 120/identity/mo (adds phone). Annual saves ~2 months.",
    "hasFreeTier": false,
    "bestFor": "European sales teams and growth agencies running high-volume LinkedIn + email sequences with multiple senders.",
    "notFor": "Teams needing native Salesforce/HubSpot sequence sync — its CRM integration is lighter than US enterprise platforms.",
    "useCases": [
      "Visual multichannel workflows",
      "Multi-identity sender management",
      "Human-like delays to reduce restrictions",
      "Lead enrichment during sequences"
    ],
    "tags": [
      "linkedin-automation",
      "multichannel",
      "cold-outreach",
      "agency"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "regie-ai",
    "name": "Regie.ai",
    "tagline": "AI sales content and autonomous prospecting for SDRs",
    "websiteUrl": "https://www.regie.ai",
    "descriptionMd": "Regie.ai generates on-brand sales sequences, email copy, and call scripts using AI trained on a company's messaging guidelines. Beyond content, it offers an autonomous AI prospecting agent that can identify targets, research accounts, and draft personalized outreach.",
    "pricingText": "No self-serve sign-up; by request. Reports indicate the AI sales-engagement plan from ~$180/user/mo (10-seat min); autonomous agent tier higher.",
    "hasFreeTier": false,
    "bestFor": "Mid-market and enterprise SDR teams wanting AI for both content generation and autonomous prospecting within guardrails.",
    "notFor": "Individual contributors or small teams under 5 people — seat minimums make it cost-prohibitive at small scale.",
    "useCases": [
      "On-brand sequence generation",
      "Account research and first touches",
      "Autonomous AI SDR prospecting",
      "Messaging consistency at scale"
    ],
    "tags": [
      "ai-sdr",
      "sales-content",
      "outbound-automation",
      "enterprise"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "surfe",
    "name": "Surfe",
    "tagline": "Sync LinkedIn contacts to your CRM with verified data",
    "websiteUrl": "https://www.surfe.com",
    "descriptionMd": "Surfe is a Chrome extension that overlays CRM fields onto LinkedIn profiles, letting reps add contacts, update records, and find verified emails without switching tabs. It integrates with HubSpot, Salesforce, Pipedrive, and others, and enriches contacts with phone and company data.",
    "pricingText": "Free tier with limited annual credits; Essential ~$39/user/mo (annual); Pro ~$79/user/mo (annual). Credits are annual totals.",
    "hasFreeTier": true,
    "bestFor": "SDRs and AEs who live on LinkedIn and want to eliminate manual CRM data entry and prospect from profiles.",
    "notFor": "Teams needing high-volume email finding at scale — the annual credit caps can be limiting for heavy outbound.",
    "useCases": [
      "One-click LinkedIn-to-CRM",
      "Find and verify emails on LinkedIn",
      "Sync notes to CRM",
      "Enrich existing CRM records"
    ],
    "tags": [
      "linkedin",
      "crm-enrichment",
      "chrome-extension",
      "contact-data"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "brevo",
    "name": "Brevo",
    "tagline": "All-in-one email, SMS, and marketing automation",
    "websiteUrl": "https://www.brevo.com",
    "descriptionMd": "Brevo (formerly Sendinblue) is a full-stack marketing platform covering email, SMS, WhatsApp, transactional email, automation, and a built-in CRM. Unlike most platforms it prices by monthly send volume rather than contact count, making it cost-effective for large lists with moderate frequency. It is GDPR-native with EU data residency.",
    "pricingText": "Free tier: 300 emails/day with unlimited contacts. Starter from ~$9/mo; Business (automation, A/B) from ~$18/mo. Scales by send volume.",
    "hasFreeTier": true,
    "bestFor": "SMBs and ecommerce wanting a cost-effective, GDPR-compliant platform for email, SMS, and automation without per-contact fees.",
    "notFor": "Enterprise teams needing deep ABM, predictive lead scoring, or native Salesforce sync — it is a marketing platform, not sales intelligence.",
    "useCases": [
      "Email newsletters and campaigns",
      "Behavior-triggered automations",
      "Transactional email and SMS",
      "Lightweight CRM and segmentation"
    ],
    "tags": [
      "email-marketing",
      "sms",
      "marketing-automation",
      "gdpr"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "humanlinker",
    "name": "Humanlinker",
    "tagline": "Hyper-personalized outreach via personality analysis",
    "websiteUrl": "https://www.humanlinker.com",
    "descriptionMd": "Humanlinker uses DISC personality analysis and AI to generate highly personalized cold email and LinkedIn messages tailored to each prospect's communication style. It enriches profiles from LinkedIn, news, and company signals, then drafts openers and sequences matched to the recipient's inferred personality.",
    "pricingText": "No permanent free tier; 14-day trial. Pro ~EUR 69/user/mo (annual, up to 5 users); Business/Enterprise custom (min 50 users).",
    "hasFreeTier": false,
    "bestFor": "Sales reps and SDR teams that want to send fewer, more-personalized messages to lift reply rates.",
    "notFor": "Teams doing high-volume spray-and-pray outreach — the per-credit model isn't designed for mass sending.",
    "useCases": [
      "Personality-matched email openers",
      "Prospect research in one view",
      "DISC-adapted outreach tone",
      "Personalized LinkedIn messages"
    ],
    "tags": [
      "personalization",
      "cold-email",
      "linkedin-outreach",
      "personality-ai"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "podcastle",
    "name": "Podcastle",
    "tagline": "AI podcast studio with voice cloning and audio enhancement",
    "websiteUrl": "https://podcastle.ai",
    "descriptionMd": "Podcastle is an all-in-one AI audio and video platform for podcasters, offering remote multi-track recording, noise reduction, and silence trimming. Its Revoice technology lets creators clone their own voice for AI narration, and it supports many AI voices across multiple languages with transcription-based editing.",
    "pricingText": "Free tier (limited exports with watermark); paid plans reportedly from ~$11.99/mo (Storyteller) and ~$23.99/mo (Pro) — verify at podcastle.ai.",
    "hasFreeTier": true,
    "bestFor": "Podcasters who want an end-to-end studio with AI voice cloning and audio cleanup in one app.",
    "notFor": "Teams needing advanced video production or enterprise-grade API access for voice synthesis at scale.",
    "useCases": [
      "Remote podcast recording",
      "AI voice cloning for narration",
      "Background noise removal",
      "Transcription-based editing"
    ],
    "tags": [
      "tts",
      "voice-cloning",
      "audio-cleanup",
      "podcast"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "cleanvoice",
    "name": "Cleanvoice AI",
    "tagline": "Automated filler-word and noise removal for recordings",
    "websiteUrl": "https://cleanvoice.ai",
    "descriptionMd": "Cleanvoice AI is a specialized audio post-production tool that automatically detects and removes filler words, mouth sounds, and background noise from podcast and voice recordings. It processes files without manual editing and supports multiple speakers on separate tracks, with usage-based pricing.",
    "pricingText": "Free trial (~30 minutes). Paid plans from ~$11/mo for ~10 hours, or pay-as-you-go ~$0.10/min — verify at cleanvoice.ai.",
    "hasFreeTier": true,
    "bestFor": "Podcasters and interviewers who want to eliminate filler words and mouth noise automatically without a timeline.",
    "notFor": "Users who need real-time voice changing, TTS synthesis, or live broadcast processing.",
    "useCases": [
      "Filler word removal",
      "Mouth noise cleanup",
      "Multi-speaker editing",
      "Silence trimming"
    ],
    "tags": [
      "audio-cleanup",
      "podcast",
      "noise-removal",
      "post-production"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "auphonic",
    "name": "Auphonic",
    "tagline": "Automated audio leveling and loudness normalization",
    "websiteUrl": "https://auphonic.com",
    "descriptionMd": "Auphonic is a well-established automated audio post-production service used by broadcasters, podcasters, and educators to normalize loudness, reduce noise, and balance multi-track dialogue. It integrates with podcast hosts and supports batch processing via API. It has run reliably since 2011.",
    "pricingText": "Free tier ~2 hours/mo. Paid recurring plans from ~$11/mo for ~9 hours up to ~$99/mo for 100 hours; one-time credit packs too.",
    "hasFreeTier": true,
    "bestFor": "Podcasters and radio producers who need reliable loudness normalization and noise reduction without manual mixing.",
    "notFor": "Users who need real-time voice changing, voice cloning, or TTS rather than audio-file cleanup.",
    "useCases": [
      "Loudness normalization",
      "Noise reduction",
      "Multi-track leveling",
      "Podcast distribution integration"
    ],
    "tags": [
      "audio-cleanup",
      "post-production",
      "normalization",
      "broadcast"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "riverside-fm",
    "name": "Riverside.fm",
    "tagline": "HD remote recording studio with AI transcription",
    "websiteUrl": "https://riverside.fm",
    "descriptionMd": "Riverside.fm is a remote recording platform for podcasts and video interviews, capturing uncompressed local audio and up to 4K video per participant regardless of internet quality. Its Magic Audio applies noise reduction and level correction, and built-in AI transcription supports many languages with text-based editing.",
    "pricingText": "Free plan ~2 hours of multi-track recording. Standard reportedly ~$15/mo (annual); Pro ~$24/mo with Magic Audio and transcription — verify at riverside.fm.",
    "hasFreeTier": true,
    "bestFor": "Podcast hosts and video journalists recording remote guests who want local-quality capture with AI cleanup and transcription.",
    "notFor": "Solo creators who only need TTS or voice cloning and don't require remote multi-guest recording.",
    "useCases": [
      "Remote podcast recording",
      "AI audio enhancement",
      "Multi-language transcription",
      "Text-based clip editing"
    ],
    "tags": [
      "transcription",
      "audio-cleanup",
      "remote-recording",
      "video"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "camb-ai",
    "name": "Camb.ai",
    "tagline": "Production-grade AI dubbing and voice cloning in 150+ languages",
    "websiteUrl": "https://www.camb.ai",
    "descriptionMd": "Camb.ai is an AI dubbing and localization platform serving broadcasters, sports rights holders, and content studios. It translates and dubs video into 150+ languages while preserving the original speaker's voice through cloning, and is built for high-volume professional workflows.",
    "pricingText": "Lite reportedly ~$14.99/mo with a few free dubbing minutes; Advanced ~$150/mo; enterprise custom — verify at camb.ai.",
    "hasFreeTier": false,
    "bestFor": "Media companies and studios needing broadcast-quality AI dubbing with voice cloning across many languages at scale.",
    "notFor": "Solo creators or developers building lightweight TTS prototypes — it targets professional localization.",
    "useCases": [
      "Video dubbing and localization",
      "Voice cloning for dubbing",
      "Multi-language TTS",
      "Broadcast localization"
    ],
    "tags": [
      "dubbing",
      "voice-cloning",
      "localization",
      "broadcast"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "hume-ai",
    "name": "Hume AI",
    "tagline": "Emotionally intelligent voice AI that responds to tone",
    "websiteUrl": "https://www.hume.ai",
    "descriptionMd": "Hume AI offers an Empathic Voice Interface, a speech-to-speech model that measures vocal emotion and adjusts its responses accordingly, plus expressive TTS and emotion-measurement APIs for developers building voice agents. It targets healthcare, customer service, and companion applications.",
    "pricingText": "Free plan (~10k TTS chars/mo and a few minutes of voice interface). Paid tiers from ~$3/mo up to ~$200/mo; commercial use requires a paid plan.",
    "hasFreeTier": true,
    "bestFor": "Developers building voice agents that must detect and adapt to the speaker's emotional tone in real time.",
    "notFor": "Simple TTS use cases (audiobooks, narration) that don't need emotion detection or conversational voice AI.",
    "useCases": [
      "Empathic voice agents",
      "Emotion detection in speech",
      "Expressive TTS",
      "Conversational AI interfaces"
    ],
    "tags": [
      "tts",
      "voice-ai",
      "emotion-detection",
      "api"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "wondercraft-ai",
    "name": "Wondercraft",
    "tagline": "AI podcast and audio ad generator from text",
    "websiteUrl": "https://www.wondercraft.ai",
    "descriptionMd": "Wondercraft is an AI audio creation platform that generates podcast episodes, audio ads, and narrations from text scripts using realistic AI voices, with no recording needed. It offers hundreds of voices across many languages and voice cloning on higher tiers, targeting marketers and publishers.",
    "pricingText": "Free plan (~6 credits/mo). Creator reportedly ~$25/mo (annual); Pro ~$45/mo with voice cloning — verify at wondercraft.ai.",
    "hasFreeTier": true,
    "bestFor": "Content marketers and publishers who want to turn articles or scripts into polished podcasts or audio ads without recording.",
    "notFor": "Podcasters who need live remote recording, real-time voice changing, or multi-speaker guest capture.",
    "useCases": [
      "AI podcast generation",
      "Audio ad creation",
      "Article-to-audio conversion",
      "Voice cloning narration"
    ],
    "tags": [
      "tts",
      "podcast",
      "audio-generation",
      "voice-cloning"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "naturalreader",
    "name": "NaturalReader",
    "tagline": "Text-to-speech reader with 200+ AI voices",
    "websiteUrl": "https://www.naturalreaders.com",
    "descriptionMd": "NaturalReader is a long-running TTS application available as a web app, desktop software, and browser extension, supporting many file formats including PDF, DOCX, and EPUB. It offers voices across 90+ languages and sells separate personal and commercial license tiers, the latter with royalty-free rights.",
    "pricingText": "Free tier (~20 minutes/day listening). Personal plans reportedly from ~$9.99/mo; commercial from ~$16.50/mo; one-time license available — verify at naturalreaders.com.",
    "hasFreeTier": true,
    "bestFor": "Students, accessibility users, and creators who need to listen to documents or produce commercial voiceover from text.",
    "notFor": "Developers needing a programmatic TTS API or real-time synthesis — it is primarily a consumer reading app.",
    "useCases": [
      "Document read-aloud",
      "Audiobook production",
      "Accessibility for dyslexia",
      "Commercial voiceover"
    ],
    "tags": [
      "tts",
      "accessibility",
      "audiobook",
      "document-reader"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "voicemod",
    "name": "Voicemod",
    "tagline": "Real-time AI voice changer for gaming and streaming",
    "websiteUrl": "https://www.voicemod.net",
    "descriptionMd": "Voicemod is a real-time voice modulation tool that sits between a microphone and any app, applying AI voice transformations with low latency. It integrates with Discord, Twitch, OBS, and Xbox Game Bar and includes a soundboard for live audio clips. It is primarily used by gamers and streamers.",
    "pricingText": "Free plan with a rotating daily voice selection. Pro reportedly ~$4.50-10/mo (annual) for the full library; lifetime option ~$40-60 one-time — verify at voicemod.net.",
    "hasFreeTier": true,
    "bestFor": "Streamers, gamers, and creators who need real-time voice transformation during live sessions on Discord, Twitch, or OBS.",
    "notFor": "Professional voiceover artists or podcasters needing high-quality pre-recorded TTS or voice cloning for production.",
    "useCases": [
      "Real-time voice changing",
      "Live streaming personas",
      "Gaming voice effects",
      "Streaming soundboard"
    ],
    "tags": [
      "voice-changer",
      "real-time",
      "gaming",
      "streaming"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "openai-whisper",
    "name": "OpenAI Whisper (API)",
    "tagline": "Battle-tested speech-to-text API in 50+ languages",
    "websiteUrl": "https://platform.openai.com/docs/guides/speech-to-text",
    "descriptionMd": "OpenAI Whisper is a speech recognition model available both open-source (self-hosted) and via OpenAI's managed API. The API accepts audio files and returns transcripts or translations in many languages. It is widely used as a backend for transcription pipelines, meeting tools, and accessibility features due to strong accuracy on noisy audio.",
    "pricingText": "No free tier on the managed API; new accounts get a small one-time credit. Transcription priced around ~$0.006/min (cheaper mini models exist) — verify at platform.openai.com.",
    "hasFreeTier": false,
    "bestFor": "Developers building transcription pipelines or meeting-note tools who want a proven, high-accuracy ASR model via API.",
    "notFor": "Non-technical users who need a polished UI or real-time live transcription — the API requires code integration.",
    "useCases": [
      "Audio file transcription",
      "Multilingual translation",
      "Meeting notes pipeline",
      "Subtitle generation backend"
    ],
    "tags": [
      "transcription",
      "asr",
      "api",
      "open-source"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sunsama",
    "name": "Sunsama",
    "tagline": "Daily planning ritual that pulls tasks from all your tools",
    "websiteUrl": "https://sunsama.com",
    "descriptionMd": "Sunsama is a daily planner that integrates with tools like Notion, Asana, GitHub, and Gmail to help you plan each workday intentionally. It guides a structured morning planning ritual and evening shutdown, and helps prioritize tasks and estimate a realistic daily load.",
    "pricingText": "Paid only; ~$20/mo (or ~$16/mo billed annually) — verify current pricing on the site.",
    "hasFreeTier": false,
    "bestFor": "Knowledge workers who want a structured daily planning habit tied to their existing task and calendar tools.",
    "notFor": "Teams needing shared project management — it is a personal planner, not a collaboration hub.",
    "useCases": [
      "Daily task planning",
      "Time-blocking from many sources",
      "Workday shutdown review",
      "Focus scheduling"
    ],
    "tags": [
      "daily-planner",
      "task-management",
      "calendar",
      "focus"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "akiflow",
    "name": "Akiflow",
    "tagline": "Unified task inbox and time-blocker with AI scheduling",
    "websiteUrl": "https://akiflow.com",
    "descriptionMd": "Akiflow consolidates tasks from Slack, Gmail, Notion, Asana, and other tools into a single inbox, then lets you time-block them onto your calendar. Its AI suggests scheduling slots and helps clear your inbox faster, designed for a fast command-bar-driven workflow.",
    "pricingText": "~$19/mo (or ~$15/mo billed annually) — check the site for current plans.",
    "hasFreeTier": false,
    "bestFor": "Power users who work across many tools and want one keyboard-driven place to capture, prioritize, and schedule everything.",
    "notFor": "Users who want team collaboration features — Akiflow is strictly a personal productivity tool.",
    "useCases": [
      "Task capture from many apps",
      "Calendar time-blocking",
      "Daily planning",
      "Unified task inbox"
    ],
    "tags": [
      "task-management",
      "calendar",
      "time-blocking",
      "productivity"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "avoma",
    "name": "Avoma",
    "tagline": "AI meeting assistant with notes, coaching, and CRM sync",
    "websiteUrl": "https://avoma.com",
    "descriptionMd": "Avoma records, transcribes, and summarizes meetings, then syncs notes and action items to CRMs like Salesforce and HubSpot. It adds conversation intelligence such as talk-time analytics and deal scoring, aimed at sales and customer success teams.",
    "pricingText": "Free tier available; paid plans reportedly from ~$19-59/user/mo depending on features — verify on the site.",
    "hasFreeTier": true,
    "bestFor": "Sales and customer success teams who need meeting notes auto-pushed to their CRM alongside deal analytics.",
    "notFor": "Internal-focused teams with no CRM — the value skews toward revenue-facing workflows.",
    "useCases": [
      "Meeting transcription",
      "CRM sync of call notes",
      "Sales coaching analytics",
      "Meeting agenda templates"
    ],
    "tags": [
      "meeting-assistant",
      "transcription",
      "crm",
      "sales-intelligence"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "fellow",
    "name": "Fellow",
    "tagline": "AI meeting notes, agendas, and action tracking for teams",
    "websiteUrl": "https://fellow.app",
    "descriptionMd": "Fellow combines collaborative agendas, AI-generated meeting notes, and action-item tracking in one place. It integrates with Google Calendar, Outlook, Zoom, Slack, and project tools so action items flow to the right place. Its AI drafts agendas, summarizes discussions, and surfaces unresolved items.",
    "pricingText": "Free plan for small teams; Pro/business reportedly ~$7-10/user/mo — check the site.",
    "hasFreeTier": true,
    "bestFor": "Teams running recurring 1:1s and team meetings that want agendas, notes, and follow-ups in one shared space.",
    "notFor": "Individuals with no team — the collaborative agenda features need multiple participants.",
    "useCases": [
      "Collaborative agendas",
      "AI meeting summaries",
      "Action item tracking",
      "1:1 management"
    ],
    "tags": [
      "meeting-management",
      "agendas",
      "action-items",
      "collaboration"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sembly-ai",
    "name": "Sembly AI",
    "tagline": "AI team assistant that notes and tracks meetings",
    "websiteUrl": "https://sembly.ai",
    "descriptionMd": "Sembly AI joins Zoom, Teams, and Google Meet calls to generate transcripts, summaries, and identified tasks without manual setup. It organizes meeting history into a searchable knowledge base, with a team plan for shared access across an organization.",
    "pricingText": "Free plan with limited meetings; paid personal and team plans reportedly from ~$10-20+/user/mo — verify on the site.",
    "hasFreeTier": true,
    "bestFor": "Teams that hold many meetings and need a searchable archive of decisions and action items across the org.",
    "notFor": "Users who need deep CRM integration or sales coaching analytics — Sembly focuses on general meeting capture.",
    "useCases": [
      "Meeting transcription",
      "Searchable meeting archive",
      "Task extraction",
      "Cross-team knowledge base"
    ],
    "tags": [
      "meeting-assistant",
      "transcription",
      "knowledge-base",
      "action-items"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "supernormal",
    "name": "Supernormal",
    "tagline": "Automatic AI notes for every Meet and Zoom call",
    "websiteUrl": "https://supernormal.com",
    "descriptionMd": "Supernormal automatically joins meetings and produces structured, formatted notes using customizable templates, then syncs to Notion, Google Docs, Slack, and other tools immediately after the call. A team workspace allows shared templates and centralized storage.",
    "pricingText": "Free plan with limited meetings/mo; paid plans reportedly ~$10-19/user/mo — see the site for details.",
    "hasFreeTier": true,
    "bestFor": "Teams that want clean, template-driven meeting notes pushed automatically to existing tools like Notion or Docs.",
    "notFor": "Users needing advanced analytics, CRM sync, or coaching — Supernormal focuses on note generation and distribution.",
    "useCases": [
      "Automatic meeting notes",
      "Custom note templates",
      "Post-meeting sync",
      "Team note sharing"
    ],
    "tags": [
      "meeting-notes",
      "transcription",
      "automation",
      "google-meet"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "read-ai",
    "name": "Read AI",
    "tagline": "Meeting intelligence with engagement scores and summaries",
    "websiteUrl": "https://read.ai",
    "descriptionMd": "Read AI attends meetings and produces summaries, transcripts, and playback highlights, with a differentiating engagement-scoring feature measuring talk time, sentiment, and attention. It also summarizes email threads and Slack channels, integrating with Zoom, Teams, Google Meet, and CRMs.",
    "pricingText": "Free plan with limited reports; paid plans reportedly from ~$15-19.75/user/mo — verify on the site.",
    "hasFreeTier": true,
    "bestFor": "Managers and team leads who want meeting engagement metrics alongside summaries to understand participation.",
    "notFor": "Users who only need a transcript — the added engagement analytics aren't worthwhile if irrelevant.",
    "useCases": [
      "Meeting transcription and summary",
      "Engagement and sentiment scoring",
      "Email thread summarization",
      "Slack digests"
    ],
    "tags": [
      "meeting-intelligence",
      "engagement-analytics",
      "transcription",
      "summarization"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "bardeen",
    "name": "Bardeen",
    "tagline": "AI automation agent that works inside your browser",
    "websiteUrl": "https://bardeen.ai",
    "descriptionMd": "Bardeen is a browser-based automation tool that can scrape web pages, move data between apps, and trigger multi-step workflows without leaving Chrome. Its Magic Box lets users describe a task in plain language to auto-generate the automation, connecting to 100+ apps.",
    "pricingText": "Free plan available; paid plans reportedly from ~$10-20/mo — check the site for current tiers.",
    "hasFreeTier": true,
    "bestFor": "Non-technical users who want to automate repetitive browser tasks like scraping, form-filling, and data transfer without code.",
    "notFor": "Teams needing server-side or scheduled background automations — Bardeen requires an active browser session.",
    "useCases": [
      "Browser web scraping",
      "Cross-app data transfer",
      "LinkedIn lead enrichment",
      "Automated CRM entry"
    ],
    "tags": [
      "browser-automation",
      "no-code",
      "scraping",
      "workflow-automation"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lindy-ai",
    "name": "Lindy",
    "tagline": "Build AI employees that automate workflows across apps",
    "websiteUrl": "https://lindy.ai",
    "descriptionMd": "Lindy lets users build AI agents that handle tasks like triaging email, scheduling meetings, qualifying leads, and updating CRMs autonomously. Agents can be chained and triggered by events, targeting business users who want powerful automation without writing code or managing prompts.",
    "pricingText": "Free tier reportedly available with limited tasks; paid plans from ~$49/mo — verify on lindy.ai.",
    "hasFreeTier": true,
    "bestFor": "Business users who want to delegate repetitive cross-app workflows — email triage, scheduling, follow-up — to an autonomous agent.",
    "notFor": "Developers who want full programmatic control — Lindy is designed for no-code users and abstracts the models.",
    "useCases": [
      "Automated email triage",
      "AI meeting scheduling",
      "Lead qualification",
      "CRM data entry automation"
    ],
    "tags": [
      "ai-agent",
      "workflow-automation",
      "no-code",
      "email-automation"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "superhuman",
    "name": "Superhuman",
    "tagline": "The fastest AI email experience for high-volume pros",
    "websiteUrl": "https://superhuman.com",
    "descriptionMd": "Superhuman is a premium email client for Gmail and Outlook built around speed, keyboard shortcuts, and AI-assisted triage. Its AI features include auto-summarization of long threads, one-click reply drafting, and smart prioritization. It is popular among founders, executives, and salespeople.",
    "pricingText": "Paid only; ~$30/user/mo — confirm on superhuman.com.",
    "hasFreeTier": false,
    "bestFor": "High-volume email users — executives, sales, founders — who want maximum inbox speed and will pay a premium.",
    "notFor": "Casual email users or those on tight budgets — hard to justify under ~50 emails a day.",
    "useCases": [
      "Fast keyboard email triage",
      "AI thread summarization",
      "AI-drafted replies",
      "Priority inbox management"
    ],
    "tags": [
      "email",
      "ai-writing",
      "productivity",
      "inbox"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "coda-ai",
    "name": "Coda",
    "tagline": "Docs, databases, and AI in one flexible workspace",
    "websiteUrl": "https://coda.io",
    "descriptionMd": "Coda blends a document editor with a relational database and built-in automations, a strong alternative to Notion for teams needing formula-driven tables and workflow logic. Coda AI can draft content, summarize docs, answer questions from your workspace, and automate routine updates.",
    "pricingText": "Free plan for individuals; team plans reportedly from ~$10/user/mo — see coda.io/pricing.",
    "hasFreeTier": true,
    "bestFor": "Product and operations teams needing one workspace for structured data, documents, and automations without switching tools.",
    "notFor": "Users who just need a simple note-taking app — Coda's flexibility comes with a steeper learning curve.",
    "useCases": [
      "Roadmap and OKR tracking",
      "AI-drafted internal docs",
      "Database-backed projects",
      "In-doc workflow automation"
    ],
    "tags": [
      "documents",
      "databases",
      "ai-writing",
      "automation"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "gamma-ai",
    "name": "Gamma",
    "tagline": "Turn ideas into polished presentations, docs, and sites",
    "websiteUrl": "https://gamma.app",
    "descriptionMd": "Gamma is an AI-powered content tool that generates presentations, documents, and web pages from a prompt in seconds. Its renderer handles layout and typography automatically so creators focus on content. Free credits let you try it; paid plans unlock unlimited AI, custom domains, and brand theming.",
    "pricingText": "Free plan with limited AI credits; paid plans reportedly from ~$10/mo (Plus) up to ~$100/mo (Ultra) — verify at gamma.app.",
    "hasFreeTier": true,
    "bestFor": "Founders and marketers who need to turn rough ideas into shareable, polished decks or microsites in minutes.",
    "notFor": "Teams that need deep slide-by-slide design control or complex data visualizations with custom charting.",
    "useCases": [
      "AI-generated pitch decks",
      "Marketing one-pagers",
      "Client proposals",
      "Visual knowledge docs"
    ],
    "tags": [
      "presentations",
      "ai-generation",
      "branding",
      "no-code"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "beautiful-ai",
    "name": "Beautiful.ai",
    "tagline": "Smart Slides that auto-layout your presentation",
    "websiteUrl": "https://www.beautiful.ai",
    "descriptionMd": "Beautiful.ai is a presentation platform built around Smart Slides — layout logic that automatically adjusts spacing, alignment, and hierarchy as you add content. Brand controls let teams lock fonts, colors, and logos, and its DesignerBot can generate full decks from a prompt.",
    "pricingText": "Pro reportedly ~$12/mo (annual); Team ~$40/user/mo. No permanent free tier — verify at beautiful.ai.",
    "hasFreeTier": false,
    "bestFor": "Design-conscious teams that want every stakeholder's presentation to look polished without a designer per file.",
    "notFor": "Individual creators on a tight budget who need only one or two decks per year.",
    "useCases": [
      "Branded presentation templates",
      "Auto-generated sales decks",
      "Investor pitch decks",
      "Team presentation collaboration"
    ],
    "tags": [
      "presentations",
      "smart-slides",
      "branding",
      "collaboration"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "kittl",
    "name": "Kittl",
    "tagline": "AI-first graphic design for logos, merch, and brand graphics",
    "websiteUrl": "https://www.kittl.com",
    "descriptionMd": "Kittl is a browser-based graphic design tool that combines AI image generation with a professional vector editor and a large library of illustration-style templates. It targets creators, print-on-demand sellers, and brand designers needing logos, t-shirt graphics, and social assets, with commercial licensing.",
    "pricingText": "Free plan with limited AI tokens/mo; Pro reportedly ~$15/mo (or ~$120/yr); Expert tier higher — verify at kittl.com.",
    "hasFreeTier": true,
    "bestFor": "Creators and small studios who need polished logo-quality vector graphics and on-brand social assets without Illustrator skills.",
    "notFor": "UX/product designers who primarily work on UI screens or interactive prototypes.",
    "useCases": [
      "Logo and brand identity",
      "Print-on-demand merch graphics",
      "Social media templates",
      "Product label design"
    ],
    "tags": [
      "logo-design",
      "vector",
      "branding",
      "social-graphics"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "visily",
    "name": "Visily",
    "tagline": "AI wireframe and UI mockup tool for non-designers",
    "websiteUrl": "https://www.visily.ai",
    "descriptionMd": "Visily lets product managers, founders, and developers generate wireframes and UI mockups from text prompts or screenshots without design training. Its AI converts sketches or images into editable component-based screens, supports real-time collaboration, and exports to Figma.",
    "pricingText": "Free Starter plan with limited AI credits; Pro reportedly ~$11-14/editor/mo (annual) — verify at visily.ai.",
    "hasFreeTier": true,
    "bestFor": "Product managers and developers who need credible wireframes to align stakeholders quickly without a dedicated designer.",
    "notFor": "Visual designers who need pixel-perfect, high-fidelity UI or custom illustration work.",
    "useCases": [
      "Rapid wireframing",
      "Collaborative requirement mockups",
      "Prototype sharing",
      "Sketch-to-wireframe conversion"
    ],
    "tags": [
      "wireframing",
      "ui-mockup",
      "no-code",
      "prototyping"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "relume",
    "name": "Relume",
    "tagline": "AI sitemap and wireframe generator for Webflow and Figma",
    "websiteUrl": "https://www.relume.io",
    "descriptionMd": "Relume generates complete website sitemaps and full-page wireframes from a short prompt, then exports them into Figma or Webflow using real components. It compresses the discovery and IA phase of web projects, with a large library of marketing-website sections.",
    "pricingText": "Paid plans reportedly start around ~$38/mo — no meaningful permanent free tier. Verify at relume.io.",
    "hasFreeTier": false,
    "bestFor": "Webflow agencies and freelancers who want to cut client-site discovery and wireframing from days to under an hour.",
    "notFor": "Product/app designers building complex interactive UI systems, or teams that don't use Webflow or Figma.",
    "useCases": [
      "AI sitemap generation",
      "Full-page wireframe export",
      "Marketing component library",
      "Site structure presentation"
    ],
    "tags": [
      "wireframing",
      "webflow",
      "figma",
      "website-design"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "musho",
    "name": "Musho",
    "tagline": "Figma plugin that turns prompts into web designs",
    "websiteUrl": "https://musho.ai",
    "descriptionMd": "Musho is a Figma plugin and standalone tool that generates complete, responsive web page designs from a text prompt, producing on-brand copy alongside the layout. Designs are output into Figma frames as editable layers, ready for developer handoff, with brand stylists to lock visual identity.",
    "pricingText": "Free trial with limited generations; paid plans reportedly from ~$9/mo — verify at musho.ai.",
    "hasFreeTier": true,
    "bestFor": "Web designers and agencies who want a fast first-draft design inside Figma that feels close to a real webpage.",
    "notFor": "Marketers or founders without Figma who want a published site, not an editable design file.",
    "useCases": [
      "Landing page first drafts in Figma",
      "On-brand social layouts",
      "Website redesign ideation",
      "Rapid client concepts"
    ],
    "tags": [
      "figma-plugin",
      "web-design",
      "ai-generation",
      "landing-page"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "flair-ai",
    "name": "Flair.ai",
    "tagline": "AI product photography and branded campaign visuals",
    "websiteUrl": "https://flair.ai",
    "descriptionMd": "Flair.ai is an AI product photography studio that generates professional campaign visuals by placing product images into AI-generated branded environments. Users drag and drop product shots, choose a scene style, and produce on-brand imagery in seconds, with custom model training for catalog consistency.",
    "pricingText": "Free plan with a few generations; Pro reportedly ~$10/mo; Pro+ ~$35/mo; Scale ~$55/mo — verify at flair.ai.",
    "hasFreeTier": true,
    "bestFor": "E-commerce brands and DTC marketers who need high-volume, on-brand product photography without studio shoots.",
    "notFor": "Teams needing complex multi-person lifestyle photography or video beyond AI stills.",
    "useCases": [
      "Product hero images",
      "Branded campaign visuals",
      "Seasonal scene variations",
      "Ad creative testing"
    ],
    "tags": [
      "product-photography",
      "e-commerce",
      "branding",
      "social-graphics"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "pixelcut",
    "name": "Pixelcut",
    "tagline": "AI photo editor for product visuals and social content",
    "websiteUrl": "https://www.pixelcut.ai",
    "descriptionMd": "Pixelcut is a mobile-first AI photo editor used by millions of creators for background removal, AI upscaling, generative fill, and product image enhancement. It ships many templates for social posts, listings, and ads, with integrations for Shopify, Etsy, Instagram, and Facebook.",
    "pricingText": "Free tier with core features; Pro plan pricing varies — verify at pixelcut.ai.",
    "hasFreeTier": true,
    "bestFor": "E-commerce sellers and social managers who want fast, professional product visuals from their phone or browser.",
    "notFor": "Professional designers needing vector editing, advanced typography, or print-quality output.",
    "useCases": [
      "Background removal for listings",
      "AI upscaling of product photos",
      "Template-based social posts",
      "E-commerce ad creative"
    ],
    "tags": [
      "photo-editing",
      "background-removal",
      "e-commerce",
      "social-graphics"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "durable",
    "name": "Durable",
    "tagline": "AI website builder with branding, CRM, and marketing",
    "websiteUrl": "https://durable.com",
    "descriptionMd": "Durable generates a complete small-business website — AI logo, color palette, copy, and contact forms — in about 30 seconds from a business name and category. It bundles a CRM, invoicing, Google Ads copy generation, and social posts in one subscription.",
    "pricingText": "Free plan available; paid plans reportedly from ~$15/mo (Starter) to ~$95/mo (Mogul) — verify at durable.com.",
    "hasFreeTier": true,
    "bestFor": "Local service businesses and solopreneurs who want a complete branded web presence and basic marketing toolkit with zero design work.",
    "notFor": "Developers or designers who need custom code, headless CMS, or deep layout control.",
    "useCases": [
      "Instant small-business website",
      "AI logo and palette",
      "Ad and social copy drafting",
      "CRM and invoicing"
    ],
    "tags": [
      "website-builder",
      "branding",
      "logo-design",
      "small-business"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "mixo",
    "name": "Mixo",
    "tagline": "Launch a startup landing page with AI in seconds",
    "websiteUrl": "https://www.mixo.io",
    "descriptionMd": "Mixo generates a complete, mobile-responsive startup landing page from a one-sentence idea prompt, including headline copy, feature sections, and an email waitlist form. It is designed for rapid idea validation rather than full site management.",
    "pricingText": "Free plan on a Mixo subdomain; paid plans reportedly from ~$7/mo (Basic, annual) to ~$29/mo (Premium) — verify at mixo.io.",
    "hasFreeTier": true,
    "bestFor": "Early-stage founders who need to validate a startup idea with a live landing page and waitlist in minutes.",
    "notFor": "Established businesses needing custom design, e-commerce, blog functionality, or deep SEO control.",
    "useCases": [
      "Startup waitlist landing page",
      "MVP validation",
      "Side-project microsite",
      "Investor concept page"
    ],
    "tags": [
      "landing-page",
      "startup",
      "website-builder",
      "no-code"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "figma-ai",
    "name": "Figma AI",
    "tagline": "Native AI inside Figma for UI generation and copy",
    "websiteUrl": "https://www.figma.com",
    "descriptionMd": "Figma AI is the suite of AI capabilities built into Figma, including text-to-UI screen generation, AI-powered search across design assets, AI copy rewriting and translation, and generative image fill. It draws on a team's design system to keep generated layouts on-brand.",
    "pricingText": "Included in Figma plans (Starter is free); Figma Professional reportedly ~$15/editor/mo. AI feature availability may vary by plan — verify at figma.com.",
    "hasFreeTier": true,
    "bestFor": "UI/UX designers already in Figma who want AI-assisted screen drafting and copy without switching tools.",
    "notFor": "Non-designers wanting a point-and-click no-code site builder, or marketers needing finished published pages.",
    "useCases": [
      "Text-to-UI screen generation",
      "AI copy rewriting and translation",
      "Generative image fill",
      "First-draft wireframes"
    ],
    "tags": [
      "ui-design",
      "figma",
      "ai-generation",
      "wireframing"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "riffusion",
    "name": "Riffusion",
    "tagline": "Text-to-music AI that generates songs from prompts",
    "websiteUrl": "https://riffusion.com",
    "descriptionMd": "Riffusion converts text prompts into music, supporting vocal and instrumental outputs across many genres and moods. Paid plans include stem downloads, lyric tools, and commercial rights, while the free tier lets you experiment quickly.",
    "pricingText": "Free tier available; paid plans reportedly from ~$10/mo (Standard) and ~$30/mo (Pro) — verify at riffusion.com.",
    "hasFreeTier": true,
    "bestFor": "Creators who want fast music generation from a simple text prompt with genre flexibility.",
    "notFor": "Professional studio work requiring high-fidelity mixing — output quality lags dedicated DAW workflows.",
    "useCases": [
      "Background music for videos",
      "Social content soundtracks",
      "Rapid genre exploration",
      "Prototype demo tracks"
    ],
    "tags": [
      "text-to-music",
      "ai-generation",
      "royalty-free",
      "genres"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "moises-ai",
    "name": "Moises",
    "tagline": "AI stem separation and musician practice toolkit",
    "websiteUrl": "https://moises.ai",
    "descriptionMd": "Moises uses AI to separate any song into stems — vocals, drums, bass, instruments — from a browser or mobile app. Beyond separation it offers chord detection, key/tempo shifting, and lyric transcription, making it a practice suite for musicians, with a hi-fi export mode on paid plans.",
    "pricingText": "Free tier with limited uploads; Pro subscription reportedly ~$35-95/yr depending on plan — check moises.ai.",
    "hasFreeTier": true,
    "bestFor": "Musicians and teachers who need to isolate stems, learn chords, or practice along to any song.",
    "notFor": "Generating entirely new music from scratch — Moises analyzes and separates, it doesn't compose.",
    "useCases": [
      "Karaoke track creation",
      "Practice with backing tracks",
      "Remixing and sampling",
      "Learning songs by ear"
    ],
    "tags": [
      "stem-separation",
      "vocal-remover",
      "chord-detection",
      "musicians"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "endel",
    "name": "Endel",
    "tagline": "Personalized AI soundscapes for focus, sleep, relaxation",
    "websiteUrl": "https://endel.io",
    "descriptionMd": "Endel generates real-time, adaptive soundscapes that respond to time of day, activity, and other inputs to support focus, sleep, or relaxation. Note that Endel produces functional listening experiences, not licensable music tracks for content creation.",
    "pricingText": "Free tier available; monthly plans reportedly from ~$6/mo and annual from ~$50/yr — verify at endel.io.",
    "hasFreeTier": true,
    "bestFor": "Knowledge workers and students who want science-backed ambient audio to improve concentration or sleep.",
    "notFor": "Content creators needing downloadable, licensable background music — Endel soundscapes are for personal listening, not sync licensing.",
    "useCases": [
      "Deep work and focus",
      "Sleep and relaxation",
      "Meditation and mindfulness",
      "Stress reduction"
    ],
    "tags": [
      "soundscapes",
      "focus",
      "sleep",
      "wellness"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "lemonaide",
    "name": "Lemonaide",
    "tagline": "AI melody and chord generator for producers",
    "websiteUrl": "https://lemonaide.ai",
    "descriptionMd": "Lemonaide generates MIDI and audio chord progressions and melodies using models trained with professional producers. It outputs royalty-free loops in the user's chosen key and scale, ready to drag into any DAW, aimed at producers who want stylistically authentic starting points.",
    "pricingText": "Paid subscription reportedly ~$10/mo; free trial available — confirm at lemonaide.ai.",
    "hasFreeTier": true,
    "bestFor": "Beatmakers and producers who want genre-specific, producer-vetted MIDI ideas to break creative blocks.",
    "notFor": "Listeners or non-producers seeking finished songs — outputs are MIDI/loop building blocks.",
    "useCases": [
      "Chord progression generation",
      "Melody brainstorming",
      "Genre-specific beat production",
      "DAW workflow acceleration"
    ],
    "tags": [
      "midi",
      "chord-generator",
      "melody",
      "producers"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "sonauto",
    "name": "Sonauto",
    "tagline": "Text-to-music generator with a developer API",
    "websiteUrl": "https://sonauto.ai",
    "descriptionMd": "Sonauto is a text-to-music generator that offers high-volume free generation on its web platform and a developer API for building music generation into products. Commercial licensing terms are disputed across sources, so verify directly before any revenue-generating use.",
    "pricingText": "Web platform reportedly free with generous limits; developer API from ~$11/mo. Commercial-use licensing is unclear — verify terms before monetizing.",
    "hasFreeTier": true,
    "bestFor": "Developers and experimenters who want high-volume, low-cost music generation for prototyping or personal projects.",
    "notFor": "Commercial creators needing clear, documented royalty-free licensing — commercial rights are unconfirmed.",
    "useCases": [
      "Rapid music prototyping",
      "Developer API integration",
      "Personal project soundtracks",
      "Game audio demos"
    ],
    "tags": [
      "text-to-music",
      "api",
      "prototyping",
      "instrumental"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "musicgen-meta",
    "name": "MusicGen (Meta)",
    "tagline": "Meta's open-source text-to-music model",
    "websiteUrl": "https://huggingface.co/facebook/musicgen-large",
    "descriptionMd": "MusicGen is Meta's open-source music generation model from the AudioCraft framework, runnable locally or via hosted inference. It comes in multiple sizes and a melody-conditioning variant. Critically, the base model is licensed CC BY-NC 4.0, so commercial use of output is not permitted without separate arrangement.",
    "pricingText": "Free to run locally (needs a capable GPU) or via pay-per-use cloud inference — no commercial use under the default CC BY-NC 4.0 license.",
    "hasFreeTier": true,
    "bestFor": "Researchers and developers who need a self-hosted, auditable music generation pipeline for non-commercial projects.",
    "notFor": "Any commercial application — the CC BY-NC 4.0 license prohibits commercial use of outputs without a separate license.",
    "useCases": [
      "Academic music AI research",
      "Non-commercial prototypes",
      "Personal experimentation",
      "Fine-tuning base model"
    ],
    "tags": [
      "open-source",
      "self-hosted",
      "research",
      "instrumental"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "splash-pro",
    "name": "Splash Pro",
    "tagline": "AI song generator with vocals, stems, and licensing",
    "websiteUrl": "https://splashmusic.com",
    "descriptionMd": "Splash Pro generates full songs with AI vocals (including rap and singing) from text prompts, offering downloads as MP3, WAV, lyric videos, and separated stems. It positions itself for creators who need polished, licensable audio with multiple AI singer and rapper personas.",
    "pricingText": "Free tier available; paid subscription plans available — specific pricing not publicly confirmed, check splashmusic.com.",
    "hasFreeTier": true,
    "bestFor": "Content creators and social producers who need full AI-sung songs with stems and commercial licensing in one place.",
    "notFor": "Musicians wanting to bring their own melody or chords — Splash Pro is prompt-in/song-out with limited compositional control.",
    "useCases": [
      "YouTube and TikTok music",
      "Royalty-free track licensing",
      "AI vocal demos",
      "Lyric video production"
    ],
    "tags": [
      "vocals",
      "stems",
      "royalty-free",
      "text-to-song"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "cassetteai",
    "name": "CassetteAI",
    "tagline": "Fast royalty-free music with stems and MIDI export",
    "websiteUrl": "https://cassetteai.com",
    "descriptionMd": "CassetteAI generates stereo WAV music tracks from text prompts in seconds, focused on consistent, professional-quality output. Pro subscribers unlock stem separation, MIDI export, and a commercial-use license, and a pay-per-use API serves developers.",
    "pricingText": "Free tier available; Pro plan reportedly from ~$3.99/mo — verify at cassetteai.com; commercial license on paid plans only.",
    "hasFreeTier": true,
    "bestFor": "Developers and indie creators who need fast, API-accessible music generation with stems and MIDI for DAW integration.",
    "notFor": "Free-tier users needing commercial rights — commercial licensing requires a paid subscription.",
    "useCases": [
      "App and game audio",
      "DAW-integrated production",
      "Royalty-free video music",
      "Sound design prototyping"
    ],
    "tags": [
      "api",
      "stems",
      "midi",
      "royalty-free"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "staccato",
    "name": "Staccato",
    "tagline": "AI MIDI co-writer for melody, chords, and lyrics",
    "websiteUrl": "https://staccato.ai",
    "descriptionMd": "Staccato is a browser-based AI co-writing tool that generates MIDI melodies, chord progressions, and lyrics collaboratively with the musician. It offers separate tracks for lyric writers and instrument producers plus a combined Pro plan, positioning itself as a creative partner rather than a fully automated generator.",
    "pricingText": "7-day free trial; paid plans reportedly from ~$6.49/mo (Lyrics) to ~$12.49/mo (Pro) — verify at staccato.ai.",
    "hasFreeTier": true,
    "bestFor": "Songwriters who want an interactive AI co-writer for MIDI ideas and lyrics rather than one-click generation.",
    "notFor": "Users who need audio output — Staccato outputs MIDI and text; you need a DAW and instruments to finish a track.",
    "useCases": [
      "Melody and hook ideation",
      "Lyric and rhyme writing",
      "Chord progression exploration",
      "Genre-specific songwriting"
    ],
    "tags": [
      "midi",
      "lyrics",
      "co-writer",
      "songwriting"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "google-gemini",
    "name": "Google Gemini",
    "tagline": "Google's multimodal AI assistant",
    "websiteUrl": "https://gemini.google.com",
    "descriptionMd": "Google Gemini is Google's flagship AI assistant on web and mobile, integrating with Google Workspace (Docs, Gmail, Drive) and supporting text, image, and audio inputs. Gemini Advanced offers the most capable models via a Google One subscription.",
    "pricingText": "Free tier available; Gemini Advanced via Google One AI Premium at ~$19.99/mo (varies by region).",
    "hasFreeTier": true,
    "bestFor": "Users already in the Google ecosystem who want AI tightly integrated with Gmail, Docs, and Drive.",
    "notFor": "Users who need a privacy-focused or fully offline assistant.",
    "useCases": [
      "Drafting emails in Gmail",
      "Summarizing Google Docs",
      "Multimodal image analysis",
      "General Q&A"
    ],
    "tags": [
      "multimodal",
      "google",
      "workspace",
      "mobile"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "huggingchat",
    "name": "HuggingChat",
    "tagline": "Open-source AI chat powered by community models",
    "websiteUrl": "https://huggingface.co/chat",
    "descriptionMd": "HuggingChat is Hugging Face's open-source chat interface that lets users switch between multiple leading open-weight models including Llama, Mistral, and Qwen. It offers transparency into the underlying models and supports web-search augmentation, with no account required for basic use.",
    "pricingText": "Free to use; no paid tier.",
    "hasFreeTier": true,
    "bestFor": "Developers and researchers who want to compare open-weight models side-by-side in a chat UI.",
    "notFor": "Non-technical users who need a polished, highly reliable consumer product.",
    "useCases": [
      "Testing open-source LLMs",
      "No-signup quick chat",
      "Web-augmented Q&A",
      "Model comparison"
    ],
    "tags": [
      "open-source",
      "hugging-face",
      "multi-model",
      "research"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "qwen-chat",
    "name": "Qwen Chat",
    "tagline": "Alibaba's multilingual AI assistant",
    "websiteUrl": "https://chat.qwen.ai",
    "descriptionMd": "Qwen Chat is the consumer interface for Alibaba's Qwen model family, with strong performance in both Chinese and English. It supports long-context conversations, image understanding, and code generation, and Qwen models are also available open-weight.",
    "pricingText": "Free tier available; paid plan pricing not publicly confirmed.",
    "hasFreeTier": true,
    "bestFor": "Chinese-speaking users or businesses needing strong bilingual AI assistance.",
    "notFor": "Users who require tight integration with Western productivity suites like Microsoft 365.",
    "useCases": [
      "Chinese-language writing",
      "Bilingual translation",
      "Code generation",
      "Long-document summarization"
    ],
    "tags": [
      "multilingual",
      "chinese",
      "alibaba",
      "multimodal"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "kimi-moonshot",
    "name": "Kimi",
    "tagline": "Moonshot AI's long-context assistant",
    "websiteUrl": "https://kimi.moonshot.cn",
    "descriptionMd": "Kimi is an AI assistant by Moonshot AI, notable for a very long context window that lets users upload and query large documents. It supports Chinese and English and is popular for research and document analysis, with an international version available.",
    "pricingText": "Free tier available; premium plans exist, exact pricing varies.",
    "hasFreeTier": true,
    "bestFor": "Researchers and professionals who need to analyze lengthy PDFs or documents in a single session.",
    "notFor": "Users who require real-time web search or voice interaction as a core feature.",
    "useCases": [
      "Long PDF analysis",
      "Contract review",
      "Research summarization",
      "Bilingual document Q&A"
    ],
    "tags": [
      "long-context",
      "chinese",
      "document-analysis",
      "moonshot"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "you-com",
    "name": "You.com",
    "tagline": "AI search assistant that cites sources",
    "websiteUrl": "https://you.com",
    "descriptionMd": "You.com combines a conversational AI assistant with a privacy-respecting search engine, providing cited, up-to-date answers by searching the web in real time. It includes specialized modes for coding, writing, and research.",
    "pricingText": "Free plan available; YouPro reportedly ~$9.99/mo for advanced models (pricing may change).",
    "hasFreeTier": true,
    "bestFor": "Users who want cited, real-time web answers without being tracked by major search engines.",
    "notFor": "Users who need deep creative writing or coding assistance as a primary use case.",
    "useCases": [
      "Cited web research",
      "Privacy-conscious search",
      "Quick fact-checking",
      "News summarization"
    ],
    "tags": [
      "search",
      "privacy",
      "citations",
      "real-time"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "notebooklm",
    "name": "NotebookLM",
    "tagline": "Google's AI research assistant grounded in your sources",
    "websiteUrl": "https://notebooklm.google.com",
    "descriptionMd": "NotebookLM is an AI research and note-taking tool from Google that answers questions strictly from user-uploaded sources such as PDFs, Docs, and YouTube links, minimizing hallucinations for document-based tasks. Its Audio Overview generates podcast-style summaries of uploaded materials.",
    "pricingText": "Free with a Google account; NotebookLM Plus via Google One AI Premium (~$19.99/mo, may vary).",
    "hasFreeTier": true,
    "bestFor": "Students and researchers who need accurate, cited answers derived only from their own uploaded materials.",
    "notFor": "Users who want general open-ended chat beyond their uploaded documents.",
    "useCases": [
      "Literature review",
      "Study guide generation",
      "Podcast-style summaries",
      "Source-cited Q&A"
    ],
    "tags": [
      "document-grounded",
      "research",
      "google",
      "study"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "gpt4all",
    "name": "GPT4All",
    "tagline": "Run privacy-first AI chatbots on your local machine",
    "websiteUrl": "https://gpt4all.io",
    "descriptionMd": "GPT4All by Nomic AI is a free, open-source desktop application that runs large language models locally on CPU or GPU without an internet connection. It supports a library of downloadable open-weight models and keeps all data on the user's device, for Windows, macOS, and Linux.",
    "pricingText": "Free and open-source; no subscription required.",
    "hasFreeTier": true,
    "bestFor": "Privacy-conscious users or those in air-gapped environments who need a fully offline AI assistant.",
    "notFor": "Users who need real-time web access, multimodal capabilities, or mobile support.",
    "useCases": [
      "Offline document Q&A",
      "Private coding help",
      "Local text summarization",
      "Air-gapped use"
    ],
    "tags": [
      "offline",
      "open-source",
      "privacy",
      "local-llm"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "jan-ai",
    "name": "Jan",
    "tagline": "Open-source desktop app to run AI models offline",
    "websiteUrl": "https://jan.ai",
    "descriptionMd": "Jan is an open-source, self-hosted AI assistant application that runs models locally on Mac, Windows, and Linux. It provides a clean chat interface, supports importing GGUF models, and includes an OpenAI-compatible local API server, keeping all data on the user's machine.",
    "pricingText": "Free and open-source.",
    "hasFreeTier": true,
    "bestFor": "Developers who want a polished local-first AI chat UI with an OpenAI-compatible API for building apps.",
    "notFor": "Non-technical users who want a managed cloud service with no setup.",
    "useCases": [
      "Private offline chat",
      "Local API server",
      "Custom model experimentation",
      "Sensitive document analysis"
    ],
    "tags": [
      "offline",
      "open-source",
      "local-llm",
      "developer"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "khanmigo",
    "name": "Khanmigo",
    "tagline": "Khan Academy's AI tutor using Socratic dialogue",
    "websiteUrl": "https://www.khanacademy.org/khanmigo",
    "descriptionMd": "Khanmigo is an AI tutor built into Khan Academy, designed to guide students through problems using Socratic questioning rather than giving direct answers. It covers K-12 and college subjects and includes tools for educators to plan lessons.",
    "pricingText": "~$4/mo for students, or included in Khan Academy teacher/district plans (pricing subject to change).",
    "hasFreeTier": false,
    "bestFor": "K-12 and college students who learn best through guided questioning rather than direct answers.",
    "notFor": "Adults seeking a general-purpose productivity assistant or open-ended creative writing help.",
    "useCases": [
      "Math problem tutoring",
      "Test prep",
      "Essay writing guidance",
      "Teacher lesson planning"
    ],
    "tags": [
      "education",
      "tutoring",
      "k-12",
      "socratic"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "se-ranking",
    "name": "SE Ranking",
    "tagline": "All-in-one SEO platform with rank tracking and audits",
    "websiteUrl": "https://seranking.com",
    "descriptionMd": "SE Ranking is a comprehensive SEO platform combining rank tracking, on-page auditing, keyword research, backlink analysis, and an AI content writer. It also tracks brand citations across AI Overviews, ChatGPT, and Perplexity, positioned as a more affordable alternative to Semrush and Ahrefs.",
    "pricingText": "Paid plans reportedly from ~$52/mo (Essential) to ~$207/mo (Business); 14-day free trial, no permanent free tier.",
    "hasFreeTier": false,
    "bestFor": "Agencies and SMBs wanting a full-stack SEO suite with AI search-visibility tracking at a mid-market price.",
    "notFor": "Enterprise teams needing the deepest backlink database or large-scale API integrations.",
    "useCases": [
      "Rank tracking",
      "Website auditing",
      "Keyword research",
      "AI search visibility monitoring"
    ],
    "tags": [
      "rank-tracking",
      "site-audit",
      "keyword-research",
      "ai-search"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "mangools",
    "name": "Mangools",
    "tagline": "Beginner-friendly SEO suite (KWFinder, SERPWatcher)",
    "websiteUrl": "https://mangools.com",
    "descriptionMd": "Mangools is a five-tool SEO bundle (KWFinder, SERPWatcher, SERPChecker, LinkMiner, SiteProfiler) designed for ease of use without sacrificing depth. KWFinder is well-regarded for surfacing low-competition keywords with accurate difficulty scores.",
    "pricingText": "Plans reportedly from ~$29.90/mo (Basic) to ~$89.90/mo (Agency); ~35% off annual. Limited free account; no full free tier.",
    "hasFreeTier": false,
    "bestFor": "Bloggers, freelancers, and small businesses wanting a clean, low-learning-curve keyword and rank-tracking tool.",
    "notFor": "Large agencies needing deep technical audits, content-gap analysis, or high crawl limits.",
    "useCases": [
      "Keyword research",
      "Rank tracking",
      "SERP analysis",
      "Backlink research"
    ],
    "tags": [
      "keyword-research",
      "rank-tracking",
      "beginners",
      "affordable"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "ubersuggest",
    "name": "Ubersuggest",
    "tagline": "Budget SEO tool with keyword research and audits",
    "websiteUrl": "https://neilpatel.com/ubersuggest",
    "descriptionMd": "Ubersuggest by Neil Patel bundles keyword research, rank tracking, site auditing, backlink analysis, and competitor intelligence into one affordable platform. It is notable for offering a one-time lifetime pricing option, and includes a built-in AI Writer for some monthly word volume.",
    "pricingText": "Monthly plans reportedly from ~$29/mo; one-time lifetime purchase from ~$290. 7-day trial; limited free daily searches.",
    "hasFreeTier": true,
    "bestFor": "Budget-conscious bloggers and small business owners who want an all-in-one SEO toolkit without recurring fees.",
    "notFor": "SEO pros or agencies needing high-volume crawls, enterprise backlink data, or programmatic workflows.",
    "useCases": [
      "Keyword research",
      "Rank tracking",
      "Site auditing",
      "Competitor analysis"
    ],
    "tags": [
      "keyword-research",
      "affordable",
      "rank-tracking",
      "beginner-friendly"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "rankiq",
    "name": "RankIQ",
    "tagline": "AI SEO toolset with curated low-competition keywords for bloggers",
    "websiteUrl": "https://www.rankiq.com",
    "descriptionMd": "RankIQ is a niche SEO tool built for bloggers, combining a hand-curated library of low-competition, high-traffic keywords across hundreds of niches with an AI content optimizer. Each keyword comes with a competition score and traffic estimate, and the optimizer analyzes top-ranking posts.",
    "pricingText": "Single plan reportedly ~$49/mo; no free tier.",
    "hasFreeTier": false,
    "bestFor": "Food, lifestyle, and niche bloggers who want a curated shortlist of winnable keywords and AI content optimization without complexity.",
    "notFor": "Agencies, e-commerce sites, or SEO pros needing broad keyword databases, backlink tools, or multi-site management.",
    "useCases": [
      "Low-competition keyword discovery",
      "Content optimization for bloggers",
      "SEO brief generation",
      "Title grading"
    ],
    "tags": [
      "keyword-research",
      "content-optimization",
      "bloggers",
      "niche-seo"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "keyword-insights",
    "name": "Keyword Insights",
    "tagline": "AI keyword clustering and topical authority mapping",
    "websiteUrl": "https://www.keywordinsights.ai",
    "descriptionMd": "Keyword Insights clusters thousands of keywords into search-intent groups and maps topical authority gaps, helping teams build content strategies rather than chase single keywords. It also generates AI content briefs from live SERP data and offers an AI writing agent.",
    "pricingText": "Plans reportedly from ~$58/mo (Basic) to ~$299/mo (Premium); free tier with limited credits.",
    "hasFreeTier": true,
    "bestFor": "SEO strategists and content teams building topical authority through systematic keyword clustering and intent mapping.",
    "notFor": "Individual bloggers needing a simple single-keyword lookup — the credit system adds complexity at low volume.",
    "useCases": [
      "Keyword clustering",
      "Topical authority mapping",
      "AI content briefs",
      "Search intent analysis"
    ],
    "tags": [
      "keyword-clustering",
      "content-strategy",
      "topical-authority",
      "ai-briefs"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "outranking",
    "name": "Outranking",
    "tagline": "AI SEO writer with SERP-driven briefs and internal linking",
    "websiteUrl": "https://www.outranking.io",
    "descriptionMd": "Outranking combines SEO content briefs, AI draft generation, real-time on-page scoring, and automated internal linking suggestions in one workflow. It analyzes top-ranking SERP results to build briefs and scores content against ranking factors as writers work.",
    "pricingText": "Plans reportedly from ~$25/mo (Starter) to ~$159/mo (SEO Wizard); custom enterprise. Trial available; no permanent free tier.",
    "hasFreeTier": false,
    "bestFor": "Content managers and SEO writers who want an end-to-end workflow from SERP brief to optimized draft.",
    "notFor": "Teams needing high-volume programmatic content generation or standalone keyword research without writing.",
    "useCases": [
      "AI content brief generation",
      "On-page SEO scoring",
      "Automated internal linking",
      "SERP competitive analysis"
    ],
    "tags": [
      "content-optimization",
      "ai-writing",
      "on-page-seo",
      "content-briefs"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "dashword",
    "name": "Dashword",
    "tagline": "Clean content optimization reports and AI briefs",
    "websiteUrl": "https://www.dashword.com",
    "descriptionMd": "Dashword is a content optimization tool that analyzes top-ranking SERP pages to generate keyword recommendations, content scores, and structured briefs. It targets content teams wanting clear, actionable reports without the bloat of full-suite platforms, plus content monitoring for score declines.",
    "pricingText": "Startup reportedly ~$99/mo (20 reports); Business ~$349/mo; Enterprise from ~$699/mo. One free report to trial; no ongoing free tier.",
    "hasFreeTier": false,
    "bestFor": "Content teams and agencies that produce steady article volume and want streamlined SERP-based optimization reports.",
    "notFor": "Solo bloggers or anyone needing keyword discovery, rank tracking, or backlink analysis — it focuses on optimization only.",
    "useCases": [
      "Content optimization scoring",
      "SEO content briefs",
      "Content monitoring",
      "SERP analysis"
    ],
    "tags": [
      "content-optimization",
      "content-briefs",
      "serp-analysis",
      "agencies"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "seowind",
    "name": "SEOwind",
    "tagline": "AI article writer combining SERP research and briefs",
    "websiteUrl": "https://seowind.io",
    "descriptionMd": "SEOwind handles data research, SEO brief creation, and AI-assisted article writing in a single pipeline, pulling from SERP, People Also Ask, and long-tail keyword data. It uses multiple AI models to generate drafts and is oriented toward teams producing higher volumes of E-E-A-T-focused content.",
    "pricingText": "Plans reportedly from ~$49/mo (Basic, annual) to ~$299/mo (Agency); trial available; no permanent free tier.",
    "hasFreeTier": false,
    "bestFor": "Agencies and in-house teams scaling E-E-A-T-focused blog production with AI-assisted research and writing in one workflow.",
    "notFor": "Individual users needing a lightweight tool — feature depth and pricing target teams with ongoing volume.",
    "useCases": [
      "AI content briefs",
      "Long-form SEO articles",
      "Keyword clustering",
      "White-label agency content"
    ],
    "tags": [
      "ai-writing",
      "content-briefs",
      "eeat",
      "agencies"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "content-at-scale",
    "name": "Content at Scale",
    "tagline": "AI blog writer for long-form SEO content at volume",
    "websiteUrl": "https://contentatscale.ai",
    "descriptionMd": "Content at Scale generates long-form SEO blog posts by combining real-time SERP research, NLP analysis, and multiple LLMs, targeting agencies and publishers who need large volumes of publish-ready articles. It includes a human-in-the-loop editing interface and quality scoring.",
    "pricingText": "Per-post pricing model: plans reportedly from ~$31/post (Solo) down to ~$15/post (Agency, high volume); trial article available; no free tier.",
    "hasFreeTier": false,
    "bestFor": "Content agencies and niche-site operators who need large volumes of long-form SEO articles efficiently.",
    "notFor": "Teams wanting a human-editorial-first workflow, or tools focused on keyword research, rank tracking, or audits.",
    "useCases": [
      "Bulk long-form blog generation",
      "Programmatic SEO content",
      "Agency content pipelines",
      "SERP-informed drafting"
    ],
    "tags": [
      "programmatic-seo",
      "ai-writing",
      "bulk-content",
      "agencies"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  },
  {
    "slug": "koalawriter",
    "name": "KoalaWriter",
    "tagline": "One-click AI SEO writer with live SERP data",
    "websiteUrl": "https://koala.sh",
    "descriptionMd": "KoalaWriter generates SEO-optimized long-form articles in one click by pulling real-time SERP data, product information, and People Also Ask results into each draft. It supports multiple AI models and includes a chat assistant, with accessible entry-level pricing for bloggers and small sites.",
    "pricingText": "Plans reportedly from ~$9/mo (Essentials, ~15k words) up to ~$350/mo (Elite). Free words on signup without a card.",
    "hasFreeTier": true,
    "bestFor": "Bloggers and niche-site owners who want fast, low-cost AI article drafts informed by current SERP data.",
    "notFor": "Enterprise content teams needing deep SEO auditing, rank tracking, or brief collaboration features.",
    "useCases": [
      "One-click SEO articles",
      "Affiliate content drafts",
      "SERP-informed writing",
      "AI content chat"
    ],
    "tags": [
      "ai-writing",
      "content-generation",
      "bloggers",
      "affordable"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06"
  }
]

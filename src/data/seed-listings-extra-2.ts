/**
 * Catalog expansion batch 2 (curated 2026-06, agent-drafted from model knowledge, no external API).
 * Real, recognizable next-tier AI tools authored to the same decision-data quality bar as
 * seed-listings.ts / seed-listings-extra.ts (hedged real pricing, honest bestFor/notFor).
 * Deduped vs the first 276 entries by slug + normalized name. Concatenated by
 * seed-core (DB seed) and static-data (static fallback / SEO_STATIC_READS).
 */
import type { SeedListing } from './seed-listings'

export const SEED_LISTINGS_EXTRA_2: SeedListing[] = [
  {
    "slug": "groq-chat",
    "name": "Groq Chat",
    "tagline": "Blazing-fast LLM inference powered by LPU hardware",
    "websiteUrl": "https://chat.groq.com",
    "descriptionMd": "Groq Chat is a conversational interface built on Groq's custom Language Processing Units (LPUs), delivering some of the fastest token generation speeds available publicly. It hosts open models like Llama and Mixtral, letting users experience near-instant responses. The service is free to use with rate limits and is popular for benchmarking raw inference speed.",
    "pricingText": "Free tier available; API access is pay-per-token (verify current rates on site)",
    "hasFreeTier": true,
    "bestFor": "Users who need extremely fast responses from open-source models for testing or real-time applications",
    "notFor": "Users needing persistent memory, file uploads, or a polished productivity workspace",
    "useCases": [
      "Rapid prototyping with LLM responses",
      "Benchmarking inference speed",
      "Low-latency chatbot development",
      "Experimenting with open models like Llama"
    ],
    "tags": [
      "fast-inference",
      "open-source-models",
      "lpu",
      "developer-tool"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "venice-ai",
    "name": "Venice AI",
    "tagline": "Private AI chat with no conversation logging",
    "websiteUrl": "https://venice.ai",
    "descriptionMd": "Venice AI positions itself as a privacy-first AI assistant that does not store or log conversations, aiming to give users a confidential chat experience. It runs open-source models and allows more permissive outputs than many mainstream platforms. The platform targets users concerned about data privacy.",
    "pricingText": "Free tier with usage limits; Pro subscription available (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Privacy-conscious users who want confidential AI conversations without data retention",
    "notFor": "Users who need deep integrations, code execution, or enterprise compliance features",
    "useCases": [
      "Private brainstorming without data logging",
      "Exploring creative writing",
      "Sensitive personal advice without cloud storage",
      "Testing open-source models privately"
    ],
    "tags": [
      "privacy",
      "open-source-models",
      "no-logging",
      "chat"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "together-chat",
    "name": "Together Chat",
    "tagline": "Chat with top open-source models on one platform",
    "websiteUrl": "https://chat.together.ai",
    "descriptionMd": "Together Chat is the conversational front-end for Together AI's inference cloud, offering access to dozens of open-source models including Llama, Mistral, and Qwen in a single interface. It allows side-by-side model comparisons and is aimed at developers and researchers evaluating model capabilities. Together AI is well-regarded in the open-source ML community for broad model availability.",
    "pricingText": "Free credits for new users; pay-per-token API pricing beyond free tier (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers and researchers who want to compare multiple open-source LLMs in one place",
    "notFor": "Non-technical users looking for a simple consumer chatbot experience",
    "useCases": [
      "Comparing outputs across multiple LLMs",
      "Evaluating open-source model quality",
      "Developer prototyping with various models",
      "Research benchmarking"
    ],
    "tags": [
      "open-source-models",
      "model-comparison",
      "developer",
      "research"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "chatllm-abacus",
    "name": "ChatLLM (Abacus AI)",
    "tagline": "Multi-model AI chat with memory and team workspaces",
    "websiteUrl": "https://chatllm.abacus.ai",
    "descriptionMd": "ChatLLM by Abacus AI provides access to a wide range of frontier models — including GPT-4, Claude, Gemini, and open-source alternatives — through a single subscription. It includes features like persistent memory, document uploads, code execution, and team workspaces. Abacus AI is an enterprise ML platform, and ChatLLM is its consumer-facing multi-model chat product.",
    "pricingText": "Free trial available; paid plans from ~$10/mo (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Power users who want access to multiple frontier models plus memory and document features in one subscription",
    "notFor": "Casual users who only need one model and don't require team or document features",
    "useCases": [
      "Switching between GPT-4, Claude, and Gemini in one app",
      "Uploading and chatting with documents",
      "Team collaboration on AI-assisted projects",
      "Long-context research with persistent memory"
    ],
    "tags": [
      "multi-model",
      "memory",
      "document-upload",
      "team-collaboration"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "ora-ai",
    "name": "Ora.ai",
    "tagline": "Create and share custom AI chatbots in seconds",
    "websiteUrl": "https://ora.ai",
    "descriptionMd": "Ora.ai is a platform that lets users build, deploy, and share custom AI chatbots powered by leading models without any coding. It features a marketplace of community-created bots and supports system prompt customization. The platform appeals to creators who want to publish specialized assistants for niche topics or audiences.",
    "pricingText": "Free tier available; premium plans for higher usage and advanced models (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Non-developers who want to create and share custom AI personas or topic-specific chatbots",
    "notFor": "Users needing deep API access, code execution, or enterprise-grade security",
    "useCases": [
      "Building a niche-topic chatbot without coding",
      "Sharing custom AI assistants publicly",
      "Exploring community-created bots",
      "Creating branded AI personas for content"
    ],
    "tags": [
      "no-code",
      "chatbot-builder",
      "community",
      "custom-personas"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "msty",
    "name": "Msty",
    "tagline": "Local-first AI chat app for Mac, Windows, and Linux",
    "websiteUrl": "https://msty.app",
    "descriptionMd": "Msty is a desktop application that lets users run local LLMs (via Ollama or direct model files) alongside cloud models in a unified interface. It features conversation branching, multiple chat splits, and model switching within a single session. Msty is designed for power users who want a polished desktop experience for both private local inference and cloud AI.",
    "pricingText": "Free version available; Pro plan for additional features (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Desktop users who want a polished app for mixing local and cloud LLMs with advanced conversation management",
    "notFor": "Users who prefer web-based tools or do not want to manage local model installations",
    "useCases": [
      "Running local Llama or Mistral models privately",
      "Branching conversations to explore different response paths",
      "Comparing local vs cloud model responses side-by-side",
      "Offline AI chat without internet dependency"
    ],
    "tags": [
      "local-llm",
      "desktop-app",
      "offline",
      "model-comparison"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "anything-llm",
    "name": "AnythingLLM",
    "tagline": "Self-hosted AI workspace for documents and local models",
    "websiteUrl": "https://anythingllm.com",
    "descriptionMd": "AnythingLLM is an open-source, self-hostable application that turns documents into a queryable AI workspace using retrieval-augmented generation (RAG). It supports local LLMs via Ollama and LM Studio as well as cloud providers, and includes multi-user support, agent tools, and workspace isolation. It is widely used by privacy-focused teams who want ChatGPT-like document chat on their own infrastructure.",
    "pricingText": "Free and open-source for self-hosting; managed cloud option available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Teams and developers who want a self-hosted RAG workspace to chat with internal documents using local or cloud LLMs",
    "notFor": "Non-technical users who are not comfortable with self-hosting or Docker deployments",
    "useCases": [
      "Chatting with private company documents on-premises",
      "Building a local knowledge base with RAG",
      "Multi-user AI workspace without cloud data exposure",
      "Connecting local models to internal file collections"
    ],
    "tags": [
      "self-hosted",
      "rag",
      "document-chat",
      "open-source"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "lm-studio",
    "name": "LM Studio",
    "tagline": "Discover, download, and run local LLMs on your computer",
    "websiteUrl": "https://lmstudio.ai",
    "descriptionMd": "LM Studio is a desktop application for macOS, Windows, and Linux that makes it easy to download, manage, and run local large language models from Hugging Face in GGUF format. It includes a built-in chat interface and a local API server compatible with OpenAI's API format. It is one of the most popular tools for getting started with local LLMs without any command-line experience.",
    "pricingText": "Free to download and use; no subscription required (local compute costs only)",
    "hasFreeTier": true,
    "bestFor": "Users who want a user-friendly GUI to run local LLMs privately on their own hardware with no technical setup",
    "notFor": "Users without sufficient local hardware (RAM/GPU) to run LLMs, or those needing cloud-scale performance",
    "useCases": [
      "Running Llama, Mistral, or Phi models locally",
      "Privacy-sensitive chat without internet",
      "Local OpenAI-compatible API for app development",
      "Exploring and comparing quantized model variants"
    ],
    "tags": [
      "local-llm",
      "desktop-app",
      "offline",
      "gguf"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "cohere-coral",
    "name": "Cohere Coral",
    "tagline": "Enterprise AI assistant grounded in your business data",
    "websiteUrl": "https://cohere.com",
    "descriptionMd": "Cohere Coral is an enterprise AI assistant built on Cohere's Command models, designed to connect to a company's internal knowledge bases and documents via RAG. It emphasizes data privacy, security, and deployment within enterprise environments, including private cloud and on-premises options. Cohere targets large organizations that need customizable, compliant AI assistants rather than consumer chatbots.",
    "pricingText": "Enterprise pricing; Cohere API has a free trial (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Enterprises that need a secure, private AI assistant grounded in proprietary internal knowledge bases",
    "notFor": "Individual users or small teams without enterprise data infrastructure or budget",
    "useCases": [
      "Connecting AI to internal company wikis and documents",
      "Secure customer support automation with proprietary data",
      "Compliance-friendly AI deployment in regulated industries",
      "Private cloud or on-premises AI assistant deployment"
    ],
    "tags": [
      "enterprise",
      "rag",
      "private-deployment",
      "document-grounding"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "lumo-proton",
    "name": "Lumo (Proton)",
    "tagline": "Privacy-first AI assistant from the makers of Proton Mail",
    "websiteUrl": "https://proton.me/lumo",
    "descriptionMd": "Lumo is an AI assistant developed by Proton, the Swiss privacy company known for Proton Mail and Proton VPN. It is built with Proton's focus on privacy, with conversations not used for training and minimal data logging. Lumo integrates with the Proton ecosystem and is aimed at users who already trust Proton's privacy-first philosophy.",
    "pricingText": "Free tier available; paid access tied to Proton plans (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Existing Proton users who want an AI assistant that aligns with strong privacy and Swiss data protection standards",
    "notFor": "Users seeking cutting-edge model performance or extensive third-party integrations outside the Proton ecosystem",
    "useCases": [
      "Private AI chat with no training data usage",
      "AI assistance integrated with Proton Mail or Drive",
      "Privacy-conscious research and drafting",
      "Secure AI for journalists or activists"
    ],
    "tags": [
      "privacy",
      "swiss-hosted",
      "proton-ecosystem",
      "no-data-logging"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hugging-face-chat",
    "name": "Hugging Face Assistants",
    "tagline": "Create and share custom AI assistants on open models",
    "websiteUrl": "https://huggingface.co/chat",
    "descriptionMd": "Hugging Face Chat (HuggingChat) with Assistants allows users to create custom AI assistants built on open-source models like Llama, Mistral, and Phi, with custom system prompts and optionally web search. Users can publish their assistants publicly in a community directory, making it a large marketplace of specialized open-model bots. It is backed by Hugging Face's open-source ML infrastructure.",
    "pricingText": "Free to use; no paid tier required for standard chat and assistant creation",
    "hasFreeTier": true,
    "bestFor": "Developers and enthusiasts who want to build and publish custom assistants using open-source models without hosting costs",
    "notFor": "Users needing guaranteed uptime, persistent memory across sessions, or enterprise SLAs",
    "useCases": [
      "Building custom-persona chatbots on open models",
      "Discovering community-created specialized assistants",
      "Experimenting with different open-source LLMs",
      "Web-search-augmented chat with open models"
    ],
    "tags": [
      "open-source",
      "custom-assistants",
      "community",
      "no-cost"
    ],
    "categorySlug": "ai-assistant",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "bito-ai",
    "name": "Bito",
    "tagline": "AI code review and generation inside your IDE",
    "websiteUrl": "https://bito.ai",
    "descriptionMd": "Bito integrates with VS Code, JetBrains, and the CLI to provide AI-powered code generation, explanation, and automated code review. It leverages large language models to help developers write, understand, and improve code without leaving their editor. Bito also supports team-level AI templates and prompt sharing.",
    "pricingText": "Free tier available; paid plans from ~$15/user/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Teams wanting AI code review and generation tightly integrated into JetBrains or VS Code",
    "notFor": "Developers who prefer a fully autonomous agent that writes entire features end-to-end",
    "useCases": [
      "Automated code review comments",
      "Explain legacy code blocks",
      "Generate unit tests from existing functions",
      "Create boilerplate from natural-language prompts"
    ],
    "tags": [
      "code-review",
      "ide-plugin",
      "unit-testing",
      "team-collaboration"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "refact-ai",
    "name": "Refact.ai",
    "tagline": "Self-hosted or cloud AI coding assistant with fine-tuning",
    "websiteUrl": "https://refact.ai",
    "descriptionMd": "Refact.ai offers an open-source, self-hostable AI coding assistant that supports fine-tuning on your own codebase for higher relevance. It provides autocomplete, chat, and code refactoring inside VS Code and JetBrains IDEs. The self-hosted option makes it attractive for enterprises with strict data-privacy requirements.",
    "pricingText": "Free self-hosted option; cloud plans from ~$10/user/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Privacy-conscious teams or enterprises that want to self-host and fine-tune an AI coding assistant",
    "notFor": "Individual developers who want a zero-setup cloud-only experience",
    "useCases": [
      "Self-hosted AI autocomplete",
      "Fine-tuning on proprietary codebases",
      "Code refactoring suggestions",
      "On-premise enterprise deployment"
    ],
    "tags": [
      "self-hosted",
      "fine-tuning",
      "privacy",
      "ide-plugin"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "greptile",
    "name": "Greptile",
    "tagline": "AI that understands your entire codebase in natural language",
    "websiteUrl": "https://greptile.com",
    "descriptionMd": "Greptile indexes your full GitHub or GitLab repository and exposes an API that lets you query the codebase in natural language. It is designed for teams that want to build internal tools, bots, or automations on top of their own code knowledge. Greptile answers questions like 'where is the payment logic?' with precise file and line references.",
    "pricingText": "Free tier for small repos; paid plans from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Engineering teams building internal chatbots or automations that need deep understanding of their own repositories",
    "notFor": "Developers looking for inline autocomplete or a traditional IDE assistant",
    "useCases": [
      "Codebase Q&A via API",
      "Automated PR description generation",
      "Onboarding new engineers to large repos",
      "Building internal knowledge tools on top of source code"
    ],
    "tags": [
      "codebase-search",
      "api",
      "repo-understanding",
      "developer-tools"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "ellipsis-ai",
    "name": "Ellipsis",
    "tagline": "Automated AI code reviews and bug fixes on pull requests",
    "websiteUrl": "https://ellipsis.dev",
    "descriptionMd": "Ellipsis is a GitHub and GitLab bot that automatically reviews pull requests, identifies bugs, and can open its own PRs to fix issues it detects. It integrates directly into CI/CD workflows so code review feedback appears without any manual trigger. Ellipsis also generates changelogs and summarizes PR diffs for reviewers.",
    "pricingText": "Free tier for open-source; paid plans from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Teams that want fully automated PR review and AI-generated bug-fix patches without switching tools",
    "notFor": "Developers who prefer interactive chat-based review rather than automated bot comments",
    "useCases": [
      "Automated pull-request review",
      "AI-generated bug-fix PRs",
      "Changelog and release note generation",
      "CI/CD integrated code quality checks"
    ],
    "tags": [
      "code-review",
      "github-bot",
      "pull-request",
      "ci-cd"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "blackbox-ai",
    "name": "Blackbox AI",
    "tagline": "AI coding assistant with code search and autocomplete",
    "websiteUrl": "https://blackbox.ai",
    "descriptionMd": "Blackbox AI provides an AI-powered code autocomplete and chat assistant available as a VS Code extension and web interface. It includes a code-search feature that lets developers find real code snippets from public repositories directly inside their editor. Blackbox also offers a terminal command suggestion feature for common CLI tasks.",
    "pricingText": "Free tier available; pro plans from ~$9/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who want a lightweight, free autocomplete and code-search tool without heavy IDE lock-in",
    "notFor": "Teams needing enterprise-grade security, audit logs, or deep repository indexing",
    "useCases": [
      "AI autocomplete in VS Code",
      "Natural-language code search across public repos",
      "Terminal command suggestions",
      "Quick code explanation and chat"
    ],
    "tags": [
      "autocomplete",
      "code-search",
      "vs-code",
      "free-tier"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "codegeex",
    "name": "CodeGeeX",
    "tagline": "Multilingual open-source AI coding assistant",
    "websiteUrl": "https://codegeex.cn",
    "descriptionMd": "CodeGeeX is an open-source multilingual code generation model developed by Zhipu AI in collaboration with Tsinghua University. It supports over 20 programming languages and offers a free VS Code and JetBrains plugin with autocomplete and code translation features. The underlying model weights are publicly available for research and self-hosting.",
    "pricingText": "Free plugin; open-source model available (verify commercial licensing on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who want a free, open-source alternative to Copilot with strong multilingual support",
    "notFor": "Teams requiring enterprise SLA, dedicated support, or advanced security compliance",
    "useCases": [
      "Code autocomplete across 20+ languages",
      "Code translation between programming languages",
      "Self-hosted open-source model deployment",
      "Research into code LLMs"
    ],
    "tags": [
      "open-source",
      "multilingual",
      "autocomplete",
      "self-hosted"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "askcodi",
    "name": "AskCodi",
    "tagline": "AI coding assistant for code generation, tests, and docs",
    "websiteUrl": "https://askcodi.com",
    "descriptionMd": "AskCodi provides AI-powered code generation, unit test creation, and documentation writing through IDE plugins for VS Code, JetBrains, and others. It is built on top of large language models and focuses on workflow-specific apps rather than a single chat interface. AskCodi also offers a workbook-style web interface for experimentation.",
    "pricingText": "Free tier available; paid plans from ~$9/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Individual developers who want modular AI tools for code, tests, and docs without a monolithic subscription",
    "notFor": "Large teams needing enterprise administration, SSO, or audit controls",
    "useCases": [
      "Generate code from natural-language prompts",
      "Auto-generate unit tests",
      "Produce inline code documentation",
      "Explain code in plain English"
    ],
    "tags": [
      "code-generation",
      "unit-testing",
      "documentation",
      "ide-plugin"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "warp-ai",
    "name": "Warp",
    "tagline": "AI-powered terminal with natural-language commands",
    "websiteUrl": "https://warp.dev",
    "descriptionMd": "Warp is a modern terminal application with built-in AI that lets developers type natural-language requests and receive executable shell commands. It features block-based command history, collaborative notebooks, and an AI agent mode that can autonomously run multi-step terminal workflows. Warp is available for macOS and Linux with a Windows version available.",
    "pricingText": "Free tier available; paid plans from ~$15/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who spend significant time in the terminal and want AI assistance for shell commands and DevOps tasks",
    "notFor": "Teams primarily looking for in-editor code completion or code review rather than terminal productivity",
    "useCases": [
      "Natural-language to shell command translation",
      "AI-assisted debugging of CLI errors",
      "Collaborative terminal notebooks for DevOps",
      "Autonomous multi-step terminal agent workflows"
    ],
    "tags": [
      "terminal",
      "cli",
      "devops",
      "natural-language"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "cline",
    "name": "Cline",
    "tagline": "Open-source autonomous AI coding agent in VS Code",
    "websiteUrl": "https://cline.bot",
    "descriptionMd": "Cline is an open-source VS Code extension that acts as an autonomous AI coding agent, capable of reading and writing files, running terminal commands, and browsing the web to complete multi-step coding tasks. It supports multiple underlying LLMs including Claude, GPT-4, and local models via OpenRouter. Cline operates with explicit user approval for each action, keeping the developer in control.",
    "pricingText": "Free and open-source; you pay only for the underlying LLM API tokens you consume",
    "hasFreeTier": true,
    "bestFor": "Developers who want a transparent, open-source autonomous coding agent inside VS Code with full control over which LLM they use",
    "notFor": "Non-technical users or those who want a polished SaaS product with support rather than a community-driven open-source tool",
    "useCases": [
      "Autonomous multi-step feature implementation",
      "File system read/write operations via AI",
      "Running and debugging terminal commands via AI",
      "Connecting any OpenRouter-supported LLM to an agent workflow"
    ],
    "tags": [
      "open-source",
      "autonomous-agent",
      "vs-code",
      "multi-llm"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "roo-code",
    "name": "Roo Code",
    "tagline": "AI coding agent with multi-mode and multi-model support",
    "websiteUrl": "https://roocode.com",
    "descriptionMd": "Roo Code (formerly Roo Cline) is an open-source VS Code extension forked from Cline that adds specialized AI modes such as Architect, Code, Ask, and Debug, each optimized for different tasks. It supports switching between multiple LLMs mid-task and features an orchestration system for breaking large tasks into sub-agents. Roo Code is popular in the open-source AI coding community for its flexibility.",
    "pricingText": "Free and open-source; costs depend on LLM API usage",
    "hasFreeTier": true,
    "bestFor": "Power users who want a flexible, open-source agent with specialized modes and multi-model support for complex coding workflows",
    "notFor": "Teams needing a managed SaaS solution with enterprise support, compliance, or centralized billing",
    "useCases": [
      "Architect mode for high-level system design",
      "Debug mode for iterative error diagnosis",
      "Multi-model task orchestration with sub-agents",
      "Open-source self-hosted AI agent customization"
    ],
    "tags": [
      "open-source",
      "autonomous-agent",
      "multi-model",
      "vs-code"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "trae-ai",
    "name": "Trae",
    "tagline": "AI-native IDE with Builder and Chat agent modes",
    "websiteUrl": "https://trae.ai",
    "descriptionMd": "Trae is an AI-native IDE developed by ByteDance that offers both a Chat assistant and a Builder agent mode capable of planning and executing multi-file coding tasks autonomously. It is built on a VS Code-compatible base and supports popular extensions, making migration straightforward. Trae launched with a free tier.",
    "pricingText": "Free tier available; paid plans introduced as product matures (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers curious about an alternative AI IDE who want a Cursor-like experience at low cost",
    "notFor": "Enterprises with strict data-residency requirements outside the vendor's infrastructure",
    "useCases": [
      "Autonomous multi-file feature building via Builder mode",
      "AI chat assistance within a full IDE",
      "VS Code extension compatibility for easy migration",
      "Rapid prototyping with AI-driven scaffolding"
    ],
    "tags": [
      "ide",
      "autonomous-agent",
      "vs-code-based",
      "free-tier"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "tabby-ml",
    "name": "Tabby",
    "tagline": "Self-hosted open-source AI coding assistant",
    "websiteUrl": "https://www.tabbyml.com",
    "descriptionMd": "Tabby is a fully open-source, self-hosted AI coding assistant that runs entirely on your own infrastructure, supporting both GPU and CPU inference. It provides code autocomplete via VS Code and JetBrains plugins and can be fine-tuned on private codebases for improved suggestions. Tabby is a popular choice for organizations that cannot send source code to external APIs.",
    "pricingText": "Free and open-source; enterprise support plans available (verify pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Security-focused teams and enterprises that must keep all code on-premises and want full control over the AI model",
    "notFor": "Individual developers who prefer a zero-maintenance cloud service over managing their own server infrastructure",
    "useCases": [
      "On-premise self-hosted code autocomplete",
      "Air-gapped environment AI coding support",
      "Fine-tuning on internal codebases",
      "Open-source model experimentation and research"
    ],
    "tags": [
      "self-hosted",
      "open-source",
      "privacy",
      "on-premise"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "codestral",
    "name": "Codestral",
    "tagline": "Mistral's dedicated code generation model and API",
    "websiteUrl": "https://mistral.ai/news/codestral",
    "descriptionMd": "Codestral is Mistral AI's specialized code-generation model, trained on over 80 programming languages with a large context window. It is accessible via the Mistral API and is integrated into tools like Continue and LangChain for developers who want a high-performance coding model with European data residency. Codestral is available for both API access and local deployment via Ollama and similar runtimes.",
    "pricingText": "API pricing per token; free/beta access has been offered (verify current rates on Mistral site)",
    "hasFreeTier": true,
    "bestFor": "Developers who want a strong open-weight coding model with European data residency or local deployment flexibility",
    "notFor": "Non-technical users looking for a ready-made IDE plugin rather than a raw model API",
    "useCases": [
      "High-performance code generation via API",
      "Local deployment with Ollama for offline use",
      "Integration into LangChain or LlamaIndex pipelines",
      "Fill-in-the-middle autocomplete for 80+ languages"
    ],
    "tags": [
      "api",
      "open-weight",
      "mistral",
      "multilingual"
    ],
    "categorySlug": "ai-coding",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "vizly",
    "name": "Vizly",
    "tagline": "Chat with your data to generate instant visualizations",
    "websiteUrl": "https://vizly.fyi",
    "descriptionMd": "Vizly lets users upload CSV or connect data sources and ask natural-language questions to produce charts and summaries automatically. It is designed for non-technical analysts who want quick visual answers without writing SQL or Python. The tool generates shareable dashboards from conversation history.",
    "pricingText": "Free tier available; paid plans from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Non-technical users who want drag-and-drop data exploration with AI-generated charts",
    "notFor": "Teams needing live database connections or enterprise-grade data governance",
    "useCases": [
      "Upload CSV and ask questions in plain English",
      "Auto-generate bar, line, and scatter charts",
      "Share interactive dashboards via link",
      "Summarize dataset trends without coding"
    ],
    "tags": [
      "data-visualization",
      "natural-language",
      "csv",
      "no-code"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "defog-ai",
    "name": "Defog.ai",
    "tagline": "Natural language to SQL for your own database",
    "websiteUrl": "https://defog.ai",
    "descriptionMd": "Defog.ai converts plain-English questions into accurate SQL queries against a user's own database schema, supporting PostgreSQL, MySQL, Snowflake, and BigQuery. It learns from schema metadata and query feedback to improve accuracy over time. An API-first design lets engineering teams embed the capability into internal tools.",
    "pricingText": "Free tier for limited queries; paid API plans based on usage (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Engineering and data teams embedding text-to-SQL into internal analytics products",
    "notFor": "Business users who need a fully hosted BI dashboard without any technical setup",
    "useCases": [
      "Convert natural language to production-ready SQL",
      "Self-host models on private infrastructure",
      "Integrate via REST API into existing tools",
      "Train on proprietary schema for domain accuracy"
    ],
    "tags": [
      "text-to-sql",
      "api",
      "database",
      "self-host"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "seek-ai",
    "name": "Seek AI",
    "tagline": "Ask your data warehouse questions in plain English",
    "websiteUrl": "https://www.seek.ai",
    "descriptionMd": "Seek AI connects to data warehouses such as Snowflake and Redshift and translates business questions into SQL, returning answers with explanations. It is aimed at business users who need data answers without waiting for analyst queues. The platform includes semantic layer support so answers respect business definitions and metrics.",
    "pricingText": "Pricing available on request; enterprise-focused with demo-first sales model",
    "hasFreeTier": false,
    "bestFor": "Business stakeholders at mid-to-large companies who need self-service answers from a data warehouse",
    "notFor": "Small teams or individuals without an existing cloud data warehouse",
    "useCases": [
      "Self-service querying of Snowflake or Redshift",
      "Reduce analyst bottlenecks for recurring data requests",
      "Apply semantic layer to ensure metric consistency",
      "Explain SQL results in plain English"
    ],
    "tags": [
      "text-to-sql",
      "data-warehouse",
      "self-service",
      "enterprise"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "zenlytic",
    "name": "Zenlytic",
    "tagline": "AI business intelligence with a conversational interface",
    "websiteUrl": "https://www.zenlytic.com",
    "descriptionMd": "Zenlytic is an AI-powered BI platform built on a semantic layer that allows analysts and executives to ask data questions conversationally and receive consistent, governed answers. It integrates with dbt models to use existing metric definitions rather than generating raw SQL from scratch. The tool emphasizes accuracy through semantic grounding rather than pure LLM generation.",
    "pricingText": "Pricing on request; targets mid-market and enterprise customers",
    "hasFreeTier": false,
    "bestFor": "Data teams using dbt who want to expose governed metrics to business users via chat",
    "notFor": "Teams without a semantic layer or dbt setup who need quick out-of-the-box analytics",
    "useCases": [
      "Chat-based querying grounded in dbt semantic layer",
      "Expose consistent KPIs to non-technical stakeholders",
      "Drill into anomalies via conversational follow-ups",
      "Maintain metric governance across the organization"
    ],
    "tags": [
      "bi",
      "semantic-layer",
      "dbt",
      "conversational"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "polymer-search",
    "name": "Polymer Search",
    "tagline": "Turn spreadsheets into searchable, visual apps instantly",
    "websiteUrl": "https://www.polymersearch.com",
    "descriptionMd": "Polymer Search transforms uploaded CSV or Excel files into interactive data applications with filters, charts, and search without any coding. It automatically detects column types and suggests relevant visualizations. The resulting app can be embedded or shared publicly with teammates or clients.",
    "pricingText": "Free plan available; paid plans from ~$10/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Marketers and operations teams who want a shareable data app from a spreadsheet in minutes",
    "notFor": "Data engineers needing live warehouse connections or complex multi-table joins",
    "useCases": [
      "Convert CSV exports into filterable data apps",
      "Share dynamic dashboards with external stakeholders",
      "Embed interactive tables into websites or wikis",
      "Explore marketing or sales data without SQL"
    ],
    "tags": [
      "spreadsheet",
      "no-code",
      "data-app",
      "visualization"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "datachat",
    "name": "DataChat",
    "tagline": "Collaborative AI analytics with an auditable trail",
    "websiteUrl": "https://datachat.ai",
    "descriptionMd": "DataChat is a no-code analytics platform where users converse with their data in natural language and every step is recorded as a reproducible, auditable session. It supports statistical analysis, machine learning model building, and visualization from the same chat interface. Sessions can be shared and replayed by team members for collaborative analysis.",
    "pricingText": "Free trial available; team and enterprise plans priced on request",
    "hasFreeTier": true,
    "bestFor": "Analysts and data scientists who need reproducible, explainable AI-assisted analysis with an audit trail",
    "notFor": "Users who only need quick one-off chart generation without reproducibility requirements",
    "useCases": [
      "Conduct statistical analysis through natural language",
      "Build and evaluate ML models without Python",
      "Share reproducible analysis sessions with teammates",
      "Generate charts and summaries with step-by-step logs"
    ],
    "tags": [
      "statistical-analysis",
      "machine-learning",
      "reproducibility",
      "collaboration"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "einblick",
    "name": "Einblick",
    "tagline": "AI data canvas for rapid exploratory analysis",
    "websiteUrl": "https://www.einblick.ai",
    "descriptionMd": "Einblick provides a visual canvas where data teams can combine SQL, Python, and AI prompts in a spatial notebook to explore and present data. An AI assistant suggests next analysis steps, writes code, and generates charts based on context. The canvas format enables non-linear storytelling compared to traditional linear notebooks.",
    "pricingText": "Free plan available; paid plans for teams from ~$50/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Data scientists and analysts who want a flexible canvas mixing code, SQL, and AI assistance",
    "notFor": "Pure business users who need no-code dashboards without any code exposure",
    "useCases": [
      "Combine SQL and Python cells on a visual canvas",
      "Use AI to suggest and generate analysis steps",
      "Build presentation-ready data stories from analysis",
      "Collaborate on exploratory analysis in shared canvases"
    ],
    "tags": [
      "canvas",
      "exploratory-analysis",
      "python",
      "sql"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "mode-analytics",
    "name": "Mode",
    "tagline": "Collaborative SQL editor with AI-assisted analysis",
    "websiteUrl": "https://mode.com",
    "descriptionMd": "Mode is a data analytics platform combining a SQL editor, Python notebooks, and drag-and-drop charting into a single collaborative workspace for analysts. Its AI features help write and explain SQL, suggest visualizations, and summarize query results. Reports and dashboards built in Mode can be distributed across organizations with scheduled refreshes.",
    "pricingText": "Free plan for individuals; team plans from ~$49/seat/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "SQL-fluent analysts who want an integrated workspace for querying, visualizing, and sharing reports",
    "notFor": "Non-technical business users who need a no-code self-service tool without SQL exposure",
    "useCases": [
      "Write and debug SQL with AI auto-complete",
      "Build dashboards combining SQL and Python outputs",
      "Schedule automated report delivery to stakeholders",
      "Collaborate on analysis with in-line comments"
    ],
    "tags": [
      "sql",
      "notebooks",
      "dashboards",
      "collaboration"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "quadratic",
    "name": "Quadratic",
    "tagline": "Infinite spreadsheet with Python, SQL, and AI built in",
    "websiteUrl": "https://www.quadratichq.com",
    "descriptionMd": "Quadratic is a spreadsheet application that runs Python and SQL natively inside cells, letting users mix formula logic with full scripting and database queries on an infinite canvas. An AI assistant can generate Python or SQL code from natural-language prompts directly within the sheet. It bridges the gap between spreadsheet simplicity and the power of a data science notebook.",
    "pricingText": "Free plan available; paid plans for teams (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Analysts who live in spreadsheets but need Python or SQL power without switching tools",
    "notFor": "Enterprise BI teams needing governed semantic layers, role-based access, or executive dashboards",
    "useCases": [
      "Write Python scripts inside spreadsheet cells",
      "Query databases with SQL and render results in-sheet",
      "Use AI to generate formulas and code from plain English",
      "Build financial models with live data connections"
    ],
    "tags": [
      "spreadsheet",
      "python",
      "sql",
      "infinite-canvas"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "gigasheet",
    "name": "Gigasheet",
    "tagline": "Browser spreadsheet handling billions of rows with AI",
    "websiteUrl": "https://www.gigasheet.com",
    "descriptionMd": "Gigasheet is a cloud spreadsheet designed to open and analyze files with millions or billions of rows that would crash Excel or Google Sheets, with no database setup required. It includes AI-powered column enrichment, natural-language filtering, and automated data cleaning. Security and log analysis teams use it to process large event files directly in a browser.",
    "pricingText": "Free tier for files up to a certain size; paid plans from ~$25/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Security analysts and data ops teams who need to slice massive CSV or log files without engineering help",
    "notFor": "Users working with small, tidy datasets who do not need large-file handling",
    "useCases": [
      "Open multi-gigabyte CSV files in a browser instantly",
      "Filter and pivot billions of rows without SQL",
      "Enrich columns with AI-generated classifications",
      "Analyze security logs and threat intelligence feeds"
    ],
    "tags": [
      "large-files",
      "security",
      "spreadsheet",
      "data-cleaning"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "paperpal",
    "name": "Paperpal",
    "tagline": "AI writing assistant built for academic research papers",
    "websiteUrl": "https://paperpal.com",
    "descriptionMd": "Paperpal is an AI writing and editing tool specifically trained on academic and scientific language to help researchers improve manuscript quality, check grammar, and suggest field-appropriate phrasing. It integrates with Microsoft Word and offers a web editor, and can identify language issues common in non-native English academic writing. It also assists with literature search and citation formatting.",
    "pricingText": "Free tier with limited checks; Prime plan from ~$19/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Academic researchers and graduate students preparing manuscripts for journal submission",
    "notFor": "General business writers or marketers who do not need academic-style language optimization",
    "useCases": [
      "Polish academic manuscript language before journal submission",
      "Check for field-specific grammar and phrasing errors",
      "Search relevant literature from within the editor",
      "Rewrite sentences to meet academic tone requirements"
    ],
    "tags": [
      "academic-writing",
      "research",
      "grammar",
      "manuscript"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "scholarcy",
    "name": "Scholarcy",
    "tagline": "Summarize and extract key facts from research papers",
    "websiteUrl": "https://www.scholarcy.com",
    "descriptionMd": "Scholarcy automatically reads academic papers, reports, and book chapters and produces structured summary flashcards highlighting key contributions, methods, findings, and references. It can extract tables, figures, and citations into reusable formats and integrates with reference managers like Zotero. Researchers use it to rapidly triage large reading lists.",
    "pricingText": "Free browser extension; personal and library plans from ~$9.99/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Researchers and students who need to rapidly screen and summarize large volumes of academic literature",
    "notFor": "Users who need deep interactive Q&A with documents rather than structured summary extraction",
    "useCases": [
      "Generate structured flashcard summaries from PDFs",
      "Extract key findings and methodology from papers",
      "Triage reading lists by importance before full reading",
      "Export summaries and citations to reference managers"
    ],
    "tags": [
      "summarization",
      "academic",
      "literature-review",
      "pdf"
    ],
    "categorySlug": "ai-data",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "galileo-ai",
    "name": "Galileo AI",
    "tagline": "Generate polished UI designs from text prompts",
    "websiteUrl": "https://www.usegalileo.ai",
    "descriptionMd": "Galileo AI lets designers and product teams generate high-fidelity UI screens from natural language descriptions. It produces editable Figma-ready designs rather than static mockups, targeting early-stage ideation. The tool is particularly focused on mobile and web app UI generation.",
    "pricingText": "Early-access model; paid plans from ~$19–$39/mo (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Product designers who want to rapidly prototype UI screens from a text brief before refining in Figma",
    "notFor": "Teams needing production-ready code output or full design systems",
    "useCases": [
      "Generate app screens from a one-line description",
      "Explore multiple UI layout options quickly",
      "Jumpstart Figma files without starting from scratch",
      "Validate concept directions before detailed design"
    ],
    "tags": [
      "ui-generation",
      "figma",
      "prototyping",
      "text-to-ui"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "namelix",
    "name": "Namelix",
    "tagline": "AI business name generator with instant logo previews",
    "websiteUrl": "https://namelix.com",
    "descriptionMd": "Namelix uses AI to generate short, brandable business names based on keywords and style preferences. Each suggestion is paired with a logo preview so founders can evaluate name and visual identity together. It filters for domain availability, making it practical for early-stage brand discovery.",
    "pricingText": "Free to use; premium features or saved collections may require an account (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Early-stage founders who need a brandable business name with domain availability checked upfront",
    "notFor": "Established brands seeking a full rebrand strategy or complex identity system",
    "useCases": [
      "Brainstorm startup name options in seconds",
      "Check domain availability alongside name ideas",
      "Preview rough logo concepts per name",
      "Shortlist brand names by style or industry"
    ],
    "tags": [
      "naming",
      "branding",
      "logo-preview",
      "startup"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "tailor-brands",
    "name": "Tailor Brands",
    "tagline": "End-to-end AI branding from logo to business formation",
    "websiteUrl": "https://www.tailorbrands.com",
    "descriptionMd": "Tailor Brands is an all-in-one platform that uses AI to generate logos, brand kits, and business collateral, and also offers LLC formation and business registration services in the US. After answering style questions, users receive logo variations and a branded asset library. It targets small business owners who want a complete brand without hiring a designer.",
    "pricingText": "Plans from ~$3.99–$12.99/mo (introductory, rising on renewal); verify current pricing on site",
    "hasFreeTier": false,
    "bestFor": "Small business owners who want a logo, brand kit, and business formation handled in one place",
    "notFor": "Design-savvy teams who need fine-grained creative control or custom typography",
    "useCases": [
      "Create a logo and brand kit for a new small business",
      "Generate branded social media templates",
      "Register an LLC alongside brand setup",
      "Produce business card and collateral designs"
    ],
    "tags": [
      "logo",
      "brand-kit",
      "small-business",
      "all-in-one"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "designhill-ai",
    "name": "Designhill AI Logo Maker",
    "tagline": "AI logo generator backed by a freelance design marketplace",
    "websiteUrl": "https://www.designhill.com/tools/logo-maker",
    "descriptionMd": "Designhill's AI Logo Maker generates logo options from brief inputs about business name, industry, and style preference. Unlike pure-AI tools, it sits within a broader marketplace where users can also hire human designers if they want to iterate beyond the AI output. Generated logos come with basic brand kit files upon purchase.",
    "pricingText": "Free to generate previews; logo file packages from ~$20–$65 one-time (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Small businesses that want AI speed but the option to escalate to a human designer on the same platform",
    "notFor": "Teams needing advanced brand strategy or highly differentiated custom design",
    "useCases": [
      "Generate a logo in minutes for a new business",
      "Download print-ready vector files after purchase",
      "Transition to a human designer for deeper customization",
      "Create matching business card and social kit assets"
    ],
    "tags": [
      "logo",
      "brand-kit",
      "marketplace",
      "small-business"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hatchful-shopify",
    "name": "Hatchful by Shopify",
    "tagline": "Free AI logo maker from Shopify for e-commerce brands",
    "websiteUrl": "https://www.shopify.com/tools/logo-maker",
    "descriptionMd": "Hatchful is Shopify's free logo generation tool that guides users through industry, style, and color choices to produce logo variations. It is optimized for e-commerce and direct-to-consumer brands, and the output files are sized for social media, websites, and print. No design experience is required.",
    "pricingText": "Free",
    "hasFreeTier": true,
    "bestFor": "E-commerce founders launching a Shopify store who need a free, instant logo",
    "notFor": "Brands that need distinctive, highly custom logos or complex identity systems",
    "useCases": [
      "Create a logo before launching an online store",
      "Download pre-sized assets for social profiles",
      "Quickly brand a side-project or DTC product",
      "Iterate on color and style options without design software"
    ],
    "tags": [
      "logo",
      "e-commerce",
      "shopify",
      "free"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "simplified-design",
    "name": "Simplified",
    "tagline": "All-in-one AI design, copy, and social content platform",
    "websiteUrl": "https://simplified.com",
    "descriptionMd": "Simplified combines AI image generation, graphic design templates, AI copywriting, and video editing in one browser-based tool. It is positioned as a Canva alternative with deeper AI integration for teams that produce high volumes of social media and marketing content. The collaboration features allow multiple team members to work on brand assets simultaneously.",
    "pricingText": "Free tier available; paid plans from ~$9–$18/mo per user (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Marketing teams and content creators who need to produce designed social posts, ads, and copy in one workflow",
    "notFor": "UX/product designers needing precise wireframing or developer handoff tools",
    "useCases": [
      "Design and schedule social media content in one place",
      "Generate AI copy and matching visuals together",
      "Collaborate on branded templates with a team",
      "Produce short video clips with AI-assisted editing"
    ],
    "tags": [
      "social-media",
      "ai-copy",
      "templates",
      "collaboration"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "vistacreate",
    "name": "VistaCreate",
    "tagline": "Graphic design platform with AI tools and 150k+ templates",
    "websiteUrl": "https://create.vista.com",
    "descriptionMd": "VistaCreate (formerly Crello) is an online graphic design tool from Vistaprint with a large template library and AI-powered background removal, image generation, and animation features. It targets marketers and small businesses that need professional-looking visuals without deep design skills. The Vistaprint integration allows users to order physical print products directly from their designs.",
    "pricingText": "Free tier available; Pro plan from ~$10/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Small business marketers who want to go from digital design to printed materials on a single platform",
    "notFor": "Teams needing advanced AI design generation or developer-handoff features",
    "useCases": [
      "Create social media graphics from templates",
      "Remove image backgrounds automatically",
      "Animate static designs into short videos",
      "Order printed flyers or business cards from the same design"
    ],
    "tags": [
      "templates",
      "print",
      "social-media",
      "animation"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "motiff",
    "name": "Motiff",
    "tagline": "AI-native UI design tool built as a Figma alternative",
    "websiteUrl": "https://motiff.com",
    "descriptionMd": "Motiff is a collaborative UI design tool that integrates AI features such as component generation, auto-layout suggestions, and design critique directly into the canvas — positioning itself as an AI-first alternative to Figma. It supports real-time multiplayer editing and developer handoff. The tool is aimed at product design teams wanting AI assistance embedded in their core design workflow.",
    "pricingText": "Free tier available; paid team plans from ~$12–$15/mo per editor (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Product design teams that want AI-assisted UI design with real-time collaboration and developer handoff",
    "notFor": "Freelancers or teams deeply invested in the Figma plugin ecosystem who rely on third-party integrations",
    "useCases": [
      "Design UI screens with AI component suggestions",
      "Collaborate with teammates in real time on designs",
      "Generate and iterate on UI layouts from prompts",
      "Hand off specs and assets to developers"
    ],
    "tags": [
      "ui-design",
      "figma-alternative",
      "collaboration",
      "ai-native"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "creatie",
    "name": "Creatie",
    "tagline": "AI UI design tool that generates editable screens",
    "websiteUrl": "https://creatie.ai",
    "descriptionMd": "Creatie is an AI-powered design tool focused on generating editable UI screens and components from text or image prompts. It targets product teams doing early-stage ideation, providing designs that can be refined within the tool rather than just exported as flat images. It also includes auto-layout and responsive design features.",
    "pricingText": "Free tier available; paid plans (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Product designers and founders who want to go from idea to editable UI screens in minutes",
    "notFor": "Teams needing mature plugin ecosystems or enterprise-grade design system management",
    "useCases": [
      "Generate app screen drafts from a text description",
      "Edit and refine AI-generated components on canvas",
      "Rapidly prototype multiple design directions",
      "Export assets for developer handoff"
    ],
    "tags": [
      "ui-generation",
      "text-to-ui",
      "prototyping",
      "product-design"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "logoai",
    "name": "LogoAI",
    "tagline": "AI logo maker with automated brand kit and assets",
    "websiteUrl": "https://www.logoai.com",
    "descriptionMd": "LogoAI generates professional logos using machine learning and provides a full brand kit including business cards, letterheads, social media covers, and brand guidelines after purchase. The platform learns from user feedback during the generation flow to refine results. It targets startups and small businesses wanting a comprehensive brand package from a single tool.",
    "pricingText": "Free to preview logos; brand kit packages from ~$29–$99 one-time (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Startups that want a logo plus a ready-to-use brand kit with matching collateral in one purchase",
    "notFor": "Large enterprises needing brand strategy consulting or bespoke creative direction",
    "useCases": [
      "Generate and compare logo options by style and color",
      "Download a full brand kit with guidelines",
      "Create branded social media profile and cover images",
      "Produce print-ready business card templates"
    ],
    "tags": [
      "logo",
      "brand-kit",
      "startup",
      "collateral"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "stylized-ai",
    "name": "Stylized",
    "tagline": "AI product photography without a photo shoot",
    "websiteUrl": "https://www.stylized.ai",
    "descriptionMd": "Stylized uses AI to place product photos into professional lifestyle or studio backgrounds, eliminating the need for expensive photo shoots. Users upload a product image and the AI composites it into a chosen scene with realistic lighting and shadows. It is targeted at e-commerce brands and Shopify sellers who need high-volume product imagery.",
    "pricingText": "Free trial with limited credits; paid plans from ~$19–$49/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "E-commerce brands that need to produce multiple product lifestyle images without booking physical photo shoots",
    "notFor": "Studios or photographers needing fine-grained control over lighting or custom scene composition",
    "useCases": [
      "Generate lifestyle backgrounds for product catalog images",
      "Create seasonal or themed product shots quickly",
      "Produce consistent product imagery at scale",
      "Test different scene styles for A/B ad creative"
    ],
    "tags": [
      "product-photography",
      "e-commerce",
      "background-generation",
      "visual-content"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "uxpilot",
    "name": "UXPilot",
    "tagline": "AI UX design assistant for wireframes and UI screens",
    "websiteUrl": "https://uxpilot.ai",
    "descriptionMd": "UXPilot is an AI tool that generates wireframes and UI screen designs from text prompts, targeting UX designers and product managers in the early phases of product design. It can produce both low-fidelity wireframes and higher-fidelity UI mockups, and allows iterative refinement through follow-up prompts. It is designed to speed up the discovery and ideation phases before a team moves into a full design tool.",
    "pricingText": "Free tier available; paid plans (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "UX designers and product managers who need rapid wireframes and UI mockups during discovery and ideation",
    "notFor": "Teams needing production-ready code generation or fully collaborative multi-editor design environments",
    "useCases": [
      "Generate wireframes from a user story or brief",
      "Rapidly explore multiple UX layout concepts",
      "Produce UI screen mockups for stakeholder review",
      "Iterate on designs through conversational follow-up prompts"
    ],
    "tags": [
      "wireframing",
      "ux-design",
      "mockups",
      "ideation"
    ],
    "categorySlug": "ai-design",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "fotor-ai",
    "name": "Fotor AI",
    "tagline": "AI photo editing and image generation in one platform",
    "websiteUrl": "https://www.fotor.com",
    "descriptionMd": "Fotor is a long-standing online photo editor that added AI image generation capabilities, allowing users to create images from text prompts alongside traditional editing tools. It targets casual users and social media creators who want an all-in-one design and generation workflow. The platform offers templates, background removal, and AI art generation in a browser-based interface.",
    "pricingText": "Free tier with limited credits; paid plans roughly $8–$20/mo (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Casual creators who want AI image generation bundled with photo editing tools in one place",
    "notFor": "Professional artists needing fine-grained prompt control or high-resolution commercial outputs",
    "useCases": [
      "Social media graphics",
      "Blog post illustrations",
      "Quick photo touchups with AI",
      "Marketing banner creation"
    ],
    "tags": [
      "photo-editing",
      "text-to-image",
      "browser-based",
      "templates"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "deepai-image",
    "name": "DeepAI",
    "tagline": "Simple API-first AI image generation for developers",
    "websiteUrl": "https://deepai.org",
    "descriptionMd": "DeepAI offers a straightforward text-to-image API and web interface that has been available since the early days of AI image generation. It is known for being developer-friendly with a simple REST API and low barrier to entry. The output quality is more basic compared to newer diffusion-based tools, but the simplicity and API access make it useful for prototyping.",
    "pricingText": "Free tier with rate limits; pay-as-you-go API pricing typically fractions of a cent per image (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who need a quick, no-frills API to prototype AI image features without setup overhead",
    "notFor": "Users expecting photorealistic or highly detailed artistic outputs comparable to modern diffusion models",
    "useCases": [
      "API prototyping",
      "Automated content pipelines",
      "Simple placeholder image generation",
      "Educational AI demos"
    ],
    "tags": [
      "api-first",
      "developer-tools",
      "text-to-image",
      "simple"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "starryai",
    "name": "StarryAI",
    "tagline": "Mobile-first AI art generator with full image ownership",
    "websiteUrl": "https://starryai.com",
    "descriptionMd": "StarryAI is a mobile app (iOS and Android) focused on AI art generation, giving users full ownership of the images they create. It offers multiple generation models and styles, and was among the earlier apps to emphasize creator ownership explicitly in its terms. The app uses a credit system that refreshes daily on the free tier.",
    "pricingText": "Free tier with daily credit refresh; paid plans roughly $10–$30/mo for more credits (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Mobile users who want to create and own AI art without needing a desktop or technical setup",
    "notFor": "High-volume commercial production or users needing advanced inpainting and fine-tuning controls",
    "useCases": [
      "Personal AI art creation on mobile",
      "NFT artwork generation",
      "Social media content",
      "Hobbyist digital art exploration"
    ],
    "tags": [
      "mobile-app",
      "text-to-image",
      "creator-ownership",
      "art-styles"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "dream-by-wombo",
    "name": "Dream by WOMBO",
    "tagline": "Fun, style-driven AI art app for everyone",
    "websiteUrl": "https://dream.ai",
    "descriptionMd": "Dream by WOMBO is a consumer-focused AI art application available on web and mobile that emphasizes artistic style presets and ease of use. It gained popularity as one of the first widely accessible AI art generators for non-technical users. Users can generate images by entering prompts and choosing from a range of artistic styles.",
    "pricingText": "Free tier available; premium subscription roughly $10/mo for higher quality and no watermarks (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Non-technical users and hobbyists who want quick stylized AI art without learning complex prompt engineering",
    "notFor": "Professional workflows requiring precise control, high resolution, or commercial licensing clarity",
    "useCases": [
      "Stylized personal art",
      "Fun social sharing",
      "Wallpaper creation",
      "Casual creative exploration"
    ],
    "tags": [
      "mobile-app",
      "style-presets",
      "beginner-friendly",
      "consumer"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "seaart-ai",
    "name": "SeaArt AI",
    "tagline": "Community Stable Diffusion platform with advanced models",
    "websiteUrl": "https://www.seaart.ai",
    "descriptionMd": "SeaArt AI is a web-based platform built around Stable Diffusion that allows users to run community models, LoRAs, and custom checkpoints without local GPU hardware. It functions similarly to Civitai in terms of model sharing but also provides an integrated cloud generation environment. The platform targets intermediate to advanced AI art users familiar with diffusion model concepts.",
    "pricingText": "Free tier with daily credits; paid plans available for higher usage (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Stable Diffusion users who want cloud-based generation with community model support and no local GPU required",
    "notFor": "Beginners unfamiliar with concepts like LoRAs, checkpoints, or CFG scale settings",
    "useCases": [
      "Running community Stable Diffusion models online",
      "Anime and illustration generation",
      "Character consistency with LoRAs",
      "Exploring community-shared fine-tunes"
    ],
    "tags": [
      "stable-diffusion",
      "community-models",
      "cloud-gpu",
      "lora-support"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "tensor-art",
    "name": "Tensor.art",
    "tagline": "Free cloud platform for Stable Diffusion models and LoRAs",
    "websiteUrl": "https://tensor.art",
    "descriptionMd": "Tensor.art is a community platform where users can discover, share, and run Stable Diffusion models and LoRAs directly in the browser using cloud GPUs. It is known for its generous free tier and large library of community-uploaded models spanning anime, realistic, and stylized categories. The platform appeals to users who want Civitai-style model discovery with integrated cloud generation.",
    "pricingText": "Generous free daily credits; paid top-ups available for heavy usage (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Stable Diffusion enthusiasts who want free cloud generation with access to a large community model library",
    "notFor": "Users needing guaranteed commercial licensing on outputs or enterprise-level SLA and support",
    "useCases": [
      "Anime character generation",
      "Photorealistic portrait creation",
      "Exploring fine-tuned community models",
      "LoRA-based style transfer"
    ],
    "tags": [
      "stable-diffusion",
      "community-models",
      "free-tier",
      "cloud-gpu"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "pixai-art",
    "name": "PixAI",
    "tagline": "Anime-specialized AI art with character consistency tools",
    "websiteUrl": "https://pixai.art",
    "descriptionMd": "PixAI is a platform specifically optimized for anime and manga-style AI art generation, offering models fine-tuned on anime aesthetics and tools for character consistency. It has a strong community of anime art creators and allows users to run specialized models tailored to this style. The platform includes features like character templates to maintain consistent visual identity across generations.",
    "pricingText": "Free tier with daily credits; paid plans for higher resolution and more generations (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Anime, manga, and visual novel creators who need consistent character art generation at scale",
    "notFor": "Users focused on photorealistic, landscape, or general-purpose image generation outside the anime aesthetic",
    "useCases": [
      "Anime character design",
      "Visual novel artwork",
      "Consistent character sheets",
      "Fan art creation"
    ],
    "tags": [
      "anime",
      "character-consistency",
      "community",
      "manga-style"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "dreamlike-art",
    "name": "Dreamlike.art",
    "tagline": "High-quality AI image generation with upscaling",
    "websiteUrl": "https://dreamlike.art",
    "descriptionMd": "Dreamlike.art is a web-based AI image generation platform offering access to multiple Stable Diffusion-based models including their own fine-tuned variants optimized for photorealistic and artistic outputs. It includes built-in upscaling, inpainting, and image-to-image features. The platform is geared toward users who want quality outputs without managing local installations.",
    "pricingText": "Free tier with limited daily credits; paid plans roughly $5–$15/mo for more tokens (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Creators who want high-quality diffusion outputs with upscaling and inpainting tools in a clean web interface",
    "notFor": "Users needing the absolute latest model architectures or custom LoRA/checkpoint uploads",
    "useCases": [
      "Photorealistic portrait generation",
      "Fantasy and concept art",
      "Image upscaling and enhancement",
      "Inpainting for image editing"
    ],
    "tags": [
      "photorealistic",
      "inpainting",
      "upscaling",
      "web-based"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hotpot-ai",
    "name": "Hotpot AI",
    "tagline": "Suite of AI creative tools for image generation and editing",
    "websiteUrl": "https://hotpot.ai",
    "descriptionMd": "Hotpot AI is a multi-tool platform offering AI image generation alongside utilities like background removal, image upscaling, colorization, and art personalization. It is designed for small businesses and content creators who need a range of AI creative tools under one subscription. The platform emphasizes practical, output-ready results for non-designers.",
    "pricingText": "Free tier with credits; paid plans approximately $10–$20/mo for higher usage (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Small business owners and content creators who need multiple AI image utilities beyond just text-to-image generation",
    "notFor": "Advanced AI artists requiring fine-tuned control over diffusion parameters or custom model training",
    "useCases": [
      "Product image enhancement",
      "Background removal for e-commerce",
      "AI art generation for marketing",
      "Photo colorization and restoration"
    ],
    "tags": [
      "multi-tool",
      "background-removal",
      "upscaling",
      "small-business"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "imagine-art",
    "name": "Imagine.art",
    "tagline": "Fast AI image generation with style controls",
    "websiteUrl": "https://www.imagine.art",
    "descriptionMd": "Imagine.art is an AI image generation platform offering fast generation with a variety of style presets and aspect ratio controls. It targets creators looking for quick, stylized outputs with minimal friction. The platform has both a web and mobile interface and includes community features for discovering and remixing others' creations.",
    "pricingText": "Free tier with limited daily generations; premium roughly $7–$13/mo for higher-quality outputs (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Social media creators and hobbyists who want fast stylized AI art with easy-to-use controls",
    "notFor": "Professional studios needing enterprise licensing, API access, or advanced fine-tuning capabilities",
    "useCases": [
      "Quick concept art sketches",
      "Stylized social media visuals",
      "Community art sharing and remixing",
      "Mobile art generation"
    ],
    "tags": [
      "fast-generation",
      "style-presets",
      "mobile-friendly",
      "community"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "openart-ai",
    "name": "OpenArt",
    "tagline": "AI image platform with extensive model library",
    "websiteUrl": "https://openart.ai",
    "descriptionMd": "OpenArt is a platform combining an AI image search engine, community art discovery, and cloud-based generation supporting multiple models including Stable Diffusion variants and FLUX. It offers workflow-building tools similar to a simplified ComfyUI, plus a prompt book and training capabilities for custom models. The platform targets intermediate creators who want flexibility without local GPU setup.",
    "pricingText": "Free tier with credits; paid plans roughly $8–$24/mo depending on usage tier (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Intermediate creators who want flexible multi-model generation, prompt discovery, and light custom training in the cloud",
    "notFor": "Complete beginners who may be overwhelmed by the range of model and workflow options available",
    "useCases": [
      "Multi-model image generation comparison",
      "Prompt discovery and inspiration",
      "Custom model fine-tuning",
      "Workflow-based image pipelines"
    ],
    "tags": [
      "multi-model",
      "community",
      "custom-training",
      "workflow-tools"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "stockimg-ai",
    "name": "Stockimg AI",
    "tagline": "AI image generator built for stock photos and design assets",
    "websiteUrl": "https://stockimg.ai",
    "descriptionMd": "Stockimg AI is designed specifically for generating stock-style images, logos, posters, book covers, and UI mockups using AI. Unlike general-purpose generators, it organizes its interface around specific asset categories, making it faster to produce commercially usable design assets. It targets marketers, entrepreneurs, and content creators who need ready-to-use visuals without a designer.",
    "pricingText": "Free trial available; paid plans roughly $15–$50/mo based on image volume (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Marketers and entrepreneurs who need commercial-ready stock images, logos, and design assets generated quickly",
    "notFor": "Artists focused on creative exploration or unique artistic styles rather than commercial asset production",
    "useCases": [
      "Stock photo generation for blogs",
      "Logo and brand mark creation",
      "Social media ad visuals",
      "Book cover and poster design"
    ],
    "tags": [
      "stock-photos",
      "logo-generation",
      "commercial-assets",
      "design-templates"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "scenario-gg",
    "name": "Scenario",
    "tagline": "Game-asset AI image generator with style training",
    "websiteUrl": "https://www.scenario.com",
    "descriptionMd": "Scenario is an AI image generation platform built specifically for game developers and game artists, allowing teams to train custom models on their own art style and generate consistent game assets at scale. It supports fine-tuning on proprietary datasets so generated assets match an existing game's visual identity. The platform integrates with game development workflows and targets indie to mid-size game studios.",
    "pricingText": "Free tier with limited generations; paid plans roughly $20–$99/mo for teams and higher volumes (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Game developers and studios who need style-consistent AI-generated assets trained on their own game's art direction",
    "notFor": "General image creation use cases outside game development or users who do not have existing art assets to train on",
    "useCases": [
      "Game character and environment concept art",
      "Consistent asset generation from custom style models",
      "Indie game asset creation",
      "Rapid prototyping of game visuals"
    ],
    "tags": [
      "game-development",
      "custom-training",
      "style-consistency",
      "asset-generation"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "picsart-ai",
    "name": "Picsart AI",
    "tagline": "Consumer creative suite with AI image generation",
    "websiteUrl": "https://picsart.com",
    "descriptionMd": "Picsart is a widely-used consumer creative platform that has integrated AI image generation alongside its traditional photo editing, collage, and design tools. It has a large existing user base particularly among mobile users and social media content creators. The AI generation features are embedded within the broader Picsart editor, making them accessible to the platform's existing audience without switching tools.",
    "pricingText": "Free tier available; Picsart Gold roughly $5–$13/mo for premium features including AI generation (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Social media creators already in the Picsart ecosystem who want AI generation alongside editing, stickers, and templates",
    "notFor": "Power users who need advanced prompt control, model selection, or outputs beyond social-media-ready resolutions",
    "useCases": [
      "Social media post creation",
      "AI-generated backgrounds for photo edits",
      "Sticker and graphic design",
      "Quick content creation for influencers"
    ],
    "tags": [
      "consumer",
      "mobile-app",
      "photo-editing",
      "social-media"
    ],
    "categorySlug": "ai-image",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "lemlist",
    "name": "Lemlist",
    "tagline": "Cold outreach platform with AI personalization at scale",
    "websiteUrl": "https://www.lemlist.com",
    "descriptionMd": "Lemlist is a sales engagement platform that combines email, LinkedIn, and cold calling into multichannel sequences. It offers AI-powered personalization using dynamic images, videos, and custom text variables to boost reply rates. The platform includes built-in email warm-up and a B2B lead database.",
    "pricingText": "Paid plans from ~$39–$59/mo per seat (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "Sales teams running multichannel cold outreach with heavy personalization",
    "notFor": "Teams looking for a pure marketing automation or newsletter platform",
    "useCases": [
      "Multichannel cold outreach sequences",
      "AI-personalized image and video emails",
      "LinkedIn + email combo campaigns",
      "B2B lead prospecting and enrichment"
    ],
    "tags": [
      "cold-outreach",
      "email-sequences",
      "linkedin-automation",
      "personalization"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "mailshake",
    "name": "Mailshake",
    "tagline": "Simple cold email and sales engagement for growing teams",
    "websiteUrl": "https://mailshake.com",
    "descriptionMd": "Mailshake is a sales engagement platform focused on cold email outreach with AI-assisted copy suggestions and sequence automation. It includes a dialer for phone outreach and LinkedIn task management for true multichannel prospecting. The tool is known for its simple UI and ease of onboarding for SDR teams.",
    "pricingText": "Plans from ~$58–$99/mo per user (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "Small to mid-size SDR teams wanting straightforward cold email with AI writing assistance",
    "notFor": "Enterprise teams needing deep CRM integrations or advanced analytics",
    "useCases": [
      "Cold email sequence automation",
      "AI-assisted email copywriting",
      "Phone dialer for SDRs",
      "LinkedIn task management alongside email"
    ],
    "tags": [
      "cold-email",
      "sales-engagement",
      "ai-copywriting",
      "sdr-tools"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "woodpecker",
    "name": "Woodpecker",
    "tagline": "Automated cold email outreach built for deliverability",
    "websiteUrl": "https://woodpecker.co",
    "descriptionMd": "Woodpecker is a B2B cold email platform that prioritizes inbox deliverability through automatic email warm-up and sending throttling. It supports follow-up sequence automation and has AI features for personalizing emails and detecting out-of-office or interested replies. It integrates with major CRMs and is favored by agencies managing multiple client campaigns.",
    "pricingText": "Plans from ~$29–$49/mo; agency and higher-volume plans available (may have changed)",
    "hasFreeTier": false,
    "bestFor": "Agencies and B2B teams that prioritize deliverability in cold email campaigns",
    "notFor": "Teams needing built-in prospecting databases or advanced LinkedIn automation",
    "useCases": [
      "Automated cold email follow-up sequences",
      "Email warm-up and deliverability management",
      "Agency multi-client campaign management",
      "AI reply detection and auto-categorization"
    ],
    "tags": [
      "cold-email",
      "deliverability",
      "email-automation",
      "agency-tools"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "snov-io",
    "name": "Snov.io",
    "tagline": "All-in-one sales toolkit: find, verify, and engage leads",
    "websiteUrl": "https://snov.io",
    "descriptionMd": "Snov.io is a sales automation platform combining email finding and verification, drip campaign sequences, and a CRM. Its Chrome extension lets users capture leads from LinkedIn and company websites, while AI helps personalize outreach at scale. The platform also includes email warm-up to protect sender reputation.",
    "pricingText": "Free tier available; paid plans from ~$30–$39/mo (pricing may have changed)",
    "hasFreeTier": true,
    "bestFor": "Startups and SMBs wanting a single tool for prospecting, verification, and outreach",
    "notFor": "Large enterprise teams needing Salesforce-grade CRM depth or advanced intent data",
    "useCases": [
      "Email address finding and verification",
      "Drip email sequence automation",
      "LinkedIn lead capture via Chrome extension",
      "Email warm-up for deliverability"
    ],
    "tags": [
      "email-finder",
      "lead-generation",
      "email-sequences",
      "sales-automation"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hunter-io",
    "name": "Hunter.io",
    "tagline": "Find and verify professional email addresses instantly",
    "websiteUrl": "https://hunter.io",
    "descriptionMd": "Hunter.io is a domain search and email verification tool that helps sales and marketing teams find verified contact emails for any company. It aggregates publicly available email data and assigns a confidence score to each result. Hunter also offers basic cold email campaign functionality to connect prospecting with outreach.",
    "pricingText": "Free tier with limited searches; paid plans from ~$34–$49/mo (pricing may have changed)",
    "hasFreeTier": true,
    "bestFor": "Marketers and sales reps who need to quickly find verified emails for cold outreach",
    "notFor": "Teams needing full sales engagement sequences or intent-based targeting",
    "useCases": [
      "Domain-level email address discovery",
      "Email verification and confidence scoring",
      "Bulk email finding via CSV upload",
      "Simple cold email campaign sending"
    ],
    "tags": [
      "email-finder",
      "email-verification",
      "lead-generation",
      "prospecting"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "lusha",
    "name": "Lusha",
    "tagline": "B2B contact and company data enrichment for sales teams",
    "websiteUrl": "https://www.lusha.com",
    "descriptionMd": "Lusha provides verified direct-dial phone numbers and business email addresses for B2B contacts, pulling data from its crowdsourced and proprietary database. Its browser extension surfaces contact info directly on LinkedIn and Salesforce. Lusha also offers intent signals and job change alerts to help sales reps prioritize outreach timing.",
    "pricingText": "Free tier with limited credits; paid plans from ~$36–$59/mo per user (pricing may have changed)",
    "hasFreeTier": true,
    "bestFor": "SDRs and AEs who need accurate direct-dial phone numbers alongside business emails",
    "notFor": "Teams focused on email-only outreach who don't need phone data or enrichment",
    "useCases": [
      "Direct-dial phone number lookup",
      "LinkedIn contact data enrichment",
      "CRM data enrichment and hygiene",
      "Buyer intent and job-change alerts"
    ],
    "tags": [
      "contact-data",
      "phone-numbers",
      "data-enrichment",
      "prospecting"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "cognism",
    "name": "Cognism",
    "tagline": "GDPR-compliant B2B data and sales intelligence platform",
    "websiteUrl": "https://www.cognism.com",
    "descriptionMd": "Cognism is a premium B2B sales intelligence platform offering verified mobile phone numbers, business emails, and firmographic data with a strong emphasis on GDPR and CCPA compliance. It uses AI to surface intent data and technographic signals so sales teams can target in-market buyers. Cognism is widely adopted by European sales teams due to its compliance-first approach.",
    "pricingText": "Custom pricing; typically mid-market to enterprise; no public pricing listed",
    "hasFreeTier": false,
    "bestFor": "European sales teams needing GDPR-compliant contact data with verified mobile numbers",
    "notFor": "Small teams or startups with limited budgets needing self-serve low-cost data",
    "useCases": [
      "GDPR-compliant B2B contact data sourcing",
      "Verified mobile number outreach",
      "Intent data-driven account prioritization",
      "CRM enrichment with technographic signals"
    ],
    "tags": [
      "b2b-data",
      "gdpr-compliance",
      "sales-intelligence",
      "contact-enrichment"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "seamless-ai",
    "name": "Seamless.AI",
    "tagline": "Real-time B2B contact search engine powered by AI",
    "websiteUrl": "https://seamless.ai",
    "descriptionMd": "Seamless.AI is a B2B contact data platform that uses AI to search and verify emails and phone numbers in real time rather than pulling from a static database. It integrates directly with LinkedIn via a Chrome extension and syncs contacts to CRMs like Salesforce and HubSpot. The platform also includes AI pitch writing and buyer intent features.",
    "pricingText": "Free tier with limited credits; paid plans from ~$65–$147/mo (pricing may have changed)",
    "hasFreeTier": true,
    "bestFor": "Sales reps who want real-time verified contact data pulled live during LinkedIn prospecting",
    "notFor": "Teams that need European GDPR-certified data compliance as a hard requirement",
    "useCases": [
      "Real-time email and phone number discovery",
      "LinkedIn prospecting via Chrome extension",
      "AI-generated sales pitch writing",
      "CRM contact sync and enrichment"
    ],
    "tags": [
      "contact-data",
      "real-time-search",
      "ai-writing",
      "sales-intelligence"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "zoominfo-copilot",
    "name": "ZoomInfo Copilot",
    "tagline": "AI sales assistant built on ZoomInfo's B2B data",
    "websiteUrl": "https://www.zoominfo.com/products/copilot",
    "descriptionMd": "ZoomInfo Copilot is an AI-powered layer on top of the ZoomInfo platform that synthesizes buying signals, account activity, and contact data to surface prioritized outreach recommendations. It auto-generates personalized email drafts grounded in ZoomInfo's intent and firmographic data. The tool is designed for enterprise revenue teams already using the ZoomInfo ecosystem.",
    "pricingText": "Enterprise pricing; requires ZoomInfo subscription; no public pricing available",
    "hasFreeTier": false,
    "bestFor": "Enterprise sales teams already on ZoomInfo wanting AI-guided account prioritization",
    "notFor": "Teams not on ZoomInfo or those needing a standalone affordable prospecting tool",
    "useCases": [
      "AI-prioritized account and contact recommendations",
      "Auto-generated personalized outreach emails",
      "Buyer intent signal aggregation",
      "Sales rep workflow automation within ZoomInfo"
    ],
    "tags": [
      "sales-intelligence",
      "ai-assistant",
      "intent-data",
      "enterprise-sales"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "chili-piper",
    "name": "Chili Piper",
    "tagline": "Instant meeting scheduling and lead routing for revenue teams",
    "websiteUrl": "https://www.chilipiper.com",
    "descriptionMd": "Chili Piper is a demand conversion platform that routes inbound leads to the right sales rep and books meetings instantly from web forms, emails, or chatbots. Its AI-powered routing logic considers territory, workload, and account ownership to eliminate lead lag. The platform is widely used by revenue operations teams to improve inbound conversion rates.",
    "pricingText": "Paid plans from ~$15–$30/mo per user plus platform fees (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "Revenue ops teams wanting to instantly route and book inbound demo requests without lead lag",
    "notFor": "Outbound-only sales teams or those with very low inbound form volume",
    "useCases": [
      "Instant meeting booking from inbound web forms",
      "AI-powered lead routing to correct rep",
      "Calendar scheduling automation in email",
      "Handoff automation from marketing to sales"
    ],
    "tags": [
      "lead-routing",
      "meeting-scheduling",
      "inbound-conversion",
      "revenue-ops"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "persado",
    "name": "Persado",
    "tagline": "AI marketing language that motivates customer action",
    "websiteUrl": "https://www.persado.com",
    "descriptionMd": "Persado uses a proprietary AI and knowledge graph of emotional language to generate and test marketing copy that drives measurable lift in conversions. It analyzes which emotional triggers, calls to action, and narrative structures perform best for specific audiences and channels. Large enterprises including banks and retailers use Persado for email, push, and landing page copy at scale.",
    "pricingText": "Enterprise pricing; custom contracts; no self-serve tier publicly available",
    "hasFreeTier": false,
    "bestFor": "Enterprise marketers in financial services and retail wanting AI copy with proven conversion lift",
    "notFor": "SMBs or startups needing affordable self-serve AI writing without enterprise contracts",
    "useCases": [
      "AI-generated email subject lines and body copy",
      "Emotionally-optimized push notification language",
      "Landing page headline testing at scale",
      "Cross-channel message consistency with brand voice"
    ],
    "tags": [
      "ai-copywriting",
      "conversion-optimization",
      "enterprise-marketing",
      "nlg"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "smartwriter-ai",
    "name": "Smartwriter.ai",
    "tagline": "Hyper-personalized cold email copy generated in bulk",
    "websiteUrl": "https://www.smartwriter.ai",
    "descriptionMd": "Smartwriter.ai uses publicly available data from LinkedIn profiles, company websites, and news to auto-generate highly personalized cold email opening lines and full sequences in bulk. Users upload a CSV of prospects and receive personalized icebreakers for each contact without manual research. It is positioned as a time-saver for SDRs running large cold outreach campaigns.",
    "pricingText": "Paid plans from ~$49–$59/mo (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "SDRs who need personalized cold email icebreakers generated at scale from prospect data",
    "notFor": "Teams needing a full sales engagement platform with sequencing and analytics built in",
    "useCases": [
      "Bulk personalized cold email icebreaker generation",
      "LinkedIn profile-based personalization at scale",
      "CSV prospect upload to personalized copy pipeline",
      "Reducing manual research time for SDR teams"
    ],
    "tags": [
      "ai-copywriting",
      "cold-email",
      "personalization",
      "sales-automation"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "predis-ai",
    "name": "Predis.ai",
    "tagline": "AI social media content creator for posts, reels, and ads",
    "websiteUrl": "https://predis.ai",
    "descriptionMd": "Predis.ai generates ready-to-publish social media posts, carousels, short video reels, and ad creatives from a text prompt or product URL. It includes a competitor analysis feature that lets marketers benchmark their content against competitors' social performance. The platform supports multiple languages and is used by marketing agencies managing many brand accounts.",
    "pricingText": "Free tier available; paid plans from ~$27–$32/mo (pricing may have changed)",
    "hasFreeTier": true,
    "bestFor": "Marketing agencies and SMBs wanting to generate branded social content and ads at high volume",
    "notFor": "Teams needing deep paid ad channel management, bidding automation, or analytics beyond content creation",
    "useCases": [
      "AI-generated social media post and carousel creation",
      "Short-form video reel generation from prompts",
      "Competitor social content benchmarking",
      "Multi-brand agency content management"
    ],
    "tags": [
      "social-media",
      "content-creation",
      "ad-creative",
      "video-generation"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "taplio",
    "name": "Taplio",
    "tagline": "AI-powered LinkedIn personal brand growth platform",
    "websiteUrl": "https://taplio.com",
    "descriptionMd": "Taplio helps professionals grow their LinkedIn audience by generating AI-assisted post ideas and full drafts, scheduling content, and engaging with target accounts through smart commenting. It surfaces viral LinkedIn posts in a user's niche for inspiration and provides analytics on what content resonates with their audience. Taplio is built specifically for LinkedIn.",
    "pricingText": "Paid plans from ~$39–$65/mo (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "Founders, consultants, and sales leaders wanting to grow a LinkedIn audience and generate inbound leads",
    "notFor": "Teams managing multi-platform social presence or needing paid LinkedIn ad campaign management",
    "useCases": [
      "AI-generated LinkedIn post drafts and scheduling",
      "Smart engagement with target ICP accounts",
      "Viral content inspiration from niche leaders",
      "LinkedIn audience growth analytics and tracking"
    ],
    "tags": [
      "linkedin",
      "personal-branding",
      "content-scheduling",
      "social-selling"
    ],
    "categorySlug": "ai-marketing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "musicfy",
    "name": "Musicfy",
    "tagline": "AI voice cloning and music generation for artists",
    "websiteUrl": "https://musicfy.lol",
    "descriptionMd": "Musicfy allows users to create AI covers using voice clones and generate original music from text prompts. It focuses heavily on vocal transformation and cover generation alongside instrumental creation. The platform targets content creators who want to produce music quickly without traditional recording setups.",
    "pricingText": "Free tier available with limited generations; paid plans from ~$9–$14/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Content creators who want AI voice covers and quick song generation from text prompts",
    "notFor": "Professional producers needing stem export or full DAW integration; voice cloning of real artists may raise copyright concerns",
    "useCases": [
      "AI voice cover generation",
      "Text-to-song creation",
      "Social media content music",
      "Artist voice cloning experiments"
    ],
    "tags": [
      "voice-cloning",
      "text-to-music",
      "ai-covers",
      "content-creation"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "soundverse",
    "name": "Soundverse",
    "tagline": "AI music co-creator with text, hum, and stem control",
    "websiteUrl": "https://soundverse.ai",
    "descriptionMd": "Soundverse is an AI-powered music creation platform that lets users generate music from text descriptions, humming, or reference audio. It offers stem separation, audio editing, and a conversational AI assistant to help guide the music creation process. The tool is aimed at independent musicians and producers looking for an AI collaborator.",
    "pricingText": "Free plan available with limited credits; paid plans from ~$12–$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Independent musicians who want an AI co-creator that accepts text, voice, and audio reference inputs",
    "notFor": "Users needing fully polished, radio-ready masters out of the box without any manual refinement",
    "useCases": [
      "Text-to-music generation",
      "Hum-to-song conversion",
      "Stem separation and remixing",
      "Background music for videos"
    ],
    "tags": [
      "text-to-music",
      "stem-separation",
      "ai-assistant",
      "music-production"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "mureka",
    "name": "Mureka",
    "tagline": "AI music generator with commercial-rights focus",
    "websiteUrl": "https://mureka.ai",
    "descriptionMd": "Mureka is an AI music generation platform developed by Skywork AI that produces full songs with vocals and instrumentals from text prompts. It emphasizes commercial licensing, allowing users to own and monetize generated music. The platform positions itself as a Suno/Udio alternative with a focus on rights clarity.",
    "pricingText": "Free tier with limited monthly generations; paid plans from ~$8–$15/mo with commercial license (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Creators and businesses who need commercially licensable AI-generated songs with vocals and full tracks",
    "notFor": "Users who need fine-grained control over individual instruments or stems rather than full-track generation",
    "useCases": [
      "Full song generation from text",
      "Commercial content music",
      "Social media background tracks",
      "Rapid music prototyping"
    ],
    "tags": [
      "text-to-music",
      "commercial-license",
      "full-track",
      "vocals"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "aimi",
    "name": "Aimi",
    "tagline": "Generative music that adapts in real time",
    "websiteUrl": "https://aimi.fm",
    "descriptionMd": "Aimi is a generative music platform that creates endlessly evolving, adaptive music streams that never repeat. It lets musicians publish generative versions of their music that respond to listener context. It targets both artists who want to offer adaptive experiences and listeners who want non-repetitive background music.",
    "pricingText": "Free listening tier available; artist/creator plans vary (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Artists wanting to release adaptive, generative versions of their music and listeners needing non-repeating background streams",
    "notFor": "Users who need to download or export specific audio files; not a traditional music generation tool",
    "useCases": [
      "Adaptive background music streaming",
      "Generative artist releases",
      "Focus and ambient listening",
      "Live performance generative soundscapes"
    ],
    "tags": [
      "generative-music",
      "adaptive",
      "streaming",
      "artist-tools"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "brain-fm",
    "name": "Brain.fm",
    "tagline": "AI-generated functional music to improve focus and sleep",
    "websiteUrl": "https://brain.fm",
    "descriptionMd": "Brain.fm uses AI to generate music specifically engineered to support cognitive states like focus, relaxation, and sleep, based on neuroscience research. The audio is designed with rhythmic patterns intended to influence attention rather than serve as entertainment. It has been used by many users and has published research supporting its approach.",
    "pricingText": "Free trial available; subscription around ~$6–$10/mo or ~$50/yr (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Knowledge workers, students, and anyone seeking science-backed functional music for deep focus or sleep",
    "notFor": "Users wanting to create or export music; purely a listening tool, not a music production platform",
    "useCases": [
      "Deep work and focus sessions",
      "Sleep and relaxation",
      "Meditation and mindfulness",
      "ADHD-friendly background audio"
    ],
    "tags": [
      "functional-music",
      "focus",
      "neuroscience",
      "wellness"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "audiocipher",
    "name": "AudioCipher",
    "tagline": "Turn words into MIDI melodies in your DAW",
    "websiteUrl": "https://audiocipher.com",
    "descriptionMd": "AudioCipher is a desktop plugin that converts typed words and phrases into MIDI note sequences using a letter-to-note cipher system. It works as a VST/AU plugin inside DAWs like Ableton, Logic, and FL Studio, generating MIDI that the user then develops into full compositions. It is a creative starting-point tool rather than a full song generator.",
    "pricingText": "One-time purchase around ~$47–$67 (verify on site); no subscription model reported",
    "hasFreeTier": false,
    "bestFor": "DAW users and music producers who want a creative MIDI idea-generator driven by words and lyrical concepts",
    "notFor": "Non-DAW users or those wanting finished audio output — this outputs only MIDI and requires a full production setup",
    "useCases": [
      "MIDI melody generation from lyrics",
      "Creative songwriting starting points",
      "Thematic composition based on words",
      "Music theory exploration in DAW"
    ],
    "tags": [
      "midi",
      "daw-plugin",
      "songwriting",
      "creative-tool"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "bandlab-songstarter",
    "name": "BandLab SongStarter",
    "tagline": "AI beat and melody starters in BandLab's free DAW",
    "websiteUrl": "https://www.bandlab.com/songstarter",
    "descriptionMd": "BandLab SongStarter is an AI feature integrated into the BandLab platform that generates initial beat and melodic ideas from genre and mood prompts. Users can then continue developing the generated ideas within BandLab's free browser and mobile DAW. It is aimed at beginners and casual musicians who need a creative spark to start a project.",
    "pricingText": "Free as part of BandLab's free platform (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Beginners and casual musicians who want AI-generated starting points they can develop in a free, built-in DAW",
    "notFor": "Professional producers needing high-quality stem export or advanced mixing; output quality is starter-level",
    "useCases": [
      "Generating beat ideas by genre",
      "Music creation for beginners",
      "Mobile music production starting points",
      "Collaborative music projects on BandLab"
    ],
    "tags": [
      "beat-generation",
      "daw-integrated",
      "beginner-friendly",
      "free"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "tuney",
    "name": "Tuney",
    "tagline": "AI music mixing tool for combining and remixing tracks",
    "websiteUrl": "https://tuney.io",
    "descriptionMd": "Tuney is an AI-powered platform focused on music mixing, mashup creation, and remixing existing audio tracks using AI assistance. It allows users to combine different song elements, adjust tempos, and create new arrangements without deep audio engineering knowledge. The platform targets content creators and DJs who want quick, accessible remixing capabilities.",
    "pricingText": "Free tier reportedly available; paid plans vary (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Content creators and aspiring DJs who want to create mashups and remixes using AI without traditional mixing skills",
    "notFor": "Users needing original AI-composed music from scratch; Tuney focuses on remixing and combining existing material",
    "useCases": [
      "AI-assisted mashup creation",
      "Track tempo and key matching",
      "Social media remix content",
      "DJ practice and experimentation"
    ],
    "tags": [
      "remixing",
      "mashup",
      "dj-tools",
      "audio-editing"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "amadeus-code",
    "name": "Amadeus Code",
    "tagline": "AI songwriting assistant with chord progressions",
    "websiteUrl": "https://amadeuscode.com",
    "descriptionMd": "Amadeus Code is a mobile-first AI songwriting app that generates chord progressions and melodic ideas using patterns drawn from a large database of songs. Users can select styles and moods to guide the AI, then export results as MIDI or audio for use in other tools. It was one of the earlier consumer AI music composition apps, available on iOS.",
    "pricingText": "In-app purchases or subscription around ~$5–$10/mo (verify on App Store)",
    "hasFreeTier": false,
    "bestFor": "Mobile-first songwriters who want AI chord progression suggestions and melody starters on iPhone without a DAW setup",
    "notFor": "Android users; also not suitable for those wanting fully produced tracks rather than MIDI composition assistance",
    "useCases": [
      "Chord progression generation by mood",
      "Melodic idea exploration",
      "MIDI export for DAW development",
      "Mobile songwriting and composition"
    ],
    "tags": [
      "chord-progressions",
      "mobile",
      "songwriting",
      "midi"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "sounds-studio",
    "name": "Sounds.studio",
    "tagline": "Browser-based AI music production with stems",
    "websiteUrl": "https://sounds.studio",
    "descriptionMd": "Sounds.studio is a browser-based AI music production platform that allows users to generate music, separate stems, and mix tracks without installing software. It combines AI generation with lightweight DAW-like editing capabilities accessible entirely in the browser. The platform targets music hobbyists and content creators who want an accessible all-in-one production environment.",
    "pricingText": "Free tier reportedly available with limited features; paid plans vary (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Music hobbyists and content creators who want browser-based AI music generation combined with basic mixing and stem tools",
    "notFor": "Professional audio engineers who need high-sample-rate exports, advanced mixing, or professional-grade plugin ecosystems",
    "useCases": [
      "Browser-based music generation",
      "Stem separation in the browser",
      "Background music for videos",
      "Hobbyist music production without DAW install"
    ],
    "tags": [
      "browser-based",
      "stem-separation",
      "music-production",
      "no-install"
    ],
    "categorySlug": "ai-music",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "spinach-ai",
    "name": "Spinach.ai",
    "tagline": "AI meeting assistant that writes standups and action items",
    "websiteUrl": "https://www.spinach.io",
    "descriptionMd": "Spinach joins your video meetings and generates structured summaries including decisions, action items, and blockers. It integrates with Jira, Linear, and Slack to push tasks directly into your existing workflow. Particularly popular with agile engineering teams running daily standups.",
    "pricingText": "Free tier available; paid plans from ~$25/mo per user (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Agile engineering teams who want meeting notes pushed straight into Jira or Linear",
    "notFor": "Teams that don't use structured sprint or standup rituals",
    "useCases": [
      "Auto-generate standup summaries",
      "Capture action items to Jira",
      "Track meeting decisions over time",
      "Async meeting recaps for remote teams"
    ],
    "tags": [
      "meeting-notes",
      "agile",
      "jira-integration",
      "action-items"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "notta",
    "name": "Notta",
    "tagline": "Real-time AI transcription in 58+ languages",
    "websiteUrl": "https://www.notta.ai",
    "descriptionMd": "Notta provides live transcription and post-meeting AI summaries across Zoom, Teams, Google Meet, and uploaded audio/video files. It supports over 58 languages and offers a web clipper for capturing voice notes on the go. Summaries can be exported to Notion, Google Docs, or as PDF.",
    "pricingText": "Free tier with limited minutes; Pro from ~$13–$16/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Multilingual teams or researchers who need transcription in languages beyond English",
    "notFor": "Teams who only need English transcription and already have another recorder",
    "useCases": [
      "Transcribe meetings in 58+ languages",
      "Summarize uploaded audio/video files",
      "Export notes to Notion or Google Docs",
      "Real-time captions during live calls"
    ],
    "tags": [
      "transcription",
      "multilingual",
      "meeting-notes",
      "audio-to-text"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "bloks-app",
    "name": "Bloks",
    "tagline": "AI note-taker that enriches notes with CRM context",
    "websiteUrl": "https://www.bloks.app",
    "descriptionMd": "Bloks is an AI-powered meeting and note-taking app that automatically pulls in context from your calendar, contacts, and CRM before meetings. It records and transcribes calls, then produces summaries enriched with relationship history. Designed especially for sales and customer-facing professionals.",
    "pricingText": "Free plan available; paid plans from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Sales reps and account managers who want CRM context surfaced automatically before every call",
    "notFor": "Internal-only teams with no need for contact relationship tracking",
    "useCases": [
      "Pre-meeting CRM context briefings",
      "Auto-transcribe and summarize sales calls",
      "Track follow-ups across accounts",
      "Relationship history timeline per contact"
    ],
    "tags": [
      "sales",
      "crm",
      "meeting-notes",
      "relationship-intelligence"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "meetgeek",
    "name": "MeetGeek",
    "tagline": "Automated meeting recorder with keyword highlights",
    "websiteUrl": "https://meetgeek.ai",
    "descriptionMd": "MeetGeek records, transcribes, and summarizes video meetings, then highlights key moments based on keywords you define. It integrates with HubSpot, Notion, Slack, Trello, and thousands of tools via Zapier. Teams can build a searchable library of all past meeting recordings.",
    "pricingText": "Free tier available; paid plans from ~$15/mo per user (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Teams who want a searchable archive of all meetings with custom keyword tracking",
    "notFor": "Users who only need transcription without a meeting library or search",
    "useCases": [
      "Record and archive all team meetings",
      "Search across past meeting transcripts",
      "Auto-send summaries to Slack channels",
      "Track custom keywords across calls"
    ],
    "tags": [
      "meeting-recording",
      "search",
      "team-collaboration",
      "keyword-tracking"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "circleback-ai",
    "name": "Circleback",
    "tagline": "AI meeting notes with automatic CRM updates",
    "websiteUrl": "https://www.circleback.ai",
    "descriptionMd": "Circleback attends your meetings and generates structured notes, then automatically writes back to HubSpot or Salesforce with updated contact notes and deal information. It identifies action items and sends follow-up email drafts to participants. Built for revenue teams who lose time on post-call admin.",
    "pricingText": "Paid plans from ~$20–$30/mo per user; free trial available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Revenue and sales teams who want CRM fields auto-updated after every customer call",
    "notFor": "Internal-ops teams with no CRM or customer-facing meetings",
    "useCases": [
      "Auto-update HubSpot/Salesforce after calls",
      "Draft follow-up emails post-meeting",
      "Extract action items per attendee",
      "Summarize deal-stage updates from calls"
    ],
    "tags": [
      "crm-sync",
      "sales",
      "meeting-notes",
      "follow-up"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "laxis",
    "name": "Laxis",
    "tagline": "AI meeting assistant built for revenue intelligence",
    "websiteUrl": "https://www.laxis.com",
    "descriptionMd": "Laxis records and transcribes customer meetings, then uses AI to extract insights such as objections, pain points, and buying signals. It syncs notes to Salesforce, HubSpot, and Pipedrive and can generate follow-up emails and next-step summaries automatically. Primarily targeted at sales, marketing, and customer success teams.",
    "pricingText": "Free tier with limited features; paid plans from ~$15–$40/mo per user (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Sales and customer success teams who want automated revenue intelligence from every call",
    "notFor": "Internal engineering or design teams with no customer-facing meeting workload",
    "useCases": [
      "Extract buying signals from sales calls",
      "Sync summaries to Salesforce or HubSpot",
      "Auto-generate customer follow-up emails",
      "Identify common objections across deals"
    ],
    "tags": [
      "revenue-intelligence",
      "sales",
      "crm-sync",
      "meeting-notes"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "jamie-ai",
    "name": "Jamie",
    "tagline": "Privacy-first AI meeting notes — no bot joins your call",
    "websiteUrl": "https://www.meetjamie.ai",
    "descriptionMd": "Jamie generates meeting summaries without sending a bot into your call — it runs locally on your device and captures audio at the OS level. Summaries are structured into topics, decisions, and tasks. Because no third-party server joins the call, it appeals to privacy-conscious users.",
    "pricingText": "Free tier with limited meetings/month; paid plans from ~€24/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Privacy-conscious professionals who don't want a visible bot recording in sensitive client calls",
    "notFor": "Teams who need cloud-based sharing of recordings with colleagues",
    "useCases": [
      "Bot-free local meeting transcription",
      "Structured topic and decision summaries",
      "Private in-person meeting capture",
      "Sensitive client call notes without disclosure"
    ],
    "tags": [
      "privacy",
      "no-bot",
      "meeting-notes",
      "local-processing"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "goblin-tools",
    "name": "Goblin Tools",
    "tagline": "ADHD-friendly AI task breakdown and focus tools",
    "websiteUrl": "https://goblin.tools",
    "descriptionMd": "Goblin Tools is a collection of small AI-powered utilities aimed at neurodivergent users, most notably the Magic To-Do which breaks large vague tasks into small concrete steps. Other tools help estimate task duration, rephrase messages for tone, and convert freeform text to structured lists. It is free to use and requires no account.",
    "pricingText": "Free to use on the web; low-cost mobile apps available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Neurodivergent individuals who struggle to break vague tasks into actionable steps",
    "notFor": "Teams needing collaborative project management or integrations with other tools",
    "useCases": [
      "Break overwhelming tasks into micro-steps",
      "Estimate how long tasks will take",
      "Adjust message tone before sending",
      "Convert brain-dump text to structured lists"
    ],
    "tags": [
      "adhd",
      "task-breakdown",
      "neurodivergent",
      "personal-productivity"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "magical-ai",
    "name": "Magical",
    "tagline": "AI text expander and autofill for repetitive typing",
    "websiteUrl": "https://www.getmagical.com",
    "descriptionMd": "Magical is a browser extension that lets users create slash-command shortcuts for frequently typed text, then uses AI to personalize the expanded content with dynamic fields like recipient name or company. It can also autofill form fields across sites by reading data from other open tabs. Popular with recruiters, SDRs, and support agents.",
    "pricingText": "Free tier available; paid plans from ~$10–$12/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Recruiters, SDRs, and support agents who send high volumes of similar messages daily",
    "notFor": "Users who need meeting transcription, scheduling, or project management features",
    "useCases": [
      "Expand message shortcuts with personalized fields",
      "Autofill forms across browser tabs",
      "Standardize outreach templates across a team",
      "Reduce repetitive typing in CRM entry"
    ],
    "tags": [
      "text-expander",
      "browser-extension",
      "automation",
      "sales"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "text-blaze",
    "name": "Text Blaze",
    "tagline": "Smart text snippets with dynamic formulas and forms",
    "websiteUrl": "https://blaze.today",
    "descriptionMd": "Text Blaze is a text-expansion tool that goes beyond simple shortcuts by supporting dynamic fields, form prompts, conditional logic, and date calculations inside snippets. Teams can share snippet packs and enforce consistent messaging across members. It works as a Chrome extension and integrates with Google Workspace.",
    "pricingText": "Free tier available; paid plans from ~$2.99–$6.99/mo per user (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Teams who need consistent, logic-driven response templates shared across members",
    "notFor": "Users who need AI-generated content rather than templated text expansion",
    "useCases": [
      "Shared snippet libraries for support teams",
      "Dynamic form-based email templates",
      "Conditional logic in outreach messages",
      "Date-aware scheduling text snippets"
    ],
    "tags": [
      "text-expander",
      "templates",
      "team-sharing",
      "browser-extension"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "relay-app",
    "name": "Relay.app",
    "tagline": "Human-in-the-loop AI workflow automation",
    "websiteUrl": "https://www.relay.app",
    "descriptionMd": "Relay.app is a workflow automation tool that emphasizes human approval steps alongside AI actions, letting teams automate repetitive processes while keeping people in the loop for key decisions. It connects to tools like Gmail, Notion, Slack, and HubSpot and offers AI steps for drafting, summarizing, and classifying content. Positioned as a more accessible alternative for AI-augmented workflows.",
    "pricingText": "Free tier available; paid plans from ~$9–$29/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Operations teams who want AI-assisted workflows with human approval checkpoints built in",
    "notFor": "Fully hands-off automation where no human review is needed",
    "useCases": [
      "Automate lead enrichment with human review step",
      "Draft and approve outbound emails via workflow",
      "Classify and route inbound support tickets",
      "Summarize reports before Slack delivery"
    ],
    "tags": [
      "workflow-automation",
      "human-in-the-loop",
      "ai-actions",
      "no-code"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "raycast-ai",
    "name": "Raycast AI",
    "tagline": "macOS launcher with built-in AI commands and extensions",
    "websiteUrl": "https://www.raycast.com",
    "descriptionMd": "Raycast is a macOS productivity launcher that includes AI capabilities for drafting text, answering questions, and running custom AI commands directly from the keyboard. Extensions connect it to GitHub, Jira, Linear, Notion, and hundreds of other tools. The AI tier adds frontier model access without switching apps.",
    "pricingText": "Free base launcher; AI add-on from ~$8–$10/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Mac power users who want AI assistance and app integrations without leaving their keyboard",
    "notFor": "Windows or Linux users, or anyone who doesn't rely on keyboard-driven workflows",
    "useCases": [
      "AI drafting and rewrites via hotkey",
      "Search GitHub PRs and Jira issues from launcher",
      "Custom AI commands for personal workflows",
      "Clipboard history and snippet management"
    ],
    "tags": [
      "macos",
      "launcher",
      "keyboard-productivity",
      "ai-assistant"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "limitless-ai",
    "name": "Limitless",
    "tagline": "AI memory and meeting capture, with optional wearable",
    "websiteUrl": "https://www.limitless.ai",
    "descriptionMd": "Limitless (formerly Rewind AI) captures what you see, say, and hear on your devices and uses AI to make it searchable and referenceable later. It also offers a wearable pendant that records in-person conversations for transcription. The app creates a personal memory layer so users can recall past discussions, commitments, and context on demand.",
    "pricingText": "Free tier available for the app; pendant hardware is an additional cost (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Professionals who want a searchable record of meetings and conversations across their day",
    "notFor": "Users uncomfortable with continuous always-on recording or with strict data-residency requirements",
    "useCases": [
      "Search past meetings and conversations by keyword",
      "Recall forgotten commitments or decisions",
      "Capture in-person meetings with wearable pendant",
      "Auto-generate summaries of recent activity"
    ],
    "tags": [
      "memory",
      "wearable",
      "meeting-capture",
      "personal-ai"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "tana-app",
    "name": "Tana",
    "tagline": "Structured AI note-taking with supertags and workflows",
    "websiteUrl": "https://tana.inc",
    "descriptionMd": "Tana is an outliner-based note-taking and knowledge management tool that uses a concept called Supertags to turn any node into a structured database object with custom fields. AI commands can search, summarize, and act on your notes, while workflows allow semi-automated personal knowledge pipelines. It targets power users who want a programmable second brain.",
    "pricingText": "Free tier available; paid plans as the product matures (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Power users who want a programmable knowledge graph with AI commands baked in",
    "notFor": "Users who want a simple docs or meeting-notes tool without a setup investment",
    "useCases": [
      "Structure meeting notes into typed database nodes",
      "Run AI commands on tagged content",
      "Build a personal CRM inside a note graph",
      "Automate weekly review workflows"
    ],
    "tags": [
      "knowledge-management",
      "outliner",
      "second-brain",
      "structured-notes"
    ],
    "categorySlug": "ai-productivity",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "growthbar-seo",
    "name": "GrowthBar",
    "tagline": "AI blog writing and keyword research for content teams",
    "websiteUrl": "https://www.growthbarseo.com",
    "descriptionMd": "GrowthBar combines keyword research, competitor analysis, and AI content generation in a single dashboard aimed at bloggers and small marketing teams. It uses AI models to generate blog outlines, introductions, and full posts optimized around target keywords. A Chrome extension lets users view SEO data directly in Google search results.",
    "pricingText": "Paid plans from ~$29–$79/mo (pricing may have changed)",
    "hasFreeTier": false,
    "bestFor": "Small teams and solo bloggers who want keyword research and AI writing in one affordable tool",
    "notFor": "Enterprise SEO teams needing deep technical audits or large-scale rank tracking",
    "useCases": [
      "Generate SEO blog outlines from a target keyword",
      "Research competitor keyword gaps",
      "Write full blog drafts with AI",
      "Analyze SERP results via Chrome extension"
    ],
    "tags": [
      "ai-writing",
      "keyword-research",
      "blog-seo",
      "chrome-extension"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "page-optimizer-pro",
    "name": "Page Optimizer Pro",
    "tagline": "On-page SEO recommendations from SERP correlation",
    "websiteUrl": "https://pageoptimizer.pro",
    "descriptionMd": "Page Optimizer Pro (POP) analyzes top-ranking pages for a given keyword and generates granular on-page recommendations based on statistical correlation with SERP rankings. It focuses on term frequency, content structure, and entity optimization rather than AI writing generation. POP is widely used by SEO specialists who want data-driven on-page scoring.",
    "pricingText": "Plans from ~$22–$47/mo (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "SEO specialists who want precise, correlation-based on-page optimization guidance",
    "notFor": "Users looking for an AI writing assistant or automated content creation",
    "useCases": [
      "Score existing pages against top-ranking competitors",
      "Get term and entity recommendations for on-page optimization",
      "Audit content structure before publishing",
      "Brief writers with data-backed content guidelines"
    ],
    "tags": [
      "on-page-seo",
      "content-optimization",
      "serp-analysis",
      "entity-seo"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "ink-editor",
    "name": "INK Editor",
    "tagline": "AI writing and SEO co-pilot with real-time scoring",
    "websiteUrl": "https://inkforall.com",
    "descriptionMd": "INK Editor is an AI writing platform with a built-in SEO optimization engine that scores content in real time as you write. It uses its own AI model to suggest improvements for keyword relevance, readability, and competitive positioning. INK also offers an AI content shield feature intended to make generated content less detectable.",
    "pricingText": "Free tier available; paid plans from ~$39–$55/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Content creators who want simultaneous AI writing assistance and live SEO scoring in one editor",
    "notFor": "Teams needing deep backlink analysis or technical site auditing",
    "useCases": [
      "Write and optimize content simultaneously in one editor",
      "Score articles against competitors before publishing",
      "Generate AI drafts with SEO intent baked in",
      "Improve readability and keyword density of existing content"
    ],
    "tags": [
      "ai-writing",
      "content-scoring",
      "on-page-seo",
      "readability"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "wordlift",
    "name": "WordLift",
    "tagline": "Structured data and knowledge graph SEO for publishers",
    "websiteUrl": "https://wordlift.io",
    "descriptionMd": "WordLift is an AI-powered SEO tool that focuses on structured data, schema markup, and knowledge graph optimization to help search engines better understand content. It automatically generates JSON-LD schema, builds internal linking suggestions, and integrates entity-based SEO into WordPress and other CMSs. WordLift is particularly strong for news publishers and e-commerce sites that need rich result eligibility.",
    "pricingText": "Plans from ~$49–$79/mo; enterprise pricing available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Publishers and e-commerce sites that want to leverage structured data and entity SEO for rich results",
    "notFor": "Users looking for AI content generation or broad keyword research features",
    "useCases": [
      "Automatically add schema markup to articles and product pages",
      "Build a site-specific knowledge graph for entity SEO",
      "Generate internal linking recommendations",
      "Improve eligibility for Google rich results and featured snippets"
    ],
    "tags": [
      "structured-data",
      "schema-markup",
      "entity-seo",
      "knowledge-graph"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "seopital",
    "name": "SEOpital",
    "tagline": "AI content briefs built around NLP and entities",
    "websiteUrl": "https://seopital.com",
    "descriptionMd": "SEOpital is an AI SEO content platform that generates detailed content briefs by analyzing top SERP results using NLP and semantic analysis. It identifies the entities, topics, and questions that high-ranking pages cover and packages them into actionable briefs for writers or its built-in AI writer. The tool supports multiple languages.",
    "pricingText": "Paid plans from ~$29–$49/mo (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Multilingual SEO teams who need NLP-based content briefs and entity-driven optimization",
    "notFor": "Users who primarily need backlink analysis or rank tracking dashboards",
    "useCases": [
      "Create NLP-driven content briefs from SERP analysis",
      "Identify entities and semantic topics competitors cover",
      "Generate AI drafts from structured briefs",
      "Optimize content for multilingual search markets"
    ],
    "tags": [
      "content-brief",
      "nlp-seo",
      "entity-seo",
      "multilingual"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "rank-math-content-ai",
    "name": "Rank Math Content AI",
    "tagline": "WordPress SEO plugin with built-in AI optimization",
    "websiteUrl": "https://rankmath.com/content-ai",
    "descriptionMd": "Rank Math is a widely used WordPress SEO plugin that added a Content AI module providing keyword suggestions, content scoring, and AI writing assistance directly inside the WordPress editor. Content AI analyses the top SERP results for a target keyword and recommends topics, headings, questions, and entities to include. It works alongside Rank Math's technical SEO features.",
    "pricingText": "Rank Math Pro from ~$59/yr; Content AI credits sold separately or bundled (verify on site)",
    "hasFreeTier": true,
    "bestFor": "WordPress site owners who want on-page SEO, technical SEO, and AI content optimization in one plugin",
    "notFor": "Non-WordPress sites or teams that need a standalone content platform with advanced collaboration features",
    "useCases": [
      "Optimize posts with AI content suggestions inside WordPress editor",
      "Get keyword and entity recommendations while writing",
      "Track on-page SEO scores per post",
      "Automate schema markup and technical SEO within WordPress"
    ],
    "tags": [
      "wordpress",
      "on-page-seo",
      "ai-writing",
      "content-scoring"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "aiseo",
    "name": "AISEO",
    "tagline": "AI article writer with paraphrasing and SEO scoring",
    "websiteUrl": "https://aiseo.ai",
    "descriptionMd": "AISEO is an AI writing and optimization platform that offers long-form article generation, a paraphrasing tool, and a readability improver alongside basic SEO scoring. It targets bloggers and content marketers who want to produce SEO-friendly content at scale without a heavy workflow. The tool also includes a text humanizer aimed at reducing AI-content detection signals.",
    "pricingText": "Free tier available; paid plans from ~$15–$49/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Budget-conscious bloggers and affiliate marketers who need fast AI article drafts with basic SEO guidance",
    "notFor": "Enterprise content teams needing deep SERP analysis, competitor tracking, or workflow collaboration",
    "useCases": [
      "Generate long-form SEO articles from a keyword",
      "Paraphrase and rewrite existing content for freshness",
      "Improve readability scores before publishing",
      "Humanize AI text to reduce detection risk"
    ],
    "tags": [
      "ai-writing",
      "paraphrasing",
      "content-at-scale",
      "readability"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "search-atlas",
    "name": "Search Atlas",
    "tagline": "All-in-one SEO platform with AI content and auditing",
    "websiteUrl": "https://searchatlas.com",
    "descriptionMd": "Search Atlas is an all-in-one SEO software suite that combines keyword research, backlink analysis, site auditing, rank tracking, and AI-powered content creation in a single platform. Its Otto AI agent can automate on-page SEO tasks and content recommendations at scale. Search Atlas is positioned as an alternative to Semrush or Ahrefs with stronger native AI content features.",
    "pricingText": "Plans from ~$99/mo; enterprise tiers available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Digital agencies and in-house SEO teams that want a full-suite platform with AI automation and content tools",
    "notFor": "Solo bloggers or small sites needing only lightweight content optimization on a tight budget",
    "useCases": [
      "Automate on-page SEO recommendations with Otto AI agent",
      "Research keywords and analyze backlink profiles",
      "Run technical site audits and monitor rankings",
      "Generate SEO content briefs and AI-assisted drafts"
    ],
    "tags": [
      "all-in-one-seo",
      "ai-agent",
      "site-audit",
      "backlink-analysis"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "byword-ai",
    "name": "Byword",
    "tagline": "Bulk AI article generation for programmatic SEO",
    "websiteUrl": "https://byword.ai",
    "descriptionMd": "Byword is an AI content generation tool built specifically for producing large numbers of SEO articles quickly from keyword lists or CSV uploads. Users can upload hundreds of keywords and Byword will generate full articles for each, making it suited for programmatic SEO and large content site buildouts. Articles are structured for SEO with headings, meta descriptions, and FAQ sections.",
    "pricingText": "Plans from ~$99/mo for bulk credits (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Programmatic SEO practitioners and content site builders who need to publish hundreds of articles at scale",
    "notFor": "Teams needing deep content optimization, competitor SERP analysis, or editorial quality review workflows",
    "useCases": [
      "Generate hundreds of SEO articles from a keyword CSV",
      "Build out programmatic content sites rapidly",
      "Auto-generate meta descriptions and FAQ sections",
      "Scale affiliate or niche site content production"
    ],
    "tags": [
      "programmatic-seo",
      "bulk-content",
      "ai-writing",
      "content-at-scale"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "neuraltext",
    "name": "NeuralText",
    "tagline": "AI copywriting and SERP-based content clustering",
    "websiteUrl": "https://neuraltext.com",
    "descriptionMd": "NeuralText offers AI-assisted copywriting templates, keyword clustering, and SERP analysis tools designed to help content marketers plan and produce SEO content more efficiently. Its keyword clustering feature groups related keywords into topical clusters to guide content strategy. NeuralText also provides content briefs generated from analyzing top-ranking pages.",
    "pricingText": "Plans from ~$19–$49/mo (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Content strategists who want keyword clustering and SERP-based briefs combined with AI copywriting templates",
    "notFor": "Users needing full rank tracking, backlink analysis, or large-scale technical SEO auditing",
    "useCases": [
      "Cluster keywords into topical groups for content planning",
      "Generate content briefs from SERP analysis",
      "Write copy using AI templates for ads, headlines, and intros",
      "Map keyword clusters to existing site content"
    ],
    "tags": [
      "keyword-clustering",
      "content-brief",
      "ai-copywriting",
      "content-strategy"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "seowriting-ai",
    "name": "SEOWriting.ai",
    "tagline": "One-click SEO article generation with auto-publishing",
    "websiteUrl": "https://seowriting.ai",
    "descriptionMd": "SEOWriting.ai is a fast AI article writing tool that generates SEO-optimized blog posts, product descriptions, and affiliate content with a single click from a keyword input. It includes automatic WordPress publishing integration and supports bulk article generation for content sites. The tool offers image generation and internal linking features to streamline the publishing workflow.",
    "pricingText": "Free tier available with limited credits; paid plans from ~$14–$49/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Bloggers and affiliate site owners who want fast, one-click article generation with direct WordPress publishing",
    "notFor": "Teams requiring deep SERP analysis, advanced content briefs, or collaborative editing workflows",
    "useCases": [
      "Generate SEO blog posts with one click from a keyword",
      "Bulk-produce articles for niche or affiliate sites",
      "Auto-publish generated content to WordPress",
      "Create product descriptions optimized for search"
    ],
    "tags": [
      "ai-writing",
      "one-click-content",
      "wordpress-integration",
      "affiliate-seo"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "diib-seo",
    "name": "Diib",
    "tagline": "Automated SEO health monitoring with growth benchmarks",
    "websiteUrl": "https://diib.com",
    "descriptionMd": "Diib is an AI-driven SEO monitoring and growth analytics tool that connects to Google Analytics and Search Console to surface actionable insights and weekly growth alerts. It benchmarks a site's performance against industry competitors and provides a daily health score with prioritized recommendations. Diib is designed for small business owners who want clear, jargon-free SEO guidance.",
    "pricingText": "Free tier available; paid plan from ~$7.99–$29.99/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Small business owners who want simple, automated SEO health monitoring and competitor benchmarking",
    "notFor": "Advanced SEO professionals needing detailed keyword research, content optimization, or backlink prospecting",
    "useCases": [
      "Monitor weekly SEO health scores and alerts",
      "Benchmark site performance against industry competitors",
      "Get prioritized growth recommendations from Google Analytics data",
      "Track keyword ranking trends with minimal setup"
    ],
    "tags": [
      "seo-monitoring",
      "growth-analytics",
      "small-business",
      "benchmarking"
    ],
    "categorySlug": "ai-seo",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "moveworks",
    "name": "Moveworks",
    "tagline": "AI copilot for enterprise employee support automation",
    "websiteUrl": "https://www.moveworks.com",
    "descriptionMd": "Moveworks is an enterprise AI platform that automates IT and HR support by resolving employee requests in real time through natural language understanding. It integrates with systems like ServiceNow, Workday, and Slack to handle tickets, password resets, and policy questions autonomously. The platform is widely used by large enterprises seeking to reduce help desk volume.",
    "pricingText": "Enterprise pricing only; no public rates listed — contact sales for a quote",
    "hasFreeTier": false,
    "bestFor": "Large enterprises wanting to automate internal IT and HR helpdesk tickets",
    "notFor": "Small businesses or teams needing customer-facing (external) support automation",
    "useCases": [
      "IT ticket auto-resolution",
      "HR policy Q&A",
      "Employee onboarding support",
      "Software provisioning requests"
    ],
    "tags": [
      "enterprise",
      "it-support",
      "hr-automation",
      "employee-experience"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "gladly",
    "name": "Gladly",
    "tagline": "People-centered customer service platform with AI assist",
    "websiteUrl": "https://www.gladly.com",
    "descriptionMd": "Gladly is a customer service platform built around a people-centric model that stores all interactions in a single lifelong conversation thread rather than ticket-based silos. It includes AI-powered self-service (Sidekick) and agent assistance tools that surface relevant customer history and suggested responses. It is popular with mid-to-large retail and DTC brands.",
    "pricingText": "Pricing not publicly listed; typically quoted per agent per month — contact sales",
    "hasFreeTier": false,
    "bestFor": "Retail and DTC brands that want a unified customer conversation history with AI assist",
    "notFor": "Teams that need a lightweight or low-cost ticketing tool with basic AI features",
    "useCases": [
      "Omnichannel conversation threading",
      "AI self-service deflection",
      "Agent next-best-action suggestions",
      "Customer loyalty context surfacing"
    ],
    "tags": [
      "retail",
      "omnichannel",
      "dtc",
      "agent-assist"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "capacity",
    "name": "Capacity",
    "tagline": "AI-powered support automation platform for teams",
    "websiteUrl": "https://www.capacity.com",
    "descriptionMd": "Capacity is a helpdesk automation platform that uses AI to answer questions, automate workflows, and route requests for both customer and employee support. It offers a knowledge base, chatbot builder, and integrations with CRMs and ticketing systems. It targets mid-market companies across industries including financial services, healthcare, and education.",
    "pricingText": "Paid plans from ~$49/mo for small teams; enterprise plans require a quote (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Mid-market companies wanting one platform for both customer and internal employee support",
    "notFor": "Pure developer or API-first teams who need a headless chatbot infrastructure",
    "useCases": [
      "FAQ deflection from live agents",
      "Employee IT and HR helpdesk",
      "Knowledge base management",
      "Workflow automation triggers"
    ],
    "tags": [
      "automation",
      "knowledge-base",
      "mid-market",
      "multi-use"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "yellow-ai",
    "name": "Yellow.ai",
    "tagline": "Enterprise conversational AI for CX across voice and chat",
    "websiteUrl": "https://yellow.ai",
    "descriptionMd": "Yellow.ai is an enterprise-grade conversational AI platform supporting both chat and voice bots across 35+ languages and channels including WhatsApp, web, and telephony. It provides pre-built industry templates, dynamic automation workflows, and an agent assist layer for human handoff. The platform is widely adopted in global enterprise markets.",
    "pricingText": "Enterprise pricing; no public tiers — contact sales for custom quotes",
    "hasFreeTier": false,
    "bestFor": "Global enterprises needing multilingual voice and chat automation across high-volume support",
    "notFor": "Startups or small teams needing quick self-serve setup with transparent monthly pricing",
    "useCases": [
      "Multilingual chatbot deployment",
      "Voice IVR modernization",
      "WhatsApp customer support",
      "Agent handoff with context transfer"
    ],
    "tags": [
      "enterprise",
      "voice-ai",
      "multilingual",
      "omnichannel"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "botpress",
    "name": "Botpress",
    "tagline": "Developer-friendly AI chatbot builder with LLM support",
    "websiteUrl": "https://botpress.com",
    "descriptionMd": "Botpress is a developer-friendly chatbot platform with a visual flow builder and LLM-powered natural language understanding baked in. It offers a cloud-hosted version as well as self-hostable options, making it popular with technical teams who want control over their bot logic. The platform supports integrations with Zendesk, Salesforce, Slack, and more.",
    "pricingText": "Free tier available; paid plans scale with usage (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Developer teams wanting a flexible, LLM-native chatbot builder with self-host or cloud options",
    "notFor": "Non-technical teams looking for a fully managed, no-code customer support bot out of the box",
    "useCases": [
      "Custom customer support chatbot building",
      "Lead qualification bots",
      "Internal knowledge bots",
      "Multichannel bot deployment"
    ],
    "tags": [
      "developer-friendly",
      "open-source",
      "llm-native",
      "chatbot-builder"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "voiceflow",
    "name": "Voiceflow",
    "tagline": "Collaborative platform to design and deploy AI agents",
    "websiteUrl": "https://www.voiceflow.com",
    "descriptionMd": "Voiceflow is a design and deployment platform for conversational AI agents, allowing product and CX teams to collaboratively build, test, and publish chatbots and voice assistants without heavy engineering. It supports web chat and custom API integrations, with LLM steps built into the canvas. Many companies use it to prototype and ship support agents faster.",
    "pricingText": "Free sandbox plan available; paid team plans from ~$80/editor/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "CX and product teams who want to collaboratively design and ship AI support agents visually",
    "notFor": "Teams that need a fully managed SaaS support platform with built-in ticketing and agent queues",
    "useCases": [
      "Support bot prototyping and deployment",
      "Voice assistant design",
      "Multichannel agent publishing",
      "LLM-powered FAQ flows"
    ],
    "tags": [
      "visual-builder",
      "voice",
      "collaboration",
      "prototyping"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "kommunicate",
    "name": "Kommunicate",
    "tagline": "AI chatbot plus live chat for customer support teams",
    "websiteUrl": "https://www.kommunicate.io",
    "descriptionMd": "Kommunicate is a customer support platform that combines AI-powered chatbots with live chat, enabling businesses to automate first-line support while seamlessly handing off to human agents. It integrates with Dialogflow, Amazon Lex, and other NLP engines, as well as CRMs like HubSpot. It targets SMBs and mid-market companies wanting hybrid bot-human support.",
    "pricingText": "Plans from ~$100/mo; free trial available (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "SMBs and mid-market teams wanting a hybrid chatbot-plus-live-chat support setup with NLP flexibility",
    "notFor": "Enterprise teams needing deep workforce management, analytics, or large-scale telephony integration",
    "useCases": [
      "Bot-to-agent handoff",
      "Dialogflow bot deployment",
      "In-app customer support widget",
      "Lead capture and routing"
    ],
    "tags": [
      "hybrid-support",
      "dialogflow",
      "live-chat",
      "smb"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "landbot",
    "name": "Landbot",
    "tagline": "No-code conversational chatbot builder for web and WhatsApp",
    "websiteUrl": "https://landbot.io",
    "descriptionMd": "Landbot is a no-code chatbot builder that lets teams create interactive conversational flows for websites, WhatsApp, and Facebook Messenger without coding. It is widely used for lead generation, customer onboarding, and support triage, and supports native integrations with HubSpot, Salesforce, and Zapier. The platform has added AI-powered features for dynamic responses.",
    "pricingText": "Free plan available with limited chats; paid plans from ~$45/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Marketing and support teams wanting a no-code bot builder for web chat and WhatsApp flows",
    "notFor": "Teams needing enterprise-grade AI reasoning, deep ticketing integration, or complex agent routing",
    "useCases": [
      "Lead qualification flows",
      "Customer support triage",
      "WhatsApp conversational campaigns",
      "Onboarding questionnaires"
    ],
    "tags": [
      "no-code",
      "whatsapp",
      "lead-generation",
      "conversational-forms"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "my-ask-ai",
    "name": "My AskAI",
    "tagline": "Instant AI support agent trained on your own content",
    "websiteUrl": "https://myaskai.com",
    "descriptionMd": "My AskAI lets businesses create a custom AI support agent by uploading their documentation, help articles, and website content, enabling it to answer customer questions accurately based on that knowledge. It embeds as a chat widget and integrates with Intercom, Zendesk, and other platforms as a deflection layer. It is positioned as a fast, low-cost way to add AI self-service on top of existing help content.",
    "pricingText": "Free plan available with limited conversations; paid plans ~$19–$99/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Small to mid-sized teams wanting a quick AI deflection layer trained on their existing help docs",
    "notFor": "Enterprises needing custom LLM fine-tuning, complex escalation logic, or voice support",
    "useCases": [
      "Help center deflection",
      "Embedded website chatbot",
      "Intercom/Zendesk AI add-on",
      "Documentation Q&A bot"
    ],
    "tags": [
      "knowledge-base-ai",
      "deflection",
      "quick-setup",
      "smb"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "verloop-io",
    "name": "Verloop.io",
    "tagline": "Conversational AI platform for customer support at scale",
    "websiteUrl": "https://verloop.io",
    "descriptionMd": "Verloop.io is a conversational AI platform focused on automating customer support across chat, WhatsApp, and voice for high-volume operations. It offers intent detection, multilingual support, agent assist, and analytics for tracking deflection rates. The platform serves industries including e-commerce, banking, and telecom.",
    "pricingText": "Enterprise pricing; no public rates — contact sales for a custom quote",
    "hasFreeTier": false,
    "bestFor": "High-volume customer support teams needing multilingual automation",
    "notFor": "Small businesses looking for a self-serve, transparent-pricing chatbot tool",
    "useCases": [
      "WhatsApp support automation",
      "Voice bot for call deflection",
      "E-commerce order support",
      "Multilingual customer queries"
    ],
    "tags": [
      "voice-bot",
      "whatsapp",
      "enterprise",
      "multilingual"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "espressive-barista",
    "name": "Espressive Barista",
    "tagline": "AI virtual agent for enterprise employee self-service",
    "websiteUrl": "https://www.espressive.com",
    "descriptionMd": "Espressive Barista is an AI-powered virtual support agent designed specifically for enterprise employee self-service across IT, HR, and facilities. It uses a proprietary Employee Language Cloud to understand workplace-specific language and integrates with ITSM platforms like ServiceNow. The platform is designed to deflect a significant share of help desk tickets automatically.",
    "pricingText": "Enterprise pricing only; no public tiers — contact sales for pricing",
    "hasFreeTier": false,
    "bestFor": "Large enterprises wanting to automate internal employee IT and HR requests with deep ITSM integration",
    "notFor": "Companies needing external customer-facing support automation or a lightweight SMB chatbot",
    "useCases": [
      "IT ticket deflection",
      "HR benefits Q&A",
      "Software access requests",
      "Facilities and workplace queries"
    ],
    "tags": [
      "enterprise",
      "employee-self-service",
      "itsm",
      "it-helpdesk"
    ],
    "categorySlug": "ai-customer-support",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "steve-ai",
    "name": "Steve.ai",
    "tagline": "Convert text, blogs and audio into animated or live videos",
    "websiteUrl": "https://www.steve.ai",
    "descriptionMd": "Steve.ai transforms written content and audio into videos using AI-driven animation and live-action templates. It supports bulk video creation and offers a library of licensed assets. The platform is aimed at marketers and content teams who need fast video output without editing skills.",
    "pricingText": "Paid plans from ~$20/mo; free trial may be available with limited exports (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Marketers converting blog posts or scripts into social videos quickly",
    "notFor": "Cinematic or high-production-value video projects",
    "useCases": [
      "Blog-to-video conversion",
      "Social media video ads",
      "Explainer videos",
      "Bulk video generation"
    ],
    "tags": [
      "text-to-video",
      "animation",
      "marketing",
      "bulk-creation"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "wisecut",
    "name": "Wisecut",
    "tagline": "Auto-edit long videos with AI silence removal and smart cuts",
    "websiteUrl": "https://www.wisecut.video",
    "descriptionMd": "Wisecut uses AI to automatically remove silences, add background music, and generate subtitles from uploaded video footage. It is designed for vloggers, educators, and YouTubers who want to reduce manual editing time. The tool also adds automatic jump cuts and facial tracking to keep subjects centered.",
    "pricingText": "Free tier available with watermark; paid plans from ~$10/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "YouTubers and educators who want to auto-cut silences from talking-head videos",
    "notFor": "Generating video from scratch or AI avatar content",
    "useCases": [
      "Silence removal from vlogs",
      "Auto subtitle generation",
      "Background music syncing",
      "Jump-cut editing"
    ],
    "tags": [
      "auto-editing",
      "silence-removal",
      "subtitles",
      "youtube"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "genmo",
    "name": "Genmo",
    "tagline": "AI-powered text-to-video and creative video generation",
    "websiteUrl": "https://www.genmo.ai",
    "descriptionMd": "Genmo is an AI creative platform that generates short video clips from text prompts, with a focus on artistic and experimental outputs. It also supports image animation and creative video remixing. The tool is popular among artists and researchers exploring generative video.",
    "pricingText": "Free tier with limited credits; paid plans available (pricing subject to change)",
    "hasFreeTier": true,
    "bestFor": "Artists and experimenters generating short creative video clips from text",
    "notFor": "Professional marketing videos or long-form content production",
    "useCases": [
      "Text-to-video art generation",
      "Image animation",
      "Creative video remixing",
      "AI art experimentation"
    ],
    "tags": [
      "text-to-video",
      "generative-ai",
      "art",
      "creative"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "haiper",
    "name": "Haiper",
    "tagline": "High-quality AI video generation with smooth motion",
    "websiteUrl": "https://haiper.ai",
    "descriptionMd": "Haiper is a text-to-video and image-to-video generation model developed by a UK-based AI startup with DeepMind alumni. It emphasizes smooth motion, high visual fidelity, and short-clip generation suitable for creative and commercial use. The platform offers a web interface for generating short clips.",
    "pricingText": "Free tier with watermark and limited generations; paid plans available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Creators wanting high-motion-quality short AI video clips from text or images",
    "notFor": "Long-form video production or talking-head avatar videos",
    "useCases": [
      "Text-to-video clip generation",
      "Image animation",
      "Social media short clips",
      "Creative visual content"
    ],
    "tags": [
      "text-to-video",
      "image-to-video",
      "motion",
      "generative-ai"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "vidu",
    "name": "Vidu",
    "tagline": "AI video model generating high-fidelity short clips",
    "websiteUrl": "https://www.vidu.io",
    "descriptionMd": "Vidu is a text-to-video and image-to-video AI model developed by Shengshu Technology, capable of generating short video clips with high consistency and motion quality. It supports prompt-based generation and reference-image conditioning. The model gained attention for its cinematic output quality.",
    "pricingText": "Credit-based pricing; free credits on signup; paid top-ups available (pricing subject to change)",
    "hasFreeTier": true,
    "bestFor": "Creators seeking AI-generated clips with cinematic motion quality",
    "notFor": "Avatar or talking-head video generation",
    "useCases": [
      "Cinematic short video generation",
      "Image-to-video animation",
      "Story visualization",
      "Creative content production"
    ],
    "tags": [
      "text-to-video",
      "image-to-video",
      "cinematic",
      "generative-ai"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hailuo-ai",
    "name": "Hailuo AI",
    "tagline": "MiniMax's AI video generator with realistic motion",
    "websiteUrl": "https://hailuoai.video",
    "descriptionMd": "Hailuo AI is the video generation product from AI company MiniMax, known for producing realistic motion, accurate physics simulation, and high-quality short clips from text prompts. It gained viral popularity for its subject-consistency and camera motion controls. The platform is accessible via a web interface and API.",
    "pricingText": "Free tier with daily credits; paid plans available for higher generation limits (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Creators who want realistic physics and consistent character motion in AI video clips",
    "notFor": "Long-form or talking-head corporate video production",
    "useCases": [
      "Realistic motion video generation",
      "Character-consistent clips",
      "Camera movement control",
      "Social content creation"
    ],
    "tags": [
      "text-to-video",
      "realistic-motion",
      "minimax",
      "generative-ai"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "deepbrain-ai",
    "name": "DeepBrain AI",
    "tagline": "AI avatar videos with photorealistic human presenters",
    "websiteUrl": "https://www.deepbrain.io",
    "descriptionMd": "DeepBrain AI creates studio-quality videos using photorealistic AI avatars that lip-sync to text scripts, supporting 80+ languages. It is widely used in enterprise training, news broadcasting simulations, and e-learning. The platform offers custom avatar creation and teleprompter-style workflows.",
    "pricingText": "Paid plans from ~$30/mo; no permanent free tier, trial access may be available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Enterprises and broadcasters needing photorealistic AI presenter videos at scale",
    "notFor": "Creative generative video or cinematic clip production",
    "useCases": [
      "Corporate training videos",
      "News-style AI broadcasts",
      "E-learning content",
      "Multilingual explainer videos"
    ],
    "tags": [
      "ai-avatar",
      "text-to-video",
      "enterprise",
      "multilingual"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "elai-io",
    "name": "Elai.io",
    "tagline": "Create AI avatar videos from text in 75+ languages",
    "websiteUrl": "https://elai.io",
    "descriptionMd": "Elai.io is an AI video platform that generates presenter-led videos using AI avatars from typed scripts, supporting 75+ languages and many avatar options. It integrates with PowerPoint and PDF imports for quick slide-to-video conversion. The tool targets L&D teams, marketers, and agencies needing scalable video localization.",
    "pricingText": "Free trial with limited credits; paid plans from ~$29/mo (pricing subject to change)",
    "hasFreeTier": false,
    "bestFor": "L&D teams converting training materials into multilingual AI avatar videos",
    "notFor": "Creative or cinematic video generation without a presenter format",
    "useCases": [
      "Training video creation",
      "Slide-to-video conversion",
      "Multilingual video localization",
      "Marketing explainers"
    ],
    "tags": [
      "ai-avatar",
      "multilingual",
      "e-learning",
      "text-to-video"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "synthesys",
    "name": "Synthesys",
    "tagline": "AI human video and voiceover synthesis for commercial use",
    "websiteUrl": "https://synthesys.io",
    "descriptionMd": "Synthesys offers AI-generated human presenter videos and text-to-voiceover tools built for commercial content production. It features a library of AI humans and voice actors, with licensing that covers commercial use of generated outputs. The platform supports script-to-video workflows with customizable backgrounds.",
    "pricingText": "Paid plans from ~$35/mo; free trial reported but no permanent free tier (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Agencies and content creators needing commercially licensed AI presenter and voiceover videos",
    "notFor": "Generative creative video or users needing a free ongoing tier",
    "useCases": [
      "Commercial product videos",
      "AI voiceover generation",
      "Presenter-led explainers",
      "Ad creative production"
    ],
    "tags": [
      "ai-avatar",
      "voiceover",
      "commercial",
      "text-to-video"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "creatify-ai",
    "name": "Creatify",
    "tagline": "AI-generated video ads from product URLs in minutes",
    "websiteUrl": "https://creatify.ai",
    "descriptionMd": "Creatify specializes in generating short-form video advertisements by importing a product URL, extracting key details, and auto-producing multiple ad variants with AI avatars and voiceovers. It is optimized for e-commerce brands and performance marketers running A/B ad tests at scale. The platform supports batch generation of many video variants.",
    "pricingText": "Free trial with limited exports; paid plans from ~$39/mo (verify on site)",
    "hasFreeTier": false,
    "bestFor": "E-commerce brands and performance marketers generating bulk AI video ad variants",
    "notFor": "Long-form content, tutorials, or non-commercial creative video",
    "useCases": [
      "Product video ad generation",
      "E-commerce ad creative",
      "A/B video variant testing",
      "UGC-style ad production"
    ],
    "tags": [
      "ai-ads",
      "e-commerce",
      "video-ads",
      "ai-avatar"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "munch-ai",
    "name": "Munch",
    "tagline": "AI-powered long video repurposing into viral short clips",
    "websiteUrl": "https://www.munch.com",
    "descriptionMd": "Munch uses AI to analyze long-form video content and automatically extract the most engaging segments for repurposing into short clips for TikTok, Reels, and YouTube Shorts. It identifies key topics, generates captions, and scores clips by predicted virality. The platform integrates trending topic analysis to maximize clip reach.",
    "pricingText": "Paid plans from ~$49/mo; limited free trial available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Podcasters and content creators repurposing long videos into platform-optimized short clips",
    "notFor": "Generating video from scratch or producing AI avatar content",
    "useCases": [
      "Podcast clip extraction",
      "Long-to-short video repurposing",
      "Social media clip scheduling",
      "Virality scoring"
    ],
    "tags": [
      "repurposing",
      "short-clips",
      "social-media",
      "auto-editing"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "klap-app",
    "name": "Klap",
    "tagline": "Turn YouTube videos into TikTok-ready clips automatically",
    "websiteUrl": "https://klap.app",
    "descriptionMd": "Klap takes a YouTube video URL and automatically detects the most engaging moments, crops to vertical format, adds animated captions, and exports clips ready for TikTok, Reels, and Shorts. It focuses specifically on the YouTube-to-short-clip pipeline with minimal user input needed. The tool is popular among solo creators managing multiple platforms.",
    "pricingText": "Free tier with limited exports and watermark; paid plans from ~$29/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Solo YouTubers who want to auto-convert long videos into captioned vertical short clips",
    "notFor": "Generating original video content or producing avatar/presenter videos",
    "useCases": [
      "YouTube-to-TikTok conversion",
      "Auto vertical cropping",
      "Animated caption generation",
      "Multi-platform clip distribution"
    ],
    "tags": [
      "repurposing",
      "short-clips",
      "youtube",
      "auto-captions"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "2short-ai",
    "name": "2short.ai",
    "tagline": "AI clip extractor turning long videos into shorts",
    "websiteUrl": "https://2short.ai",
    "descriptionMd": "2short.ai automatically identifies the best moments in long-form videos and produces short-form clips with styled captions and vertical formatting for social media. It uses AI to score engagement potential and select highlights without manual review. The tool is aimed at YouTubers, streamers, and podcast creators.",
    "pricingText": "Free tier with limited exports; paid plans from ~$17/mo (pricing subject to change)",
    "hasFreeTier": true,
    "bestFor": "Streamers and YouTubers extracting viral-potential clips from long gaming or podcast sessions",
    "notFor": "AI avatar creation, text-to-video generation, or professional ad production",
    "useCases": [
      "Gaming highlight extraction",
      "Podcast clip creation",
      "Auto caption styling",
      "YouTube Shorts production"
    ],
    "tags": [
      "repurposing",
      "clip-extraction",
      "short-clips",
      "auto-captions"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "argil-ai",
    "name": "Argil",
    "tagline": "Clone yourself as an AI avatar for automated video",
    "websiteUrl": "https://www.argil.ai",
    "descriptionMd": "Argil lets creators train a personalized AI avatar clone of themselves from a short video sample, then generate new videos just by typing a script. It is designed for content creators who want to produce high volumes of talking-head content without recording every time. The platform supports multiple languages and voice cloning alongside the visual avatar.",
    "pricingText": "Paid plans required for avatar training; from ~$49/mo (subject to change)",
    "hasFreeTier": false,
    "bestFor": "Content creators and founders who want to scale talking-head video output using a personal AI clone",
    "notFor": "Generative creative video, cinematic clips, or users needing a free tier",
    "useCases": [
      "Personal avatar cloning",
      "Script-to-video at scale",
      "Multilingual content duplication",
      "Newsletter-to-video conversion"
    ],
    "tags": [
      "ai-avatar",
      "avatar-clone",
      "talking-head",
      "creator-tools"
    ],
    "categorySlug": "ai-video",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "deepgram",
    "name": "Deepgram",
    "tagline": "Real-time speech-to-text API built for developers",
    "websiteUrl": "https://deepgram.com",
    "descriptionMd": "Deepgram provides speech recognition APIs optimized for speed and accuracy, including real-time transcription and pre-recorded audio processing. It offers multiple models including Nova, which competes strongly on accuracy benchmarks. Developers can fine-tune models on domain-specific vocabulary and access features like diarization, punctuation, and sentiment analysis.",
    "pricingText": "Pay-as-you-go from ~$0.0043/min; free tier with credits available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers building real-time voice apps, call analytics, or transcription pipelines via API",
    "notFor": "Non-technical users who need a no-code interface without engineering effort",
    "useCases": [
      "Real-time meeting transcription",
      "Call center analytics",
      "Voice-powered app development",
      "Podcast transcription at scale"
    ],
    "tags": [
      "transcription",
      "speech-to-text",
      "api",
      "real-time"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "assemblyai",
    "name": "AssemblyAI",
    "tagline": "Speech AI platform with transcription and audio intelligence",
    "websiteUrl": "https://www.assemblyai.com",
    "descriptionMd": "AssemblyAI offers a speech-to-text API with advanced features including automatic chapter detection, sentiment analysis, topic detection, and PII redaction built on top of transcription. Its models deliver high accuracy across diverse audio conditions. The platform is developer-focused with SDKs for Python, JavaScript, Java, Go, and Ruby.",
    "pricingText": "Pay-as-you-go from ~$0.37/hour; free tier with limited hours for testing (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who need transcription plus downstream audio intelligence like summaries and topics in one API",
    "notFor": "Users needing a consumer-facing UI without coding",
    "useCases": [
      "Podcast chapter generation",
      "Meeting summarization",
      "Compliance monitoring in call centers",
      "Content moderation on audio platforms"
    ],
    "tags": [
      "transcription",
      "audio-intelligence",
      "api",
      "summarization"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "replica-studios",
    "name": "Replica Studios",
    "tagline": "AI voice actors for games, film, and interactive media",
    "websiteUrl": "https://replicastudios.com",
    "descriptionMd": "Replica Studios specializes in AI voice performance designed for entertainment, offering a library of expressive voice actors suitable for game dialogue, animation, and interactive narratives. The platform supports emotion and delivery control so creators can direct performances without recording sessions. It also offers voice cloning for custom character voices.",
    "pricingText": "Subscription plans from ~$24/mo; free trial with limited credits typically available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Game developers and animators who need expressive, directable AI voice performances for characters",
    "notFor": "Business voiceover or podcast narration where neutral, professional tone is the priority",
    "useCases": [
      "Game character dialogue generation",
      "Animation voice prototyping",
      "Interactive story narration",
      "Indie film temp voice tracks"
    ],
    "tags": [
      "voice-acting",
      "game-audio",
      "tts",
      "entertainment"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "altered-studio",
    "name": "Altered Studio",
    "tagline": "Professional voice transformation and AI dubbing platform",
    "websiteUrl": "https://www.altered.ai",
    "descriptionMd": "Altered Studio lets users record their own voice and transform it into a selection of professional AI voices while preserving timing and prosody. It is aimed at voiceover artists, content creators, and post-production teams who want quick character voice options. The platform also supports script-to-speech and batch audio processing.",
    "pricingText": "Plans from ~$29/mo; free trial available (verify current pricing on site)",
    "hasFreeTier": true,
    "bestFor": "Voiceover artists and creators who want to transform a single recorded performance into multiple character voices",
    "notFor": "Large-scale enterprise transcription or speech analytics workflows",
    "useCases": [
      "Character voice prototyping",
      "Audiobook narration in multiple voices",
      "Game NPC voice production",
      "Remote voiceover collaboration"
    ],
    "tags": [
      "voice-transformation",
      "tts",
      "voiceover",
      "post-production"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "respeecher",
    "name": "Respeecher",
    "tagline": "High-fidelity voice cloning for film and broadcast",
    "websiteUrl": "https://www.respeecher.com",
    "descriptionMd": "Respeecher focuses on professional-grade voice cloning used in high-profile film, TV, and gaming productions, known for recreating historical or unavailable voices with high fidelity. It has been used in major productions and requires audio samples to clone a target voice. The platform is positioned at the premium end of the market with an ethical approval process for cloning.",
    "pricingText": "Custom enterprise pricing; no standard public self-serve plan — contact sales (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Film and TV productions that need to recreate a specific actor's voice with broadcast-quality fidelity",
    "notFor": "Small creators or indie projects with limited budgets needing quick self-serve voice synthesis",
    "useCases": [
      "De-aging actor voices in film",
      "Recreating historical speech recordings",
      "Game protagonist re-voicing after reshoots",
      "Broadcast localization with original voice feel"
    ],
    "tags": [
      "voice-cloning",
      "film",
      "broadcast",
      "enterprise"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "cartesia",
    "name": "Cartesia",
    "tagline": "Ultra-low latency real-time voice synthesis for AI agents",
    "websiteUrl": "https://cartesia.ai",
    "descriptionMd": "Cartesia is a voice AI company focused on state-space model architectures that enable extremely low-latency speech synthesis, making it well-suited for real-time conversational AI agents and voice bots. Its Sonic model is designed for very low time-to-first-audio, enabling natural turn-taking in AI phone and assistant applications. The API is developer-oriented with voice cloning and multilingual support.",
    "pricingText": "Pay-as-you-go API pricing; free tier with credits for testing reportedly available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Developers building real-time AI voice agents and conversational bots where latency is critical",
    "notFor": "Users who need a no-code studio interface for producing polished narration or podcast audio",
    "useCases": [
      "AI phone agent voice",
      "Real-time customer support bots",
      "Interactive voice response (IVR) systems",
      "Conversational AI companion apps"
    ],
    "tags": [
      "low-latency",
      "tts",
      "api",
      "voice-agents"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "rime-ai",
    "name": "Rime",
    "tagline": "Expressive English TTS built for voice AI products",
    "websiteUrl": "https://rime.ai",
    "descriptionMd": "Rime specializes in high-quality, expressive text-to-speech with a focus on natural-sounding voices in conversational contexts. The API is designed for product teams building voice AI features and emphasizes prosody control and voice consistency. Rime offers a range of voice styles and targets developers integrating speech into SaaS products.",
    "pricingText": "API-based pricing; free trial tier reportedly available (verify current plans on site)",
    "hasFreeTier": true,
    "bestFor": "Product teams building voice AI features who prioritize natural-sounding prosody",
    "notFor": "Multilingual global projects requiring a very wide range of non-English language voices",
    "useCases": [
      "In-app voice assistants",
      "Accessibility reading features",
      "E-learning narration",
      "Notification and alert audio"
    ],
    "tags": [
      "tts",
      "api",
      "voice-ai",
      "english"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "kits-ai",
    "name": "Kits.ai",
    "tagline": "AI voice conversion and cloning for music creators",
    "websiteUrl": "https://www.kits.ai",
    "descriptionMd": "Kits.ai provides AI voice conversion tools aimed at musicians and music producers, allowing them to convert vocals into AI-generated voice models including licensed artist voices. It supports real-time and offline voice conversion and lets creators build and share custom voice models. The platform emphasizes an ethical, royalty-sharing model for licensed voices.",
    "pricingText": "Free tier with limited conversions; paid plans from ~$9.99/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Music producers and singers who want to experiment with AI vocal transformations and licensed voice models",
    "notFor": "Business narration, podcast, or speech analytics use cases outside of music production",
    "useCases": [
      "Vocal style transfer in music production",
      "Creating demo tracks with AI voices",
      "Backing vocal generation",
      "Voice model training for musicians"
    ],
    "tags": [
      "voice-conversion",
      "music",
      "vocal-ai",
      "voice-cloning"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "typecast",
    "name": "Typecast",
    "tagline": "AI voice and video platform with virtual character actors",
    "websiteUrl": "https://typecast.ai",
    "descriptionMd": "Typecast offers a library of AI voice actors with distinct personalities and visual avatars, enabling creators to produce narrated videos and audio content without recording. It is particularly popular for e-learning, YouTube content, and corporate training videos. Users can adjust emotion, speed, and pitch for each line of dialogue.",
    "pricingText": "Free tier with watermark or limited exports; paid plans from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "E-learning creators and YouTube content producers who need talking character videos without camera or microphone",
    "notFor": "Developers needing a raw API for programmatic voice synthesis at scale",
    "useCases": [
      "Online course narration with avatar",
      "YouTube explainer video production",
      "Corporate training content",
      "Animated marketing videos"
    ],
    "tags": [
      "tts",
      "avatar",
      "e-learning",
      "video"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "gladia",
    "name": "Gladia",
    "tagline": "Fast multilingual transcription API with audio intelligence",
    "websiteUrl": "https://www.gladia.io",
    "descriptionMd": "Gladia provides a speech-to-text API powered by Whisper and proprietary enhancements, offering fast transcription with speaker diarization, translation, and summarization across 100+ languages. It is positioned as a developer-friendly alternative to in-house Whisper deployments with managed infrastructure and higher-level audio intelligence features. The API supports both real-time streaming and batch file processing.",
    "pricingText": "Pay-as-you-go; free tier with monthly hours included (verify current rates on site)",
    "hasFreeTier": true,
    "bestFor": "Developers who want managed Whisper-quality multilingual transcription without infrastructure overhead",
    "notFor": "Non-technical users needing a polished consumer app interface for transcription",
    "useCases": [
      "Multilingual meeting transcription",
      "Subtitle generation for international video",
      "Customer call analysis",
      "Real-time live captioning integration"
    ],
    "tags": [
      "transcription",
      "multilingual",
      "api",
      "whisper"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "sonix",
    "name": "Sonix",
    "tagline": "Automated transcription with translation and subtitle export",
    "websiteUrl": "https://sonix.ai",
    "descriptionMd": "Sonix is an automated transcription platform with an in-browser editor that lets users correct transcripts, add speaker labels, and export to formats including SRT and VTT for subtitles. It supports over 40 languages for transcription and offers automated translation into additional languages. It targets journalists, researchers, and video producers who need accurate, editable transcripts.",
    "pricingText": "Pay-as-you-go ~$10/hour or subscription from ~$22/mo; no permanent free tier (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Journalists, researchers, and video teams who need accurate multilingual transcripts with an easy editing interface",
    "notFor": "Developers needing a programmatic API integration without a UI-first workflow",
    "useCases": [
      "Interview transcription for journalism",
      "Qualitative research transcript editing",
      "Subtitle file generation for video",
      "Multilingual content translation from audio"
    ],
    "tags": [
      "transcription",
      "subtitles",
      "translation",
      "editing"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "audo-ai",
    "name": "Audo Studio",
    "tagline": "One-click AI background noise removal for audio and video",
    "websiteUrl": "https://audo.ai",
    "descriptionMd": "Audo Studio offers automated audio enhancement that removes background noise, echo, and room reverb from recordings with a single click. It targets content creators, podcasters, and video producers who record in non-ideal acoustic environments. The tool processes audio files via a web app and also provides an API for integration into other platforms.",
    "pricingText": "Free tier with limited minutes per month; paid plans from ~$9/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Podcasters and video creators who need quick noise removal without manual audio editing skills",
    "notFor": "Professional audio engineers who require fine-grained manual EQ and multitrack mixing control",
    "useCases": [
      "Podcast episode cleanup",
      "Remote interview audio enhancement",
      "YouTube video audio repair",
      "Webinar recording noise removal"
    ],
    "tags": [
      "noise-removal",
      "audio-enhancement",
      "podcast",
      "api"
    ],
    "categorySlug": "ai-voice",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "closerscopy",
    "name": "ClosersCopy",
    "tagline": "Long-form AI copywriter built for sales and persuasion",
    "websiteUrl": "https://www.closerscopy.com",
    "descriptionMd": "ClosersCopy is an AI writing platform focused on sales copy, long-form content, and persuasive writing frameworks. It offers a large library of copy frameworks and workflows designed by professional copywriters. Unlike generic AI writers, it emphasizes conversion-oriented output for marketers and sales teams.",
    "pricingText": "From ~$49.99/mo (lifetime deals have been offered; verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Marketers and copywriters who need persuasion-focused long-form sales pages and email sequences",
    "notFor": "Casual bloggers or users wanting a free tier to test before committing",
    "useCases": [
      "Sales page copywriting",
      "Email sequence drafting",
      "Ad copy generation",
      "Long-form blog articles"
    ],
    "tags": [
      "copywriting",
      "sales-copy",
      "long-form",
      "marketing"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "longshot-ai",
    "name": "LongShot AI",
    "tagline": "Fact-grounded AI content for SEO blogs and articles",
    "websiteUrl": "https://www.longshot.ai",
    "descriptionMd": "LongShot AI specializes in generating long-form blog content with a focus on factual accuracy and SEO optimization. It includes a built-in fact-checking layer that cross-references claims against web sources, reducing hallucination risk. The platform targets content marketers who need research-backed articles at scale.",
    "pricingText": "Free tier available (limited credits); Pro from ~$29/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Content marketers who need SEO-optimized blog posts with a layer of factual grounding",
    "notFor": "Creative fiction writers or those who need highly stylized, non-informational content",
    "useCases": [
      "SEO blog post generation",
      "Fact-checked article drafting",
      "Content brief creation",
      "Social media snippets from long-form"
    ],
    "tags": [
      "seo",
      "long-form",
      "fact-checking",
      "blogging"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "katteb",
    "name": "Katteb",
    "tagline": "AI writer that cites sources and verifies facts automatically",
    "websiteUrl": "https://katteb.com",
    "descriptionMd": "Katteb is an AI content writer that distinguishes itself by citing sources inline as it generates text, making it useful for research-heavy content. It supports multiple languages and is designed for writers who need accountability and verifiability in their outputs. The platform targets journalists, researchers, and professional content teams.",
    "pricingText": "Free trial available; paid plans from ~$19/mo (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Writers and researchers who need cited, source-backed content with multilingual support",
    "notFor": "Users looking for purely creative or fictional writing assistance without a research angle",
    "useCases": [
      "Research article writing",
      "Multilingual content creation",
      "Cited blog posts",
      "News-style content drafting"
    ],
    "tags": [
      "fact-checking",
      "citations",
      "multilingual",
      "research"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "wordhero",
    "name": "WordHero",
    "tagline": "Unlimited AI content generation with 70+ writing tools",
    "websiteUrl": "https://wordhero.co",
    "descriptionMd": "WordHero offers a broad suite of over 70 AI writing tools covering blog posts, social media, emails, and marketing copy. It is known for offering unlimited word generation on paid plans, making it attractive for high-volume content producers. The interface is straightforward and targets small business owners and solo content creators.",
    "pricingText": "From ~$49/mo or ~$348/yr for unlimited words (verify on site); no permanent free tier",
    "hasFreeTier": false,
    "bestFor": "High-volume content creators and small business owners who want unlimited AI writing without per-word caps",
    "notFor": "Users who need advanced SEO integration or deep long-form document editing workflows",
    "useCases": [
      "Blog post drafting",
      "Social media captions",
      "Email marketing copy",
      "Product descriptions"
    ],
    "tags": [
      "unlimited-writing",
      "marketing-copy",
      "small-business",
      "content-creation"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "hoppy-copy",
    "name": "Hoppy Copy",
    "tagline": "AI email marketing copywriter for campaigns and sequences",
    "websiteUrl": "https://www.hoppycopy.co",
    "descriptionMd": "Hoppy Copy is purpose-built for email marketing, helping users generate newsletters, drip sequences, and promotional email campaigns using AI. It includes a spam-score checker to improve deliverability and supports multiple email frameworks popular in direct response marketing. The tool is narrowly focused, making it a strong specialist choice over general-purpose AI writers.",
    "pricingText": "From ~$29/mo; free trial available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Email marketers and newsletter creators who want AI copy tailored specifically to email formats and deliverability",
    "notFor": "Users who need general-purpose content writing beyond email campaigns",
    "useCases": [
      "Email drip sequence writing",
      "Newsletter drafting",
      "Promotional campaign copy",
      "Subject line generation"
    ],
    "tags": [
      "email-marketing",
      "newsletters",
      "copywriting",
      "campaigns"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "sassbook-ai",
    "name": "Sassbook AI",
    "tagline": "AI story writer and text summarizer for creative content",
    "websiteUrl": "https://sassbook.com",
    "descriptionMd": "Sassbook AI offers a set of focused writing tools including an AI story writer, text summarizer, headline generator, and paraphraser. It is designed for authors and content creators who want lightweight, specialized tools rather than an all-in-one platform. The story writer in particular supports narrative continuation from a user-supplied prompt.",
    "pricingText": "Free tier available (limited usage); Pro from ~$20/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Fiction writers and bloggers who want focused creative writing tools without paying for an enterprise content suite",
    "notFor": "Marketing teams needing conversion-focused copy templates or SEO workflow integration",
    "useCases": [
      "Fiction story continuation",
      "Blog headline generation",
      "Text summarization",
      "Content paraphrasing"
    ],
    "tags": [
      "creative-writing",
      "fiction",
      "summarization",
      "lightweight"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "junia-ai",
    "name": "Junia AI",
    "tagline": "SEO-first AI writer for long-form blog content and rankings",
    "websiteUrl": "https://www.junia.ai",
    "descriptionMd": "Junia AI is built around producing SEO-optimized long-form articles that aim to rank in search engines, with features like keyword clustering, internal linking suggestions, and structured outline generation. It positions itself as a competitor to Surfer SEO combined with an AI writer in one workflow. The platform targets content agencies and SEO professionals managing multiple sites.",
    "pricingText": "From ~$29/mo; limited free trial (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "SEO professionals and content agencies who need to produce keyword-targeted long-form articles at scale",
    "notFor": "Writers focused on creative, narrative, or non-SEO content who would find the keyword-first workflow restrictive",
    "useCases": [
      "Keyword-targeted blog articles",
      "SEO content briefs",
      "Bulk article generation",
      "Internal link planning"
    ],
    "tags": [
      "seo",
      "long-form",
      "blogging",
      "content-agency"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "elephas-ai",
    "name": "Elephas",
    "tagline": "AI writing assistant powered by your personal knowledge base",
    "websiteUrl": "https://elephas.app",
    "descriptionMd": "Elephas is a Mac-native AI writing assistant that integrates with a user's personal knowledge base — documents, notes, and files — to generate contextually relevant content. It works across apps system-wide via a keyboard shortcut rather than a dedicated web editor. This makes it particularly useful for professionals who want AI writing embedded in their existing macOS workflow.",
    "pricingText": "From ~$4.99/mo (basic) to ~$14.99/mo (Pro); free trial available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Mac users who want an AI writing assistant that draws on their own documents and works across all their macOS apps",
    "notFor": "Windows or Linux users, and teams needing collaborative or web-based writing workflows",
    "useCases": [
      "System-wide AI text generation on Mac",
      "Knowledge-base-grounded writing",
      "Email and message drafting",
      "Document summarization"
    ],
    "tags": [
      "mac-native",
      "personal-knowledge-base",
      "productivity",
      "system-wide"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "compose-ai",
    "name": "Compose AI",
    "tagline": "Chrome extension that autocompletes text anywhere you type",
    "websiteUrl": "https://www.compose.ai",
    "descriptionMd": "Compose AI is a Chrome extension that adds AI-powered autocomplete and text generation to any text field in the browser, including Gmail, Google Docs, and web forms. It learns from a user's writing style over time to improve suggestion relevance. The tool is designed for everyday productivity rather than bulk content creation.",
    "pricingText": "Free tier available; Pro from ~$9.99/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Knowledge workers who want inline AI autocomplete integrated unobtrusively into their existing browser-based tools",
    "notFor": "Users who need a standalone long-form editor or SEO content workflow outside the browser",
    "useCases": [
      "Email autocomplete in Gmail",
      "AI-assisted form filling",
      "Document drafting in Google Docs",
      "Personalized writing suggestions"
    ],
    "tags": [
      "chrome-extension",
      "autocomplete",
      "productivity",
      "browser-based"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "magai",
    "name": "Magai",
    "tagline": "All-in-one AI chat and writing workspace with multiple models",
    "websiteUrl": "https://magai.co",
    "descriptionMd": "Magai provides a unified workspace where users can access multiple AI models — including Claude, GPT-4, and others — through a single subscription, alongside content writing tools, prompt management, and team collaboration features. It is positioned as a power-user hub for people who want to compare models or switch between them without managing separate subscriptions. The platform also supports saved personas and prompt libraries.",
    "pricingText": "From ~$19/mo; free trial available (verify on site)",
    "hasFreeTier": false,
    "bestFor": "Power users and small teams who want to use multiple AI models from one interface with organized prompt and persona management",
    "notFor": "Casual users who only need one AI model and do not require multi-model comparison or team features",
    "useCases": [
      "Multi-model AI writing comparison",
      "Team content collaboration",
      "Prompt library management",
      "AI persona-based content creation"
    ],
    "tags": [
      "multi-model",
      "team-collaboration",
      "prompt-management",
      "ai-hub"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "reword",
    "name": "Reword",
    "tagline": "AI article editor that learns your publication's voice",
    "websiteUrl": "https://reword.com",
    "descriptionMd": "Reword is an AI writing tool designed specifically for editorial teams and publications, with a focus on training the AI to match a specific publication's tone, style, and editorial standards. It integrates into an article editing workflow rather than generating raw drafts from scratch, acting as an AI co-editor. The tool emphasizes human-in-the-loop collaboration rather than full automation.",
    "pricingText": "From ~$38/mo per editor (verify on site); no permanent free tier",
    "hasFreeTier": false,
    "bestFor": "Editorial teams at publications or content-driven companies who need AI assistance that respects and learns their brand voice",
    "notFor": "Solo freelancers or marketers who need fast bulk content generation rather than a nuanced editorial co-writing tool",
    "useCases": [
      "Brand-voice-consistent article editing",
      "Editorial workflow AI assistance",
      "Style guide enforcement",
      "Co-writing for publications"
    ],
    "tags": [
      "editorial",
      "brand-voice",
      "co-writing",
      "publication"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "bertha-ai",
    "name": "Bertha AI",
    "tagline": "AI writing assistant built natively into WordPress",
    "websiteUrl": "https://bertha.ai",
    "descriptionMd": "Bertha AI is an AI content generation tool delivered as a WordPress plugin, allowing users to write blog posts, product descriptions, and page copy directly within the WordPress editor without switching to an external tool. It also integrates with popular page builders like Elementor. The WordPress-native approach makes it a natural fit for site owners who live inside the CMS.",
    "pricingText": "From ~$20/mo; limited free tier available (verify on site)",
    "hasFreeTier": true,
    "bestFor": "WordPress site owners and bloggers who want AI writing assistance embedded directly in their CMS without external tools",
    "notFor": "Users on non-WordPress platforms or those who prefer a dedicated standalone writing application",
    "useCases": [
      "WordPress blog post writing",
      "Page builder copy generation",
      "WooCommerce product descriptions",
      "Meta description and SEO snippet writing"
    ],
    "tags": [
      "wordpress",
      "cms-native",
      "blogging",
      "ecommerce"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "texta-ai",
    "name": "Texta AI",
    "tagline": "One-click AI blog writer with SEO and readability tuning",
    "websiteUrl": "https://texta.ai",
    "descriptionMd": "Texta AI focuses on generating complete, publish-ready blog articles from a keyword or topic in a single workflow, including title, outline, and full body copy with SEO considerations baked in. It targets bloggers and small business owners who want to minimize manual editing steps after generation. The platform also offers social media and email copy tools alongside the core blog writer.",
    "pricingText": "Free tier available (limited articles); Pro from ~$19/mo (verify on site)",
    "hasFreeTier": true,
    "bestFor": "Bloggers and small business owners who want a fast, low-touch workflow to produce publish-ready SEO articles",
    "notFor": "Advanced SEO professionals or content agencies needing deep keyword research integration and team collaboration features",
    "useCases": [
      "One-click blog article generation",
      "SEO-optimized post drafting",
      "Social media caption writing",
      "Email newsletter copy"
    ],
    "tags": [
      "blogging",
      "seo",
      "one-click-content",
      "small-business"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  },
  {
    "slug": "yaara-ai",
    "name": "Yaara AI",
    "tagline": "AI writing tool for marketers with 200+ templates",
    "websiteUrl": "https://yaara.ai",
    "descriptionMd": "Yaara AI provides over 200 content templates spanning marketing copy, blog posts, social media, and e-commerce product descriptions, with support for more than 25 languages. It incorporates popular copywriting frameworks such as AIDA and PAS into its template library. The platform is aimed at digital marketers and e-commerce operators who need structured, framework-driven content at volume.",
    "pricingText": "From ~$18/mo; free trial available (verify current pricing on site)",
    "hasFreeTier": false,
    "bestFor": "Digital marketers and e-commerce teams who need template-driven, framework-based copy in multiple languages at scale",
    "notFor": "Long-form creative writers or users who find rigid copywriting frameworks limiting rather than helpful",
    "useCases": [
      "AIDA and PAS framework copywriting",
      "Multilingual marketing content",
      "E-commerce product descriptions",
      "Social media ad copy"
    ],
    "tags": [
      "templates",
      "multilingual",
      "copywriting-frameworks",
      "ecommerce"
    ],
    "categorySlug": "ai-writing",
    "affiliateUrl": null,
    "affiliateNetwork": "direct",
    "featured": false,
    "featuredRank": null,
    "source": "curated:expansion-2026-06b"
  }
]

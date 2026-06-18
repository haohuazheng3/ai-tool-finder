/**
 * Editorial guides — hand-written long-form with a clear point of view, grounded
 * in this directory's own data (honest cons, real free tiers, real prices).
 * NOT auto-generated. Rendered at /guides/[slug] with Article JSON-LD + E-E-A-T.
 */
export type Guide = {
  slug: string
  title: string
  /** Meta description. */
  description: string
  /** Standfirst shown under the H1. */
  dek: string
  publishedAt: string
  updatedAt: string
  readMins: number
  /** Short related-tag for cross-linking on the index. */
  tag: string
  bodyMd: string
}

export const GUIDES: Guide[] = [
  {
    slug: 'the-truth-about-free-ai-tools',
    title: 'The Truth About "Free" AI Tools (What 72% Actually Means)',
    description:
      'We checked the free tier of every tool in our directory. "Free" turned out to mean five completely different things — and only one is the kind you actually want.',
    dek: '72% of the AI tools we track advertise something "free." That number is technically true and almost useless. Here is what it really hides.',
    publishedAt: '2026-06-18',
    updatedAt: '2026-06-18',
    readMins: 6,
    tag: 'Pricing & free tiers',
    bodyMd: `"Free" is the most abused word in the AI industry. Across the 140 tools we track, **72% advertise a free option** — and after checking each one, we can tell you that statistic is close to meaningless on its own. It lumps together five things that have almost nothing in common.

Most directories show a green "Free" badge and stop there. That badge is exactly where the misleading starts.

## The five kinds of "free"

1. **A real free tier.** Permanent, genuinely usable, no credit card. This is rare and worth protecting — tools like [Cursor](/cursor), [Perplexity](/perplexity), and [Canva Magic Studio](/canva-magic-studio) let you do real work on $0 indefinitely.
2. **A free trial wearing a "free" badge.** Time-boxed, then it stops. [Jasper](/jasper-ai), for example, has *no permanent free tier at all* — just a 7-day trial. Calling that "free" is marketing, not a fact.
3. **Freemium with a cliff.** Generous until one number runs out — credits, words, images, minutes — then a hard wall, often mid-task. The danger isn't the limit; it's *not knowing where it is* until you hit it.
4. **"Free" that needs a credit card.** Free to start, friction to leave. The card on file is the point.
5. **Free but watermarked or non-commercial.** Fine for playing; useless the moment you try to ship.

Only the first kind is the "free" you're imagining when you click the badge. The other four are funnels.

## What "free" really looks like

A few concrete examples from our catalog, because specifics beat adjectives:

| Tool | "Free" badge? | What you actually get |
|---|---|---|
| [Rytr](/rytr) | Yes | ~10k characters/month, on a genuine lifetime free plan |
| [ElevenLabs](/eleven-labs) | Yes | ~10k characters/month of speech — a few minutes of audio |
| [GitHub Copilot](/github-copilot) | Yes | a real free tier for individuals (capped completions/chat) |
| [Jasper](/jasper-ai) | No | 7-day trial only, then paid from ~$39/mo |
| [Midjourney](/midjourney) | No | no free option — paid from ~$10/mo |
| [DALL·E 3](/dall-e) | Sort of | free inside ChatGPT, a few images a day |

Notice that two of the most famous "AI writing" and "AI image" tools — Jasper and Midjourney — have **no free tier whatsoever**, yet they appear on countless "best *free* AI tools" listicles. That's not an accident. It's what happens when a list is written for affiliate clicks instead of for you.

## Why this matters more than the sticker price

The free tier is where you actually evaluate a tool. If the "free" is really a trial, you're making a buying decision under a countdown. If it's a credit cliff, you'll discover the real limits on the day you depend on it. And if the output is watermarked, you've built a workflow you can't use.

So the free tier isn't a nice-to-have detail — it's the single most decision-relevant fact about a tool, and it's the one almost nobody publishes honestly.

## Four questions before you trust a free tier

1. **Is it permanent, or a trial?** A trial is a deadline, not a plan.
2. **Does it need a credit card?** If yes, treat it as paid-with-a-grace-period.
3. **Where's the cliff?** Find the number that runs out — words, credits, images, minutes — *before* you build on it.
4. **Can I use the output commercially, without a watermark?** If not, it's a demo, not a tool.

## Our take

We think "free" should be a promise, not a funnel — so we store each tool's real free-tier status and show what it's *not* good for, right next to what it is. If you only want genuinely-free options, the fastest path is the [tool picker](/match) with "Free only" selected, or the ranked [best free tools by task](/best/ai-image/free). And if you're trying to keep a whole project at or near $0, our [AI tool stacks](/stacks) show which jobs can be done free and which can't.

The number to remember isn't "72% are free." It's "most of that 72% comes with a catch — so go find the catch first."`,
  },
  {
    slug: 'how-to-choose-an-ai-tool',
    title: 'How to Choose an AI Tool Without Drowning in "Best Of" Lists',
    description:
      'A buyer’s framework for picking AI tools that ignores the hype: define the job, lead with your deal-breakers, check the free reality, compute your real cost, then run a one-week disqualification test.',
    dek: 'There is no "best AI tool." There is only the best one for your task, your budget, and your deal-breakers. Here is how to find it in an afternoon.',
    publishedAt: '2026-06-18',
    updatedAt: '2026-06-18',
    readMins: 7,
    tag: 'Buying framework',
    bodyMd: `Ask "what's the best AI writing tool?" and you'll get a hundred confident answers, most of them affiliate links. Ask "what's the best AI writing tool *for me*?" and the question suddenly becomes answerable — because now it has constraints.

The mistake almost everyone makes is shopping for the *best* tool instead of the *right* one. Here's the framework we use, and it deliberately runs backwards from how listicles work.

## Step 1: Define the job in one sentence

Not "I need an AI writing tool." Instead: "I need to draft 4 SEO blog posts a month in my brand voice." Not "I need AI video." Instead: "I need to turn scripts into talking-head videos without filming." The narrower the sentence, the smaller — and better — the shortlist.

This is also why we organize everything [by task](/match) rather than as one giant A–Z dump. The job is the filter that matters.

## Step 2: Lead with your deal-breakers, not your wishlist

Here's the counter-intuitive part: **choose by what disqualifies a tool, not by what's hyped.** Hype is everywhere and tells you nothing. Deal-breakers are personal and decisive:

- "Must have a permanent free tier" rules out [Jasper](/jasper-ai) and [Midjourney](/midjourney) instantly.
- "Output must be commercially usable, no watermark" eliminates a chunk of free image tiers.
- "Must work for a team with shared brand voice" changes the writing shortlist entirely.
- "I'm a beginner — it has to be simple" rules out the powerful-but-fiddly options.

This is why every tool page on this site has a **"Not for"** line. It's not negativity for its own sake; it's the fastest way to delete 80% of your options honestly.

## Step 3: Check the free reality (before you fall in love)

Once you have 3–4 candidates, check the *real* free tier of each — permanent or trial, credit card or not, where the usage cliff is. We wrote a whole piece on why this is so often misrepresented: [the truth about "free" AI tools](/guides/the-truth-about-free-ai-tools). Do this *before* you invest hours learning a tool, not after.

## Step 4: Compute your real cost — per outcome, not per month

"$20/month" is not a price; it's a starting number. The real question is cost *per outcome*: per 1,000 words, per 100 images, per minute of audio, per seat. A tool that's cheap monthly can be expensive per output if it meters credits aggressively — and vice versa. Our [AI pricing index](/ai-tools-pricing-report) and the per-category [cheapest tools](/best/ai-writing/cheapest) pages exist to make this comparison honest. (More on the pricing games in [AI pricing is designed to confuse you](/guides/ai-tool-real-cost).)

## Step 5: Run a one-week disqualification test

Don't try to *confirm* your favorite. Try to *break* it. Give each finalist one real task — the actual thing you'll do every week — and look for the failure, not the demo. The tool that survives your real workflow wins; the one that only shines in the marketing video loses. A week is usually enough.

## A shortcut

If five steps sound like a lot, that's exactly what our [tool picker](/match) automates: it asks your task, your budget, and what matters most, then returns two or three honest matches — with the downside shown up front. It won't make the decision for you, but it'll get you to the one-week test in about sixty seconds.

## The principle underneath all of this

The best AI tool is the one you'll still be using in three months. That almost never correlates with whichever tool ranked #1 on a list written to earn a commission. Choose for fit, lead with deal-breakers, and test for failure. Everything else is noise.`,
  },
  {
    slug: 'why-best-ai-tool-lists-fail',
    title: 'Why Most "Best AI Tools" Lists Are Useless (and How to Read One)',
    description:
      'Most "best AI tools" roundups are affiliate funnels: no real cons, no free-tier limits, no "not for," and every tool is somehow amazing. Here are the five tells — and what honest evaluation looks like.',
    dek: 'If every tool on a list is "amazing" and none has a real downside, you are not reading a review. You are reading an ad.',
    publishedAt: '2026-06-18',
    updatedAt: '2026-06-18',
    readMins: 6,
    tag: 'How we rank',
    bodyMd: `Search "best AI tools for X" and you'll get a wall of articles that look like research and read like sales pages. We build directory pages for a living, so let us tell you how the sausage is usually made — and how to spot it.

## The incentive problem

Most "best of" lists earn money through affiliate links: when you sign up for a tool, the publisher gets a cut. That single fact bends everything. A tool that pays a 30% recurring commission gets written about more warmly than a better tool that pays nothing. Cons get softened, because cons reduce clicks. Tools with no affiliate program quietly vanish from the list, no matter how good they are.

None of this is illegal or even unusual. But it means the typical roundup is optimized for *your click*, not *your outcome*. (We run affiliate links too — so we hold ourselves to the rules below, and label sponsored placements as Sponsored, never reordering rankings by who paid.)

## The five tells of a useless list

1. **No real cons.** Every tool is "powerful," "intuitive," and "a game-changer." Real tools have real trade-offs; a list without them isn't evaluating, it's advertising.
2. **No free-tier limits.** It'll say "free plan available" but never tell you the actual cap — the 10,000 characters, the 3 images a day, the watermark. The limit is the most useful fact, and it's missing precisely because it's inconvenient.
3. **No "not for."** Honest advice tells you who *shouldn't* buy. A list that can't name a single person a tool is wrong for has told you nothing.
4. **A stale "2026" in the title, old facts inside.** Pricing and free tiers change constantly. A date in the title is SEO theater unless the facts behind it moved too.
5. **Everything links out, nothing links to evidence.** If every sentence ends in an affiliate button but none in a methodology, a data point, or a downside, you have your answer.

## What honest evaluation looks like

We're not claiming to be above incentives — we're claiming to be structured against them. Concretely, that means:

- **Every tool has a "Not for."** We store, for all 140 tools, the situation where it's the *wrong* choice. It's the first thing we check before recommending.
- **Free tiers are stated, not implied.** Permanent vs trial, credit card or not, where the cliff is.
- **Rankings aren't for sale.** Sponsored tools are labeled as Sponsored on their own pages; they never get silently reordered to the top of a guide.
- **Original data over adjectives.** Our [AI pricing index](/ai-tools-pricing-report) is built from the actual prices in our catalog, not vibes.

You can read more about exactly how we do this on our [methodology page](/about).

## How to read any list (including ours) in thirty seconds

- Ctrl-F for the word "but." No "buts"? It's an ad.
- Look for a single free-tier *number*. None? They didn't check.
- Find the tool the author admits *not* to like. Can't? They're not being honest with you.
- Check whether the #1 pick is also the most aggressively monetized. Often it is.

## Our take

A list isn't useless because it has affiliate links. It's useless because it hides the trade-offs those links create. The fix isn't to distrust everything — it's to demand the three things every honest recommendation contains: a real con, a real limit, and a real "not for." If you want those three baked into every result, skip the listicles and use the [tool picker](/match).`,
  },
  {
    slug: 'ai-tool-real-cost',
    title: 'AI Pricing Is Designed to Confuse You: Your Real Cost per Word, Image & Minute',
    description:
      'The $20/month sticker is meaningless. What matters is cost per outcome and where the pricing cliff hides. A plain-English guide to the credit games — and how to compute what you’ll really pay.',
    dek: 'Sticker price is the number AI companies want you to compare. Cost per outcome is the number that actually hits your card.',
    publishedAt: '2026-06-18',
    updatedAt: '2026-06-18',
    readMins: 7,
    tag: 'Pricing & free tiers',
    bodyMd: `Almost every AI tool prices itself the same way: a friendly monthly number on the homepage, and the part that actually costs you money buried one click deeper. The sticker price is designed to be compared. The real cost is designed not to be.

Here's how the confusion works, and how to see through it.

## Trick 1: Credits instead of outputs

When a tool prices in "credits," "tokens," or "generations" instead of plain outputs, that's usually deliberate. A plan with "500 credits" sounds generous until you learn one high-res image costs 4 credits and a re-roll costs another 4. The unit is abstract on purpose — it makes plans hard to compare and overage easy to trigger.

**The fix:** convert everything to your unit. Not "credits" — *cost per 100 images*, *per 1,000 words*, *per minute of audio*. Suddenly two plans that looked similar are 3x apart.

## Trick 2: The free-then-cliff pattern

The most common pricing shape in AI is "generous free tier, sudden wall." It's a great way to get you to build a workflow you can't easily leave. [ElevenLabs](/eleven-labs) gives you ~10,000 characters of speech free — plenty to fall in love, gone in a few minutes of real production. That's not a criticism of the tool; it's the standard playbook. Know where the cliff is *before* you depend on the tool, not the day you hit it.

## Trick 3: Per-seat pricing that scales faster than you

"$15/user/month" is fine for one person and brutal for a team of eight. Many tools that look cheap for a solo user are quietly priced for the enterprise upsell. If you'll ever add teammates, multiply before you commit.

## Trick 4: The "starting at" asterisk

"From $10/month" almost always means *billed annually*, with the monthly price 20–40% higher. The feature you actually need is often one tier above the advertised one. The honest comparison is "what will *my* use cost, on *my* billing cadence, on the tier that has the feature I need" — which is rarely the headline number.

## How to compute your real monthly cost

1. **Write down your monthly volume** in real units (words, images, minutes, seats).
2. **Find the tier that includes the feature you need** — not the cheapest tier, the *sufficient* one.
3. **Convert credits/tokens to your unit** and multiply by your volume.
4. **Add overage** for the month you go over (you will).
5. **Use monthly billing for the comparison**, even if you'll pay annually — it's the honest apples-to-apples.

Do this for three finalists and the "cheap" option frequently flips.

## Where the catalog helps

We built two things specifically for this. The [AI pricing index](/ai-tools-pricing-report) aggregates the real starting prices and free-tier rates across our whole catalog, so you can see, for instance, which categories are mostly-free and which are paywalled. And each category has a [cheapest-tools](/best/ai-image/cheapest) page sorted by actual starting price — including the honest note that cheapest often means tighter limits. For multi-tool projects, the [stacks](/stacks) pages add up the real monthly cost of a whole workflow.

## Our take

The AI industry isn't uniquely greedy — it's uniquely *new*, which means pricing is still a wild west of credits, cliffs, and asterisks. The defense is boring and effective: ignore the sticker, compute per outcome, find the cliff, and compare on monthly billing. Do that and you'll routinely save more than the price of the tool itself — and you'll never get surprised by the invoice.`,
  },
]

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

export function getGuide(slug: string): Guide | null {
  return GUIDES.find((g) => g.slug === slug) ?? null
}

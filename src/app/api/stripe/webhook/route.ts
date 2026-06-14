import { NextResponse, type NextRequest } from 'next/server'
import type Stripe from 'stripe'
import {
  activateFeaturedFromStripe,
  deactivateFeaturedBySubscription,
  hasProcessedStripeEvent,
  markStripeEventProcessed,
} from '@/lib/db/admin-queries'
import { env, isStripeWebhookConfigured } from '@/lib/env'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Subscription current_period_end. Recent Stripe API versions moved this field
 * from the subscription onto its items, so we check both. Returns null when it
 * genuinely can't be determined (caller logs and falls back conservatively).
 */
function periodEndOf(sub: Stripe.Subscription): Date | null {
  const top = (sub as unknown as { current_period_end?: number }).current_period_end
  const item = sub.items?.data?.[0] as unknown as { current_period_end?: number } | undefined
  const ts = top ?? item?.current_period_end
  return ts ? new Date(ts * 1000) : null
}

/** Conservative fallback (~31 days) used only if Stripe omits the period end. */
function fallbackPeriodEnd(): Date {
  return new Date(Date.now() + 31 * 86_400_000)
}

/**
 * Stripe webhook: turns paid Featured subscriptions on/off.
 *   checkout.session.completed     → activate featured + store stripe ids
 *   customer.subscription.updated  → refresh window, or deactivate if not active
 *   customer.subscription.deleted  → deactivate featured
 */
export async function POST(req: NextRequest) {
  if (!stripe || !isStripeWebhookConfigured()) {
    return NextResponse.json({ error: 'Stripe webhook not configured.' }, { status: 503 })
  }

  const signature = req.headers.get('stripe-signature')
  if (!signature) return NextResponse.json({ error: 'Missing signature.' }, { status: 400 })

  const rawBody = await req.text()
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, env.stripeWebhookSecret)
  } catch (err) {
    console.error('[stripe webhook] signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  // Idempotency: skip events we've already fully handled (Stripe retries for
  // ~3 days). We record the event only AFTER successful handling below, so a
  // transient failure returns non-2xx and Stripe safely retries.
  try {
    if (await hasProcessedStripeEvent(event.id)) {
      return NextResponse.json({ received: true, duplicate: true })
    }
  } catch (err) {
    console.error('[stripe webhook] idempotency check failed', err)
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const listingId = Number(session.metadata?.listingId ?? session.client_reference_id ?? NaN)
        const subscriptionId =
          typeof session.subscription === 'string' ? session.subscription : session.subscription?.id
        const customerId =
          typeof session.customer === 'string' ? session.customer : session.customer?.id
        if (!Number.isInteger(listingId) || listingId <= 0 || !subscriptionId || !customerId) {
          console.error('[stripe webhook] checkout.session.completed missing ids', {
            listingId, subscriptionId, customerId, eventId: event.id,
          })
          break
        }
        const sub = await stripe.subscriptions.retrieve(subscriptionId)
        await activateFeaturedFromStripe({
          listingId,
          customerId,
          subscriptionId,
          periodEnd: periodEndOf(sub) ?? fallbackPeriodEnd(),
        })
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const listingId = Number(sub.metadata?.listingId ?? NaN)
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id
        const active = sub.status === 'active' || sub.status === 'trialing'
        if (active) {
          if (!Number.isInteger(listingId) || listingId <= 0) {
            console.error('[stripe webhook] subscription.updated missing listingId', {
              subscriptionId: sub.id, eventId: event.id,
            })
            break
          }
          await activateFeaturedFromStripe({
            listingId,
            customerId,
            subscriptionId: sub.id,
            periodEnd: periodEndOf(sub) ?? fallbackPeriodEnd(),
          })
        } else {
          await deactivateFeaturedBySubscription(sub.id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        await deactivateFeaturedBySubscription(sub.id)
        break
      }

      default:
        break
    }
  } catch (err) {
    console.error('[stripe webhook] handler error', err)
    return NextResponse.json({ error: 'Handler error.' }, { status: 500 })
  }

  // Handled successfully — record for idempotency so retries are skipped.
  try {
    await markStripeEventProcessed(event.id, event.type)
  } catch (err) {
    console.error('[stripe webhook] failed to record processed event', err)
  }

  return NextResponse.json({ received: true })
}

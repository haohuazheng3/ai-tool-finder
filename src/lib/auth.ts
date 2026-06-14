import 'server-only'
import { env, isClerkConfigured } from '@/lib/env'

/**
 * Auth helpers that degrade gracefully when Clerk isn't configured.
 *
 * When Clerk is absent, `isAdmin()` returns true only in non-production (local
 * dev) so the admin tools stay usable locally — but it locks down in production
 * to prevent an accidental open /admin if you deploy without Clerk. The /admin UI
 * also shows a warning banner. Configure Clerk + ADMIN_EMAILS before deploying.
 */

export async function getAuthUserId(): Promise<string | null> {
  if (!isClerkConfigured()) return null
  try {
    const { auth } = await import('@clerk/nextjs/server')
    const { userId } = await auth()
    return userId ?? null
  } catch {
    return null
  }
}

export async function getCurrentUserEmail(): Promise<string | null> {
  if (!isClerkConfigured()) return null
  try {
    const { currentUser } = await import('@clerk/nextjs/server')
    const user = await currentUser()
    return (
      user?.primaryEmailAddress?.emailAddress?.toLowerCase() ??
      user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() ??
      null
    )
  } catch {
    return null
  }
}

export async function isAdmin(): Promise<boolean> {
  if (!isClerkConfigured()) {
    // Open locally for dev convenience; never in production.
    return process.env.NODE_ENV !== 'production'
  }
  const email = await getCurrentUserEmail()
  if (!email || env.adminEmails.length === 0) return false
  return env.adminEmails.includes(email)
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error('Forbidden: admin access required.')
  }
}

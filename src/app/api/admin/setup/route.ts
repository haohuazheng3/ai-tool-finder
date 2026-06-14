import path from 'node:path'
import { NextResponse, type NextRequest } from 'next/server'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { categories, listings } from '@/lib/db/schema'
import { seedDatabase } from '@/lib/db/seed-core'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

/**
 * One-time database setup: runs migrations + seed inside the Vercel runtime,
 * where DATABASE_URL is available — so the connection string never has to leave
 * Vercel. Guarded by SETUP_TOKEN. Idempotent (migrations are tracked; seed
 * upserts). Safe to delete once the database is populated.
 *
 *   curl -X POST "https://<app>/api/admin/setup?token=<SETUP_TOKEN>"
 */
export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  const expected = process.env.SETUP_TOKEN
  if (!expected || token !== expected) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 401 })
  }
  const url = process.env.DATABASE_URL
  if (!url) {
    return NextResponse.json({ error: 'DATABASE_URL is not set' }, { status: 500 })
  }

  const client = postgres(url, { max: 1, prepare: false, onnotice: () => {} })
  try {
    await migrate(drizzle(client), { migrationsFolder: path.join(process.cwd(), 'drizzle') })
    const result = await seedDatabase(drizzle(client, { schema: { categories, listings } }))
    return NextResponse.json({ ok: true, ...result })
  } catch (err) {
    console.error('[api/admin/setup]', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  } finally {
    await client.end()
  }
}

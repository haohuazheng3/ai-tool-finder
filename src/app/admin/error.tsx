'use client'

import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container max-w-md py-24 text-center">
      <ShieldAlert className="mx-auto size-10 text-muted-foreground" />
      <h1 className="mt-4 text-2xl font-bold">Action not permitted</h1>
      <p className="mt-2 text-muted-foreground">
        That action couldn’t be completed — you may not have admin access, or something went wrong.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  )
}

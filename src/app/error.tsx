'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Root error boundary → renders a real 500 page (avoids a blank/soft error).
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container flex max-w-md flex-col items-center py-24 text-center">
      <p className="text-6xl font-bold text-primary">500</p>
      <h1 className="mt-4 text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">
        We hit an unexpected error. Try again, or head back to the directory.
      </p>
      <div className="mt-6 flex gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  )
}

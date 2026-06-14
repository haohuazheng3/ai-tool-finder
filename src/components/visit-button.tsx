import { ExternalLink } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/components/ui/button'

type VisitButtonProps = {
  id: number
  name: string
  label?: string
  className?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}

/**
 * The single outbound CTA used everywhere. Always routes through /api/go/[id],
 * which logs the click and 302s to the affiliate URL (falling back to the
 * website). rel="sponsored nofollow" keeps us compliant and protects SEO equity.
 */
export function VisitButton({ id, name, label, className, variant = 'default', size = 'default' }: VisitButtonProps) {
  return (
    <a
      href={`/api/go/${id}`}
      target="_blank"
      rel="sponsored nofollow noopener"
      data-listing-id={id}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {label ?? `Visit ${name}`}
      <ExternalLink className="size-4" />
    </a>
  )
}

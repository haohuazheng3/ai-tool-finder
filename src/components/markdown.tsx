import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

/** Renders trusted markdown (listing descriptions) with house typography. */
export function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn('prose-listing', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, href, ...props }) => {
            // Internal links navigate in the same tab (and are crawlable); external open in a new tab.
            const isInternal = typeof href === 'string' && href.startsWith('/')
            return isInternal ? (
              <a href={href} {...props} />
            ) : (
              <a href={href} {...props} target="_blank" rel="noopener noreferrer" />
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

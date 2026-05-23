import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Ghost, Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundContent({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4 text-center', className)}>
      <Ghost className="h-16 w-16 text-muted-foreground" />
      <div className="space-y-1">
        <p className="text-2xl font-bold tracking-tight">Error 404</p>
        <p className="text-muted-foreground">Page not found</p>
      </div>
      <Button asChild variant="outline">
        <Link href="/">
          <Undo2 />
          Back to home
        </Link>
      </Button>
    </div>
  )
}

import { CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { siteConfig } from '../config/site'
import Button from './Button'

interface Props { title: string; message: string; onReset?: () => void; resetLabel?: string; children?: ReactNode }

export default function SuccessMessage({ title, message, onReset, resetLabel = 'Submit another request', children }: Props) {
  return (
    <div role="status" aria-live="polite" className="rounded-xl border border-forest/20 bg-forest-50 p-6 sm:p-8">
      <CheckCircle2 className="h-10 w-10 text-forest" aria-hidden="true" />
      <h3 className="mt-4 text-3xl text-graphite">{title}</h3>
      <p className="mt-2 text-graphite/75">{message}</p>
      {children}
      {siteConfig.demoMode && (
        <p className="mt-4 rounded-md bg-white/70 px-3 py-2 text-sm text-graphite/65">
          Version 1 preview: this form runs in your browser only and nothing was sent. Connect a backend in <code>src/lib/submit.ts</code> to receive submissions.
        </p>
      )}
      {onReset && (
        <Button variant="dark" className="mt-5" onClick={onReset}>{resetLabel}</Button>
      )}
    </div>
  )
}

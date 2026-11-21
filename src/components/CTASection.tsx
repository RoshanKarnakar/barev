import Button from './Button'
import type { ReactNode } from 'react'

interface Props {
  title: ReactNode
  text?: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
  tone?: 'dark' | 'forest' | 'light'
}

export default function CTASection({ title, text, primary, secondary, tone = 'forest' }: Props) {
  const bg = tone === 'dark' ? 'bg-graphite text-white' : tone === 'forest' ? 'bg-forest text-white' : 'bg-paper text-graphite'
  return (
    <section className={`${bg} on-dark`}>
      <div className="container-x flex flex-col items-start justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
          {text && <p className={`mt-3 text-lg ${tone === 'light' ? 'text-graphite/70' : 'text-white/75'}`}>{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to={primary.to} size="lg" variant={tone === 'light' ? 'dark' : 'primary'}>{primary.label}</Button>
          {secondary && <Button to={secondary.to} size="lg" variant={tone === 'light' ? 'outline' : 'outlineLight'}>{secondary.label}</Button>}
        </div>
      </div>
    </section>
  )
}

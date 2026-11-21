import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  as?: 'h1' | 'h2'
  className?: string
}

export default function SectionHeader({ title, subtitle, align = 'left', dark = false, as = 'h2', className = '' }: Props) {
  const Tag = as
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <Tag className={`text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-graphite'}`}>{title}</Tag>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-graphite/70'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}

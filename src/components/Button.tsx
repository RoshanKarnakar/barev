import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'light'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  to?: string
  href?: string
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary: 'bg-electric text-graphite hover:bg-electric-600',
  dark: 'bg-graphite text-white hover:bg-graphite-700',
  light: 'bg-white text-graphite hover:bg-paper',
  outline: 'border border-graphite/30 text-graphite hover:border-graphite hover:bg-graphite hover:text-white',
  outlineLight: 'border border-white/35 text-white hover:border-white hover:bg-white/10',
}
const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-5 py-3 text-base', lg: 'px-7 py-4 text-lg' }

export default function Button({
  variant = 'primary', size = 'md', className = '', to, href, children, ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}

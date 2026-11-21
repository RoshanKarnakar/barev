import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, children }: { title: ReactNode; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="on-dark relative overflow-hidden bg-graphite text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest/60 blur-3xl" aria-hidden="true" />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl text-5xl leading-[1] sm:text-6xl lg:text-7xl">
          {title}
        </motion.h1>
        {subtitle && <p className="mt-5 max-w-2xl text-xl text-white/70">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}

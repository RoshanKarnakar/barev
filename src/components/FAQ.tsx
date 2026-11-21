import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../data/content'

export default function FAQ({ items, dark = false }: { items: FaqItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className={`divide-y ${dark ? 'divide-white/15 border-y border-white/15' : 'divide-graphite/15 border-y border-graphite/15'}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3 className="font-sans text-base font-semibold tracking-normal">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 py-5 text-left text-lg ${dark ? 'text-white' : 'text-graphite'}`}
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }} className="overflow-hidden"
                >
                  <p className={`max-w-3xl pb-6 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-graphite/70'}`}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

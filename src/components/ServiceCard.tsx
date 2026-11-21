import type { IconItem } from '../data/content'

export default function ServiceCard({ item, dark = false }: { item: IconItem; dark?: boolean }) {
  const Icon = item.icon
  return (
    <div className={`rounded-lg border p-6 ${dark ? 'border-white/15 bg-white/5 text-white' : 'border-graphite/15 bg-white text-graphite'}`}>
      <Icon className={`h-7 w-7 ${dark ? 'text-electric' : 'text-forest'}`} aria-hidden="true" />
      <h3 className="mt-4 text-2xl">{item.title}</h3>
      <p className={`mt-1.5 text-base ${dark ? 'text-white/70' : 'text-graphite/70'}`}>{item.text}</p>
    </div>
  )
}

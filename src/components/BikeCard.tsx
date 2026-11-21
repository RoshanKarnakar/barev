import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Bike } from '../data/bikes'
import { priceLabel, spec } from '../lib/format'
import BikeImage from './BikeImage'
import Button from './Button'

export default function BikeCard({ bike, onTestRide }: { bike: Bike; onTestRide: (b: Bike) => void }) {
  const soon = bike.availability === 'coming-soon'
  const specs = [
    ['Range', spec(bike.range)],
    ['Battery', spec(bike.battery)],
    ['Top speed', spec(bike.topSpeed)],
  ]
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="group flex h-full flex-col overflow-hidden rounded-lg border border-graphite/15 bg-white">
      <Link to={`/bikes/${bike.id}`} aria-label={`Explore ${bike.name}`} className="relative block bg-graphite grid-lines">
        <span className={`absolute left-4 top-4 z-10 rounded px-2.5 py-1 text-sm font-semibold ${soon ? 'bg-white/15 text-white' : 'bg-electric text-graphite'}`}>
          {soon ? 'Coming Soon' : 'Available'}
        </span>
        <BikeImage bike={bike} className="mx-auto aspect-[16/10] w-full max-w-md p-4 transition-transform duration-500 group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-3xl">{bike.name}</h3>
          <p className="shrink-0 font-semibold text-forest">{priceLabel(bike)}</p>
        </div>
        <p className="mt-1.5 text-graphite/70">{bike.tagline}</p>
        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-graphite/10 pt-4 text-sm">
          {specs.map(([k, v]) => (
            <div key={k}>
              <dt className="text-graphite/55">{k}</dt>
              <dd className="mt-0.5 font-semibold leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <Button to={`/bikes/${bike.id}`} variant="dark" size="sm">Explore</Button>
          <Button variant="outline" size="sm" onClick={() => onTestRide(bike)}>Book Test Ride</Button>
          <Button to={`/finance?bike=${bike.id}`} variant="outline" size="sm">Finance</Button>
        </div>
      </div>
    </motion.article>
  )
}

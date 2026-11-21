import { useState } from 'react'
import { useSeo } from '../lib/useSeo'
import { bikes } from '../data/bikes'
import PageHero from '../components/PageHero'
import BikeGrid from '../components/BikeGrid'
import CTASection from '../components/CTASection'
import Button from '../components/Button'

type Filter = 'all' | 'available' | 'coming-soon'
const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'available', label: 'Available' },
  { id: 'coming-soon', label: 'Coming Soon' },
]

export default function Bikes() {
  useSeo('BAR Electric Scooters | Explore Electric Vehicles', 'Explore the BAR electric scooter range. Compare models, view specifications, check finance and book a test ride.')
  const [filter, setFilter] = useState<Filter>('all')
  const shown = bikes.filter((b) => filter === 'all' || b.availability === filter)

  return (
    <>
      <PageHero title="Explore BAR Electric Vehicles" subtitle="Electric scooters designed around everyday Indian mobility. Specifications will be published by BAR as each model is confirmed." />
      <section className="section-y bg-white">
        <div className="container-x">
          <div role="group" aria-label="Filter models" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}
                className={`rounded-md border px-5 py-2.5 font-semibold transition-colors ${filter === f.id ? 'border-forest bg-forest text-white' : 'border-graphite/25 text-graphite hover:border-graphite'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-10">
            {shown.length > 0 ? (
              <BikeGrid bikes={shown} />
            ) : (
              <div className="rounded-lg border border-dashed border-graphite/25 bg-paper p-10 text-center">
                <h2 className="text-3xl">No models in this list yet</h2>
                <p className="mx-auto mt-2 max-w-md text-graphite/70">Models are marked Available once BAR confirms them. See what is coming next, or ask the team about your city.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="dark" onClick={() => setFilter('coming-soon')}>Show Coming Soon</Button>
                  <Button to="/contact" variant="outline">Contact BAR</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <CTASection title="Not sure which BAR fits?" text="Ride a few and decide. Test rides are free to request." primary={{ label: 'Book a Test Ride', to: '/test-ride' }} secondary={{ label: 'Check Finance', to: '/finance' }} />
    </>
  )
}

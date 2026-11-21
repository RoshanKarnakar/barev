import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { bikes, getBike, swatchFor } from '../data/bikes'
import { faqs } from '../data/content'
import { priceLabel } from '../lib/format'
import { useSeo } from '../lib/useSeo'
import BikeImage from '../components/BikeImage'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import EmiCalculator from '../components/EmiCalculator'
import FAQ from '../components/FAQ'
import FinanceCard from '../components/FinanceCard'
import ScooterVisual from '../components/ScooterVisual'
import SectionHeader from '../components/SectionHeader'
import SpecificationGrid from '../components/SpecificationGrid'

export default function BikeDetail() {
  const { id } = useParams()
  const bike = getBike(id)
  const [colorName, setColorName] = useState<string | undefined>(undefined)

  useSeo(
    bike ? `${bike.name} | BAR Electric Scooter` : 'Model not found | BAR Electric Vehicles',
    bike ? bike.description : 'This BAR model could not be found.',
  )

  if (!bike) {
    return (
      <section className="section-y container-x text-center">
        <h1 className="text-5xl">We couldn&apos;t find that model</h1>
        <p className="mx-auto mt-3 max-w-md text-graphite/70">The link may be old or the model may not be listed yet. Browse the current BAR range instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button to="/bikes" variant="dark">View all bikes</Button>
          <Button to="/contact" variant="outline">Contact BAR</Button>
        </div>
        <ul className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-4 text-forest">
          {bikes.map((b) => <li key={b.id}><Link className="font-semibold underline-offset-4 hover:underline" to={`/bikes/${b.id}`}>{b.name}</Link></li>)}
        </ul>
      </section>
    )
  }

  const activeColor = colorName ?? bike.colors[0]
  const soon = bike.availability === 'coming-soon'
  const bikeFaqs = [
    { q: `When can I ride the ${bike.name}?`, a: 'Book a test ride and the BAR team will confirm availability and the nearest location for you.' },
    ...faqs.slice(0, 3),
  ]

  return (
    <>
      <section className="on-dark relative overflow-hidden bg-graphite text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-forest/60 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link to="/bikes" className="hover:text-white">Bikes</Link> / <span aria-current="page">{bike.name}</span>
            </nav>
            <h1 className="mt-4 text-6xl leading-[0.95] sm:text-7xl">{bike.name}</h1>
            <p className="mt-3 text-xl text-white/75">{bike.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="font-display text-4xl font-bold text-electric">{priceLabel(bike)}</span>
              <span className={`rounded px-2.5 py-1 text-sm font-semibold ${soon ? 'bg-white/15' : 'bg-electric text-graphite'}`}>{soon ? 'Coming Soon' : 'Available'}</span>
            </div>
            <p className="mt-5 max-w-lg text-white/70">{bike.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={`/test-ride?bike=${bike.id}`} size="lg">Book Test Ride</Button>
              <Button to={`/finance?bike=${bike.id}`} size="lg" variant="outlineLight">Finance</Button>
              <Button to={`/book/${bike.id}`} size="lg" variant="outlineLight">Enquire to Buy</Button>
            </div>
          </div>
          <BikeImage bike={bike} colorName={activeColor} road className="mx-auto aspect-[16/10] w-full max-w-[640px]" />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader title="Specifications" subtitle="Figures are shown only once BAR has confirmed them." />
          <div className="mt-10"><SpecificationGrid bike={bike} /></div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl">Features</h2>
              <ul className="mt-5 space-y-3">
                {bike.features.map((f) => (
                  <li key={f} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl">Colours</h2>
              <p className="mt-2 text-graphite/65">Sample colours shown. Final options will be confirmed by BAR.</p>
              <div role="radiogroup" aria-label="Choose colour" className="mt-5 flex flex-wrap gap-3">
                {bike.colors.map((c) => (
                  <button
                    key={c} type="button" role="radio" aria-checked={activeColor === c} onClick={() => setColorName(c)}
                    className={`flex items-center gap-2.5 rounded-md border px-4 py-2.5 font-semibold ${activeColor === c ? 'border-forest ring-2 ring-forest/30' : 'border-graphite/25'}`}
                  >
                    <span className="h-5 w-5 rounded-full border border-graphite/20" style={{ background: swatchFor(c) }} aria-hidden="true" />
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeader title="Gallery" subtitle="Product photography will appear here. Add images in public/assets/bikes." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['Side view', 'Front detail', 'Rear detail'].map((label, i) => (
              <figure key={label} className="relative overflow-hidden rounded-lg bg-graphite">
                <div className="grid-lines absolute inset-0" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="h-full w-full transition-transform duration-500"
                    style={{ transform: i === 0 ? 'none' : 'scale(2.1)', transformOrigin: i === 1 ? '78% 40%' : '18% 55%' }}
                  >
                    <ScooterVisual color={swatchFor(activeColor)} spin={false} className="h-full w-full" />
                  </div>
                </div>
                <figcaption className="relative px-4 pb-4 text-sm text-white/70">{label} (placeholder)</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="finance" className="section-y bg-white">
        <div className="container-x">
          <SectionHeader title={`Finance your ${bike.name}`} subtitle="Estimate your monthly EMI before you speak to the lender." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1"><FinanceCard bike={bike} /></div>
            <div className="lg:col-span-2"><EmiCalculator initialPrice={bike.price} bikeId={bike.id} /></div>
          </div>
        </div>
      </section>

      <CTASection title={<>Ride the {bike.name}.</>} text="Book a test ride and feel the difference in person." primary={{ label: 'Book Test Ride', to: `/test-ride?bike=${bike.id}` }} secondary={{ label: 'Enquire to Buy', to: `/book/${bike.id}` }} />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2"><SectionHeader title="Good to know" /></div>
          <div className="lg:col-span-3"><FAQ items={bikeFaqs} /></div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import { bikes } from '../data/bikes'
import { dailyLife, faqs, serviceHighlights, trustItems, whyBar } from '../data/content'
import { siteConfig } from '../config/site'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import BikeGrid from '../components/BikeGrid'
import EmiCalculator from '../components/EmiCalculator'
import TestRideForm from '../components/TestRideForm'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function Home() {
  useSeo(
    'BAR Electric Vehicles | Affordable Electric Scooters in India',
    'Explore BAR electric scooters, calculate EMI, book a test ride, book service and become a BAR dealer.',
  )

  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section aria-label="Why customers choose BAR" className="border-b border-graphite/10 bg-paper">
        <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-5 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3 text-base font-semibold">
              <Icon className="h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured bikes */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader title="Find Your BAR" subtitle="Electric scooters designed around everyday Indian mobility." />
            <Link to="/bikes" className="inline-flex items-center gap-2 font-semibold text-forest hover:underline">
              View all bikes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12"><BikeGrid bikes={bikes.slice(0, 3)} /></div>
        </div>
      </section>

      {/* Why BAR */}
      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeader title="Built for the Way India Moves." />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyBar.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div className="border-t-2 border-forest pt-5">
                    <Icon className="h-8 w-8 text-forest" aria-hidden="true" />
                    <h3 className="mt-4 text-3xl">{item.title}</h3>
                    <p className="mt-2 text-graphite/70">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily life */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader title="One scooter. Every kind of day." subtitle="From the first class to the last delivery, BAR is meant for real routines." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dailyLife.map((item, i) => {
              const Icon = item.icon
              const tones = ['bg-forest text-white', 'bg-graphite text-white', 'bg-electric text-graphite']
              const tone = tones[i % 3]
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  {/* Replace the illustration block with a photo from public/assets/hero/ when available */}
                  <div className={`group relative flex h-64 flex-col justify-between overflow-hidden rounded-lg p-6 ${tone}`}>
                    <div className="grid-lines absolute inset-0 opacity-70" aria-hidden="true" />
                    <Icon className="relative h-24 w-24 opacity-20 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" strokeWidth={1.25} />
                    <div className="relative">
                      <h3 className="text-3xl">{item.title}</h3>
                      <p className={`mt-1 ${i % 3 === 2 ? 'text-graphite/75' : 'text-white/75'}`}>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Finance */}
      <section className="section-y bg-paper">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              title="Your BAR. Your Way to Pay."
              subtitle={`Estimate your monthly EMI. ${siteConfig.finance.provider} is the planned finance partner, subject to lender terms.`}
            />
            <Button to="/finance" variant="outline">How finance works</Button>
          </div>
          <div className="mt-10"><EmiCalculator /></div>
        </div>
      </section>

      {/* Test ride */}
      <section className="on-dark bg-forest text-white">
        <div className="container-x section-y grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-5xl leading-[1] sm:text-6xl lg:text-7xl">Don&apos;t Just See It.<br />Ride It.</h2>
            <p className="mt-5 max-w-sm text-lg text-white/75">Tell us when and where. The BAR team will confirm your test ride.</p>
            <Button to="/test-ride" variant="primary" size="lg" className="mt-8">Book a Test Ride</Button>
          </div>
          <div className="rounded-xl bg-white p-6 text-graphite sm:p-8 lg:col-span-3">
            <h3 className="mb-6 text-3xl">Test ride details</h3>
            <TestRideForm />
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader title="BAR After You Buy" subtitle="Support that stays with you long after the first ride." />
            <Button to="/service-booking" variant="dark">Book a Service</Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((s) => <ServiceCard key={s.title} item={s} />)}
          </div>
        </div>
      </section>

      {/* Dealership */}
      <section className="on-dark relative overflow-hidden bg-graphite text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-forest/70 blur-3xl" aria-hidden="true" />
        <div className="container-x section-y relative">
          <h2 className="max-w-3xl text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">Grow With BAR.</h2>
          <p className="mt-6 max-w-xl text-xl text-white/75">
            Join the BAR Electric Vehicles dealer network and bring affordable electric mobility to your market.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/dealership#apply" size="lg">Become a Dealer</Button>
            <Button to="/dealership" size="lg" variant="outlineLight">Learn More</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader title="Questions, answered." subtitle="Can't find what you need? Our team is a message away." />
            <Button to="/contact" variant="outline" className="mt-6">Contact BAR</Button>
          </div>
          <div className="lg:col-span-3"><FAQ items={faqs} /></div>
        </div>
      </section>
    </>
  )
}

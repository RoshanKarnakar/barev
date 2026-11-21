import { ArrowDown } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import { dealerBenefits, dealerJourney } from '../data/content'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import DealerForm from '../components/DealerForm'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function Dealership() {
  useSeo('BAR Electric Vehicle Dealership | Become a Dealer', 'Apply to become a BAR Electric Vehicles dealer and bring affordable electric mobility to your market.')
  return (
    <>
      <PageHero title="Build Your EV Business With BAR." subtitle="Partner with BAR Electric Vehicles and bring affordable electric mobility to your market.">
        <Button href="#apply" size="lg">Apply for Dealership</Button>
        <Button href="#journey" size="lg" variant="outlineLight">See the process</Button>
      </PageHero>

      <section id="why" className="section-y bg-paper">
        <div className="container-x">
          <SectionHeader title="Why Partner With BAR" subtitle="Support across the whole dealership, from the showroom to the workshop." />
          <div id="support" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dealerBenefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 0.05} className="h-full"><ServiceCard item={b} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="on-dark bg-graphite text-white">
        <div className="container-x section-y">
          <SectionHeader dark title="The dealer journey" subtitle="Eight steps from your application to your launch." />
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dealerJourney.map((step, i) => (
              <li key={step} className="rounded-lg border border-white/15 bg-white/5 p-5">
                <span className="font-display text-4xl font-extrabold text-electric" aria-hidden="true">{i + 1}</span>
                <h3 className="mt-2 text-2xl">{step}</h3>
                {i < dealerJourney.length - 1 && <ArrowDown className="mt-3 h-4 w-4 text-white/40 sm:hidden" aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-white/65">Commercial terms and territory are discussed during the dealership evaluation process.</p>
        </div>
      </section>

      <section id="apply" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader title="Apply for Dealership" subtitle="Share your details and the BAR dealer team will be in touch." />
            <p className="mt-6 max-w-sm text-graphite/65">Commercial terms and territory are discussed during the dealership evaluation process.</p>
          </div>
          <div className="rounded-xl border border-graphite/15 bg-paper p-6 sm:p-8 lg:col-span-3"><DealerForm /></div>
        </div>
      </section>
    </>
  )
}

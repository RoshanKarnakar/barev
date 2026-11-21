import { useSeo } from '../lib/useSeo'
import { serviceCards } from '../data/content'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function Services() {
  useSeo('BAR EV Service | Electric Scooter Service', 'Book service for your BAR electric scooter: periodic service, battery check, brakes, tyres, diagnostics, warranty support, parts and accessories.')
  return (
    <>
      <PageHero title="BAR After You Buy" subtitle="Service, battery support, parts and accessories for your BAR.">
        <Button to="/service-booking">Book a Service</Button>
        <Button to="/contact" variant="outlineLight">Contact Support</Button>
      </PageHero>
      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeader title="What we look after" subtitle="Service availability depends on your location. Book a slot and the team will confirm." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05} className="h-full"><ServiceCard item={s} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Keep your BAR riding." text="Book a service slot in a couple of minutes." primary={{ label: 'Book a Service', to: '/service-booking' }} secondary={{ label: 'Contact Support', to: '/contact' }} />
    </>
  )
}

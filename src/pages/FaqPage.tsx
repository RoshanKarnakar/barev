import { useSeo } from '../lib/useSeo'
import { faqs } from '../data/content'
import PageHero from '../components/PageHero'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

export default function FaqPage() {
  useSeo('BAR Electric Vehicles FAQ | Buying, Finance, Service', 'Answers to common questions about buying, financing, servicing and becoming a dealer for BAR electric scooters.')
  return (
    <>
      <PageHero title="Frequently asked questions" subtitle="Buying, finance, service and dealership, in plain answers." />
      <section className="section-y bg-white"><div className="container-x max-w-4xl"><FAQ items={faqs} /></div></section>
      <CTASection title="Still have a question?" primary={{ label: 'Contact BAR', to: '/contact' }} tone="light" />
    </>
  )
}

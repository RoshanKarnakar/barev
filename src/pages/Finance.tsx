import { useSearchParams } from 'react-router-dom'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import { getBike } from '../data/bikes'
import { financeSteps } from '../data/content'
import { siteConfig } from '../config/site'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import EmiCalculator from '../components/EmiCalculator'
import CTASection from '../components/CTASection'
import Button from '../components/Button'

export default function Finance() {
  useSeo('BAR EV Finance | EMI & Financing', 'Estimate your BAR electric scooter EMI and learn how finance works with Bajaj Finance.')
  const [params] = useSearchParams()
  const bike = getBike(params.get('bike') ?? undefined)

  return (
    <>
      <PageHero title="Make Your BAR More Affordable." subtitle={bike ? `Estimate the EMI for the ${bike.name}.` : 'Estimate your monthly EMI and see how finance works.'}>
        <Button href="#calculator">Calculate EMI</Button>
        <Button to="/test-ride" variant="outlineLight">Book a Test Ride</Button>
      </PageHero>

      <section id="calculator" className="section-y bg-paper">
        <div className="container-x">
          <SectionHeader title="EMI calculator" subtitle={siteConfig.finance.disclaimer} />
          <div className="mt-10"><EmiCalculator key={bike?.id ?? 'generic'} initialPrice={bike?.price} bikeId={bike?.id} /></div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader title="How finance works" subtitle="Five steps from choosing your BAR to taking it home." />
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {financeSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-lg border border-graphite/15 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-display text-xl font-bold text-white" aria-hidden="true">{i + 1}</span>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-1.5 text-graphite/70">{s.text}</p>
                {i < financeSteps.length - 1 && (
                  <>
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-white text-forest md:block" aria-hidden="true" />
                    <ArrowDown className="mx-auto mt-4 h-5 w-5 text-forest md:hidden" aria-hidden="true" />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-dark bg-graphite text-white">
        <div className="container-x section-y grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl leading-[1] sm:text-6xl">{siteConfig.finance.provider}</h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              {siteConfig.finance.provider} is the planned finance partner for BAR customers. There is no live integration in this version of the website. Availability for your city and model is confirmed by BAR and the lender.
            </p>
            <p className="mt-4 max-w-lg text-white/60">You can change the provider name in <code>src/config/site.ts</code> and per model in <code>src/data/bikes.ts</code>.</p>
          </div>
          <div>
            <h3 className="text-3xl">Documents</h3>
            <p className="mt-3 text-white/75">Document requirements are set by the lender and can vary by applicant and model. Contact BAR or your lender for the current list before you apply, so your application is not delayed.</p>
            <Button to="/contact" className="mt-6">Ask BAR for the list</Button>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-10">
          <p className="max-w-4xl text-graphite/70"><strong className="text-graphite">Disclaimer.</strong> {siteConfig.finance.longDisclaimer}</p>
        </div>
      </section>
      <CTASection title="Ready to ride?" text="Book a test ride first, then talk finance with the team." primary={{ label: 'Book a Test Ride', to: '/test-ride' }} secondary={{ label: 'Explore Bikes', to: '/bikes' }} />
    </>
  )
}

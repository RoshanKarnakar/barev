import { useSeo } from '../lib/useSeo'
import { siteConfig } from '../config/site'
import { aboutBeliefs } from '../data/content'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

export default function About() {
  useSeo('About BAR Electric Vehicles | BAR Green Energy', 'BAR Electric Vehicles is building clean and affordable electric mobility for every Indian household.')
  return (
    <>
      <PageHero title="Electric mobility for every household." subtitle={`${siteConfig.name} is the electric two-wheeler brand of ${siteConfig.legalName}.`} />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">Who We Are</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite/75">
              {siteConfig.legalName} builds electric two-wheelers under the BAR Electric Vehicles brand. We focus on vehicles that are affordable, reliable and practical for everyday Indian life.
            </p>
          </div>
          <div className="rounded-xl bg-forest p-8 text-white on-dark">
            <h2 className="text-4xl">Vision</h2>
            <p className="mt-4 text-2xl leading-snug">&ldquo;{siteConfig.vision}&rdquo;</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">Mission</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite/75">
              To bring dependable electric two-wheelers, honest finance options and supportive service within reach of more Indian families, businesses and students.
            </p>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl">What We Believe</h2>
            <ul className="mt-6 space-y-5">
              {aboutBeliefs.map(({ title, text, icon: Icon }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-forest" aria-hidden="true" />
                  <div><h3 className="text-2xl">{title}</h3><p className="text-graphite/70">{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            { t: 'Our Customers', d: 'Commuters, students, families and small businesses who need a dependable everyday ride that does not strain the budget.' },
            { t: 'Our Dealer Network', d: 'Local partners who bring BAR to their cities, supported by training, service and parts.' },
            { t: 'Our Commitment to Sustainable Mobility', d: 'Electric two-wheelers can make everyday travel cleaner. We want that choice to be an easy one.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="border-t-2 border-forest pt-5">
                <h2 className="text-3xl">{c.t}</h2>
                <p className="mt-3 text-graphite/70">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Ride with us. Or grow with us." primary={{ label: 'Book a Test Ride', to: '/test-ride' }} secondary={{ label: 'Become a Dealer', to: '/dealership' }} />
    </>
  )
}



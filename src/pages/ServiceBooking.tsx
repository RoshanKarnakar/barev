import { useSeo } from '../lib/useSeo'
import PageHero from '../components/PageHero'
import ServiceForm from '../components/ServiceForm'

export default function ServiceBooking() {
  useSeo('Book a Service | BAR EV Service', 'Book a service slot for your BAR electric scooter.')
  return (
    <>
      <PageHero title="Book a Service" subtitle="Tell us about your BAR and when you would like it serviced." />
      <section className="section-y bg-paper">
        <div className="container-x max-w-4xl">
          <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
            <ServiceForm />
          </div>
        </div>
      </section>
    </>
  )
}

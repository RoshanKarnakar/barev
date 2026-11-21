import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BatteryCharging, CalendarClock, FileText, Headphones, History, ShieldCheck, Info, Bike as BikeIcon } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import ScooterVisual from '../components/ScooterVisual'

function Panel({ title, icon: Icon, children }: { title: string; icon: typeof FileText; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-graphite/15 bg-white p-6">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-forest" aria-hidden="true" />
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="mt-4 text-graphite/70">{children}</div>
    </section>
  )
}

export default function MyBike() {
  useSeo('My BAR | BAR Electric Vehicles', 'A preview of the My BAR owner dashboard: vehicle, battery, warranty, service history and support.')
  return (
    <>
      <PageHero title="My BAR" subtitle="Your vehicle, battery, warranty and service in one place." />
      <section className="section-y bg-paper">
        <div className="container-x">
          <p role="note" className="mb-8 flex items-start gap-3 rounded-lg border border-forest/25 bg-forest-50 p-4 text-graphite">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
            Sign in will be available in a future version. This page previews what the owner dashboard will show.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="on-dark relative overflow-hidden rounded-lg bg-graphite p-6 text-white lg:col-span-2">
              <div className="grid-lines absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-3xl">Vehicle</h2>
                <p className="mt-1 text-white/65">No vehicle linked yet</p>
                <ScooterVisual className="mx-auto mt-4 h-auto w-full max-w-md" spin={false} />
                <dl className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
                  <div><dt className="text-white/55">Model</dt><dd className="font-semibold">Not linked</dd></div>
                  <div><dt className="text-white/55">Registration</dt><dd className="font-semibold">Not linked</dd></div>
                  <div><dt className="text-white/55">Purchase date</dt><dd className="font-semibold">Not linked</dd></div>
                </dl>
              </div>
            </div>
            <Panel title="Battery" icon={BatteryCharging}>
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden="true">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#D5DAD7" strokeWidth="8" strokeDasharray="6 6" />
                </svg>
                <p>Battery status will appear here once a vehicle is linked.</p>
              </div>
            </Panel>
            <Panel title="Warranty" icon={ShieldCheck}><p>Warranty details will be shown here. Contact BAR for warranty terms.</p></Panel>
            <Panel title="Next Service" icon={CalendarClock}>
              <p>No service scheduled.</p>
              <Button to="/service-booking" variant="dark" size="sm" className="mt-4">Book a Service</Button>
            </Panel>
            <Panel title="Service History" icon={History}><p>Completed services will be listed here. Nothing to show yet.</p></Panel>
            <Panel title="Documents" icon={FileText}><p>Invoice, registration and warranty documents will be stored here.</p></Panel>
            <Panel title="Support" icon={Headphones}>
              <p>Need help with your BAR?</p>
              <Button to="/contact" variant="outline" size="sm" className="mt-4">Contact Support</Button>
            </Panel>
            <Panel title="Don't own a BAR yet?" icon={BikeIcon}>
              <p>Explore the range or book a test ride.</p>
              <Link to="/bikes" className="mt-4 inline-block font-semibold text-forest hover:underline">View bikes</Link>
            </Panel>
          </div>
        </div>
      </section>
    </>
  )
}

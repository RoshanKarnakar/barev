import { useSearchParams } from 'react-router-dom'
import { CalendarCheck, MapPin, PhoneCall } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import { getBike } from '../data/bikes'
import PageHero from '../components/PageHero'
import TestRideForm from '../components/TestRideForm'

export default function TestRide() {
  useSeo('Book a Test Ride | BAR Electric Vehicles', 'Book a test ride of a BAR electric scooter. Choose your model, city, date and time.')
  const [params] = useSearchParams()
  const bike = getBike(params.get('bike') ?? undefined)
  const steps = [
    { icon: CalendarCheck, title: 'Pick a slot', text: 'Choose a model, date and time that suit you.' },
    { icon: PhoneCall, title: 'We confirm', text: 'The BAR team contacts you to confirm the details.' },
    { icon: MapPin, title: 'Ride it', text: 'Meet at the confirmed location and take the ride.' },
  ]
  return (
    <>
      <PageHero title={<>Don&apos;t Just See It.<br />Ride It.</>} subtitle="Book a test ride of a BAR electric scooter." />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-4xl">How it works</h2>
            <ul className="mt-6 space-y-6">
              {steps.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-forest text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <div><h3 className="text-2xl">{title}</h3><p className="text-graphite/70">{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="mb-6 text-3xl">Your details</h2>
            <TestRideForm key={bike?.id ?? 'none'} defaultBike={bike?.id} />
          </div>
        </div>
      </section>
    </>
  )
}

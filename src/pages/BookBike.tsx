import { Link, useParams } from 'react-router-dom'
import { getBike } from '../data/bikes'
import { priceLabel } from '../lib/format'
import { submitForm } from '../lib/submit'
import { useSeo } from '../lib/useSeo'
import BikeImage from '../components/BikeImage'
import Button from '../components/Button'
import { SelectField, TextAreaField, TextField, email, mobile, required, useForm } from '../components/FormKit'
import PageHero from '../components/PageHero'
import SuccessMessage from '../components/SuccessMessage'

export default function BookBike() {
  const { bikeId } = useParams()
  const bike = getBike(bikeId)
  useSeo(bike ? `Enquire to buy ${bike.name} | BAR Electric Vehicles` : 'Model not found | BAR Electric Vehicles', 'Send a purchase enquiry for a BAR electric scooter.')

  const f = useForm(
    { name: '', mobile: '', email: '', city: '', payment: '', message: '' },
    {
      name: [required('Full name')],
      mobile: [required('Mobile number'), mobile],
      email: [required('Email'), email],
      city: [required('City')],
      payment: [required('Payment preference')],
    },
    (v) => submitForm('purchase-enquiry', { ...v, bike: bike?.id ?? '' }),
  )

  if (!bike) {
    return (
      <section className="section-y container-x text-center">
        <h1 className="text-5xl">We couldn&apos;t find that model</h1>
        <p className="mx-auto mt-3 max-w-md text-graphite/70">Choose a model from the BAR range to send an enquiry.</p>
        <Button to="/bikes" variant="dark" className="mt-6">View all bikes</Button>
      </section>
    )
  }

  return (
    <>
      <PageHero title={`Enquire about the ${bike.name}`} subtitle="Tell us how to reach you. The BAR team will share availability, price and next steps." />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <aside className="on-dark overflow-hidden rounded-xl bg-graphite p-6 text-white lg:col-span-2">
            <BikeImage bike={bike} className="mx-auto aspect-[16/10] w-full" />
            <h2 className="mt-2 text-3xl">{bike.name}</h2>
            <p className="text-white/70">{bike.tagline}</p>
            <p className="mt-3 font-display text-3xl font-bold text-electric">{priceLabel(bike)}</p>
            <Link to={`/bikes/${bike.id}`} className="mt-3 inline-block text-white/75 underline-offset-4 hover:underline">View full details</Link>
          </aside>
          <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            {f.status === 'done' ? (
              <SuccessMessage
                title="Enquiry received"
                message={`Thank you, ${f.values.name}. The BAR team will contact you on ${f.values.mobile} about the ${bike.name}.`}
                onReset={f.reset}
                resetLabel="Send another enquiry"
              />
            ) : (
              <form onSubmit={f.submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <TextField label="Full Name" required autoComplete="name" {...f.bind('name')} />
                <TextField label="Mobile" required type="tel" inputMode="tel" autoComplete="tel" {...f.bind('mobile')} />
                <TextField label="Email" required type="email" autoComplete="email" {...f.bind('email')} />
                <TextField label="City" required autoComplete="address-level2" {...f.bind('city')} />
                <div className="sm:col-span-2">
                  <SelectField label="Payment Preference" required options={['Pay in full', 'Finance (EMI)', 'Not sure yet']} placeholder="Choose one" {...f.bind('payment')} />
                </div>
                <div className="sm:col-span-2"><TextAreaField label="Message" placeholder="Anything the team should know" {...f.bind('message')} /></div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" variant="dark" disabled={f.status === 'submitting'}>{f.status === 'submitting' ? 'Sending…' : 'Send Enquiry'}</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

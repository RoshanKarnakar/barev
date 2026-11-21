import { bikeOptions } from '../data/bikes'
import { timeSlots } from '../data/content'
import { todayISO } from '../lib/format'
import { submitForm } from '../lib/submit'
import Button from './Button'
import { SelectField, TextField, email, mobile, notPast, required, useForm } from './FormKit'
import SuccessMessage from './SuccessMessage'

export default function TestRideForm({ defaultBike = '' }: { defaultBike?: string }) {
  const today = todayISO()
  const f = useForm(
    { name: '', mobile: '', email: '', city: '', bike: defaultBike, date: '', time: '' },
    {
      name: [required('Full name')],
      mobile: [required('Mobile number'), mobile],
      email: [required('Email'), email],
      city: [required('City')],
      bike: [required('Vehicle')],
      date: [required('Preferred date'), notPast(today)],
      time: [required('Preferred time')],
    },
    (v) => submitForm('test-ride', v),
  )

  if (f.status === 'done') {
    const model = bikeOptions.find((b) => b.value === f.values.bike)?.label ?? f.values.bike
    return (
      <SuccessMessage
        title="Test ride request received"
        message={`Thank you, ${f.values.name}. The BAR team will contact you on ${f.values.mobile} to confirm your ${model} test ride in ${f.values.city} on ${f.values.date} (${f.values.time.toLowerCase()}).`}
        onReset={f.reset}
        resetLabel="Book another test ride"
      />
    )
  }

  return (
    <form onSubmit={f.submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField label="Full Name" required autoComplete="name" {...f.bind('name')} />
      <TextField label="Mobile" required type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" {...f.bind('mobile')} />
      <TextField label="Email" required type="email" autoComplete="email" {...f.bind('email')} />
      <TextField label="City" required autoComplete="address-level2" {...f.bind('city')} />
      <div className="sm:col-span-2">
        <SelectField label="Vehicle" required options={bikeOptions} placeholder="Choose a model" {...f.bind('bike')} />
      </div>
      <TextField label="Preferred Date" required type="date" min={today} {...f.bind('date')} />
      <SelectField label="Preferred Time" required options={timeSlots} placeholder="Choose a time" {...f.bind('time')} />
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="dark" className="w-full sm:w-auto" disabled={f.status === 'submitting'}>
          {f.status === 'submitting' ? 'Sending request…' : 'Book Test Ride'}
        </Button>
      </div>
    </form>
  )
}

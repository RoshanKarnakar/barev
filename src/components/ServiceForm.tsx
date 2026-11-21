import { bikeOptions } from '../data/bikes'
import { serviceTypes, timeSlots } from '../data/content'
import { todayISO } from '../lib/format'
import { submitForm } from '../lib/submit'
import Button from './Button'
import { SelectField, TextAreaField, TextField, email, mobile, notPast, required, useForm } from './FormKit'
import SuccessMessage from './SuccessMessage'

export default function ServiceForm() {
  const today = todayISO()
  const f = useForm(
    { name: '', mobile: '', email: '', bike: '', registration: '', service: '', date: '', time: '', location: '', message: '' },
    {
      name: [required('Full name')],
      mobile: [required('Mobile number'), mobile],
      email: [required('Email'), email],
      bike: [required('Vehicle model')],
      registration: [required('Registration number')],
      service: [required('Service type')],
      date: [required('Preferred date'), notPast(today)],
      time: [required('Preferred time')],
      location: [required('Location')],
    },
    (v) => submitForm('service-booking', v),
  )

  if (f.status === 'done') {
    return (
      <SuccessMessage
        title="Service request received"
        message={`Thank you, ${f.values.name}. The BAR service team will contact you on ${f.values.mobile} to confirm your ${f.values.service.toLowerCase()} slot for ${f.values.registration.toUpperCase()}.`}
        onReset={f.reset}
        resetLabel="Book another service"
      />
    )
  }

  return (
    <form onSubmit={f.submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField label="Name" required autoComplete="name" {...f.bind('name')} />
      <TextField label="Mobile" required type="tel" inputMode="tel" autoComplete="tel" {...f.bind('mobile')} />
      <TextField label="Email" required type="email" autoComplete="email" {...f.bind('email')} />
      <SelectField label="Vehicle Model" required options={bikeOptions} placeholder="Choose a model" {...f.bind('bike')} />
      <TextField label="Registration Number" required placeholder="As on your registration certificate" {...f.bind('registration')} />
      <SelectField label="Service Type" required options={serviceTypes} placeholder="Choose a service" {...f.bind('service')} />
      <TextField label="Preferred Date" required type="date" min={today} {...f.bind('date')} />
      <SelectField label="Preferred Time" required options={timeSlots} placeholder="Choose a time" {...f.bind('time')} />
      <div className="sm:col-span-2"><TextField label="Location" required placeholder="City or area" {...f.bind('location')} /></div>
      <div className="sm:col-span-2"><TextAreaField label="Message" placeholder="Describe the issue or anything the team should know" {...f.bind('message')} /></div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="dark" className="w-full sm:w-auto" disabled={f.status === 'submitting'}>
          {f.status === 'submitting' ? 'Sending request…' : 'Book Service'}
        </Button>
      </div>
    </form>
  )
}

import { indianStates } from '../data/content'
import { submitForm } from '../lib/submit'
import Button from './Button'
import { SelectField, TextAreaField, TextField, email, mobile, required, useForm } from './FormKit'
import SuccessMessage from './SuccessMessage'

export default function DealerForm() {
  const f = useForm(
    { name: '', business: '', mobile: '', email: '', city: '', state: '', currentBusiness: '', years: '', territory: '', investment: '', message: '' },
    {
      name: [required('Full name')],
      business: [required('Business name')],
      mobile: [required('Mobile number'), mobile],
      email: [required('Email'), email],
      city: [required('City')],
      state: [required('State')],
      currentBusiness: [required('Current business')],
      years: [required('Years in business'), (v) => (/^\d{1,2}$/.test(v.trim()) ? undefined : 'Enter a whole number of years.')],
      territory: [required('Preferred territory')],
    },
    (v) => submitForm('dealer-application', v),
  )

  if (f.status === 'done') {
    return (
      <SuccessMessage
        title="Dealership application received"
        message={`Thank you, ${f.values.name}. The BAR dealer team will review your application for ${f.values.business} and contact you. Commercial terms and territory are discussed during the dealership evaluation process.`}
        onReset={f.reset}
        resetLabel="Submit another application"
      />
    )
  }

  return (
    <form onSubmit={f.submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField label="Full Name" required autoComplete="name" {...f.bind('name')} />
      <TextField label="Business Name" required autoComplete="organization" {...f.bind('business')} />
      <TextField label="Mobile" required type="tel" inputMode="tel" autoComplete="tel" {...f.bind('mobile')} />
      <TextField label="Email" required type="email" autoComplete="email" {...f.bind('email')} />
      <TextField label="City" required autoComplete="address-level2" {...f.bind('city')} />
      <SelectField label="State" required options={indianStates} placeholder="Choose a state" {...f.bind('state')} />
      <TextField label="Current Business" required placeholder="e.g. automobile retail, electronics" {...f.bind('currentBusiness')} />
      <TextField label="Years in Business" required inputMode="numeric" {...f.bind('years')} />
      <TextField label="Preferred Territory" required placeholder="City, district or region" {...f.bind('territory')} />
      <TextField label="Investment Capacity" placeholder="Your indicative budget (optional)" {...f.bind('investment')} />
      <div className="sm:col-span-2"><TextAreaField label="Message" placeholder="Tell us about your business and plans" {...f.bind('message')} /></div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto" disabled={f.status === 'submitting'}>
          {f.status === 'submitting' ? 'Sending application…' : 'Apply for Dealership'}
        </Button>
        <p className="mt-3 text-sm text-graphite/60">Commercial terms and territory are discussed during the dealership evaluation process.</p>
      </div>
    </form>
  )
}

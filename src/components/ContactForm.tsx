import { submitForm } from '../lib/submit'
import Button from './Button'
import { SelectField, TextAreaField, TextField, email, mobile, required, useForm } from './FormKit'
import SuccessMessage from './SuccessMessage'

const subjects = ['Customer Support', 'Sales', 'Dealership', 'Service', 'Other']

export default function ContactForm() {
  const f = useForm(
    { name: '', mobile: '', email: '', subject: '', message: '' },
    {
      name: [required('Name')],
      mobile: [required('Mobile number'), mobile],
      email: [required('Email'), email],
      subject: [required('Subject')],
      message: [required('Message'), (v) => (v.trim().length >= 10 ? undefined : 'Please add a little more detail (10 characters or more).')],
    },
    (v) => submitForm('contact', v),
  )

  if (f.status === 'done') {
    return (
      <SuccessMessage
        title="Message received"
        message={`Thank you, ${f.values.name}. The BAR team will get back to you about "${f.values.subject}".`}
        onReset={f.reset}
        resetLabel="Send another message"
      />
    )
  }

  return (
    <form onSubmit={f.submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField label="Name" required autoComplete="name" {...f.bind('name')} />
      <TextField label="Mobile" required type="tel" inputMode="tel" autoComplete="tel" {...f.bind('mobile')} />
      <TextField label="Email" required type="email" autoComplete="email" {...f.bind('email')} />
      <SelectField label="Subject" required options={subjects} placeholder="Choose a subject" {...f.bind('subject')} />
      <div className="sm:col-span-2"><TextAreaField label="Message" required rows={5} {...f.bind('message')} /></div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="dark" className="w-full sm:w-auto" disabled={f.status === 'submitting'}>
          {f.status === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}

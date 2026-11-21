import { Headphones, Mail, MapPin, Phone, Store, Wrench, BadgeDollarSign } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import { siteConfig } from '../config/site'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useSeo('Contact BAR Electric Vehicles', 'Contact BAR for customer support, sales, dealership and service enquiries.')
  const c = siteConfig.contact
  const channels = [
    { title: 'Customer Support', email: c.supportEmail, icon: Headphones },
    { title: 'Sales', email: c.salesEmail, icon: BadgeDollarSign },
    { title: 'Dealership', email: c.dealerEmail, icon: Store },
    { title: 'Service', email: c.serviceEmail, icon: Wrench },
  ]
  return (
    <>
      <PageHero title="Talk to BAR" subtitle="Pick the team that fits your question, or send us a message." />
      <section className="section-y bg-paper">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ title, email, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-graphite/15 bg-white p-6">
                <Icon className="h-7 w-7 text-forest" aria-hidden="true" />
                <h2 className="mt-4 text-2xl">{title}</h2>
                <a href={`mailto:${email}`} className="mt-2 flex items-center gap-2 break-all text-graphite/75 hover:text-forest"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />{email}</a>
                <a href={c.phoneHref} className="mt-1.5 flex items-center gap-2 text-graphite/75 hover:text-forest"><Phone className="h-4 w-4 shrink-0" aria-hidden="true" />{c.phone}</a>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-4xl">Visit or write to us</h2>
              <p className="mt-4 flex gap-3 text-graphite/75"><MapPin className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />{c.address}</p>
              <p className="mt-3 text-graphite/75">{c.hours}</p>
              <p className="mt-6 text-sm text-graphite/55">Contact details above are placeholders. Edit them in <code>src/config/site.ts</code>.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <h2 className="mb-6 text-3xl">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

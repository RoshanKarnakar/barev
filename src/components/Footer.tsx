import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react'
import { siteConfig } from '../config/site'
import Logo from './Logo'

const customer = [
  { to: '/bikes', label: 'Bikes' },
  { to: '/finance', label: 'Finance' },
  { to: '/test-ride', label: 'Test Ride' },
  { to: '/services', label: 'Services' },
  { to: '/my-bike', label: 'My Bike' },
  { to: '/contact', label: 'Contact' },
]
const business = [
  { to: '/dealership', label: 'Dealership' },
  { to: '/contact', label: 'Dealer Support' },
  { to: '/about', label: 'About' },
]
const legal = [
  { to: '/legal/privacy-policy', label: 'Privacy Policy' },
  { to: '/legal/terms', label: 'Terms' },
  { to: '/legal/warranty', label: 'Warranty' },
  { to: '/legal/refund-policy', label: 'Refund Policy' },
]
const socials = [
  { href: siteConfig.social.instagram, label: 'Instagram', icon: Instagram },
  { href: siteConfig.social.facebook, label: 'Facebook', icon: Facebook },
  { href: siteConfig.social.youtube, label: 'YouTube', icon: Youtube },
  { href: siteConfig.social.whatsapp, label: 'WhatsApp', icon: MessageCircle },
]

function Column({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-base font-semibold tracking-normal text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}><Link to={i.to} className="text-white/65 transition-colors hover:text-electric">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="on-dark bg-graphite text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-white/65">{siteConfig.description}</p>
          <ul className="mt-6 space-y-2.5 text-white/65">
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><a href={siteConfig.contact.phoneHref} className="hover:text-white">{siteConfig.contact.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><a href={`mailto:${siteConfig.contact.supportEmail}`} className="hover:text-white">{siteConfig.contact.supportEmail}</a></li>
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" /><span>{siteConfig.contact.address}</span></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
          <Column title="Customer" items={customer} />
          <Column title="Business" items={business} />
          <div className="col-span-2 sm:col-span-1">
            <Column title="Legal" items={legal} />
            <h2 className="mt-8 font-sans text-base font-semibold tracking-normal text-white">Social</h2>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white/75 transition-colors hover:border-electric hover:text-electric">
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>{siteConfig.name}. {siteConfig.vision}</p>
        </div>
      </div>
    </footer>
  )
}

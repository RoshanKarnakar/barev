// Edit company details here. Every page and the footer read from this file.
export const siteConfig = {
  name: 'BAR Electric Vehicles',
  shortName: 'BAR',
  legalName: 'BAR Green Energy Private Limited',
  tagline: 'Move Better. Ride Electric.',
  vision: 'To make clean and affordable electric mobility accessible to every Indian household.',
  description:
    'BAR Electric Vehicles is the electric two-wheeler brand of BAR Green Energy Private Limited, building affordable electric mobility for everyday India.',

  // Logo: put your file at public/assets/brand/bar-logo.svg (or .png) and it is used automatically.
  logoSrc: '/assets/brand/bar-logo.svg',

  // PLACEHOLDER contact details. Replace with real values.
  contact: {
    phone: '+91 00000 00000',
    phoneHref: 'tel:+910000000000',
    whatsapp: 'https://wa.me/910000000000',
    supportEmail: 'support@example.com',
    salesEmail: 'sales@example.com',
    dealerEmail: 'dealers@example.com',
    serviceEmail: 'service@example.com',
    address: 'Registered office address to be added, City, State, India',
    hours: 'Business hours to be announced',
  },

  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    whatsapp: 'https://wa.me/910000000000',
  },

  // Finance provider shown across the site. No live integration exists in Version 1.
  finance: {
    provider: 'Bajaj Finance',
    disclaimer:
      'Estimated EMI only. Final finance terms are subject to lender approval and applicable terms.',
    longDisclaimer:
      'Finance availability, interest rates, tenure, down payment and approval are subject to applicable lender terms and eligibility.',
  },

  // Version 1 has no backend. While true, confirmation screens say that nothing was transmitted.
  demoMode: true,
}

export type SiteConfig = typeof siteConfig

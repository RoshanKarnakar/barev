// Edit models and specifications here. Adding an entry creates its /bikes/:id page automatically.
// Anything left undefined is displayed as "To Be Announced". Do not add unofficial figures.

export interface Bike {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  image: string // e.g. /assets/bikes/scotty.png (file goes in public/assets/bikes)
  price?: number // INR ex-showroom, only when officially confirmed
  range?: string
  battery?: string
  chargingTime?: string
  motor?: string
  topSpeed?: string
  brakes?: string
  frontSuspension?: string
  rearSuspension?: string
  tyres?: string
  warranty?: string
  colors: string[]
  features: string[]
  availability: 'available' | 'coming-soon'
  finance?: {
    available: boolean
    provider?: string
  }
}

export const bikes: Bike[] = [
  {
    id: 'scotty',
    name: 'BAR Scotty',
    slug: 'scotty',
    tagline: 'The easy everyday ride.',
    description:
      'A friendly electric scooter planned for daily errands, college runs and short city trips. Final specifications will be published by BAR.',
    image: '/assets/bikes/scotty.png',
    colors: ['Forest Green', 'Graphite', 'Pearl White'],
    features: ['Electric powertrain', 'Designed for everyday Indian roads', 'Dealer-supported service'],
    availability: 'coming-soon',
    finance: { available: true, provider: 'Bajaj Finance' },
  },
  {
    id: 'volt-x',
    name: 'BAR Volt-X',
    slug: 'volt-x',
    tagline: 'Sharper looks. Built for the commute.',
    description:
      'A more performance-minded electric scooter concept for riders who cover the city every day. Final specifications will be published by BAR.',
    image: '/assets/bikes/volt-x.png',
    colors: ['Electric Green', 'Graphite', 'Pearl White'],
    features: ['Electric powertrain', 'Designed for everyday Indian roads', 'Dealer-supported service'],
    availability: 'coming-soon',
    finance: { available: true, provider: 'Bajaj Finance' },
  },
  {
    id: 'stark',
    name: 'BAR Stark',
    slug: 'stark',
    tagline: 'Practical strength for work and family.',
    description:
      'A practical electric two-wheeler concept for small businesses and family mobility. Final specifications will be published by BAR.',
    image: '/assets/bikes/stark.png',
    colors: ['Graphite', 'Forest Green', 'Pearl White'],
    features: ['Electric powertrain', 'Designed for everyday Indian roads', 'Dealer-supported service'],
    availability: 'coming-soon',
    finance: { available: true, provider: 'Bajaj Finance' },
  },
]

export const TBA = 'To Be Announced'

// Colour names -> display colour for swatches and the placeholder illustration.
export const colorSwatches: Record<string, string> = {
  'Forest Green': '#0F4A35',
  'Electric Green': '#1FC474',
  Graphite: '#2A312E',
  'Pearl White': '#E9ECE8',
  Black: '#111413',
  Silver: '#AEB5B2',
  Red: '#B3261E',
  Blue: '#1F4E8C',
}

export const swatchFor = (name?: string) => (name && colorSwatches[name]) || '#0F4A35'

export const getBike = (idOrSlug?: string) =>
  bikes.find((b) => b.id === idOrSlug || b.slug === idOrSlug)

export const bikeOptions = bikes.map((b) => ({ value: b.id, label: b.name }))

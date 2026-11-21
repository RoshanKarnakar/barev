import { TBA, type Bike } from '../data/bikes'

export const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
    Number.isFinite(n) ? n : 0,
  )

export const spec = (v?: string) => (v && v.trim() ? v : TBA)

export const priceLabel = (b: Bike) =>
  typeof b.price === 'number' ? formatINR(b.price) : b.availability === 'coming-soon' ? 'Coming Soon' : 'Contact BAR'

export const todayISO = () => {
  const d = new Date()
  const m = `${d.getMonth() + 1}`.padStart(2, '0')
  const day = `${d.getDate()}`.padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

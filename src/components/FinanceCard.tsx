import { Landmark } from 'lucide-react'
import { siteConfig } from '../config/site'
import type { Bike } from '../data/bikes'
import Button from './Button'

export default function FinanceCard({ bike }: { bike: Bike }) {
  const available = bike.finance?.available
  const provider = bike.finance?.provider ?? siteConfig.finance.provider
  return (
    <div className="rounded-xl border border-graphite/15 bg-paper p-6 sm:p-8">
      <Landmark className="h-8 w-8 text-forest" aria-hidden="true" />
      <h3 className="mt-4 text-3xl">{available ? `Finance for ${bike.name}` : 'Finance options'}</h3>
      <p className="mt-2 text-graphite/70">
        {available
          ? `${provider} is the planned lender for this model. Rates, tenure and down payment are set by the lender and subject to approval.`
          : 'Finance for this model is not listed yet. Contact BAR to ask about options.'}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button to={`/finance?bike=${bike.id}`} variant="dark">See finance process</Button>
        <Button to="/contact" variant="outline">Contact BAR</Button>
      </div>
    </div>
  )
}

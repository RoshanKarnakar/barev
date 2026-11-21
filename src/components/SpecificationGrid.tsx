import { BatteryCharging, Cog, Disc3, Gauge, Plug, Route, ShieldCheck, Zap, CircleDot } from 'lucide-react'
import type { Bike } from '../data/bikes'
import { spec } from '../lib/format'

export default function SpecificationGrid({ bike }: { bike: Bike }) {
  const suspension =
    bike.frontSuspension || bike.rearSuspension
      ? `Front: ${spec(bike.frontSuspension)} / Rear: ${spec(bike.rearSuspension)}`
      : spec()
  const items = [
    { label: 'Range', value: spec(bike.range), icon: Route },
    { label: 'Battery', value: spec(bike.battery), icon: BatteryCharging },
    { label: 'Charging', value: spec(bike.chargingTime), icon: Plug },
    { label: 'Motor', value: spec(bike.motor), icon: Zap },
    { label: 'Top Speed', value: spec(bike.topSpeed), icon: Gauge },
    { label: 'Brakes', value: spec(bike.brakes), icon: Disc3 },
    { label: 'Suspension', value: suspension, icon: Cog },
    { label: 'Tyres', value: spec(bike.tyres), icon: CircleDot },
    { label: 'Warranty', value: spec(bike.warranty), icon: ShieldCheck },
  ]
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg border border-graphite/15 bg-graphite/15 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ label, value, icon: Icon }) => (
        <div key={label} className="flex items-start gap-3 bg-white p-5">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
          <div>
            <dt className="text-sm text-graphite/60">{label}</dt>
            <dd className="mt-0.5 text-lg font-semibold text-graphite">{value}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}

import { useMemo, useState } from 'react'
import { siteConfig } from '../config/site'
import { calculateEmi } from '../lib/emi'
import { formatINR } from '../lib/format'
import Button from './Button'

interface Props {
  initialPrice?: number
  bikeId?: string
  dark?: boolean
}

const tenures = [6, 12, 18, 24, 30, 36, 48, 60]

function NumberRow({ label, value, onChange, min, max, step, suffix, error }: {
  label: string; value: number; onChange: (n: number) => void; min: number; max: number; step: number; suffix?: string; error?: string
}) {
  const id = `emi-${label.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-graphite">{label}</label>
        <div className="flex items-center gap-1">
          <input
            id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={Number.isFinite(value) ? value : ''}
            onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
            aria-invalid={error ? true : undefined}
            className={`input-base w-36 py-2 text-right ${error ? 'input-error' : ''}`}
          />
          {suffix && <span className="text-sm text-graphite/60">{suffix}</span>}
        </div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={Math.min(Math.max(value || 0, min), max)}
        onChange={(e) => onChange(Number(e.target.value))} aria-label={`${label} slider`}
        className="mt-2 w-full accent-forest"
      />
      {error && <p className="mt-1 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}

export default function EmiCalculator({ initialPrice, bikeId }: Props) {
  // Pre-filled numbers are illustrative inputs only, not BAR prices or lender offers.
  const [price, setPrice] = useState(initialPrice ?? 100000)
  const [down, setDown] = useState(Math.round((initialPrice ?? 100000) * 0.2))
  const [months, setMonths] = useState(24)
  const [rate, setRate] = useState(12)

  const errors = {
    price: price <= 0 ? 'Enter a vehicle price above zero.' : undefined,
    down: down < 0 ? 'Down payment cannot be negative.' : down >= price && price > 0 ? 'Down payment must be less than the price.' : undefined,
    rate: rate < 0 || rate > 60 ? 'Enter a rate between 0 and 60.' : undefined,
  }
  const valid = !errors.price && !errors.down && !errors.rate
  const result = useMemo(() => (valid ? calculateEmi(price, down, months, rate) : null), [valid, price, down, months, rate])

  return (
    <div className="rounded-xl border border-graphite/15 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-6 p-6 sm:p-8 lg:col-span-3">
          <NumberRow label="Vehicle Price" value={price} onChange={setPrice} min={0} max={500000} step={1000} suffix="INR" error={errors.price} />
          <NumberRow label="Down Payment" value={down} onChange={setDown} min={0} max={500000} step={1000} suffix="INR" error={errors.down} />
          <div>
            <label htmlFor="emi-tenure" className="mb-1.5 block text-sm font-semibold text-graphite">Loan Tenure</label>
            <select id="emi-tenure" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="input-base">
              {tenures.map((t) => <option key={t} value={t}>{t} months</option>)}
            </select>
          </div>
          <NumberRow label="Interest Rate" value={rate} onChange={setRate} min={0} max={60} step={0.25} suffix="% p.a." error={errors.rate} />
          <p className="text-sm text-graphite/60">Pre-filled values are illustrative inputs, not BAR prices or lender offers. Enter your own figures.</p>
        </div>
        <div className="flex flex-col justify-between bg-graphite p-6 text-white sm:p-8 lg:col-span-2 lg:rounded-r-xl on-dark">
          <div aria-live="polite">
            <p className="text-sm text-white/65">Estimated Monthly EMI</p>
            <p className="mt-1 font-display text-5xl font-extrabold text-electric sm:text-6xl">
              {result ? formatINR(Math.round(result.emi)) : 'Check inputs'}
            </p>
            {result && (
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-white/65">Loan amount</dt><dd>{formatINR(result.principal)}</dd></div>
                <div className="flex justify-between"><dt className="text-white/65">Total interest</dt><dd>{formatINR(Math.round(result.totalInterest))}</dd></div>
                <div className="flex justify-between border-t border-white/15 pt-2"><dt className="text-white/65">Total payable</dt><dd>{formatINR(Math.round(result.totalPayable))}</dd></div>
              </dl>
            )}
          </div>
          <div className="mt-6">
            <p className="text-sm leading-relaxed text-white/65">{siteConfig.finance.disclaimer}</p>
            <Button to={bikeId ? `/book/${bikeId}` : '/contact'} className="mt-4 w-full">Talk to BAR about finance</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

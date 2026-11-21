import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'

export type Rule = (value: string) => string | undefined
export type Rules<T> = { [K in keyof T]?: Rule[] }

export const required = (label: string): Rule => (v) => (v.trim() ? undefined : `${label} is required.`)
export const email: Rule = (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? undefined : 'Enter a valid email address.')
export const mobile: Rule = (v) => {
  let s = v.replace(/[\s-]/g, '')
  if (s.startsWith('+91')) s = s.slice(3)
  else if (s.length === 12 && s.startsWith('91')) s = s.slice(2)
  else if (s.length === 11 && s.startsWith('0')) s = s.slice(1)
  return /^[6-9]\d{9}$/.test(s) ? undefined : 'Enter a valid 10-digit mobile number.'
}
export const notPast = (todayISO: string): Rule => (v) => (!v || v >= todayISO ? undefined : 'Choose today or a future date.')

type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export function useForm<T extends Record<string, string>>(
  initial: T,
  rules: Rules<T>,
  onSubmit: (values: T) => Promise<void> | void,
) {
  const [values, setValues] = useState<T>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')

  const set = (name: keyof T, value: string) => {
    setValues((p) => ({ ...p, [name]: value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const bind = (name: keyof T) => ({
    name: String(name),
    value: values[name],
    error: errors[name],
    onChange: (e: FieldEvent) => set(name, e.target.value),
  })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const next: Partial<Record<keyof T, string>> = {}
    let ok = true
    for (const key of Object.keys(rules) as (keyof T)[]) {
      for (const rule of rules[key] ?? []) {
        const msg = rule(values[key])
        if (msg) { next[key] = msg; ok = false; break }
      }
    }
    setErrors(next)
    if (!ok) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus())
      return
    }
    setStatus('submitting')
    await onSubmit(values)
    setStatus('done')
  }

  const reset = () => { setValues(initial); setErrors({}); setStatus('idle') }
  return { values, errors, bind, set, submit, reset, status }
}

interface Shell { label: string; error?: string; hint?: string; required?: boolean; id: string; children: ReactNode }

function Shell({ label, error, hint, required: isRequired, id, children }: Shell) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-graphite">
        {label}{isRequired && <span className="text-red-700" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1 text-sm text-graphite/60">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-1 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}

interface FieldProps {
  label: string
  name: string
  value: string
  error?: string
  onChange: (e: FieldEvent) => void
  hint?: string
  required?: boolean
}

const aria = (id: string, error?: string, hint?: string) => ({
  'aria-invalid': error ? true : undefined,
  'aria-describedby': error ? `${id}-err` : hint ? `${id}-hint` : undefined,
})

export function TextField(p: FieldProps & { type?: string; placeholder?: string; autoComplete?: string; min?: string; inputMode?: 'numeric' | 'tel' | 'email' | 'text' }) {
  const id = useId()
  return (
    <Shell id={id} label={p.label} error={p.error} hint={p.hint} required={p.required}>
      <input
        id={id} name={p.name} type={p.type ?? 'text'} value={p.value} onChange={p.onChange}
        placeholder={p.placeholder} autoComplete={p.autoComplete} min={p.min} inputMode={p.inputMode}
        className={`input-base ${p.error ? 'input-error' : ''}`} {...aria(id, p.error, p.hint)}
      />
    </Shell>
  )
}

export function SelectField(p: FieldProps & { options: (string | { value: string; label: string })[]; placeholder?: string }) {
  const id = useId()
  return (
    <Shell id={id} label={p.label} error={p.error} hint={p.hint} required={p.required}>
      <select id={id} name={p.name} value={p.value} onChange={p.onChange} className={`input-base ${p.error ? 'input-error' : ''}`} {...aria(id, p.error, p.hint)}>
        <option value="">{p.placeholder ?? 'Select an option'}</option>
        {p.options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
    </Shell>
  )
}

export function TextAreaField(p: FieldProps & { placeholder?: string; rows?: number }) {
  const id = useId()
  return (
    <Shell id={id} label={p.label} error={p.error} hint={p.hint} required={p.required}>
      <textarea
        id={id} name={p.name} value={p.value} onChange={p.onChange} rows={p.rows ?? 4} placeholder={p.placeholder}
        className={`input-base resize-y ${p.error ? 'input-error' : ''}`} {...aria(id, p.error, p.hint)}
      />
    </Shell>
  )
}

export interface EmiResult {
  emi: number
  principal: number
  totalInterest: number
  totalPayable: number
}

// Standard reducing-balance EMI: P * r * (1+r)^n / ((1+r)^n - 1), r = annual rate / 12 / 100
export function calculateEmi(price: number, downPayment: number, months: number, annualRate: number): EmiResult {
  const principal = Math.max(price - downPayment, 0)
  if (principal <= 0 || months <= 0) return { emi: 0, principal: 0, totalInterest: 0, totalPayable: 0 }
  const r = annualRate / 12 / 100
  const emi = r === 0 ? principal / months : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  const totalPayable = emi * months
  return { emi, principal, totalInterest: totalPayable - principal, totalPayable }
}

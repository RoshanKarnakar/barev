// Version 1 has no backend. Replace the body of this function with a real request
// (your own API, a form service, or email) when you are ready. Every form calls it.
export async function submitForm(kind: string, payload: Record<string, string>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600))
  // eslint-disable-next-line no-console
  console.info('[BAR form submitted]', kind, payload)
}

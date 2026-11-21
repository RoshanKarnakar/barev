import { useSeo } from '../lib/useSeo'
import Button from '../components/Button'
import ScooterVisual from '../components/ScooterVisual'

export default function NotFound() {
  useSeo('Page not found | BAR Electric Vehicles', 'The page you are looking for could not be found.')
  return (
    <section className="on-dark bg-graphite text-white">
      <div className="container-x flex flex-col items-center py-20 text-center sm:py-28">
        <p className="font-display text-8xl font-extrabold text-electric sm:text-9xl">404</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Looks like you&apos;ve taken a wrong turn.</h1>
        <ScooterVisual className="mt-8 h-auto w-full max-w-sm opacity-90" spin={false} />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">Back to BAR</Button>
          <Button to="/bikes" size="lg" variant="outlineLight">Explore Bikes</Button>
        </div>
      </div>
    </section>
  )
}

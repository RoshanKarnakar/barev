import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button'
import ScooterVisual from './ScooterVisual'
import { siteConfig } from '../config/site'

export default function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-graphite text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-forest/60 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-8 pb-16 pt-12 sm:pt-16 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-6xl leading-[0.95] sm:text-7xl lg:text-8xl xl:text-[7rem]"
          >
            Move Better.<br />Ride Electric.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-xl text-white/75"
          >
            Affordable electric mobility built for everyday India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button to="/bikes" size="lg">Explore Bikes</Button>
            <Button to="/test-ride" size="lg" variant="outlineLight">Book a Test Ride</Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-white/65"
          >
            Own a business?{' '}
            <Link to="/dealership" className="font-semibold text-electric underline-offset-4 hover:underline">Become a Dealer</Link>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            {/* Replace with a real image: put it in public/assets/hero/ and swap this component for an <img>. */}
            <ScooterVisual className="mx-auto h-auto w-full max-w-[640px]" road />
          </motion.div>
          <p className="sr-only">{siteConfig.name} electric scooter illustration</p>
        </motion.div>
      </div>
    </section>
  )
}

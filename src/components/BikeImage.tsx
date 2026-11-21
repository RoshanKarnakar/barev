import { useState } from 'react'
import { motion } from 'framer-motion'
import ScooterVisual from './ScooterVisual'
import { swatchFor, type Bike } from '../data/bikes'

interface Props {
  bike: Bike
  colorName?: string
  className?: string
  road?: boolean
  priority?: boolean
}

// Shows the real image at bike.image when the file exists, otherwise the SVG placeholder.
export default function BikeImage({ bike, colorName, className = '', road = false }: Props) {
  const [loaded, setLoaded] = useState(false)
  const color = swatchFor(colorName ?? bike.colors[0])
  return (
    <div className={`relative ${className}`}>
      {!loaded && <ScooterVisual color={color} road={road} className="h-full w-full" />}
      <motion.img
        src={bike.image}
        alt={`${bike.name} electric scooter`}
        className={`absolute inset-0 h-full w-full object-contain ${loaded ? '' : 'pointer-events-none opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        loading="lazy"
      />
    </div>
  )
}

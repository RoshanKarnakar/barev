import { useCallback, useState } from 'react'
import type { Bike } from '../data/bikes'
import BikeCard from './BikeCard'
import Modal from './Modal'
import TestRideForm from './TestRideForm'
import Reveal from './Reveal'

export default function BikeGrid({ bikes }: { bikes: Bike[] }) {
  const [selected, setSelected] = useState<Bike | null>(null)
  const close = useCallback(() => setSelected(null), [])
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bikes.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.06} className="h-full">
            <BikeCard bike={b} onTestRide={setSelected} />
          </Reveal>
        ))}
      </div>
      <Modal open={!!selected} onClose={close} title={selected ? `Book a test ride: ${selected.name}` : 'Book a test ride'}>
        {selected && <TestRideForm key={selected.id} defaultBike={selected.id} />}
      </Modal>
    </>
  )
}

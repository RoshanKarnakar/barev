import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/bikes', label: 'Bikes' },
  { to: '/finance', label: 'Finance' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/dealership', label: 'Dealership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`on-dark sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-white/10 bg-graphite/90 backdrop-blur-md' : 'border-transparent bg-graphite'}`}>
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive ? 'text-electric' : 'text-white/80 hover:text-white'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/test-ride" size="sm">Book Test Ride</Button>
          <Button to="/dealership" size="sm" variant="outlineLight" className="hidden xl:inline-flex">Become a Dealer</Button>
        </div>
        <button
          type="button" className="rounded-md p-2 text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-graphite pb-6 lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to} to={l.to} end={l.to === '/'}
                  className={({ isActive }) => `border-b border-white/10 py-4 font-display text-3xl font-bold ${isActive ? 'text-electric' : 'text-white'}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-6 grid gap-3">
                <Button to="/test-ride" size="lg">Book Test Ride</Button>
                <Button to="/dealership" size="lg" variant="outlineLight">Become a Dealer</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

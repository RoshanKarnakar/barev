import { MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Bikes from './pages/Bikes'
import BikeDetail from './pages/BikeDetail'
import Finance from './pages/Finance'
import TestRide from './pages/TestRide'
import Services from './pages/Services'
import ServiceBooking from './pages/ServiceBooking'
import Dealership from './pages/Dealership'
import About from './pages/About'
import Contact from './pages/Contact'
import FaqPage from './pages/FaqPage'
import MyBike from './pages/MyBike'
import BookBike from './pages/BookBike'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/test-ride" element={<TestRide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-booking" element={<ServiceBooking />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/my-bike" element={<MyBike />} />
          <Route path="/book/:bikeId" element={<BookBike />} />
          <Route path="/legal/:slug" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}

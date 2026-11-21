import {
  BadgeCheck, Wallet, Wrench, ShieldCheck, Zap, Users, Handshake, Headphones, Store, Package,
  Megaphone, GraduationCap, Cog, Palette, BatteryCharging, Disc3, Cpu, FileText, Sparkles,
  Briefcase, Home, Building2, Route, Trees, Bike as BikeIcon, Gauge, HeartHandshake, Leaf,
  type LucideIcon,
} from 'lucide-react'

export interface IconItem { title: string; text: string; icon: LucideIcon }

export const trustItems: { label: string; icon: LucideIcon }[] = [
  { label: 'Affordable Ownership', icon: Wallet },
  { label: 'Everyday Practicality', icon: BikeIcon },
  { label: 'Reliable Support', icon: Headphones },
  { label: 'Modern Electric Mobility', icon: Zap },
  { label: 'Growing Dealer Network', icon: Store },
]

export const whyBar: IconItem[] = [
  { title: 'Affordable', text: 'Electric mobility priced with the Indian household in mind.', icon: Wallet },
  { title: 'Practical', text: 'Designed around daily commutes, errands and family needs.', icon: BikeIcon },
  { title: 'Efficient', text: 'Electric power that keeps the cost of every ride down.', icon: Gauge },
  { title: 'Reliable', text: 'Built to be dependable, backed by service you can reach.', icon: ShieldCheck },
  { title: 'Customer Focused', text: 'From test ride to service, one team that listens.', icon: HeartHandshake },
  { title: 'Dealer Supported', text: 'A growing network that brings BAR close to your city.', icon: Handshake },
]

export const dailyLife: IconItem[] = [
  { title: 'Daily Commute', text: 'Office and back without the petrol stop.', icon: Route },
  { title: 'College', text: 'Easy to park, easy to ride, easy on the budget.', icon: GraduationCap },
  { title: 'Family Mobility', text: 'Everyday trips for the whole household.', icon: Home },
  { title: 'Small Business', text: 'Deliveries, visits and errands that keep work moving.', icon: Briefcase },
  { title: 'Urban Travel', text: 'Quiet, nimble rides through busy city streets.', icon: Building2 },
  { title: 'Semi-Urban Travel', text: 'Reliable rides for towns and growing neighbourhoods.', icon: Trees },
]

export const serviceHighlights: IconItem[] = [
  { title: 'Vehicle Service', text: 'Scheduled care for your BAR.', icon: Wrench },
  { title: 'Battery Support', text: 'Guidance and checks for your battery.', icon: BatteryCharging },
  { title: 'Warranty Support', text: 'Help with warranty questions and claims.', icon: ShieldCheck },
  { title: 'Spare Parts', text: 'Genuine parts through the BAR network.', icon: Package },
  { title: 'Accessories', text: 'Add-ons to make your BAR your own.', icon: Palette },
  { title: 'Customer Support', text: 'A team to call when you need help.', icon: Headphones },
]

export const serviceCards: IconItem[] = [
  { title: 'Periodic Service', text: 'Routine inspection and upkeep to keep your BAR in good condition.', icon: Wrench },
  { title: 'Battery Check', text: 'Battery health and charging checks by trained technicians.', icon: BatteryCharging },
  { title: 'Brake Inspection', text: 'Inspection of brakes for safe, confident stopping.', icon: Disc3 },
  { title: 'Tyre Check', text: 'Tyre condition and pressure checks.', icon: Cog },
  { title: 'Electrical Diagnostics', text: 'Diagnosis of electrical and electronic components.', icon: Cpu },
  { title: 'Warranty Support', text: 'Assistance with warranty-related service requests.', icon: ShieldCheck },
  { title: 'Spare Parts', text: 'Replacement parts supplied through BAR.', icon: Package },
  { title: 'Accessories', text: 'Accessories to personalise and protect your vehicle.', icon: Sparkles },
]

export const dealerBenefits: IconItem[] = [
  { title: 'Dealer Support', text: 'A dedicated BAR team to help you from day one.', icon: Handshake },
  { title: 'Sales Support', text: 'Tools and guidance to present BAR to your customers.', icon: BadgeCheck },
  { title: 'Marketing Support', text: 'Brand material and campaigns for your local market.', icon: Megaphone },
  { title: 'Product Training', text: 'Know the range well enough to advise every buyer.', icon: GraduationCap },
  { title: 'Technical Support', text: 'Technical help when your team needs it.', icon: Cpu },
  { title: 'Service Ecosystem', text: 'A service network that keeps customers riding.', icon: Wrench },
  { title: 'Spare Parts', text: 'Parts supply to support after-sales service.', icon: Package },
  { title: 'Branding Support', text: 'Showroom and signage guidance to present BAR properly.', icon: Palette },
]

export const dealerJourney = [
  'Application', 'Evaluation', 'Discussion', 'Approval', 'Onboarding', 'Training', 'Showroom Setup', 'Launch',
]

export const financeSteps = [
  { title: 'Choose your BAR', text: 'Pick the model that fits your daily ride.' },
  { title: 'Choose finance', text: 'Review the EMI estimate and the lender option.' },
  { title: 'Submit application', text: 'Apply with the lender through BAR or your dealer.' },
  { title: 'Approval', text: 'The lender reviews your application and eligibility.' },
  { title: 'Purchase', text: 'Complete the purchase and take your BAR home.' },
]

export const aboutBeliefs: IconItem[] = [
  { title: 'Mobility is a right', text: 'Good transport should not depend on how much you can spend.', icon: Route },
  { title: 'Practical beats flashy', text: 'A vehicle earns trust by working every single day.', icon: BikeIcon },
  { title: 'Support builds loyalty', text: 'The ride is the start. Service is the relationship.', icon: Headphones },
  { title: 'Cleaner cities', text: 'Electric two-wheelers can make everyday travel cleaner.', icon: Leaf },
]

export interface FaqItem { q: string; a: string }

export const faqs: FaqItem[] = [
  {
    q: 'How can I buy a BAR electric scooter?',
    a: 'Explore the BAR range, then send a purchase enquiry or contact BAR. Our team will guide you on availability and the next steps for your city.',
  },
  {
    q: 'How can I book a test ride?',
    a: 'Use the Book a Test Ride form on this website. Choose your model, city, preferred date and time, and the BAR team will get in touch to confirm.',
  },
  {
    q: 'What financing options are available?',
    a: 'BAR plans to offer financing through lending partners. Availability, rates, tenure and down payment depend on the lender. Use the EMI calculator for an estimate.',
  },
  {
    q: 'Is Bajaj Finance available?',
    a: 'Bajaj Finance is the planned finance partner. Availability for your city and model is subject to lender terms and eligibility. Contact BAR to confirm.',
  },
  {
    q: 'How do I service my BAR vehicle?',
    a: 'Book a service from the Service Booking page with your model, registration number and preferred slot. The BAR service team will confirm with you.',
  },
  {
    q: 'How can I become a dealer?',
    a: 'Fill in the dealership application. Commercial terms and territory are discussed during the dealership evaluation process.',
  },
  {
    q: 'Where are BAR vehicles available?',
    a: 'Availability by city will be announced as the dealer network grows. Contact BAR to ask about your location.',
  },
  {
    q: 'How can I contact BAR?',
    a: 'Use the Contact page to reach customer support, sales, dealership or service teams, or send a message through the contact form.',
  },
  {
    q: 'What documents are required?',
    a: 'Document requirements depend on the purchase and the lender. Contact BAR or your lender for the current list before you apply.',
  },
]

export const timeSlots = ['Morning', 'Afternoon', 'Evening']

export const serviceTypes = [
  'Periodic Service', 'Battery Check', 'Brake Inspection', 'Tyre Check',
  'Electrical Diagnostics', 'Warranty Support', 'Spare Parts', 'Accessories', 'Other',
]

export const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry',
]

export const FileTextIcon = FileText

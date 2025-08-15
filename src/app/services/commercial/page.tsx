import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import {
  Building,
  Factory,
  Wrench,
  CheckCircle,
  Shield,
  Clock,
  ArrowRight,
  DollarSign,
  BadgeCheck
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Commercial Roofing | All Season Roofing of SE Florida Inc.',
  description:
    'Specialized commercial roofing services including TPO, EPDM, metal, and built-up systems. Minimize downtime with expert installation and maintenance.',
  keywords: [
    'commercial roofing',
    'TPO roofing',
    'EPDM roofing',
    'flat roof systems',
    'built-up roofing',
    'commercial roof maintenance'
  ]
}

const offerings = [
  {
    title: 'Flat Roof Systems',
    description: 'Design and installation of durable flat roof assemblies for businesses',
    icon: Building,
    bullets: ['TPO and EPDM membranes', 'Proper insulation and drainage', 'Manufacturer-backed warranties']
  },
  {
    title: 'Metal Roofing',
    description: 'Long-lasting metal panels engineered for commercial performance',
    icon: Factory,
    bullets: ['Standing seam systems', 'High wind resistance', 'Energy efficiency']
  },
  {
    title: 'Built-Up Roofing',
    description: 'Multi-layer protection for high-traffic commercial roofs',
    icon: Shield,
    bullets: ['Multiple ply layers', 'Gravel/reflective cap', 'Excellent durability']
  },
  {
    title: 'Maintenance Programs',
    description: 'Proactive care to extend roof life and prevent disruptions',
    icon: Wrench,
    bullets: ['Scheduled inspections', 'Preventive repairs', 'Leak response priority']
  }
]

const benefits = [
  { label: 'Minimal Downtime', icon: Clock },
  { label: 'Code Compliance', icon: BadgeCheck },
  { label: 'Budget-Friendly Options', icon: DollarSign },
  { label: 'Warranty Coverage', icon: Shield }
]

export default function CommercialRoofingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section>
      </section>
      <Hero
        sources={[
          'https://images.pexels.com/photos/4483772/pexels-photo-4483772.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/commercial.svg',
          'https://source.unsplash.com/1600x900/?commercial,roof,flat'
        ]}
        alt="Commercial flat roofing system installation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Commercial Roofing
                <span className="block text-blue-300">Engineered For Business</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Reliable, efficient roofing systems that protect your operations and your
                bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Businesses Choose Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <b.icon className="h-6 w-6 text-blue-300" />
                    <span className="text-lg">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Hero>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commercial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored systems for flat roofs, metal, and built-up applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((o, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <o.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{o.title}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{o.description}</p>
                <ul className="space-y-2">
                  {o.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready To Discuss Your Facility?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a tailored proposal that fits your building, budget, and timeline.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Request Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}



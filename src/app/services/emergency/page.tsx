import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { AlertTriangle, Clock, Phone, CheckCircle, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Emergency Roofing | All Season Roofing of SE Florida Inc.',
  description:
    '24/7 emergency roofing service for leaks, storm damage, and urgent repairs. Fast response to protect your property and prevent further damage.',
  keywords: [
    'emergency roofing',
    '24/7 roof repair',
    'storm damage roof',
    'urgent roof leak'
  ]
}

const steps = [
  { num: 1, title: 'Call Us 24/7', desc: 'Immediate phone assessment and dispatch', icon: Phone },
  { num: 2, title: 'On-Site Stabilization', desc: 'Temporary protection to stop active leaks', icon: AlertTriangle },
  { num: 3, title: 'Damage Assessment', desc: 'Documented inspection for insurance', icon: Shield },
  { num: 4, title: 'Permanent Repairs', desc: 'Quality fix using proper materials', icon: CheckCircle }
]

export default function EmergencyServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        sources={[
          '/images/hero/emergency.svg',
          'https://images.pexels.com/photos/775208/pexels-photo-775208.jpeg?auto=compress&cs=tinysrgb&w=1920',
          'https://source.unsplash.com/1600x900/?storm,roof,emergency'
        ]}
        alt="Emergency roofing team responding to storm damage at night"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">24/7 Emergency Roofing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Fast response to stop leaks, stabilize damage, and protect your property—day or night.
          </p>
          <a
            href="tel:+19545158702"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" /> Call Now
          </a>
        </div>
      </Hero>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, immediate process to minimize damage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{s.num}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Help Right Now?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We can typically be on-site within hours for active leaks and storm damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19545158702"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              <Clock className="mr-2 h-5 w-5" /> Call 24/7
            </a>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Follow-up
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



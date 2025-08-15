import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Settings, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Roof Maintenance | All Season Roofing of SE Florida Inc.',
  description:
    'Proactive roof maintenance plans to extend lifespan, prevent leaks, and protect warranties. Scheduled inspections and preventive repairs.',
  keywords: ['roof maintenance', 'roof tune-up', 'roof inspection plan', 'preventive roof care']
}

const planItems = [
  'Seasonal inspections',
  'Debris and gutter cleaning',
  'Sealant touch-ups',
  'Minor repairs included',
  'Detailed photo reports',
  'Warranty preservation'
]

const plans = [
  { name: 'Annual Plan', price: 'From $299/yr', includes: planItems.slice(0, 5) },
  { name: 'Bi-Annual Plan', price: 'From $499/yr', includes: planItems },
  { name: 'Commercial PM', price: 'Custom', includes: ['Quarterly inspections', 'Priority leak response', 'Compliance documentation'] }
]

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        sources={[
          'https://images.pexels.com/photos/6474450/pexels-photo-6474450.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/maintenance.svg',
          'https://source.unsplash.com/1600x900/?roof,maintenance,gutter'
        ]}
        alt="Roof maintenance technician cleaning gutters and inspecting shingles"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Roof Maintenance Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Prevent problems before they start and keep your roof performing for years.
          </p>
        </div>
      </Hero>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plan Options</h2>
            <p className="text-xl text-gray-600">Choose a plan that fits your home or facility</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{plan.name}</h3>
                <div className="text-center text-2xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <ul className="space-y-2 mb-6">
                  {plan.includes.map((it, j) => (
                    <li key={j} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Ahead Of Repairs</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Scheduled care helps prevent leaks, extends lifespan, and preserves warranties.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Request Maintenance Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}



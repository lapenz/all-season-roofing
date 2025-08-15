import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Shield, ClipboardList, Camera, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Roof Inspections | All Season Roofing of SE Florida Inc.',
  description:
    'Professional roof inspections for buyers, sellers, insurance, and seasonal checkups. Detailed reports with photos and recommendations.',
  keywords: ['roof inspection', 'roof report', 'insurance roof inspection', 'home buyer inspection']
}

const inclusions = [
  { title: 'Comprehensive Evaluation', icon: ClipboardList, text: 'Shingles, flashing, ventilation, gutters, penetrations' },
  { title: 'Photo Documentation', icon: Camera, text: 'Clear images highlighting current condition and issues' },
  { title: 'Actionable Report', icon: FileText, text: 'Prioritized recommendations and repair estimates' },
  { title: 'Warranty Guidance', icon: Shield, text: 'Advice to preserve coverage and avoid voiding terms' }
]

export default function InspectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        sources={[
          'https://images.pexels.com/photos/6474457/pexels-photo-6474457.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/inspections.svg',
          'https://source.unsplash.com/1600x900/?roof,inspection'
        ]}
        alt="Roof inspector documenting roof condition with photos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Roof Inspections</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get a clear, documented understanding of your roof’s condition and next steps.
          </p>
        </div>
      </Hero>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What’s Included</h2>
            <p className="text-xl text-gray-600">Thorough review with photos and prioritized actions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((inc, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <inc.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{inc.title}</h3>
                <p className="text-gray-600 text-sm">{inc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Schedule Your Inspection</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ideal for home buyers and sellers, insurance documentation, or annual checkups.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}



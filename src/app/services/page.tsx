import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Home,
  Building,
  AlertTriangle,
  Settings
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Roof Repairs',
    description: 'Fast and reliable repairs for all types of roofing issues',
    icon: Wrench,
    features: [
      'Leak detection and repair',
      'Shingle replacement',
      'Flashing repair',
      'Ventilation fixes',
      'Gutter repair',
      'Emergency patch work'
    ],
    benefits: [
      'Extend roof lifespan',
      'Prevent water damage',
      'Maintain energy efficiency',
      'Protect home value'
    ],
    href: '/services/repairs'
  },
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement with premium materials',
    icon: Home,
    features: [
      'Full roof tear-off',
      'New underlayment installation',
      'Premium shingle options',
      'Proper ventilation setup',
      'Warranty coverage',
      'Clean-up service'
    ],
    benefits: [
      'Maximum protection',
      'Improved energy efficiency',
      'Enhanced curb appeal',
      'Long-term investment'
    ],
    href: '/services/replacement'
  },
  {
    title: 'Commercial Roofing',
    description: 'Specialized solutions for commercial properties',
    icon: Building,
    features: [
      'Flat roof systems',
      'TPO and EPDM membranes',
      'Built-up roofing',
      'Metal roofing options',
      'Preventive maintenance',
      'Energy-efficient solutions'
    ],
    benefits: [
      'Minimal business disruption',
      'Extended roof life',
      'Energy cost savings',
      'Professional appearance'
    ],
    href: '/services/commercial'
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency response for urgent roofing needs',
    icon: AlertTriangle,
    features: [
      '24/7 emergency response',
      'Storm damage assessment',
      'Temporary repairs',
      'Insurance claim assistance',
      'Quick leak fixes',
      'Safety inspections'
    ],
    benefits: [
      'Immediate protection',
      'Prevent further damage',
      'Peace of mind',
      'Professional emergency care'
    ],
    href: '/services/emergency'
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance to extend roof life and prevent issues',
    icon: Settings,
    features: [
      'Regular inspections',
      'Gutter cleaning',
      'Debris removal',
      'Minor repairs',
      'Ventilation checks',
      'Preventive measures'
    ],
    benefits: [
      'Extend roof lifespan',
      'Prevent costly repairs',
      'Maintain warranty',
      'Early problem detection'
    ],
    href: '/services/maintenance'
  },
  {
    title: 'Inspections',
    description: 'Professional roof inspections for buyers, sellers, and insurance',
    icon: Shield,
    features: [
      'Pre-purchase inspections',
      'Insurance assessments',
      'Storm damage evaluation',
      'Detailed reports',
      'Photo documentation',
      'Recommendations'
    ],
    benefits: [
      'Informed decisions',
      'Insurance compliance',
      'Peace of mind',
      'Professional documentation'
    ],
    href: '/services/inspections'
  }
]

export const metadata = {
  title: 'Roofing Services | All Season Roofing of SE Florida Inc.',
  description: 'Comprehensive roofing services including repairs, replacements, commercial roofing, emergency services, maintenance, and inspections. Get expert roofing solutions in South Florida.',
  keywords: [
    'roofing services',
    'roof repair',
    'roof replacement',
    'commercial roofing',
    'emergency roofing',
    'roof maintenance',
    'roof inspection'
  ]
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        sources={[
          'https://images.pexels.com/photos/6473605/pexels-photo-6473605.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/services.svg',
          'https://source.unsplash.com/1600x900/?roofing,services'
        ]}
        alt="Various roofing services including flat and shingle roofs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Roofing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From emergency repairs to complete replacements, we provide comprehensive 
            roofing solutions to protect your home or business.
          </p>
        </div>
      </Hero>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose All Season Roofing of SE Florida Inc.?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine experience, quality materials, and professional service 
              to deliver roofing solutions that last.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                Fully licensed and insured for your protection and peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Certified installers with years of experience in all roofing systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600 text-sm">
                Available around the clock for emergency roofing situations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive warranty coverage on all materials and workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your roofing project. 
            Our team is ready to help protect your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+19545158702"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(954) 515-8702</p>
              <p className="text-sm text-gray-500">24/7 Emergency Service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@asrfl.com</p>
              <p className="text-sm text-gray-500">Quick Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">3300 N Palm Aire Dr, Apt 403</p>
              <p className="text-sm text-gray-500">Pompano Beach, FL 33069</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { 
  Wrench, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Star,
  ArrowRight,
  Home,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Roof Repairs | All Season Roofing of SE Florida Inc.',
  description: 'Professional roof repair services for leaks, damaged shingles, flashing issues, and more. Fast, reliable repairs to protect your home.',
  keywords: [
    'roof repair',
    'leak repair',
    'shingle repair',
    'flashing repair',
    'emergency roof repair',
    'roof maintenance'
  ]
}

const repairServices = [
  {
    title: 'Leak Detection & Repair',
    description: 'Find and fix roof leaks quickly to prevent water damage',
    icon: AlertTriangle,
    features: [
      'Advanced leak detection technology',
      'Immediate temporary fixes',
      'Permanent repair solutions',
      'Water damage assessment',
      'Prevention recommendations'
    ],
    price: 'From $150'
  },
  {
    title: 'Shingle Replacement',
    description: 'Replace damaged, missing, or worn shingles',
    icon: Home,
    features: [
      'Individual shingle replacement',
      'Color matching services',
      'Proper installation techniques',
      'Warranty coverage',
      'Clean-up after repair'
    ],
    price: 'From $200'
  },
  {
    title: 'Flashing Repair',
    description: 'Fix damaged flashing around chimneys, vents, and skylights',
    icon: Wrench,
    features: [
      'Chimney flashing repair',
      'Vent pipe sealing',
      'Skylight flashing',
      'Step and counter flashing',
      'Proper caulking application'
    ],
    price: 'From $300'
  },
  {
    title: 'Gutter & Downspout Repair',
    description: 'Fix damaged gutters and ensure proper drainage',
    icon: Wrench,
    features: [
      'Gutter reattachment',
      'Downspout repair',
      'Drainage optimization',
      'Debris removal',
      'Preventive maintenance'
    ],
    price: 'From $100'
  },
  {
    title: 'Ventilation Repair',
    description: 'Fix ventilation issues to improve energy efficiency',
    icon: Zap,
    features: [
      'Ridge vent repair',
      'Soffit vent installation',
      'Air flow optimization',
      'Moisture control',
      'Energy efficiency improvement'
    ],
    price: 'From $250'
  },
  {
    title: 'Emergency Patch Work',
    description: 'Quick temporary fixes for urgent situations',
    icon: Clock,
    features: [
      '24/7 emergency response',
      'Temporary water barriers',
      'Safety assessments',
      'Immediate protection',
      'Follow-up permanent repairs'
    ],
    price: 'From $200'
  }
]

const commonIssues = [
  {
    issue: 'Missing or Damaged Shingles',
    symptoms: 'Visible gaps, curling edges, granule loss',
    solution: 'Replace damaged shingles and secure loose ones',
    urgency: 'Medium - Address within 1-2 weeks'
  },
  {
    issue: 'Leaking Around Chimney',
    symptoms: 'Water stains on ceiling, damp walls near chimney',
    solution: 'Repair or replace chimney flashing and sealant',
    urgency: 'High - Address immediately to prevent water damage'
  },
  {
    issue: 'Clogged or Damaged Gutters',
    symptoms: 'Water overflow, sagging gutters, foundation issues',
    solution: 'Clean gutters, repair damage, optimize drainage',
    urgency: 'Medium - Address within 1 week'
  },
  {
    issue: 'Poor Ventilation',
    symptoms: 'High energy bills, attic moisture, ice dams',
    solution: 'Install or repair ventilation systems',
    urgency: 'Medium - Address before next season'
  },
  {
    issue: 'Storm Damage',
    symptoms: 'Visible damage, leaks, missing materials',
    solution: 'Emergency assessment and immediate repairs',
    urgency: 'High - Address immediately'
  }
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    rating: 5,
    text: 'They fixed our roof leak in just a few hours. Professional service and fair pricing. Highly recommend!',
    service: 'Leak Repair'
  },
  {
    name: 'Robert Chen',
    rating: 5,
    text: 'Great work replacing our damaged shingles. The color match was perfect and the work was clean.',
    service: 'Shingle Replacement'
  },
  {
    name: 'Amanda Thompson',
    rating: 5,
    text: 'Emergency response was amazing. They were here within 2 hours and prevented further damage.',
    service: 'Emergency Repair'
  }
]

export default function RoofRepairsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        sources={[
          'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
          'https://images.pexels.com/photos/6474452/pexels-photo-6474452.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/repairs.svg',
          'https://source.unsplash.com/1600x900/?chimney,flashing,roof'
        ]}
        alt="Chimney flashing repair on a residential roof"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional Roof
                <span className="block text-blue-300">Repair Services</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Fast, reliable roof repairs to protect your home from water damage. 
                From minor fixes to emergency repairs, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+19545158702"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Call
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Repairs?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Same-Day Repairs Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Warranty Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Repair Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roof repair solutions for all types of issues, 
              from minor maintenance to emergency situations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Roof Issues & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about common roofing problems and how we can fix them
            </p>
          </div>
          
          <div className="space-y-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.issue}</h3>
                    <div className="text-sm text-gray-600">
                      <strong>Symptoms:</strong> {issue.symptoms}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      <strong>Solution:</strong> {issue.solution}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      <strong>Urgency:</strong> {issue.urgency}
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Get Help
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient process from initial contact to completed repair
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Call or fill out our form for a free assessment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Our experts inspect and provide detailed quote
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600 text-sm">
                Professional repair with quality materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">
                Final inspection and warranty coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
              <p className="text-xl text-gray-600">
                {`Don't just take our word for it - hear from our satisfied customers`}
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                 <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Roof Repair?
          </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {`Don't wait until a small problem becomes a big one. Contact us today`} 
                for fast, reliable roof repair services.
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
              Emergency Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

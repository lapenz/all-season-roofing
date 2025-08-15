import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { 
  Home, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Users,
  Clock,
  Zap,
  DollarSign,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Roof Replacement | All Season Roofing of SE Florida Inc.',
  description: 'Complete roof replacement services with premium materials and expert installation. Transform your home with a new, durable roof that lasts.',
  keywords: [
    'roof replacement',
    'new roof installation',
    'roof tear off',
    'roofing materials',
    'roof installation',
    'complete roof replacement'
  ]
}

const materials = [
  {
    name: 'Architectural Shingles',
    description: 'Premium dimensional shingles with enhanced durability and curb appeal',
    benefits: [
      '30-50 year lifespan',
      'Enhanced wind resistance',
      'Beautiful dimensional appearance',
      'Excellent warranty coverage'
    ],
    price: 'From $8,500'
  },
  {
    name: 'Premium 3-Tab Shingles',
    description: 'Classic asphalt shingles offering reliable protection at an affordable price',
    benefits: [
      '20-25 year lifespan',
      'Cost-effective option',
      'Wide color selection',
      'Good warranty coverage'
    ],
    price: 'From $6,500'
  },
  {
    name: 'Metal Roofing',
    description: 'Long-lasting metal panels with superior durability and energy efficiency',
    benefits: [
      '40-70 year lifespan',
      'Superior weather resistance',
      'Energy efficient',
      'Low maintenance'
    ],
    price: 'From $12,000'
  },
  {
    name: 'Slate Roofing',
    description: 'Premium natural stone tiles for the ultimate in luxury and longevity',
    benefits: [
      '75-100 year lifespan',
      'Natural beauty',
      'Fire resistant',
      'Eco-friendly'
    ],
    price: 'From $25,000'
  }
]

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Free inspection and detailed assessment of your current roof',
    duration: '1-2 hours',
    icon: Users
  },
  {
    step: 2,
    title: 'Material Selection',
    description: 'Choose from premium materials that fit your style and budget',
    duration: '1-2 days',
    icon: Shield
  },
  {
    step: 3,
    title: 'Project Planning',
    description: 'Detailed timeline, permits, and preparation for installation',
    duration: '3-5 days',
    icon: Clock
  },
  {
    step: 4,
    title: 'Installation',
    description: 'Professional installation with attention to every detail',
    duration: '1-3 days',
    icon: Home
  },
  {
    step: 5,
    title: 'Quality Inspection',
    description: 'Thorough inspection and cleanup to ensure perfection',
    duration: '2-4 hours',
    icon: CheckCircle
  }
]

const testimonials = [
  {
    name: 'David Wilson',
    rating: 5,
    text: 'Our new roof looks amazing! The installation was smooth and the quality is outstanding. Worth every penny.',
    material: 'Architectural Shingles'
  },
  {
    name: 'Maria Rodriguez',
    rating: 5,
    text: 'Professional from start to finish. They kept us informed throughout the process and cleaned up perfectly.',
    material: 'Premium 3-Tab'
  },
  {
    name: 'James Thompson',
    rating: 5,
    text: 'The metal roof exceeded our expectations. It\'s beautiful, durable, and our energy bills have decreased.',
    material: 'Metal Roofing'
  }
]

const faqs = [
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days depending on the size and complexity of your roof.'
  },
  {
    question: 'Do I need to be home during installation?',
    answer: 'No, you don\'t need to be home. Our team is fully insured and will secure your property during the process.'
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We offer comprehensive warranties covering both materials and workmanship, typically 10-50 years depending on materials.'
  },
  {
    question: 'Can you match my existing shingle color?',
    answer: 'Yes, we can usually find a close match. If exact matching isn\'t possible, we\'ll show you similar options.'
  },
  {
    question: 'Will you handle the old roof disposal?',
    answer: 'Absolutely. We remove and properly dispose of all old materials, leaving your property clean and tidy.'
  }
]

export default function RoofReplacementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        sources={[
          'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=1920',
          '/images/hero/replacement.svg',
          'https://source.unsplash.com/1600x900/?shingle,stacking,roof'
        ]}
        alt="Crew performing a complete roof replacement"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Complete Roof
                <span className="block text-blue-300">Replacement Services</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your home with a new, durable roof that provides maximum protection 
                and enhances your property&apos;s value and curb appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/gallery"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Replace Your Roof?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Enhanced Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Increased Home Value</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Better Energy Efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <span className="text-lg">Modern Materials & Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Roofing Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of high-quality materials designed to provide 
              lasting protection and beautiful aesthetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {material.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {material.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {material.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{material.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Get Quote for This Material
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Replacement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final inspection, we ensure a smooth 
              and professional roof replacement experience
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-blue-600">Step {step.step}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-blue-600 font-medium">Duration: {step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of a New Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investing in a new roof provides numerous advantages for your home and family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Protection</h3>
              <p className="text-gray-600 text-sm">
                Superior protection against weather, leaks, and damage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Value</h3>
              <p className="text-gray-600 text-sm">
                Boost your home&apos;s market value and curb appeal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficiency</h3>
              <p className="text-gray-600 text-sm">
                Better insulation and ventilation reduce energy costs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Peace of Mind</h3>
              <p className="text-gray-600 text-sm">
                Long-term protection and comprehensive warranty coverage
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
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from homeowners who chose Premier Roofing for their roof replacement
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
                  <div className="text-sm text-blue-600">{testimonial.material}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about roof replacement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a New Roof?
          </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Transform your home with a new roof that provides lasting protection 
                and enhances your property&apos;s value. Contact us for a free estimate today.
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

      <Footer />
    </div>
  )
}

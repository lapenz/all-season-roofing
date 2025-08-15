import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | All Season Roofing of SE Florida Inc.',
  description: 'Contact All Season Roofing of SE Florida Inc. for a free estimate, emergency service, or any roofing questions. We\'re here to help protect your home.',
  keywords: [
    'contact roofing company',
    'roofing estimate',
    'emergency roofing service',
    'roofing consultation'
  ]
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch for a free estimate, emergency service, or any roofing questions. 
            We&apos;re here to help protect your home.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to help with all your roofing needs. Contact us today 
                  for a free consultation and estimate.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(954) 515-8702</p>
                    <p className="text-sm text-blue-600 font-medium">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@asrfl.com</p>
                    <p className="text-sm text-gray-500">Quick response time</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">3300 N Palm Aire Dr, Apt 403</p>
                    <p className="text-gray-600">Pompano Beach, FL 33069</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm text-blue-600 font-medium">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-2">Emergency Service</h4>
                <p className="text-red-700 text-sm mb-4">
                  For urgent roofing emergencies, call us immediately at:
                </p>
                  <a
                    href="tel:+19545158702"
                  className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: (954) 515-8702
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600">
              We proudly serve the local community and surrounding areas
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">Map integration would go here</p>
            </div>
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
              Common questions about our roofing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond to emergencies?
              </h3>
              <p className="text-gray-600">
                We provide 24/7 emergency service and typically respond within 2-4 hours 
                for urgent situations like leaks or storm damage.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer free estimates?
              </h3>
              <p className="text-gray-600">
                Yes, we provide free, no-obligation estimates for all roofing projects. 
                Our team will assess your needs and provide a detailed quote.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What warranty do you provide?
              </h3>
              <p className="text-gray-600">
                We offer comprehensive warranties covering both materials and workmanship. 
                Specific warranty terms depend on the roofing system and materials chosen.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely. We are fully licensed, bonded, and insured for your protection 
                and peace of mind on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

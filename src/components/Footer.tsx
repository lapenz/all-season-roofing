import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Award, Users } from 'lucide-react'

const services = [
  { name: 'Roof Repairs', href: '/services/repairs' },
  { name: 'Roof Replacement', href: '/services/replacement' },
  { name: 'Commercial Roofing', href: '/services/commercial' },
  { name: 'Emergency Services', href: '/services/emergency' },
  { name: 'Maintenance', href: '/services/maintenance' },
  { name: 'Inspections', href: '/services/inspections' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Careers', href: '/careers' },
]

const support = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Get Estimate', href: '/contact#estimate' },
  { name: 'Emergency Service', href: '/contact#emergency' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Warranty', href: '/warranty' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ASR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">All Season Roofing</h3>
                <p className="text-sm text-gray-400">of SE Florida Inc.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional roofing services with over 20 years of experience. 
              We provide quality craftsmanship and reliable service to protect your home.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
               <p className="text-sm text-gray-400">Phone</p>
               <p className="font-medium">(954) 515-8702</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
               <p className="text-sm text-gray-400">Email</p>
               <p className="font-medium">info@asrfl.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
               <p className="text-sm text-gray-400">Address</p>
               <p className="font-medium">3300 N Palm Aire Dr, Apt 403, Pompano Beach, FL 33069</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business hours and certifications */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <div className="space-y-1 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between text-blue-400 font-medium">
                  <span>Emergency Service:</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Certifications & Awards</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>BBB A+ Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>Certified Installers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} All Season Roofing of SE Florida Inc. All rights reserved.</p>
              </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

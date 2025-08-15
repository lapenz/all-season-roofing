import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Heart,
  Target,
  Zap,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | All Season Roofing of SE Florida Inc.',
  description: 'Learn about All Season Roofing of SE Florida Inc. - a trusted local roofing company with decades of experience serving South Florida with quality and reliability.',
  keywords: [
    'about roofing company',
    'roofing company history',
    'local roofer',
    'trusted roofing contractor'
  ]
}

const values = [
  {
    title: 'Quality',
    description: 'We never compromise on quality, using only the best materials and techniques.',
    icon: Star
  },
  {
    title: 'Integrity',
    description: 'Honest pricing, transparent communication, and reliable service you can trust.',
    icon: Shield
  },
  {
    title: 'Excellence',
    description: 'Striving for excellence in every project, no matter how big or small.',
    icon: Award
  },
  {
    title: 'Community',
    description: 'Proud to serve our local community with dedication and care.',
    icon: Heart
  }
]

const team = [
  {
    name: 'John Smith',
    position: 'Owner & Master Roofer',
    experience: '25+ years',
    description: 'John started in the roofing industry as an apprentice and has worked his way up to become a master roofer with extensive knowledge of all roofing systems.'
  },
  {
    name: 'Mike Johnson',
    position: 'Lead Installer',
    experience: '15+ years',
    description: 'Mike specializes in complex roofing projects and ensures every installation meets our high standards of quality and safety.'
  },
  {
    name: 'Sarah Williams',
    position: 'Project Manager',
    experience: '10+ years',
    description: 'Sarah coordinates all projects, ensuring smooth communication between our team and clients throughout the entire process.'
  },
  {
    name: 'David Brown',
    position: 'Service Technician',
    experience: '12+ years',
    description: 'David handles repairs and maintenance, providing quick and effective solutions to keep your roof in top condition.'
  }
]



export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About All Season Roofing of SE Florida Inc.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over two decades, we&apos;ve been protecting homes and businesses in our community 
            with quality roofing solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                All Season Roofing of SE Florida Inc. was founded with a simple mission: 
                to provide exceptional roofing services that protect what matters most 
                to our customers - their homes, families, and businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small family business has grown into a trusted name 
                in the roofing industry, serving thousands of satisfied customers across 
                our region. Our commitment to quality, integrity, and customer service 
                has never wavered.
              </p>
              <p className="text-lg text-gray-600">
                 Today, we&apos;re proud to be the go-to roofing company for homeowners and 
                business owners who demand the best in craftsmanship, materials, and service.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we serve our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of certified professionals is dedicated to delivering 
              exceptional results on every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.experience} experience
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
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
              to deliver roofing solutions that last
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business</h3>
              <p className="text-gray-600 text-sm">
                Proud to serve our local community with dedication and care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                Quick response times for estimates, repairs, and emergency situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the All Season Roofing difference. Contact us today 
            for a free estimate on your roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

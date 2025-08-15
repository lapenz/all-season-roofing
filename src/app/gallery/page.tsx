import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Hero from '@/components/Hero'
import { 
  Camera, 
  Home, 
  Building, 
  Wrench, 
  Award,
  Star,
  MapPin,
  Calendar
} from 'lucide-react'

export const metadata = {
  title: 'Project Gallery | All Season Roofing of SE Florida Inc.',
  description: 'View our portfolio of completed roofing projects including repairs, replacements, commercial roofing, and more. See the quality of our workmanship.',
  keywords: [
    'roofing gallery',
    'roofing projects',
    'roofing portfolio',
    'completed roofing work',
    'roofing examples'
  ]
}

const projects = [
  {
    id: 1,
    title: 'Modern Home Roof Replacement',
    category: 'Residential',
    location: 'Local Community',
    date: '2024',
    description: 'Complete roof replacement with premium architectural shingles and improved ventilation system.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Architectural Shingles', 'Improved Ventilation', 'Ice & Water Shield', 'New Gutters'],
    rating: 5,
    testimonial: 'Exceptional work quality and professional service throughout the entire project.'
  },
  {
    id: 2,
    title: 'Commercial Building Flat Roof',
    category: 'Commercial',
    location: 'Business District',
    date: '2024',
    description: 'TPO membrane installation for a large commercial building with energy-efficient insulation.',
    image: 'https://images.pexels.com/photos/4483772/pexels-photo-4483772.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['TPO Membrane', 'Energy-Efficient Insulation', 'Proper Drainage', 'Warranty Coverage'],
    rating: 5,
    testimonial: 'Minimal disruption to our business operations and excellent results.'
  },
  {
    id: 3,
    title: 'Emergency Storm Damage Repair',
    category: 'Emergency',
    location: 'Residential Area',
    date: '2024',
    description: 'Quick response to storm damage with temporary repairs and complete restoration.',
    image: 'https://images.pexels.com/photos/6474457/pexels-photo-6474457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Emergency Response', 'Temporary Repairs', 'Complete Restoration', 'Insurance Assistance'],
    rating: 5,
    testimonial: 'They were here within hours and prevented further damage to our home.'
  },
  {
    id: 4,
    title: 'Historic Home Roof Restoration',
    category: 'Residential',
    location: 'Historic District',
    date: '2023',
    description: 'Careful restoration of a historic home roof while maintaining architectural integrity.',
    image: 'https://images.pexels.com/photos/5799113/pexels-photo-5799113.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Historic Preservation', 'Custom Shingles', 'Period-Appropriate Materials', 'Expert Craftsmanship'],
    rating: 5,
    testimonial: 'They preserved the character of our historic home while ensuring modern protection.'
  },
  {
    id: 5,
    title: 'Multi-Unit Complex Roofing',
    category: 'Commercial',
    location: 'Residential Complex',
    date: '2023',
    description: 'Comprehensive roofing solution for a multi-unit residential complex.',
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Multi-Unit Solution', 'Coordinated Installation', 'Minimal Disruption', 'Long-term Warranty'],
    rating: 5,
    testimonial: 'Professional coordination and excellent results across all units.'
  },
  {
    id: 6,
    title: 'Energy-Efficient Roof Upgrade',
    category: 'Residential',
    location: 'Suburban Home',
    date: '2023',
    description: 'Upgrade to energy-efficient roofing materials with improved insulation and ventilation.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Energy-Efficient Materials', 'Improved Insulation', 'Smart Ventilation', 'Cost Savings'],
    rating: 5,
    testimonial: 'Our energy bills decreased significantly after the new roof installation.'
  }
]

const categories = [
  { name: 'All Projects', value: 'all', icon: Camera },
  { name: 'Residential', value: 'residential', icon: Home },
  { name: 'Commercial', value: 'commercial', icon: Building },
  { name: 'Emergency', value: 'emergency', icon: Wrench },
  { name: 'Featured', value: 'featured', icon: Award }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        sources={[
          '/images/hero/gallery.svg',
          'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1920',
          'https://source.unsplash.com/1600x900/?roofing,projects'
        ]}
        alt="Collage of roofing projects and materials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Project Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of completed roofing projects. From residential repairs 
            to commercial installations, see the quality and craftsmanship we deliver.
          </p>
        </div>
      </Hero>

      {/* Gallery Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div className="relative h-64 bg-gray-200">
                  <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-600 text-sm italic">&quot;{project.testimonial}&quot;</p>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      View Details
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Get Similar Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic improvements our roofing solutions can make to your property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before</h3>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Camera className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">Before Image</p>
                  <p className="text-sm">Damaged or worn roof</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Worn shingles, damaged flashing, and poor ventilation causing energy loss
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">After</h3>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Camera className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">After Image</p>
                  <p className="text-sm">New, professional roof</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                New premium shingles, proper ventilation, and enhanced curb appeal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us transform your roof with the same quality and craftsmanship 
            you see in our gallery. Contact us for a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:+19545158702"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

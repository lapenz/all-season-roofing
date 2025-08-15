import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'All Season Roofing of SE Florida Inc. | Professional Roofing Services',
    template: '%s | All Season Roofing of SE Florida Inc.'
  },
  description: 'Expert roofing services including repairs, replacements, and maintenance. Serving South Florida with quality craftsmanship and reliable service. Get your free estimate today!',
  keywords: [
    'roofing services',
    'roof repair',
    'roof replacement',
    'roofing contractor',
    'local roofer',
    'emergency roofing',
    'commercial roofing',
    'residential roofing',
    'roof maintenance',
    'shingle roofing',
    'metal roofing',
    'flat roof',
    'roof inspection'
  ],
  authors: [{ name: 'All Season Roofing of SE Florida Inc.' }],
  creator: 'All Season Roofing of SE Florida Inc.',
  publisher: 'All Season Roofing of SE Florida Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.asrfl.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.asrfl.com',
    title: 'All Season Roofing of SE Florida Inc. | Professional Roofing Services',
    description: 'Expert roofing services including repairs, replacements, and maintenance. Serving South Florida with quality craftsmanship and reliable service.',
    siteName: 'All Season Roofing of SE Florida Inc.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'All Season Roofing of SE Florida Inc. - Professional Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Season Roofing of SE Florida Inc. | Professional Roofing Services',
    description: 'Expert roofing services including repairs, replacements, and maintenance. Serving South Florida with quality craftsmanship and reliable service.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "All Season Roofing of SE Florida Inc.",
              "description": "Professional roofing services including repairs, replacements, and maintenance",
              "url": "https://www.asrfl.com",
              "telephone": "+1-954-515-8702",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3300 N Palm Aire Dr, Apt 403",
                "addressLocality": "Pompano Beach",
                "addressRegion": "FL",
                "postalCode": "33069",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.2195",
                "longitude": "-80.1710"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "26.2195",
                  "longitude": "-80.1710"
                },
                "geoRadius": "50000"
              },
              "sameAs": [
                "https://www.asrfl.com"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

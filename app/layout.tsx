import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kenya Industrial Research Homes | Empowering Lives Through Care & Innovation',
  description: 'KIRH delivers compassionate home care, meaningful empowerment, and technology-enabled opportunities for Persons with Disabilities in Kenya.',
  keywords: ['disability care', 'Kenya', 'PWD support', 'empowerment', 'innovation', 'accessibility', 'home care'],
  authors: [{ name: 'Kenya Industrial Research Homes' }],
  openGraph: {
    title: 'Kenya Industrial Research Homes',
    description: 'Delivering compassionate home care and empowerment for Persons with Disabilities',
    type: 'website',
    locale: 'en_KE',
    url: 'https://kirh.co.ke',
    siteName: 'Kenya Industrial Research Homes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenya Industrial Research Homes',
    description: 'Delivering compassionate home care and empowerment for Persons with Disabilities',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0091c3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

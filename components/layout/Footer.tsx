'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Empowerment', href: '/empowerment' },
    { name: 'Impact', href: '/impact' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Get Support', href: '/get-support' },
    { name: 'Become a Partner', href: '/partner' },
    { name: 'Volunteer', href: '/contact' },
    { name: 'Donate', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility Statement', href: '/accessibility' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-lg p-1"
              aria-label="Kenya Industrial Research Homes"
            >
              <Image 
                src="/images/kirh-logo.png" 
                alt="KIRH Logo" 
                width={48} 
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-tight">
                  KIRH
                </span>
                <span className="text-xs text-gray-400">
                  Care & Empowerment
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering lives through compassionate care, innovative technology, and inclusive opportunities for Persons with Disabilities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href="tel:+254700045294" 
                className="flex items-center space-x-2 text-sm hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 rounded p-1"
                aria-label="Call KIRH"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>0700 045 294</span>
              </a>
              <a 
                href="mailto:info@kirh.co.ke" 
                className="flex items-center space-x-2 text-sm hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 rounded p-1"
                aria-label="Email KIRH"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@kirh.co.ke</span>
              </a>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>South B, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for updates and stories of impact.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-white placeholder-gray-500"
                aria-label="Email for newsletter"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="sr-only">Social media</h4>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 rounded p-1"
                      aria-label={`Visit our ${item.name} page`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Kenya Industrial Research Homes. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              Design and built by{' '}
              <a
                href="https://www.ovid.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 font-medium transition-colors focus:outline-none focus:underline focus:text-primary-400"
              >
                Ovid International Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

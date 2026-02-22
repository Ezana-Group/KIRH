'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Empowerment', href: '/empowerment' },
  { name: 'Impact', href: '/impact' },
  { name: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2"
            aria-label="Kenya Industrial Research Homes - Home"
          >
            <Image 
              src="/images/kirh-logo.png" 
              alt="KIRH Logo" 
              width={48} 
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-gray-900 leading-tight">
                KIRH
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">
                Care & Empowerment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = isActivePath(pathname ?? '', item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/get-support"
              className="btn-outline text-sm"
              aria-label="Get support from KIRH"
            >
              Get Support
            </Link>
            <Link
              href="/partner"
              className="btn-primary text-sm"
              aria-label="Partner with KIRH"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200">
                {navigation.map((item) => {
                  const isActive = isActivePath(pathname ?? '', item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'text-primary-600 bg-primary-100 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="pt-4 space-y-2">
                  <Link
                    href="/get-support"
                    className="block w-full btn-outline text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Support
                  </Link>
                  <Link
                    href="/partner"
                    className="block w-full btn-primary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

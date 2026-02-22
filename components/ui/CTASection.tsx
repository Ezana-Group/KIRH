'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CTASectionProps {
  title: string
  description: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  background?: 'gradient' | 'light' | 'dark'
}

export default function CTASection({ 
  title, 
  description, 
  primaryButton,
  secondaryButton,
  background = 'gradient'
}: CTASectionProps) {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white'
  }

  const isDark = background === 'gradient' || background === 'dark'

  return (
    <section className={`${backgrounds[background]} py-20 md:py-24`}>
      {/* Subtle pattern overlay for gradient */}
      {background === 'gradient' && (
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-10 leading-relaxed ${
            isDark ? 'text-white/95' : 'text-gray-600'
          }`}>
            {description}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className={`${
                    isDark
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'btn-primary'
                  } inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className={`${
                    isDark
                      ? 'border-2 border-white text-white hover:bg-white hover:text-primary-600'
                      : 'btn-outline'
                  } inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

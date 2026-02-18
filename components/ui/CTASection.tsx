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
    gradient: 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white'
  }

  return (
    <section className={`${backgrounds[background]} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${
            background === 'gradient' || background === 'dark' 
              ? 'text-white/90' 
              : 'text-gray-600'
          }`}>
            {description}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className={`${
                    background === 'gradient' || background === 'dark'
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'btn-primary'
                  } px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className={`${
                    background === 'gradient' || background === 'dark'
                      ? 'border-2 border-white text-white hover:bg-white hover:text-primary-600'
                      : 'btn-outline'
                  } px-8 py-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
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

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string | ReactNode
  subtitle: string
  backgroundImage?: string
  children?: ReactNode
  height?: 'default' | 'tall' | 'short'
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage,
  children,
  height = 'default'
}: HeroSectionProps) {
  const heightClasses = {
    default: 'min-h-[600px]',
    tall: 'min-h-[700px]',
    short: 'min-h-[400px]'
  }

  return (
    <section 
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      aria-label="Hero section"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600"
        aria-hidden="true"
      >
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {title}
            </h1>
          ) : (
            <div className="drop-shadow-2xl">
              {title}
            </div>
          )}
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

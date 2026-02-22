'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Image from 'next/image'

interface InfoSectionProps {
  title: string
  subtitle?: string
  description: string | ReactNode
  image?: string
  imageAlt?: string
  imageSide?: 'left' | 'right'
  children?: ReactNode
  background?: 'white' | 'gray'
}

export default function InfoSection({ 
  title, 
  subtitle,
  description, 
  image,
  imageAlt = '',
  imageSide = 'right',
  children,
  background = 'white'
}: InfoSectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
          imageSide === 'left' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: imageSide === 'left' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imageSide === 'left' ? 'md:order-2' : ''}
          >
            {subtitle && (
              <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              {title}
            </h2>
            {typeof description === 'string' ? (
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {description}
              </p>
            ) : (
              <div className="text-lg text-gray-600 leading-relaxed mb-6">
                {description}
              </div>
            )}
            {children}
          </motion.div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: imageSide === 'left' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
                imageSide === 'left' ? 'md:order-1' : ''
              }`}
            >
              <Image
                src={image}
                alt={imageAlt || 'Image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-secondary-900/10 pointer-events-none" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

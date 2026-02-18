'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  image?: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card relative"
    >
      <Quote className="w-10 h-10 text-primary-200 mb-4" aria-hidden="true" />
      
      <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </blockquote>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-display font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: keyof typeof Icons
  title: string
  description: string
  items?: string[]
  link?: string
  index?: number
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  items,
  link,
  index = 0 
}: ServiceCardProps) {
  const Icon = Icons[icon] as Icons.LucideIcon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:border-primary-200 border-2 border-transparent transition-all h-full flex flex-col"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
          <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      {items && items.length > 0 && (
        <ul className="space-y-2 mb-4 flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
              <span className="text-primary-600 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {link && (
        <Link
          href={link}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center space-x-1 group/link mt-auto"
        >
          <span>Learn More</span>
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </motion.div>
  )
}

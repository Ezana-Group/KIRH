'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

interface ValueCardProps {
  icon: keyof typeof Icons
  title: string
  description: string
  index?: number
}

export default function ValueCard({ icon, title, description, index = 0 }: ValueCardProps) {
  const Icon = Icons[icon] as Icons.LucideIcon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:border-primary-200 border-2 border-transparent transition-all"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
          <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-display font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

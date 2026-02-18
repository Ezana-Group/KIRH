'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { TrendingUp } from 'lucide-react'

interface Stat {
  label: string
  value: string
  suffix?: string
  prefix?: string
  icon?: string
}

interface StatsBlockProps {
  stats: Stat[]
  background?: 'light' | 'dark' | 'gradient'
}

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: string, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Parse the value - handle K suffix
  const numericValue = value.includes('K') 
    ? parseFloat(value.replace('K', '')) * 1000 
    : parseInt(value.replace(/[^0-9]/g, ''))
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const duration = 2000 // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * numericValue)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, numericValue])
  
  // Format the display value
  const displayValue = value.includes('K') 
    ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K`
    : count.toString()
  
  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export default function StatsBlock({ stats, background = 'gradient' }: StatsBlockProps) {
  const backgrounds = {
    light: 'bg-gray-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-primary-600 to-secondary-600'
  }

  const textColor = background === 'light' ? 'text-gray-900' : 'text-white'
  const subTextColor = background === 'light' ? 'text-gray-600' : 'text-white/80'
  const accentColor = background === 'light' ? 'text-primary-600' : 'text-white/60'

  return (
    <section className={`${backgrounds[background]} py-16 md:py-20 relative overflow-hidden`} aria-label="Statistics">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className={`mb-4 ${accentColor} group-hover:scale-110 transition-transform`}>
                <TrendingUp className="w-8 h-8 mx-auto" aria-hidden="true" />
              </div>
              
              {/* Animated Number */}
              <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold ${textColor} mb-3 group-hover:scale-110 transition-transform`}>
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                />
              </div>
              
              {/* Label */}
              <div className={`text-sm md:text-base ${subTextColor} font-medium`}>
                {stat.label}
              </div>

              {/* Decorative bar */}
              <div className="mt-4 mx-auto w-16 h-1 bg-white/30 rounded-full group-hover:w-24 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

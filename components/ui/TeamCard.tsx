'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card text-center group"
    >
      {/* Image */}
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-display font-bold">
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-primary-600 font-medium mb-3">
        {member.role}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {member.bio}
      </p>

      {/* Social Links */}
      {(member.linkedin || member.email) && (
        <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

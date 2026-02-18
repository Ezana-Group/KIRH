'use client'

import { useState } from 'react'
import { Award } from 'lucide-react'
import TeamMemberModal from '@/components/ui/TeamMemberModal'

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  email?: string
  linkedin?: string
  qualifications?: string[]
  professionalCertifications?: string[]
  skills?: string[]
  experience?: string[]
  memberships?: string[]
}

interface TeamSectionProps {
  members: TeamMember[]
  type: 'leadership' | 'care'
}

export default function TeamSection({ members, type }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  if (type === 'leadership') {
    return (
      <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member) => (
            <button
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer text-left w-full"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6 z-10">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm leading-relaxed mb-4">
                    "{member.bio.substring(0, 150)}..."
                  </p>
                  <p className="text-white font-semibold">
                    Click to view full profile →
                  </p>
                </div>
              </div>

              {/* Card content */}
              <div className="text-center relative z-0">
                {/* Image/Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-5xl font-display font-bold shadow-xl">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.name.charAt(0)
                    )}
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio.substring(0, 100)}...
                </p>

                {/* Click hint */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 group-hover:text-primary-600 transition-colors">
                    Click to view full profile →
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      </>
    )
  }

  // Care team layout
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <button
            key={member.name}
            onClick={() => setSelectedMember(member)}
            className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-white cursor-pointer w-full"
          >
            {/* Image/Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-secondary-400 to-primary-400 flex items-center justify-center text-white text-3xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  member.name.charAt(0)
                )}
              </div>
            </div>

            {/* Info */}
            <h3 className="text-lg font-display font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-secondary-600 font-semibold mb-3 text-sm">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {member.bio.substring(0, 80)}...
            </p>
            <p className="text-xs text-primary-600 font-medium group-hover:underline">
              View full profile →
            </p>
          </button>
        ))}
      </div>

      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  )
}

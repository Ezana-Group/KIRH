'use client'

import { X, Mail, Linkedin, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

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

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    if (member) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [member])

  useEffect(() => {
    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (member) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-8 rounded-t-2xl">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white/20 flex items-center justify-center text-white text-5xl font-display font-bold shadow-xl mb-4 border-4 border-white/30">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                member.name.charAt(0)
              )}
            </div>
            
            <h2 id="modal-title" className="text-3xl font-display font-bold mb-2">
              {member.name}
            </h2>
            <p className="text-xl text-white/90 font-semibold mb-4">
              {member.role}
            </p>
            
            {/* Contact Links */}
            <div className="flex items-center gap-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
              )}
              {member.linkedin && member.linkedin !== '#' && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
              About
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Experience */}
          {member.experience && member.experience.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-display font-bold text-gray-900">
                  Experience
                </h3>
              </div>
              <ul className="space-y-2">
                {member.experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Qualifications */}
          {member.qualifications && member.qualifications.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-display font-bold text-gray-900">
                  Academic Qualifications
                </h3>
              </div>
              <ul className="space-y-2">
                {member.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mt-1 flex-shrink-0" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Professional Certifications */}
          {member.professionalCertifications && member.professionalCertifications.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-display font-bold text-gray-900">
                  Professional Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {member.professionalCertifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-warm-600 mt-1 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Memberships */}
          {member.memberships && member.memberships.length > 0 && (
            <div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Professional Memberships
              </h3>
              <ul className="space-y-2">
                {member.memberships.map((membership, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

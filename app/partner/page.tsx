'use client'

import { useState } from 'react'
import { Users, Phone, Mail, CheckCircle, Building, Handshake, Target, ArrowRight, Globe, Lightbulb, Heart, TrendingUp } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import Link from 'next/link'

export default function PartnerPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: [] as string[],
    partnershipGoals: '',
    timeline: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const partnershipTypes = [
    { id: 'program', label: 'Program Collaboration', icon: '🤝', desc: 'Joint programs and initiatives' },
    { id: 'funding', label: 'Funding/Sponsorship', icon: '💰', desc: 'Financial support' },
    { id: 'research', label: 'Research Partnership', icon: '🔬', desc: 'Joint research projects' },
    { id: 'training', label: 'Training & Capacity', icon: '📚', desc: 'Skill development' },
    { id: 'resources', label: 'Resource Sharing', icon: '🔄', desc: 'Facilities & equipment' },
    { id: 'advocacy', label: 'Advocacy & Policy', icon: '📢', desc: 'Rights & awareness' },
    { id: 'technology', label: 'Technology', icon: '💻', desc: 'Tech & innovation' },
    { id: 'employment', label: 'Employment', icon: '💼', desc: 'Job opportunities' },
  ]

  const handleCheckboxChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      partnershipType: prev.partnershipType.includes(type)
        ? prev.partnershipType.filter(t => t !== type)
        : [...prev.partnershipType, type]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership Request:', formData)
    setSubmitted(true)
  }

  const canProceedToStep2 = formData.organizationName && formData.contactPerson && formData.email && formData.phone
  const canProceedToStep3 = formData.partnershipType.length > 0

  if (submitted) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Handshake className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Thank You for Your Interest! 🎉
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're excited about the possibility of partnering with your organization to expand our impact.
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-600" />
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  {[
                    'Our partnerships team will review your proposal',
                    'We\'ll schedule an initial consultation meeting',
                    'Explore collaboration opportunities together',
                    'Develop a mutually beneficial partnership plan'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                <Link href="/impact" className="btn-outline">
                  View Our Impact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Partner{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              With Us
            </span>
          </h1>
        }
        subtitle="Together, we can create lasting change for persons with disabilities"
        height="short"
      />

      {/* Why Partner Section */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Partner with KIRH?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a network of changemakers committed to disability inclusion across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Impact</h3>
              <p className="text-gray-600">Years of experience delivering quality care and empowerment programs</p>
            </div>
            <div className="card text-center hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strong Network</h3>
              <p className="text-gray-600">Established connections with government, NGOs, and communities</p>
            </div>
            <div className="card text-center hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-500 to-warm-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Innovative approaches that expand across regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`h-1 w-12 mx-2 transition-all ${
                      step > s ? 'bg-primary-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Step {step} of 3: {
                  step === 1 ? 'Organization Details' :
                  step === 2 ? 'Partnership Interest' :
                  'Goals & Timeline'
                }
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card">
            {/* Step 1: Organization Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    Tell Us About Your Organization
                  </h2>
                  <p className="text-gray-600">
                    We'd love to learn more about your organization and mission.
                  </p>
                </div>

                <div>
                  <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    required
                    className="input-field text-lg"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                    placeholder="Your organization's full name"
                  />
                </div>

                <div>
                  <label htmlFor="organizationType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="organizationType"
                    required
                    className="input-field text-lg"
                    value={formData.organizationType}
                    onChange={(e) => setFormData({...formData, organizationType: e.target.value})}
                  >
                    <option value="">Select type...</option>
                    <option value="government">🏛️ Government Ministry/Department</option>
                    <option value="county">🏢 County Government</option>
                    <option value="ngo">🤝 NGO/Non-Profit</option>
                    <option value="private">💼 Private Company</option>
                    <option value="education">🎓 Educational Institution</option>
                    <option value="healthcare">🏥 Healthcare Facility</option>
                    <option value="faith">⛪ Faith-Based Organization</option>
                    <option value="community">🌍 Community Group</option>
                    <option value="international">🌐 International Organization</option>
                    <option value="other">📋 Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="input-field text-lg"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="https://www.example.com"
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Primary Contact Person</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        required
                        className="input-field text-lg"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        placeholder="Contact person"
                      />
                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                        Title/Position
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="input-field text-lg"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g., Director"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="input-field text-lg"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="contact@organization.org"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="input-field text-lg"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0700 000 000"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2}
                  className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Partnership Type */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    How Would You Like to Partner?
                  </h2>
                  <p className="text-gray-600">
                    Select all areas of collaboration that interest you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {partnershipTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`relative flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.partnershipType.includes(type.id)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.partnershipType.includes(type.id)}
                        onChange={() => handleCheckboxChange(type.id)}
                        className="sr-only"
                      />
                      <span className="text-3xl">{type.icon}</span>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block">{type.label}</span>
                        <span className="text-sm text-gray-600">{type.desc}</span>
                      </div>
                      {formData.partnershipType.includes(type.id) && (
                        <CheckCircle className="w-5 h-5 text-primary-600 absolute top-4 right-4" />
                      )}
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-outline flex-1 py-4"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!canProceedToStep3}
                    className="btn-primary flex-1 py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Goals & Timeline */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    Share Your Vision
                  </h2>
                  <p className="text-gray-600">
                    Tell us about your partnership goals and timeline.
                  </p>
                </div>

                <div>
                  <label htmlFor="partnershipGoals" className="block text-sm font-semibold text-gray-700 mb-2">
                    What do you hope to achieve? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="partnershipGoals"
                    required
                    rows={6}
                    className="textarea-field text-lg"
                    value={formData.partnershipGoals}
                    onChange={(e) => setFormData({...formData, partnershipGoals: e.target.value})}
                    placeholder="Describe your partnership goals, expected outcomes, and how this collaboration aligns with your organization's mission..."
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Proposed Timeline <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="timeline"
                    required
                    className="input-field text-lg"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediate">🔴 Immediate (within 1 month)</option>
                    <option value="short">🟡 Short-term (1-3 months)</option>
                    <option value="medium">🟢 Medium-term (3-6 months)</option>
                    <option value="long">🔵 Long-term (6+ months)</option>
                    <option value="flexible">⚪ Flexible</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-primary-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <Heart className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Thank you for your interest in partnering with KIRH. Together, we can create lasting positive change for persons with disabilities across Kenya.
                    </span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-outline flex-1 py-4"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 py-4 text-lg font-bold"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section-container bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Join Our Network of Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Ministry of Education', icon: '🎓' },
              { name: 'Ministry of Health', icon: '🏥' },
              { name: 'NCPWD', icon: '♿' },
              { name: 'County Governments', icon: '🏛️' },
              { name: 'NGO Partners', icon: '🤝' },
              { name: 'Corporate Sponsors', icon: '💼' }
            ].map((partner) => (
              <div key={partner.name} className="card hover:shadow-xl transition-shadow text-center">
                <span className="text-4xl mb-3 block">{partner.icon}</span>
                <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our partnerships team is here to answer any questions about collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254700045294" className="btn-outline flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              0700 045 294
            </a>
            <a href="mailto:partnerships@kirh.co.ke" className="btn-outline flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              partnerships@kirh.co.ke
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

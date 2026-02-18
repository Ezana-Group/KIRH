'use client'

import { useState } from 'react'
import { Heart, Phone, Mail, CheckCircle, User, Home, MessageSquare, ArrowRight, Clock, Shield, Users } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import Link from 'next/link'

export default function GetSupportPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    clientName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    supportNeeded: [] as string[],
    urgency: 'routine',
    preferredContact: 'phone',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const supportTypes = [
    { id: 'personal-care', label: 'Personal Care & Daily Living', icon: '🛁' },
    { id: 'emotional', label: 'Emotional & Social Support', icon: '💙' },
    { id: 'mobility', label: 'Mobility Assistance', icon: '🦽' },
    { id: 'medication', label: 'Medication Management', icon: '💊' },
    { id: 'meals', label: 'Meal Preparation', icon: '🍽️' },
    { id: 'companionship', label: 'Companionship', icon: '🤝' },
    { id: 'community', label: 'Community Integration', icon: '🌍' },
    { id: 'skills', label: 'Skill Development', icon: '📚' },
  ]

  const handleCheckboxChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(type)
        ? prev.supportNeeded.filter(t => t !== type)
        : [...prev.supportNeeded, type]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Support Request:', formData)
    setSubmitted(true)
  }

  const canProceedToStep2 = formData.clientName && formData.email && formData.phone
  const canProceedToStep3 = formData.supportNeeded.length > 0

  if (submitted) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                We've Received Your Request! 🎉
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for reaching out to KIRH. Our care team will contact you within 24 hours.
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  {[
                    'We\'ll call you for an initial consultation',
                    'Conduct a comprehensive needs assessment',
                    'Create a personalized care plan together',
                    'Answer all your questions about our services'
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
                <Link href="/services" className="btn-outline">
                  Learn About Services
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
            Get{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Support
            </span>
          </h1>
        }
        subtitle="We're here to help. Let us know what you need."
        height="short"
      />

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span className="font-medium">24-Hour Response</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6" />
              <span className="font-medium">Compassionate Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
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
                  step === 1 ? 'Your Information' :
                  step === 2 ? 'Support Needs' :
                  'Additional Details'
                }
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    Let's Start With Your Information
                  </h2>
                  <p className="text-gray-600">
                    We'll use this to get in touch with you about care services.
                  </p>
                </div>

                <div>
                  <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Who needs support? <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    required
                    className="input-field text-lg"
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your name (if you're requesting for someone else)
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="input-field text-lg"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    placeholder="Guardian or family member name"
                  />
                  <p className="text-xs text-gray-500 mt-1">Optional - leave blank if requesting for yourself</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-600">*</span>
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
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input-field text-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="input-field text-lg"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="City or area (e.g., Nairobi, South B)"
                  />
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

            {/* Step 2: Support Needs */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    What Type of Support Do You Need?
                  </h2>
                  <p className="text-gray-600">
                    Select all that apply. Don't worry if you're not sure—we'll discuss during consultation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {supportTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`relative flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.supportNeeded.includes(type.id)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.supportNeeded.includes(type.id)}
                        onChange={() => handleCheckboxChange(type.id)}
                        className="sr-only"
                      />
                      <span className="text-3xl">{type.icon}</span>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block">{type.label}</span>
                      </div>
                      {formData.supportNeeded.includes(type.id) && (
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

            {/* Step 3: Additional Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    Almost Done!
                  </h2>
                  <p className="text-gray-600">
                    Just a few more details to help us serve you better.
                  </p>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                    How soon do you need support? <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="urgency"
                    required
                    className="input-field text-lg"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  >
                    <option value="urgent">🔴 Urgent (within 1 week)</option>
                    <option value="soon">🟡 Soon (within 2-4 weeks)</option>
                    <option value="routine">🟢 Routine (flexible timing)</option>
                    <option value="planning">📅 Planning ahead</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
                    How should we contact you? <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="preferredContact"
                    required
                    className="input-field text-lg"
                    value={formData.preferredContact}
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                  >
                    <option value="phone">📞 Phone Call</option>
                    <option value="email">📧 Email</option>
                    <option value="either">✅ Either Phone or Email</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="textarea-field text-lg"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share any specific needs, concerns, or questions..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Optional</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Your privacy matters.</strong> All information is confidential and protected under Kenya's Data Protection Act.
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
                    Submit Request
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section-container bg-gradient-to-br from-warm-50 to-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is available to answer questions and help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254700045294" className="btn-primary flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Call: 0700 045 294</span>
            </a>
            <a href="mailto:info@kirh.co.ke" className="btn-outline flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Mon-Fri: 8:00 AM - 5:00 PM EAT
          </p>
        </div>
      </section>
    </>
  )
}

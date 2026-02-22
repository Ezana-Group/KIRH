'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormProps {
  defaultType?: string
}

export default function ContactForm({ defaultType = 'general' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: defaultType,
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = { formType: 'contact' as const, data: { ...formData } }
    try {
      const res = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', type: defaultType, message: '' })
        setTimeout(() => setStatus('idle'), 3000)
        return
      }
      if (res.status === 503 && json.fallback === 'mailto') {
        const subject = encodeURIComponent('Contact form – KIRH Website')
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry: ${formData.type}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:info@kirh.co.ke?subject=${subject}&body=${body}`
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', type: defaultType, message: '' })
        setTimeout(() => setStatus('idle'), 3000)
        return
      }
    } catch {
      // fallback to mailto on network error
      const subject = encodeURIComponent('Contact form – KIRH Website')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry: ${formData.type}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:info@kirh.co.ke?subject=${subject}&body=${body}`
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', type: defaultType, message: '' })
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('error')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="card max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
        Get In Touch
      </h2>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="0700 045 294"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="general">General Question</option>
            <option value="support">Support Request</option>
            <option value="partner">Partnership Inquiry</option>
            <option value="volunteer">Volunteer Inquiry</option>
            <option value="donate">Donation/Sponsorship</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="textarea-field"
            placeholder="Tell us how we can help..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
          >
            <CheckCircle className="w-5 h-5" aria-hidden="true" />
            <span>Thank you! We'll get back to you soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
          >
            <AlertCircle className="w-5 h-5" aria-hidden="true" />
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}

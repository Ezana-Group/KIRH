'use client'

import { Phone, Mail, MapPin, Clock, Heart, Users, HandHeart, DollarSign } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ContactForm from '@/components/ui/ContactForm'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ContactContent() {
  const searchParams = useSearchParams()
  const inquiryType = searchParams.get('type') || 'general'

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0700 045 294',
      description: 'Mon-Fri, 8:00 AM - 5:00 PM EAT',
      link: 'tel:+254700045294'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@kirh.co.ke',
      description: 'We respond within 24 hours',
      link: 'mailto:info@kirh.co.ke'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'South B, Nairobi, Kenya',
      description: 'Visit by appointment',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 8 AM - 5 PM',
      description: 'Sat: 9 AM - 1 PM',
      link: '#'
    }
  ]

  const getInvolvedOptions = [
    {
      icon: Heart,
      title: 'Get Support',
      description: 'Request care services or empowerment programs for yourself or a loved one.',
      type: 'support'
    },
    {
      icon: Users,
      title: 'Become a Partner',
      description: 'Collaborate with us to expand our reach and impact across Kenya.',
      type: 'partner'
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Share your time and skills to support our mission and community.',
      type: 'volunteer'
    },
    {
      icon: DollarSign,
      title: 'Donate / Sponsor',
      description: 'Provide financial support to sustain and grow our programs.',
      type: 'donate'
    }
  ]

  const partners = [
    {
      name: 'Ministry of Education',
      description: 'Collaborative programs in inclusive education and skills training'
    },
    {
      name: 'Ministry of Health',
      description: 'Healthcare coordination and accessibility initiatives'
    },
    {
      name: 'Ministry of Social Protection',
      description: 'Social welfare programs and policy advocacy'
    },
    {
      name: 'National Council for Persons with Disabilities (NCPWD)',
      description: 'Advocacy, policy development, and rights protection'
    },
    {
      name: 'County Governments',
      description: 'Local implementation of disability-inclusive programs'
    },
    {
      name: 'Disability Organizations',
      description: 'Peer networks and community-based support services'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Contact
            </span>
            {' '}Us
          </h1>
        }
        subtitle="We're here to answer your questions, discuss your needs, and explore how KIRH can support you or your organization."
        height="short"
      />

      {/* Quick Contact Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-white font-display font-bold text-2xl mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/90">
                Our team is ready to help you Monday - Friday, 8 AM - 5 PM
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254700045294"
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>0700 045 294</span>
              </a>
              <a
                href="mailto:info@kirh.co.ke"
                className="bg-white/10 backdrop-blur text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors border-2 border-white/30"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="section-container">
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.link}
                className="relative group"
              >
                <div className="card text-center h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-4 group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-primary-600 group-hover:text-primary-700 font-semibold mb-1 text-base">
                    {method.details}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Two Column Layout: Form + Info */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm defaultType={inquiryType} />
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Why Contact Us */}
            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Why Reach Out?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Free initial consultation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    24-hour response time
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Personalized care plans
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    No obligation to commit
                  </span>
                </li>
              </ul>
            </div>

            {/* Office Info */}
            <div className="card">
              <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
                Visit Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">South B, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 8 AM - 5 PM</p>
                    <p className="text-sm text-gray-600">Sat: 9 AM - 1 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="card bg-warm-50 border-2 border-warm-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-warm-600 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900">
                  Quick Response
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Options */}
      <section className="section-container bg-white" aria-labelledby="get-involved">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Ways to Connect
          </p>
          <h2 id="get-involved" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            How Can We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Help You?
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're seeking support, want to partner with us, or wish to contribute to our mission, 
            we welcome your inquiry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getInvolvedOptions.map((option, index) => {
            const Icon = option.icon
            const colors = [
              { bg: 'bg-blue-50', hover: 'hover:bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200' },
              { bg: 'bg-green-50', hover: 'hover:bg-green-100', icon: 'text-green-600', border: 'border-green-200' },
              { bg: 'bg-purple-50', hover: 'hover:bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200' },
              { bg: 'bg-orange-50', hover: 'hover:bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200' },
            ]
            const color = colors[index]
            
            return (
              <div key={option.title} className={`card text-center ${color.bg} ${color.hover} border-2 ${color.border} transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
                <div className={`w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-md group-hover:shadow-lg transition-all`}>
                  <Icon className={`w-10 h-10 ${color.icon}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {option.description}
                </p>
                <a
                  href={
                    option.type === 'support' ? '/get-support' : 
                    option.type === 'partner' ? '/partner' : 
                    '/contact'
                  }
                  className={`inline-flex items-center space-x-2 ${color.icon} hover:underline font-semibold text-sm group/link`}
                >
                  <span>Inquire Now</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-primary-50" aria-labelledby="partners">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Our Network
          </p>
          <h2 id="partners" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Partners &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Collaborators
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Through strong partnerships with government ministries, disability organizations, and community 
            stakeholders, we've built a comprehensive ecosystem of support that transforms lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div key={partner.name} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Become a Partner
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Interested in partnering with KIRH to expand disability-inclusive services across Kenya?
            </p>
            <a
              href="/partner"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors shadow-lg text-lg"
            >
              <span>Explore Partnership Opportunities</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Visit Us in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                South B
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We're conveniently located in South B, Nairobi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-600 h-[400px] flex items-center justify-center relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full" />
                </div>
                
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-10 h-10 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    South B, Nairobi
                  </h3>
                  <p className="text-white/90 mb-6">
                    Interactive map coming soon
                  </p>
                  <a
                    href="https://www.google.com/maps/search/South+B+Nairobi+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Getting Here Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  How to Find Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">By Public Transport</p>
                      <p className="text-sm text-gray-600">
                        Take a matatu to South B. We're easily accessible from the main road.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">By Private Car</p>
                      <p className="text-sm text-gray-600">
                        Parking available on-site. Please call ahead to confirm availability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Schedule a Visit</p>
                      <p className="text-sm text-gray-600">
                        Please call or email ahead to schedule your visit and receive detailed directions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-secondary-50 border-2 border-secondary-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-6 h-6 text-secondary-600" />
                  <h3 className="text-lg font-display font-bold text-gray-900">
                    Need Directions?
                  </h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Call us and we'll guide you step-by-step to our office.
                </p>
                <a
                  href="tel:+254700045294"
                  className="inline-flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 font-semibold"
                >
                  <span>0700 045 294</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
}

import { Bath, Heart, Pill, Eye, Users, MessageCircle, MapPin, Shield, FileText, Award, Clock, HeartHandshake } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ServiceCard from '@/components/ui/ServiceCard'
import CTASection from '@/components/ui/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Kenya Industrial Research Homes',
  description: 'Comprehensive care and support services for Persons with Disabilities, including personal care, emotional support, and professional standards.',
}

export default function ServicesPage() {
  const dailyLivingServices = [
    {
      icon: 'Bath' as const,
      title: 'Bathing & Grooming',
      description: 'Dignified personal hygiene support tailored to individual needs and preferences, ensuring comfort and respect.',
      items: [
        'Assistance with bathing and showering',
        'Hair care and grooming',
        'Oral hygiene support',
        'Dressing assistance'
      ]
    },
    {
      icon: 'Heart' as const,
      title: 'Meal Support',
      description: 'Nutritious meal planning, preparation, and feeding assistance to maintain health and well-being.',
      items: [
        'Meal planning and preparation',
        'Dietary requirement management',
        'Feeding assistance',
        'Nutrition education'
      ]
    },
    {
      icon: 'Pill' as const,
      title: 'Medication Reminders',
      description: 'Reliable medication management to ensure health protocols are followed consistently and safely.',
      items: [
        'Medication schedule tracking',
        'Dosage reminders',
        'Prescription coordination',
        'Health monitoring'
      ]
    },
    {
      icon: 'Eye' as const,
      title: 'Safe Supervision',
      description: 'Compassionate oversight and safety monitoring in a respectful, non-intrusive manner.',
      items: [
        '24/7 safety monitoring available',
        'Fall prevention strategies',
        'Emergency response protocols',
        'Environmental safety assessments'
      ]
    }
  ]

  const emotionalServices = [
    {
      icon: 'HeartHandshake' as const,
      title: 'Companionship',
      description: 'Meaningful social interaction and emotional support to combat isolation and promote well-being.',
      items: [
        'One-on-one companionship',
        'Conversation and social engagement',
        'Recreational activities',
        'Emotional support'
      ]
    },
    {
      icon: 'Users' as const,
      title: 'Peer Engagement',
      description: 'Facilitated connections with peers for shared experiences, mutual support, and friendship.',
      items: [
        'Peer support groups',
        'Social activities and events',
        'Shared interest clubs',
        'Mentorship opportunities'
      ]
    },
    {
      icon: 'MapPin' as const,
      title: 'Community Connection',
      description: 'Active integration into community life through outings, events, and civic participation.',
      items: [
        'Community event attendance',
        'Transportation coordination',
        'Cultural and recreational outings',
        'Volunteer opportunities'
      ]
    },
    {
      icon: 'MessageCircle' as const,
      title: 'Communication Support',
      description: 'Assistance with communication needs, including assistive technology and advocacy.',
      items: [
        'Communication device support',
        'Speech therapy coordination',
        'Advocacy and representation',
        'Family communication facilitation'
      ]
    }
  ]

  const professionalStandards = [
    {
      icon: 'FileText' as const,
      title: 'Confidential Care Plans',
      description: 'Personalized, comprehensive care plans developed in partnership with individuals and families.',
      items: [
        'Individual needs assessment',
        'Goal setting and tracking',
        'Regular plan reviews',
        'Family involvement and updates'
      ]
    },
    {
      icon: 'Shield' as const,
      title: 'Trauma-Informed Practices',
      description: 'Care delivery rooted in understanding, sensitivity, and respect for personal histories.',
      items: [
        'Trauma-sensitive approaches',
        'Mental health support coordination',
        'Crisis intervention protocols',
        'Therapeutic environment creation'
      ]
    },
    {
      icon: 'Award' as const,
      title: 'Quality Assurance',
      description: 'Continuous monitoring and improvement to maintain the highest standards of care.',
      items: [
        'Regular quality audits',
        'Satisfaction surveys',
        'Outcome measurement',
        'Service improvement initiatives'
      ]
    },
    {
      icon: 'Clock' as const,
      title: 'Continuous Improvement',
      description: 'Ongoing staff training and development to stay current with best practices and innovations.',
      items: [
        'Regular staff training',
        'Professional development',
        'Best practice implementation',
        'Technology integration'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Support Services
            </span>
          </h1>
        }
        subtitle="Comprehensive, person-centered care that respects dignity, promotes independence, and enhances quality of life for every individual we serve."
        height="default"
      />

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At KIRH, we understand that quality care goes beyond meeting basic needs. Our holistic approach 
            encompasses physical, emotional, and social well-being, delivered by trained professionals who 
            genuinely care about the people they serve. Every service is customized to honor individual 
            preferences, goals, and aspirations.
          </p>
        </div>
      </section>

      {/* Personal & Daily Living Support */}
      <section className="section-container bg-gray-50" aria-labelledby="daily-living">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Core Care Services
          </p>
          <h2 id="daily-living" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Personal & Daily Living Support
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Essential daily care services delivered with compassion, respect, and attention to individual dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dailyLivingServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Emotional & Social Support */}
      <section className="section-container" aria-labelledby="emotional-support">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Connection & Well-being
          </p>
          <h2 id="emotional-support" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Emotional & Social Support
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Building meaningful connections and emotional resilience through companionship, peer support, 
            and community integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {emotionalServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Professional & Ethical Standards */}
      <section className="section-container bg-gray-50" aria-labelledby="professional-standards">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-warm-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Excellence & Integrity
          </p>
          <h2 id="professional-standards" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Professional & Ethical Standards
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to quality, safety, and continuous improvement ensures every individual 
            receives the highest standard of care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {professionalStandards.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Service Approach */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Our Person-Centered Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every individual is unique, with their own preferences, goals, and dreams. 
                Our person-centered approach ensures that care is never one-size-fits-all.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Listen & Understand
                </h3>
                <p className="text-gray-600 text-sm">
                  We start by truly listening to individual needs, preferences, and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Plan Together
                </h3>
                <p className="text-gray-600 text-sm">
                  We co-create personalized care plans that reflect individual aspirations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Deliver & Adapt
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide consistent care while remaining flexible to changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Request Care Support Today"
        description="Our team is ready to discuss your care needs and develop a personalized support plan that promotes dignity, independence, and well-being."
        primaryButton={{ text: 'Contact Us', href: '/contact' }}
        secondaryButton={{ text: 'Learn About Empowerment Programs', href: '/empowerment' }}
      />
    </>
  )
}

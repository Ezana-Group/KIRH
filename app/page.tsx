import Link from 'next/link'
import { Heart, Users, Lightbulb, TrendingUp, ArrowRight, Shield, Sparkles, Target } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ValueCard from '@/components/ui/ValueCard'
import StatsBlock from '@/components/ui/StatsBlock'
import CTASection from '@/components/ui/CTASection'
import InfoSection from '@/components/sections/InfoSection'

export default function Home() {
  const values = [
    {
      icon: 'Heart' as const,
      title: 'Holistic Care & Daily Living Support',
      description: 'Comprehensive personal care services delivered with compassion, dignity, and respect for individual needs and preferences.'
    },
    {
      icon: 'Users' as const,
      title: 'Emotional & Community Engagement',
      description: 'Building meaningful connections through companionship, peer support, and active community participation.'
    },
    {
      icon: 'Sparkles' as const,
      title: 'Empowerment & Skill Development',
      description: 'Fostering independence through personalized skill-building programs, goal-setting, and continuous growth opportunities.'
    },
    {
      icon: 'Lightbulb' as const,
      title: 'Innovation & Leadership Pathways',
      description: 'Opening doors to technology training, research participation, and leadership development in an inclusive environment.'
    }
  ]

  const stats = [
    { label: 'Caring Professionals', value: '50', suffix: '+' },
    { label: 'Lives Impacted', value: '1000', suffix: '+' },
    { label: 'Programs Delivered', value: '25', suffix: '+' },
    { label: 'Community Partners', value: '30', suffix: '+' }
  ]

  const features = [
    {
      icon: 'Shield' as const,
      title: 'Trusted Care Excellence',
      description: 'Professional, certified caregivers committed to the highest standards of safety and quality.'
    },
    {
      icon: 'Target' as const,
      title: 'Personalized Approach',
      description: 'Every care plan is tailored to individual needs, goals, and aspirations for maximum impact.'
    },
    {
      icon: 'TrendingUp' as const,
      title: 'Proven Impact',
      description: 'Measurable outcomes in independence, well-being, and community integration for all participants.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <span className="block mb-3">Care That Empowers</span>
            <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Support That Transforms
            </span>
          </h1>
        }
        subtitle="Delivering compassionate home care, meaningful empowerment, and technology-enabled opportunities for Persons with Disabilities."
        height="tall"
      >
        <Link href="/get-support" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Get Support
        </Link>
        <Link href="/partner" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Partner With Us
        </Link>
      </HeroSection>

      {/* What We Do */}
      <section className="section-container" aria-labelledby="what-we-do">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h2 id="what-we-do" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            What We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Do
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Kenya Industrial Research Homes, we blend compassionate care with innovative empowerment 
            to create environments where everyone can thrive with dignity and independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>

        {/* Quick Links to Services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg group"
          >
            <span>Explore All Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <StatsBlock stats={stats} background="gradient" />

      {/* Why Choose Us */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-primary-50" aria-labelledby="why-choose-us">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Why Choose KIRH
          </p>
          <h2 id="why-choose-us" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Excellence
            </span>
            {' '}in Every Aspect
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're committed to providing the highest quality care and empowerment services, 
            backed by expertise, compassion, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ValueCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <InfoSection
        subtitle="Our Story"
        title="Creating Environments Where Everyone Thrives"
        description="Kenya Industrial Research Homes was founded on the belief that every person deserves access to compassionate care, meaningful opportunities, and the tools to live independently. Through partnerships with government ministries, disability organizations, and community stakeholders, we've built a comprehensive ecosystem of support that transforms lives."
        image="/images/about-preview.jpg"
        imageAlt="KIRH team members working together"
        imageSide="right"
      >
        <Link 
          href="/about"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group"
        >
          <span>Learn About Our Mission</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </InfoSection>

      {/* Featured Callouts */}
      <section className="section-container bg-white" aria-labelledby="get-started">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-warm-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Take the Next Step
          </p>
          <h2 id="get-started" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Start Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Journey
            </span>
            {' '}With Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're seeking support, want to partner with us, or simply learn more about our work, 
            we're here to help you take the next step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            href="/about"
            className="relative overflow-hidden group"
          >
            <div className="card text-center h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Learn Our Approach
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Discover our comprehensive methodology and values
              </p>
            </div>
          </Link>

          <Link 
            href="/about#team"
            className="relative overflow-hidden group"
          >
            <div className="card text-center h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Meet Our Team
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Get to know the people behind our mission
              </p>
            </div>
          </Link>

          <Link 
            href="/impact"
            className="relative overflow-hidden group"
          >
            <div className="card text-center h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                See Our Impact
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Read stories of transformation and growth
              </p>
            </div>
          </Link>

          <Link 
            href="/contact"
            className="relative overflow-hidden group"
          >
            <div className="card text-center h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-primary-600 to-secondary-600 border-2 border-primary-700">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
                <ArrowRight className="w-10 h-10 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Contact Us Today
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Start a conversation about your needs
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Transform Lives Through Partnership"
        description="Through a strong network of partners, supporters, and dedicated professionals, KIRH continues to champion a disability-inclusive society where youth with disabilities are empowered to reach their full potential and lead dignified lives."
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        secondaryButton={{ text: 'Learn More', href: '/about' }}
      />
    </>
  )
}

import { Target, Users, Laptop, Lightbulb, BookOpen, Trophy, Briefcase, Network, Rocket, Code, Database, Cpu } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ServiceCard from '@/components/ui/ServiceCard'
import ValueCard from '@/components/ui/ValueCard'
import CTASection from '@/components/ui/CTASection'
import InfoSection from '@/components/sections/InfoSection'
import { siteImages } from '@/lib/images'

export const metadata = {
  title: 'Empowerment & Innovation Hub | Kenya Industrial Research Homes',
  description: 'Discover KIRH\'s empowerment programs including skill building, peer mentorship, and technology training for Persons with Disabilities.',
}

export default function EmpowermentPage() {
  const skillBuildingPrograms = [
    {
      icon: 'Target' as const,
      title: 'Life Skills Development',
      description: 'Essential skills for independent living, decision-making, and personal growth.',
      items: [
        'Financial literacy and budgeting',
        'Time management and organization',
        'Communication and self-advocacy',
        'Problem-solving and critical thinking'
      ]
    },
    {
      icon: 'BookOpen' as const,
      title: 'Goal Setting & Achievement',
      description: 'Structured support to identify, plan, and achieve personal and professional goals.',
      items: [
        'Individual goal development',
        'Action plan creation',
        'Progress tracking and accountability',
        'Milestone celebration'
      ]
    },
    {
      icon: 'Trophy' as const,
      title: 'Well-being Workshops',
      description: 'Holistic wellness education covering mental, physical, and emotional health.',
      items: [
        'Mental health awareness',
        'Stress management techniques',
        'Physical wellness activities',
        'Self-care strategies'
      ]
    },
    {
      icon: 'Briefcase' as const,
      title: 'Employment Readiness',
      description: 'Job skills training and support to prepare for meaningful employment opportunities.',
      items: [
        'Resume and interview preparation',
        'Workplace skills training',
        'Job search strategies',
        'Career counseling'
      ]
    }
  ]

  const peerMentorshipPrograms = [
    {
      icon: 'Users' as const,
      title: 'Support Circles',
      description: 'Safe spaces for peer connection, shared experiences, and mutual encouragement.',
      items: [
        'Regular peer support meetings',
        'Facilitated group discussions',
        'Shared experience storytelling',
        'Emotional support networks'
      ]
    },
    {
      icon: 'Network' as const,
      title: 'Leadership Bridging',
      description: 'Pathways to leadership roles within the disability community and beyond.',
      items: [
        'Leadership skill development',
        'Public speaking training',
        'Advocacy and representation',
        'Board and committee participation'
      ]
    },
    {
      icon: 'Rocket' as const,
      title: 'Peer Mentorship Matching',
      description: 'One-on-one mentorship connecting experienced individuals with those beginning their journey.',
      items: [
        'Mentor-mentee pairing',
        'Regular mentorship sessions',
        'Goal-focused guidance',
        'Long-term relationship building'
      ]
    }
  ]

  const technologyPrograms = [
    {
      icon: 'Laptop' as const,
      title: 'Assistive Technology Training',
      description: 'Hands-on learning with devices and software that enhance independence and accessibility.',
      items: [
        'Screen readers and magnification',
        'Voice recognition software',
        'Adaptive input devices',
        'Mobile accessibility features'
      ]
    },
    {
      icon: 'Code' as const,
      title: 'Digital Skills Development',
      description: 'Essential computer and internet skills for education, employment, and daily life.',
      items: [
        'Basic computer literacy',
        'Internet navigation and safety',
        'Email and communication tools',
        'Office software proficiency'
      ]
    },
    {
      icon: 'Database' as const,
      title: 'Research Participation',
      description: 'Opportunities to contribute to disability research and innovation projects.',
      items: [
        'User testing and feedback',
        'Research study participation',
        'Product development input',
        'Policy consultation'
      ]
    },
    {
      icon: 'Cpu' as const,
      title: 'Innovation Projects',
      description: 'Collaborative projects exploring new technologies and solutions for accessibility challenges.',
      items: [
        'Technology innovation workshops',
        'Hackathons and challenges',
        'Prototype development',
        'Solution implementation'
      ]
    }
  ]

  const programBenefits = [
    {
      icon: 'Target' as const,
      title: 'Build Confidence',
      description: 'Develop self-assurance through skill mastery and achievement recognition.'
    },
    {
      icon: 'Network' as const,
      title: 'Expand Networks',
      description: 'Connect with peers, mentors, and professionals who share your goals.'
    },
    {
      icon: 'Lightbulb' as const,
      title: 'Unlock Potential',
      description: 'Discover new abilities and pathways you may not have considered before.'
    },
    {
      icon: 'Rocket' as const,
      title: 'Create Opportunities',
      description: 'Open doors to employment, education, and leadership roles in your community.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Where Care Meets{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-300 to-warm-500 drop-shadow-[0_0_20px_rgba(241,175,98,0.4)]">
              Growth
            </span>
          </h1>
        }
        subtitle="Empowerment programs that build skills, foster leadership, and create pathways to independence through innovation and community."
        height="default"
        backgroundImage={siteImages.successStory}
      />

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At KIRH, empowerment means more than just providing services—it's about creating genuine 
            opportunities for growth, learning, and self-determination. Our Empowerment & Innovation Hub 
            offers comprehensive programs that combine skill development, peer support, and cutting-edge 
            technology training to help individuals reach their full potential.
          </p>
        </div>
      </section>

      {/* Personal Skill Building */}
      <section className="section-container bg-gray-50" aria-labelledby="skill-building">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Foundation Programs
          </p>
          <h2 id="skill-building" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Personal Skill Building
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Develop essential life skills, set meaningful goals, and build a foundation for independent 
            living and personal success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillBuildingPrograms.map((program, index) => (
            <ServiceCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </section>

      {/* Peer Mentorship */}
      <section className="section-container" aria-labelledby="peer-mentorship">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Community Connection
          </p>
          <h2 id="peer-mentorship" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Peer Mentorship
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Connect with others who understand your journey, share experiences, and develop leadership 
            skills within a supportive community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {peerMentorshipPrograms.map((program, index) => (
            <ServiceCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50" aria-labelledby="technology-training">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-warm-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Future-Forward Learning
          </p>
          <h2 id="technology-training" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Technology & Innovation Training
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Master assistive technologies, develop digital skills, and participate in cutting-edge 
            research and innovation projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologyPrograms.map((program, index) => (
            <ServiceCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </section>

      {/* Program Benefits */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Participate?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our empowerment programs deliver tangible benefits that extend far beyond the classroom, 
            creating lasting positive change in participants' lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programBenefits.map((benefit, index) => (
            <ValueCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </section>

      {/* Success Story Preview */}
      <InfoSection
        subtitle="Real Impact"
        title="From Participant to Leader"
        description={
          <>
            <p className="mb-4">
              "When I joined KIRH's technology training program, I had never used a computer before. 
              Now, I'm working as a data entry specialist and mentoring other participants. The skills 
              I learned didn't just help me get a job—they gave me confidence and opened up a whole 
              new world of possibilities."
            </p>
            <p className="italic font-semibold text-primary-600">
              — James M., Program Graduate & Peer Mentor
            </p>
          </>
        }
        image={siteImages.successStory}
        imageAlt="Program participant learning and building skills"
        imageSide="left"
        background="gray"
      />

      {/* How to Join */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="card bg-gradient-to-br from-secondary-50 to-primary-50 border-2 border-secondary-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joining our empowerment programs is simple. Here's how to get started:
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contact Us
                </h3>
                <p className="text-gray-600 text-sm">
                  Reach out via phone, email, or our contact form
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Initial Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  Discuss your interests, goals, and program options
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enroll & Plan
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete enrollment and create your personalized learning plan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Begin Learning
                </h3>
                <p className="text-gray-600 text-sm">
                  Start your empowerment journey with full support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Learn More About Our Programs"
        description="Whether you're interested in skill building, peer mentorship, or technology training, we're here to help you take the next step toward independence and empowerment."
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        secondaryButton={{ text: 'View Our Impact', href: '/impact' }}
      />
    </>
  )
}

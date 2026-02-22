import { Heart, Target, Eye, Award, Users, Shield, Lightbulb, HandHeart, Award as AwardIcon } from 'lucide-react'
import HeroSection from '@/components/ui/HeroSection'
import ValueCard from '@/components/ui/ValueCard'
import TeamCard from '@/components/ui/TeamCard'
import InfoSection from '@/components/sections/InfoSection'
import CTASection from '@/components/ui/CTASection'
import TeamSection from '@/components/sections/TeamSection'
import { siteImages } from '@/lib/images'

export const metadata = {
  title: 'About Us | Kenya Industrial Research Homes',
  description: 'Learn about KIRH\'s mission to empower Persons with Disabilities through compassionate care, innovative training, and community integration.',
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: 'Heart' as const,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, kindness, and genuine care for the well-being of those we serve.'
    },
    {
      icon: 'HandHeart' as const,
      title: 'Empowerment',
      description: 'We believe in fostering independence and providing tools for individuals to reach their full potential.'
    },
    {
      icon: 'Shield' as const,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our practices, maintaining trust and transparency.'
    },
    {
      icon: 'Lightbulb' as const,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to continuously improve our services and impact.'
    },
    {
      icon: 'Users' as const,
      title: 'Inclusion',
      description: 'We create welcoming environments where diversity is celebrated and everyone belongs.'
    },
    {
      icon: 'Award' as const,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality services with professionalism and dedication.'
    }
  ]

  const leadership = [
    {
      name: 'Dr. Sarah Kimani',
      role: 'Executive Director',
      bio: 'With over 20 years in disability services, Sarah leads KIRH with vision and compassion, ensuring every program delivers transformative impact. She has pioneered innovative approaches to disability inclusion across Kenya and works closely with government and NGO partners to advance rights and opportunities for persons with disabilities.',
      image: '',
      linkedin: '#',
      email: 'sarah.kimani@kirh.co.ke',
      qualifications: [
        'PhD in Social Policy and Disability Studies - University of Nairobi',
        'Master of Arts in Social Work - Kenyatta University',
        'Bachelor of Arts in Sociology - Moi University'
      ],
      professionalCertifications: [
        'Certified Disability Management Specialist (CDMS)',
        'Certificate in Nonprofit Leadership - Kenya School of Government',
        'Advanced Training in Inclusive Development - University of Cambridge'
      ],
      skills: [
        'Strategic Leadership',
        'Policy Development',
        'Disability Rights Advocacy',
        'Stakeholder Engagement',
        'Program Management',
        'Grant Writing',
        'Public Speaking'
      ],
      experience: [
        'Executive Director at KIRH (2015 - Present)',
        'Program Director at National Council for Persons with Disabilities (2010 - 2015)',
        'Senior Social Worker at Ministry of Social Services (2005 - 2010)',
        'Consultant for various disability-focused NGOs across East Africa'
      ],
      memberships: [
        'Kenya Association of Social Workers',
        'International Society for Disability and Rehabilitation',
        'East African Disability Forum - Board Member'
      ]
    },
    {
      name: 'David Ochieng',
      role: 'Director of Programs',
      bio: 'David oversees all training and empowerment initiatives, bringing expertise in inclusive education and technology integration. His innovative programs have enabled hundreds of youth with disabilities to gain employment and start businesses, transforming lives through skill development and mentorship.',
      image: '',
      linkedin: '#',
      email: 'david.ochieng@kirh.co.ke',
      qualifications: [
        'Master of Education in Special Needs Education - Kenyatta University',
        'Bachelor of Education (Special Education) - Maseno University',
        'Diploma in Computer Science - Kenya Polytechnic'
      ],
      professionalCertifications: [
        'Certified Vocational Training Specialist',
        'Assistive Technology Professional (ATP)',
        'Project Management Professional (PMP)',
        'Certificate in Inclusive Education - UNESCO'
      ],
      skills: [
        'Curriculum Development',
        'Vocational Training',
        'Assistive Technology',
        'Inclusive Education',
        'Program Design & Evaluation',
        'Team Leadership',
        'Capacity Building'
      ],
      experience: [
        'Director of Programs at KIRH (2017 - Present)',
        'Senior Training Officer at Kenya Society for the Blind (2012 - 2017)',
        'Special Education Teacher at Joytown School (2008 - 2012)',
        'Technology Trainer for various disability organizations'
      ],
      memberships: [
        'Kenya National Association of Special Education Teachers',
        'Assistive Technology Industry Association',
        'Kenya ICT Action Network - Accessibility Working Group'
      ]
    },
    {
      name: 'Grace Wanjiru',
      role: 'Director of Care Services',
      bio: 'Grace manages our care delivery team with 15 years of experience in person-centered support and clinical coordination. Her compassionate approach and clinical expertise ensure that every client receives dignified, high-quality care tailored to their unique needs and goals.',
      image: '',
      linkedin: '#',
      email: 'grace.wanjiru@kirh.co.ke',
      qualifications: [
        'Master of Science in Nursing - University of Nairobi',
        'Bachelor of Science in Nursing - Moi University',
        'Diploma in Community Health Nursing - Kenya Medical Training College'
      ],
      professionalCertifications: [
        'Registered Nurse (RN) - Nursing Council of Kenya',
        'Certified Care Manager (CCM)',
        'Certificate in Palliative Care - Nairobi Hospice',
        'Advanced Trauma Care Certification',
        'Mental Health First Aid Instructor'
      ],
      skills: [
        'Clinical Care Management',
        'Care Coordination',
        'Team Supervision',
        'Patient Advocacy',
        'Quality Assurance',
        'Emergency Response',
        'Training & Mentoring'
      ],
      experience: [
        'Director of Care Services at KIRH (2018 - Present)',
        'Senior Nursing Officer at Kenyatta National Hospital (2012 - 2018)',
        'Community Health Nurse at Nairobi County (2009 - 2012)',
        'Clinical Supervisor for home-based care programs'
      ],
      memberships: [
        'Nursing Council of Kenya',
        'Kenya Registered Nurses Association',
        'National Case Management Network of Kenya',
        'Kenya Palliative Care Association'
      ]
    }
  ]

  const careTeam = [
    {
      name: 'Peter Mutua',
      role: 'Senior Care Coordinator',
      bio: 'Peter ensures seamless care delivery and develops personalized support plans for each individual we serve. With a background in social work and care management, he coordinates multidisciplinary teams to provide holistic, person-centered support.',
      image: '',
      qualifications: [
        'Bachelor of Arts in Social Work - Egerton University',
        'Diploma in Social Work and Community Development - Kenya Institute of Social Work'
      ],
      professionalCertifications: [
        'Registered Social Worker - National Association of Social Workers Kenya',
        'Certificate in Care Coordination and Case Management',
        'First Aid and CPR Certified - Kenya Red Cross'
      ],
      skills: [
        'Care Plan Development',
        'Case Management',
        'Crisis Intervention',
        'Family Counseling',
        'Team Coordination',
        'Documentation',
        'Client Advocacy'
      ],
      experience: [
        'Senior Care Coordinator at KIRH (2019 - Present)',
        'Social Worker at Machakos County Social Services (2015 - 2019)',
        'Community Development Officer at local NGO (2013 - 2015)'
      ],
      memberships: [
        'Kenya National Association of Social Workers'
      ]
    },
    {
      name: 'Joan Jepchumba Bett',
      role: 'Personal Care Assistant',
      bio: 'Skilled Personal Care Assistant with a strong background in supporting individuals living with disabilities. Over the past 4 years at KIRH, Joan has enhanced her ability to provide high-level assistance with activities of daily living, mobility, and emotional support. Her transition from Human Resources to care work reflects her passion for direct, hands-on interaction that makes an immediate positive impact on people\'s lives. She is dedicated to ensuring a safe, nurturing environment while fostering independence and empowering clients.',
      image: '',
      qualifications: [
        'Bachelor of Business Management (HR Major) - Moi University, 2016',
        'Higher National Diploma in Human Resource Management - Rift Valley Technical Training College, 2010',
        'Diploma in Business Administration - Eldoret Polytechnic, 2008'
      ],
      professionalCertifications: [
        'Certified Nursing Assistant - Kindred Training Institute, 2023',
        'Certified Human Resource Professional (CHRP) K - College of Human Resources, 2021'
      ],
      skills: [
        'Personal Care',
        'Daily Living Assistance',
        'Emotional Support',
        'Companionship',
        'Mobility Support',
        'Meal Preparation',
        'Documentation',
        'Crisis Management',
        'Empathetic Communication',
        'Team Collaboration'
      ],
      experience: [
        'Personal Care Assistant at KIRH (2021 - Present): Provides daily hygiene support, meal preparation, emotional comfort, supervises activities, maintains confidential documentation',
        'HR Assistant at Kenya Industrial Research and Development Institute (2018 - 2021): Recruitment, training coordination, disability mainstreaming, performance management',
        'Supply Chain Assistant at Kenya Industrial Research and Development Institute (2009 - 2018): Inventory management, quality control, documentation'
      ],
      memberships: [
        'Member Institute of Human Resource',
        'Founder & Member Young Volunteers for the Environment - Kenya'
      ]
    },
    {
      name: 'Mary Akinyi',
      role: 'Empowerment Specialist',
      bio: 'Mary designs and facilitates skill-building workshops, mentorship programs, and community integration activities. Her creative approach to empowerment programming helps clients discover their strengths and achieve personal goals.',
      image: '',
      qualifications: [
        'Bachelor of Arts in Psychology and Counseling - Catholic University of Eastern Africa',
        'Diploma in Community Development - Amani Institute'
      ],
      professionalCertifications: [
        'Certified Life Coach - International Coaching Federation',
        'Certificate in Group Facilitation and Training',
        'Mental Health First Aid Certified'
      ],
      skills: [
        'Workshop Design & Facilitation',
        'Life Coaching',
        'Peer Mentorship',
        'Goal Setting',
        'Motivational Speaking',
        'Activity Planning',
        'Progress Monitoring'
      ],
      experience: [
        'Empowerment Specialist at KIRH (2020 - Present)',
        'Community Mobilizer at Women Empowerment Link (2017 - 2020)',
        'Youth Counselor at local community center (2015 - 2017)'
      ],
      memberships: [
        'Kenya Counseling and Psychological Association',
        'International Coaching Federation'
      ]
    },
    {
      name: 'James Mwangi',
      role: 'Technology Trainer',
      bio: 'James leads our technology training programs, making assistive tech and digital skills accessible to all. His expertise in adaptive technology and patient teaching style empower clients to harness technology for greater independence.',
      image: '',
      qualifications: [
        'Bachelor of Science in Information Technology - Jomo Kenyatta University of Agriculture and Technology',
        'Diploma in Computer Science - Kenya Polytechnic'
      ],
      professionalCertifications: [
        'Assistive Technology Professional (ATP)',
        'Microsoft Certified Educator',
        'Certificate in Accessible Web Design',
        'NVDA Screen Reader Trainer Certification'
      ],
      skills: [
        'Assistive Technology',
        'Screen Readers',
        'Adaptive Devices',
        'Computer Training',
        'Mobile Accessibility',
        'Technical Support',
        'User Training'
      ],
      experience: [
        'Technology Trainer at KIRH (2018 - Present)',
        'IT Support Specialist at Kenya Society for the Blind (2015 - 2018)',
        'Computer Lab Assistant at university (2012 - 2015)'
      ],
      memberships: [
        'Assistive Technology Industry Association',
        'Kenya ICT Accessibility Forum'
      ]
    },
    {
      name: 'Rebecca Chebet',
      role: 'Community Liaison',
      bio: 'Rebecca builds partnerships with organizations, government agencies, and community groups to expand our reach. Her networking skills and community knowledge strengthen KIRH\'s connections and create opportunities for collaboration.',
      image: '',
      qualifications: [
        'Bachelor of Arts in Communication and Public Relations - Daystar University',
        'Diploma in Community Development - Kenya Institute of Social Work'
      ],
      professionalCertifications: [
        'Certificate in Partnership Development',
        'Public Relations Practitioner - Public Relations Society of Kenya',
        'Certificate in Stakeholder Engagement'
      ],
      skills: [
        'Partnership Development',
        'Community Mobilization',
        'Stakeholder Engagement',
        'Event Coordination',
        'Public Relations',
        'Networking',
        'Resource Mobilization'
      ],
      experience: [
        'Community Liaison at KIRH (2019 - Present)',
        'Communications Officer at local NGO (2016 - 2019)',
        'Community Outreach Coordinator at county government (2014 - 2016)'
      ],
      memberships: [
        'Public Relations Society of Kenya',
        'Kenya Community Development Network'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Who{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              We Are
            </span>
          </h1>
        }
        subtitle="Dedicated to creating inclusive environments where compassionate care meets meaningful opportunities, empowering every individual to thrive with dignity and independence."
        height="default"
        backgroundImage={siteImages.inclusion}
      />

      {/* Organization Story */}
      <InfoSection
        subtitle="Our Story"
        title="Founded on Dignity, Driven by Impact"
        description={
          <>
            <p className="mb-4">
              Kenya Industrial Research Homes (KIRH) was established with a powerful vision: to transform 
              the landscape of care and opportunity for Persons with Disabilities in Kenya. We recognized 
              that true empowerment requires more than basic support—it demands holistic care, skill development, 
              and genuine pathways to independence.
            </p>
            <p className="mb-4">
              Through strong partnerships with government ministries, including the Ministry of Education, Health, 
              and Social Protection, the National Council for Persons with Disabilities (NCPWD), County governments, 
              and dedicated disability organizations, we've built a comprehensive ecosystem of support.
            </p>
            <p>
              Today, KIRH stands as a beacon of hope and progress, continuously championing for a disability-inclusive 
              society where youth with disabilities are respected, empowered, and supported to develop their full 
              potential and lead quality, dignified lives.
            </p>
          </>
        }
        image={siteImages.story}
        imageAlt="Community gathering and partnership"
        imageSide="right"
      />

      {/* Vision & Mission */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50" aria-labelledby="vision-mission">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card border-2 border-primary-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create environments where care meets opportunity, and every person thrives with dignity, 
                independence, and access to innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="card border-2 border-secondary-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver holistic, accessible care while empowering PWDs through training, leadership development, 
                and technology integration—promoting an inclusive society where persons with different abilities 
                have access to affordable quality training services and become self-reliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container" aria-labelledby="core-values">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Our Values
          </p>
          <h2 id="core-values" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Principles That Guide Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our core values shape every decision we make and every interaction we have, 
            ensuring consistent excellence in all we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </section>

      {/* Team Stats Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
              <div className="text-white/90">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Trained & Certified</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Care Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section-container bg-gray-50" aria-labelledby="leadership-team">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Meet The Team
          </p>
          <h2 id="leadership-team" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Leadership
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our leadership team brings decades of combined experience in disability services, healthcare, 
            education, and social innovation, united by a shared commitment to dignity and empowerment.
          </p>
        </div>

        <TeamSection members={leadership} type="leadership" />
      </section>

      {/* Care & Support Team */}
      <section className="section-container bg-white" aria-labelledby="care-team">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="care-team" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Care & Support{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600">
              Specialists
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our dedicated care team embodies compassion, professionalism, and expertise, 
            working daily to ensure every individual receives personalized, dignified support.
          </p>
        </div>

        <TeamSection members={careTeam} type="care" />
      </section>

      {/* Human Warmth Statement */}
      <section className="section-container bg-gradient-to-br from-warm-50 to-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-primary-600 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            More Than a Team—A Family
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every member of our team embodies the values of dignity, respect, and empowerment. 
            We're not just professionals—we're advocates, mentors, friends, and champions for every 
            individual who walks through our doors. Our collective passion fuels our mission to create 
            lasting, positive change in the lives of those we serve.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "Together, we're building a more inclusive Kenya—one person, one family, one community at a time."
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Us in Our Mission"
        description="Whether as a partner, supporter, or team member, there are many ways to contribute to our vision of an inclusive society."
        primaryButton={{ text: 'Get Involved', href: '/contact' }}
        secondaryButton={{ text: 'View Our Impact', href: '/impact' }}
      />
    </>
  )
}

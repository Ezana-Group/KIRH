import * as Icons from 'lucide-react'
const { TrendingUp, Heart, Users, Award, CheckCircle } = Icons
import HeroSection from '@/components/ui/HeroSection'
import StatsBlock from '@/components/ui/StatsBlock'
import TestimonialCard from '@/components/ui/TestimonialCard'
import CTASection from '@/components/ui/CTASection'
import InfoSection from '@/components/sections/InfoSection'
import { siteImages } from '@/lib/images'

export const metadata = {
  title: 'Our Impact | Kenya Industrial Research Homes',
  description: 'See the transformative impact of KIRH programs through stories, statistics, and outcomes from our community.',
}

export default function ImpactPage() {
  const impactStats = [
    { label: 'Individuals Served', value: '1200', suffix: '+' },
    { label: 'Care Hours Delivered', value: '50K', suffix: '+' },
    { label: 'Skills Programs Completed', value: '450', suffix: '+' },
    { label: 'Employment Placements', value: '85', suffix: '+' }
  ]

  const additionalStats = [
    { label: 'Satisfaction Rate', value: '98', suffix: '%' },
    { label: 'Active Partnerships', value: '32' },
    { label: 'Community Events', value: '120', suffix: '+' },
    { label: 'Technology Trainings', value: '200', suffix: '+' }
  ]

  const testimonials = [
    {
      name: 'Mary Wanjiku',
      role: 'Program Participant',
      content: 'KIRH didn\'t just provide care—they believed in my potential. Through their empowerment programs, I gained skills I never thought possible and now work as a computer technician. They changed my life.'
    },
    {
      name: 'Peter Omondi',
      role: 'Family Member',
      content: 'Finding KIRH was a blessing for our family. The care my brother receives is compassionate and professional, and the staff genuinely care about his well-being and goals. We finally have peace of mind.'
    },
    {
      name: 'Grace Akinyi',
      role: 'Community Partner',
      content: 'Partnering with KIRH has been transformative for our organization. Their expertise in disability services and commitment to inclusion has helped us improve our own practices and better serve our community.'
    },
    {
      name: 'James Mutua',
      role: 'Mentorship Graduate',
      content: 'The peer mentorship program connected me with people who understood my journey. Having a mentor who had faced similar challenges gave me the confidence to pursue my dreams and become a leader myself.'
    },
    {
      name: 'Susan Chebet',
      role: 'Employment Program Graduate',
      content: 'KIRH\'s employment readiness program prepared me not just with skills, but with confidence. The interview preparation and job search support led to my first job, and I\'ve been employed for two years now.'
    },
    {
      name: 'David Kimani',
      role: 'Technology Training Participant',
      content: 'Learning to use assistive technology opened up a whole new world for me. I can now communicate independently, access information online, and participate fully in my community. KIRH made this possible.'
    }
  ]

  const outcomes = [
    {
      title: 'Independence Achieved',
      description: '73% of program participants report increased independence in daily living activities within six months of starting services.',
      icon: 'TrendingUp' as const
    },
    {
      title: 'Quality of Life Improved',
      description: '89% of individuals served report improved overall quality of life, including better health, social connections, and emotional well-being.',
      icon: 'Heart' as const
    },
    {
      title: 'Community Integration',
      description: '65% of participants are now actively engaged in community activities, employment, or volunteer work they were not involved in before.',
      icon: 'Users' as const
    },
    {
      title: 'Skills Gained',
      description: '92% of empowerment program graduates successfully acquired new skills and applied them in real-world situations.',
      icon: 'Award' as const
    }
  ]

  const beforeAfterStories = [
    {
      name: 'John\'s Journey',
      before: 'John came to KIRH feeling isolated and dependent on family for all daily activities. He had limited social connections and no clear path forward.',
      after: 'After 12 months with KIRH, John lives semi-independently, has a part-time job at a local business, participates in community activities, and mentors new participants.',
      outcome: 'From isolation to independence and leadership'
    },
    {
      name: 'Sarah\'s Transformation',
      before: 'Sarah had never used a computer and felt she had no marketable skills. She struggled with confidence and believed employment was impossible.',
      after: 'Through KIRH\'s technology training and employment programs, Sarah completed digital skills training, gained certification, and now works as a data entry specialist.',
      outcome: 'From no skills to employed professional'
    },
    {
      name: 'Michael\'s Success',
      before: 'Michael received basic care but had no opportunities for growth or development. He spent most days at home with limited social interaction.',
      after: 'KIRH\'s holistic approach provided Michael with compassionate care plus empowerment programs. He now leads a peer support group and advocates for disability rights.',
      outcome: 'From passive recipient to active community leader'
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
              Impact
            </span>
            {' '}So Far
          </h1>
        }
        subtitle="Measuring success through transformed lives, achieved goals, and strengthened communities. See the real difference KIRH makes every day."
        height="default"
        backgroundImage={siteImages.communityImpact}
      />

      {/* Main Stats */}
      <StatsBlock stats={impactStats} background="gradient" />

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            More Than Numbers—Real Lives Changed
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            While statistics tell part of our story, the true measure of KIRH's impact lies in the 
            individual journeys of empowerment, independence, and dignity we witness every day. 
            Each number represents a person whose life has been transformed through compassionate care, 
            innovative programming, and unwavering support.
          </p>
        </div>
      </section>

      {/* Outcome Highlights */}
      <section className="section-container bg-gray-50" aria-labelledby="outcomes">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Measurable Outcomes
          </p>
          <h2 id="outcomes" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our comprehensive evaluation framework tracks meaningful outcomes across multiple dimensions 
            of well-being and empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = Icons[outcome.icon] as Icons.LucideIcon
            return (
              <div key={outcome.title} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Additional Stats */}
      <StatsBlock stats={additionalStats} background="light" />

      {/* Testimonials */}
      <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="testimonials">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
              In Their Own Words
            </p>
            <h2 id="testimonials" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Stories from Our{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hear directly from the individuals, families, and partners who have experienced 
              KIRH's transformative impact firsthand.
            </p>
          </div>

          {/* Featured Testimonial - Hero */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-20 h-20 text-primary-200 opacity-50">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              
              <div className="card bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 shadow-2xl relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white font-display font-bold text-4xl md:text-5xl shadow-xl">
                      {testimonials[0].name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Star Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-6">
                      "{testimonials[0].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonials[0].name}
                        </div>
                        <div className="text-primary-600 font-medium">
                          {testimonials[0].role}
                        </div>
                      </div>
                      
                      <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-secondary-100 rounded-full">
                        <CheckCircle className="w-5 h-5 text-secondary-600" />
                        <span className="text-secondary-700 font-semibold text-sm">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-xl">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <h3 className="text-white text-2xl font-display font-bold mb-2">
                    Watch Sarah's Story
                  </h3>
                  <p className="text-white/80">
                    See how KIRH changed her life (Video coming soon)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Testimonials Grid - Enhanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={testimonial.name} className="card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                  
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">5-Star Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Want to share your own story or learn more about our impact?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 btn-primary text-lg"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Before & After Stories */}
      <section className="section-container bg-white" aria-labelledby="stories">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-warm-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Transformation Stories
          </p>
          <h2 id="stories" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Journeys of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Transformation
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real stories of individuals who have experienced profound positive change through KIRH programs.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {beforeAfterStories.map((story, index) => (
            <div key={story.name} className="relative group">
              {/* Story Header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  {story.name}
                </h3>
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  <span className="font-semibold">
                    {story.outcome}
                  </span>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Desktop: Side by side with arrow */}
                <div className="hidden md:grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  {/* BEFORE Card */}
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-2xl">😔</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">Before</h4>
                          <p className="text-sm text-gray-500">The Challenge</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {story.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span className="text-white text-3xl font-bold">→</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium whitespace-nowrap">12 Months</span>
                  </div>

                  {/* AFTER Card */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-md">
                          <span className="text-2xl">😊</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">After</h4>
                          <p className="text-sm text-secondary-600 font-semibold">The Success</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-900 leading-relaxed text-lg font-medium">
                      {story.after}
                    </p>
                  </div>
                </div>

                {/* Mobile: Stacked */}
                <div className="md:hidden space-y-6">
                  {/* BEFORE Card */}
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xl">😔</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Before</h4>
                        <p className="text-xs text-gray-500">The Challenge</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {story.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">↓</span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">12 Months</span>
                    </div>
                  </div>

                  {/* AFTER Card */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 shadow-lg border-2 border-primary-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-md">
                        <span className="text-xl">😊</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">After</h4>
                        <p className="text-xs text-secondary-600 font-semibold">The Success</p>
                      </div>
                    </div>
                    <p className="text-gray-900 leading-relaxed font-medium">
                      {story.after}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Long-term Impact */}
      <InfoSection
        subtitle="Lasting Change"
        title="Building a Disability-Inclusive Future"
        description="Beyond individual transformation, KIRH's work contributes to systemic change. Through partnerships with government ministries, the National Council for Persons with Disabilities (NCPWD), County governments, and disability organizations, we're helping build a more inclusive Kenya where persons with disabilities are respected, empowered, and supported to reach their full potential."
        image={siteImages.communityImpact}
        imageAlt="Community event and inclusion"
        imageSide="right"
      />

      {/* CTA */}
      <CTASection
        title="Be Part of the Impact"
        description="Whether through partnership, support, or participation, you can help us continue creating transformative change in the lives of Persons with Disabilities across Kenya."
        primaryButton={{ text: 'Get Involved', href: '/contact' }}
        secondaryButton={{ text: 'Learn About Our Programs', href: '/empowerment' }}
      />
    </>
  )
}

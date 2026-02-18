import HeroSection from '@/components/ui/HeroSection'
import { CheckCircle, Keyboard, Eye, Volume2, Navigation } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Statement | Kenya Industrial Research Homes',
  description: 'KIRH is committed to ensuring digital accessibility for Persons with Disabilities.',
}

export default function AccessibilityPage() {
  const features = [
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full website functionality accessible via keyboard for those who cannot use a mouse.'
    },
    {
      icon: Eye,
      title: 'Screen Reader Compatible',
      description: 'Proper ARIA labels and semantic HTML for screen reader users.'
    },
    {
      icon: Volume2,
      title: 'Clear Content',
      description: 'Plain language, high contrast, and readable fonts for better comprehension.'
    },
    {
      icon: Navigation,
      title: 'Consistent Navigation',
      description: 'Predictable, consistent navigation structure across all pages.'
    }
  ]

  return (
    <>
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Accessibility
            </span>
            {' '}Statement
          </h1>
        }
        subtitle="KIRH is committed to ensuring digital accessibility for all people, including Persons with Disabilities."
        height="short"
      />

      <section className="section-container max-w-5xl mx-auto">
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
          <p className="text-gray-800 mb-2">
            <strong>Last Updated:</strong> February 16, 2026
          </p>
          <p className="text-gray-700 text-sm">
            Accessibility is a core value at KIRH - embedded in our services, facilities, and digital presence.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Kenya Industrial Research Homes (KIRH) is deeply committed to ensuring accessibility for all 
              persons, with and without disabilities. This commitment extends beyond our physical services 
              to include our digital platforms, facilities, communications, and organizational practices.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            1. Our Accessibility Commitment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As an organization serving Persons with Disabilities (PWDs), accessibility is not an afterthought—it 
            is fundamental to our mission. We are committed to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Providing equitable access to information, services, and opportunities</li>
            <li>Removing barriers—physical, digital, and social</li>
            <li>Fostering inclusive environments where everyone can participate fully</li>
            <li>Continuously improving accessibility based on user feedback and best practices</li>
            <li>Complying with Kenya's Persons with Disabilities Act, 2003 and international standards</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            2. Website Accessibility Standards
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This website has been designed and developed to conform with the Web Content Accessibility Guidelines 
            (WCAG) 2.1 Level AA, which is recognized internationally as the standard for web accessibility. 
            These guidelines make web content accessible to people with a wide range of disabilities including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Visual disabilities (blindness, low vision, color blindness)</li>
            <li>Auditory disabilities (deafness, hearing loss)</li>
            <li>Motor/physical disabilities</li>
            <li>Cognitive and neurological disabilities</li>
            <li>Speech disabilities</li>
            <li>Combinations of disabilities</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            3. Website Accessibility Features
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.1 Visual and Design
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>High Contrast:</strong> All text meets or exceeds WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text)</li>
            <li><strong>Readable Typography:</strong> Clear, legible fonts (Inter and Poppins) with appropriate sizing</li>
            <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of functionality</li>
            <li><strong>Color Independence:</strong> Information is not conveyed by color alone</li>
            <li><strong>Consistent Layout:</strong> Predictable navigation and page structure throughout</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.2 Keyboard Navigation
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Full Keyboard Access:</strong> All interactive elements are accessible via keyboard</li>
            <li><strong>Visible Focus Indicators:</strong> Clear visual indicators show which element has keyboard focus</li>
            <li><strong>Skip Navigation Links:</strong> "Skip to main content" links for efficient navigation</li>
            <li><strong>Logical Tab Order:</strong> Elements receive focus in a meaningful, logical sequence</li>
            <li><strong>No Keyboard Traps:</strong> Users can navigate away from any element using only keyboard</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.3 Screen Reader Compatibility
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Semantic HTML:</strong> Proper use of HTML5 semantic elements (header, nav, main, section, footer)</li>
            <li><strong>ARIA Labels:</strong> Appropriate ARIA labels and descriptions where needed</li>
            <li><strong>Alt Text:</strong> All informative images have descriptive alternative text</li>
            <li><strong>Heading Structure:</strong> Logical heading hierarchy (H1, H2, H3) for easy navigation</li>
            <li><strong>Form Labels:</strong> All form fields have clear, associated labels</li>
            <li><strong>Link Context:</strong> Link text is meaningful and describes destination or purpose</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.4 Mobile Accessibility
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Responsive Design:</strong> Website adapts to all screen sizes and orientations</li>
            <li><strong>Touch Targets:</strong> Interactive elements are large enough for easy touch interaction (minimum 44x44 pixels)</li>
            <li><strong>Gesture Alternatives:</strong> All functionality available without complex gestures</li>
            <li><strong>Mobile Screen Readers:</strong> Compatible with iOS VoiceOver and Android TalkBack</li>
          </ul>
        </div>

        <div className="card bg-primary-50 border-2 border-primary-200 mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Quick Reference: Accessibility Features
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Alternative text for all meaningful images
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Proper heading structure for easy navigation
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                High color contrast ratios (WCAG AA)
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Skip navigation links for keyboard users
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Clear focus indicators for keyboard navigation
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Responsive design for all devices
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Accessible forms with proper labels
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700">
                Screen reader optimized content
              </span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            4. Assistive Technologies Supported
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website has been tested with and is designed to work with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver (macOS/iOS), TalkBack (Android)</li>
            <li><strong>Screen Magnification:</strong> ZoomText, built-in OS magnifiers</li>
            <li><strong>Voice Recognition:</strong> Dragon NaturallySpeaking, voice control systems</li>
            <li><strong>Keyboard-Only Navigation:</strong> No mouse required for any functionality</li>
            <li><strong>Browser Accessibility Tools:</strong> High contrast modes, text-to-speech extensions</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            5. Physical Accessibility of KIRH Facilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our physical locations in Nairobi are designed with accessibility in mind:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Wheelchair Access:</strong> Ramps, wide doorways, and accessible entrances</li>
            <li><strong>Accessible Restrooms:</strong> Adapted facilities with grab bars and adequate space</li>
            <li><strong>Signage:</strong> Clear, high-contrast signage with Braille where appropriate</li>
            <li><strong>Parking:</strong> Designated accessible parking spaces</li>
            <li><strong>Service Animals:</strong> Service animals are welcome in all areas</li>
            <li><strong>Assistive Devices:</strong> Availability of wheelchairs, walkers, and other mobility aids</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            6. Communication Accessibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH ensures accessible communication through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Multiple Formats:</strong> Information available in large print, audio, and electronic formats upon request</li>
            <li><strong>Sign Language:</strong> Kenyan Sign Language interpretation available upon advance request</li>
            <li><strong>Plain Language:</strong> Clear, jargon-free communication</li>
            <li><strong>Accessible Documents:</strong> PDFs and documents designed for screen reader compatibility</li>
            <li><strong>Alternative Contact Methods:</strong> Multiple ways to reach us (phone, email, in-person, online forms)</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            7. Ongoing Accessibility Efforts
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Accessibility is an ongoing commitment. KIRH continuously works to improve through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Regular accessibility audits and testing</li>
            <li>Staff training on accessibility and disability awareness</li>
            <li>User testing with people with disabilities</li>
            <li>Implementing user feedback and suggestions</li>
            <li>Staying current with accessibility standards and best practices</li>
            <li>Partnering with disability advocacy organizations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            8. Compliance and Legal Framework
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH's accessibility practices are guided by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Kenya:</strong> Persons with Disabilities Act, 2003</li>
            <li><strong>International:</strong> United Nations Convention on the Rights of Persons with Disabilities (UNCRPD)</li>
            <li><strong>Technical:</strong> Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
            <li><strong>Sectoral:</strong> National Council for Persons with Disabilities regulations</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-warm-50 to-primary-50 border border-warm-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Accessibility Feedback and Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We welcome your feedback on the accessibility of this website and our services. If you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Encounter accessibility barriers on our website or in our services</li>
            <li>Have suggestions for improving accessibility</li>
            <li>Need information in an alternative format</li>
            <li>Require assistance accessing any KIRH content or services</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Please contact our Accessibility Coordinator:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <strong>Accessibility Coordinator</strong><br />
              Kenya Industrial Research Homes
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> accessibility@kirh.co.ke<br />
              <strong>Alternative:</strong> info@kirh.co.ke<br />
              <strong>Phone:</strong> 0700 045 294<br />
              <strong>Address:</strong> South B, Nairobi, Kenya<br />
              <strong>Response Time:</strong> We aim to respond within 3 business days
            </p>
          </div>
        </div>

        <div className="bg-warm-50 border-l-4 border-warm-600 p-6 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">
            Our Promise
          </p>
          <p className="text-gray-700 text-sm">
            At KIRH, accessibility is not a checklist—it's a value that shapes everything we do. 
            We are committed to continuous improvement and to creating truly inclusive experiences 
            for everyone. Your input is essential to this journey, and we thank you for helping us 
            build a more accessible organization.
          </p>
        </div>
      </section>
    </>
  )
}

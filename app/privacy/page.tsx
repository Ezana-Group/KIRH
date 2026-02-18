import HeroSection from '@/components/ui/HeroSection'

export const metadata = {
  title: 'Privacy Policy | Kenya Industrial Research Homes',
  description: 'KIRH Privacy Policy - Learn how we protect and handle your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Privacy
            </span>
            {' '}Policy
          </h1>
        }
        subtitle="Your privacy and data security are important to us. Learn how we collect, use, and protect your information."
        height="short"
      />

      <section className="section-container max-w-5xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-800 mb-2">
              <strong>Last Updated:</strong> February 16, 2026
            </p>
            <p className="text-gray-700 text-sm">
              This Privacy Policy is compliant with Kenya's Data Protection Act, 2019 and applicable regulations.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Kenya Industrial Research Homes (KIRH) is committed to protecting the privacy and personal data 
              of all individuals we serve, their families, partners, and website visitors. This Privacy Policy 
              explains how we collect, use, store, and protect your information in accordance with the 
              <strong> Kenya Data Protection Act, 2019</strong>, and other applicable laws and regulations.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            1. Information We Collect
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            1.1 Personal Information
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you engage with KIRH services, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Identification Information:</strong> Full name, date of birth, national ID or passport number, photographs</li>
            <li><strong>Contact Details:</strong> Physical address, email address, telephone numbers, emergency contacts</li>
            <li><strong>Health & Medical Information:</strong> Medical history, current health conditions, disability type and requirements, medications, allergies, healthcare provider information</li>
            <li><strong>Care Requirements:</strong> Mobility needs, communication preferences, dietary requirements, daily living assistance needs</li>
            <li><strong>Financial Information:</strong> Payment details, insurance information, fee arrangements</li>
            <li><strong>Family Information:</strong> Next of kin details, guardian/caregiver information, family medical history (where relevant)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            1.2 Information Collected Automatically
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you visit our website, we may automatically collect technical information including IP address, 
            browser type, device information, pages visited, and time spent on pages through cookies and similar technologies.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH uses your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Service Delivery:</strong> To provide personalized care services, develop individualized care plans, and coordinate daily support activities</li>
            <li><strong>Health & Safety:</strong> To ensure appropriate care delivery, manage medical emergencies, and coordinate with healthcare providers</li>
            <li><strong>Communication:</strong> To contact you regarding appointments, care updates, program opportunities, and important information</li>
            <li><strong>Compliance:</strong> To meet legal and regulatory requirements under Kenyan law</li>
            <li><strong>Quality Improvement:</strong> To evaluate and enhance our services, train staff, and develop new programs</li>
            <li><strong>Research:</strong> With explicit consent, to participate in research projects aimed at improving disability services</li>
            <li><strong>Administration:</strong> To process payments, maintain records, and manage organizational operations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            3. Legal Basis for Processing (Kenya Data Protection Act)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under Kenya's Data Protection Act, 2019, we process your data based on:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Consent:</strong> You have provided explicit, informed consent for specific processing activities</li>
            <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill our service agreement with you</li>
            <li><strong>Legal Obligation:</strong> We are required by Kenyan law to process certain information</li>
            <li><strong>Vital Interests:</strong> Processing is necessary to protect life or physical safety</li>
            <li><strong>Legitimate Interests:</strong> Processing serves our legitimate organizational interests while respecting your rights</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            4. Information Sharing and Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH does not sell, rent, or trade your personal information. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Healthcare Providers:</strong> With your consent, we share relevant information with doctors, therapists, and medical professionals involved in your care</li>
            <li><strong>Government Agencies:</strong> When required by law, we share information with the Ministry of Health, National Council for Persons with Disabilities (NCPWD), or other regulatory bodies</li>
            <li><strong>Emergency Services:</strong> In medical emergencies, we share necessary information with emergency responders</li>
            <li><strong>Service Providers:</strong> With trusted vendors who assist in service delivery (e.g., payroll, IT systems) under strict confidentiality agreements</li>
            <li><strong>Legal Requirements:</strong> When required by court order or legal process in Kenya</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            5. Data Security Measures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH implements comprehensive security measures including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Secure, locked filing systems for physical records</li>
            <li>Password-protected electronic systems with encryption</li>
            <li>Limited access to personal data on a need-to-know basis</li>
            <li>Regular staff training on confidentiality and data protection</li>
            <li>Secure disposal procedures for outdated information</li>
            <li>Regular security audits and updates</li>
            <li>Backup systems to prevent data loss</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            6. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
            or as required by Kenyan law. Medical and care records are retained for a minimum of 7 years after service 
            termination as required by healthcare regulations. After the retention period, information is securely destroyed.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            7. Your Rights Under Kenyan Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under the Kenya Data Protection Act, 2019, you have the following rights:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Right to Access:</strong> Request copies of your personal data held by KIRH</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
            <li><strong>Right to Restrict Processing:</strong> Limit how we use your information in certain circumstances</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Right to Object:</strong> Object to certain types of processing</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
            <li><strong>Right to Complain:</strong> Lodge a complaint with the Office of the Data Protection Commissioner of Kenya</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            8. Children and Vulnerable Persons
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH takes special care when handling information of minors (under 18 years) and vulnerable persons. 
            Consent for processing their data is obtained from parents, guardians, or legally authorized representatives. 
            We implement additional safeguards to protect this sensitive information in accordance with the Children's Act 
            and other relevant Kenyan legislation.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            9. Cookies and Website Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website uses cookies to enhance user experience. These include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            10. International Data Transfers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your personal data is stored and processed within Kenya. If we need to transfer data outside Kenya, 
            we ensure adequate protection measures are in place as required by the Kenya Data Protection Act, 2019.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            11. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
            We will notify you of significant changes through our website or direct communication. Continued use of our 
            services after updates constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            12. Contact Our Data Protection Officer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions about this Privacy Policy, to exercise your data rights, or to raise concerns about data protection:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-2">
              <strong>Data Protection Officer</strong><br />
              Kenya Industrial Research Homes
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> privacy@kirh.co.ke<br />
              <strong>Alternative:</strong> info@kirh.co.ke<br />
              <strong>Phone:</strong> 0700 045 294<br />
              <strong>Address:</strong> South B, Nairobi, Kenya
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            13. Complaints to the Regulator
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you believe your data protection rights have been violated, you have the right to lodge a complaint with:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <strong>Office of the Data Protection Commissioner</strong><br />
              Kenya
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong> <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.odpc.go.ke</a><br />
              <strong>Email:</strong> info@odpc.go.ke<br />
              <strong>Phone:</strong> +254 20 2604353
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

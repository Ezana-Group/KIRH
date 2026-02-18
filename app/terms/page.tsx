import HeroSection from '@/components/ui/HeroSection'

export const metadata = {
  title: 'Terms of Service | Kenya Industrial Research Homes',
  description: 'KIRH Terms of Service - Guidelines for using our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-100 via-warm-200 to-warm-400">
              Terms
            </span>
            {' '}of Service
          </h1>
        }
        subtitle="Guidelines and terms governing the use of KIRH services and website."
        height="short"
      />

      <section className="section-container max-w-5xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-800 mb-2">
              <strong>Last Updated:</strong> February 16, 2026
            </p>
            <p className="text-gray-700 text-sm">
              These terms are governed by the laws of the Republic of Kenya.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Kenya Industrial Research Homes (KIRH). These Terms of Service ("Terms") govern your 
              access to and use of KIRH's services, programs, and website. By engaging with KIRH, you agree 
              to these Terms. Please read them carefully.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing KIRH's website, requesting services, or participating in our programs, you acknowledge 
            that you have read, understood, and agree to be bound by these Terms. If you are entering into this 
            agreement on behalf of another person (as a guardian, caregiver, or authorized representative), you 
            confirm that you have the legal authority to do so.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            2. Services Provided
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.1 Care Services
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH provides comprehensive care and support services for Persons with Disabilities (PWDs), including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Personal care and daily living assistance</li>
            <li>Emotional and social support</li>
            <li>Community integration facilitation</li>
            <li>Care coordination with healthcare providers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.2 Empowerment Programs
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH offers skill-building and empowerment programs including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Life skills and independence training</li>
            <li>Technology and assistive device training</li>
            <li>Peer mentorship and leadership development</li>
            <li>Employment readiness preparation</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            3. Service Agreements and Care Plans
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Upon enrollment, KIRH and the client (or authorized representative) will:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Conduct a comprehensive needs assessment</li>
            <li>Develop a personalized care plan or program outline</li>
            <li>Define service scope, schedule, and fees</li>
            <li>Establish communication protocols and emergency procedures</li>
            <li>Review and update the plan regularly</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            4. Client and Family Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients and their representatives agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Provide accurate and complete information about health, needs, and preferences</li>
            <li>Notify KIRH promptly of any changes in condition or circumstances</li>
            <li>Treat KIRH staff, volunteers, and other participants with respect and dignity</li>
            <li>Follow agreed-upon care plans and program guidelines</li>
            <li>Make timely payment for services as agreed</li>
            <li>Provide a safe working environment for KIRH staff (for home-based services)</li>
            <li>Report any concerns or complaints promptly</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            5. Fees and Payment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Service fees are established based on individual needs and service requirements. Payment terms include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Fees are outlined in the service agreement</li>
            <li>Payment is due as specified in your agreement (monthly, quarterly, etc.)</li>
            <li>Late payment may result in service suspension</li>
            <li>Financial assistance programs may be available - inquire for eligibility</li>
            <li>Insurance claims assistance is provided where applicable</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            6. Service Modifications and Termination
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.1 By Client
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients may modify or terminate services at any time with 14 days written notice. Fees may apply 
            for early termination as outlined in the service agreement.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.2 By KIRH
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH may modify or terminate services if: (1) client behavior endangers staff or others, 
            (2) payment obligations are not met, (3) information provided is fraudulent, or (4) service 
            requirements exceed KIRH's capacity. We will provide reasonable notice and transition support.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            7. Professional Standards and Conduct
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH commits to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Employing qualified, trained, and vetted staff</li>
            <li>Maintaining professional liability insurance</li>
            <li>Following best practices in disability care and support</li>
            <li>Respecting client dignity, autonomy, and rights at all times</li>
            <li>Maintaining confidentiality in accordance with our Privacy Policy</li>
            <li>Complying with all relevant Kenyan laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            8. Complaints and Dispute Resolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH is committed to addressing concerns promptly and fairly:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Complaints should be submitted in writing to info@kirh.co.ke or by phone</li>
            <li>We will acknowledge complaints within 2 business days</li>
            <li>Investigations are completed within 14 days where possible</li>
            <li>Formal dispute resolution follows Kenya's alternative dispute resolution mechanisms</li>
            <li>Legal disputes are subject to Kenyan jurisdiction</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            9. Intellectual Property Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All content on the KIRH website—including text, graphics, logos, images, videos, and software—is 
            the property of Kenya Industrial Research Homes or its licensors and is protected by Kenyan and 
            international copyright laws. You may not reproduce, distribute, modify, or create derivative works 
            without written permission from KIRH.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            10. Liability and Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>10.1 Limitation of Liability:</strong> While KIRH strives to provide the highest quality 
            services, we cannot guarantee specific health outcomes or results. Our liability is limited to 
            the amount paid for services in the preceding 12 months.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>10.2 Indemnification:</strong> Clients agree to indemnify KIRH against claims arising from 
            provision of false information, client or family misconduct, or breach of these Terms.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            11. Confidentiality and Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH maintains strict confidentiality of all client information in accordance with the Kenya Data 
            Protection Act, 2019, and our Privacy Policy. Staff members sign confidentiality agreements and 
            receive regular training on privacy protection.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            12. Safeguarding and Protection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH has robust safeguarding policies to protect vulnerable persons from abuse, neglect, or harm:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>All staff undergo background checks and safeguarding training</li>
            <li>Clear reporting procedures for concerns or incidents</li>
            <li>Cooperation with relevant authorities when required</li>
            <li>Zero tolerance for abuse, discrimination, or exploitation</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            13. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms of Service are governed by and construed in accordance with the laws of the Republic 
            of Kenya. Any disputes arising from these Terms or KIRH services shall be subject to the exclusive 
            jurisdiction of the courts of Kenya.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            14. Compliance with Kenyan Legislation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KIRH operates in compliance with relevant Kenyan laws including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Persons with Disabilities Act, 2003</li>
            <li>Data Protection Act, 2019</li>
            <li>Children Act, 2022</li>
            <li>Employment Act, 2007</li>
            <li>Public Health Act</li>
            <li>Relevant regulations from the National Council for Persons with Disabilities (NCPWD)</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            15. Force Majeure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH is not liable for failure to perform obligations due to circumstances beyond reasonable control, 
            including natural disasters, epidemics, government actions, strikes, or other force majeure events. 
            We will make reasonable efforts to resume services as soon as possible.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            16. Severability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If any provision of these Terms is found to be invalid or unenforceable under Kenyan law, 
            the remaining provisions shall continue in full force and effect.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            17. Amendments to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KIRH reserves the right to modify these Terms of Service at any time. Significant changes will be 
            communicated through email, website notice, or direct notification. Continued use of services after 
            modifications constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 mt-8">
            18. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions, concerns, or clarifications regarding these Terms of Service:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <strong>Kenya Industrial Research Homes</strong>
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> South B, Nairobi, Kenya<br />
              <strong>Email:</strong> info@kirh.co.ke<br />
              <strong>Phone:</strong> 0700 045 294<br />
              <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EAT
            </p>
          </div>

          <div className="mt-8 bg-warm-50 border-l-4 border-warm-600 p-6 rounded-r-lg">
            <p className="text-gray-800 font-semibold mb-2">
              Acknowledgment
            </p>
            <p className="text-gray-700 text-sm">
              By using KIRH's services or website, you acknowledge that you have read and understood these 
              Terms of Service and agree to be bound by them. If you have questions or need clarification 
              on any provision, please contact us before engaging our services.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

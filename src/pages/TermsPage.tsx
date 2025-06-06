import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 1, 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using NIQ Network, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-6">
                NIQ Network is a platform that connects businesses with verified IT professionals. 
                We provide tools and services to facilitate project posting, proposal submission, 
                communication, and payment processing between clients and freelancers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Registration</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must be at least 18 years old to use our services</li>
                <li>One person or entity may maintain only one account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Keep your login credentials confidential</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>You are liable for all activities under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to circumvent our fee structure</li>
                <li>Use automated systems to access our platform</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Project Posting and Bidding</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Clients</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide accurate project descriptions and requirements</li>
                <li>Respond to freelancer questions in a timely manner</li>
                <li>Pay agreed amounts according to project terms</li>
                <li>Provide constructive feedback upon project completion</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Freelancers</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Only bid on projects you can realistically complete</li>
                <li>Provide accurate estimates for time and cost</li>
                <li>Deliver work according to agreed specifications</li>
                <li>Communicate regularly with clients about progress</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments and Fees</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Subscription Fees</h3>
              <p className="text-gray-600 mb-4">
                Users pay monthly or annual subscription fees based on their chosen plan. 
                Fees are non-refundable except as required by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Processing</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>We use secure third-party payment processors</li>
                <li>Project payments are held in escrow until completion</li>
                <li>Disputes may result in payment holds</li>
                <li>We reserve the right to investigate suspicious transactions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                You retain ownership of content you create and post on our platform. By posting 
                content, you grant us a license to use, display, and distribute that content 
                in connection with our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                We provide dispute resolution services for project-related conflicts:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Users should first attempt to resolve disputes directly</li>
                <li>We offer mediation services for unresolved conflicts</li>
                <li>Our decisions in disputes are final and binding</li>
                <li>Legal action must be pursued in San Francisco, CA courts</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                NIQ Network is not liable for any indirect, incidental, special, or consequential 
                damages arising from your use of our services. Our total liability is limited to 
                the amount you paid for our services in the 12 months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Violation of these terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Inactivity for extended periods</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. We will notify users of 
                significant changes via email or platform notifications. Continued use of our 
                services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@niq.net<br />
                  <strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="fixed w-full z-50 bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="logo text-[var(--brand-primary)] text-xl">atomio</h1>
          
          <div></div> {/* Spacer for center alignment */}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
              Privacy Policy
            </h1>
            
            <div className="text-[var(--text-secondary)] mb-8" style={{ fontSize: '16px' }}>
              <strong>Last updated:</strong> January 2025
            </div>

            <div className="space-y-8 text-[var(--text-primary)]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              
              <section>
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p>
                  Atomio Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-lg font-bold mb-3">2.1 Personal Information</h3>
                <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Project requirements and business information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-4">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and communicate with you</li>
                  <li>Send you relevant information about our services</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">7. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">11. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">13. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
                  <p><strong>Email:</strong> info@atomio.tech</p>
                  <p><strong>Phone:</strong> +254 799 456 976</p>
                  <p><strong>Address:</strong> Nairobi, Kenya</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

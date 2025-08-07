import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Back to Home Link */}
        <div className="pt-20 pb-4">
          <div className="max-w-[1200px] mx-auto px-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
              Terms of Service
            </h1>
            
            <div className="text-[var(--text-secondary)] mb-8" style={{ fontSize: '16px' }}>
              <strong>Last updated:</strong> January 2025
            </div>

            <div className="space-y-8 text-[var(--text-primary)]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              
              <section>
                <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the services provided by Atomio Technologies ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">2. Description of Services</h2>
                <p className="mb-4">Atomio Technologies provides:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Custom software development services</li>
                  <li>AI and automation solutions</li>
                  <li>Cloud infrastructure services</li>
                  <li>Technology consulting</li>
                  <li>Digital transformation services</li>
                  <li>Related technology services as agreed upon</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">3. Client Responsibilities</h2>
                <p className="mb-4">As a client, you agree to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond promptly to requests for information or feedback</li>
                  <li>Make timely payments as agreed</li>
                  <li>Provide necessary access to systems and resources</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">4. Payment Terms</h2>
                <h3 className="text-lg font-bold mb-3">4.1 Payment Schedule</h3>
                <p className="mb-4">Payment terms will be specified in individual project agreements. Generally:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for overdue accounts</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">4.2 Refunds</h3>
                <p>
                  Refund policies will be specified in individual project agreements. Generally, work completed cannot be refunded, but we will work with clients to resolve any issues.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">5. Intellectual Property</h2>
                <h3 className="text-lg font-bold mb-3">5.1 Client-Owned IP</h3>
                <p className="mb-4">
                  Upon full payment, clients will own the intellectual property rights to custom-developed solutions, subject to any third-party components or pre-existing IP.
                </p>

                <h3 className="text-lg font-bold mb-3">5.2 Company-Owned IP</h3>
                <p className="mb-4">
                  We retain ownership of our methodologies, frameworks, tools, and any pre-existing intellectual property used in delivering services.
                </p>

                <h3 className="text-lg font-bold mb-3">5.3 Third-Party IP</h3>
                <p>
                  Any third-party software, libraries, or components remain subject to their respective licenses and terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship. This includes technical specifications, business strategies, and any other sensitive information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">7. Warranties and Disclaimers</h2>
                <h3 className="text-lg font-bold mb-3">7.1 Service Warranty</h3>
                <p className="mb-4">
                  We warrant that our services will be performed in a professional manner consistent with industry standards. We will correct any defects in our work at no additional charge.
                </p>

                <h3 className="text-lg font-bold mb-3">7.2 Disclaimers</h3>
                <p>
                  Except as expressly stated, our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">8. Limitation of Liability</h2>
                <p>
                  In no event shall Atomio Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use, incurred by you or any third party.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">9. Project Scope and Changes</h2>
                <p className="mb-4">
                  Project scope will be defined in individual agreements. Any changes to the agreed scope may result in additional charges and timeline adjustments.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">10. Termination</h2>
                <p className="mb-4">Either party may terminate services with written notice. Upon termination:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Client remains responsible for payment of work completed</li>
                  <li>We will provide deliverables for completed work phases</li>
                  <li>Confidentiality obligations continue</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">11. Force Majeure</h2>
                <p>
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">12. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes shall be resolved through binding arbitration or in the courts of Kenya.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">13. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">14. Severability</h2>
                <p>
                  If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">15. Contact Information</h2>
                <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
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
    </>
  );
};

export default TermsOfServicePage;

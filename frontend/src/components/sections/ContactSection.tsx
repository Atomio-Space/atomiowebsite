import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    service_interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real implementation, we would send data to Supabase
    // const { data, error } = await supabase.from('leads').insert([formData]);

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      full_name: '',
      email: '',
      company: '',
      service_interest: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="section-padding bg-[var(--bg-primary)]" id="contact">
      <div className="container-md">
        <div className="bg-[var(--bg-secondary)] rounded-[10px] p-8 md:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-lg text-[var(--text-primary)] mb-4">Get in Touch</h2>
                <p className="body-lg text-[var(--text-secondary)] mb-6">
                  Ready to transform your business with technology? Let's start a conversation about your goals.
                </p>
                <div className="space-y-6 mt-10">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-[var(--brand-primary)] bg-opacity-10 flex items-center justify-center mr-4">
                      <div className="h-5 w-5 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs">1</div>
                    </div>
                    <div>
                      <h3 className="body-lg font-semibold text-[var(--text-primary)]">Tell us about your project</h3>
                      <p className="body-md text-[var(--text-secondary)]">Share your goals, challenges, and timeline.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-[var(--brand-primary)] bg-opacity-10 flex items-center justify-center mr-4">
                      <div className="h-5 w-5 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs">2</div>
                    </div>
                    <div>
                      <h3 className="body-lg font-semibold text-[var(--text-primary)]">We'll respond within 24 hours</h3>
                      <p className="body-md text-[var(--text-secondary)]">Our team will review your needs and get back to you quickly.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-[var(--brand-primary)] bg-opacity-10 flex items-center justify-center mr-4">
                      <div className="h-5 w-5 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs">3</div>
                    </div>
                    <div>
                      <h3 className="body-lg font-semibold text-[var(--text-primary)]">Strategic consultation</h3>
                      <p className="body-md text-[var(--text-secondary)]">We'll schedule a detailed discussion to explore solutions.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted ? (
                  <div className="bg-[var(--success)] bg-opacity-10 text-[var(--success)] p-4 rounded-xl">
                    <p className="body-md font-medium">Thank you for your message! We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="full_name" className="block body-sm font-medium text-[var(--text-primary)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--text-muted)] border-opacity-30 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block body-sm font-medium text-[var(--text-primary)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--text-muted)] border-opacity-30 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block body-sm font-medium text-[var(--text-primary)] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--text-muted)] border-opacity-30 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service_interest" className="block body-sm font-medium text-[var(--text-primary)] mb-2">
                        I'm interested in
                      </label>
                      <select
                        id="service_interest"
                        name="service_interest"
                        value={formData.service_interest}
                        onChange={handleChange}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--text-muted)] border-opacity-30 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="ai-solutions">AI & LLM Solutions</option>
                        <option value="cloud-architecture">Cloud Architecture</option>
                        <option value="data-engineering">Data Engineering</option>
                        <option value="digital-transformation">Digital Transformation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block body-sm font-medium text-[var(--text-primary)] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--text-muted)] border-opacity-30 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent"
                        placeholder="Tell us about your project or inquiry"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </>
                )}

                <p className="body-xs text-[var(--text-muted)] text-center mt-4">
                  By submitting this form, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

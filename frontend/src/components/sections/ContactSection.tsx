import { motion } from 'framer-motion';

const ContactSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };



  return (
    <section className="section-padding bg-[var(--bg-primary)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="mb-16">
            {/* Let's talk Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                Let's talk
              </span>
            </motion.div>

            {/* Content Grid - Message and Contact Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column - Message with Button (7 columns) */}
              <div className="lg:col-span-7">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[42px] leading-[48px] font-normal text-[var(--text-primary)] text-left mb-8"
                  style={{ fontWeight: 400 }}
                >
                  Get in touch, and<br />let's get to work.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <button className="btn-primary">
                    Start a project
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Contact Details (4 columns, offset by 1) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-4 lg:col-start-9 space-y-8"
              >
                {/* Email */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@atomio.tech"
                    className="text-lg text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors"
                  >
                    info@atomio.tech
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+254799456976"
                    className="text-lg text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors"
                  >
                    +254 799 456 976
                  </a>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                    Social
                  </h3>
                  <a
                    href="https://linkedin.com/company/atomio-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

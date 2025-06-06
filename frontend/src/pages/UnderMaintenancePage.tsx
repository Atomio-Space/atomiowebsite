import { motion } from 'framer-motion';
import { Wrench, Clock, Linkedin, X, Github } from 'lucide-react';

const UnderMaintenancePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header-like structure with logo and social icons */}
      <header className="flex items-center justify-between py-6 px-12">
        {/* Logo - Non-clickable */}
        <div className="flex items-center">
          <h1 className="logo text-[var(--brand-primary)] text-2xl">atomio</h1>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="https://linkedin.com/company/atomio-tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--brand-primary)] transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-white transition-colors" />
          </motion.a>

          <motion.a
            href="https://twitter.com/atomio_tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--brand-primary)] transition-colors group"
            aria-label="Twitter"
          >
            <X className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-white transition-colors" />
          </motion.a>

          <motion.a
            href="https://github.com/atomio-tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--brand-primary)] transition-colors group"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-white transition-colors" />
          </motion.a>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="container-sm text-center space-y-8 max-w-2xl">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border-4 border-[var(--brand-secondary)] border-opacity-20 flex items-center justify-center"
              >
                <Wrench className="w-12 h-12 text-[var(--brand-primary)]" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center"
              >
                <Clock className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="heading-xl text-[var(--text-primary)]">
              We're Under Maintenance
            </h2>
            <p className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We're currently performing scheduled maintenance to improve your experience.
              We'll be back online shortly.
            </p>
          </motion.div>



          {/* Status Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                <div className="w-3 h-3 bg-[var(--brand-secondary)] rounded-full animate-pulse"></div>
                <span className="body-sm">Maintenance in progress</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                <Clock className="w-4 h-4" />
                <span className="body-sm">Expected completion: Soon</span>
              </div>
            </div>

            <p className="body-sm text-[var(--text-muted)]">
              For urgent matters, please contact us at{' '}
              <a
                href="mailto:hello@atomio.tech"
                className="text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] transition-colors"
              >
                hello@atomio.tech
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UnderMaintenancePage;

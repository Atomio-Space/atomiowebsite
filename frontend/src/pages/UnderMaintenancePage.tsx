import { motion } from 'framer-motion';
import { Wrench, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnderMaintenancePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header-like structure with logo and social icons */}
      <header className="flex items-center justify-between py-6 px-12">
        {/* Logo - Non-clickable */}
        <div className="flex items-center">
          <h1 className="logo text-[var(--brand-primary)] text-2xl">atomio</h1>
        </div>

        {/* Start a project button - Right Side */}
        <div className="flex items-center space-x-1">
          <Link
            to="/startproject"
            className="group relative px-4 py-2 text-[var(--text-primary)] btn-custom-text border border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all duration-300 overflow-hidden"
          >
            {/* Animated glowing border */}
            <div className="absolute inset-0 opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-primary)] bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] p-[1px]">
                <div className="w-full h-full bg-[var(--bg-primary)]"></div>
              </div>
            </div>
            <span className="relative z-10">START A PROJECT</span>
          </Link>
          <Link
            to="/startproject"
            className="group relative px-2 py-2 border border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            {/* Animated glowing border */}
            <div className="absolute inset-0 opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-primary)] bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] p-[1px]">
                <div className="w-full h-full bg-[var(--bg-primary)]"></div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand-primary)] transition-colors relative z-10" />
          </Link>
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
                href="mailto:info@atomio.tech"
                className="text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] transition-colors"
              >
                info@atomio.tech
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UnderMaintenancePage;

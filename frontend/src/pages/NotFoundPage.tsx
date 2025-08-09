import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header-like structure with logo and social icons */}
      <header className="flex items-center justify-between py-6 px-12">
        {/* Logo - Clickable */}
        <Link to="/" className="flex items-center">
          <h1 className="logo text-[var(--brand-primary)] text-2xl hover:text-[var(--brand-secondary)] transition-colors">atomio</h1>
        </Link>

        {/* Start a project button - Right Side */}
        <div className="group flex items-center space-x-1">
          <Link
            to="/startproject"
            className="relative px-4 py-3 text-white btn-custom-text bg-[var(--brand-primary)] group-hover:bg-[var(--brand-tertiary)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">START A PROJECT</span>
          </Link>
          <Link
            to="/startproject"
            className="relative px-3 py-3 bg-[var(--brand-primary)] group-hover:bg-[var(--brand-tertiary)] transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            <ArrowRight className="w-4 h-4 text-white transition-colors relative z-10" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-8" style={{ minHeight: 'calc(100vh - 120px)' }}>
      <div className="container-sm text-center space-y-8 max-w-2xl">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="relative">
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(43, 185, 204, 0.3)",
                  "0 0 40px rgba(43, 185, 204, 0.5)",
                  "0 0 20px rgba(43, 185, 204, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl md:text-9xl font-bold text-[var(--brand-primary)] leading-none"
            >
              404
            </motion.h1>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center"
            >
              <AlertTriangle className="w-8 h-8 text-white" />
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
          <h2 className="heading-lg text-[var(--text-primary)]">
            Oops! Page Not Found
          </h2>
        </motion.div>







        {/* Navigation Menu */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-[var(--text-muted)] border-opacity-20 pt-6"
        >
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Link
              to="/#hero"
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium text-sm lg:text-base"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium text-sm lg:text-base"
            >
              About
            </Link>
            <Link
              to="/#work"
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium text-sm lg:text-base"
            >
              Work
            </Link>
            <Link
              to="/#services"
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium text-sm lg:text-base"
            >
              Services
            </Link>
            <Link
              to="/#contact"
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium text-sm lg:text-base"
            >
              Contact
            </Link>
          </nav>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-6"
        >
          <p className="body-sm text-[var(--text-secondary)]">
            Still can't find what you're looking for?{' '}
            <a
              href="mailto:hello@atomio.tech"
              className="text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] transition-colors font-medium"
            >
              Contact our team
            </a>
            {' '}and we'll help you out.
          </p>
        </motion.div>
      </div>
      </main>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;

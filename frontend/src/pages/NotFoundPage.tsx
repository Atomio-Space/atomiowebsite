import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header-like structure with logo and social icons */}
      <header className="flex items-center justify-between py-6 px-12">
        {/* Logo - Clickable */}
        <Link to="/" className="flex items-center">
          <h1 className="logo text-[var(--brand-primary)] text-2xl hover:text-[var(--brand-secondary)] transition-colors">atomio</h1>
        </Link>

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
          <p className="body-lg text-[var(--text-secondary)] max-w-lg mx-auto">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </motion.div>



        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="btn-primary flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-2"
        >
          <p className="body-sm text-[var(--text-muted)] italic">
            "Not all who wander are lost, but this page definitely is."
          </p>
          <div className="flex items-center justify-center space-x-2 text-[var(--text-secondary)]">
            <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full"></div>
            <span className="body-xs">Atomio Technologies</span>
            <div className="w-2 h-2 bg-[var(--brand-secondary)] rounded-full"></div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-[var(--text-muted)] border-opacity-20 pt-6"
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
  );
};

export default NotFoundPage;

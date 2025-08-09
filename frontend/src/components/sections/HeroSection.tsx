import { motion } from 'framer-motion';

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-[var(--bg-primary)]">
      <div className="container-md text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          <motion.h1 variants={itemVariants} className="heading-xl max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto text-[var(--text-primary)] px-4">
            Software that makes your Work Easier
          </motion.h1>

          <motion.p variants={itemVariants} className="body-xl max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-[var(--text-secondary)] px-4">
            We build and support the technology that drives your business forward.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mt-6 sm:mt-8 md:mt-10 px-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerHeight = 80;
                  const targetPosition = contactSection.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary w-full sm:w-auto"
            >
              Let's Work Together
            </button>
            <button
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  const headerHeight = 80;
                  const targetPosition = workSection.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-secondary w-full sm:w-auto"
            >
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-[var(--bg-primary)]">
      <div className="container-md text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="heading-xl max-w-4xl mx-auto text-[var(--text-primary)]">
            Software that makes your Work Easier
          </motion.h1>

          <motion.p variants={itemVariants} className="body-xl max-w-2xl mx-auto text-[var(--text-secondary)]">
            We build and support the technology that drives your business forward.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerHeight = 80;
                  const targetPosition = contactSection.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
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
              className="btn-secondary"
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

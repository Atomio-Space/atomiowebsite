import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const typewriterWords = ['Enterprise', 'AI', 'Cloud', 'Data', 'Digital'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prevIndex) => (prevIndex + 1) % typewriterWords.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-[var(--bg-primary)]">
      <div className="container-md text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="heading-xl max-w-4xl mx-auto text-[var(--text-primary)]">
            Transforming <span className="text-[var(--brand-primary)]">
              {typewriterWords[typingIndex]}
            </span> Through Technology
          </motion.h1>
          
          <motion.p variants={itemVariants} className="body-xl max-w-2xl mx-auto text-[var(--text-secondary)]">
            We build cutting-edge software solutions that drive business growth and innovation for forward-thinking organizations.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="btn-primary">
              Let's Work Together
            </Link>
            <Link to="/work" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mt-16 text-[var(--text-muted)]"
          >
            <span className="body-sm">Trusted by industry leaders:</span>
            <div className="flex flex-wrap justify-center gap-8">
              <span className="font-medium">TechGlobal</span>
              <span className="font-medium">FinSecure</span>
              <span className="font-medium">HealthPlus</span>
              <span className="font-medium">ManufactureX</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

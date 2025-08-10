import { motion, AnimatePresence } from 'framer-motion';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialCardProps {
  quote: string;
  author: Author;
  isVisible: boolean;
}

const TestimonialCard = ({ quote, author, isVisible }: TestimonialCardProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={`${author.name}-${quote.slice(0, 20)}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-center max-w-3xl mx-auto"
          >
            {/* Quote */}
            <blockquote className="body-xl lg:text-2xl leading-relaxed text-[var(--text-primary)] mb-6 italic">
              "{quote}"
            </blockquote>

            {/* CTA Button */}
            <div className="mb-16">
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
                Get In Touch
              </button>
            </div>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mb-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=2BB9CC&color=fff&size=64`;
                  }}
                />
              </div>
              <h4 className="heading-xs text-[var(--text-primary)] mb-1">
                {author.name}
              </h4>
              <p className="body-sm text-[var(--text-secondary)]">
                {author.role}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCard;

import { motion } from 'framer-motion';

interface CustomerStory {
  id: string;
  brandName: string;
  logoUrl: string;
}

interface BrandCarouselProps {
  stories: CustomerStory[];
  activeStoryId: string;
  onStorySelect: (storyId: string) => void;
}

const BrandCarousel = ({ stories, activeStoryId, onStorySelect }: BrandCarouselProps) => {
  const logoVariants = {
    inactive: {
      opacity: 0.6,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }
    },
    hover: {
      opacity: 0.8,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Carousel */}
      <div className="hidden md:flex items-center justify-center h-24">
        {stories.map((story, index) => (
          <div key={story.id} className="flex items-center">
            <motion.button
              variants={logoVariants}
              initial="inactive"
              animate={activeStoryId === story.id ? "active" : "inactive"}
              whileHover="hover"
              onClick={() => onStorySelect(story.id)}
              className="flex-1 flex items-center justify-center px-8 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-opacity-50 rounded-[10px]"
              aria-label={`View ${story.brandName} testimonial`}
            >
              <img
                src={story.logoUrl}
                alt={`${story.brandName} logo`}
                className="max-h-12 max-w-32 object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback text-lg font-semibold text-[var(--text-primary)]';
                    fallback.textContent = story.brandName;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </motion.button>

            {/* Vertical Divider */}
            {index < stories.length - 1 && (
              <div className="h-8 w-px bg-[var(--bg-tertiary)] mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 py-4">
          {stories.map((story) => (
            <motion.button
              key={story.id}
              variants={logoVariants}
              initial="inactive"
              animate={activeStoryId === story.id ? "active" : "inactive"}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStorySelect(story.id)}
              className="flex-shrink-0 flex items-center justify-center w-24 h-16 bg-[var(--bg-primary)] rounded-[10px] border border-[var(--bg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-opacity-50"
              aria-label={`View ${story.brandName} testimonial`}
            >
              <img
                src={story.logoUrl}
                alt={`${story.brandName} logo`}
                className="max-h-8 max-w-20 object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback text-xs font-semibold text-[var(--text-primary)]';
                    fallback.textContent = story.brandName;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {stories.map((story) => (
            <button
              key={`dot-${story.id}`}
              onClick={() => onStorySelect(story.id)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                activeStoryId === story.id
                  ? 'bg-[var(--brand-secondary)]'
                  : 'bg-[var(--bg-tertiary)]'
              }`}
              aria-label={`Go to ${story.brandName} testimonial`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;

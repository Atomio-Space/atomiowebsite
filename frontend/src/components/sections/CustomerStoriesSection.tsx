import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCustomerStories } from '../../data/mockData';
import TestimonialCard from './CustomerStories/TestimonialCard';
import BrandCarousel from './CustomerStories/BrandCarousel';

interface CustomerStory {
  id: string;
  brandName: string;
  quote: string;
  readStoryUrl: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  logoUrl: string;
}

const CustomerStoriesSection = () => {
  const [stories, setStories] = useState<CustomerStory[]>([]);
  const [activeStoryId, setActiveStoryId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const customerStories = await getCustomerStories();
        setStories(customerStories);
        if (customerStories.length > 0) {
          setActiveStoryId(customerStories[0].id);
        }
      } catch (error) {
        console.error('Failed to load customer stories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStories();
  }, []);

  // Auto-rotate testimonials (optional)
  useEffect(() => {
    if (stories.length === 0) return;

    const interval = setInterval(() => {
      setActiveStoryId(currentId => {
        const currentIndex = stories.findIndex(story => story.id === currentId);
        const nextIndex = (currentIndex + 1) % stories.length;
        return stories[nextIndex].id;
      });
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [stories]);

  const handleStorySelect = (storyId: string) => {
    setActiveStoryId(storyId);
  };

  const activeStory = stories.find(story => story.id === activeStoryId);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (isLoading) {
    return (
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-md">
          <div className="flex justify-center items-center min-h-[600px]">
            <div className="animate-spin h-12 w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container-md">
        <div className="text-center mb-16">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-[var(--text-primary)] mb-4"
          >
            Customer Stories
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Our work speaks for itself but sometimes our clients chime in
          </motion.p>
        </div>

        {/* Main Content Container - Floating Card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="work-floating-card rounded-[10px] p-12"
        >
          <div className="flex flex-col">
            {/* Testimonial Display Area (Upper 70%) */}
            <div className="flex-grow min-h-[200px] mb-8">
              {activeStory && (
                <TestimonialCard
                  quote={activeStory.quote}
                  readStoryUrl={activeStory.readStoryUrl}
                  author={activeStory.author}
                  isVisible={true}
                />
              )}
            </div>

            {/* Brand Carousel (Lower 30%) */}
            <div className="border-t border-[var(--bg-tertiary)] pt-8">
              <BrandCarousel
                stories={stories}
                activeStoryId={activeStoryId}
                onStorySelect={handleStorySelect}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;

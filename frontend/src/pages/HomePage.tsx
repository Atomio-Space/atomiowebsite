import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CustomerStoriesSection from '../components/sections/CustomerStoriesSection';

const HomePage = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = 'Atomio - Enterprise Technology Solutions';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Atomio provides cutting-edge enterprise technology solutions including custom software development, AI & LLM solutions, cloud architecture, and digital transformation services.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Atomio provides cutting-edge enterprise technology solutions including custom software development, AI & LLM solutions, cloud architecture, and digital transformation services.';
      document.head.appendChild(newMetaDescription);
    }

    // Update OG tags
    const updateOrCreateMetaTag = (property: string, content: string) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', property);
        newTag.setAttribute('content', content);
        document.head.appendChild(newTag);
      }
    };

    updateOrCreateMetaTag('og:title', 'Atomio - Enterprise Technology Solutions');
    updateOrCreateMetaTag('og:description', 'Cutting-edge enterprise software development, AI solutions, cloud architecture, and digital transformation services.');
    updateOrCreateMetaTag('og:type', 'website');
    updateOrCreateMetaTag('og:url', 'https://atomio.tech');

    // Add canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://atomio.tech');
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.rel = 'canonical';
      newCanonicalLink.href = 'https://atomio.tech';
      document.head.appendChild(newCanonicalLink);
    }

    // Add structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Atomio',
      'url': 'https://atomio.tech',
      'logo': 'https://atomio.tech/logo.png',
      'description': 'Enterprise technology solutions including custom software development, AI & LLM solutions, cloud architecture, and digital transformation services.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Nairobi',
        'addressCountry': 'KE'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+254-799-456-976',
        'contactType': 'customer service',
        'email': 'hello@atomio.tech'
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren" }
    },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <CustomerStoriesSection />
    </motion.div>
  );
};

export default HomePage;

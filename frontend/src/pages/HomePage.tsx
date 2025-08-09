import { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
//import CustomerStoriesSection from '../components/sections/CustomerStoriesSection';
import ContactSection from '../components/sections/ContactSection';

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

  // Handle navigation from other pages to specific sections
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');

      // Wait for the page to fully render and animations to complete
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(scrollToSection);
        if (targetElement) {
          const headerHeight = 80; // Account for fixed header
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 600); // Wait for page transition animation to complete

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      {/* <CustomerStoriesSection /> */}
      <ContactSection />
    </PageTransition>
  );
};

export default HomePage;

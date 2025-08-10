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
    // Set enhanced meta tags for SEO with Kenya focus
    document.title = 'Atomio Technologies - Leading Software Development Company in Kenya | Custom Software, Web Design, AI Solutions';

    // Update meta description with Kenya-focused keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Atomio Technologies - Leading software development company in Kenya. Expert custom software development, website design, AI solutions, mobile apps, and digital transformation services across Kenya and East Africa.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Atomio Technologies - Leading software development company in Kenya. Expert custom software development, website design, AI solutions, mobile apps, and digital transformation services across Kenya and East Africa.';
      document.head.appendChild(newMetaDescription);
    }

    // Update keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Atomio, Atomio Tech, Atomio Technologies, software development Kenya, web development Kenya, AI solutions Kenya, custom software Kenya, tech company Kenya, digital transformation Kenya, mobile app development Kenya, e-commerce development Kenya, Nairobi software company');
    }

    // Update OG tags with Kenya focus
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

    updateOrCreateMetaTag('og:title', 'Atomio Technologies - Leading Software Development Company in Kenya');
    updateOrCreateMetaTag('og:description', 'Expert software development, web design, AI solutions, and digital transformation services in Kenya. Transform your business with Atomio Technologies.');
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

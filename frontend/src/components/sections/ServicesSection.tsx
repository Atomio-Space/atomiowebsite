import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Code, Database, Zap } from 'lucide-react';
import { getFeaturedServices } from '../../data/mockData';

interface Service {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  icon_name: string;
  features: string[];
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getFeaturedServices();
        setServices(data);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={32} className="text-[var(--brand-secondary)]" />;
      case 'Brain':
        return <Brain size={32} className="text-[var(--brand-secondary)]" />;
      case 'Cloud':
        return <Cloud size={32} className="text-[var(--brand-secondary)]" />;
      case 'Database':
        return <Database size={32} className="text-[var(--brand-secondary)]" />;
      case 'Zap':
        return <Zap size={32} className="text-[var(--brand-secondary)]" />;
      default:
        return <Code size={32} className="text-[var(--brand-secondary)]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-md">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-[var(--text-primary)] mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            We provide comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin h-12 w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-[var(--bg-primary)] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">{getIconComponent(service.icon_name)}</div>
                <h3 className="heading-sm mb-4 text-[var(--text-primary)]">{service.name}</h3>
                <p className="body-md text-[var(--text-secondary)] mb-6">{service.short_description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-[var(--text-secondary)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-secondary)] mr-2"></div>
                      <span className="body-md">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={`/services/${service.slug}`} className="btn-text">
                  Learn more
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="flex justify-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

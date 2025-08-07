import { motion } from 'framer-motion';

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServicesSection = () => {
  // Static services data matching your requirements
  const services: Service[] = [
    {
      id: '1',
      number: '01',
      title: 'Custom Software Development',
      description: 'Transform your business operations with bespoke software solutions designed specifically for your unique challenges. We build scalable, secure applications that automate processes, improve efficiency, and give you a competitive edge in your market.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Enterprise Web Applications',
        'Mobile App Development',
        'API & System Integration',
        'Database Architecture',
        'Legacy System Modernization',
        'Custom Business Tools'
      ]
    },
    {
      id: '2',
      number: '02',
      title: 'Website Design & Development',
      description: 'Establish a powerful digital presence with professionally designed websites that convert visitors into customers. We create responsive, fast-loading sites optimized for search engines and user experience to drive business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Responsive Web Design',
        'E-commerce Platforms',
        'Content Management Systems',
        'SEO Optimization',
        'Performance Analytics',
        'Brand Identity Integration'
      ]
    },
    {
      id: '3',
      number: '03',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate complex tasks, gain valuable insights from your data, and make smarter business decisions. Our AI solutions reduce costs while improving accuracy and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Intelligent Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Chatbots & Virtual Assistants',
        'Machine Learning Models'
      ]
    }
  ];

  const sectionVariants = {
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="services" className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="mb-16">
            {/* Our Services Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                Our Services
              </span>
            </motion.div>

            {/* Description below label - full width */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[42px] leading-[48px] font-normal text-[var(--text-primary)] text-left w-full"
              style={{ fontWeight: 400 }}
            >
              Comprehensive technology solutions designed to accelerate your business growth.
            </motion.h2>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="border-t border-[var(--border-color)] py-16 first:border-t-0"
                style={{ borderTopWidth: '1px' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  {/* Service Image */}
                  <div className="lg:col-span-4">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-[300px] h-[240px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Service Content - Expanded */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Number and Title */}
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--text-muted)] text-sm font-medium tracking-wider">
                        [{service.number}]
                      </span>
                      <h3
                        className="text-[var(--text-primary)] font-normal"
                        style={{
                          fontWeight: 400,
                          fontSize: '23px',
                          lineHeight: '28px'
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[var(--text-secondary)] font-normal"
                      style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '16px'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Features List - Single Column */}
                  <div className="lg:col-span-3">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-[var(--text-secondary)] font-normal"
                          style={{
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '17px'
                          }}
                        >
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

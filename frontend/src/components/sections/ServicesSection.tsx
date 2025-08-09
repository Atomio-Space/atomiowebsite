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
      image: '/images/services/software-service.webp',
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
      image: '/images/services/website-service.webp',
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
      image: '/images/services/ai-service.webp',
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight sm:leading-tight md:leading-tight lg:leading-[48px] font-normal text-[var(--text-primary)] text-left w-full"
              style={{ fontWeight: 400 }}
            >
              Tailored tech that powers your business growth while saving time and money.
            </motion.h2>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="border-t border-[var(--border-color)] py-8 sm:py-12 md:py-16 first:border-t-0"
                style={{ borderTopWidth: '1px' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
                  {/* Service Image */}
                  <div className="lg:col-span-4 order-2 lg:order-1">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full sm:w-[280px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[240px] object-cover mx-auto lg:mx-0"
                      />
                    </div>
                  </div>

                  {/* Service Content - Expanded */}
                  <div className="lg:col-span-5 space-y-3 sm:space-y-4 order-1 lg:order-2">
                    {/* Number and Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-[var(--text-muted)] text-xs sm:text-sm font-medium tracking-wider">
                        [{service.number}]
                      </span>
                      <h3
                        className="text-[var(--text-primary)] font-normal text-lg sm:text-xl md:text-[23px] leading-tight sm:leading-relaxed"
                        style={{
                          fontWeight: 400
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[var(--text-secondary)] font-normal text-sm sm:text-base leading-relaxed"
                      style={{
                        fontWeight: 400
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Features List - Single Column */}
                  <div className="lg:col-span-3 order-3">
                    <div className="space-y-1 sm:space-y-2 mt-4 lg:mt-0">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-[var(--text-secondary)] font-normal text-xs sm:text-sm leading-relaxed"
                          style={{
                            fontWeight: 400
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

const services = [
  {
    id: 1,
    title: 'Database Management',
    description: 'Expert design, implementation, and optimization of database systems that keep your information secure, accessible, and efficient.',
    features: ['Database architecture & design', 'Performance optimization', 'Migration & integration', 'Security implementation', 'Monitoring & maintenance'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Web & App Development',
    description: 'Custom web and mobile applications that deliver exceptional user experiences while solving real business challenges.',
    features: ['Progressive web applications', 'Cross-platform mobile apps', 'UI/UX design', 'API development', 'Performance optimization'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'AI Integration',
    description: 'Practical AI solutions that transform your data into actionable insights and automate complex processes.',
    features: ['Machine learning implementation', 'Natural language processing', 'Computer vision solutions', 'Predictive analytics', 'AI-powered automation'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Software Development',
    description: 'Bespoke software solutions that streamline operations, reduce costs, and create competitive advantages.',
    features: ['Custom software development', 'Legacy system modernization', 'Enterprise software integration', 'DevOps implementation', 'Quality assurance & testing'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'IoT & Sensor Systems',
    description: 'Connected device ecosystems that gather valuable data and enable smart decision-making across industries.',
    features: ['IoT architecture & implementation', 'Sensor network deployment', 'Real-time monitoring systems', 'Data collection & analytics', 'Remote management solutions'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'Scalable, secure, and cost-effective cloud infrastructure and migration services.',
    features: ['Cloud migration strategy', 'Multi-cloud management', 'Infrastructure as code', 'Cloud security implementation', 'Optimization & cost management'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/30 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium mb-6 text-center font-inter">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent/30 rounded-full mb-6"></div>
          <p className="text-base font-normal text-neutral max-w-3xl mx-auto text-center">
            End-to-end technology solutions tailored for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group"
            >
              {/* Colored Top Border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent"></div>

              <div className="p-8">
                {/* Icon with Background */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300 font-inter">
                  {service.title}
                </h3>

                <p className="text-neutral mb-6">
                  {service.description}
                </p>

                <div className="mb-6 border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-dark">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral">
                        <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm hover:text-accent transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Discuss Your Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

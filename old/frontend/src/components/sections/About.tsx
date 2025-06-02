const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/10 to-white z-0"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium mb-6 text-center font-inter">
            About <span className="text-primary">Atomio</span> Technologies
          </h2>
          <div className="w-20 h-1.5 bg-accent/30 rounded-full mb-6"></div>
          <p className="text-base font-normal text-neutral max-w-3xl mx-auto text-center">
            Delivering innovative technology solutions since 2020
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Image with Decorative Elements */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden shadow-card relative z-10">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-secondary/50 flex items-center justify-center relative overflow-hidden">
                  {/* Abstract Elements */}
                  <div className="absolute w-40 h-40 bg-primary/10 rounded-full top-1/4 left-1/4 blur-md"></div>
                  <div className="absolute w-32 h-32 bg-accent/10 rounded-full bottom-1/4 right-1/4 blur-md"></div>

                  {/* Team Image Placeholder */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <svg className="w-20 h-20 text-primary/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-neutral font-medium">Our Team</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e510_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <p className="text-base font-normal text-neutral mb-6">
              Atomio Technologies is a dynamic startup focused on innovation and growth. We specialize in creating cutting-edge technology solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-base font-normal text-neutral mb-8">
              Our team of experts combines technical excellence with industry knowledge to deliver solutions that are not just technically sound but also strategically aligned with your business goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Feature Cards */}
              <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dark font-inter">Client-Focused Approach</h3>
                <p className="text-neutral">We prioritize your needs and goals above all else.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dark font-inter">Technical Excellence</h3>
                <p className="text-neutral">Our solutions are built with the latest technologies and best practices.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dark font-inter">Innovative Thinking</h3>
                <p className="text-neutral">We constantly explore new ideas and approaches to solve complex problems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dark font-inter">Reliable Support</h3>
                <p className="text-neutral">We provide ongoing support and maintenance for all our solutions.</p>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-0.5">
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

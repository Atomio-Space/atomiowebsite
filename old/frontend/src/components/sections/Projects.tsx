import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Foresta',
    subtitle: 'Environmental Monitoring',
    type: 'product',
    description: 'AI-powered forest management platform using satellite imagery and IoT sensors to monitor biodiversity and detect illegal logging.',
    tags: ['AI', 'IoT', 'Satellite Data', 'Environmental'],
    image: '/images/placeholder-project.jpg'
  },
  {
    id: 2,
    name: 'Zola',
    subtitle: 'Event Management',
    type: 'product',
    description: 'Comprehensive event management solution for planning, ticketing, and attendee engagement.',
    tags: ['Web App', 'Mobile', 'Database'],
    image: '/images/placeholder-project.jpg'
  },
  {
    id: 3,
    name: 'Omniverse',
    subtitle: 'Security Intelligence',
    type: 'product',
    description: 'Natural language search for CCTV footage, enhancing security for schools, hospitals, and public spaces.',
    tags: ['AI', 'Computer Vision', 'Security'],
    image: '/images/placeholder-project.jpg'
  },
  {
    id: 4,
    name: 'Ocean Data Analysis Tool',
    subtitle: 'Marine Research',
    type: 'client',
    description: 'Visual analytics platform for oceanographic data with workflow management for marine research.',
    tags: ['Data Visualization', 'Analytics', 'Scientific'],
    image: '/images/placeholder-project.jpg'
  },
  {
    id: 5,
    name: 'Airport FID Network Integration',
    subtitle: 'Aviation Operations',
    type: 'client',
    description: 'Automated FIDS integration system reducing network downtime and improving airport operations.',
    tags: ['Network Systems', 'Automation', 'Infrastructure'],
    image: '/images/placeholder-project.jpg'
  },
  {
    id: 6,
    name: 'Construction Workforce Management',
    subtitle: 'Construction Industry',
    type: 'client',
    description: 'Digital platform streamlining workforce management for construction projects.',
    tags: ['Mobile App', 'Workforce Management', 'Database'],
    image: '/images/placeholder-project.jpg'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-24 bg-secondary relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full uppercase">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium mb-6 text-center font-inter">
            Our <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full mb-6"></div>
          <p className="text-base font-normal text-neutral max-w-3xl mx-auto text-center">
            Innovative solutions powering businesses across industries
          </p>
        </div>

        {/* Filtering */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-soft">
            <button
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-neutral hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => setFilter('all')}
            >
              View All
            </button>
            <button
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'client'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-neutral hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => setFilter('client')}
            >
              Client Projects
            </button>
            <button
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'product'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-neutral hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => setFilter('product')}
            >
              Our Products
            </button>
          </div>
        </div>

        {/* Projects Container Card - Lovable.dev Style */}
        <div className="bg-white rounded-xl shadow-card p-8 mb-16 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-dark font-inter">Featured Projects</h3>
            <div className="text-sm text-neutral">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden group cursor-pointer border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Project Thumbnail with Hover Effect */}
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-secondary/50 relative overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                    project.type === 'product'
                      ? 'from-primary/5 to-primary/10'
                      : 'from-accent/5 to-accent/10'
                  }`}>
                    {/* Project Icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      project.type === 'product'
                        ? 'bg-primary/10'
                        : 'bg-accent/10'
                    } transition-transform duration-300 group-hover:scale-110`}>
                      <svg className={`w-8 h-8 ${
                        project.type === 'product' ? 'text-primary/60' : 'text-accent/60'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Overlay with View Details Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/60 to-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      className="px-5 py-2.5 bg-white text-primary font-medium rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md hover:bg-primary hover:text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300 font-inter">
                      {project.name}
                    </h4>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      project.type === 'product'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {project.type === 'product' ? 'Product' : 'Client'}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-10">
            <button className="px-6 py-3 border border-gray-200 text-neutral font-medium rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 inline-flex items-center">
              Load More Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '../../data/mockData';

interface Project {
  id: string;
  title: string;
  slug: string;
  client_name?: string;
  project_type: string;
  category: string;
  short_description: string;
  image_url: string;
  technologies: string[];
}

type FilterType = 'all' | 'client' | 'product' | 'design';

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);

  const filterTabs = [
    { id: 'all' as FilterType, label: 'All' },
    { id: 'client' as FilterType, label: 'Client Projects' },
    { id: 'product' as FilterType, label: 'Products' },
    { id: 'design' as FilterType, label: 'Design' },
  ];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setAllProjects(data);
        setFilteredProjects(data.slice(0, 4)); // Show first 4 projects initially
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    const filterProjects = () => {
      let filtered = allProjects;

      if (activeFilter !== 'all') {
        filtered = allProjects.filter(project => project.project_type === activeFilter);
      }

      // Always show maximum 4 projects in the grid
      setFilteredProjects(filtered.slice(0, 4));
    };

    filterProjects();
  }, [activeFilter, allProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="work" className="section-padding bg-[var(--bg-primary)]">
      <div className="mx-5">
        {/* Floating Card Container */}
        <motion.div
          variants={floatingCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full work-floating-card rounded-[10px] p-12"
        >
          {/* Header with Title and Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <h2 className="heading-lg text-[var(--text-primary)] mb-6 lg:mb-0">
              Our Work
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-6 py-3 rounded-[10px] font-semibold transition-all duration-200 ${
                    activeFilter === tab.id
                      ? 'work-tab-active'
                      : 'text-[var(--text-secondary)] hover:work-tab-hover'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin h-12 w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group"
                  >
                    {/* Project Image with Button */}
                    <Link to={`/project/${project.slug}`}>
                      <div className="relative mb-6 overflow-hidden rounded-[10px] cursor-pointer">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Cool Button Effect */}
                        <div className="absolute bottom-6 left-6">
                          <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
                            <ArrowUpRight
                              size={20}
                              className="text-white transition-all duration-300 group-hover:text-black group-hover:rotate-45 group-hover:translate-x-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Project Title - Outside Image */}
                    <h3
                      className="text-[var(--text-primary)] font-normal"
                      style={{
                        fontWeight: 400,
                        fontSize: '23px',
                        lineHeight: '28px'
                      }}
                    >
                      {project.title}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Contact Button */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerHeight = 80;
                  const targetPosition = contactSection.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] font-semibold transition-colors duration-200"
            >
              Get In Touch
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

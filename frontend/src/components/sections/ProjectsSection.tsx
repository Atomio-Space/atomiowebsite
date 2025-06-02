import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    },
    hover: {
      y: -8,
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
    <section className="section-padding bg-[var(--bg-primary)]">
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="project-card rounded-[10px] overflow-hidden hover:shadow-[0_12px_30px_rgba(25,71,80,0.15)] transition-all duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-[var(--brand-secondary)] text-white rounded-full">
                          {project.category.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Client and Title */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          {project.client_name && (
                            <p className="text-[var(--text-secondary)] body-sm font-medium mb-1">
                              {project.client_name}
                            </p>
                          )}
                          <h3 className="heading-xs text-[var(--text-primary)] mb-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="body-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                        {project.short_description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-[10px]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* View All Button */}
          <div className="flex justify-end">
            <Link
              to="/work"
              className="group inline-flex items-center text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] font-semibold transition-colors duration-200"
            >
              View All Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

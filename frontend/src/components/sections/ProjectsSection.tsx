import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '../../data/projectsData';

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

type FilterType = 'all' | 'client' | 'product';

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const filterTabs = [
    { id: 'all' as FilterType, label: 'All' },
    { id: 'client' as FilterType, label: 'Projects' },
    { id: 'product' as FilterType, label: 'Products' },
  ];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setAllProjects(data);
        setFilteredProjects(data);
        setDisplayedProjects(data.slice(0, 4)); // Show first 4 projects initially
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

      setFilteredProjects(filtered);
      // Reset to show first 4 projects when filter changes
      setDisplayedProjects(filtered.slice(0, 4));
      setShowAll(false);
    };

    filterProjects();
  }, [activeFilter, allProjects]);

  const handleLoadMore = () => {
    setDisplayedProjects(filteredProjects);
    setShowAll(true);
  };

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
      <div className="mx-3 sm:mx-4 md:mx-5">
        {/* Floating Card Container */}
        <motion.div
          variants={floatingCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full work-floating-card rounded-[10px] p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Header with Title and Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12">
            <h2 className="heading-lg text-[var(--text-primary)] mb-6 lg:mb-0">
              Our Work
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] font-semibold text-sm sm:text-base transition-all duration-200 ${
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
            <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
              <div className="animate-spin h-8 w-8 sm:h-12 sm:w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8"
              >
                {displayedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group"
                  >
                    {/* Project Image with Button */}
                    <Link to={`/project/${project.slug}`}>
                      <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-[10px] cursor-pointer transition-transform duration-300 group-hover:-translate-y-[5px]">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
                        />

                        {/* Cool Button Effect */}
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
                            <ArrowUpRight
                              size={16}
                              className="sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:text-black group-hover:rotate-45 group-hover:translate-x-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Project Title - Outside Image */}
                    <h3
                      className="text-[var(--text-primary)] font-normal text-lg sm:text-xl md:text-[23px] leading-tight sm:leading-relaxed"
                      style={{
                        fontWeight: 400
                      }}
                    >
                      {project.title}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Load More Button */}
          {!showAll && filteredProjects.length > 4 && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 border border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] font-semibold transition-all duration-200 text-sm sm:text-base rounded-lg"
              >
                Load More
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

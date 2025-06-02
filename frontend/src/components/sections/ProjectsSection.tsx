import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/mockData';

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

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container-md">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-[var(--text-primary)] mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Transforming business challenges into technology success stories
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="px-3 py-1 text-xs font-medium bg-[var(--brand-secondary)] text-white rounded-full mb-2 inline-block">
                        {project.category.replace('_', ' ').toUpperCase()}
                      </span>
                      <h3 className="text-white heading-sm mt-2">{project.title}</h3>
                      {project.client_name && (
                        <p className="text-white/80 body-sm mt-1">
                          {project.client_name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="body-md text-[var(--text-secondary)] mb-4">
                    {project.short_description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link to={`/work/${project.slug}`} className="btn-text">
                    View case study
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="flex justify-center mt-12">
          <Link to="/work" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

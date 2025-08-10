import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/layout/Header';
import PageTransition from '../components/ui/PageTransition';
import ContactSection from '../components/sections/ContactSection';
import { getProjects, getProjectGalleryImages } from '../data/projectsData';

interface ProjectDetail {
  id: string;
  title: string;
  slug: string;
  client_name?: string;
  project_type: string;
  category: string;
  short_description: string;
  full_description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  image_url: string;
  gallery_images?: string[];
  technologies: string[];
  features: string[];
  project_url?: string;
  is_featured: boolean;
  is_public: boolean;
  status: string;
}

interface ProjectNavigation {
  previous?: {
    slug: string;
    title: string;
  };
  next?: {
    slug: string;
    title: string;
  };
}

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [navigation, setNavigation] = useState<ProjectNavigation>({});
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        // Load projects from projectsData
        const projects = await getProjects();
        const foundProject = projects.find(p => p.slug === slug);

        if (foundProject) {
          setProject(foundProject);

          // Load gallery images from project data (instant)
          if (slug) {
            const dynamicGalleryImages = getProjectGalleryImages(slug);
            setGalleryImages(dynamicGalleryImages);
          }

          // Set up navigation to other projects
          const currentIndex = projects.findIndex(p => p.slug === slug);
          const navigation: ProjectNavigation = {};

          if (currentIndex > 0) {
            const prevProject = projects[currentIndex - 1];
            navigation.previous = {
              slug: prevProject.slug,
              title: prevProject.title
            };
          }

          if (currentIndex < projects.length - 1) {
            const nextProject = projects[currentIndex + 1];
            navigation.next = {
              slug: nextProject.slug,
              title: nextProject.title
            };
          }

          setNavigation(navigation);
        }
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center pt-20">
          <div className="animate-spin h-12 w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
        </div>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Not Found</h1>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  const truncateTitle = (title: string, maxLength: number = 30) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  return (
    <PageTransition>
      <Header />
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

            {/* 1. Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                {project.title}
              </h1>
            </motion.div>

            {/* 2. Project Metadata - Horizontal List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1">Client</div>
                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium">{project.client_name || 'Atomio Product'}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1">Category</div>
                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium">{project.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1">Type</div>
                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium">{project.project_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1">Status</div>
                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium">{project.status.replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
              </div>
            </motion.div>

            {/* 3. Visit Tool/Website Section */}
            {project.project_url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0">
                  {/* Visit Label - Mobile: Full width, Desktop: Auto width */}
                  <div className="flex items-center sm:pr-4">
                    <span className="text-sm sm:text-base text-[var(--text-primary)] font-medium">Visit</span>
                  </div>

                  {/* URL Container - Responsive flex container */}
                  <div className="flex flex-1 items-stretch gap-[5px]">
                    {/* URL Link - Takes most space */}
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-[var(--bg-secondary)] border border-[var(--text-secondary)] rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors duration-200 min-w-0"
                    >
                      <span className="block truncate sm:hidden">
                        {project.project_url.replace(/^https?:\/\//, '').split('/')[0]}
                      </span>
                      <span className="hidden sm:block truncate">
                        {project.project_url}
                      </span>
                    </a>

                    {/* Arrow Button - Fixed width */}
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 sm:w-12 bg-[var(--bg-secondary)] border border-[var(--text-secondary)] rounded-md sm:rounded-lg text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:bg-[var(--bg-primary)] transition-all duration-200"
                    >
                      <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 sm:mb-12"
            >
              <div className="bg-[var(--bg-secondary)] rounded-[10px] p-4 sm:p-8 md:p-12 lg:p-[50px] overflow-hidden border-0">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            {/* 5. Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <div className="max-w-4xl">
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-3">Description</h3>
                  <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    {project.full_description || project.short_description}
                  </p>
                </div>

                {project.challenge && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-3">Challenge</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{project.challenge}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-3">Solution</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
                  </div>
                )}

                {project.results && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-3">Results</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{project.results}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* 6. Image Gallery - Dynamic 2 Column Grid */}
            {galleryImages && galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12 sm:mb-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="bg-[var(--bg-secondary)] rounded-[10px] p-4 sm:p-8 md:p-12 lg:p-[50px] overflow-hidden border-0">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 7. Solutions & Results - 2 Column Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12 sm:mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Left Column - Solutions */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Section */}
                <div className="mt-8 lg:mt-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Technologies</h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs sm:text-sm rounded-full border border-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>

            {/* 8. Project Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-[var(--text-secondary)] pt-6 sm:pt-8"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                {/* Previous Project */}
                <div className="flex-1">
                  {navigation.previous && (
                    <Link
                      to={`/project/${navigation.previous.slug}`}
                      className="inline-flex items-center gap-2 sm:gap-3 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors group"
                    >
                      <ChevronLeft size={16} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-xs sm:text-sm">
                        {truncateTitle(navigation.previous.title, 25)}
                      </span>
                    </Link>
                  )}
                </div>

                {/* Next Project */}
                <div className="flex-1 text-left sm:text-right">
                  {navigation.next && (
                    <Link
                      to={`/project/${navigation.next.slug}`}
                      className="inline-flex items-center gap-2 sm:gap-3 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors group"
                    >
                      <span className="text-xs sm:text-sm">
                        {truncateTitle(navigation.next.title, 25)}
                      </span>
                      <ChevronRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;

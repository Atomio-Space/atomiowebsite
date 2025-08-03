import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Globe } from 'lucide-react';
import Header from '../components/layout/Header';

interface ProjectDetail {
  id: string;
  title: string;
  slug: string;
  client_name?: string;
  project_type: string;
  category: string;
  short_description: string;
  full_description: string;
  image_url: string;
  technologies: string[];
  live_url?: string;
  screenshots?: string[];
  completion_date?: string;
  team_size?: number;
  duration?: string;
}

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronized scrolling effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!leftColumnRef.current || !rightColumnRef.current || !containerRef.current) {
            ticking = false;
            return;
          }

          const scrollTop = window.pageYOffset;
          const containerTop = containerRef.current.offsetTop;
          const containerHeight = containerRef.current.offsetHeight;
          const windowHeight = window.innerHeight;

          // Only apply effect when scrolling through the container
          if (scrollTop < containerTop - 100) {
            ticking = false;
            return;
          }

          // Calculate scroll progress (0 to 1)
          const scrollStart = containerTop - 100;
          const scrollEnd = containerTop + containerHeight - windowHeight;
          const scrollDistance = scrollEnd - scrollStart;

          if (scrollDistance <= 0) {
            ticking = false;
            return;
          }

          const scrollProgress = Math.max(0, Math.min(1, (scrollTop - scrollStart) / scrollDistance));

          // Get content elements
          const leftContent = leftColumnRef.current.querySelector('.content-wrapper') as HTMLElement;
          const rightContent = rightColumnRef.current.querySelector('.content-wrapper') as HTMLElement;

          if (leftContent && rightContent) {
            // Calculate available scroll distances
            const leftAvailableScroll = Math.max(0, leftContent.scrollHeight - leftColumnRef.current.clientHeight);
            const rightAvailableScroll = Math.max(0, rightContent.scrollHeight - rightColumnRef.current.clientHeight);

            // Apply proportional transforms
            const leftTransform = leftAvailableScroll * scrollProgress;
            const rightTransform = rightAvailableScroll * scrollProgress;

            leftContent.style.transform = `translateY(-${leftTransform}px)`;
            rightContent.style.transform = `translateY(-${rightTransform}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial calculation after DOM is ready
    const timer = setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [project]);

  useEffect(() => {
    const loadProject = async () => {
      try {
        // Mock project data - in real app, fetch from API
        const mockProject: ProjectDetail = {
          id: '1',
          title: 'E-commerce Platform',
          slug: 'e-commerce-platform',
          client_name: 'TechCorp Solutions',
          project_type: 'client',
          category: 'web_development',
          short_description: 'A comprehensive e-commerce platform built for modern businesses.',
          full_description: 'We developed a comprehensive e-commerce platform that revolutionizes online shopping experiences. The platform features advanced product management, secure payment processing, real-time inventory tracking, and intelligent recommendation systems. Built with scalability in mind, it handles thousands of concurrent users while maintaining optimal performance.',
          image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
          live_url: 'https://example-ecommerce.com',
          screenshots: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          completion_date: '2024-01-15',
          team_size: 5,
          duration: '4 months'
        };

        setProject(mockProject);
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--bg-primary)]">

        {/* Main Content */}
        <div ref={containerRef} className="pt-20">
          <div className="grid grid-cols-12 min-h-[300vh]">
            {/* Left Column - Project Details (1/3 width) */}
            <div
              ref={leftColumnRef}
              className="col-span-4 p-8 sticky top-20 h-screen overflow-hidden"
            >
              <div className="content-wrapper transition-transform duration-75 ease-out will-change-transform">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Back to Work Link */}
                  <Link
                    to="/#work"
                    className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors mb-4"
                  >
                    <ArrowLeft size={20} />
                    <span>Back to Work</span>
                  </Link>

                  {/* Project Title */}
                  <div>
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                      {project.title}
                    </h1>
                    {project.client_name && (
                      <p className="text-lg text-[var(--text-secondary)]">
                        for {project.client_name}
                      </p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      About This Project
                    </h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {project.full_description}
                    </p>
                  </div>

                  {/* Project Metadata */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                      Project Details
                    </h2>

                    <div className="space-y-3">
                      {project.completion_date && (
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-[var(--text-muted)]" />
                          <span className="text-[var(--text-secondary)]">
                            Completed: {new Date(project.completion_date).toLocaleDateString()}
                          </span>
                        </div>
                      )}

                      {project.team_size && (
                        <div className="flex items-center gap-3">
                          <User size={18} className="text-[var(--text-muted)]" />
                          <span className="text-[var(--text-secondary)]">
                            Team Size: {project.team_size} members
                          </span>
                        </div>
                      )}

                      {project.duration && (
                        <div className="flex items-center gap-3">
                          <Tag size={18} className="text-[var(--text-muted)]" />
                          <span className="text-[var(--text-secondary)]">
                            Duration: {project.duration}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-[var(--text-muted)]" />
                        <span className="text-[var(--text-secondary)]">
                          Type: {project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1)} Project
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 btn-primary w-full"
                      >
                        <ExternalLink size={16} />
                        <span>View Live Website</span>
                      </a>
                    )}
                  </div>

                  {/* Additional content to make left column scrollable */}
                  <div className="space-y-6 pt-8">
                    <div>
                      <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                        Project Highlights
                      </h2>
                      <ul className="space-y-2 text-[var(--text-secondary)]">
                        <li>• Responsive design across all devices</li>
                        <li>• Optimized for performance and SEO</li>
                        <li>• Modern UI/UX principles applied</li>
                        <li>• Scalable architecture implementation</li>
                        <li>• Cross-browser compatibility ensured</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                        Development Process
                      </h2>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        Our development process followed agile methodologies with regular client feedback loops.
                        We prioritized user experience and performance optimization throughout the development cycle.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                        Results & Impact
                      </h2>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        The project delivered significant improvements in user engagement and business metrics.
                        Performance benchmarks exceeded expectations with faster load times and improved conversion rates.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          {/* Right Column - Project Images (2/3 width) */}
          <div
            ref={rightColumnRef}
            className="col-span-8 p-8 sticky top-20 h-screen overflow-hidden"
          >
            <div className="content-wrapper transition-transform duration-75 ease-out will-change-transform">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Screenshots Gallery */}
                <div className="space-y-2.5">
                  {project.screenshots && project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="w-full"
                    >
                      <motion.img
                        src={screenshot}
                        alt={`${project.title} Screenshot ${index + 1}`}
                        className="w-full h-auto rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}

                  {/* End of gallery marker */}
                  <div className="text-center py-8">
                    <p className="text-[var(--text-muted)] text-sm">
                      End of gallery
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;

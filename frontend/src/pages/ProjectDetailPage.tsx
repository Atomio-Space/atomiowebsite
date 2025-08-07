import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Globe, Github } from 'lucide-react';
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
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
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
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Work</span>
              </Link>
            </motion.div>

            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                  {project.title}
                </h1>
                {project.client_name && (
                  <p className="text-xl text-[var(--text-secondary)] mb-6">
                    for {project.client_name}
                  </p>
                )}
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  {project.full_description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-primary px-6 py-3 hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Site</span>
                    </a>
                  )}
                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <Github size={18} />
                    <span>View Code</span>
                  </button>
                </div>
              </motion.div>

              {/* Project Meta */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Project Details</h3>
                <div className="space-y-4">
                  {project.completion_date && (
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-[var(--brand-primary)]" />
                      <div>
                        <p className="text-sm text-[var(--text-muted)]">Completed</p>
                        <p className="text-[var(--text-primary)]">{new Date(project.completion_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                      </div>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-3">
                      <Tag size={18} className="text-[var(--brand-primary)]" />
                      <div>
                        <p className="text-sm text-[var(--text-muted)]">Duration</p>
                        <p className="text-[var(--text-primary)]">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.team_size && (
                    <div className="flex items-center gap-3">
                      <User size={18} className="text-[var(--brand-primary)]" />
                      <div>
                        <p className="text-sm text-[var(--text-muted)]">Team Size</p>
                        <p className="text-[var(--text-primary)]">{project.team_size} members</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[var(--brand-primary)]" />
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Type</p>
                      <p className="text-[var(--text-primary)]">{project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1)} Project</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm rounded-full border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {project.screenshots && project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Insights */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Project Highlights</h2>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Responsive design across all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Optimized for performance and SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern UI/UX principles applied</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scalable architecture implementation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Results & Impact</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  The project delivered significant improvements in user engagement and business metrics.
                  Performance benchmarks exceeded expectations with faster load times and improved conversion rates,
                  resulting in a 40% increase in user satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Ready to start your project?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Let's create something amazing together.
              </p>
              <Link
                to="/#contact"
                className="btn-primary px-8 py-4 text-lg hover:scale-105 transition-transform"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;

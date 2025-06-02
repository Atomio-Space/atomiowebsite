import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] py-16">
      <div className="container-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company & Logo */}
          <div className="space-y-4">
            <h2 className="logo text-[var(--brand-primary)] text-2xl mb-4">atomio</h2>
            <p className="text-[var(--text-secondary)] body-md max-w-xs">
              Empowering businesses through cutting-edge technology solutions. 
              We build the technology that drives your business forward.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]" size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]" size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]" size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="heading-xs mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/custom-software" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Custom Software</Link></li>
              <li><Link to="/services/ai-solutions" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">AI & LLM Solutions</Link></li>
              <li><Link to="/services/cloud-architecture" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Cloud Architecture</Link></li>
              <li><Link to="/services/digital-transformation" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Digital Transformation</Link></li>
              <li><Link to="/services/data-engineering" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Data Engineering</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="heading-xs mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">About Us</Link></li>
              <li><Link to="/work" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Our Work</Link></li>
              <li><Link to="/blog" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Blog</Link></li>
              <li><Link to="/careers" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Careers</Link></li>
              <li><Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="heading-xs mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-[var(--brand-secondary)] mr-2 mt-1" />
                <a href="mailto:hello@atomio.com" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">
                  hello@atomio.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-[var(--brand-secondary)] mr-2 mt-1" />
                <a href="tel:+12345678900" className="text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-[var(--brand-secondary)] mr-2 mt-1" />
                <address className="text-[var(--text-secondary)] not-italic">
                  123 Tech Avenue<br />
                  San Francisco, CA 94107
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-[var(--text-muted)] border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--text-secondary)] body-sm">
            &copy; {currentYear} Atomio. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

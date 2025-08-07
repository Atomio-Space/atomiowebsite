import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

const Header = ({}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { text: 'Home', href: '#hero' },
    { text: 'About', href: '#about' },
    { text: 'Work', href: '#work' },
    { text: 'Services', href: '#services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const isHomePage = location.pathname === '/';
    
    if (isHomePage) {
      // If we're on the home page, scroll to section
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = 80; // Account for fixed header
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/${href}`);
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 header-glass ${
        isScrolled
          ? 'header-scrolled py-2'
          : 'header-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation('#hero')}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <h1 className="logo text-[var(--brand-primary)] text-2xl">atomio</h1>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium"
            >
              {item.text}
            </button>
          ))}
          <button
            onClick={() => handleNavigation('#contact')}
            className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mobile-menu-glass md:hidden p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium py-2 text-left"
                >
                  {item.text}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('#contact')}
                className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

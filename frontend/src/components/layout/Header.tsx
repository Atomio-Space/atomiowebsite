import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { text: 'Services', href: '/services' },
    { text: 'Work', href: '/work' },
    { text: 'Products', href: '/products' },
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'Careers', href: '/careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)] bg-opacity-80 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-lg flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="logo text-[var(--brand-primary)] text-2xl">atomio</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium"
            >
              {item.text}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary py-2 px-4"
          >
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
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
            className="absolute top-full left-0 right-0 bg-[var(--bg-primary)] shadow-lg md:hidden p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[var(--text-primary)] hover:text-[var(--brand-secondary)] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

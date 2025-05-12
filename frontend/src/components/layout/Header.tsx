import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'bg-white/95 backdrop-blur-sm shadow-soft py-3'
          : 'py-5'
      }`}
    >
      {/* Background gradients - only visible when not scrolled */}
      {!isScrolled && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/20 z-0"></div>
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.4)_0%,rgba(124,58,237,0.1)_50%,transparent_100%)]"></div>
        </>
      )}
      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/images/logobanner.png"
              alt="Atomio Technologies"
              className="h-10 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a
            href="#services"
            className="px-4 py-2 font-medium text-neutral hover:text-primary transition-colors rounded-md hover:bg-primary/5"
          >
            Services
          </a>
          <a
            href="#projects"
            className="px-4 py-2 font-medium text-neutral hover:text-primary transition-colors rounded-md hover:bg-primary/5"
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-4 py-2 font-medium text-neutral hover:text-primary transition-colors rounded-md hover:bg-primary/5"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="px-4 py-2 font-medium text-neutral hover:text-primary transition-colors rounded-md hover:bg-primary/5"
          >
            Blog
          </a>
          <div className="ml-4">
            <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex flex-col space-y-3">
          <a
            href="#services"
            className="font-medium py-3 px-4 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="font-medium py-3 px-4 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="font-medium py-3 px-4 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#blog"
            className="font-medium py-3 px-4 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          <div className="pt-2">
            <button
              className="w-full px-5 py-3 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

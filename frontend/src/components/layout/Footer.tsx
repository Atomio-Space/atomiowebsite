import { Moon, Sun } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Footer = ({ theme, toggleTheme }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Separator Line - Responsive width */}
      <div className="flex justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[1200px] border-t border-[var(--border-color)]" style={{ borderTopWidth: '1px' }}></div>
      </div>

      <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] pt-6 sm:pt-8 pb-6 sm:pb-8">
      <div className="container-md">

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-[var(--text-secondary)] body-sm text-center sm:text-left">
            &copy; {currentYear} Atomio. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex space-x-4 sm:space-x-6">
              <a href="/privacy" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)] transition-colors">
                Terms of Service
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

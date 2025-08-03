import { Moon, Sun } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Footer = ({ theme, toggleTheme }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Separator Line - Centered 1200px width */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] border-t border-[var(--border-color)]" style={{ borderTopWidth: '1px' }}></div>
      </div>

      <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] pt-8 pb-8">
      <div className="container-md">

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--text-secondary)] body-sm">
            &copy; {currentYear} Atomio. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6 items-center">
            <a href="/privacy" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)]">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[var(--text-secondary)] body-sm hover:text-[var(--brand-secondary)]">
              Terms of Service
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors ml-4"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

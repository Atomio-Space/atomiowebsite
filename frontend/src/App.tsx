import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ui/ScrollToTop';
import './index.css';

const tips = [
  'Start by designing your UI before diving into complex backend features.',
  "Use the '+' button to upload and incorporate custom images into your app.",
  'Your app preview will automatically refresh when new changes are ready.',
  'Connect with fellow developers in our Discord to share and learn together.',
  'Need help? Ask questions in the AI chat panel located on the right side.',
  'Show screenshots to the AI to get help with visual issues or inspiration.',
  "Share your creation with others by clicking 'Publish' to deploy your app.",
  'Subscribe to choose custom subdomains and remove watermarks from apps.',
  'Add a knowledge.md file to teach the AI about specific technologies.',
  "Track your progress and review code changes using the 'Review' button.",
  "Advanced users can edit code directly in the 'Code' tab - use with care!",
];

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load fonts
    const orbitronFont = document.createElement('link');
    orbitronFont.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap';
    orbitronFont.rel = 'stylesheet';
    document.head.appendChild(orbitronFont);

    const urbanistFont = document.createElement('link');
    urbanistFont.href = 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap';
    urbanistFont.rel = 'stylesheet';
    document.head.appendChild(urbanistFont);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    return () => {
      document.head.removeChild(orbitronFont);
      document.head.removeChild(urbanistFont);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Additional routes will be added in future iterations */}
            </Routes>
          </AnimatePresence>
        </main>
        <ScrollToTop />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App

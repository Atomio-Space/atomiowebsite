import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import UnderMaintenancePage from './pages/UnderMaintenancePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ui/ScrollToTop';
import './index.css';



export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Check if maintenance mode is enabled
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

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

  // If maintenance mode is enabled, show only the maintenance page
  if (isMaintenanceMode) {
    return <UnderMaintenancePage />;
  }

  return (
    <Router>
      <Routes>
        {/* Maintenance page - no layout */}
        <Route path="/maintenance" element={<UnderMaintenancePage />} />

        {/* Home page - with layout */}
        <Route path="/" element={
          <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-grow">
              <HomePage />
            </main>
            <ScrollToTop />
            <Footer theme={theme} toggleTheme={toggleTheme} />
          </div>
        } />

        {/* 404 page - no layout (catch all) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App

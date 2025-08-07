import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import UnderMaintenancePage from './pages/UnderMaintenancePage';
import NotFoundPage from './pages/NotFoundPage';
import StartProjectPage from './pages/StartProjectPage';
import './index.css';



export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  // Check if maintenance mode is enabled
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

  // Define valid routes
  const validRoutes = ['/', '/privacy', '/terms', '/startproject'];
  const isValidProjectRoute = location.pathname.startsWith('/project/');
  const isValidRoute = validRoutes.includes(location.pathname) || isValidProjectRoute;

  // Check if we're on a standalone page (no header/footer)
  const isStandalonePage = location.pathname === '/privacy' ||
                           location.pathname === '/terms' ||
                           !isValidRoute; // 404 pages are also standalone

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

  // If it's not a valid route, show the 404 page as standalone
  if (!isValidRoute) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {!isStandalonePage && <Header theme={theme} toggleTheme={toggleTheme} />}
      <main className={isStandalonePage ? '' : 'flex-grow'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/startproject" element={<StartProjectPage />} />
        </Routes>
      </main>
      {!isStandalonePage && <Footer theme={theme} toggleTheme={toggleTheme} />}
    </div>
  );
}

export default App

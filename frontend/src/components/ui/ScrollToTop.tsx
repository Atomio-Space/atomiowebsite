import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]); // Trigger effect when the pathname changes

  return null; // This component no longer renders anything visible
};

export default ScrollToTop;

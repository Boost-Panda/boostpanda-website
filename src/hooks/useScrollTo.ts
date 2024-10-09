import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('data-scroll-to');
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return handleScrollTo;
};
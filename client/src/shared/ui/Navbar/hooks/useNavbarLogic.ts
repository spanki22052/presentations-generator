import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useNavbarLogic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleNavClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const handleLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleSignUp = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  const handleProfileClick = useCallback(() => {
    // TODO: Navigate to profile page or show profile dropdown
    navigate('/profile');
  }, [navigate]);

  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return {
    scrolled,
    handleLogoClick,
    handleNavClick,
    handleLogin,
    handleSignUp,
    handleProfileClick,
    isActive,
  };
}


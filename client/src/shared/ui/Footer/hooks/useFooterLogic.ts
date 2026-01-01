import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useFooterLogic() {
  const navigate = useNavigate();

  const handleLinkClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const handleSocialClick = useCallback((url: string) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return {
    handleLinkClick,
    handleSocialClick,
  };
}


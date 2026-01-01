import { useCallback } from 'react';

export function useAboutPageLogic() {
  const handleContactClick = useCallback(() => {
    // TODO: Navigate to contact page or open contact modal
    console.log('Navigate to contact page');
  }, []);

  const handleLearnMore = useCallback(() => {
    // TODO: Navigate to features page or scroll to section
    console.log('Learn more clicked');
  }, []);

  return {
    handleContactClick,
    handleLearnMore,
  };
}


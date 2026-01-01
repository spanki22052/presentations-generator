import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHomePageLogic() {
  const navigate = useNavigate();

  const handleGetStarted = useCallback(() => {
    // TODO: Navigate to presentation creation page
    console.log('Navigate to presentation creation');
  }, [navigate]);

  const handleWatchDemo = useCallback(() => {
    // TODO: Open demo video modal
    console.log('Watch demo clicked');
  }, []);

  const handleViewAllFeatures = useCallback(() => {
    navigate('/features');
  }, [navigate]);

  return {
    handleGetStarted,
    handleWatchDemo,
    handleViewAllFeatures,
  };
}


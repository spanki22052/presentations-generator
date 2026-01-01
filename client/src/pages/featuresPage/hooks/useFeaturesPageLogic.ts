import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useFeaturesPageLogic() {
  const navigate = useNavigate();

  const handleGetStarted = useCallback(() => {
    // TODO: Navigate to presentation creation page
    console.log('Navigate to presentation creation');
  }, []);

  const handleWatchDemo = useCallback(() => {
    // TODO: Open demo video
    console.log('Watch demo clicked');
  }, []);

  const handleViewPricing = useCallback(() => {
    navigate('/pricing');
  }, [navigate]);

  return {
    handleGetStarted,
    handleWatchDemo,
    handleViewPricing,
  };
}

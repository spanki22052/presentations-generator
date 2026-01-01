import { useState, useCallback, useMemo } from 'react';

export function usePricingPageLogic() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = useCallback(() => {
    setIsYearly((prev) => !prev);
  }, []);

  const getPrice = useCallback(
    (monthlyPrice: number | 'custom', yearlyPrice: number | 'custom') => {
      if (isYearly) {
        return yearlyPrice;
      }
      return monthlyPrice;
    },
    [isYearly]
  );

  const getYearlyDiscount = useMemo(() => {
    return 20; // 20% discount for yearly
  }, []);

  const handleGetStarted = useCallback(() => {
    // TODO: Implement get started action
    console.log('Get started clicked');
  }, []);

  const handleGetPro = useCallback(() => {
    // TODO: Implement get pro action
    console.log('Get pro clicked');
  }, []);

  const handleContactSales = useCallback(() => {
    // TODO: Implement contact sales action
    console.log('Contact sales clicked');
  }, []);

  const formatPrice = useCallback((price: number | 'custom') => {
    if (price === 'custom') return 'Custom';
    return `$${price}`;
  }, []);

  const handleButtonClick = useCallback(
    (planId: string) => {
      if (planId === 'starter') {
        handleGetStarted();
      } else if (planId === 'pro') {
        handleGetPro();
      } else if (planId === 'enterprise') {
        handleContactSales();
      }
    },
    [handleGetStarted, handleGetPro, handleContactSales]
  );

  return {
    isYearly,
    toggleBilling,
    getPrice,
    getYearlyDiscount,
    handleGetStarted,
    handleGetPro,
    handleContactSales,
    formatPrice,
    handleButtonClick,
  };
}


export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | 'custom';
  yearlyPrice: number | 'custom';
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'outline';
}

export interface ComparisonFeature {
  id: string;
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}


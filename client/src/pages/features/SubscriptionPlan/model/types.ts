export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  isCurrent?: boolean;
}

export interface CurrentPlan {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'cancelled' | 'expired';
  nextBillingDate: string;
}

export interface PaymentMethod {
  type: 'visa' | 'mastercard' | 'amex' | 'discover';
  last4: string;
  expiryMonth: number;
  expiryYear: number;
}


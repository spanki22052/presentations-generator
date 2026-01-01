import { SubscriptionPlan, CurrentPlan, PaymentMethod } from './types';

export const AVAILABLE_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    description: 'Perfect for trying out our AI features.',
    features: [
      '5 Presentations/mo',
      'Basic AI Templates',
      'PDF Export only',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    description: 'For professionals who need power.',
    features: [
      '20 Presentations/mo',
      'Advanced AI Editing',
      'PPTX & PDF Export',
      'Priority Support',
    ],
    isPopular: true,
    isCurrent: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: 99,
    description: 'Best for small teams and agencies.',
    features: [
      'Unlimited Presentations',
      'Collaborative Workspace',
      'Custom Branding',
      'API Access',
    ],
  },
] as const;

export const CURRENT_PLAN: CurrentPlan = {
  id: 'pro',
  name: 'Pro Plan',
  price: 29.0,
  status: 'active',
  nextBillingDate: 'October 24, 2023',
} as const;

export const PAYMENT_METHOD: PaymentMethod = {
  type: 'visa',
  last4: '4242',
  expiryMonth: 12,
  expiryYear: 2025,
} as const;


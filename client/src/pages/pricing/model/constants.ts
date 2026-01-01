import { PricingPlan, ComparisonFeature, FAQ } from './types';

export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const ANIMATION_EASING = {
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeIn: [0.7, 0, 0.84, 0] as [number, number, number, number],
  easeInOut: [0.87, 0, 0.13, 1] as [number, number, number, number],
} as const;

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For individuals just getting started.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '5 AI presentations/mo',
      'Basic templates',
      'PDF export',
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outline',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For professionals who need power.',
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      'Unlimited AI presentations',
      'Premium templates',
      'PPTX export',
      'Custom fonts',
      'Brand kit',
    ],
    isPopular: true,
    buttonText: 'Get Pro',
    buttonVariant: 'primary',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For teams and organizations.',
    monthlyPrice: 'custom',
    yearlyPrice: 'custom',
    features: [
      'SSO Integration',
      'Team collaboration',
      'Dedicated support manager',
      'API access',
      'Custom security review',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
  },
] as const;

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    id: 'presentations',
    name: 'Presentations / mo',
    starter: '5',
    pro: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    id: 'export',
    name: 'Export Formats',
    starter: 'PDF',
    pro: 'PDF, PPTX',
    enterprise: 'All Formats',
  },
  {
    id: 'aiModel',
    name: 'AI Model Access',
    starter: 'Standard',
    pro: 'Advanced',
    enterprise: 'Latest (GPT-4)',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    id: 'support',
    name: 'Support',
    starter: 'Community',
    pro: 'Priority Email',
    enterprise: '24/7 Dedicated',
  },
] as const;

export const FAQ_ITEMS: FAQ[] = [
  {
    id: 'cancel',
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. Your access will remain active until the end of the current billing period.',
  },
  {
    id: 'student',
    question: 'Do you offer student discounts?',
    answer: 'Absolutely! We offer a 50% discount for students and educators with a valid .edu email address.',
  },
  {
    id: 'data',
    question: 'What happens to my data?',
    answer: 'Your data is yours. We encrypt everything at rest and in transit. You can export or delete your data at any time.',
  },
  {
    id: 'switch',
    question: 'Can I switch plans?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Prorated charges will apply automatically.',
  },
] as const;


export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const ANIMATION_EASING = {
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.7, 0, 0.84, 0],
  easeInOut: [0.87, 0, 0.13, 1],
} as const;

export const VALUES = [
  {
    id: 'innovation',
    icon: '💡',
    title: 'Innovation',
  },
  {
    id: 'excellence',
    icon: '⭐',
    title: 'Excellence',
  },
  {
    id: 'collaboration',
    icon: '🤝',
    title: 'Collaboration',
  },
  {
    id: 'integrity',
    icon: '🎯',
    title: 'Integrity',
  },
] as const;

export const STATS = [
  {
    id: 'users',
    value: '50K+',
    label: 'Active Users',
  },
  {
    id: 'presentations',
    value: '1M+',
    label: 'Presentations Created',
  },
  {
    id: 'countries',
    value: '120+',
    label: 'Countries',
  },
  {
    id: 'satisfaction',
    value: '98%',
    label: 'Customer Satisfaction',
  },
] as const;


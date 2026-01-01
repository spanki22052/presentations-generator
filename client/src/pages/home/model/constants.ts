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

export const TRUSTED_COMPANIES = [
  { name: 'ACME Corp', icon: '▲' },
  { name: 'HexaTech', icon: '⬡' },
  { name: 'Visionary', icon: '#' },
  { name: 'Infinite', icon: '∞' },
  { name: 'GreenEnergy', icon: '🌿' },
] as const;

export const FEATURES = [
  {
    id: 'text-to-slide',
    title: 'Text-to-Slide',
    description: 'Just type your topic or paste a document, and watch as our AI generates a full presentation structure instantly.',
    icon: '⚡',
    image: '💻',
  },
  {
    id: 'smart-layouts',
    title: 'Smart Layouts',
    description: 'Our engine automatically arranges your content, images, and charts into beautiful, professional layouts.',
    icon: '📐',
    image: '📊',
  },
  {
    id: 'instant-branding',
    title: 'Instant Branding',
    description: 'Upload your logo and color palette once, and apply your brand identity to every slide with a single click.',
    icon: '🎨',
    image: '🖥️',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    quote: 'AutoDeck completely changed how I prepare for quarterly reviews. What used to take me 4 hours now takes 15 minutes.',
    avatar: '👩',
    rating: 5,
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote: 'The design consistency is incredible. I don\'t have a design bone in my body, but my slides look like they were made by an agency.',
    avatar: '👨',
    rating: 5,
  },
  {
    id: 'elena',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    quote: 'The best feature is the instant export. I can move from the AI draft to PowerPoint in seconds for final tweaks.',
    avatar: '👩',
    rating: 5,
  },
] as const;


export const FOOTER_LINKS = {
  product: [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Templates', path: '/templates' },
    { label: 'Integrations', path: '/integrations' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
    { label: 'Security', path: '/security' },
  ],
} as const;

export const SOCIAL_LINKS = [
  { name: 'Website', icon: '🌐', url: '#' },
  { name: 'RSS', icon: '📡', url: '#' },
  { name: 'Email', icon: '✉️', url: '#' },
] as const;


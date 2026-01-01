import { Feature, ZigZagFeature, Testimonial } from './types';

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

export const ZIGZAG_FEATURES: ZigZagFeature[] = [
  {
    id: 'promptToDeck',
    title: 'From prompt to deck in seconds',
    description:
      'Simply type your topic or paste a document, and watch as our AI builds a comprehensive narrative structure, selects relevant imagery, and applies professional layouts instantly.',
    icon: 'bolt',
    iconColor: 'purple',
    bulletPoints: [
      'Generates 10+ slides at once',
      'Auto-summarizes long documents',
      'Suggests relevant imagery',
    ],
    position: 'left',
  },
  {
    id: 'smartAlignment',
    title: 'Never fix alignment again',
    description:
      'Our smart layout engine ensures your content always looks professional. Add an image, resize a text box, or change a chart—the slide adapts automatically to keep everything aligned to the grid.',
    icon: 'grid_view',
    iconColor: 'blue',
    linkText: 'Learn about layouts',
    linkUrl: '#',
    position: 'right',
  },
  {
    id: 'brandConsistency',
    title: 'Your brand, applied instantly',
    description:
      'Upload your fonts, colors, and logo once. SlideAI automatically enforces your brand guidelines on every slide created by your team. No more rogue fonts or off-brand colors.',
    icon: 'palette',
    iconColor: 'pink',
    position: 'left',
  },
] as const;

export const FEATURES: Feature[] = [
  {
    id: 'realTimeCollaboration',
    title: 'Real-time Collaboration',
    description:
      'Work together with your team on the same deck. See changes instantly as they happen.',
    icon: 'group_add',
    iconColor: 'green',
  },
  {
    id: 'analytics',
    title: 'Built-in Analytics',
    description:
      'Track who views your deck and which slides they spend the most time on.',
    icon: 'bar_chart',
    iconColor: 'orange',
  },
  {
    id: 'aiImageGeneration',
    title: 'AI Image Generation',
    description:
      "Don't have a photo? Generate unique, royalty-free visuals directly within the editor.",
    icon: 'image',
    iconColor: 'purple',
  },
  {
    id: 'universalExport',
    title: 'Universal Export',
    description:
      'Export to PDF, PowerPoint, or host it as a live web link. Your choice.',
    icon: 'picture_as_pdf',
    iconColor: 'red',
  },
  {
    id: 'versionHistory',
    title: 'Version History',
    description:
      'Made a mistake? Jump back to any previous version of your deck with one click.',
    icon: 'history',
    iconColor: 'teal',
  },
  {
    id: 'autoTranslation',
    title: 'Auto-Translation',
    description:
      'Translate your entire presentation into 30+ languages instantly while preserving formatting.',
    icon: 'translate',
    iconColor: 'indigo',
  },
] as const;

export const TESTIMONIAL: Testimonial = {
  id: 'sarahJenkins',
  quote:
    'SlideAI has completely changed how our agency pitches. We save about 10 hours per week on deck formatting alone.',
  author: 'Sarah Jenkins',
  role: 'Creative Director, Spark Agency',
} as const;

export const ICON_MAP: Record<string, string> = {
  bolt: '⚡',
  grid_view: '⊞',
  palette: '🎨',
  group_add: '👥',
  bar_chart: '📊',
  image: '🖼️',
  picture_as_pdf: '📄',
  history: '🕐',
  translate: '🌐',
  check_circle: '✓',
  arrow_forward: '→',
  format_quote: '"',
  play_circle: '▶',
} as const;

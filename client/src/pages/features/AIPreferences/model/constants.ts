export const ICON_MAP: Record<string, string> = {
  translate: "🌐",
  image: "🖼️",
  science: "🔬",
  short_text: "📝",
  notes: "📄",
  subject: "📚",
};

export const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'academic', label: 'Academic' },
  { value: 'creative', label: 'Creative' },
] as const;

export const LANGUAGE_OPTIONS = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English (US)' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
] as const;

export const CONTENT_DEPTH_OPTIONS = [
  {
    value: 'brief',
    icon: 'short_text',
    title: 'Brief',
    description: 'Key points and lists.',
  },
  {
    value: 'standard',
    icon: 'notes',
    title: 'Standard',
    description: 'Balance of text and visuals.',
  },
  {
    value: 'detailed',
    icon: 'subject',
    title: 'Detailed',
    description: 'Detailed explanations.',
  },
] as const;

export const DEFAULT_PREFERENCES = {
  tone: 'professional' as const,
  creativityLevel: 60,
  contentDepth: 'brief' as const,
  defaultLanguage: 'ru',
  autoImageSelection: true,
};


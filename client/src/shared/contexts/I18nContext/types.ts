export type Language = 'en' | 'ru';

export interface I18nContextValue {
  language: Language;
  changeLanguage: (lang: Language) => Promise<void>;
}

export interface I18nProviderProps {
  children: React.ReactNode;
}


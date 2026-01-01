export type ThemeMode = 'day' | 'night';

export interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}


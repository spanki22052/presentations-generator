import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { I18nContextValue, I18nProviderProps, Language } from "./types";
import { i18n } from "@/shared/lib/i18n";
import { detectLanguageByLocation } from "@/shared/lib/i18n/geolocation";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("i18nextLng") as Language | null;
    if (savedLanguage === "en" || savedLanguage === "ru") {
      return savedLanguage;
    }
    // If no saved language, default to Russian (will be updated by location detection)
    return "ru";
  });

  // Detect language by location on mount (only if no saved preference)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng") as Language | null;

    // Only detect by location if there's no saved preference
    if (!savedLanguage || (savedLanguage !== "en" && savedLanguage !== "ru")) {
      detectLanguageByLocation()
        .then((detectedLang) => {
          if (detectedLang) {
            setLanguageState(detectedLang);
            i18n.changeLanguage(detectedLang);
            localStorage.setItem("i18nextLng", detectedLang);
          }
        })
        .catch((error) => {
          // Silently fail - will use default Russian
          console.warn("Location-based language detection failed:", error);
        });
    }
  }, []);

  const changeLanguage = useCallback(async (lang: Language) => {
    await i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem("i18nextLng", lang);
  }, []);

  // Sync i18n library when language changes
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const value = useMemo(
    () => ({ language, changeLanguage }),
    [language, changeLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}

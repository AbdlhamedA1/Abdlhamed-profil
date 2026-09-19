import { useState, useEffect, createContext, useContext } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

const LANG_STORAGE_KEY = 'abdlhamed_portfolio_language';

export type TranslationSection = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (section: TranslationSection, key: string, fallback?: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguageProvider() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
      if (stored === 'en' || stored === 'ar') {
        return stored;
      }
    }
    // Default requirement: English on first visit
    return 'en';
  });

  const isRtl = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    
    // Update body font family based on language
    if (isRtl) {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
    
    localStorage.setItem(LANG_STORAGE_KEY, language);
  }, [language, isRtl]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const t = (section: TranslationSection, key: string, fallback: string = ''): string => {
    const dict = translations[language];
    if (dict && (dict as any)[section] && (dict as any)[section][key]) {
      return (dict as any)[section][key];
    }
    // Fallback to English if translation is missing
    const enDict = translations.en;
    if (enDict && (enDict as any)[section] && (enDict as any)[section][key]) {
      return (enDict as any)[section][key];
    }
    return fallback || key;
  };

  return { language, isRtl, setLanguage, toggleLanguage, t };
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

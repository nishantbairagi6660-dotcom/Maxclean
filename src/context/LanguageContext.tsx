import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('maxclean_lang');
      if (saved === 'el' || saved === 'en') return saved;
      // Check browser language
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('el')) {
        return 'el';
      }
    } catch (e) {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('maxclean_lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: (key: string) => key, // We will provide translated data structures directly
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

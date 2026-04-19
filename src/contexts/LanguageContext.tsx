import React, { useContext, useState, useEffect } from 'react';
import { Language, translations, isRTL } from '@/lib/translations';
import { LanguageContext, LanguageContextType } from './language-context-instance';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('bf_language') as Language | null;
      if (saved && ['it', 'en', 'ar'].includes(saved)) return saved;
    } catch {
      /* noop */
    }
    return 'it';
  });

  useEffect(() => {
    const rtl = isRTL(language);
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('bf_language', language);
    } catch {
      /* noop */
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as typeof translations.it,
    isRTL: isRTL(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

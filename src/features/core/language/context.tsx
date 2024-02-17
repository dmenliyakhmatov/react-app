import { createContext, ReactNode, useState } from 'react';

export type LanguageContextSetting = { language: string; setLanguage: (language: string) => void };

export const LanguageContext = createContext<LanguageContextSetting | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

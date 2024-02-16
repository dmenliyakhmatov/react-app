import { createContext, ReactNode, useContext, useState } from 'react';

export type LanguageContextSetting = { language: string; setLanguage: (language: string) => void };

export const LanguageContext = createContext<LanguageContextSetting | null>(null);

export const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageSelector must be used within a LanguageProvider');
  }

  const { language, setLanguage } = languageContext;

  return (
    <div>
      <p>Current Language: {language}</p>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="Russian">Russian</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('English');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

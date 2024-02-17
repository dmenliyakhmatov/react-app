import { useContext } from 'react';
import { LANGUAGES, LanguageContext } from './index';

export const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageSelector must be used within a LanguageProvider');
  }

  const { language, setLanguage } = languageContext;

  return (
    <div>
      <p>Current Language: {language}</p>
      <select value={language} onChange={e => setLanguage(e.target.value as LANGUAGES)}>
        <option value={LANGUAGES.RU}>Русский</option>
        <option value={LANGUAGES.EN}>English</option>
      </select>
    </div>
  );
};

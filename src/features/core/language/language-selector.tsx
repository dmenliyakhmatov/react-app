import { useContext } from 'react';
import { LanguageContext } from './index';

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
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

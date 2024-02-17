import { createContext, ReactNode, useState } from 'react';

export enum LANGUAGES {
  RU = 'ru',
  EN = 'en',
}

const i18n_keys = {
  [LANGUAGES.RU]: {
    popular: 'Популярное',
    fresh: 'Свежее',
    vacancies: 'Вакансии',
    ratings: 'Рейтинги',
    subscriptions: 'Подписки',
  },
  [LANGUAGES.EN]: {
    popular: 'Popular',
    fresh: 'Fresh',
    vacancies: 'Vacancies',
    ratings: 'Ratings',
    subscriptions: 'Subscriptions',
  },
};

export type LanguageContextSetting = {
  language: LANGUAGES;
  setLanguage: (language: LANGUAGES) => void;
  keys: (typeof i18n_keys)[keyof typeof i18n_keys];
};

export const LanguageContext = createContext<LanguageContextSetting | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(LANGUAGES.RU);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, keys: i18n_keys[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';
import skillsEn from './locales/skills_en.json';
import skillsPt from './locales/skills_pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...en, ...skillsEn } },
      pt: { translation: { ...pt, ...skillsPt } }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;

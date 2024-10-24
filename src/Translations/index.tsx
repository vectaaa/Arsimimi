import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from '../Translations/resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: 'en',
  compatibilityJSON: 'v3',
  returnNull: false,
});

export default i18n;

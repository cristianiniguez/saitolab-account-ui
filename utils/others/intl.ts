import { DEFAULT_LOCALE } from 'constants/';

export const getTranslationsProps = async (locale = DEFAULT_LOCALE) => {
  return {
    messages: (await import(`i18n/${locale}.json`)).default,
  };
};

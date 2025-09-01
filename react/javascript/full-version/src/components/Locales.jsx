import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

// project-imports
import useConfig from 'hooks/useConfig';

// Import all locale files directly
import enMessages from 'utils/locales/en.json';
import frMessages from 'utils/locales/fr.json';
import roMessages from 'utils/locales/ro.json';
import zhMessages from 'utils/locales/zh.json';
import arMessages from 'utils/locales/ar.json';

// Import login-specific translations
import enLoginMessages from 'utils/locales/login-translations.json';
import arLoginMessages from 'utils/locales/login-translations-ar.json';

// Create a messages object with all locales, merging login translations
const allMessages = {
  en: { ...enMessages, ...enLoginMessages },
  fr: frMessages,
  ro: roMessages,
  zh: zhMessages,
  ar: { ...arMessages, ...arLoginMessages }
};

// load locales files
const loadLocaleData = (locale) => {
  const messages = allMessages[locale] || allMessages.en;
  return Promise.resolve({ default: messages });
};

// ==============================|| LOCALIZATION ||============================== //

export default function Locales({ children }) {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(i18n).then((d) => {
      setMessages(d.default);
    });
  }, [i18n]);



  return (
    <>
      {messages && (
        <IntlProvider key={i18n} locale={i18n} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
}

Locales.propTypes = { children: PropTypes.node };

import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import portuguese from './pt'
import english from './en'
import { initReactI18next } from 'react-i18next'

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        // debug: true,
        supportedLngs: ['pt', 'en'],
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            useSuspense: true
        },
        resources: {
            pt: {
                translation: portuguese,
            },
            en: {
                translation: english
            },
        }
    })

export default i18n;
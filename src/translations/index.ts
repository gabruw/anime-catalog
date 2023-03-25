/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { LocalStorage } from "@app/constants/LocalStorage";
import { translations } from "@app/translations/languages";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "enUS",
        compatibilityJSON: "v3",
        resources: translations,
        debug: !import.meta.env.PROD,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            lookupLocalStorage: LocalStorage.LANGUAGE,
        },
        fallbackLng: {
            "en*": ["enUS"],
            "pt*": ["ptBR"],
            default: ["enUS"],
        },
    });

export { i18n };

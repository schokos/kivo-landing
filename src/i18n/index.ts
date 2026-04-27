import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { de } from "./locales/de";
import { en } from "./locales/en";

export const SUPPORTED_LNGS = ["de", "en"] as const;
export type SupportedLng = (typeof SUPPORTED_LNGS)[number];
const STORAGE_KEY = "kivo-lang";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LNGS as unknown as string[],
    nonExplicitSupportedLngs: true, // de-DE -> de
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", (lng) => {
  const base = (lng?.split("-")[0] || "en") as string;
  document.documentElement.lang = base;
});
document.documentElement.lang = (i18n.language?.split("-")[0]) || "en";

export default i18n;

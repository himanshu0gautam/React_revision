import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: localStorage.getItem("lang") || "hi", // default Hindi (aapke users ke liye)
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Language badalne par save karo + <html lang> update karo
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
});

export default i18n;
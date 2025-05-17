import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "/public/locales/en.json";
import ar from "/public/locales/ar.json";

const savedLanguage = localStorage.getItem("language") || "ar"; // 👈 العربي ديفولت

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLanguage,
  fallbackLng: "ar", // 👈 fallback عربي كمان
  interpolation: { escapeValue: false },
});

// Set the language and direction on page load
const setLanguageDirection = (language) => {
  if (language === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
};

setLanguageDirection(savedLanguage); // Apply the language and direction on initial load

i18n.on("languageChanged", (lng) => {
  setLanguageDirection(lng); // Update the direction when the language changes
  localStorage.setItem("language", lng); // Save the selected language to localStorage
});



export default i18n;

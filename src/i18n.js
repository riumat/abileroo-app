import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import transEN from "./locales/us/translation.json"
import transIT from "./locales/it/translation.json"

const resources = {
  us: {
    translation: transEN
  },
  it: {
    translation: transIT
  }
}

i18n.use(initReactI18next).init({
  fallbackLng: 'us',
  debug: true,
  resources,
  
})

export default i18n;
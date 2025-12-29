import { createI18n } from "vue-i18n";
import tm from "./locales/tm.json";
import datetimeFormats from "./rules/datetime";
import numberFormats from "./rules/numbers";
import pluralRules from "./rules/pluralization";

export default createI18n<any>({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { tm },
  pluralRules: pluralRules as any,
  numberFormats: numberFormats as any,
  datetimeFormats: datetimeFormats as any,
} as any);

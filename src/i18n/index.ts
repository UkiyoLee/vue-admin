import { createI18n } from "vue-i18n";
import en from "./config/en";
import zh from "./config/zh";

export default createI18n({
  locale: "en",
  messages: {
    en, zh
  }
});
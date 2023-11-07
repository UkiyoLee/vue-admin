import { createI18n } from "vue-i18n";
// import elementEnLocale from "element-plus/lib/locale/lang/en";
// import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";
import en from "./config/en";
import zh from "./config/zh";

export default createI18n({
  locale: "en",
  legacy: false,
  messages: {
    en, zh
  }
});
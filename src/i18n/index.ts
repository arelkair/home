import en from "./en.json";
import es from "./es.json";
import ko from "./ko.json";
import zh from "./zh.json";

export const locales = ["en", "es", "ko", "zh"] as const;
export type Locale = (typeof locales)[number];
export type Key = keyof typeof en;

export const localeNames: Record<Locale, string> = { en: "English", es: "Español", ko: "한국어", zh: "中文" };

const dictionaries: Record<Locale, Partial<Record<string, string>>> = { en, es, ko, zh };

export function translator(lang: Locale) {
  return (value: string) => dictionaries[lang][value] ?? dictionaries.en[value] ?? value;
}

export function localize(lang: Locale, path = "") {
  return (lang === "en" ? "" : `/${lang}`) + path || "/";
}

export function localePaths() {
  return locales.map((lang) => ({ params: { lang: lang === "en" ? undefined : lang }, props: { lang } }));
}

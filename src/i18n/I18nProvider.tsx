import * as React from "react";
import type { Language, TranslationKey } from "./translations";
import { translations } from "./translations";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "lang";

function isLanguage(v: unknown): v is Language {
  return v === "az" || v === "en" || v === "ru";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored)) return stored;
    } catch {
      // ignore
    }
    return "az";
  });

  const setLang = React.useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = React.useCallback(
    (key: TranslationKey) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang],
  );

  const value = React.useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


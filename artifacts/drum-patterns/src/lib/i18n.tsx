import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "de";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem("pl-lang");
      return v === "de" ? "de" : "en";
    } catch {
      return "en";
    }
  });

  function set(l: Lang) {
    setLang(l);
    try { localStorage.setItem("pl-lang", l); } catch { /* noop */ }
  }

  return <LangContext.Provider value={{ lang, setLang: set }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextType {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (en: string, de: string): string => lang === "de" ? de : en;
}

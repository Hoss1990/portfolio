"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/data/content";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");

  const toggle = useCallback(() => {
    setLang((l) => (l === "fr" ? "en" : "fr"));
  }, []);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

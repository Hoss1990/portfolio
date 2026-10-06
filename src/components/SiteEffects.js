"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

export default function SiteEffects() {
  const { lang } = useLang();
  const [showTop, setShowTop] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 700);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const bar = document.querySelector(".scroll-progress");
      if (bar) bar.style.transform = `scaleX(${progress})`;
    };
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") setCommandOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCommandOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-slate2/60 pointer-events-none">
        <div className="scroll-progress h-full origin-left scale-x-0 bg-accent" />
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-top fixed bottom-5 right-5 z-40 w-11 h-11 border border-line bg-surface/90 backdrop-blur text-ink transition-all duration-300 focusable ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
        aria-label={lang === "fr" ? "Retour en haut" : "Back to top"}
      >
        ↑
      </button>

      <button
        type="button"
        onClick={() => setCommandOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 border border-line bg-surface/80 backdrop-blur px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-ink hover:border-signal transition-colors focusable"
        aria-label={lang === "fr" ? "Ouvrir les raccourcis" : "Open shortcuts"}
      >
        <span>⌘ K</span>
        <span className="text-line">·</span>
        <span>{lang === "fr" ? "navigation" : "navigate"}</span>
      </button>

      {commandOpen && (
        <div
          className="fixed inset-0 z-[70] bg-surface/75 backdrop-blur-sm p-4 sm:p-6 flex items-start sm:items-center justify-center"
          onMouseDown={(event) => event.target === event.currentTarget && setCommandOpen(false)}
        >
          <div className="w-full max-w-md border border-line bg-canvas shadow-lift overflow-hidden" role="dialog" aria-modal="true">
            <div className="px-5 py-4 border-b border-line flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{lang === "fr" ? "Navigation rapide" : "Quick navigation"}</span>
              <button onClick={() => setCommandOpen(false)} className="text-muted hover:text-ink focusable" aria-label="Close">Esc</button>
            </div>
            <div className="p-2">
              {[
                ["#work", lang === "fr" ? "Projets" : "Work"],
                ["#about", lang === "fr" ? "À propos" : "About"],
                ["#skills", lang === "fr" ? "Stack" : "Stack"],
                ["#contact", lang === "fr" ? "Contact" : "Contact"],
              ].map(([id, label], index) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface group focusable"
                >
                  <span className="font-display text-ink group-hover:text-accent transition-colors">{label}</span>
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                </button>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-line font-mono text-[10px] text-muted">
              {lang === "fr" ? "Astuce : Ctrl/⌘ K pour ouvrir ce menu." : "Tip: Ctrl/⌘ K to open this menu."}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

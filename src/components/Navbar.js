"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

const NAV_IDS = ["work", "about", "skills", "contact"];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;

    const update = () => {
      setScrolled(window.scrollY > 24);

      // Use the section nearest a fixed visual probe instead of
      // IntersectionObserver ratios. This avoids the navbar getting stuck
      // on "About" when several sections overlap the observer root margins.
      const probe = window.scrollY + 118;
      let current = "#work";

      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= probe) current = `#${id}`;
      }

      if (window.scrollY < 360) current = "#work";
      setActive(current);
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const goTo = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className={`site-nav fixed left-0 right-0 top-0 z-50 ${scrolled ? "site-nav-scrolled" : ""}`}>
      <nav className="mx-auto flex h-[76px] max-w-shell items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={() => setActive("")} className="nav-brand focusable" aria-label="Houssem Janfaoui — accueil">
          <span className="nav-brand-mark" aria-hidden="true">
            <img src="/brand/logo-mark.svg" alt="" />
          </span>
          <span className="nav-brand-copy">Houssem<span>Janfaoui</span></span>
        </a>

        <div className="nav-links hidden md:flex" role="navigation" aria-label="Navigation principale">
          {links.map((l, i) => {
            const selected = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => goTo(l.href)}
                className={`nav-link ${selected ? "is-active" : ""} focusable`}
                aria-current={selected ? "page" : undefined}
              >
                {selected && <span className="nav-link-pill" aria-hidden="true" />}
                <span className="nav-link-index">0{i + 1}</span>
                <span className="relative z-10">{l.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <button onClick={toggle} className="nav-lang focusable" aria-label="Changer de langue">
            <span className={lang === "fr" ? "is-current" : ""}>FR</span>
            <i>/</i>
            <span className={lang === "en" ? "is-current" : ""}>EN</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`nav-menu md:hidden focusable ${open ? "is-open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile md:hidden ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mx-4 mb-3 rounded-2xl border border-line bg-white/95 p-2 shadow-lg backdrop-blur-xl">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => goTo(l.href)}
              className={`nav-mobile-link ${active === l.href ? "is-active" : ""} focusable`}
              tabIndex={open ? 0 : -1}
            >
              <span className="nav-link-index">0{i + 1}</span>
              <span>{l.label}</span>
              <span className="ml-auto">{active === l.href ? "●" : "↗"}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

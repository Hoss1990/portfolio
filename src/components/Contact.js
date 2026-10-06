"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "hossjanfaoui.dev@gmail.com";

const icons = { GitHub: ( <svg viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.1 9.1 0 0 1 12 7.01c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.93-2.33 4.8-4.56 5.06.36.32.68.95.68 1.91v2.82c0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" fill="currentColor" /> </svg> ), LinkedIn: ( <svg viewBox="0 0 24 24" aria-hidden="true"> <path d="M5.2 3.5a2.05 2.05 0 1 1 0 4.1 2.05 2.05 0 0 1 0-4.1ZM3.45 9h3.5v11.5h-3.5V9Zm5.7 0h3.36v1.57h.05c.47-.9 1.61-1.85 3.32-1.85 3.55 0 4.2 2.34 4.2 5.38v6.4h-3.5v-5.67c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.77h-3.5V9Z" fill="currentColor" /> </svg> ), Instagram: ( <svg viewBox="0 0 24 24" aria-hidden="true"> <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /> <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /> <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /> </svg> ), Upwork: ( <svg viewBox="0 0 24 24" aria-hidden="true"> <path d="M18.7 7.05c-1.67 0-3.1.85-4.08 2.13-.47-1.42-.71-2.73-.79-3.66h-3.2c.1 1.54.4 3.25.92 4.94-.69 1.08-1.6 1.75-2.64 1.75-1.47 0-2.4-1.18-2.4-2.86 0-1.69.99-3.05 2.66-3.05.37 0 .78.08 1.18.24V3.5c-.4-.1-.83-.15-1.3-.15-3.52 0-5.78 2.76-5.78 6 0 3.43 2.1 5.77 5.56 5.77 1.85 0 3.34-.84 4.47-2.19.93 1.53 2.25 2.47 4.07 2.47 3.12 0 5.22-2.37 5.22-4.25 0-2.35-1.53-4.1-3.89-4.1Zm-.98 5.17c-.77 0-1.42-.52-1.98-1.42.73-1.17 1.62-1.72 2.55-1.72 1.02 0 1.54.61 1.54 1.49 0 .79-.76 1.65-2.11 1.65Z" fill="currentColor" /> </svg> ), };

export default function Contact() {
  const { t } = useLang();
  const root = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    const items = root.current?.querySelectorAll(".contact-anim");
    if (!items?.length) return;
    gsap.fromTo(items, { y: 28, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
    });
  }, { scope: root });

  const socials = [
    { name: "GitHub", href: "https://github.com/Hoss1990" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/houssem-janfaoui-a0b687103/" },
    { name: "Instagram", href: "https://www.instagram.com/houssem.janfaouii" },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section ref={root} id="contact" className="relative overflow-hidden border-t border-slate2 py-24 sm:py-32">
      <div className="contact-orb contact-orb-a" aria-hidden="true" />
      <div className="contact-orb contact-orb-b" aria-hidden="true" />
      <div className="absolute inset-0 contact-grid opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-shell px-6">
        <div className="contact-panel contact-anim">
          <div className="contact-panel-glow" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="contact-kicker">{t.contact.eyebrow}</span>
                <span className="contact-status"><i /> Disponible pour de nouveaux projets</span>
              </div>

              <h2 className="font-display text-5xl font-bold tracking-tight text-paper sm:text-6xl lg:text-7xl text-balance">
                {t.contact.title}<span className="text-signal">.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-steel sm:text-xl">
                {t.contact.desc} Construisons quelque chose de rapide, clair et vraiment utile.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}`}
                  className="contact-primary focusable group inline-flex items-center justify-center gap-3"
                >
                  {t.contact.cta}
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
                <button type="button" onClick={copyEmail} className="contact-secondary focusable">
                  <span>{copied ? "Email copié ✓" : EMAIL}</span>
                  {!copied && <span>Copier</span>}
                </button>
              </div>
            </div>

            <div className="contact-side">
              <div className="contact-side-top">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">{t.contact.or}</span>
                <span className="contact-ping" aria-hidden="true"><i /></span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social focusable group"
                  >
                    <span className="contact-social-icon">{icons[s.name]}</span>
                    <span className="flex-1">
                      <span className="block font-semibold text-paper">{s.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-steel">Open profile</span>
                    </span>
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-4 border-t border-slate2 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-mono text-[11px] text-steel">© {new Date().getFullYear()} Houssem Janfaoui. {t.footer.rights}</span>
          <span className="font-mono text-[11px] text-steel">{t.footer.built}</span>
        </footer>
      </div>
    </section>
  );
}

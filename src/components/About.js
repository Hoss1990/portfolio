"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t, lang } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      const els = root.current?.querySelectorAll(".about-anim");

      if (els?.length) {
        gsap.fromTo(
          els,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            scrollTrigger: {
              trigger: root.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    },
    { scope: root, dependencies: [lang] }
  );

  return (
    <section
      ref={root}
      id="about"
      className="section-shell relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div className="absolute inset-0 blueprint opacity-20" />

      <div className="relative mx-auto grid max-w-shell items-center gap-12 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">

        {/* IMAGE */}
        <div className="about-anim">
          <div className="about-avatar relative mx-auto aspect-square max-w-sm overflow-hidden rounded-[28px] border border-line bg-slate-100 shadow-xl">

            {/* vraie image */}
            <img
              src="/profile.jpeg"
              alt="Hoss — développeur web"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
            />

            {/* léger overlay premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" />

            {/* badge haut */}
            <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-slate-700 shadow-lg backdrop-blur">
              TN · REMOTE
            </div>

            {/* badge disponibilité */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-emerald-700 shadow-lg backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {lang === "fr" ? "En ligne" : "Online"}
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div>
          <p className="about-anim section-kicker">
            {t.about.eyebrow}
          </p>

          <h2 className="about-anim mt-5 font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl">
            {t.about.title}
          </h2>

          <p className="about-anim mt-6 max-w-2xl leading-7 text-steel">
            {t.about.p1}
          </p>

          <p className="about-anim mt-4 max-w-2xl leading-7 text-steel">
            {t.about.p2}
          </p>

          <div className="about-anim mt-7 flex flex-wrap gap-2">
            {[t.about.tag1, t.about.tag2, t.about.tag3].map((x, i) => (
              <span
                key={x}
                className={`about-chip about-chip-${i + 1}`}
              >
                {x}
              </span>
            ))}
          </div>

          <div className="about-anim mt-8 grid gap-3 sm:grid-cols-3">
            <Mini
              label="01"
              value={lang === "fr" ? "UI soignée" : "Polished UI"}
            />

            <Mini
              label="02"
              value={lang === "fr" ? "Performance" : "Performance"}
            />

            <Mini
              label="03"
              value={lang === "fr" ? "Code maintenable" : "Maintainable code"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ label, value }) {
  return (
    <div className="soft-card rounded-2xl p-4">
      <span className="font-mono text-[9px] text-signal">
        {label}
      </span>

      <p className="mt-2 font-display text-sm font-semibold text-paper">
        {value}
      </p>
    </div>
  );
}
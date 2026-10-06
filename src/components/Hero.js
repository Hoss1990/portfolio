"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLang } from "@/lib/lang";

export default function Hero() {
  const { t, lang } = useLang();
  const root = useRef(null);

  useGSAP(() => {
    const items = root.current?.querySelectorAll(".hero-anim");
    if (items?.length) gsap.fromTo(items, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .08, ease: "power3.out" });
  }, { scope: root, dependencies: [lang] });

  return (
    <section ref={root} id="top" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      <div className="absolute inset-0 blueprint opacity-45" aria-hidden="true" />
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_390px]">
          <div>
            <p className="hero-anim section-kicker">{t.hero.tag}</p>
            <h1 className="hero-anim mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[.9] tracking-[-.055em] text-paper">
              {t.hero.name}<span className="text-signal">.</span>
            </h1>
            <p className="hero-anim mt-7 max-w-3xl font-display text-2xl font-medium leading-tight text-steel sm:text-3xl lg:text-4xl">
              {t.hero.role} <span className="text-signal">{t.hero.spec}</span>
            </p>
            <p className="hero-anim mt-7 max-w-2xl text-base leading-7 text-steel sm:text-lg">{t.hero.desc}</p>
            <div className="hero-anim mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="focusable inline-flex items-center justify-center gap-3 rounded-xl bg-signal px-6 py-3.5 font-mono text-xs font-semibold text-white shadow-lg shadow-signal/15 transition hover:-translate-y-0.5 hover:bg-[#3544be]">{t.hero.cta}<span>→</span></a>
              <a href="#contact" className="focusable inline-flex items-center justify-center rounded-xl border border-line bg-surface px-6 py-3.5 font-mono text-xs font-semibold text-paper transition hover:-translate-y-0.5 hover:border-signal/40">{t.hero.cta2}</a>
            </div>
            <div className="hero-anim mt-9 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-mute">
              {['React','Next.js','Supabase','Tailwind CSS','GSAP'].map(x => <span key={x} className="rounded-full border border-line bg-surface px-3 py-1.5">{x}</span>)}
            </div>
          </div>

          <div className="hero-anim hero-panel relative overflow-hidden rounded-[26px] p-5 sm:p-6">
            <div className="absolute right-5 top-5 rounded-full border border-line bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-mute">{lang === 'fr' ? 'Disponible' : 'Available'}</div>
            <div className="mb-8 mt-12 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-signal/10 font-display font-bold text-signal">HJ</span>
              <div><p className="font-display font-semibold text-paper">Full-stack web</p><p className="font-mono text-[10px] uppercase tracking-widest text-mute">React · Next.js · Node</p></div>
            </div>
            <div className="space-y-3 font-mono text-[11px]">
              <Line k="frontend" v="React · Next.js" /><Line k="backend" v="Node · Express" /><Line k="database" v="Supabase · MongoDB" /><Line k="motion" v="GSAP" />
            </div>
            <div className="mt-7 rounded-2xl border border-line bg-canvas p-4"><div className="mb-3 flex justify-between text-[10px] text-mute"><span>product_quality</span><span className="text-signal">96%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate2"><div className="h-full w-[96%] rounded-full bg-signal" /></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Line({k,v}) { return <div className="flex justify-between gap-4"><span className="text-mute">{k}:</span><span className="text-paper">{v}</span></div>; }

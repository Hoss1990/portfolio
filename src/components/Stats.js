"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
gsap.registerPlugin(ScrollTrigger);

export default function Stats(){
 const {t}=useLang(); const root=useRef(null);
 useGSAP(()=>{const items=root.current?.querySelectorAll('.stat-item'); if(items?.length) gsap.fromTo(items,{y:18,opacity:0},{y:0,opacity:1,duration:.6,stagger:.1,scrollTrigger:{trigger:root.current,start:'top 88%',once:true}});}, {scope:root});
 return <section ref={root} className="relative border-y border-line bg-white/55 py-4"><div className="mx-auto grid max-w-shell grid-cols-1 gap-3 px-5 sm:grid-cols-3 sm:px-6">
   <Stat number="08" label={t.stats.projects} accent />
   <Stat number="09" label={t.stats.stack} />
   <Stat number="24/7" label={t.stats.mode} extra={t.stats.modeVal} />
 </div></section>
}
function Stat({number,label,accent,extra}){return <div className="stat-item stat-card flex items-center justify-between gap-4"><div><div className={`font-display text-3xl font-bold tracking-tight ${accent?'text-signal':'text-paper'}`}>{number}</div><p className="mt-1 font-mono text-[9px] uppercase tracking-[.18em] text-mute">{label}</p></div>{extra&&<span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-700">● {extra}</span>}</div>}

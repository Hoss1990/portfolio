"use client";

import { LangProvider } from "@/lib/lang";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </LangProvider>
  );
}

"use client";

import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";

gsap.registerPlugin(ScrollTrigger);

export const projects = [
  {
    id: 8,
    title: "Soumi.tn",
    titleEn: "Soumi.tn",
    stack: "Next.js",
    year: "2026",
    descFr:
      "Plateforme web moderne développée avec Next.js, Supabase et Tailwind CSS, avec une interface rapide, responsive et pensée pour une expérience produit fluide.",
    descEn:
      "Modern web platform built with Next.js, Supabase and Tailwind CSS, with a fast responsive interface focused on a smooth product experience.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://soumi.tn/",
    image: "/projects/soumi.png",
  },
  {
    id: 1,
    title: "Ebuy Tunisie",
    titleEn: "Ebuy Tunisia",
    stack: "React",
    year: "2024",
    descFr:
      "Boutique e-commerce complète — électroménager, mobilier et high-tech. Catalogue dynamique, panier et back-office, optimisée pour le référencement.",
    descEn:
      "Full e-commerce store — appliances, furniture and high-tech. Dynamic catalog, cart and back-office, SEO-optimized.",
    tags: ["React", "Firebase", "CSS"],
    link: "https://ebuytn.com/",
  },
  {
    id: 2,
    title: "Elements Group",
    titleEn: "Elements Group",
    stack: "React",
    year: "2026",
    descFr:
      "Site vitrine haut de gamme pour un expert du sur-mesure luxe (cuisines, dressings) en Tunisie et à l'international. Design soigné et animations.",
    descEn:
      "High-end showcase site for a luxury custom-design expert (kitchens, dressings) in Tunisia and abroad. Refined design and animations.",
    tags: ["React", "CSS", "GSAP"],
    link: "https://elementsgroup.pro/",
  },
  {
    id: 3,
    title: "Verdora",
    titleEn: "Verdora",
    stack: "Next.js",
    year: "2025",
    descFr:
      "Boutique botanique luxe trilingue (FR/EN/AR) : catalogue de plantes rares, quiz de recommandation et navigation par origine. Interface gallery premium.",
    descEn:
      "Luxury trilingual (FR/EN/AR) botanical store: rare plant catalog, recommendation quiz and origin-based browsing. Premium gallery interface.",
    tags: ["Next.js", "i18n", "Tailwind"],
    link: "https://www.verdora.tn",
  },
 
  {
    id: 4,
    title: "Sanitek",
    titleEn: "Sanitek",
    stack: "React",
    year: "2024",
    descFr:
      "Site corporate pour un importateur sanitaire et robinetterie (depuis 2011). Présentation de gammes, marques partenaires et secteurs desservis.",
    descEn:
      "Corporate site for a sanitary and faucet importer (since 2011). Product ranges, partner brands and served sectors.",
    tags: ["React", "Firebase", "CSS"],
    link: "https://www.sanitek.tn/",
  },
   {
    id: 5,
    title: "Moozak's French Tacos",
    titleEn: "Moozak's French Tacos",
    stack: "Next.js",
    year: "2023",
    descFr:
      "Site d'une chaîne de restaurants à Londres : menu, multi-localisations, commande en ligne et CMS Sanity. Animations audacieuses et identité forte.",
    descEn:
      "Site for a London restaurant chain: menu, multi-location, online ordering and Sanity CMS. Bold animations and strong identity.",
    tags: ["Next.js", "Sanity", "GSAP", "Tailwind"],
    link: "https://www.moozak.co.uk",
  },
  {
    id: 6,
    title: "Ellouze Alu",
    titleEn: "Ellouze Alu",
    stack: "React",
    year: "2025",
    descFr:
      "Site vitrine pour un menuisier aluminium (17+ ans d'expérience) : fenêtres, portes, murs-rideaux et garde-corps sur mesure. Galerie d'ouvrages.",
    descEn:
      "Showcase site for an aluminum craftsman (17+ years): custom windows, doors, curtain walls and railings. Project gallery.",
    tags: ["React", "Firebase", "CSS"],
    link: "https://ellouzealu.tn/",
  },
];

const THEMES = [
    {
    bg: "bg-yellow-100",
    number: "bg-yellow-200",
    text: "text-yellow-700",
  },
    {
    bg: "bg-orange-100",
    number: "bg-orange-200",
    text: "text-orange-700",
  },
  {
    bg: "bg-blue-100",
    number: "bg-blue-200",
    text: "text-blue-700",
  },
    {
    bg: "bg-emerald-100",
    number: "bg-emerald-200",
    text: "text-emerald-700",
  },



  {
    bg: "bg-blue-100",
    number: "bg-blue-200",
    text: "text-blue-700",
  },
    {
    bg: "bg-pink-100",
    number: "bg-pink-200",
    text: "text-pink-700",
  },
  {
    bg: "bg-blue-300",
    number: "bg-blue-200",
    text: "text-blue-700",
  },

];

export default function Work() {
  const { t, lang } = useLang();

  const [activeFilter, setActiveFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const root = useRef(null);

  const isEnglish = lang === "en";

  const filters = ["Tous", "Next.js", "React"];

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const title = isEnglish ? project.titleEn : project.title;
      const description = isEnglish ? project.descEn : project.descFr;

      const matchesFilter =
        activeFilter === "Tous" ||
        project.stack.toLowerCase() === activeFilter.toLowerCase();

      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        project.stack.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search, isEnglish]);

  // Animation des cartes projets à l'entrée dans le viewport.
  // Elle se rejoue proprement lorsqu'un filtre ou une recherche modifie la liste.
  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll(".work-project-card");
      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        {
          y: 34,
          opacity: 0,
          scale: 0.985,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: root.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    {
      scope: root,
      dependencies: [activeFilter, search, isEnglish],
      revertOnUpdate: true,
    }
  );

  return (
    <section ref={root} id="work" className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-7 sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-steel sm:text-xs">
              02 — Work
            </span>

            <span className="h-px w-7 bg-line sm:w-12" />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl">
                {t?.work?.title || "Projets"}
                <span className="text-signal">.</span>
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-5 text-steel sm:mt-3 sm:text-base sm:leading-7">
                {t?.work?.desc ||
                  "Quelques projets sélectionnés, avec une attention particulière au design et aux détails."}
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isEnglish ? "Search..." : "Rechercher..."}
                className="h-9 w-full rounded-lg border border-line bg-surface px-3 font-mono text-[10px] text-paper outline-none transition focus:border-signal/50 sm:h-10 sm:rounded-xl sm:px-4 sm:text-xs"
              />
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mb-5 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none sm:mb-8 sm:gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "shrink-0 rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider transition-all sm:px-4 sm:py-2 sm:text-[10px]",
                  active
                    ? "border-signal bg-signal text-white"
                    : "border-line bg-surface text-steel hover:border-signal/40 hover:text-paper",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PROJECTS */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => {
            const theme = THEMES[index % THEMES.length];

            const title = isEnglish ? project.titleEn : project.title;
            const description = isEnglish
              ? project.descEn
              : project.descFr;

            return (
              <article
                key={project.id}
                className="work-project-card group flex min-w-0 flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-lift sm:rounded-2xl"
              >
                {/* PASTEL HEADER */}
                <div
                  className={`relative flex h-14 items-end justify-between overflow-hidden ${theme.bg} p-2 sm:h-20 sm:p-3 lg:h-24 lg:p-4`}
                >
                  {/* DECORATIONS */}
                  <div
                    className={`absolute -right-4 -top-4 h-12 w-12 rounded-full ${theme.number} opacity-60 sm:h-20 sm:w-20`}
                  />

                  <div
                    className={`absolute -bottom-5 left-1/3 h-10 w-10 rounded-full ${theme.number} opacity-40 sm:h-16 sm:w-16`}
                  />

                  {/* NUMBER */}
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-md ${theme.number} ${theme.text} font-mono text-[7px] font-bold sm:h-8 sm:w-8 sm:rounded-lg sm:text-[9px]`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* YEAR */}
                  <span
                    className={`relative z-10 font-mono text-[7px] font-semibold uppercase tracking-wider ${theme.text} sm:text-[9px]`}
                  >
                    {project.year}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-2 sm:p-3 lg:p-4">
                  {/* TITLE */}
                  <div className="flex min-w-0 items-center justify-between gap-1">
                    <h3 className="min-w-0 truncate font-display text-xs font-bold tracking-tight text-paper transition-colors group-hover:text-signal sm:text-base lg:text-lg">
                      {title}
                    </h3>

                    <span className="shrink-0 text-[10px] text-steel transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:text-sm">
                      ↗
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-1.5 line-clamp-2 text-[8px] leading-3.5 text-steel sm:mt-2 sm:text-[10px] sm:leading-4 lg:text-xs lg:leading-5">
                    {description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="max-w-full truncate rounded-md border border-line bg-canvas px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wide text-mute sm:px-2 sm:py-1 sm:text-[7px] lg:text-[8px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="mt-auto flex items-center justify-between gap-1 border-t border-line pt-2 sm:mt-3 sm:pt-2.5">
                    <span className="truncate rounded-full border border-line bg-canvas px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wide text-steel sm:px-2 sm:py-1 sm:text-[7px]">
                      {project.stack}
                    </span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 font-mono text-[7px] uppercase tracking-wider text-steel transition-colors hover:text-signal sm:text-[8px]"
                    >
                      {isEnglish ? "Visit" : "Voir"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-dashed border-line px-4 py-10 text-center sm:rounded-2xl sm:px-5 sm:py-12">
            <p className="font-display text-base font-semibold text-paper sm:text-lg">
              {isEnglish ? "No project found." : "Aucun projet trouvé."}
            </p>

            <p className="mt-2 text-xs text-steel sm:text-sm">
              {isEnglish
                ? "Try another search or category."
                : "Essaie une autre recherche ou catégorie."}
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveFilter("Tous");
              }}
              className="mt-4 rounded-full border border-line px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-steel transition hover:border-signal hover:text-paper sm:mt-5 sm:px-4 sm:py-2 sm:text-[10px]"
            >
              {isEnglish ? "Reset" : "Réinitialiser"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
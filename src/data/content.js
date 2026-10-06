// Toutes les données du site. Modifie ici tes projets et textes.

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
    title: "Moozak's French Tacos",
    titleEn: "Moozak's French Tacos",
    stack: "Next.js",
    year: "2023",
    descFr:
      "Site d'une chaîne de restaurants à Londres : menu, multi-localisations, commande en ligne et CMS Sanity. Animations audacieuses et identité forte.",
    descEn:
      "Site for a London restaurant chain: menu, multi-location, online ordering and Sanity CMS. Bold animations and strong identity.",
    tags: ["Next.js", "Sanity", "GSAP","Tailwind"],
    link: "https://www.moozak.co.uk",
  },
  {
    id: 5,
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

export const skills = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "Node.js", level: "Avancé" },
  { name: "Express", level: "Avancé" },
  { name: "MongoDB", level: "Avancé" },
  { name: "Supabase", level: "Avancé" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "GSAP", level: "Avancé" },
  { name: "JavaScript (ES6+)", level: "Expert" },
];

export const translations = {
  fr: {
    nav: { work: "Projets", about: "À propos", skills: "Stack", contact: "Contact" },
    hero: {
      tag: "Développeur web freelance — Tunisie & remote",
      name: "Houssem Janfaoui",
      role: "Développeur web",
      spec: "spécialisé React & Next.js",
      desc:
        "Je conçois des interfaces rapides et des back-ends fiables. Du frontend React au backend Node, je livre des produits web complets de la maquette à la mise en ligne.",
      cta: "Voir mes projets",
      cta2: "Me contacter",
    },
    stats: {
      projects: "Projets livrés",
      stack: "Technologies clés",
      mode: "Remote & sur place",
      modeVal: "Disponible",
    },
    work: {
      eyebrow: "Sélection",
      title: "Projets réalisés",
      desc: "Huit produits web construits avec React ou Next.js, du frontend au backend.",
      view: "Voir le projet",
      built: "Construit avec",
    },
    about: {
      eyebrow: "À propos",
      title: "Le développeur derrière le code",
      p1:
        "Je suis Houssem Janfaoui, développeur web freelance basé en Tunisie. Je travaille aussi bien en local qu'en remote avec des clients d'autres pays.",
      p2:
        "Ma spécialité : React et Next.js côté frontend, Express, Node.js, MongoDB et Supabase côté backend. J'aime les produits propres, performants et faciles à maintenir.",
      tag1: "Freelance",
      tag2: "Tunisie",
      tag3: "Remote international",
    },
    skills: {
      eyebrow: "Stack",
      title: "Technologies",
      desc: "Les outils que j'utilise au quotidien pour livrer du frontend au backend.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      desc: "Un projet en tête ? Écris-moi, je réponds vite.",
      cta: "Envoyer un email",
      or: "ou retrouve-moi sur",
    },
    footer: { rights: "Tous droits réservés.", built: "Conçu et développé par Houssem Janfaoui." },
  },
  en: {
    nav: { work: "Work", about: "About", skills: "Stack", contact: "Contact" },
    hero: {
      tag: "Freelance web developer — Tunisia & remote",
      name: "Houssem Janfaoui",
      role: "Web developer",
      spec: "specialized in React & Next.js",
      desc:
        "I build fast interfaces and reliable back-ends. From React frontend to Node backend, I deliver complete web products from mockup to launch.",
      cta: "See my work",
      cta2: "Get in touch",
    },
    stats: {
      projects: "Projects delivered",
      stack: "Core technologies",
      mode: "Remote & on-site",
      modeVal: "Available",
    },
    work: {
      eyebrow: "Selected",
      title: "Featured work",
      desc: "Eight web products built with React or Next.js, frontend to backend.",
      view: "View project",
      built: "Built with",
    },
    about: {
      eyebrow: "About",
      title: "The developer behind the code",
      p1:
        "I'm Houssem Janfaoui, a freelance web developer based in Tunisia. I work both locally and remotely with clients from other countries.",
      p2:
        "My specialty: React and Next.js on the frontend, Express, Node.js, MongoDB and Supabase on the backend. I care about clean, fast, maintainable products.",
      tag1: "Freelance",
      tag2: "Tunisia",
      tag3: "International remote",
    },
    skills: {
      eyebrow: "Stack",
      title: "Technologies",
      desc: "The tools I use every day to ship from frontend to backend.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      desc: "Got a project in mind? Drop me a line, I reply fast.",
      cta: "Send an email",
      or: "or find me on",
    },
    footer: { rights: "All rights reserved.", built: "Designed and built by Houssem Janfaoui." },
  },
};

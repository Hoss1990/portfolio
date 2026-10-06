import "./globals.css";

export const metadata = {
  title: {
    default: "Houssem Janfaoui — Développeur web React & Next.js",
    template: "%s — Houssem Janfaoui",
  },
  description:
    "Portfolio de Houssem Janfaoui, développeur web freelance spécialisé React, Next.js, Node.js, Express, Supabase et MongoDB. Tunisie & remote.",
  keywords: [
    "Houssem Janfaoui",
    "développeur web",
    "développeur React",
    "développeur Next.js",
    "React",
    "Next.js",
    "Node.js",
    "Supabase",
    "MongoDB",
    "freelance Tunisie",
    "web developer Tunisia",
  ],
  authors: [{ name: "Houssem Janfaoui" }],
  creator: "Houssem Janfaoui",
  publisher: "Houssem Janfaoui",
  applicationName: "Houssem Janfaoui Portfolio",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_TN",
    alternateLocale: ["en_US"],
    title: "Houssem Janfaoui — Développeur web React & Next.js",
    description:
      "Portfolio de Houssem Janfaoui — interfaces rapides, produits web modernes et développement full-stack.",
    siteName: "Houssem Janfaoui",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Houssem Janfaoui — Web Developer React & Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houssem Janfaoui — Développeur web React & Next.js",
    description:
      "Portfolio de Houssem Janfaoui — React, Next.js, Node.js et produits web modernes.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Houssem Janfaoui",
  jobTitle: "Web Developer",
  description:
    "Développeur web freelance spécialisé React et Next.js, basé en Tunisie et disponible en remote.",
  email: "hossjanfaoui.dev@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "GSAP",
  ],
  sameAs: [
    "https://github.com/Hoss1990",
    "https://www.linkedin.com/in/houssem-janfaoui-a0b687103/",
    "https://www.instagram.com/houssem.janfaouii",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

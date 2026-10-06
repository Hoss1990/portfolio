# Portfolio — Houssem Janfaoui

Portfolio Next.js (JSX, sans TypeScript) + Tailwind CSS + GSAP. Bilingue FR/EN.

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & déploiement Netlify Drop
```bash
npm run build      # génère le dossier /out (export statique)
```
Glisse ensuite le dossier **`out/`** sur https://app.netlify.com/drop — le site fonctionne immédiatement, y compris sur mobile.

## Modifier le contenu
Tout est centralisé dans **`src/data/content.js`** :
- `projects` : tes 7 projets (titre FR/EN, stack React ou Next.js, description, tags, lien)
- `skills` : la liste des technologies
- `translations` : tous les textes FR et EN

## Personnaliser
- Email de contact : `src/components/Contact.js` (mailto:contact@houssem.dev)
- Liens réseaux (GitHub/LinkedIn/Upwork) : `src/components/Contact.js`
- Couleurs : `tailwind.config.js` (signal=jaune, ember=orange, ink/midnight=bleu foncé)

## Stack
- Next.js 14 (App Router, JSX)
- Tailwind CSS
- GSAP + ScrollTrigger (animations au chargement et au scroll)
- Export statique (output: "export") — hébergeable partout

# Artistic Portfolio — Next.js 15

Landing page sobre pour site artistique.

## Lancer le projet

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Stack
- Next.js 15 (App Router + Turbopack)
- TypeScript
- CSS Modules (pas de Tailwind)
- Google Fonts via `next/font` : Cormorant Garamond + Inter

## Structure

```
├── app/
│   ├── layout.tsx          # Fonts + métadonnées SEO
│   ├── page.tsx            # Assemblage des sections
│   └── globals.css         # Variables CSS (palette, typo) + reset
├── components/
│   ├── Hero.tsx/.module.css         # Hero plein écran + 6 miniatures éparsées
│   ├── SectionBlock.tsx/.module.css # Sections titre/paragraphe
│   ├── Cards.tsx/.module.css        # Grille de projets avec liens externes
│   └── Footer.tsx/.module.css       # Pied de page
├── postcss.config.mjs      # autoprefixer uniquement (pas de Tailwind)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Miniatures Hero

Les 6 images placeholder viennent de `picsum.photos` (résultats stables par seed).
Pour les remplacer par tes vraies photos, édite le tableau `thumbnails` dans `components/Hero.tsx` :

```ts
const thumbnails = [
  { id: 1, src: '/images/photo-1.jpg', alt: 'Description', cls: styles.img1 },
  // ...
]
```

Dépose tes images dans `/public/images/` et utilise des chemins relatifs.

## Palette

| Token       | Valeur    | Rôle              |
|-------------|-----------|-------------------|
| `--bg`      | #F9F8F6   | Blanc chaud       |
| `--ink`     | #1A1A1A   | Texte principal   |
| `--muted`   | #6B6A68   | Texte secondaire  |
| `--accent`  | #2D4A3E   | Vert forêt        |
| `--card-bg` | #EFEFEC   | Fond des cards    |
| `--border`  | #D4D2CC   | Filets/bordures   |

Toutes les couleurs sont dans `app/globals.css` — un seul endroit à modifier.

# Honora Cloud Academy

Site de la plateforme d'apprentissage **Honora Cloud Academy** — mentorat d'élite
Cloud & DevOps, bilingue (FR / EN), 100% pratique. On commence par AWS.

> Deviens l'ingénieur Cloud que tu veux être.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Polices : Sora (titres) + Inter (corps) via `next/font`
- Photos HD dans `public/images/`

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Lint |

## Structure

```
app/
  layout.tsx          Polices, métadonnées, langue (fr)
  globals.css         Tokens de design (@theme), animations
  page.tsx            Composition de la landing page
  components/
    Header.tsx        Navigation sticky + menu mobile (sans logo)
    Hero.tsx          Titre principal + grande photo HD
    FeatureRow.tsx    Section réutilisable photo / texte alternée
    HighlightBand.tsx Grande section navy « Apprends depuis chez toi »
    Formats.tsx       1-on-1, Classe de Prod, Bilingue (photos)
    Process.tsx       Programme des 8 semaines (photo + étapes)
    Testimonials.tsx  Parcours / témoignages
    FinalCta.tsx      Appel à l'action final
    Footer.tsx        Pied de page
    Reveal.tsx        Révélation au scroll (client)
public/images/        Photos HD (img1..img12.jpg)
```

## Design

Voir [`DESIGN.md`](./DESIGN.md) (palette, typographie) et [`PRODUCT.md`](./PRODUCT.md)
(positionnement, ton, différenciateurs).

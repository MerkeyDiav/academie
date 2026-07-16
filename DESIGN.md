# DESIGN.md — Honora Cloud Academy

Register: **brand** (landing / marketing, design is the product).
Direction : inspiration coaching.com. Blanc qui respire, navy profond, accent indigo,
beaucoup de vraies photos HD, sections alternées photo / texte. Pas de logo (à venir),
pas de pastilles rondes avec « · », pas de points « . » en accent (trop « IA »).

## Palette

| Rôle | Token | Hex |
| --- | --- | --- |
| Fond principal | `paper` | `#FFFFFF` |
| Fond de section doux | `mist` | `#F5F7FC` |
| Teinte claire (formes déco) | `cloud` | `#ECEFFB` |
| Texte / sections sombres | `ink` | `#0F1B2D` |
| Sombre alternatif | `ink-2` | `#16273F` |
| Texte courant | `slate` | `#4B5568` |
| Texte tertiaire | `slate-mute` | `#7F8899` |
| Bordures | `line` | `#E6E9F0` |
| Accent principal | `indigo` | `#4F46E5` |
| Accent (hover) | `indigo-deep` | `#4338CA` |
| Accent (tint clair) | `indigo-soft` | `#EBEAFC` |

Emphase : on **colore un mot ou une expression** du titre en indigo (façon coaching.com),
jamais un point final. Boutons indigo pleins, sections « choc » en navy `ink`.

## Typographie

- **Titres** : Sora (`--font-sora`), poids 600–800, letter-spacing serré.
- **Corps / UI** : Inter (`--font-inter`), poids 400–600.
- Contraste d'échelle marqué titres / corps.

## Photographie

Photos HD réalistes (Unsplash) dans `public/images/img1..img12.jpg` : gens sur leur PC,
mentorat, apprentissage en ligne, code, roadmap. Toujours en `object-cover`, coins
arrondis (`rounded-[1.5rem]`), légère ombre portée, parfois une forme déco derrière.

## Principes

- Rythme alterné image / texte (composant `FeatureRow`), une section « grande » en navy.
- Beaucoup de blanc, sections `mist` intercalées pour la respiration.
- Motion discrète : révélation au scroll (`.reveal`), easing `ease-out-quint`.
- Pas de gradient text, pas de bordure latérale colorée, pas de glassmorphism, pas de dots déco.

Tokens définis dans `app/globals.css` via `@theme` (Tailwind v4).

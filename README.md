# Grenadjärskolan webbplats

Detta projekt innehåller en tillgänglighetsanpassad webbplats för Grenadjärskolan byggd med [Astro](https://astro.build/).

## Kom igång

1. Installera beroenden:
   ```bash
   npm install
   ```
2. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```
3. Bygg för produktion:
   ```bash
   npm run build
   ```
4. Förhandsgranska produktionsbygget:
   ```bash
   npm run preview
   ```

## Tillgänglighet och designprinciper

- Skip-länk för att hoppa direkt till huvudinnehållet.
- Semantiska rubriker, `aria`-etiketter och korrekt markerade listor.
- Färgpalett med hög kontrast samt fokusmarkeringar för tangentbordsnavigering.
- Responsiv layout med flexibla rutnät och stora klickytor.

## Struktur

```
├─ src
│  ├─ layouts
│  │  └─ BaseLayout.astro
│  ├─ pages
│  │  └─ index.astro
│  └─ styles
│     └─ global.css
├─ public
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

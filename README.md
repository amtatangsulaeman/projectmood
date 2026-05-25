# Project Mood — Redesign

Pure black & white editorial wellness site. Next.js 14 + Tailwind + Framer Motion + Lenis.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack
- Next.js 14 (app router, TS)
- Tailwind CSS (pure black/white tokens)
- Framer Motion (reveals, parallax, curtain)
- Lenis (smooth scroll)
- Google Fonts via `next/font`: League Gothic (display), Plus Jakarta Sans (body)

## Structure
- `app/layout.tsx` — fonts, curtain, cursor, smooth scroll
- `app/page.tsx` — section assembly
- `components/` — Hero, Nav, Intro, Pillars, Marquee, Membership, Location, Footer, Reveal, Cursor, SmoothScroll, LoadCurtain
- `app/globals.css` — color tokens, marquee/cursor styles, reduced-motion overrides

Photography uses Unsplash placeholders, forced monochrome via the `.mono` CSS filter. Swap with brand assets before launch.

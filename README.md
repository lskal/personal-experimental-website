# Personal Website

Max Arosio's personal portfolio site — a bilingual (Italian/English), single-page React application showcasing experience, projects, skills, education, and languages, deployed on Vercel. Also doubles as a deliberate exercise in front-end engineering practices: performance, accessibility, security, and workflow discipline, not just UI.

**Live site:** [marosio.dev](https://marosio.dev)

## Quality bar

Latest Lighthouse run against the real production deployment (desktop / mobile):

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :------------: | :-------------: | :-: |
|   99 / 91   |     92 / 92     |    100 / 100    | 100 / 100 |

## Features

- **Bilingual content (IT/EN)**, switchable at runtime via a language toggle. Real content lives in a Vercel Global Config store, fetched through a Vercel Edge Function (`api/content.ts`) and cached in `localStorage` for stale-while-revalidate behavior. While content loads, every section renders a layout-matched skeleton instead of a blank screen or spinner.
- **Light/dark theme**, toggled independently of the palette, persisted in `localStorage`.
- **9 selectable color palettes** (a "next" button cycles through them, with a reset-to-default option), each independently audited for WCAG contrast — ≥4.3:1 for normal text and the relaxed ≥3:1 floor for large text, checked against the actual composited background (not just the named color token, since a tinted/translucent background can silently erode contrast below what a naive check would suggest).
- **Accessibility-conscious markup**: semantic landmarks (`<header>` for the hero, a real `<footer>` for contact), a working skip-to-content link, a correct keyboard tab order (verified against the rendered DOM, not just visual order), a visible `:focus-visible` ring on every interactive element, 48px minimum touch targets, and `aria-label`s on icon-only and new-tab links.
- **Security headers** via `vercel.json`: a real Content-Security-Policy (script-src locked down with an exact hash allow-list rather than `unsafe-inline`), X-Frame-Options, X-Content-Type-Options, Cross-Origin-Opener-Policy, and Referrer-Policy.
- **Seven content sections**: Hero (with a contact/about panel), Experience (an accordion timeline per company), Projects, Skills (grouped by category), Education, Languages (with per-skill proficiency tags), and Contact.
- **No layout-shift loading**: typed placeholder content (matching the real content's shape and item counts) renders skeletons while the real data streams in from Global Config.
- **Custom domain** (`marosio.dev`, DNS on Cloudflare) wired to Vercel's production environment, apex-only with SSL auto-provisioned.
- **`main` / `development` / `feature/*` git flow**: day-to-day work happens on `development` (directly or via short-lived `feature/*` branches merged into it); a pull request promotes `development` into `main` to release.

## Tech stack

- **[React 19](https://react.dev/)** with functional components and hooks — no class components, no external state-management library (state lives in a few focused Context providers: theme, language, palette).
- **TypeScript**, with all shared types centralized under `src/types/`.
- **[Vite](https://vitejs.dev/)** for dev server and build tooling.
- **CSS Modules**, flexbox-first layout (no CSS Grid, no CSS framework) — a boxy, flat-color, IFTTT-inspired visual style.
- **[Vercel Global Config](https://vercel.com/docs/storage/edge-config)** (`@vercel/global-config`) for bilingual content storage, read through a Vercel Function.
- **[lucide-react](https://lucide.dev/)** for icons (bundled at build time, not fetched at runtime), with a couple of hand-rolled inline SVGs for brand marks not in that set (GitHub, LinkedIn).
- **ESLint + Prettier** for linting and formatting.
- Deployed on **[Vercel](https://vercel.com/)**, custom domain on **[Cloudflare](https://www.cloudflare.com/)**.

## Project structure

```
api/
  content.ts              # Vercel Function serving bilingual content from Global Config
src/
  components/              # Shared, reusable UI building blocks (Card, Tag, ProjectCard, Toggles/, ...)
  sections/                 # One folder per page section (Hero, Experience, Projects, ...)
  context/                  # Theme / Language / Palette React Context providers
  hooks/                    # Custom hooks (useTheme, useLanguage, usePalette, ...)
  content/                  # Locale label strings + typed placeholder content generator
  styles/                   # Design tokens (tokens.css) and the 9 color palettes (palettes.css)
  types/                    # Centralized TypeScript types (content, context, components)
```

## Getting started

```bash
npm install
```

Local development needs the **Vercel CLI**, not plain Vite, because the app fetches its real content through a Vercel Function (`api/content.ts`):

```bash
vercel dev
```

Plain `npm run dev` also works for pure UI/styling work — the app falls back gracefully to bundled placeholder content when `/api/content` isn't reachable, it just won't reflect live Global Config data.

## Scripts

| Command                | Description                              |
| ----------------------- | ----------------------------------------- |
| `npm run dev`           | Start the Vite dev server (no API routes) |
| `vercel dev`            | Start the full dev server, including `api/content.ts` |
| `npm run build`         | Type-check and build for production       |
| `npm run lint`          | Run ESLint                                |
| `npm run format`        | Format the codebase with Prettier         |
| `npm run format:check`  | Check formatting without writing changes  |
| `npm run preview`       | Preview a production build locally        |

## Deployment

The project is deployed on Vercel, on a custom domain (`marosio.dev`, DNS managed on Cloudflare, apex-only, DNS-only/no proxy so Vercel's own edge and SSL handle routing and certificates). Real content (both locales) is managed through a Vercel Global Config store, connected via the `GLOBAL_CONFIG` environment variable. `main` is the production branch — every merged pull request from `development` triggers a new production deployment automatically.

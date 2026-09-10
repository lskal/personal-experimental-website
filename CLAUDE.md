# CLAUDE.md — personal-website

Project memory for Claude Code. Read this before proposing or implementing anything in this repo.

## Project overview

Personal portfolio website for Max, a frontend developer. Built with React. Content is bilingual (Italian/English). Deploy target is Vercel.

## Stack and state management

- **React** with functional components and hooks throughout — no class components.
- **State management: React Context API only** (`ThemeContext`, `LanguageProvider`). This project explicitly does **not** use Redux, Redux Toolkit, Zustand, or any other state management library — that was considered early on and deliberately dropped in favor of Context. Do not reintroduce a state library without the user explicitly asking for it again.
- Persistence pattern already established: relevant context state (e.g. theme) is cached in `localStorage` and rehydrated on load.

## Styling philosophy

- **Flexbox-first. Do not use CSS Grid** for layout, even for card-grid or wrapping UIs (e.g. a responsive list of project cards). Use `display: flex; flex-wrap: wrap` with `flex-basis`/`min-width` on children to achieve responsive wrapping instead.
- Visual style is IFTTT-inspired: boxy and minimal — flat color blocks, black-outlined cards arranged in a grid, generous whitespace, pill-shaped rounded buttons. No gradients, no drop shadows.

## Content and internationalization

- Real bilingual content (IT/EN) lives in a Vercel Global Config store (formerly "Edge Config"), fetched via `api/content.ts` (a Vercel Edge Function) and `src/content/fetchContent.ts` on the client, wired into `src/context/LanguageProvider.tsx`. Fetch is prioritized for the active locale, deferred (idle-scheduled) for the other, with a `localStorage` cache per locale for stale-while-revalidate.
- `src/content/en.ts`/`it.ts` no longer hold real content — they only keep the real localized `ui.*` label strings and generate a typed **placeholder** (same item counts as the real content, via `src/content/placeholder.ts`) used while loading. `LanguageContext` exposes `isLoading`; every section renders a `SkeletonBlock`-based skeleton (matching its real layout/item count, to avoid layout shift) while `isLoading` is true. If the fetch fails permanently, the app stays in the skeleton state — no error/retry UI by design.
- Local dev needs `vercel dev`, not `npm run dev` — plain Vite doesn't execute `api/content.ts`.

## Current state and backlog

Seven initial sections are complete: Hero, Experience, Projects, Skills, Education, Languages, Contact.

Done: migrated content to Vercel Global Config (see above, including the loading-skeleton state), and deployed to Vercel.

Pending work, in this priority order — check this list before assuming what's next, don't jump ahead:

1. **Color palette / dark mode pass** — current colors, dark mode especially, aren't finalized. Get concrete feedback on what feels off before proposing a new palette. **This also blocks the color-contrast accessibility fixes below** (Hero text, Skills/Projects tags) — don't patch contrast in isolation before this pass.
2. **Header redesign** — the current `Header` component feels redundant since the Hero section already reads as the page header (name/role/tagline visible there). Likely direction: shrink `Header` to hold only the theme/language toggles, no name duplication, possibly transparent/no background.
3. **Lighthouse audit follow-ups** (from a local `vercel dev` Lighthouse run, 2026-09-10 — report at `~/Desktop/report-lighthouse.md` on Max's machine, not in the repo). Note the run mixed in dev-server noise (unminified Vite bundle, Chrome extensions) — re-verify anything performance-related against a real deployment before treating it as a regression.
   - Certification links have no discernible accessible name (`Education.tsx`'s `.certLink` icon-only link, 7 occurrences) — add an `aria-label` with the certification name.
   - Color contrast insufficient on Hero (name/role/tagline/bio) and on Skills/Projects tag pills — folded into item 1 above, not a standalone fix.
   - Touch targets too small/close together on some links and on the Experience accordion's `<summary>`.
   - Missing meta description in `index.html`.
   - No real `public/robots.txt` (dev server was serving the SPA's `index.html` for that path — verify against the actual Vercel deployment, since production may already differ from the dev-server behavior).
   - Missing security headers (CSP, HSTS, COOP, X-Frame-Options) — a Vercel/hosting config concern, not application code.
   - `/api/content?locale=en` showed as the slowest request in the critical path (~2.1s) in that local run — investigate against a real deployment before assuming it's a real issue (local `vercel dev` cold-starts aren't representative of deployed Edge latency).
   - Optional/nice-to-have: add a valid `llms.txt` (H1 header + links) if Max wants to optimize for AI-agent readability of the site.
4. **`public/logo.svg` is unused** — added 2026-09-10 alongside the new favicon set, but nothing in the code references it yet. Decide what it's for (Open Graph/social preview image? a visible logo in `Header`?) before either wiring it up or removing it.

## Working style — read this before implementing anything

- **Pace implementation in small, confirmed batches.** Before writing a new set of files for a feature (even within an already-agreed section/branch), stop and give a short outline: what files, what each does, key design choices — then wait for an explicit go-ahead. Don't bundle multiple new files (e.g. context + providers + hooks + wiring into `main.tsx`/`App.tsx`) into one uninterrupted sequence of tool calls.
- **Include a short technical description in every pre-implementation plan**, not just a list of files/components — explain the actual approach (layout mechanism, state handling, styling pattern, data flow), so the user can evaluate the approach itself before it's built.
- Verification commands (build/lint/typecheck) after an already-approved change can run without re-asking — it's new implementation work that needs the pause, not verification of approved work.

## Git workflow

Max runs all git commands himself. Never run `git add`, `git commit`, `git push`, or create branches via Bash — these are blocked at the permissions level (`~/.claude/settings.json`) anyway, but as a matter of workflow: when a change is ready, check `git status`/`git diff --stat` to summarize what changed, then hand over a ready-to-run commit command as text for Max to execute — don't attempt to run it.

## Code conventions

- Comments and commit messages: English.
- Folder structure: feature-based where practical (each feature's components/styles/hooks grouped together) rather than strictly type-based.

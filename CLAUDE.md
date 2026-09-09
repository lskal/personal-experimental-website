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

- Bilingual content (IT/EN) currently lives in `content/en.ts` and `content/it.ts`, consumed via `LanguageProvider`.
- **Planned migration** (not yet done): move this content to Vercel Edge Config, fetched through a new `api/content.ts` serverless function. Plan is to fetch both languages once in parallel on app mount, cache the result in `localStorage`, and use a stale-while-revalidate pattern (show cached copy immediately, refetch in background, update if changed). This reuses the same persistence pattern already used by `ThemeContext` — do not introduce a new caching mechanism for this.

## Current state and backlog

Seven initial sections are complete: Hero, Experience, Projects, Skills, Education, Languages, Contact.

Pending work, in this priority order — check this list before assuming what's next, don't jump ahead:

1. **Color palette / dark mode pass** — current colors, dark mode especially, aren't finalized. Get concrete feedback on what feels off before proposing a new palette.
2. **Header redesign** — the current `Header` component feels redundant since the Hero section already reads as the page header (name/role/tagline visible there). Likely direction: shrink `Header` to hold only the theme/language toggles, no name duplication, possibly transparent/no background.
3. **Migrate content to Vercel Edge Config** (see above).
4. **Deploy to Vercel.**

**Explicitly deferred:** a loading skeleton for the content fetch. Not needed for now — Edge Config reads are low-latency and the planned `localStorage` cache removes most of the flash after the first visit. Only revisit this after items 1 and 2 above are done, and only if the loading flash is actually noticeable in practice.

## Working style — read this before implementing anything

- **Pace implementation in small, confirmed batches.** Before writing a new set of files for a feature (even within an already-agreed section/branch), stop and give a short outline: what files, what each does, key design choices — then wait for an explicit go-ahead. Don't bundle multiple new files (e.g. context + providers + hooks + wiring into `main.tsx`/`App.tsx`) into one uninterrupted sequence of tool calls.
- **Include a short technical description in every pre-implementation plan**, not just a list of files/components — explain the actual approach (layout mechanism, state handling, styling pattern, data flow), so the user can evaluate the approach itself before it's built.
- Verification commands (build/lint/typecheck) after an already-approved change can run without re-asking — it's new implementation work that needs the pause, not verification of approved work.

## Git workflow

Max runs all git commands himself. Never run `git add`, `git commit`, `git push`, or create branches via Bash — these are blocked at the permissions level (`~/.claude/settings.json`) anyway, but as a matter of workflow: when a change is ready, check `git status`/`git diff --stat` to summarize what changed, then hand over a ready-to-run commit command as text for Max to execute — don't attempt to run it.

## Code conventions

- Comments and commit messages: English.
- Folder structure: feature-based where practical (each feature's components/styles/hooks grouped together) rather than strictly type-based.

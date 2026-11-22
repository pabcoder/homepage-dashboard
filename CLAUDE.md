# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on port 3000 (set in [vite.config.ts](vite.config.ts))
- `npm run build` — `tsc -b && vite build` (type-checks both `tsconfig.app.json` and `tsconfig.node.json` before bundling)
- `npm run lint` — ESLint (flat config in [eslint.config.js](eslint.config.js))
- `npm run preview` — serve the production build

There is no test runner configured.

## Architecture

A small browser homepage/dashboard: React 19 + TypeScript + Vite 7, styled with Tailwind CSS v4 (via the `@tailwindcss/vite` plugin). The React Compiler (`babel-plugin-react-compiler`) is enabled in the Vite config, so avoid manual `useMemo`/`useCallback` unless needed.

- Entry: [src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx) → components in `src/components/` (currently only `SearchBar`, which redirects to a Google search on Enter).
- [src/constants/RSS.ts](src/constants/RSS.ts) holds a static list of RSS feeds (name, site, rss URL, category). It is not yet consumed by any component.
- [src/types.d.ts](src/types.d.ts) declares the `RSS` type as an ambient global (no import/export), so it is usable anywhere without importing. Keep it a script-style `.d.ts` or the global will disappear.

### Styling gotcha

Tailwind is only activated by `@import "tailwindcss"` in [src/styles/global.css](src/styles/global.css), but **nothing currently imports that file** (`main.tsx` imports `index.css`, `App.tsx` imports `App.css`). Tailwind utility classes used in components (e.g. `flex`, `p-4`) will not take effect until `./styles/global.css` is imported. Also, `index.css` / `App.css` are leftover Vite template styles (dark theme, `#root` at `100vh` flex column) that interact with the layout.

## Notes

- [README.md](README.md) is the stock Vite React template text; it contains no project-specific information.
- `.agents/skills/caveman` and `skills-lock.json` are Claude skill tooling, not part of the app.

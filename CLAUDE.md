# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # TypeScript check + Vite production build → dist/
npm run preview   # Serve production build locally
npm run deploy    # Push dist/ to GitHub Pages (gh-pages branch)
```

No test suite is configured.

## Architecture

Personal portfolio SPA built with React 18 + Vite + TypeScript, deployed to GitHub Pages.

**Routing:** React Router v6 with three routes — `/` and `/about` render `<About>`, `/skills` renders `<Skills>`, `/projects` renders `<Projects>`. Tab state in `App.tsx` is synced to the URL. A SPA redirect script in `index.html` and `public/404.html` handle GitHub Pages routing fallbacks.

**Components** (`src/components/`): `Navigation`, `About`, `Skills`, `Projects` — each is a single self-contained component with no shared state beyond what `App.tsx` passes.

**Styling:** Plain CSS with custom properties in `App.css`. Color scheme is black/light-gray minimalist. Fonts loaded from Google Fonts (Inter + JetBrains Mono). Icons via Font Awesome CDN in `index.html`.

**API proxy:** `vite.config.ts` proxies `/api/fun-facts` to a Railway-hosted API during development only.

**Deployment:** `npm run deploy` uses `gh-pages` to push the `dist/` folder. The `public/.nojekyll` file disables Jekyll on GitHub Pages.

# Material Identity

A static documentation website for Material Identity, an open-source, vendor-neutral project publishing JSON schemas for material declarations, served at materialidentity.org.

## Repository rules

- The site is plain HTML, CSS and a small amount of plain JavaScript. Do not add React or any other UI framework, component library or client-side router.
- Each page is its own HTML file (see "Where things live"). The header and footer are repeated in every page: when you change them, change them in all pages.
- Link to pages with a trailing slash (`/metals/`, `/imprint/`), never `/metals` or `/imprint.html`.
- This repo holds one website, `artifacts/material-identity`. Do not add other artifacts (no `api-server`, no `mockup-sandbox`), no `lib/*` packages, no backend and no database.
- Add a package only when the site needs it, and remove anything that becomes unused.
- Commit changes on `main` in Replit and never push. A maintainer pushes the changes to a branch and opens the pull request on GitHub.
- The site is deployed by `.github/workflows/deploy.yaml` (GitHub Pages, materialidentity.org) on merge to `main`. Do not publish or deploy from Replit.
- Keep the redirect pages for old addresses in `artifacts/material-identity/public/` working.

## Run & Operate

- `pnpm --filter @workspace/material-identity run dev` — preview the site (needs `PORT`)
- `pnpm --filter @workspace/material-identity run build` — build the site into `artifacts/material-identity/dist/public`

## Stack

- Plain HTML, CSS and JavaScript
- Build tools only: Vite (preview and build) and Tailwind CSS 4 (turns the classes in the HTML into one stylesheet)
- GitHub Pages serves one folder per page and, for unknown addresses, `404.html`

## Where things live

All paths are inside `artifacts/material-identity/`.

- Home: `index.html`
- Schema pages: `metals/index.html`, `chemicals/index.html`, `forestry/index.html`
- Legal pages: `imprint/index.html`, `privacy_policy/index.html`, `terms_conditions/index.html`
- Not-found page: `404.html`
- When adding a page, also add it to `PAGES` in `vite.config.ts`, or it is not built
- Styles and colours, including dark mode: `src/index.css`
- Theme switch, mobile menu and the "On this page" highlight: `src/main.js`
- Logos and favicon: `public/`; redirects for old addresses: `public/about/`, `public/coa/`, `public/en10168/` and `public/*.html`

## Product

The site explains the Global Schema and the narrower Metals, Chemicals and Forestry Material Schemas, links to their field references, and documents tools and contribution paths.

## User preferences

- Keep this site static and hard-coded; no backend, database, accounts, pricing, forms, or sales.
- Use a GitHub documentation/repository appearance with system fonts, neutral borders, blue links, responsive navigation, and light/dark themes.
- All schemas are open source. Show each schema's own licence (CC BY 4.0 for EN 10168 and Forestry, Apache-2.0 for CoA); never call them copyleft. Standards keep their identity and ownership.

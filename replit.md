# Material Identity

A standalone static documentation website for Material Identity, an open-source, vendor-neutral project publishing JSON schemas for material declarations.

## Repository rules

- This repo holds one static website, `artifacts/material-identity`. Do not add other artifacts (no `api-server`, no `mockup-sandbox`), no `lib/*` packages, no backend and no database.
- Do not add shadcn/ui components, hooks or packages in bulk. Add a component or package only when the site imports it, and remove anything that becomes unused.
- Commit changes on `main` in Replit and never push. A maintainer pushes the changes to a branch and opens the pull request on GitHub.
- The site is deployed by `.github/workflows/deploy.yaml` (GitHub Pages, materialidentity.org) on merge to `main`. Do not publish or deploy from Replit.
- Keep the redirects for old addresses in `vite.config.ts` (`OLD_SITE_REDIRECTS`) working.

## Run & Operate

- `pnpm --filter @workspace/material-identity run dev` — run the site locally (needs `PORT` and `BASE_PATH`)
- `pnpm --filter @workspace/material-identity run typecheck` — typecheck the site
- `BASE_PATH=/ pnpm --filter @workspace/material-identity run build` — build the static site into `artifacts/material-identity/dist/public`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 19, Vite 7, Tailwind CSS 4, wouter for routing
- Static build: one prerendered `index.html` per page plus redirects, served by GitHub Pages

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

The site explains the Global Schema and the narrower Metals, Chemicals and Forestry Material Schemas, links to their field references, and documents tools and contribution paths.

## User preferences

- Keep this site static and hard-coded for later hosting on GitHub Pages; no backend, database, accounts, pricing, forms, or sales.
- Use a GitHub documentation/repository appearance with system fonts, neutral borders, blue links, responsive navigation, and light/dark themes.
- All schemas are open source. Show each schema's own licence (CC BY 4.0 for EN 10168 and Forestry, Apache-2.0 for CoA); never call them copyleft. Standards keep their identity and ownership.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

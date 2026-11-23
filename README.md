# Material Identity website

The website at [materialidentity.org](https://materialidentity.org): open, vendor-neutral JSON schemas for material data. The schemas themselves live in [material-identity/schemas](https://github.com/material-identity/schemas).

## Making changes

The site is plain HTML and CSS with a little JavaScript, in `artifacts/material-identity/`. Each page is its own file, for example `metals/index.html`.

Changes are usually made in the Replit project connected to this repo. Replit commits on `main` without pushing; a maintainer pushes the change to a branch and opens a pull request. `replit.md` holds the working rules for Replit's AI.

To preview locally (needs Node.js 24 and pnpm 10):

```sh
pnpm install
PORT=5173 pnpm --filter @workspace/material-identity run dev
```

## Deploying

Every pull request builds the site as a check. Merging to `main` deploys it to GitHub Pages through `.github/workflows/deploy.yaml`.

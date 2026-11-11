// Shared page metadata. Imported by the app (runtime <head> updates) and by
// vite.config.ts (static per-route index.html emission for GitHub Pages).
export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const SITE_URL = 'https://materialidentity.org';

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Material Identity · The common language for material data',
    description:
      'Open, vendor-neutral schemas that give every value in a material declaration one unambiguous meaning, so software can interpret material data, not just open it.',
  },
  {
    path: '/metals',
    title: 'Metals · EN 10168 schema · Material Identity',
    description:
      'Open source JSON schema for steel inspection documents, structured along the five information groups of EN 10168 with reusable components for chemistry, companies and measurements.',
  },
  {
    path: '/chemicals',
    title: 'Chemicals & Plastics · Certificate of Analysis schema · Material Identity',
    description:
      'Open source JSON schema for certificates of analysis, with standardized CAMPUS property identifiers, multi-language rendering and hashed attachments.',
  },
  {
    path: '/forestry',
    title: 'Forestry & Timber · ForestrySource and Forestry schemas · Material Identity',
    description:
      'Open source JSON schemas documenting the origin of harvested timber and its path through the supply chain, built for the EU Deforestation Regulation (EUDR) and the US Lacey Act.',
  },
];

export const GITHUB_ORG = 'https://github.com/material-identity';
export const GITHUB_REPO = 'https://github.com/material-identity/schemas';
export const GITHUB_ISSUES = 'https://github.com/material-identity/schemas/issues';

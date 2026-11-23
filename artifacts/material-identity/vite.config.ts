import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';
import { PAGES, SITE_URL, type PageMeta } from './src/lib/pages';

const isBuild = process.argv.includes('build');
const rawPort = process.env.PORT ?? (isBuild ? '5173' : undefined);

if (!rawPort) {
  throw new Error('PORT environment variable is required but was not provided.');
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? (isBuild ? '/' : undefined);

if (!basePath) {
  throw new Error('BASE_PATH environment variable is required but was not provided.');
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function applyMeta(html: string, p: PageMeta) {
  const url = SITE_URL + (p.path === '/' ? '/' : p.path);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace(/(name="description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(property="og:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
    .replace(/(property="og:description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(name="twitter:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
    .replace(/(name="twitter:description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(rel="canonical" href=")[^"]*"/, `$1${url}"`);
}

// Addresses of the old VuePress site, mapped to the page that replaces them.
const OLD_SITE_REDIRECTS: Record<string, string> = {
  'about/index.html': '/',
  'coa/index.html': '/chemicals',
  'en10168/index.html': '/metals',
  'en10168/v0.4.1.html': '/metals',
  'imprint.html': '/imprint',
  'privacy_policy.html': '/privacy_policy',
  'terms_conditions.html': '/terms_conditions',
};

function redirectHtml(target: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${SITE_URL}${target}">
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body><p>This page has moved to <a href="${target}">${SITE_URL}${target}</a>.</p></body>
</html>
`;
}

// Emits dist/public/<route>/index.html for each page with page-specific meta,
// plus 404.html, .nojekyll and redirects from old addresses, so GitHub Pages serves deep links directly.
function staticRoutes(): Plugin {
  let outDir = '';
  return {
    name: 'material-identity-static-routes',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir;
    },
    closeBundle() {
      const indexFile = path.join(outDir, 'index.html');
      if (!fs.existsSync(indexFile)) return;
      const html = fs.readFileSync(indexFile, 'utf8');
      for (const p of PAGES) {
        const dir = p.path === '/' ? outDir : path.join(outDir, p.path.slice(1));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), applyMeta(html, p));
      }
      fs.writeFileSync(path.join(outDir, '404.html'), applyMeta(html, PAGES[0]));
      const base = basePath.replace(/\/$/, '');
      for (const [file, target] of Object.entries(OLD_SITE_REDIRECTS)) {
        const redirectFile = path.join(outDir, file);
        fs.mkdirSync(path.dirname(redirectFile), { recursive: true });
        fs.writeFileSync(redirectFile, redirectHtml(base + target));
      }
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    staticRoutes(),
    ...(process.env.NODE_ENV !== 'production' && process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({ root: path.resolve(import.meta.dirname, '..') }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) => m.devBanner()),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});

import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

const isBuild = process.argv.includes('build');
const port = Number(process.env.PORT ?? (isBuild ? '5173' : undefined));

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`PORT environment variable is required, got "${process.env.PORT}"`);
}

const PAGES = [
  'index.html',
  'metals/index.html',
  'chemicals/index.html',
  'forestry/index.html',
  'imprint/index.html',
  'privacy_policy/index.html',
  'terms_conditions/index.html',
  '404.html',
];

// Stops GitHub Pages from running the output through Jekyll.
function writeNoJekyll(): Plugin {
  let outDir = '';
  return {
    name: 'write-nojekyll',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
    },
  };
}

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [tailwindcss(), writeNoJekyll()],
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((page) => [page.replace(/\/?index\.html$|\.html$/, '') || 'home', path.resolve(import.meta.dirname, page)])),
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});

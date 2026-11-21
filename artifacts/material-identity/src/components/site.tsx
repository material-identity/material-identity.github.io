import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, BookOpen, Link2, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import { GITHUB_ORG, GITHUB_REPO, PAGES, SITE_URL } from '@/lib/pages';

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Absolute in-app href (for plain anchors that need the base prefix). */
export const href = (p: string) => `${BASE}${p}`;

/* ---------- Icons ---------- */
export function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

function RepoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ color: 'var(--fg-muted)' }}>
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

/* ---------- Meta ---------- */
export function usePageMeta(path: string) {
  useEffect(() => {
    const p = PAGES.find((x) => x.path === path) ?? PAGES[0];
    document.title = p.title;
    const set = (sel: string, attr: string, val: string) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    const url = SITE_URL + (p.path === '/' ? '/' : p.path);
    set('meta[name="description"]', 'content', p.description);
    set('meta[property="og:title"]', 'content', p.title);
    set('meta[property="og:description"]', 'content', p.description);
    set('meta[property="og:url"]', 'content', url);
    set('meta[name="twitter:title"]', 'content', p.title);
    set('meta[name="twitter:description"]', 'content', p.description);
    set('link[rel="canonical"]', 'href', url);
  }, [path]);
}

/* ---------- Theme ---------- */
type Pref = 'system' | 'light' | 'dark';
const KEY = 'mi-theme';

function readPref(): Pref {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

function ThemeToggle() {
  const [pref, setPref] = useState<Pref>(readPref);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = pref === 'dark' || (pref === 'system' && mq.matches);
      document.documentElement.classList.toggle('dark', dark);
    };
    apply();
    try {
      if (pref === 'system') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, pref);
    } catch {
      /* storage unavailable */
    }
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [pref]);

  const next: Record<Pref, Pref> = { system: 'light', light: 'dark', dark: 'system' };
  const Icon = pref === 'light' ? Sun : pref === 'dark' ? Moon : Monitor;
  const label = `Theme: ${pref}. Switch to ${next[pref]}`;
  return (
    <button type="button" className="btn btn-icon" onClick={() => setPref(next[pref])} aria-label={label} title={label} data-testid="button-theme">
      <Icon size={16} strokeWidth={1.75} />
    </button>
  );
}

/* ---------- Header ---------- */
const NAV = [
  { label: 'Why', to: '/#why', page: false },
  { label: 'How it works', to: '/#how', page: false },
  { label: 'Schemas', to: '/#schemas', page: false },
  { label: 'Contribute', to: '/#contribute', page: false },
];

function NavItem({ item, onClick }: { item: (typeof NAV)[number]; onClick?: () => void }) {
  const [loc] = useLocation();
  const id = `link-nav-${item.label.toLowerCase()}`;
  if (item.page) {
    return (
      <Link href={item.to} className="navlink" aria-current={loc.replace(/\/$/, '') === item.to ? 'page' : undefined} onClick={onClick} data-testid={id}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={href(item.to)} className="navlink" onClick={onClick} data-testid={id}>
      {item.label}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [loc] = useLocation();
  useEffect(() => setOpen(false), [loc]);

  return (
    <header className="sticky top-0 z-40 border-b" style={{ background: 'var(--header-bg)' }}>
      <div className="wrap flex h-[60px] items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold hover:no-underline" style={{ color: 'var(--fg)' }} data-testid="link-home">
          <Mark />
          <span className="text-[16px] tracking-[-0.01em]">material identity</span>
        </Link>
        <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <NavItem key={n.label} item={n} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <a href={GITHUB_ORG} className="btn btn-icon" aria-label="Material Identity on GitHub" title="github.com/material-identity" data-testid="link-github-header">
            <GitHubIcon />
          </a>
          <button type="button" className="btn btn-icon md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)} data-testid="button-menu">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t md:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-2">
            {NAV.map((n) => (
              <NavItem key={n.label} item={n} onClick={() => setOpen(false)} />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Mark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 7.1 12 3.5l8.5 3.6-8.5 3.6-8.5-3.6Z" />
      <path d="m3.5 11.1 8.5 3.6 8.5-3.6" />
      <path d="m3.5 15.1 8.5 3.6 8.5-3.6" />
      <path d="M3.5 7.1v8M12 10.7v8M20.5 7.1v8" />
    </svg>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const links = [
    ['GitHub', GITHUB_ORG],
    ['Terms and Conditions', 'https://materialidentity.org/terms_conditions'],
    ['Privacy Policy', 'https://materialidentity.org/privacy_policy'],
    ['Imprint', 'https://materialidentity.org/imprint'],
  ];
  return (
    <footer className="mt-16 border-t">
      <div className="wrap flex flex-col gap-3 py-8 text-[12px] md:flex-row md:items-center md:justify-between" style={{ color: 'var(--fg-muted)' }}>
        <div className="flex items-center gap-2">
          <Mark />
          <span data-testid="text-footer">Open material data interoperability. Maintained by S1SEVEN.</span>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {links.map(([l, u]) => (
            <li key={l}>
              <a href={u} data-testid={`link-footer-${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 btn">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/* ---------- Markdown helpers ---------- */
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="hd">
      <a href={`#${id}`} className="anchor" aria-label={`Link to this section`}>
        <Link2 size={16} />
      </a>
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 id={id} className="hd">
      <a href={`#${id}`} className="anchor" aria-label={`Link to this section`}>
        <Link2 size={14} />
      </a>
      {children}
    </h3>
  );
}

/* ---------- Schema repo card ---------- */
export interface SchemaInfo {
  slug: 'metals' | 'chemicals' | 'forestry';
  sector: string;
  name: string;
  version: string;
  description: string;
}

export const SCHEMAS: SchemaInfo[] = [
  {
    slug: 'metals',
    sector: 'Metals',
    name: 'EN 10168',
    version: 'v0.5.0',
    description:
      'Steel inspection documents structured along the five information groups of EN 10168, with reusable components for chemistry, companies and measurements.',
  },
  {
    slug: 'chemicals',
    sector: 'Chemicals & Plastics',
    name: 'Certificate of Analysis',
    version: 'v1.0.0',
    description:
      'Certificates of analysis for plastics and other materials, with standardized property identifiers, multi-language rendering and hashed attachments.',
  },
  {
    slug: 'forestry',
    sector: 'Forestry & Timber',
    name: 'ForestrySource and Forestry',
    version: 'v0.0.1',
    description:
      'Origin of harvested timber and its path through the supply chain, built for the EU Deforestation Regulation (EUDR) and the US Lacey Act.',
  },
];

export function SchemaCard({ s }: { s: SchemaInfo }) {
  return (
    <article className="box flex flex-col p-4" data-testid={`card-schema-${s.slug}`}>
      <div className="flex items-center gap-2">
        <RepoIcon />
        <Link href={`/${s.slug}`} className="font-semibold" data-testid={`link-schema-title-${s.slug}`}>
          {s.sector} <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>·</span> {s.name}
        </Link>
      </div>
      <p className="mt-2 flex-1 text-[14px]" style={{ color: 'var(--fg-muted)' }}>{s.description}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]" style={{ color: 'var(--fg-muted)' }}>
        <span className="flex items-center gap-1.5">
          <span className="dot" style={{ background: `var(--${s.slug})` }} />
          {s.sector}
        </span>
        <span className="mono">{s.version}</span>
        <span className="label">Open source · copyleft</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t pt-3">
        <Link href={`/${s.slug}`} className="btn" data-testid={`link-schema-docs-${s.slug}`}>
          <BookOpen size={16} strokeWidth={1.75} /> Documentation
        </Link>
        <a href={GITHUB_REPO} className="btn" data-testid={`link-schema-github-${s.slug}`}>
          <GitHubIcon /> GitHub
        </a>
      </div>
    </article>
  );
}

/* ---------- Harmonization example ---------- */
export function MvrExample() {
  const forms = ['ISO 1133', 'DIN EN ISO 1133', 'DIN EN ISO 1133-2:2012-03'];
  return (
    <figure className="box my-4 overflow-hidden" data-testid="figure-mvr">
      <div className="border-b px-4 py-2 text-[12px] font-semibold" style={{ background: 'var(--canvas-subtle)' }}>
        From readable to interpretable
      </div>
      <div className="grid items-center gap-4 p-4 md:grid-cols-[1fr_auto_1fr]">
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {forms.map((f) => (
            <li key={f} className="mono rounded-md border px-3 py-1.5 text-[13px]" style={{ background: 'var(--canvas-subtle)' }}>
              <span style={{ color: 'var(--fg-muted)' }}>method: </span>"{f}"
            </li>
          ))}
        </ul>
        <div className="flex justify-center" style={{ color: 'var(--fg-muted)' }} aria-hidden="true">
          <svg width="72" height="110" viewBox="0 0 72 110" className="hidden md:block" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M2 17 C36 17 36 55 66 55" />
            <path d="M2 55 L66 55" />
            <path d="M2 93 C36 93 36 55 66 55" />
            <path d="M60 50 L67 55 L60 60" />
          </svg>
          <ArrowRight className="rotate-90 md:hidden" size={20} />
        </div>
        <div className="rounded-md border p-3" style={{ borderColor: 'var(--link)', background: 'var(--accent-subtle)' }}>
          <div className="text-[12px]" style={{ color: 'var(--fg-muted)' }}>CAMPUS property identifier</div>
          <div className="mono mt-1 text-[20px] font-semibold">38 = MVR</div>
          <div className="mt-1 text-[12px]" style={{ color: 'var(--fg-muted)' }}>Melt volume-flow rate</div>
        </div>
      </div>
    </figure>
  );
}

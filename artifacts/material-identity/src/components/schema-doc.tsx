import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon, H2, usePageMeta } from '@/components/site';
import { GITHUB_REPO } from '@/lib/pages';

export interface TocItem { id: string; label: string }

export function SchemaDoc({
  path, slug, sector, title, version, licence, reference, toc, children,
}: {
  path: string; slug: string; sector: string; title: string; version: string; licence: string;
  reference: string; toc: TocItem[]; children: ReactNode;
}) {
  usePageMeta(path);
  const [active, setActive] = useState(toc[0]?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = window.location.hash.slice(1);
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  useEffect(() => {
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-70px 0px -65% 0px' },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [toc]);

  return (
    <div className="wrap md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
      <aside className="hidden md:block">
        <nav className="toc sticky top-[76px] pt-8" aria-label="On this page">
          <div className="mb-2 px-2 text-[12px] font-semibold" style={{ color: 'var(--fg-muted)' }}>On this page</div>
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`} className={active === t.id ? 'active' : ''} data-testid={`link-toc-${t.id}`}>{t.label}</a>
          ))}
          <div className="mt-4 border-t pt-3">
            <Link href="/#schemas" className="block px-2 text-[13px]">All schemas</Link>
          </div>
        </nav>
      </aside>
      <article className="md min-w-0 pb-8 pt-8">
        <nav className="mb-3 text-[14px]" aria-label="Breadcrumb">
          <Link href="/">material identity</Link>
          <span style={{ color: 'var(--fg-muted)' }}> / </span>
          <span className="font-semibold">{slug}</span>
        </nav>
        <div className="border-b pb-4" style={{ borderColor: 'var(--line-muted)' }}>
          <div className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--fg-muted)' }}>
            <span className="dot" style={{ background: `var(--${slug})` }} /> {sector}
          </div>
          <h1 className="mt-1 text-[28px] md:text-[32px]" data-testid="text-schema-title">{title}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="label label-accent mono">{version}</span>
            <span className="label">Open source · {licence}</span>
            <span className="label mono">JSON Schema</span>
          </div>
        </div>
        {/* Mobile TOC */}
        <details className="box mt-4 md:hidden">
          <summary className="cursor-pointer px-3 py-2 text-[14px] font-semibold">On this page</summary>
          <div className="toc border-t p-2">
            {toc.map((t) => <a key={t.id} href={`#${t.id}`}>{t.label}</a>)}
          </div>
        </details>
        {children}
        <H2 id="links">Full field reference</H2>
        <p>Every field, type and constraint is defined in the schema files. Source, examples and translations live in the central repository.</p>
        <div className="flex flex-wrap gap-2">
          <a href={reference} className="btn btn-primary" data-testid="link-field-reference"><ExternalLink size={16} /> Schema files</a>
          <a href={GITHUB_REPO} className="btn" data-testid="link-schema-github"><GitHubIcon /> View repository</a>
        </div>
      </article>
    </div>
  );
}

export const TOOLS_TEXT = (
  <ul>
    <li><strong>Validation</strong> against the JSON schema, with valid and invalid test fixtures.</li>
    <li><strong>Rendering</strong> of any declaration as standardized PDF and HTML.</li>
    <li><strong>Localization</strong> in one or two languages, with localized numbers and dates.</li>
  </ul>
);

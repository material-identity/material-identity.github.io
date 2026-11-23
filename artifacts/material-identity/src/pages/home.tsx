import { useEffect } from 'react';
import { BookOpen, CheckCircle2, Puzzle, Shuffle } from 'lucide-react';
import { GitHubIcon, H2, SCHEMAS, SchemaCard, href, usePageMeta } from '@/components/site';
import { GITHUB_ISSUES, GITHUB_REPO } from '@/lib/pages';

const APPROACH = [
  { icon: Puzzle, t: 'Built on industry standards', d: 'Preserve established standards, industry-specific requirements and existing intellectual property.' },
  { icon: Shuffle, t: 'Harmonized by experts', d: 'Align material properties, units, definitions and test methods so systems interpret them consistently.' },
  { icon: CheckCircle2, t: 'Designed for automation', d: 'Make material data suitable for deterministic validation, comparison and conformity matching.' },
];

type Logo = { name: string; url: string; img?: string };
const COMMUNITY: { group: string; items: Logo[] }[] = [
  {
    group: 'Initial contributors and early adopters',
    items: [
      { name: 'BASF SE', url: 'https://basf.com', img: 'basf.png' },
      { name: 'STAHLO', url: 'https://www.stahlo.de/', img: 'stahlo.png' },
      { name: 'SynthoTec', url: 'https://www.synthotec.com', img: 'synthotec.png' },
    ],
  },
  { group: 'Research institutions', items: [{ name: 'SKZ', url: 'https://skz.de', img: 'skz.png' }] },
  {
    group: 'Technology and service providers',
    items: [
      { name: 'S1SEVEN', url: 'https://s1seven.com', img: 's1seven.png' },
      { name: 'Industrious', url: 'https://www.icxp.eu', img: 'industrious.svg' },
      { name: 'motan group', url: 'https://www.motan-group.com', img: 'motan.png' },
      { name: 'MetalsXP', url: 'https://www.metalsxp.com', img: 'metalsxp.svg' },
      { name: 'Plus10', url: 'https://www.plus10.de', img: 'plus10.png' },
      { name: 'imat-uve', url: 'https://www.imat-uve.de', img: 'imat-uve.png' },
      { name: 'material.one', url: 'https://material.one', img: 'material-one.png' },
      { name: 'Adexin', url: 'https://adexin.com', img: 'adexin.svg' },
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function Home() {
  usePageMeta('/');
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrap md pb-8">
      <section id="why" className="pt-12 pb-4 md:pt-16 md:pb-6">
        <h1 className="m-0 max-w-[760px] text-[32px] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[44px]" data-testid="text-headline">
          Material data that systems understand.
        </h1>
        <p className="mt-5 max-w-[720px] text-[18px] leading-[1.6]" style={{ color: 'var(--fg-muted)' }}>
          Every material has properties. Every industry has standards. Yet material information is still difficult to exchange, interpret and compare automatically.
        </p>
        <p>We believe material data should have the same meaning everywhere it is used.</p>
        <p className="max-w-[720px]" style={{ color: 'var(--fg-muted)' }}>
          So suppliers, buyers and software systems can work with the same information — without repeatedly translating or interpreting it.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href="#schemas" className="btn btn-primary" data-testid="link-explore-schemas">
            <BookOpen size={16} /> Explore the schemas
          </a>
          <a href={GITHUB_REPO} className="btn" data-testid="link-hero-github">
            <GitHubIcon /> View on GitHub
          </a>
        </div>
      </section>

      <H2 id="how">Industry expertise meets shared definitions.</H2>
      <p>
        Material Identity is an open-source, vendor-neutral project. We bring established industry standards, material expertise and technology together to create harmonized, machine-interpretable JSON schemas.
      </p>
      <div className="box my-4">
        {APPROACH.map(({ icon: Icon, t, d }) => (
          <div key={t} className="box-row flex gap-3 p-4">
            <Icon size={16} className="mt-1 flex-none" style={{ color: 'var(--fg-muted)' }} />
            <div>
              <div className="text-[14px] font-semibold">{t}</div>
              <div className="text-[14px]" style={{ color: 'var(--fg-muted)' }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[14px]" style={{ color: 'var(--fg-muted)' }}>Existing industry standards keep their identity and ownership.</p>

      <H2 id="schemas">Ready-to-use schemas for real industries.</H2>
      <p>
        Documented, versioned schemas for material declarations. The Global Schema is the most generic, universal schema for any declaration. Material Schemas for Metals, Chemicals and Forestry add narrower definitions.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SCHEMAS.map((s) => (
          <SchemaCard key={s.slug} s={s} />
        ))}
      </div>

      <p className="mt-5 text-[14px]">
        The <a href={GITHUB_REPO}>central repository</a> includes validation tools, test fixtures, PDF and HTML rendering, and output in one or two languages with localized numbers and dates.
      </p>
      <div className="box my-6 p-4">
      <p className="mt-0 font-semibold">One foundation. Multiple applications.</p>
      <p>
        Material Identity provides shared definitions. Independent applications use them to exchange material data and perform conformity assessments.
      </p>
      <p className="mb-0 text-[14px]" style={{ color: 'var(--fg-muted)' }}>
        A schema makes deterministic matching possible within its scope; it does not prove the accuracy of a declaration.
      </p>
      </div>

      {/* Participate */}
      <H2 id="contribute">Bring your industry standards into Material Identity.</H2>
      <p>
        Standards organizations, manufacturers, software providers and industry experts can all help build a common language for material data.
      </p>
      <ul>
        <li>Explore the existing schemas, documentation and examples as a starting point for your industry.</li>
        <li>Propose a schema or share your expertise through <a href={GITHUB_ISSUES}>GitHub issues</a>.</li>
        <li>Improve existing definitions, report issues or contribute a translation per language.</li>
      </ul>
      <p>All schemas, examples, translations and documentation are open source, under the CC BY 4.0 or Apache-2.0 licence.</p>
      <div className="flex flex-wrap gap-2">
        <a href={GITHUB_ISSUES} className="btn" data-testid="link-issues"><GitHubIcon /> Contribute on GitHub</a>
        <a href={GITHUB_REPO} className="btn" data-testid="link-repo">View repository</a>
      </div>

      {/* 7 Community */}
      <H2 id="community">Community</H2>
      {COMMUNITY.map((g) => (
        <div key={g.group} className="community-logos mb-6">
          <h3 className="mb-3 mt-0 text-[14px] font-semibold" style={{ color: 'var(--fg-muted)' }}>{g.group}</h3>
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4">
            {g.items.map((l) => (
              <li key={l.name} className="m-0">
                <a href={l.url} className="logo-tile" title={l.name} target="_blank" rel="noopener noreferrer" data-testid={`link-logo-${slug(l.name)}`}>
                  {l.img ? <img src={href(`/logos/${l.img}`)} alt={l.name} loading="lazy" /> : <span className="wordmark">{l.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}

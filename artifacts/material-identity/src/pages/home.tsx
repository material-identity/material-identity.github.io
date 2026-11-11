import { useEffect } from 'react';
import { Link } from 'wouter';
import { BookOpen, CheckCircle2, FileJson, Languages, Puzzle, Repeat, Shuffle, HelpCircle, FlaskConical, FileOutput } from 'lucide-react';
import { GitHubIcon, H2, H3, MvrExample, SCHEMAS, SchemaCard, href, usePageMeta } from '@/components/site';
import { GITHUB_ISSUES, GITHUB_REPO } from '@/lib/pages';

const PROBLEMS = [
  { icon: Puzzle, t: 'Fragmented standards', d: 'Different industries maintain different data models.' },
  { icon: Shuffle, t: 'Semantic differences', d: 'Properties, units, test methods and conditions may not align.' },
  { icon: Repeat, t: 'Repeated integration', d: 'Every new format means another round of mapping.' },
  { icon: HelpCircle, t: 'Uncertain automation', d: "Conformity matching cannot rest on guesswork, whether a person's or a model's." },
];

const TOOLS = [
  { icon: CheckCircle2, t: 'Validation', d: 'Check any declaration against its JSON schema before it leaves your system.' },
  { icon: FlaskConical, t: 'Test fixtures', d: 'Valid and invalid example documents for every schema version.' },
  { icon: FileOutput, t: 'Rendering', d: 'Turn a JSON declaration into a standardized PDF and HTML document.' },
  { icon: Languages, t: 'Localization', d: 'Render in one or two languages, with localized numbers and dates.' },
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
      { name: 'S1SEVEN', url: 'https://s1seven.com' },
      { name: 'Industrious', url: 'https://www.icxp.eu' },
      { name: 'motan group', url: 'https://www.motan-group.com', img: 'motan.png' },
      { name: 'MetalsXP', url: 'https://www.metalsxp.com' },
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
      {/* 1 Hero */}
      <section className="border-b py-12 md:py-16" style={{ borderColor: 'var(--line-muted)' }}>
        <p className="mono mb-3 text-[13px]" style={{ color: 'var(--fg-muted)' }}>The common language for material data</p>
        <h1 className="m-0 max-w-[760px] text-[32px] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[44px]" data-testid="text-headline">
          Material data that systems understand.
        </h1>
        <p className="mt-5 max-w-[720px] text-[18px] leading-[1.6]" style={{ color: 'var(--fg-muted)' }}>
          Materials are described by countless standards, specifications and certificates. Their data structures and meanings often differ, which makes automated exchange and conformity matching difficult. Material Identity publishes open schemas that give every value one unambiguous meaning, so software can interpret material data, not just open it.
        </p>
        <p className="text-[14px]" style={{ color: 'var(--fg-muted)' }}>Existing industry standards keep their identity and ownership.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href="#schemas" className="btn btn-primary" data-testid="link-explore-schemas">
            <BookOpen size={16} /> Explore the schemas
          </a>
          <a href={GITHUB_REPO} className="btn" data-testid="link-hero-github">
            <GitHubIcon /> View on GitHub
          </a>
        </div>
      </section>

      {/* 2 Problem */}
      <H2 id="interoperability">Structured data alone does not create interoperability.</H2>
      <p>
        Even when material data is delivered as JSON, two systems may represent the same property differently, or use the same name for different meanings. A file can be parsed and still be misunderstood.
      </p>
      <div className="box my-4 grid sm:grid-cols-2">
        {PROBLEMS.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className={`flex gap-3 p-4 ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'sm:border-t-0' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''}`}>
            <Icon size={16} className="mt-1 flex-none" style={{ color: 'var(--fg-muted)' }} />
            <div>
              <div className="text-[14px] font-semibold">{t}</div>
              <div className="text-[14px]" style={{ color: 'var(--fg-muted)' }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
      <p><em className="note">The challenge is not turning every certificate into JSON. It is making sure each value has one unambiguous meaning wherever it is used.</em></p>

      {/* 3 Architecture */}
      <H2 id="architecture">One foundation, narrower definitions where you need them.</H2>
      <p>
        A single Global Schema provides the most generic, universal structure for any declaration. Material Schemas build on it with narrower definitions for a sector or document type.
      </p>
      <div className="my-6" aria-label="Schema hierarchy" role="img">
        <div className="mx-auto max-w-[460px] rounded-md border p-3 text-center" style={{ background: 'var(--canvas-subtle)' }}>
          <div className="mono text-[13px] font-semibold">Global Schema</div>
          <div className="text-[13px]" style={{ color: 'var(--fg-muted)' }}>Most generic, universal schema for any declaration</div>
        </div>
        <div className="mx-auto h-5 w-px" style={{ background: 'var(--line)' }} />
        <div className="mx-auto hidden h-px w-[66.6%] sm:block" style={{ background: 'var(--line)' }} />
        <div className="grid gap-3 sm:grid-cols-3">
          {SCHEMAS.map((s) => (
            <div key={s.slug} className="flex flex-col items-center">
              <div className="hidden h-4 w-px sm:block" style={{ background: 'var(--line)' }} />
              <Link href={`/${s.slug}`} className="box block w-full p-3 text-center hover:no-underline" style={{ color: 'var(--fg)' }}>
                <div className="flex items-center justify-center gap-2 text-[13px] font-semibold">
                  <span className="dot" style={{ background: `var(--${s.slug})` }} />
                  {s.sector.split(' ')[0]}
                </div>
                <div className="mono mt-0.5 text-[12px]" style={{ color: 'var(--fg-muted)' }}>
                  {s.slug === 'metals' ? 'EN 10168' : s.slug === 'chemicals' ? 'Certificate of Analysis' : 'ForestrySource, Forestry'}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[12px]" style={{ color: 'var(--fg-muted)' }}>Material Schemas: narrower definitions</p>
      </div>
      <H3 id="worked-example">From readable to interpretable</H3>
      <p>
        A test method can be written many ways. Each form below is readable by a person, but software comparing strings sees three different methods.
      </p>
      <MvrExample />
      <p>
        The Chemicals schema maps these method forms to one property identifier, <code>38</code> for melt volume-flow rate (MVR), so receiving software files the value correctly without guessing.
      </p>

      {/* 4 Schemas */}
      <H2 id="schemas">Schemas</H2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SCHEMAS.map((s) => (
          <SchemaCard key={s.slug} s={s} />
        ))}
      </div>

      {/* 5 Conformity */}
      <H2 id="conformity">Built for automated conformity.</H2>
      <p>
        Shared definitions make buyer specifications and supplier declarations comparable, so software never has to guess what a property means. The same input gives the same answer, every time.
      </p>
      <p><em className="note">Material Identity defines how information is represented and interpreted. Independent applications perform the conformity assessment.</em></p>
      <p className="text-[14px]" style={{ color: 'var(--fg-muted)' }}>
        A schema makes deterministic matching possible within its scope; it does not itself prove the accuracy of a declaration.
      </p>

      {/* 6 Tools */}
      <H2 id="tools">Tools</H2>
      <p>Every schema ships with the tooling needed to produce, check and present declarations.</p>
      <div className="box my-4">
        {TOOLS.map(({ icon: Icon, t, d }) => (
          <div key={t} className="box-row flex items-start gap-3 px-4 py-3">
            <Icon size={16} className="mt-1 flex-none" style={{ color: 'var(--fg-muted)' }} />
            <div className="text-[14px]"><span className="font-semibold">{t}</span> <span style={{ color: 'var(--fg-muted)' }}>{d}</span></div>
          </div>
        ))}
        <div className="box-row flex items-center gap-3 px-4 py-3 text-[14px]" style={{ background: 'var(--canvas-subtle)' }}>
          <FileJson size={16} style={{ color: 'var(--fg-muted)' }} />
          <span>All in one central repository: <a href={GITHUB_REPO} className="mono">github.com/material-identity/schemas</a></span>
        </div>
      </div>

      {/* 7 Community */}
      <H2 id="community">Community</H2>
      {COMMUNITY.map((g) => (
        <div key={g.group} className="mb-6">
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

      {/* 8 Contribute */}
      <H2 id="contribute">Contribute</H2>
      <ul>
        <li>Report issues and propose changes through <a href={GITHUB_ISSUES}>GitHub issues</a>.</li>
        <li>Translations are added per language, so a new language can be contributed independently of schema changes.</li>
        <li>All schemas, examples, translations and documentation are open source under a copyleft licence.</li>
      </ul>
      <div className="flex flex-wrap gap-2">
        <a href={GITHUB_ISSUES} className="btn" data-testid="link-issues"><GitHubIcon /> Open an issue</a>
        <a href={GITHUB_REPO} className="btn" data-testid="link-repo">View repository</a>
      </div>
    </div>
  );
}

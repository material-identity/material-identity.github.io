import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'wouter';
import { H2, href, usePageMeta } from '@/components/site';
import imprint from '@/content/legal/imprint.md?raw';
import privacy from '@/content/legal/privacy_policy.md?raw';
import terms from '@/content/legal/terms_conditions.md?raw';

// Verbatim Markdown from origin/main:docs/*.md; do not edit legal wording here.
const DOCUMENTS = {
  '/imprint': imprint,
  '/privacy_policy': privacy,
  '/terms_conditions': terms,
};

export type LegalPath = keyof typeof DOCUMENTS;

export default function Legal({ path }: { path: LegalPath }) {
  usePageMeta(path);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="wrap">
      <article className="md min-w-0 break-words pb-8 pt-8">
        <nav className="mb-3 text-[14px]" aria-label="Breadcrumb">
          <Link href="/">material identity</Link>
          <span style={{ color: 'var(--fg-muted)' }}> / </span>
          <span className="font-semibold">{path.slice(1)}</span>
        </nav>
        <ReactMarkdown components={{
          h1: ({ children }) => <h1 className="mb-4 text-[28px] md:text-[32px]">{children}</h1>,
          h2: ({ children }) => (
            <H2 id={String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}>{children}</H2>
          ),
          a: ({ href: target, children }) => {
            // Preserve the source text while making its bare domain link usable.
            const url = target?.startsWith('/') ? href(target)
              : target === 'www.materialidentity.org' ? `https://${target}` : target;
            return <a href={url}>{children}</a>;
          },
        }}>{DOCUMENTS[path]}</ReactMarkdown>
      </article>
    </div>
  );
}

import type { ComponentType } from 'react';
import './_group.css';

export function OriginalMark({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="1" y="1" width="22" height="22" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 16V8l3 4 3-4v8M16 8v8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export function Study({ Mark, title, description, tradeoff }: {
  Mark: ComponentType<{ size?: number }>; title: string; description: string; tradeoff: string;
}) {
  return <div className="mi-study">
    <div style={{ padding: '20px 24px', background: '#f6f8fa', borderBottom: '1px solid #d1d9e0', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 16 }}>
      <Mark size={24} /><span>material identity</span>
    </div>
    <div style={{ padding: 28 }}>
      <div style={{ height: 165, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mark size={110} /></div>
      <h2 style={{ margin: '12px 0 10px', fontSize: 22, fontWeight: 600 }}>{title}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.6, margin: '0 0 20px', color: '#59636e' }}>{description}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 18, border: '1px solid #d1d9e0', borderRadius: 6 }}>
        {[16, 24, 32, 48].map(size => <div key={size} style={{ display: 'grid', justifyItems: 'center', gap: 12 }}><Mark size={size} /><span style={{ fontSize: 11, color: '#59636e' }}>{size} px</span></div>)}
      </div>
      <div style={{ background: '#0d1117', color: '#f0f6fc', padding: '18px 20px', marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, borderRadius: 6 }}><Mark size={24} /><span style={{ fontSize: 16, fontWeight: 600 }}>material identity</span></div>
      <p style={{ fontSize: 12, lineHeight: 1.6, marginTop: 18, color: '#59636e' }}>{tradeoff}</p>
    </div>
  </div>;
}

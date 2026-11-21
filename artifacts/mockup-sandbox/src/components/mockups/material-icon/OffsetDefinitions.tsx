function OffsetDefinitionsMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="4" />
      <circle cx="9.25" cy="10" r="4.05" />
      <path d="m15.15 11.55 4 4-4 4-4-4 4-4Z" />
    </svg>
  );
}

export function OffsetDefinitions() {
  const text = { fontFamily: 'system-ui, sans-serif', color: '#26333d' };
  const muted = { color: '#596873' };

  return (
    <main
      style={{
        width: '100%',
        minHeight: '100%',
        background: '#fbfcfa',
        border: '1px solid #d6dedb',
        borderRadius: 8,
        overflow: 'hidden',
        ...text,
      }}
    >
      <header
        style={{
          padding: '18px 24px',
          background: '#eef3f0',
          borderBottom: '1px solid #d6dedb',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          fontWeight: 650,
          fontSize: 15,
          letterSpacing: '-0.02em',
        }}
      >
        <OffsetDefinitionsMark size={24} />
        <span>material identity</span>
        <span style={{ ...muted, marginLeft: 'auto', fontSize: 11, fontWeight: 500 }}>
          MARK STUDY 04
        </span>
      </header>

      <section style={{ padding: '22px 26px 24px' }}>
        <div
          style={{
            height: 130,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#24343b',
          }}
        >
          <OffsetDefinitionsMark size={96} />
        </div>

        <div style={{ borderTop: '1px solid #e0e6e2', paddingTop: 17 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.13em', fontWeight: 700, color: '#687a76' }}>
            OFFSET NESTING
          </div>
          <h2 style={{ margin: '7px 0 8px', fontSize: 21, lineHeight: 1.2, letterSpacing: '-0.035em' }}>
            Distinct shapes, one boundary
          </h2>
          <p style={{ ...muted, fontSize: 13, lineHeight: 1.55, margin: 0 }}>
            A round definition and a crisp diamond sit on separate axes inside the same
            universal frame. Their offset keeps each form legible without losing the
            sense of a shared whole.
          </p>
        </div>

        <div
          style={{
            marginTop: 17,
            padding: '15px 13px 12px',
            border: '1px solid #dce3df',
            borderRadius: 7,
            background: '#f5f8f6',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13 }}>
            <span style={{ fontSize: 11, fontWeight: 650 }}>MONOCHROME FIT</span>
            <span style={{ ...muted, fontSize: 10 }}>outline / 1.8</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
            {[16, 24, 32, 48].map((size) => (
              <div key={size} style={{ display: 'grid', justifyItems: 'center', gap: 8, color: '#26373d' }}>
                <OffsetDefinitionsMark size={size} />
                <span style={{ ...muted, fontSize: 10 }}>{size}px</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 12,
            padding: '13px 16px',
            borderRadius: 6,
            background: '#26373d',
            color: '#f2f5f2',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <OffsetDefinitionsMark size={24} />
          <span style={{ fontSize: 14, fontWeight: 650, letterSpacing: '-0.02em' }}>material identity</span>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: '#c3d0cb' }}>ICON PREVIEW</span>
        </div>

        <p style={{ ...muted, fontSize: 11, lineHeight: 1.5, margin: '13px 1px 0' }}>
          Asymmetry adds distinction; a centered outer frame restores balance. The open
          contours preserve a quiet, readable silhouette at 16px and 24px.
        </p>
      </section>
    </main>
  );
}

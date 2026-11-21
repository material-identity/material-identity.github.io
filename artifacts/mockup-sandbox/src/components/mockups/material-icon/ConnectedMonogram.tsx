import { Study } from './_Study';

function ConnectedMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 19V5l7.5 8L19 5v14M15.5 5H21M15.5 19H21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConnectedMonogram() {
  return (
    <Study
      Mark={ConnectedMark}
      title="Connected monogram"
      description="An open M folds into an I: the final upright is shared, with small cross-strokes completing the second initial. No enclosing badge."
      tradeoff="The shared stem makes the initials feel like one mark and removes the extra border detail. At tiny sizes, the compact I cross-strokes may merge visually; the concept reads more as an ownable letterform than as a symbol for shared semantics."
    />
  );
}

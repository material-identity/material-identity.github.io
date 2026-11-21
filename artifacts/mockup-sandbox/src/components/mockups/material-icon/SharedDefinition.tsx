import { Study } from './_Study';

function SharedDefinitionMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M12 3v5c-2.5 0-2.5 4 0 4" />
      <path d="M3 12h5c0 2.5 4 2.5 4 0h9" />
    </svg>
  );
}

export function SharedDefinition() {
  return (
    <Study
      Mark={SharedDefinitionMark}
      title="Different definitions, one whole"
      description="Three separate fields fit together inside one frame: distinct material definitions, joined as parts of a shared schema."
      tradeoff="The enclosing shape makes the idea of one shared whole more immediate, while the puzzle-like joins suggest fit without implying that the underlying standards lose their identity. At 16 px, the inner joins are subtle."
    />
  );
}

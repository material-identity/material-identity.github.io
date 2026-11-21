import { Study } from './_Study';

function SharedDefinition16Mark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M12 4v8M4 12h16" />
    </svg>
  );
}

export function SharedDefinition16() {
  return (
    <Study
      Mark={SharedDefinition16Mark}
      title="Different definitions, one whole"
      description="Three distinct spaces meet cleanly inside one shared frame. Each definition keeps its place; together they make a coherent schema."
      tradeoff="A simple T-junction replaces the finer puzzle contours, keeping the shared boundary and three-part structure legible even at 16 px."
    />
  );
}

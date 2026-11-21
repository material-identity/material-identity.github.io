import { Study } from './_Study';

function NestedDefinitionsMark({ size = 24 }: { size?: number }) {
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
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="3.4" />
      <circle cx="12" cy="12" r="6.1" />
      <path d="M12 8.9 15.1 12 12 15.1 8.9 12 12 8.9Z" />
    </svg>
  );
}

export function NestedDefinitions() {
  return (
    <Study
      Mark={NestedDefinitionsMark}
      title="Distinct definitions, nested in one"
      description="A universal boundary holds two clearly different definition shapes: a round inner field and a crisp diamond nested at its center."
      tradeoff="The square, circle, and diamond create a simple hierarchy of containment without implying that the definitions merge. Their centered geometry stays legible in monochrome at 16 px and opens up cleanly at 24 px."
    />
  );
}

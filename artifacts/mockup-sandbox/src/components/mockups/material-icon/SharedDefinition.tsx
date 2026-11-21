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
      <path d="M5 7h13M8 12h10M11 17h7" />
      <path d="M19 5.5v13" />
    </svg>
  );
}

export function SharedDefinition() {
  return (
    <Study
      Mark={SharedDefinitionMark}
      title="Shared definition"
      description="Three differently sized representation lines meet one steady edge: varied material records, aligned to a common meaning."
      tradeoff="The open, unboxed construction stays clear at small sizes and avoids literal initials. Its alignment metaphor is understated, so it may read as a tidy list before it reads as shared semantics."
    />
  );
}

import { Study } from './_Study';

function MaterialLayersMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 7.1 12 3.5l8.5 3.6-8.5 3.6-8.5-3.6Z" />
      <path d="m3.5 11.1 8.5 3.6 8.5-3.6" />
      <path d="m3.5 15.1 8.5 3.6 8.5-3.6" />
      <path d="M3.5 7.1v8M12 10.7v8M20.5 7.1v8" />
    </svg>
  );
}

export function MaterialLayers() {
  return (
    <Study
      Mark={MaterialLayersMark}
      title="Material layers"
      description="A compact cross-section: one shared foundation, expressed as distinct, stacked planes. The open edges keep the mark about structure rather than a sealed object."
      tradeoff="The layered silhouette suggests tangible material and a common basis without relying on initials. At 16 px, the repeated seams can soften together, and the form is less immediately literal than the MI badge."
    />
  );
}

import { H2 } from '@/components/site';
import { SchemaDoc, TOOLS_TEXT } from '@/components/schema-doc';

const TOC = [
  { id: 'purpose', label: 'Purpose' },
  { id: 'structure', label: 'Structure at a glance' },
  { id: 'components', label: 'Reusable components' },
  { id: 'features', label: 'Key features' },
  { id: 'tools', label: 'Tools' },
  { id: 'links', label: 'Field reference' },
];

export default function Metals() {
  return (
    <SchemaDoc path="/metals" slug="metals" sector="Metals" title="EN 10168" version="v0.5.0" reference="https://materialidentity.org/en10168/" toc={TOC}>
      <H2 id="purpose">Purpose</H2>
      <p>
        The European standard EN 10168 defines the information carried by inspection documents for steel products, organised as five groups of numbered fields. This schema is a well-defined JSON representation that matches the standard, so each numbered field has one precise, machine-interpretable meaning.
      </p>
      <H2 id="structure">Structure at a glance</H2>
      <table>
        <thead><tr><th>Group</th><th>Fields</th><th>Contents</th></tr></thead>
        <tbody>
          <tr><td><code>A</code></td><td className="mono">A01–A99</td><td>Commercial transactions and parties</td></tr>
          <tr><td><code>B</code></td><td className="mono">B01–B99</td><td>Description of products</td></tr>
          <tr><td><code>C</code></td><td className="mono">C00–C99</td><td>Inspection; chemistry extended to <code>C109</code></td></tr>
          <tr><td><code>D</code></td><td className="mono">D01–D99</td><td>Other tests</td></tr>
          <tr><td><code>Z</code></td><td className="mono">Z01–Z99</td><td>Validation</td></tr>
        </tbody>
      </table>
      <H2 id="components">Reusable components</H2>
      <table>
        <thead><tr><th>Component</th><th>Holds</th></tr></thead>
        <tbody>
          <tr><td><code>ChemicalElement</code></td><td>Symbol, actual value, optional min and max, unit</td></tr>
          <tr><td><code>Company</code></td><td>Address plus VAT, DUNS or CAGE identifiers</td></tr>
          <tr><td><code>Measurement</code></td><td>Property, value, unit, min, max</td></tr>
          <tr><td><code>ProductShape</code></td><td>Product description and shape (tube, bar, coil, sheet, plate, strip and more) with dimensions</td></tr>
          <tr><td><code>KeyValue</code></td><td>Typed supplementary values: <code>string</code>, <code>number</code>, <code>date</code>, <code>date-time</code>, <code>boolean</code>, <code>url</code>, <code>phone</code>, <code>email</code>, <code>image</code></td></tr>
        </tbody>
      </table>
      <H2 id="features">Key features</H2>
      <ul>
        <li>Chemistry extends the standard range <code>C71</code>–<code>C92</code>, because real certificates list more elements.</li>
        <li>Detailed metallurgical processes can be declared.</li>
        <li>A designated CO<sub>2</sub> equivalent field, <code>B99</code>.</li>
        <li>Standardized PDF and HTML layout.</li>
        <li>Rendering in one or two languages, with localized dates and numbers.</li>
      </ul>
      <H2 id="tools">Tools</H2>
      {TOOLS_TEXT}
    </SchemaDoc>
  );
}

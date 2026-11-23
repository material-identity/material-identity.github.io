import { H2, MvrExample } from '@/components/site';
import { SchemaDoc, TOOLS_TEXT } from '@/components/schema-doc';
import { SCHEMA_FOLDERS } from '@/lib/pages';

const TOC = [
  { id: 'purpose', label: 'Purpose' },
  { id: 'structure', label: 'Structure at a glance' },
  { id: 'features', label: 'Key features' },
  { id: 'harmonization', label: 'Property harmonization' },
  { id: 'tools', label: 'Tools' },
  { id: 'links', label: 'Field reference' },
];

const ROWS: [string, string][] = [
  ['Certificate', 'Languages, identifier, date, standard (e.g. EN 10204 3.1)'],
  ['Parties', 'Manufacturer, customer, optional receiver'],
  ['BusinessTransaction', 'Order, optional order confirmation, delivery'],
  ['Product', 'Identifier, name, origin, batch identifiers, dates, standards'],
  ['Analysis', 'Inspections: property, method, value, value type, min, max, unit, test conditions'],
  ['DeclarationOfConformance', 'Declaration, optional CE marking'],
  ['Disclaimer', 'Legal disclaimer text'],
  ['Attachments', 'Files embedded with a hash'],
  ['Contacts', 'Responsible contact persons'],
];

export default function Chemicals() {
  return (
    <SchemaDoc path="/chemicals" slug="chemicals" sector="Chemicals & Plastics" title="Certificate of Analysis" version="v1.1.0" licence="Apache-2.0" reference={SCHEMA_FOLDERS.chemicals} toc={TOC}>
      <H2 id="purpose">Purpose</H2>
      <p>
        Manufacturers deliver a certificate of analysis with every batch. This schema replaces PDF and proprietary EDI formats with open, extensible JSON. It was developed with BASF, a fittings manufacturer and S1SEVEN, and released as open source.
      </p>
      <H2 id="structure">Structure at a glance</H2>
      <table>
        <thead><tr><th>Section</th><th>Contents</th></tr></thead>
        <tbody>{ROWS.map(([k, v]) => <tr key={k}><td><code>{k}</code></td><td>{v}</td></tr>)}</tbody>
      </table>
      <H2 id="features">Key features</H2>
      <ul>
        <li>Standardized CAMPUS property identifiers recognize a property regardless of how its method is spelled; property names are translated via the identifiers.</li>
        <li>Attachments carry a hash: test curves, processing instructions based on OPC and EUROMAP, data sheets.</li>
        <li>Standardized layout for PDF and HTML.</li>
        <li>Rendering in one or two languages.</li>
      </ul>
      <H2 id="harmonization">Property harmonization</H2>
      <p>Three spellings of the same test method resolve to a single, machine-interpretable identifier:</p>
      <MvrExample />
      <H2 id="tools">Tools</H2>
      {TOOLS_TEXT}
    </SchemaDoc>
  );
}

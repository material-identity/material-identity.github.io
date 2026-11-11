import { H2, H3 } from '@/components/site';
import { SchemaDoc, TOOLS_TEXT } from '@/components/schema-doc';

const TOC = [
  { id: 'purpose', label: 'Purpose' },
  { id: 'structure', label: 'Structure at a glance' },
  { id: 'forestry-source', label: 'ForestrySource' },
  { id: 'forestry-record', label: 'Forestry' },
  { id: 'features', label: 'Key features' },
  { id: 'tools', label: 'Tools' },
  { id: 'links', label: 'Field reference' },
];

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <table>
      <thead><tr><th>Group</th><th>Contents</th></tr></thead>
      <tbody>{rows.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}</tbody>
    </table>
  );
}

export default function Forestry() {
  return (
    <SchemaDoc path="/forestry" slug="forestry" sector="Forestry & Timber" title="ForestrySource and Forestry" version="v0.0.1" reference="https://materialidentity.org/forestry/" toc={TOC}>
      <H2 id="purpose">Purpose</H2>
      <p>
        Standardized documentation of harvested wood from the forest to the final product, supporting the EU Deforestation Regulation (EUDR), the US Lacey Act and similar legal harvest and traceability requirements.
      </p>
      <H2 id="structure">Structure at a glance</H2>
      <p>Two schemas work together: <code>ForestrySource</code> records origin at harvest, and <code>Forestry</code> records each supply chain transaction.</p>
      <H3 id="forestry-source">ForestrySource: origin at harvest</H3>
      <Table rows={[
        ['Location', 'Country, state, forest concession'],
        ['Authorization', 'Harvest authorization; optional certification number and claim (FSC or PEFC)'],
        ['Harvest units', 'GeoJSON points or polygons'],
        ['Products', 'Common and scientific species name, quantity'],
        ['Parties', 'Supplier, producer, creator'],
        ['Documents', 'Referenced by hash and URL'],
        ['Due diligence', 'Due diligence statement'],
      ]} />
      <H3 id="forestry-record">Forestry: each supply chain transaction</H3>
      <Table rows={[
        ['Transaction', 'Purchase or sales order, delivery, packing list, bill of lading, container and lot references'],
        ['Products', 'Products in the transaction'],
        ['Parties', 'Supplier, producer, customer, creator'],
        ['Documents', 'Certificate of origin, phytosanitary certificate, chain-of-custody certificate, Lacey Act PPQ 505'],
        ['EUDR', 'Due diligence statement reference and verification number from EU TRACES'],
        ['References', 'Earlier Forestry and ForestrySource records'],
        ['Due diligence', 'Due diligence statement'],
      ]} />
      <H2 id="features">Key features</H2>
      <ul>
        <li>A single record instead of scattered documents.</li>
        <li>Precise geolocation of harvest units.</li>
        <li>Supporting documents secured by cryptographic hashes.</li>
        <li>A verifiable chain of custody through references to earlier records.</li>
        <li>Rendering in multiple languages.</li>
      </ul>
      <H2 id="tools">Tools</H2>
      {TOOLS_TEXT}
    </SchemaDoc>
  );
}

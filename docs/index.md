---
home: true
sidebar: auto
title: Digital Certificates of Analysis
tagline: An Open Source JSON Schema to create easy-to-consume digital material certificates unlocking the value of actual material data.

yesterday:
  - details: Every year hundreds of millions of certificates of analysis for metals and plastics are exchanged as PDF documents between companies worldwide.
  - details: Due to the large variety of formats, the automated processing of PDF documents is complicated and often fails. In the end, humans perform the tedious processing of certificates.
  - details: Material certificates contain measured data helpful for optimizing the usage and processing of the materials. The potential reduction in resource consumption goes unrealized.

today:
  - details: Producers and users of materials, technology companies, and consultants serving these industries are developing collaboratively electronic data formats.
  - details: Industry stakeholders can use the open-sourced data formats to their maximum benefit and contribute to further development.
  - details: The specification and implementation are state-of-the-art technologies and development practices for easy implementation and extensibility.

benefits:
  - title: for goods acceptance
    details: Automate the assignment of certificates to orders, delivery notes, and goods receipts.
  - title: for quality management
    details: Automate the validation and approval process for materials against normative or custom specifications.
  - title: for production
    details: Use actual material data to optimize the parameterization of processing equipment.
  - title: for procurement
    details: Compare and evaluate suppliers based on actual material quality data.
  - title: for data scientists
    details: Use actual material data to improve product performance and reduce production costs.
  - title: for sustainability managers
    details: Use optional PCF information to calculate precise Scope 3 emissions.

featurelist:
  - title: for issuers
    line1: Offer higher value to customers by new products combing materials with its data in digital form.
    line2: Leverage the flexibility of modern electronic data formats to fulfill customer desires.
    line3: Reduce implementation and maintenance costs for creating material certificates.
  - title: for receivers
    line1: Receive certificates in electronic data format and standardized PDF being backward-compatible.
    line2: Use open source tools to process and visualize data in the preferred form.
    line3: Extract test results with standard libraries.
  - title: for developers
    line1: Use tools and libraries complementing the electronic data format for validation and visualization
    line2: Deliver quickly high-value based on contributions by the community and excellent documentation
    line3: Use the electronic data format and tools open sourced with libraries, not limiting the usage to build solutions.

tomorrow:
  - details: New versions add virtual material data such as recycling share and carbon footprint to simplify the world's decarbonization efforts.
  - details: High-quality electronic data are fundamental for the traceability of materials in the circular economy.
  - details: Principles of good open source projects are applied to evolve standards fast in the highest quality.

documentation:
  - details: The technical specification of the electronic data format and examples for CoAs for plastics is available at.
  - details: The format documentation and description of features maximizing the utility for a broad spectrum of applications are available at.
  - details: The contributed tools to support high-quality and fast implementation quickly are available at

footer: Made by  with ❤️
---

<h1>Yesterday</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.yesterday">
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Today</h1>
<p>BASF SE, in collaboration with Julius Blum Gmbh and S1Seven Gmbh, developed the data format for Certificates of Analysis and released it to the industry as Open Source.</p>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.today">
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Benefits</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.benefits">
    <h2>{{ feat.title}}</h2>
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Features</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.featurelist">
    <h2>{{ feat.title }}</h2>
    <ol>
      <li>{{ feat.line1 }}</li>
      <li>{{ feat.line2 }}</li>
      <li>{{ feat.line3 }}</li>
    </ol>
  </div>
</div>

<h1>Tomorrow</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.tomorrow">
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Documentation</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.documentation">
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Community</h1>
<p>Initial contributors and early adopters include</p>
<h2>Here go the logos of BASF, Blum, S1Seven and others</h2>

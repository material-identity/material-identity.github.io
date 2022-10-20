---
home: true
sidebar: auto
title: Material Identity
tagline: An Open Source JSON structure for Digital Certificates of Analysis, unlocking the value of data.

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

---

<h1>Yesterday</h1>
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.yesterday">
    <p>{{ feat.details }}</p>
  </div>
</div>

<h1>Today</h1>
<p><a href="https://basf.com" target="_blank">BASF SE</a>, in collaboration with <a href="https://blum" target="_blank">Julius Blum Gmbh</a> and <a href="https://s1seven.com" target="_blank">S1Seven Gmbh</a>, developed the data format for Digital Certificates of Analysis and released it to the industry as Open Source.</p>
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
  <div class="feature">
    <p>The technical specification of the electronic data format and examples for CoAs for plastics is available at <a href="https://github.com/thematerials-network/" target="_blank">CoA Schema</a>.</p>
  </div>
  <div class="feature">
    <p>The format documentation and description of features maximizing the utility for a broad spectrum of applications are available at <a href="https://materialidentity.org/coa" target="_blank">CoA Documentation</a>.</p>
  </div>
  <div class="feature">
    <p>The format documentation and description of features maximizing the utility for a broad spectrum of applications are available at <a href="https://github.com/s1seven/schema-tools" target="_blank">Schema Tools</a>.</p>
  </div>
</div>

<h1>Community</h1>
<p>Initial contributors and early adopters include</p>
<div class="footer" style="border-top:0px; padding-top: 10px;"><p class="description">
  <a href="https://basf.com" target="_blank">
    <img src="./assets/BASF.png" alt="BASF SE" width="120" height="60" style="margin-right: 20px;margin-left: 20px">
  </a>
  <!--<a href="https://blum.com"><img src="./assets/Blum.png" alt="Julius Blum" width="120" height="60" style="margin-right: 20px;margin-left: 20px"></a>-->
   <a href="https://www.synthotec.com" target="_blank">
    <img src="./assets/synthotec.png" alt="SynthoTec" height="32" style="margin-right: 20px;margin-left: 20p; margin-top: 12px; margin-bottom: 12px">
  </a>
  </p>
</div>
<p>Technology Providers</p>
<div class="footer" style="border-top:0px; padding-top: 10px;"><p class="description">
  <a href="https://s1seven.com" target="_blank">
    <img src="./assets/S1SEVEN.png" alt="S1SEVEN" height="24" style="margin-right: 20px;margin-left: 20px; margin-top: 16px; margin-bottom: 16px">
  </a>
  <a href="https://concircle.com" target="_blank">
    <img src="./assets/CONCIRCLE.png" alt="concircle" height="24" style="margin-right: 20px;margin-left: 20p; margin-top: 16px; margin-bottom: 16px">
  </a>
  <a href="https://material.one" target="_blank">
    <img src="./assets/material.one.png" alt="concircle" height="34" style="margin-right: 20px;margin-left: 20p; margin-top: 13px; margin-bottom: 13px">
  </a>
</p>
</div>

::: slot footer
[Terms and Conditions](/terms_conditions) [Privacy Policy](/privacy_policy) [Imprint](/imprint)
:::

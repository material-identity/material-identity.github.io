module.exports = {
  title: "Material Identity",
  head: [
    [
      "script",
      {
        src: "https://cdn.splitbee.io/sb.js",
        async: true,
        "no-cookie": true,
        "data-respect-dnt": true,
      },
    ],
  ],
  plugins: ["vuepress-plugin-mermaidjs"],
  themeConfig: {
    repoLabel: "Git",
    docsDir: "docs",
    nav: [
      { text: "Docs", link: "/coa/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: [
      ["/coa/", "Docs"],
      ["/about/", "About"],
    ],
  },
};

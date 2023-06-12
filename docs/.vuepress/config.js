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
        { text: 'CoA', link: '/coa/' },
        { text: 'EN 10168', link: '/en10168/' },
        { text: 'About', link: '/about/' }
    ], 
    sidebar: [
      ['/coa/', 'CoA'],
      ['/en10168/', 'EN 10168'],
      ['/about/', 'About'],
    ]
  }
};

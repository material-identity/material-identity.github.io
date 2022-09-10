module.exports = {
  title: "Digital Certificates of Analysis",
  plugins: ["vuepress-plugin-mermaidjs"],
  themeConfig: {
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [
        { text: 'Docs', link: '/coa/' },
        { text: 'About', link: '/about/' }
    ], 
    sidebar: [
      ['/coa/', 'Docs'],
      ['/about/', 'About'],
    ]
  }
};

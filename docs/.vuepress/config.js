module.exports = {
  title: "Material Identity",
  plugins: ["vuepress-plugin-mermaidjs"],
  themeConfig: {
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [
        { text: 'CoA', link: '/coa/' },
        { text: 'EN10168', link: '/en10168/' },
        { text: 'About', link: '/about/' }
    ], 
    sidebar: [
      ['/coa/', 'CoA'],
      ['/en10168/', 'EN10168'],
      ['/about/', 'About'],
    ]
  }
};

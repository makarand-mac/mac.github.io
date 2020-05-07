module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Mac's thoughts`,
    author: `Makarand Deshpande`,
    description: `My random thoughts, anything from Computer Science to Philosophy :)`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/makarand_mac`,
      },
      {
        name: `Github`,
        url: `https://github.com/makarand-mac`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/makarand-mac`
      }
    ],
  },
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: `gatsby-plugin-sass`,
        options: {
          implementation: require("sass"),
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Randy Phalla's Portfolio Website`,
        short_name: `RP Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Montserrat`,
              variants: [`600`, `700`]
            },
            {
                family: `Raleway`,
                variants: [`200`, `500`, `600`, `700`]
              },
          ],
        },
    },
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            displayName: false
        },
    }
  ],
}

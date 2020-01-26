module.exports = {
  siteMetadata: {
    title: `Randy Phalla`,
    description: `I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps.`,
    author: `randyphalla@gmail.com`,
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
        background_color: `#FFFFFF`,
        theme_color: `#FF001F`,
        display: `minimal-ui`,
        icon: `src/images/randyphalla-icon.png`, // This path is relative to the root of the site.
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
              variants: [`300`, `400`, `500`, `700`]
            },
          ],
        },
    },
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            displayName: false
        },
    },
  ],
}

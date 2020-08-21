module.exports = {
  siteMetadata: {
    title: `Randy Phalla`,
    description: `I’m a Front-end Developer and Designer based in London, Ontario Canada. I am passionate about creating aesthetically websites and designs. I can translate your artwork files (Photoshop, Illustrator, Sketch, Figma, etc.) and prototype them into web or mobile using HTML5, CSS3, and JavaScript. I’m currently working at Devlift Media as a Web Developer, building websites and mobile apps with the latest web technologies such as HTML5, CSS3 (SCSS), JavaScript (ES5/6), TypeScript, Angular, Ionic, ReactJS and React Native.`,
    author: `randyphalla@gmail.com`,
    siteUrl: `http://randyphalla.github.io/`,
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
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      }
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
            variants: [`300`, `500`]
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://randyphalla.github.io/',
        sitemap: 'http://randyphalla.github.io/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111702075-1",
        head: true,
      }
    }
  ]
}

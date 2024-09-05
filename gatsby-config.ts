module.exports = {
  siteMetadata: {
    title: `Randy Phalla`,
    description: `I'm a Front-end Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in responsive design, accessibility, and UI/UX.`,
    author: `randyphalla@gmail.com`,
    siteUrl: `http://randyphalla.github.io/`,
    twitterUrl: `https://twitter.com/devrandyp`,
    defaultImg: `/images/randyphalla-icon.png`,
    twitterImg: `/images/randyphalla-icon.png`,
    twitterUsername: `@devrandyp`,
    instagramUsername: `@randyphalla`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
      // options: {
      //   // implementation: require("sass"),
      //   cssLoaderOptions: {
      //     esModule: false,
      //     modules: {
      //       namedExport: false,
      //     },
      //   },
      // },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Randy Phalla's Portfolio Website`,
        short_name: `RP Portfolio`,
        description: `I'm a Full Stack Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in responsive design, accessibility, and UI/UX.`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FF001F`,
        display: `standalone`,
        icon: `src/images/randyphalla-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:600,700`,
          `Raleway\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
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
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      }
    },
  ],
  flags: {
    DEV_SSR: false,
  },
}

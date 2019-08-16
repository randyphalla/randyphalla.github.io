const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/templates/portfolio.js"))),
  "component---src-templates-portfolio-details-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/templates/portfolio-details.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/index.js")))
}


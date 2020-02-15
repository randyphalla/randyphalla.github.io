const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/templates/portfolio.js"))),
  "component---src-templates-portfolio-details-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/templates/portfolio-details.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/index.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("/Users/randyphalla/Documents/Projects/randyphalla.github.io/src/pages/uses.js")))
}


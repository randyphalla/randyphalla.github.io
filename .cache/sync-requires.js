const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/randyphalla/Documents/Randy/randyphalla.github.io/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/randyphalla/Documents/Randy/randyphalla.github.io/src/pages/index.tsx"))),
  "component---src-pages-uses-tsx": hot(preferDefault(require("/Users/randyphalla/Documents/Randy/randyphalla.github.io/src/pages/uses.tsx")))
}


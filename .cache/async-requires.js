// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("./../node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-portfolio-js": () => import("./../src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-templates-portfolio-details-js": () => import("./../src/templates/portfolio-details.js" /* webpackChunkName: "component---src-templates-portfolio-details-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-uses-js": () => import("./../src/pages/uses.js" /* webpackChunkName: "component---src-pages-uses-js" */)
}


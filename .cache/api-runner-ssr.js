var plugins = [{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Randy Phalla's Portfolio Website","short_name":"RP Portfolio","description":"I’m a Front-end Developer and Designer based in London, Ontario Canada. I am passionate about creating aesthetically websites and designs. I can translate your artwork files (Photoshop, Illustrator, Sketch, Figma, etc.) and prototype them into web or mobile using HTML5, CSS3, and JavaScript. I’m currently working at Devlift Media as a Web Developer, building websites and mobile apps with the latest web technologies such as HTML5, CSS3 (SCSS), JavaScript (ES5/6), TypeScript, Angular, Ionic, ReactJS and React Native.","start_url":"/","background_color":"#FFFFFF","theme_color":"#FF001F","display":"standalone","icon":"src/images/randyphalla-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e5a34021602099216a533edae145fc02"},
    },{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Montserrat:600,700","Raleway:400"],"display":"swap"},
    },{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":false,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/randyphalla/Documents/Randy/randyphalla.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-111702075-1","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

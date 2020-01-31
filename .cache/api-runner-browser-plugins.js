module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Randy Phalla's Portfolio Website","short_name":"RP Portfolio","start_url":"/","background_color":"#FFFFFF","theme_color":"#FF001F","display":"minimal-ui","icon":"src/images/randyphalla-icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

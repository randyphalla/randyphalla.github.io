module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Randy Phalla's Portfolio Website","short_name":"RP Portfolio","description":"I’m a Front-end Developer and Designer based in London, Ontario Canada. I am passionate about creating aesthetically websites and designs. I can translate your artwork files (Photoshop, Illustrator, Sketch, Figma, etc.) and prototype them into web or mobile using HTML5, CSS3, and JavaScript. I’m currently working at Devlift Media as a Web Developer, building websites and mobile apps with the latest web technologies such as HTML5, CSS3 (SCSS), JavaScript (ES5/6), TypeScript, Angular, Ionic, ReactJS and React Native.","start_url":"/","background_color":"#FFFFFF","theme_color":"#FF001F","display":"standalone","icon":"src/images/randyphalla-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e5a34021602099216a533edae145fc02"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-111702075-1","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

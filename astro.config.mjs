import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
// import partytown from "@astrojs/partytown";
// import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://randyphalla.github.io/',
  integrations: [
    react({
      include: ['**/react/*']
    }),
    tailwind(),
    sitemap({
      customPages: ['https://randyphalla.github.io', 'https://symphonious-torte-5a2754.netlify.app/']
    }),
    // partytown({
    //   config: {
    //     forward: ["dataLayer.push"],
    //   },
    // }),
  ],
  // output: 'server',
  // adapter: netlify(),
});
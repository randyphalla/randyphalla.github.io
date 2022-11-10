import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";
// If you wanna use edge-function, comment out import netlify from "@astrojs/netlify/functions"
// import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://randyphalla.github.io',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      customPages: [
        'https://randyphalla.github.io',
        'https://symphonious-torte-5a2754.netlify.app/',
      ],
    }),
  ],
  server: {
    port: 4200
  },
  output: "server",
  adapter: netlify()
});
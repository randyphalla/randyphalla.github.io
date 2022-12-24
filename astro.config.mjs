import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://randyphalla.github.io',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      customPages: [
        'https://randyphalla.github.io',
        'https://symphonious-torte-5a2754.netlify.app/'
      ],
    }),
    partytown({
      config: {
        debug: true,
        forward: ["dataLayer.push"],
      },
    }),
  ],
  server: {
    port: 4200
  },
  output: "server",
  adapter: netlify()
});
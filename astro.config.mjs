import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://randyphalla.github.io',
  base: 'https://github.com/randyphalla/randyphalla.github.io',
  integrations: [
    react({
      include: ['**/react/*']
    }),
    tailwind(),
    sitemap({
      customPages: ['https://randyphalla.github.io', 'https://symphonious-torte-5a2754.netlify.app/']
    }),
  ],
  output: 'server',
  adapter: netlify(),
});

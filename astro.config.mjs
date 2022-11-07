import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";
// If you wanna use edge-function, comment out import netlify from "@astrojs/netlify/functions"
// import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    port: 4200
  },
  site: 'https://randyphalla.github.io',
  output: "server",
  adapter: netlify()
});
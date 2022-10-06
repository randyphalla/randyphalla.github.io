import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
  ],
  server: { port: 4200 } // THIS PORT WILL CHANGE TO ANY PORT (DEFAULT 3000)
});
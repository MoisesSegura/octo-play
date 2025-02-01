import { defineConfig } from 'astro/config';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://moisessegura.github.io',
  base: 'octo-play', 
});
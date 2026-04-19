import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/dra-carolinaidez/',
  integrations: [tailwind()],
  site: 'https://nickmaukan.github.io/dra-carolinaidez/',
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  }
});
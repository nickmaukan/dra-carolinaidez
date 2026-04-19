import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nickmaukan.github.io',
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  }
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dra-carolinaidez.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
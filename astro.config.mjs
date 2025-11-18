import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // No necesitamos la integración @astrojs/tailwind para v4
  vite: {
    css: {
      postcss: './postcss.config.js'
    }
  }
});
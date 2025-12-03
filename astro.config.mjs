// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // 👇 ¡ESTA ES LA LÍNEA CLAVE QUE FALTABA!
  // Sin esto, Astro sigue generando archivos estáticos y los formularios no funcionarán.
  output: 'server',
  image:{
    domains: ['images.unsplash.com'],
  },
  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    plugins: [tailwindcss()],
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },
});
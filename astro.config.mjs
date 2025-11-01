// @ts-check

// 👇 ¡AÑADE ESTAS DOS LÍNEAS ARRIBA!
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 👇 ¡AÑADE ESTA LÍNEA!
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    
    // 👇 ¡EL ALIAS VA AQUÍ DENTRO!
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
  // ‼️ ¡ASEGÚRATE DE BORRAR EL BLOQUE "alias: { ... }" QUE ESTABA AQUÍ AFUERA!
});
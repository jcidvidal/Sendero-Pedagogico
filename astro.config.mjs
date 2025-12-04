// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import netlify from '@astrojs/netlify';
import { loadEnv } from 'vite'; // <--- Importante

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Importante para poder actualizar fácil la URL del backend

// 1. Cargar las variables de entorno actuales (según el modo 'production' o 'development')
const { PUBLIC_SUPABASE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// 2. Limpiar la URL para obtener solo el dominio
// Si existe la URL, le quita 'https://' y la barra final. Si no, devuelve null.
const supabaseDomain = PUBLIC_SUPABASE_URL 
  ? PUBLIC_SUPABASE_URL.replace('https://', '').replace(/\/$/, '')
  : "";

// https://astro.build/config
export default defineConfig({
  // 👇 ¡ESTA ES LA LÍNEA CLAVE QUE FALTABA!
  // Sin esto, Astro sigue generando archivos estáticos y los formularios no funcionarán.
  output: 'server',
  image:{
    domains: ['images.unsplash.com', supabaseDomain].filter(Boolean), // Filtra null si no hay dominio
  },
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },
});
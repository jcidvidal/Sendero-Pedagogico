// src/content/config.js
import { defineCollection, z } from 'astro:content';

// --- Colección de Historias (ya existe) ---
const historiasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    resumen: z.string(),
    fecha: z.date(),
    creditos: z.string().optional(),
    publicado: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(), 
  }),
});

// --- 👇 ¡NUEVO! Colección de Glosario (RF-04) 👇 ---
const glosarioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    palabra: z.string(), //
    significado: z.string(), //
  }),
});

// --- 👇 ¡ACTUALIZADO! Exporta AMBAS colecciones ---
export const collections = {
  'historias': historiasCollection,
  'glosario': glosarioCollection, // <-- ¡Añade esta línea!
};
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Definimos la colección "historias"
const historiasCollection = defineCollection({
  type: 'content', // Significa que son archivos .md o .mdx
  schema: z.object({
    title: z.string(),
    resumen: z.string(),
    // (Opcional) Puedes añadir más campos aquí, como:
    // cover: z.string().optional(),
    // fecha: z.date().optional(),
  }),
});

export const collections = {
  'historias': historiasCollection,
};
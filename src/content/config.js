// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const historiasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // 
    resumen: z.string(), // 
    fecha: z.date(), // 
    creditos: z.string().optional(), // 
    publicado: z.boolean().default(true), // 
    tags: z.array(z.string()).optional(), // 
    // Usamos un string para la ruta de la imagen [cite: 117]
    cover: z.string().optional(), 
  }),
});

export const collections = {
  'historias': historiasCollection,
};
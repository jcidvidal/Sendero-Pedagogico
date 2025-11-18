// src/content/config.js
import { defineCollection, z } from 'astro:content';

// Define la colección de historias
const historias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    creditos: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publicado: z.boolean().default(true),
    cover: z.string().optional()
  })
});

// Define la colección de glosario (si existe)
const glosarioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    palabra: z.string(),  // Cambiado de "termino" a "palabra"
    significado: z.string(), // Cambiado de "definicion" a "significado"
    categoria: z.string().optional(),
  }),
});

// Exporta SOLO UNA VEZ todas las colecciones
export const collections = {
  historias,
  glosario: glosarioCollection
  // puedes agregar más colecciones aquí
};
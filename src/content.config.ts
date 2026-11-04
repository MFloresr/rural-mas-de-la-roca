// Esquemas del contenido. Cada colección equivale a un tipo de documento del CMS (Sanity):
// alojamientos, experiencias, estaciones, opiniones, preguntas y entradas del diario.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const alojamientos = defineCollection({
  loader: file('src/content/datos/alojamientos.json'),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      tipo: z.string(),
      personas: z.number(),
      habitaciones: z.number(),
      banos: z.number(),
      metros: z.number(),
      precioNoche: z.number(), // precio base en temporada baja
      resumen: z.string(),
      descripcion: z.array(z.string()),
      incluye: z.array(z.string()),
      foto: image(),
      fotoAlt: z.string(),
      orden: z.number(),
    }),
});

const experiencias = defineCollection({
  loader: file('src/content/datos/experiencias.json'),
  schema: ({ image }) =>
    z.object({ nombre: z.string(), texto: z.string(), duracion: z.string(), cuando: z.string(), precio: z.string(), foto: image(), fotoAlt: z.string() }),
});

const estaciones = defineCollection({
  loader: file('src/content/datos/estaciones.json'),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      meses: z.string(),
      frase: z.string(),
      texto: z.string(),
      hacer: z.array(z.string()),
      foto: image(),
      fotoAlt: z.string(),
      orden: z.number(),
    }),
});

const opiniones = defineCollection({
  loader: file('src/content/datos/opiniones.json'),
  schema: z.object({ texto: z.string(), nombre: z.string(), cuando: z.string(), alojamiento: z.string() }),
});

const preguntas = defineCollection({
  loader: file('src/content/datos/preguntas.json'),
  schema: z.object({ tema: z.enum(['reserva', 'estancia', 'mas']), pregunta: z.string(), respuesta: z.string() }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({ titulo: z.string(), resumen: z.string(), fecha: z.coerce.date(), categoria: z.string(), foto: image(), fotoAlt: z.string(), minutos: z.number() }),
});

export const collections = { alojamientos, experiencias, estaciones, opiniones, preguntas, blog };

// Capa de acceso al contenido. Las páginas solo llaman a estas funciones.
// Hoy leen los archivos de src/content; para pasar al CMS (Sanity) basta con reescribir este archivo
// y devolver la misma forma de datos con consultas GROQ, sin tocar las páginas ni los componentes.
import { getCollection, getEntry } from 'astro:content';

export const getAlojamientos = async () => (await getCollection('alojamientos')).sort((a, b) => a.data.orden - b.data.orden);
export const getAlojamiento = (id: string) => getEntry('alojamientos', id);
export const getExperiencias = () => getCollection('experiencias');
export const getEstaciones = async () => (await getCollection('estaciones')).sort((a, b) => a.data.orden - b.data.orden);
export const getOpiniones = () => getCollection('opiniones');
export const getEntradas = async () => (await getCollection('blog')).sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
export const getPreguntas = async (tema?: string) => {
  const todas = await getCollection('preguntas');
  return tema ? todas.filter((p) => p.data.tema === tema) : todas;
};

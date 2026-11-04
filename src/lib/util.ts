export const NBSP = ' ';
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const euros = (n: number) => `${nf.format(n)}${NBSP}€`;

// Temporada según la fecha. Se usa tanto en el servidor como en el navegador (el calendario de reservas).
export type Temporada = 'baja' | 'media' | 'alta';
export const TEMPORADA_FACTOR: Record<Temporada, number> = { baja: 1, media: 1.2, alta: 1.5 };
export function temporadaDe(f: Date): Temporada {
  const m = f.getMonth() + 1, d = f.getDate();
  if (m === 7 || m === 8) return 'alta';
  if ((m === 12 && d >= 23) || (m === 1 && d <= 6)) return 'alta';
  if ([4, 5, 6, 9, 10].includes(m)) return 'media';
  return 'baja';
}

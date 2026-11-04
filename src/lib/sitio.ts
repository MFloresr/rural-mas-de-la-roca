// Datos del alojamiento. En producción vendrían del CMS (un documento "Ajustes del sitio").
// Todo lo marcado como ejemplo o entre corchetes lo sustituye el cliente con sus datos reales.

export const sitio = {
  nombre: 'Mas de la Roca',
  eslogan: 'Casas rurales entre viñas y bosque',
  descripcion:
    'Tres alojamientos de piedra y madera en una masía entre viñas y bosque. Cielo oscuro, silencio y cocina de leña. Mira qué noches están libres y pide tu reserva.',
  url: 'https://www.masdelaroca.example',
  // Datos de ejemplo
  telefono: '+34977000000',
  telefonoVisible: '977 00 00 00',
  whatsapp: '34600000000',
  email: 'reservas@masdelaroca.example',
  direccion: { calle: 'Camí de la Roca, s/n', cp: '43376', ciudad: 'Poboleda', provincia: 'Tarragona' },
  mapa: 'https://www.openstreetmap.org/search?query=Poboleda',
  endpointFormularios: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  entrada: '16:00 a 20:00',
  salida: 'antes de las 11:00',
  cancelacionDias: 14,
  limpieza: { 'la-era': 40, 'el-pajar': 25, 'la-cabana': 25 } as Record<string, number>,
  extras: {
    lena: { nombre: 'Leña para la chimenea', precio: 12, por: 'noche' },
    desayuno: { nombre: 'Desayuno de pueblo', precio: 9, por: 'persona y día' },
    cena: { nombre: 'Cena casera', precio: 24, por: 'persona' },
    mascota: { nombre: 'Mascota', precio: 15, por: 'estancia' },
  },
  responsableLegal: {
    razonSocial: '[Razón social del cliente]',
    nif: '[NIF]',
    registro: '[Número de registro de turismo (HUTT / RTC)]',
    domicilio: 'Camí de la Roca, s/n, 43376 Poboleda',
  },
};

export const menu = [
  { href: '/alojamientos/', texto: 'Alojamientos' },
  { href: '/reservar/', texto: 'Reservar' },
  { href: '/estaciones/', texto: 'Estaciones' },
  { href: '/experiencias/', texto: 'Experiencias' },
  { href: '/el-mas/', texto: 'El mas' },
  { href: '/diario/', texto: 'Diario' },
];

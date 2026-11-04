# Mas de la Roca: casas rurales

Web de un alojamiento rural hecha con Astro 7. Diseño: **revista lenta** (fotografías a sangre, composición asimétrica, Instrument Serif a tamaño de cartel, tinta verde sobre gris piedra y pies de foto al margen).

## Qué incluye (20 páginas)

- **Almanaque de reservas** (`/reservar/`): elige casa, marca entrada y salida en dos meses de calendario, ve el precio al momento (temporada baja, media x1,2 y alta x1,5; limpieza; extras como leña, desayuno, cena y mascota), con mínimo de noches por temporada y depósito del 30 %.
- **El cielo de esta noche** (portada): la fase de la luna calculada en el navegador y cuándo es la próxima noche oscura.
- Tres alojamientos con ficha, cuatro estaciones a pantalla completa, experiencias, historia del mas, diario, contacto y textos legales.

## Dónde está cada cosa

Alojamientos, estaciones y experiencias: `src/content/datos/`. Precios por temporada: `src/lib/util.ts`. Extras y limpieza: `src/lib/sitio.ts`. La ocupación del calendario es simulada: con un cliente real se conectaría al calendario del propietario (iCal). Pruebas: `_herramientas/flujo-rural.cjs`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pasar el contenido a Sanity

Las páginas solo llaman a `src/lib/contenido.ts`. Hay que crear en Sanity un tipo de documento por cada colección de `src/content.config.ts` (con los mismos campos) y un documento único `ajustes` con los datos de `src/lib/sitio.ts`, y reescribir `contenido.ts` con consultas GROQ. Un webhook que lance un despliegue al publicar completa el circuito.

## Formularios y privacidad

Los formularios funcionan en modo demostración y validan en el navegador. Para enviarlos de verdad, define `PUBLIC_FORM_ENDPOINT` (por ejemplo, una función serverless que mande el correo). La web no usa cookies ni analítica, no carga recursos de terceros (tipografías y fotos están alojadas en la propia web) y los textos legales son plantillas que debe revisar el asesor del cliente. Las fotografías proceden de Wikimedia Commons con licencias libres; la autoría está en `/creditos/` y se sustituyen por las del cliente.

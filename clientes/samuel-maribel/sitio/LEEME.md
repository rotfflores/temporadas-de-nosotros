# Samuel → Maribel · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79 MXN): cuatro películas, una serie de tres episodios, un memorama, fotos, video y mensajes, con enlace permanente. Es una copia de la carpeta de Cristian y Beatriz con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`sm_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Samuel Reyes. Recibe: Maribel Martinez. En el sitio solo aparecen los nombres de pila.
- Aniversario: 11/04/23, leído como 11 de abril de 2023 (día/mes, como los demás clientes; coincide con «más de tres años juntos» y con la contraseña 110423).
- Su historia: se conocieron en el trabajo; él le dio un aventón al centro porque un compañero se lo pidió, ahí se presentaron, ella le escribió por Messenger, empezaron a salir, a los tres meses se fueron a vivir juntos y llevan más de tres años.
- WhatsApp de Samuel: 52 871 232 6703 (`528712326703`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta a Samuel» de la Temporada Final, que abre WhatsApp con las respuestas de Maribel.

## Contenido

- 31 fotografías y 1 video recibidos, en orden cronológico. Las fotos están en WebP en `assets/fotos/` con el número original del cliente (`foto-01` a `foto-32`; no hay `foto-04` porque el 4 es el video). `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas y `hero-13.webp` es la portada de escritorio (en celular se usa `foto-12`).
- `assets/video/momento-04.mp4` es el video 4 del cliente (5 s, sin sonido, en bucle), dentro de «Un aventón al centro»; `assets/fotos/momento-04.webp` es su miniatura.
- **«Un aventón al centro»** (primera película, Top 10) cuenta la historia con las palabras de Samuel, repartidas en los subtítulos (solo se corrigieron acentos y puntuación). También aparece completa en la tarjeta extra «Nuestra historia, en palabras de Samuel».
- **«Lo tienes todo»** (lo que admira de ella), **«Gracias por todo»** (agradecimientos), **«Lo que viene»** (metas y sueños) y la serie **«Más de tres años»** (episodios «Del trabajo al corazón», «Nuestro hogar» y «Feliz aniversario») son texto creativo sobre sentimientos, gratitud y metas. La carta final, firmada «Samuel», también es texto creativo basado en su historia. No se inventaron lugares, fechas ni anécdotas.
- Las fotos siguen el orden cronológico a lo largo del sitio: 1 a 9 en la primera película, 10 a 15 en la segunda, 16 a 21 en la tercera, 23 a 27 en la cuarta y 28 a 32 en la serie.
- Máximo 10 imágenes por película o serie (`verificar.cjs` lo comprueba).
- Canciones del cliente (Julión Álvarez y su Norteño Banda), recortadas desde el coro con fundidos y volumen igualado (−14 LUFS):
  - «Regalo de Dios», último coro desde 2:10 hasta el final, 54 s → «Un aventón al centro» y episodio 3
  - «Lo tienes todo», coro final desde 1:40, 57 s → «Lo tienes todo», la serie y el episodio 1
  - «Regalo de Dios», primer coro desde 0:53, 59 s → «Gracias por todo» y episodio 2
  - «Lo tienes todo», primer coro desde 0:42, 58 s → «Lo que viene»
- `assets/video/para-maribel.mp4`: montaje vertical de 39 s con once fotos y el video 4, con el final de «Lo tienes todo» (desde 1:58).
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Imágenes de ambiente

Completan las películas y la serie. Son ilustrativas y son copias de las imágenes de Pexels que ya usaban otros clientes ([licencia de Pexels](https://www.pexels.com/license/)):

| Archivo | Fuente |
|---|---|
| `camino.webp` | [Melikşah Kama](https://www.pexels.com/photo/serene-misty-mountain-road-at-dawn-34955053/) |
| `cielo-rosa.webp` | [wal_ 172619](https://www.pexels.com/photo/vibrant-pink-and-purple-sunset-sky-36324738/) |
| `manos.webp` | [Jonathan Borba](https://www.pexels.com/photo/romantic-couple-holding-hands-at-sunset-28961734/) |
| `corazon-luces.webp` | [Elizabeth Ferreira](https://www.pexels.com/photo/red-paper-heart-with-bokeh-lights-background-33035367/) |
| `rosas.webp` | [Marta Dzedyshko](https://www.pexels.com/photo/close-up-photo-of-red-roses-2775835/) |
| `carta.webp` | [Diana Light](https://www.pexels.com/photo/romantic-love-letter-with-red-envelope-and-hearts-30410632/) |
| `corazon-cielo.webp` | [Enrique](https://www.pexels.com/photo/cloud-in-form-of-a-heart-15800379/) |
| `corazon-neon.webp` | [Designecologist](https://www.pexels.com/photo/heart-shaped-red-neon-signage-887349/) |
| `estrellas.webp` | [Anna Tarazevich](https://www.pexels.com/photo/scenic-view-of-stars-in-the-sky-6501751/) |
| `flores.webp` | [Arthur Swiffen](https://www.pexels.com/photo/close-up-of-pink-flowers-on-a-field-17028391/) |

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la tarjeta extra reproduzcan la historia de Samuel, el video 4, la fecha, el límite de 10 imágenes, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Lleva contraseña (Obed se la da a Samuel; no está escrita en ningún archivo, solo su huella SHA-256 en `cliente.js`). No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/samuel-maribel/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

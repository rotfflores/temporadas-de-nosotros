# Cristian → Beatriz · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79 MXN): cuatro películas, una serie de tres episodios, un memorama, fotos, video y mensajes, con enlace permanente. Es una copia de la carpeta de Jesús y Lorena con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`cb_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Cristian. Recibe: Beatriz.
- Aniversario: 26 de febrero de 2025.
- WhatsApp de Cristian: 52 56 6369 6233 (`525663696233`). Las respuestas de la Temporada Final se le envían por WhatsApp.

## Contenido

- 6 fotografías recibidas, optimizadas a WebP en `assets/fotos/` (`foto-01` a `foto-06`). `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas y `hero-05.webp` es la portada de escritorio.
- **«Te amo por lo que eres»** (primera película, Top 10) es la carta de Cristian palabra por palabra, repartida en los subtítulos. El mensaje llegó pegado dos veces con un corte a la mitad («desapeBeatriz:»); se usó una sola copia limpia. La carta completa también aparece en la tarjeta extra «La carta de Cristian» y como carta final, firmada «Cristian».
- **«Volver a ilusionarme»**, **«Valiente»**, **«Las pequeñas cosas»** y la serie **«Nuestra historia»** (episodios «Desde que llegaste», «Día con día» y «Seguir eligiéndonos») desarrollan ideas de la carta: lo que Beatriz despertó, las diferencias que han superado, los pequeños detalles y las ganas de seguir eligiéndose. No se inventaron lugares ni anécdotas.
- Máximo 10 imágenes por película o serie (`verificar.cjs` lo comprueba).
- Canciones del cliente, recortadas desde el estribillo de mayor intensidad, con fundidos y volumen igualado:
  - «Compartir» (Carla Morrison) desde 3:19, 56 s → «Te amo por lo que eres»
  - «Fuego dentro de mi risa» desde 2:10, 62 s → «Volver a ilusionarme», la serie y el episodio 1
  - «Valiente» (Koko) desde 1:44, 64 s → «Valiente» y episodio 2
  - «Compartir» (Carla Morrison), coro desde 2:12, 64 s → «Las pequeñas cosas» y episodio 3
- `assets/video/para-beatriz.mp4`: montaje vertical de 34 s con seis fotos y dos imágenes de ambiente, con el último coro de «Compartir» (desde 3:32).
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Imágenes de ambiente

Completan las películas y la serie, porque el cliente envió seis fotos. Son ilustrativas y son copias de las imágenes de Pexels que ya usaban otros clientes ([licencia de Pexels](https://www.pexels.com/license/)):

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

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la carta final reproduzcan la carta de Cristian palabra por palabra, el límite de 10 imágenes, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Lleva contraseña (se la da Obed a Cristian; no está escrita en ningún archivo, solo su huella SHA-256 en `cliente.js`). No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/cristian-beatriz/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

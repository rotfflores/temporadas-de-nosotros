# Jesús → Lorena · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79 MXN): cuatro películas, una serie de tres episodios, un memorama, fotos, video y mensajes, con enlace permanente. Es una copia de la carpeta de Bladimir y Guillermina con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`jr_v1`), así que no se mezcla con otros clientes en el mismo navegador (`jl_` ya lo usa jesus-lili).

## Datos del cliente

- Envía: Jesús. Recibe: Lorena.
- Aniversario: 6 de septiembre (llevan unos dos meses de relación, 2026).
- Su historia: se conocieron hace 10 años, se trataron poco tiempo y se alejaron; desde hace 2 meses lo intentan por primera vez como pareja y han pasado de todo.
- WhatsApp de Jesús: 52 984 105 7499 (`529841057499`). Las respuestas de la Temporada Final se le envían por WhatsApp.

## Contenido

- 23 fotografías recibidas, optimizadas a WebP en `assets/fotos/` (`foto-01` a `foto-23`). `portada-*.webp` son recortes horizontales para las tarjetas y `hero-23.webp` es la portada de escritorio. La imagen de los paquetes no se usa en el sitio.
- **«Diez años después»** (primera película, Top 10) cuenta su historia con las palabras de Jesús, repartidas en los subtítulos. También aparece completa en la tarjeta extra «Nuestra historia, en palabras de Jesús».
- **«Así eres tú»** usa las palabras de la foto que envió el cliente: inteligente, hermosa, trabajadora, emprendedora, sentimental y alegre.
- Las otras películas, la serie, la carta final y los créditos son texto creativo sobre sentimientos, metas y agradecimiento. No se inventaron lugares ni anécdotas.
- Máximo 10 imágenes por película o serie (`verificar.cjs` lo comprueba).
- Canciones del cliente, recortadas desde el estribillo de mayor intensidad, con fundidos y volumen igualado:
  - «Love Me Again» (John Newman) desde 1:03, 66 s → «Diez años después» y episodio 1
  - «Ni contigo ni sin ti» (Pepe Aguilar) desde 1:52, 70 s → «Ni contigo ni sin ti» y episodio 2
  - «Soy un novato» desde 1:57, 60 s → «Soy un novato»
  - Audio de WhatsApp (una canción sin título conocido) desde 2:00, 64 s → «Así eres tú» y episodio 3. Aparece como «Nuestra canción»; si se conoce el título, cambiarlo en `tracks[3]` de `cliente.js`.
- `assets/video/para-lorena.mp4`: montaje vertical de 36 s con ocho fotos y el último coro de «Love Me Again» (desde 3:16).
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Imágenes de ambiente

Se usan en la serie y en una tarjeta extra. Son ilustrativas y son copias de las imágenes de Pexels que ya usaban otros clientes ([licencia de Pexels](https://www.pexels.com/license/)):

| Archivo | Fuente |
|---|---|
| `camino.webp` | [Melikşah Kama](https://www.pexels.com/photo/serene-misty-mountain-road-at-dawn-34955053/) |
| `cielo-rosa.webp` | [wal_ 172619](https://www.pexels.com/photo/vibrant-pink-and-purple-sunset-sky-36324738/) |
| `manos.webp` | [Jonathan Borba](https://www.pexels.com/photo/romantic-couple-holding-hands-at-sunset-28961734/) |
| `corazon-luces.webp` | [Elizabeth Ferreira](https://www.pexels.com/photo/red-paper-heart-with-bokeh-lights-background-33035367/) |
| `rosas.webp` | [Marta Dzedyshko](https://www.pexels.com/photo/close-up-photo-of-red-roses-2775835/) |
| `carta.webp` | [Diana Light](https://www.pexels.com/photo/romantic-love-letter-with-red-envelope-and-hearts-30410632/) |

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, la historia literal de Jesús, el límite de 10 imágenes, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Lleva contraseña (se la da Obed a Jesús; no está escrita en ningún archivo, solo su huella SHA-256 en `cliente.js`). No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/jesus-lorena/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

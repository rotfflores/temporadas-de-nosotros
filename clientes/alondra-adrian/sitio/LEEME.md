# Alondra → Adrián · Temporadas de Nosotros

Sitio independiente del paquete completo **Temporadas de Nosotros** ($199 MXN): 12 películas, 3 series (6 episodios), 7 juegos, carta final, «Nuestras canciones» y «Nuestros recuerdos». Es una copia de la carpeta de Viridiana y Alex con contenido nuevo; la plantilla raíz y las carpetas de otros clientes no se modificaron. El progreso se guarda con su propia clave (`ar_v1`).

## Datos del cliente

- Envía: Alondra Ruiz. Recibe: Adrián Rodríguez. Aniversario: 14 de marzo (sin año; el sitio no muestra años).
- Historia recibida, tal cual: «Nos conocimos en el trabajo». Es la primera escena de la primera película. El resto (sentimientos, gratitud, admiración, metas y promesas) es texto creativo; no se inventaron lugares, fechas ni anécdotas.
- WhatsApp de Alondra: 52 56 2478 7143 (`525624787143`), solo para el botón de respuesta de la carta final.
- Contraseña: la que dio Obed (día y mes del aniversario). En el sitio solo está su huella SHA-256 en `cliente.js`.

## Medios

- 21 fotos (`assets/fotos/foto-01…21.webp`, en el orden de sus archivos de WhatsApp del 4 de noviembre de 2026) y sus portadas horizontales `portada-NN.webp`.
- 4 videos (`assets/video/momento-01…04.mp4`, 15 s, sin sonido, en bucle) con miniatura `assets/fotos/momento-NN.webp`.
- Máximo 10 imágenes o videos por título; cada episodio tiene al menos 5 escenas.

## Canciones (una por título, 56 s, −14 LUFS)

Cada fragmento empieza en el clímax (ventana de mayor intensidad, comprobada con la voz separada), salvo «Amarte a la antigua», que empieza cuando Pedro Fernández comienza a cantar (0:13.5).

| Título | Canción | Inicio |
|---|---|---|
| Nos conocimos en el trabajo | Es por ti — Juanes | 2:58 |
| Antes de ti | Antes de ti — Mon Laferte | 2:48 |
| Amarte a la antigua | Amarte a la antigua — Pedro Fernández | 0:13.5 |
| Mi lugar favorito | Favorito — Camilo | 0:37 |
| Contigo | Contigo — Karol G y Tiësto | 2:12 |
| Ojitos lindos | Ojitos lindos — Bad Bunny y Bomba Estéreo | 1:20 |
| Gracias, vida | Perfect Symphony — Ed Sheeran y Andrea Bocelli | 3:20 |
| Lo que admiro de ti | Hold On — Justin Bieber | 1:15 |
| Abrázame | Abrázame — Ángela Aguilar y Felipe Botello | 1:26 |
| Nuestra vida juntos | Lover — Taylor Swift | 2:42 |
| Baila mi corazón | Baila mi corazón — Belanova | 2:11 |
| 14 de marzo | Can't Help Falling in Love — Elvis Presley | 1:41 |
| Serie «Lo que siento por ti» | Canción especial 1 (archivo 2b202202…, sin nombre) | 2:13 |
| Serie «Nuestras metas» | Canción especial 2 (archivo 7a681da7…, sin nombre) | 3:00 |
| Serie «Continuará» | Canción especial 3 (archivo fdb2b3d3…, sin nombre) | 2:10 |

## Juegos (7)

Trivia «¿Dónde nos conocimos?», Trivia de la canción de Pedro Fernández, Completa la frase, Adivinanza, Ordena la historia, Memorama y Código secreto (14 de marzo, DDMM). En celular, cada juego se abre a pantalla completa (sin menú ni pie de página; en Android también pide la pantalla completa del navegador al primer toque) y tiene un botón para salir.

## Revisión

`node verificar.cjs` comprueba el alcance del paquete, la historia literal, las 15 canciones, el límite de 10 medios, la contraseña en huella, el WhatsApp, las rutas de medios y que no haya datos ni almacenamiento de otros clientes. Se revisó en vista de iPhone 13 (contraseña, perfiles, inicio, película, reproductor, los 7 juegos, serie, final, canciones y recuerdos) sin errores en consola.

URL: `https://streaming-us.rotfstudio.com/clientes/alondra-adrian/sitio/splash.html`

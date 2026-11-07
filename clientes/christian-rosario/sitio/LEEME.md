# Para Rosario · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79): cuatro películas, una serie de tres episodios, un memorama, fotos, videos y una carta, con enlace permanente. Es una copia de la carpeta de Flor con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`cr_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Regala: Christian. Recibe: Rosario.
- Aniversario: 24 de diciembre (no se indicó el año, así que no se muestra ninguno).
- WhatsApp del cliente: 52 844 845 8829 (`528448458829`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta» de la Temporada Final.
- Historia: la canción «Rosario, Contigo» (archivo `historia.mpeg`) cuenta su historia. Se transcribió y las películas siguen su letra: los dos venían de un divorcio y con dolor, se conocieron por una app, empezaron a salir y a platicar, ella aceptó a los hijos de Christian (en la canción se escuchan como **Evan, Hunter y Oliver**; confirmar la ortografía con el cliente), con ella volvió a confiar, a sonreír y encontró su tranquilidad. Se añadieron sentimientos, agradecimientos y metas, sin inventar lugares ni fechas.

## Contenido

- 44 fotografías y 17 videos recibidos por WhatsApp (6 de noviembre de 2026, 11:12–11:18 p. m.), en orden de envío como `assets/fotos/foto-01` a `foto-44`. La 32 era casi idéntica a la 31 y no se usó. A las capturas de pantalla se les quitaron las franjas negras y a la 11 los botones de la galería. `portada-*.webp` son versiones horizontales con fondo difuminado; `hero.webp` es la portada de escritorio (foto 25) y en celular se usa la foto 25.
- Videos (`assets/video/momento-1..7.mp4`, sin sonido y en bucle, con miniatura `assets/fotos/momento-N.webp`): siete de los 17 videos (los demás repetían fotos o no cabían en el límite de 10 medios por título).
- Películas: **«Rosario, contigo»** (su historia según la canción, 3 min, Top 10), **«Se llevó mi corazón»** (lo que siente), **«Como un sol»** (agradecimientos) y **«Que me digan loco»** (metas). Serie **«Volver a empezar»**: «Aquel instante», «Mi tranquilidad» y «Contigo, para siempre». Carta final firmada «Con todo mi amor, Christian».
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba, y también que se usen las 43 fotos).
- Canciones del cliente, con fundidos y volumen igualado (−14 LUFS):
  - «Rosario, Contigo» (la canción de su historia), completa (3:01) → «Rosario, contigo». Desde el coro «Rosario, contigo volví a confiar» (1:13, 107 s) → episodio 3 y el video final
  - «Corazón» (Los Auténticos Decadentes), desde 3:14, 88 s → «Se llevó mi corazón» y el episodio 2
  - «Como un Sol» (Inspector), desde 2:36, 95 s → «Como un sol»
  - «Que Me Digan Loco» (La Original Banda El Limón), desde 2:11, 88 s → «Que me digan loco»
  - «Solo un Instante» (Jamaica 69), desde 1:56, 71 s → la serie y el episodio 1
- `assets/video/para-rosario.mp4`: montaje vertical de 36 s con dieciséis fotos y el coro de «Rosario, Contigo», con cierre «Te quiero de verdad, Rosario · Feliz 24 de diciembre».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.
- `script.js`: solo cambió la clave de almacenamiento (`cr_`) y la descripción del memorama.

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, la contraseña, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Contraseña: `2412` (la dio Obed). En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/christian-rosario/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

# Para Flor · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79): cuatro películas, una serie de tres episodios, un memorama, fotos, videos y una carta, con enlace permanente. Es una copia de la carpeta de Lety y Mario con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`fl_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Recibe: Flor. Quien regala no dio su nombre: en el sitio aparece como «Tu amor» (`nombreA` en `cliente.js`; si Obed consigue el nombre, basta cambiar esa línea y la firma de la carta).
- Aniversario: 2 de noviembre (no se indicó el año, así que no se muestra ninguno).
- WhatsApp del cliente: 52 353 106 6530 (`523531066530`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta» de la Temporada Final.
- No envió historia: los textos son sentimientos, agradecimientos y metas, sin inventar lugares, fechas ni anécdotas.

## Contenido

- 33 fotografías y 3 videos recibidos por WhatsApp (6 de noviembre de 2026, 10:16 p. m.), en orden de envío como `assets/fotos/foto-01` a `foto-33`. Las capturas de pantalla (01, 02 y 15) se recortaron para quitar los botones del teléfono, a la 16–19 se les quitaron las franjas negras y la 17 y la 22 se enderezaron. `portada-*.webp` son versiones horizontales con fondo difuminado; `hero.webp` es la portada de escritorio (foto 27) y en celular se usa la foto 26.
- La foto 02 trae su estado de WhatsApp «solo d tu mano kiero caminar… t amoo mi flor»; de ahí salen la escena «Solo de tu mano quiero caminar» y la tarjeta extra del mismo nombre.
- Videos (`assets/video/momento-1..3.mp4`, sin sonido y en bucle, con miniatura `assets/fotos/momento-N.webp`): tres momentos en la iglesia.
- Películas: **«Mi mayor anhelo»** (lo que siente, Top 10), **«Nuestra familia»** (la familia y el día en la iglesia), **«Perfecta»** (agradecimientos) y **«El mundo a tus pies»** (metas y sueños). Serie **«Lo que eres para mí»**: «Mi compañera de vida», «Lo que sueño contigo» y «Para siempre». Carta final firmada «Con todo mi amor, para siempre tuyo».
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba, y también que se usen las 33 fotos).
- Canciones del cliente, desde una frase antes del clímax hasta el final (más de 70 s, para que no se repitan durante cada película), con fundidos y volumen igualado (−14 LUFS):
  - «Mi Mayor Anhelo» (Banda MS), desde 2:20, 74 s → «Mi mayor anhelo», la serie, el episodio 1 y el video final
  - «Deja» (Banda El Recodo), desde 1:22, 74 s → «Nuestra familia»
  - «Perfecta» (Banda Los Recoditos), desde 2:56, 82 s → «Perfecta» y el episodio 3
  - «El Mundo a Tus Pies» (Grupo Firme), desde 1:35, 81 s → «El mundo a tus pies» y el episodio 2
- `assets/video/para-flor.mp4`: montaje vertical de 36 s con dieciséis fotos y «Mi Mayor Anhelo», con cierre «Te amo, Flor · Feliz 2 de noviembre».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.
- `script.js`: solo cambió la clave de almacenamiento (`fl_`), la descripción del memorama y el pie de página (sin año de inicio cuando no se conoce).

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, la contraseña, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Contraseña: `0211` (la dio Obed). En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/flor/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

# Para Flor · Temporadas de Nosotros

Sitio independiente para el paquete **Nuestra Temporada** ($149; el cliente subió desde el de $79 el 7 de noviembre de 2026): ocho películas, dos series de tres episodios, tres juegos (trivia, código secreto y ordena la historia), fotos, videos y una carta, con enlace permanente. Es una copia de la carpeta de Lety y Mario con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`fl_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Recibe: Flor. Quien regala no dio su nombre: en el sitio aparece como «Tu amor» (`nombreA` en `cliente.js`; si Obed consigue el nombre, basta cambiar esa línea y la firma de la carta).
- Aniversario: 2 de noviembre (no se indicó el año, así que no se muestra ninguno).
- WhatsApp del cliente: 52 353 106 6530 (`523531066530`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta» de la Temporada Final.
- No envió historia: los textos son sentimientos, agradecimientos y metas, sin inventar lugares, fechas ni anécdotas.

## Contenido

- 33 fotografías y 3 videos recibidos por WhatsApp (6 de noviembre de 2026, 10:16 p. m.), en orden de envío como `assets/fotos/foto-01` a `foto-33`, y 8 fotos más (7 de noviembre, 11:13 y 11:23 a. m.) como `foto-34` a `foto-41` (la 41 se enderezó). Las capturas de pantalla (01, 02 y 15) se recortaron para quitar los botones del teléfono, a la 16–19 se les quitaron las franjas negras y la 17 y la 22 se enderezaron. `portada-*.webp` son versiones horizontales con fondo difuminado; `hero.webp` es la portada de escritorio (foto 27) y en celular se usa la foto 26.
- La foto 02 trae su estado de WhatsApp «solo d tu mano kiero caminar… t amoo mi flor»; de ahí salen la escena «Solo de tu mano quiero caminar» y la tarjeta extra del mismo nombre.
- Videos (`assets/video/momento-1..3.mp4`, sin sonido y en bucle, con miniatura `assets/fotos/momento-N.webp`): tres momentos en la iglesia.
- Ambiente (`assets/ambiente/`, material libre reutilizado de otras carpetas porque el entorno no puede descargar de bancos de imágenes): videos `bosque-video`, `cafe-video`, `atardecer-video` y `olas-video` (sin sonido, con miniatura `.webp`), e imágenes `costa`, `siluetas`, `luz`, `rosas`, `flores`, `horizonte`, `manos`, `estrellas` y `carta`.
- Películas: **«Mi mayor anhelo»** (lo que siente, Top 10), **«Nuestra familia»** (la familia y el día en la iglesia), **«Perfecta»** (agradecimientos, con la trivia), **«El mundo a tus pies»** (metas y sueños), **«Solo de tu mano»** (los caminos juntos, con el código secreto), **«Los pequeños momentos»** (lo cotidiano), **«Mi Flor»** (un homenaje a ella, con «ordena la historia») y **«Lo que aprendí contigo»**. Series: **«Lo que eres para mí»** («Mi compañera de vida», «Lo que sueño contigo», «Para siempre») y **«Nuestro para siempre»** («Mis promesas», «Lo que viene», «Carta al futuro»). Carta final firmada «Con todo mi amor, para siempre tuyo».
- Juegos: trivia «Lo que más amo de ti» (respuesta: «Todo, absolutamente todo»), código secreto «Nuestro día» (respuesta `0211`) y «Lo que te escribí» (ordenar su estado de WhatsApp «Solo de tu mano quiero caminar… te amo, mi Flor»). Se quitó el memorama del paquete de $79, como en `cliente-149-001`.
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba, y también que se usen las 41 fotos).
- Canciones del cliente, desde una frase antes del clímax hasta el final (más de 70 s, para que no se repitan durante cada película), con fundidos y volumen igualado (−14 LUFS):
  - «Mi Mayor Anhelo» (Banda MS), desde 2:20, 74 s → «Mi mayor anhelo», la serie, el episodio 1 y el video final
  - «Deja» (Banda El Recodo), desde 1:22, 74 s → «Nuestra familia»
  - «Perfecta» (Banda Los Recoditos), desde 2:56, 82 s → «Perfecta» y el episodio 3
  - «El Mundo a Tus Pies» (Grupo Firme), desde 1:35, 81 s → «El mundo a tus pies» y el episodio 2
- Segundo tramo de cada canción desde el primer coro (`*-coro.mp3`, 74–76 s) para las películas 5 a 8 y la segunda serie: «Mi Mayor Anhelo» desde 1:14, «Deja» desde 0:28, «Perfecta» desde 1:05 y «El Mundo a Tus Pies» desde 0:44.
- `assets/video/para-flor.mp4`: montaje vertical de 36 s con dieciséis fotos y «Mi Mayor Anhelo», con cierre «Te amo, Flor · Feliz 2 de noviembre».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.
- `script.js`: solo cambió la clave de almacenamiento (`fl_`), la lista de juegos sueltos (vacía en $149, sin el encabezado «Para jugar ahora») y el pie de página (sin año de inicio cuando no se conoce).

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete (8/2/3), la contraseña, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Contraseña: `0211` (la dio Obed). En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/flor/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

## Pago pendiente

Desde el 7 de noviembre de 2026 la página está **bloqueada** a pedido de Obed: todas las pantallas muestran solo «🔒 Contenido bloqueado. Este regalo tiene un pago pendiente. En cuanto se complete el pago, podrás disfrutarlo completo.», sin música ni videos, y no responde a clics ni teclas. Para desbloquearla, poner `const pagoPendiente = false;` en `cliente.js`, subir el `?v=` de los HTML y volver a publicar. El bloqueo es de la página: los archivos sueltos (fotos, canciones) siguen en el servidor.

# Fernando → Miriam · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79): cuatro películas, una serie de tres episodios, un memorama, fotos y mensajes, con enlace permanente. Es una copia de la carpeta de Josué y Mariana con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`fm_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Fernando. Recibe: Miriam.
- Aniversario: 14 de marzo de 2011 (15 años juntos en 2026).
- WhatsApp de Fernando: 52 322 194 0568 (`523221940568`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta a Fernando» de la Temporada Final, que abre WhatsApp con las respuestas de Miriam.

## Contenido

- 15 fotografías recibidas (WhatsApp, 4 de noviembre de 2026, 7:21 p. m.). Una de ellas era un collage de cuatro fotos y se separó en cuatro imágenes, así que quedan 18 fotos en WebP en `assets/fotos/foto-NN.webp`:
  - 01–02 la pareja de jóvenes, 03 selfi de la pareja, 04–05 cena (04 también es la portada de escritorio `hero-04.webp`; en celular se usa `foto-03`).
  - 06–08 Miriam con la niña, 09–10 los cuatro en la mesa, 11 Fernando con los niños.
  - 12–15 las cuatro fotos del collage (Fernando con los niños, la niña de amarillo, el niño en la camioneta y Miriam en la camioneta).
  - 16–18 Fernando con la bebé (16 también con el niño).
  `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas.
- Las fotos con niños se usaron con textos sobre «nuestra familia» y «los que más amamos», sin nombrarlos.
- Imágenes de ambiente (`assets/ambiente/`, fotos libres de Pexels reutilizadas de otros clientes, porque el entorno no puede descargar bancos de imágenes) elegidas para la historia: `carta` (cursos de inglés, la carta está en inglés), `corazon-luces` (las fiestas), `estrellas` (la madrugada), `balcon` (afuera de su casa), `horizonte` (atardecer en el mar, la playa), además de `rosas`, `manos`, `corazon-neon`, `cielo-rosa`, `flores`, `corazon-cielo`, `luz` y `camino`.
- **«Un 14 de marzo»** (primera película, Top 10) incluye la historia completa de Fernando repartida en subtítulos (solo se acentuó «animé»), seguida de escenas sobre los quince años juntos. También aparece completa en la tarjeta extra «Nuestra historia, en palabras de Fernando».
- **«Me traes bien enamorado»** (lo que siente por ella), **«Mi razón de ser»** (la familia), **«Gracias por llegar a mi vida»** (agradecimientos) y la serie **«Quince años contigo»** (episodios «Lo que eres para mí», «Lo que sueño contigo» con metas y «Para siempre») son texto creativo basado en su historia. La carta final, firmada «Con todo mi amor, Fernando», también es texto creativo. No se inventaron lugares, fechas ni anécdotas.
- Máximo 10 imágenes por película o serie (`verificar.cjs` lo comprueba, y también que se usen las 18 fotos).
- Canciones del cliente, recortadas en el coro final con fundidos y volumen igualado (−14 LUFS), 53 s cada una:
  - «Llegaste a Mi Vida» (Carin León y Karol G), coro final desde 3:08 → «Un 14 de marzo», «Gracias por llegar a mi vida» y el episodio 3
  - «Me Traes Bien Enamorado» (VMJ Composiciones), coro final desde 2:00 → «Me traes bien enamorado» y el episodio 1
  - «Mi Razón de Ser» (Banda MS), coro final desde 2:24 → «Mi razón de ser», la serie y el episodio 2
- `assets/video/para-miriam.mp4`: montaje vertical de 41 s con diecisiete fotos y «Llegaste a Mi Vida».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Revisión y publicación

Los subtítulos de este cliente van más arriba y con letra Dancing Script (`cliente.css`), igual que en Josué y Mariana.

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la tarjeta extra reproduzcan la historia de Fernando (la de abajo), la contraseña, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Contraseña: `140311` (la dio Obed; es el aniversario en formato DDMMAA). En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/fernando-miriam/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

## Su historia, tal como la envió Fernando

<!-- historia -->
La conocí en unos cursos de inglés,la conocí para las fiestas del lugar de dónde vivía ella,ese día hasta en la madrugada ya muy tarde le pregunté nos quedamos platicando afuera de su casa.
Ahí fue como empezamos a tratarnos a salir a la playa a los días me anime a decirle si quería ser mi novia.

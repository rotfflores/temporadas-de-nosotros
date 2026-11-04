# Josué → Mariana · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79): cuatro películas, una serie de tres episodios, un memorama, fotos, videos y mensajes, con enlace permanente. Es una copia de la carpeta de Viridiana y Alex con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`jm_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Josué Emmanuel Morales Ortiz («tu flaco»). Recibe: Mariana Garcia Barrios.
- Fecha de su historia: empezaron un 5 de septiembre. El cliente no dio el año; se usó 2025 (fecha de inicio del sitio y de la contraseña).
- WhatsApp de Josué: 52 960 105 9759 (`529601059759`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta a Josué» de la Temporada Final, que abre WhatsApp con las respuestas de Mariana.

## Contenido

- 48 fotografías y 2 videos recibidos (WhatsApp, 3 de noviembre de 2026, de 8:02 a 8:03 p. m.), numerados del 1 al 50 en el orden de sus archivos, que se tomó como orden cronológico. Los archivos duplicados « 2» se ignoraron. Las fotos están en WebP en `assets/fotos/foto-NN.webp`: la 33 (caricatura) sin la franja negra inferior y la 50 girada a vertical. `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas y `hero-24.webp` es la portada de escritorio (en celular se usa `foto-19`).
- Algunas imágenes son versiones en caricatura hechas por el cliente (33, 36 y el video 28) y dos incluyen a una niña (35 y 36); se usaron con un texto general sobre «los que amamos», sin afirmar parentesco.
- Los videos 17 (corazón en la arena) y 28 (manos en caricatura, «love is giving») están en `assets/video/momento-NN.mp4` (8 s o menos, sin sonido, en bucle) con su miniatura en `assets/fotos/momento-NN.webp`.
- **«Un 5 de septiembre»** (primera película, Top 10) incluye el mensaje completo de Josué repartido en subtítulos (solo se acentuó «amaré» y «para ti..» quedó «para ti.»), seguido de escenas de sentimientos. También aparece completo en la tarjeta extra «Nuestra historia, en palabras de Josué».
- **«Gracias por elegirme»** (agradecimientos), **«Contigo»** (lo que siente a su lado), **«Me gustas tanto»** (lo que le gusta y admira de ella) y la serie **«El resto de mi vida»** (episodios «Lo que eres para mí», «Lo que quiero contigo» con metas y «Para siempre») son texto creativo basado en su historia. La carta final, firmada «Tu flaco, Josué», también es texto creativo. No se inventaron lugares, fechas ni anécdotas.
- Los medios siguen el orden cronológico: 1 a 10 en la primera película, 11 a 20 en la segunda, 21 a 30 en la tercera, 31 a 40 en la cuarta y 41 a 50 en la serie. No se usaron imágenes de ambiente.
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba).
- Canciones del cliente, recortadas en el coro o el clímax con fundidos y volumen igualado (−14 LUFS):
  - «Eres Tú» (Manny Montes), coro final desde 2:30, 52 s → «Un 5 de septiembre»
  - «Ciudad Amurallada» (Ariza y Morat), coro final desde 1:58, 52 s → «Gracias por elegirme»
  - «Contigo» (Maniako ft. Moisés Garduño), coro final desde 2:22, 52 s → «Contigo» y episodio 2
  - «Me Gustas Tanto» (Moisés Garduño), coro final desde 2:33, 52 s → «Me gustas tanto», episodio 3 y créditos
  - «Envíciame» (Flex), coro desde 1:44, 54 s → la serie y el episodio 1
- `assets/video/para-mariana.mp4`: montaje vertical de 45 s con dieciséis fotos y el video 17, con «Eres Tú».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Revisión y publicación

Los subtítulos de este cliente (y solo de este) van más arriba y con letra Dancing Script (`cliente.css`).

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la tarjeta extra reproduzcan el mensaje de Josué (el de abajo), los videos, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Lleva contraseña: el día en que empezaron (5 de septiembre de 2025) en formato DDMMAA. En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/josue-mariana/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

## Su historia, tal como la envió Josué

<!-- historia -->
Un 5 de septiembre decidimos empezar esto y hoy en día te has convertido en alguien a quien yo no quiero perder nunca, tu flaco estará siempre para ti..
Te amare por el resto de mi vida❤️

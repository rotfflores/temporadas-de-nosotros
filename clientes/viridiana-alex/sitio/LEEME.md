# Viridiana → Alex · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79 MXN): cuatro películas, una serie de tres episodios, un memorama, fotos, videos y mensajes, con enlace permanente. Es una copia de la carpeta de Samuel y Maribel con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`vx_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Viridiana. Recibe: Alex. Es un regalo de cumpleaños para Alex que también celebra sus seis meses de novios.
- Fechas de su historia: girasoles en septiembre de 2025, pláticas diarias desde enero de 2026 (el 19 de enero él prometió ir a verla), se conocieron en persona el 1 de mayo de 2026, son novios desde el 2 de mayo de 2026 (fecha de inicio del sitio) y él la visitó el 24 de julio para el cumpleaños de ella.
- WhatsApp de Viridiana: 52 55 6737 3460 (`525567373460`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta a Viridiana» de la Temporada Final, que abre WhatsApp con las respuestas de Alex.

## Contenido

- 41 fotografías y 8 videos recibidos, numerados del 1 al 49 en el orden de sus archivos de WhatsApp (3 de noviembre de 2026, 7:14 p. m.), que se tomó como orden cronológico. Las fotos están en WebP en `assets/fotos/foto-NN.webp` sin los marcos de color de las historias. `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas y `hero-16.webp` es la portada de escritorio (en celular se usa `foto-15`).
- Los videos 1, 2, 4, 5, 6, 10, 11 y 12 están en `assets/video/momento-NN.mp4` (recortados a 8 s o menos, sin sonido, en bucle) con su miniatura en `assets/fotos/momento-NN.webp`.
- **«Qué bonito que existas»** (primera película, Top 10) cuenta la historia completa con las palabras de Viridiana, repartida en los subtítulos (solo se cambió «, Y cada uno» por «, y cada uno»). También aparece completa en la tarjeta extra «Nuestra historia, en palabras de Viridiana».
- **«Girasoles de septiembre»** (los mensajes, los girasoles y la promesa de enero), **«Kilómetros»** (el amor a distancia y las visitas), **«Feliz cumpleaños, Alex»** (agradecimientos y buenos deseos) y la serie **«Seis meses de novios»** (episodios «Promesas cumplidas», «Seis meses» y «Lo que nos falta») son texto creativo basado en su historia, con gratitud y metas como complemento. La carta final, firmada «Viridiana», también es texto creativo. No se inventaron lugares, fechas ni anécdotas.
- Los medios siguen el orden cronológico: 1 a 10 en la primera película, 11 a 20 en la segunda, 21 a 30 en la tercera, 31 a 40 en la cuarta y 41 a 49 en la serie. No se usaron imágenes de ambiente.
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba).
- Canciones del cliente, recortadas en el coro o el clímax con fundidos y volumen igualado (−14 LUFS):
  - «Eres» (Café Tacvba), coro final desde 3:30, 52 s → «Qué bonito que existas» y episodio 2
  - «Birdie» (León Larregui), coro final desde 2:27, 52 s → «Girasoles de septiembre»
  - «Kilómetros» (Sin Bandera), clímax desde 2:40, 56 s → «Kilómetros»
  - «Soñé» (Zoé), coros finales desde 2:19, 56 s → «Feliz cumpleaños, Alex», episodio 3 y créditos
  - «Ya borracho» (Herencia de Grandes), coro desde 1:11, 56 s → la serie y el episodio 1
- `assets/video/para-alex.mp4`: montaje vertical de 45 s con catorce fotos y el video 11, con el final de «Eres».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la tarjeta extra reproduzcan la historia de Viridiana (la de abajo), los videos, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Lleva contraseña: la fecha en que se hicieron novios en formato DDMMAA (Obed se la da a Viridiana; en el sitio solo está su huella SHA-256 en `cliente.js`). No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/viridiana-alex/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

## Su historia, tal como la envió Viridiana

<!-- historia -->
Nuestra historia: qué bonito que existas, Alexito ❤️

Todo comenzó de una manera que ninguno de los dos imaginaba: a través de una pantalla, por Teams. Trabajábamos en el mismo lugar, pero en diferentes estados. Tú comenzaste a buscarme por mensajes y, aunque al principio no contestaba demasiado, poco a poco nuestras conversaciones fueron encontrando su propio camino.

En septiembre del año pasado llegaron unos girasoles que me regalaste. En ese momento éramos solamente amigos, sin saber que aquellos pequeños detalles serían parte de una historia mucho más grande.

Llegó enero y algo cambió. Comenzamos a hablar todos los días, a todas horas. Las conversaciones se hicieron más largas, las sonrisas más frecuentes y las ganas de conocernos dejaron de ser solamente una idea.

Un 19 de enero prometiste que vendrías a verme. Y cumpliste.

El primero de mayo cumpliste. Llegaste a mi vida de una manera que ninguna pantalla habría podido conseguir: por fin pudimos conocernos, mirarnos frente a frente y descubrir que aquello que había nacido entre mensajes también existía cuando estábamos juntos.

Y el 2 de mayo me hiciste una pregunta que cambiaría nuestra historia: me pediste que fuera tu novia. ❤️

Desde entonces hemos aprendido que el amor también puede vivir a kilómetros de distancia. Que se puede acompañar a alguien desde una videollamada, compartir películas sin estar en el mismo sofá, pasar horas hablando y encontrar maneras de hacerse presente incluso cuando los brazos no pueden alcanzar al otro.

El 24 de julio volviste a recorrer la distancia para celebrar mi cumpleaños, y cada uno de esos encuentros se convirtió en un recuerdo que guardo con muchísimo cariño.

Hoy llevamos seis meses siendo novios. Seis meses de mensajes, llamadas, películas, promesas cumplidas, visitas, momentos y muchísimo amor.

Y hoy no quiero celebrar solamente un cumpleaños. Quiero celebrar algo todavía más grande: tu vida.

Celebrar el día en que llegaste a este mundo, porque sin saberlo, algún día te convertirías en una persona tan importante para mí.

Quiero agradecerle a la vida por haberte puesto en mi camino, por aquella primera conversación en Teams, por los girasoles de septiembre, por aquel enero en el que comenzamos a acercarnos y por cada kilómetro que decidiste recorrer para estar conmigo.

No sé cuántos cumpleaños nos esperan, cuántas películas veremos por videollamada, cuántas visitas nos faltan ni cuántas historias nos quedan por vivir. Pero sí sé que deseo estar presente en muchas de ellas.

Ojalá la vida te regale muchísimos años, sueños cumplidos, salud, alegrías y motivos para sonreír. Y ojalá me permita acompañarte en muchos de esos años.

Hoy celebro tu cumpleaños, pero también celebro la suerte de coincidir contigo. Porque de todas las personas que pudieron cruzarse en mi camino, qué bonito que hayas sido tú.

Feliz cumpleaños, mi amor. Gracias por existir y por formar parte de mi historia.

Te quiero muchísimo ❤️

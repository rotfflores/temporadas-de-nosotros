# Lety → Mario · Temporadas de Nosotros

Sitio independiente para el paquete básico **Nuestro capítulo** ($79): cuatro películas, una serie de tres episodios, un memorama, fotos, videos y mensajes, con enlace permanente. Es una copia de la carpeta de Fernando y Miriam con contenido nuevo. La plantilla raíz y las carpetas de otros clientes no se modificaron; el progreso se guarda con su propia clave (`lm_v1`), así que no se mezcla con otros clientes en el mismo navegador.

## Datos del cliente

- Envía: Leticia (Lety). Recibe: Mario.
- Fecha especial: 24 de abril de 2022 (el día de la llamada y la Feria del Caballo).
- WhatsApp de Lety: 52 55 4708 1718 (`525547081718`). No se muestra en la página; solo se usa en el botón «Enviar mi respuesta a Lety» de la Temporada Final.

## Contenido

- 32 fotografías y 3 videos recibidos (WhatsApp, 4 de noviembre de 2026, 8:22 p. m.). Fotos en WebP en `assets/fotos/foto-01` a `foto-32` (01–16 las que llegaron primero, 17–32 las del segundo envío). `portada-*.webp` son versiones horizontales con fondo difuminado para las tarjetas; `hero.webp` es la portada de escritorio (foto 24) y en celular se usa `foto-18`.
- Videos en `assets/video/momento-1..3.mp4` (sin sonido, en bucle) con miniatura `assets/fotos/momento-N.webp`: 1 selfi corta, 2 caminando de la mano en Teotihuacán (en la historia y en «Contigo aprendí»), 3 selfi con fuegos artificiales (en la historia, en el 24 de abril).
- Imágenes de ambiente (`assets/ambiente/`, fotos libres de Pexels reutilizadas de otros clientes): se usan `camino` (cuando cada quien tomó su camino) y `carta` (en «Gracias por quedarte»). La tarjeta «Nuestra historia, en palabras de Lety» usa la foto 01, como pidió Obed.
- **«Nuestra historia favorita»** (primera película, Top 10, unos 6 minutos) reproduce la historia completa de Lety, palabra por palabra, repartida en subtítulos. También aparece completa en la tarjeta extra «Nuestra historia, en palabras de Lety».
- **«Qué fortuna que seas tú»** (lo que siente), **«Contigo aprendí»** (lo aprendido juntos), **«Gracias por quedarte»** (agradecimientos) y la serie **«Los capítulos que nos esperan»** («Lo que eres para mí», «Lo que sueño contigo» con metas y «En cada una de mis vidas») son texto creativo basado en su historia. La carta final, firmada «Con todo mi amor, Lety», también. No se inventaron lugares, fechas ni anécdotas.
- Máximo 10 imágenes o videos por película o serie (`verificar.cjs` lo comprueba, y también que se usen las 32 fotos).
- Canciones del cliente, recortadas desde antes del clímax hasta el final (más largas que los 70 s de música de cada película, para que no se repitan) con fundidos y volumen igualado (−14 LUFS):
  - «Te Esperaba» (Carlos Rivera), desde 2:27, 56 s → «Nuestra historia favorita», la serie y el video final
  - «Tú Sí Sabes Quererme» (Natalia Lafourcade con Los Macorinos), desde 2:43, 81 s → «Qué fortuna que seas tú» y el episodio 1
  - «Contigo Aprendí» (Armando Manzanero), desde 2:13, 79 s → «Contigo aprendí» y el episodio 2
  - «Canción especial 1» (el archivo llegó sin nombre), desde 1:48, 88 s → «Gracias por quedarte» y el episodio 3
- `assets/audio/historia-completa.mp3` (6 min 11 s): pista continua de «Nuestra historia favorita», a pedido de la clienta para que la canción no se repita: «Te Esperaba» completa desde el inicio y, con un fundido, «Tú Sí Sabes Quererme» desde el inicio.
- `assets/video/para-mario.mp4`: montaje vertical de 39 s con dieciséis fotos, el video de Teotihuacán y «Te Esperaba».
- `assets/og.jpg` (1200 × 630): captura de la portada para la vista previa de WhatsApp.

## Revisión y publicación

Abrir `index.html` o servir esta carpeta como sitio estático. `node verificar.cjs` comprueba el alcance del paquete, que la primera película y la tarjeta extra reproduzcan la historia de Lety (la de abajo), la contraseña, la fecha, el límite de 10 medios, el WhatsApp, las rutas de medios y que el progreso no se comparta con otros clientes.

Contraseña: `240422` (la dio Obed; es la fecha especial en formato DDMMAA). En el sitio solo está su huella SHA-256 en `cliente.js`. No lleva fecha de estreno.

URL: `https://streaming-us.rotfstudio.com/clientes/leticia-mario/sitio/splash.html`. La vista previa de WhatsApp usa `index.html?compartir=1`.

## Su historia, tal como la envió Lety

<!-- historia -->
❤️ NUESTRA HISTORIA…

Una historia que el destino tenía pendiente.

Hay historias de amor que comienzan con un primer encuentro, otras con una mirada inesperada y algunas, como la nuestra, comienzan mucho antes de que el corazón alcance a comprenderlo.

Nos conocimos en la Universidad Politécnica de Tecámac, sin imaginar que aquella coincidencia algún día se convertiría en uno de los capítulos más bonitos de nuestras vidas. Éramos dos personas que compartían un mismo espacio, sin saber que el destino ya había cruzado nuestros caminos y que todavía tenía algo maravilloso preparado para nosotros.

Después, la vida siguió su curso. Dejamos de frecuentarnos, cada quien tomó su propio camino y el tiempo pasó. Quizá en aquel momento no era nuestro tiempo, quizá todavía teníamos que vivir otras experiencias, aprender, crecer y recorrer otros caminos antes de volver a encontrarnos.

Pero hay personas que llegan a nuestra vida y dejan una huella que ni el tiempo ni la distancia consiguen borrar.

Y entonces llegó el 24 de abril de 2022…

Una llamada telefónica, una conversación, una invitación y un plan que parecía tan sencillo: ir juntos a la Feria del Caballo.

Jamás imaginamos que aquella decisión, aparentemente tan casual, terminaría convirtiéndose en el comienzo de nuestra propia historia de amor.

Entre música, sonrisas, miradas, conversaciones y momentos compartidos, algo comenzó a despertar. Y quizá ninguno de los dos lo sabía todavía, pero aquella noche estábamos escribiendo las primeras páginas de una historia que cambiaría nuestras vidas.

Fue entonces cuando entendimos que nuestra historia aún no había comenzado. Que la vida nos estaba regalando una nueva oportunidad, no para volver al pasado, sino para descubrir todo lo bonito que todavía podíamos construir juntos.

Y qué maravilloso ha sido descubrirte, conocerte de otra manera, compartir mis días contigo, reír a tu lado, crear recuerdos, vivir aventuras, superar momentos y encontrar en ti a esa persona con la que quiero seguir sumando historias.

Porque amarte no solamente significa disfrutar de los días bonitos; también significa elegirte en los días difíciles, tomarte de la mano cuando las cosas no son sencillas, celebrar tus alegrías, acompañarte en tus sueños y seguir encontrando motivos para enamorarme de ti.

Hoy puedo decir que agradezco profundamente aquella llamada, aquella invitación y, sobre todo, agradezco a la vida por haberte vuelto a poner en mi camino.

No sé cuántas vueltas tuvo que dar el destino para reunirnos nuevamente, pero sí sé que volvería a recorrer cada uno de esos caminos si al final me llevaran otra vez a ti.

Y si pudiera regresar a aquella noche del 24 de abril, volvería a aceptar esa invitación, volvería a encontrarte, volvería a mirarte y volvería a elegir comenzar esta historia contigo.

Porque entre tantas personas, tantos lugares y tantos caminos, qué fortuna haber coincidido contigo. Qué fortuna que seas tú. Qué fortuna que, después de todo, la vida nos haya permitido escribir este amor.

Y si esta vida me concediera mil oportunidades de vivir, quisiera encontrarte en cada una de ellas. Porque no solamente agradezco que hayas llegado a mi vida, agradezco que te hayas quedado y que hoy seas parte de mi felicidad.

24 DE ABRIL DE 2022

El día en que el destino nos dio una segunda oportunidad y comenzó nuestra historia favorita.

Y esto no es el final de la película… apenas es el comienzo de todos los capítulos que todavía nos esperan.

PROTAGONISTAS: LETY Y MARIO.

Una historia real. Un amor que volvió a encontrarse. Dos corazones y toda una vida de recuerdos por construir.

Y el amor… apenas comienza. ❤️

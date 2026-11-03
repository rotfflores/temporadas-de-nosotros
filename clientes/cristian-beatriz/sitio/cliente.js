/* Contenido exclusivo de Cristian para Beatriz; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Cristian';
  const B = 'Beatriz';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = name => `assets/ambiente/${name}.webp`;
  const tracks = [
    { titulo: 'Compartir — Carla Morrison', src: 'assets/audio/compartir-climax.mp3' },
    { titulo: 'Fuego dentro de mi risa', src: 'assets/audio/fuego-dentro-de-mi-risa-climax.mp3' },
    { titulo: 'Valiente — Koko', src: 'assets/audio/valiente-climax.mp3' },
    { titulo: 'Compartir — Carla Morrison', src: 'assets/audio/compartir-coro-climax.mp3' }
  ];

  /* La carta de Cristian, tal como la envió (una sola copia, sin cambios). */
  const carta = [
    'Beatriz:',
    'No sé exactamente cómo comenzar a decirte todo lo que llevo dentro, porque cuando se trata de ti, las palabras a veces se quedan cortas.',
    'Quiero que sepas que te amo. Te amo por lo que eres, por tu manera de ser, por esos pequeños detalles que quizá para ti pasan desapercibidos, pero que para mí significan muchísimo.',
    'Desde que llegaste a mi vida despertaste sentimientos que creí que ya no volvería a experimentar. Me hiciste volver a ilusionarme, a disfrutar de los pequeños momentos, a querer compartir mis días con alguien y a imaginar un futuro de dos.',
    'No voy a decir que todo ha sido perfecto, porque hemos tenido diferencias, momentos difíciles y situaciones que nos han lastimado. Pero si algo tengo claro es que mis sentimientos por ti han sido sinceros.',
    'No quiero que dudes de lo importante que eres para mí. Me gusta estar contigo, cuidarte, consentirte, escucharte y compartir hasta los momentos más sencillos. Porque al final entendí que el amor también está en esas pequeñas cosas que construimos día con día.',
    'Si pudiera pedir algo, sería que nunca olvidáramos por qué nos elegimos, que aprendamos a escucharnos, a comprendernos y a cuidarnos incluso cuando las cosas no sean fáciles.',
    'No sé qué nos tenga preparado la vida, pero hoy quiero que sepas que mi corazón te quiere, que agradezco haberte encontrado y que, entre tantas personas en este mundo, yo sigo sintiendo algo muy especial por ti.',
    'Te amo, Beatriz. Y si algo deseo es que podamos seguir escribiendo nuestra historia, pero siempre desde el amor, la confianza y las ganas de elegirnos.',
    'Con todo mi cariño. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B], apodo: B,
    fechaInicio: '2025-02-26', anioInicio: 2025, anios: 1, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Compartir', artista: 'Carla Morrison', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir escribiendo nuestra historia', 'Nunca olvidar por qué nos elegimos', 'Un futuro de dos, desde el amor y la confianza'],
    mensajeFinal: 'Te amo, Beatriz. Con todo mi cariño. ❤️ — Cristian'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-05.webp', perfilB: foto(6), perfilPareja: foto(5),
    t0: foto(1), t1: foto(2), t2: foto(3), t3: foto(4), t4: foto(5), t5: foto(6),
    t6: amb('rosas'), t7: amb('corazon-luces'), final: portada(5),
    puzzle: foto(5), puzzle2: foto(1), postCreditos: foto(3)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = tracks.map(t => t.src);
  c.media.canciones = tracks.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-beatriz.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: 'e132df45531dffc0ffad3cb99aa224f3adb906a816f688b16599d5941c742066', pistaPassword: 'Cristian te la envió por WhatsApp.', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '525663696233', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/cristian-beatriz/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, ilusión y ganas de elegirnos',
    heroTag: 'EXCLUSIVO PARA BEATRIZ', heroTop: 'Una historia de Cristian para Beatriz',
    sinopsis: 'Desde el 26 de febrero de 2025, Cristian y Beatriz escriben una historia que no siempre ha sido fácil, pero sí sincera. Cuatro películas, una serie y un juego sobre volver a ilusionarse y elegirse cada día.',
    generos: ['Romance', 'Drama sincero', 'Nuestra historia'], filaRecomendada: 'Te amo por lo que eres'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 60) => ({
    num, tipo: 'pelicula', titulo, anio: 2025, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Te amo por lo que eres', portada(5), tracks[0],
      'La carta de Cristian para Beatriz, palabra por palabra: todo lo que lleva dentro y no siempre sabe cómo decir.', [
        scene(foto(5), 'Beatriz:', 'No sé exactamente cómo comenzar a decirte todo lo que llevo dentro,'),
        scene(amb('carta'), 'porque cuando se trata de ti,', 'las palabras a veces se quedan cortas.'),
        scene(foto(1), 'Quiero que sepas que te amo.', 'Te amo por lo que eres, por tu manera de ser,'),
        scene(foto(6), 'por esos pequeños detalles que quizá para ti pasan desapercibidos,', 'pero que para mí significan muchísimo.'),
        scene(foto(3), 'Desde que llegaste a mi vida despertaste sentimientos', 'que creí que ya no volvería a experimentar.'),
        scene(amb('corazon-luces'), 'Me hiciste volver a ilusionarme, a disfrutar de los pequeños momentos,', 'a querer compartir mis días con alguien y a imaginar un futuro de dos.'),
        scene(amb('manos'), 'No voy a decir que todo ha sido perfecto,', 'porque hemos tenido diferencias, momentos difíciles y situaciones que nos han lastimado.'),
        scene(foto(2), 'Pero si algo tengo claro', 'es que mis sentimientos por ti han sido sinceros.'),
        scene(foto(1), 'No quiero que dudes de lo importante que eres para mí.'),
        scene(foto(4), 'Me gusta estar contigo, cuidarte, consentirte, escucharte', 'y compartir hasta los momentos más sencillos.'),
        scene(amb('rosas'), 'Porque al final entendí que el amor también está en esas pequeñas cosas', 'que construimos día con día.'),
        scene(foto(3), 'Si pudiera pedir algo, sería que nunca olvidáramos por qué nos elegimos,', 'que aprendamos a escucharnos, a comprendernos y a cuidarnos', 'incluso cuando las cosas no sean fáciles.'),
        scene(amb('corazon-luces'), 'No sé qué nos tenga preparado la vida,', 'pero hoy quiero que sepas que mi corazón te quiere,'),
        scene(foto(6), 'que agradezco haberte encontrado y que, entre tantas personas en este mundo,', 'yo sigo sintiendo algo muy especial por ti.'),
        scene(foto(5), 'Te amo, Beatriz.', 'Y si algo deseo es que podamos seguir escribiendo nuestra historia,'),
        scene(foto(2), 'pero siempre desde el amor, la confianza y las ganas de elegirnos.', 'Con todo mi cariño. ❤️')
      ], 182),
    film(1, 'Volver a ilusionarme', portada(1), tracks[1],
      'Cristian creía que ciertos sentimientos ya no volverían. Entonces llegó Beatriz y despertó todo otra vez.', [
        scene(foto(6), 'Antes de ti, creía que ciertas cosas', 'ya no me iban a volver a pasar.'),
        scene(amb('cielo-rosa'), 'Que ya no iba a sentir nervios por ver a alguien,', 'ni ganas de contarle todo mi día.'),
        scene(foto(1), 'Y entonces llegaste tú, Beatriz.', 'Y sin pedir permiso, despertaste todo otra vez.'),
        scene(amb('estrellas'), 'Me hiciste volver a ilusionarme,', 'a mirar hacia adelante con ganas.'),
        scene(amb('flores'), 'A disfrutar de lo sencillo:', 'una risa, un mensaje, un rato a tu lado.'),
        scene(foto(5), 'Desde el 26 de febrero de 2025, mi vida tiene otro brillo.', 'Y ese brillo eres tú.')
      ], 62),
    film(2, 'Valiente', portada(3), tracks[2],
      'No todo ha sido perfecto. Esta es la película de los días difíciles y de las ganas de seguir eligiéndose.', [
        scene(amb('camino'), 'Ningún camino que vale la pena es completamente recto.'),
        scene(foto(3), 'Hemos tenido diferencias y días difíciles,', 'momentos que nos dolieron a los dos.'),
        scene(amb('manos'), 'Pero amar también es eso:', 'ser valientes para quedarnos y arreglarlo juntos.'),
        scene(foto(2), 'Quiero que aprendamos a escucharnos,', 'a comprendernos y a cuidarnos.'),
        scene(amb('corazon-cielo'), 'Incluso cuando las cosas no sean fáciles,', 'que nunca olvidemos por qué nos elegimos.'),
        scene(foto(5), 'Porque lo que siento por ti es sincero,', 'y por ti vale la pena ser valiente.')
      ], 64),
    film(3, 'Las pequeñas cosas', portada(4), tracks[3],
      'El amor también está en lo sencillo: cuidarte, consentirte, escucharte y compartir hasta los momentos más simples.', [
        scene(foto(4), 'Hay quien piensa que el amor está en los grandes gestos.'),
        scene(foto(2), 'Yo lo encontré en lo pequeño:', 'en tu mano junto a la mía.'),
        scene(foto(1), 'En estar contigo, en cuidarte y consentirte,'),
        scene(amb('rosas'), 'en escucharte y compartir', 'hasta los momentos más sencillos.'),
        scene(foto(3), 'En esos ratos tranquilos,', 'cuando el mundo se queda afuera.'),
        scene(amb('corazon-neon'), 'Son pequeñas cosas, Beatriz,', 'pero con ellas construimos lo nuestro día con día.'),
        scene(foto(6), 'Y no quiero dejar de compartirlas contigo.')
      ], 64)
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Nuestra historia', anio: 2025,
    clasificacion: 'TP', imagen: portada(2), musica: tracks[1].src, cancion: tracks[1].titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 26 de febrero de 2025: lo que despertaste, lo que construimos día con día y lo que queremos seguir escribiendo.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '26 de febrero de 2025'], ['Lo que sigue', 'Por escribir juntos']],
    episodios: [
      { titulo: 'Desde que llegaste', duracion: 58, descripcion: 'El día en que todo volvió a sentirse nuevo.', musica: tracks[1].src,
        escenas: [
          scene(amb('cielo-rosa'), 'Algunas historias empiezan sin que uno se dé cuenta.'),
          scene(foto(5), 'La nuestra empezó el 26 de febrero de 2025.', 'Y desde entonces, nada ha sido igual.'),
          scene(foto(1), 'Despertaste sentimientos que creí que ya no volvería a experimentar.'),
          scene(foto(6), 'Y me hiciste imaginar un futuro de dos.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Día con día', duracion: 58, descripcion: 'Lo que se construye con paciencia, con detalles y con ganas.', musica: tracks[2].src,
        escenas: [
          scene(amb('camino'), 'No todo ha sido perfecto, y está bien.'),
          scene(foto(3), 'Cada diferencia nos ha enseñado algo:', 'a hablar, a escuchar, a tener paciencia.'),
          scene(foto(2), 'Lo que tenemos se construye día con día,', 'con detalles, con cuidado y con ganas.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Seguir eligiéndonos', duracion: 58, descripcion: 'El próximo capítulo todavía no está escrito, pero ya tiene protagonistas.', musica: tracks[3].src,
        escenas: [
          scene(amb('estrellas'), 'No sé qué nos tenga preparado la vida…'),
          scene(foto(4), 'pero sé lo que quiero:', 'seguir escribiendo esta historia contigo.'),
          scene(amb('carta'), 'Siempre desde el amor, la confianza', 'y las ganas de elegirnos.'),
          scene(foto(5), 'Te amo, Beatriz.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'La carta de Cristian', img: amb('carta'), texto: cartaTexto },
    { titulo: 'Tu manera de ser', img: foto(6), texto: 'Esos pequeños detalles que para mí significan muchísimo.' },
    { titulo: 'Tú y yo, hasta en dibujo', img: foto(4), texto: 'Las pequeñas cosas que construimos día con día.' },
    { titulo: 'Un futuro de dos', img: foto(5), texto: 'Entre tantas personas en este mundo, sigo eligiéndote a ti.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Beatriz', imagen: portada(5),
    sinopsis: 'La última escena guarda la carta completa de Cristian: lo que siente por ti y todo lo que desea para los dos.',
    preguntas: [
      '¿Qué fue lo primero que pensaste de mí?',
      '¿Cuál es un pequeño detalle nuestro que te hace feliz?',
      '¿Qué te gustaría que nunca olvidáramos de nosotros?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `${cartaTexto}\n\nCristian`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el cariño de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', [...new Set(tracks.map(t => t.titulo))].join(' · ')],
    ['Basada en hechos reales', 'Desde el 26 de febrero de 2025'],
    ['Agradecimientos especiales', 'A ti, por llegar a mi vida'],
    ['Próximo estreno', 'Cada nuevo día juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(3), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Beatriz… nuestra historia todavía se está escribiendo.', anuncio: 'Continuará',
    subtitulo: 'Siempre desde el amor, la confianza y las ganas de elegirnos.',
    sorpresa: 'Te amo, Beatriz. — Cristian ♡'
  };
})();

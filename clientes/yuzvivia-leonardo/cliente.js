/* Edición independiente para Yuzvivia y Leonardo. */
(() => {
  const c = window.TDN;
  const A = 'Yuzvivia', B = 'Leonardo';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${n}.webp`;
  const tracks = [
    { titulo: 'Mis planes son amarte — Juanes', src: 'assets/audio/mis-planes-son-amarte-climax.mp3' },
    { titulo: 'Stay With Me — Miki Matsubara', src: 'assets/audio/stay-with-me-miki-climax.mp3' },
    { titulo: 'Last Christmas — Wham!', src: 'assets/audio/last-christmas-climax.mp3' },
    { titulo: 'Ge An — Yao Liu Yi', src: 'assets/audio/ge-an-climax.mp3' },
    { titulo: '00:00 — Siddhartha', src: 'assets/audio/siddhartha-00-00-climax.mp3' }
  ];
  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: ['Leo'], apodo: 'Leo',
    fechaInicio: '2026-02-22', anioInicio: 2026, anios: 0, fechaCodigo: '22022026',
    ciudad: '', primeraCita: '', cancion: 'Mis planes son amarte', artista: 'Juanes',
    viajes: [], dificiles: [], anecdota: '«No creo que dures», dijiste con esa mirada retadora.',
    culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir eligiéndonos', 'Celebrar juntos cada logro', 'Construir nuestros propios sueños'],
    mensajeFinal: 'Gracias por llegar sin que te buscara y por hacer que una coincidencia se convirtiera en nuestra historia. Quiero seguir conociéndote, cuidarnos, acompañarnos en cada meta y celebrar todo lo que nos espera. Con amor, Yuzvivia.'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/portada-pareja.webp', perfilB: foto(5), perfilPareja: foto(7),
    t0: portada(7), t1: portada(10), t2: portada(8), t3: portada(9), t4: foto(4),
    t5: foto(6), t6: foto(1), t7: foto(5), final: foto(10),
    puzzle: foto(3), puzzle2: foto(4), postCreditos: foto(10)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = tracks.map(t => t.src);
  c.media.canciones = tracks.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-leonardo-juanes.mp4';
  c.media.audioRemitente = '';
  Object.assign(c.acceso, { demo: false, password: '', pistaPassword: '', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/yuzvivia-leonardo/index.html',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance y complicidad',
    heroTag: 'DE YUZVIVIA PARA LEONARDO', heroTop: 'Nuestra historia apenas comienza',
    sinopsis: 'Una coincidencia, una mirada retadora y un 22 de febrero que lo cambió todo. Cuatro películas, una serie y un juego sobre Yuzvivia y Leonardo.',
    generos: ['Romance', 'Nuestra historia', 'Basada en hechos reales'], filaRecomendada: '22 de febrero'
  });
  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 60) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Sin buscarlo', portada(7), tracks[3],
      'Una coincidencia que ninguno de los dos planeó y una conexión imposible de ignorar.', [
        scene(foto(1), 'Cuando Leo y yo nos conocimos, ninguno de los dos estaba buscando algo.'),
        scene(foto(7), 'Simplemente coincidimos en el momento y a la hora indicada.'),
        scene(foto(2), 'No lo planeamos. No lo esperábamos. Simplemente sucedió.'),
        scene(foto(1), 'Hubo un flechazo, una conexión que ninguno de los dos entendía.'),
        scene(foto(8), 'Y poco a poco, aquello que empezó como una sorpresa comenzó a tomar sentido.'),
        scene(foto(4), 'Sin buscarte, Leo, encontré el comienzo de algo hermoso.')
      ], 62),
    film(1, '22 de febrero', portada(10), tracks[0],
      'El día en que una coincidencia se convirtió en nuestra historia.', [
        scene(foto(3), 'Hasta que llegó aquel 22 de febrero de 2026.'),
        scene(foto(10), 'Sin saberlo, ese día estábamos dando inicio a nuestra historia.'),
        scene(foto(5), 'Empezaron las sonrisas, la complicidad y esas ilusiones que crecían sin pedir permiso.'),
        scene(foto(7), 'Los momentos inolvidables todavía estaban por llegar.'),
        scene(foto(4), 'Y yo ya quería descubrir qué más podía pasar contigo, Leonardo.')
      ]),
    film(2, 'No creo que dures', portada(8), tracks[1],
      'Una frase, una mirada retadora y la chispa que Yuzvivia nunca olvidará.', [
        scene(foto(5), 'Nunca olvidaré cuando me dijiste: «No creo que dures».'),
        scene(foto(8), 'Tampoco olvidaré tu mirada retadora.'),
        scene(foto(4), 'En medio de aquel juego de palabras había una conexión increíble.'),
        scene(foto(9), 'Me hiciste sonreír y me dejaste con ganas de saber más de ti.'),
        scene(foto(3), 'Aquí seguimos, escribiendo nuestra respuesta un día a la vez.')
      ]),
    film(3, 'Lo que viene contigo', portada(9), tracks[2],
      'Gratitud por lo vivido y ganas de cuidar todos los capítulos que vienen.', [
        scene(foto(2), 'Leo, gracias por convertir los días sencillos en recuerdos que quiero guardar.'),
        scene(foto(9), 'Gracias por tu compañía, por las conversaciones y por las sonrisas que llegan sin avisar.'),
        scene(foto(3), 'Quiero celebrar tus metas como si fueran mías y saberte cerca cuando necesites apoyo.'),
        scene(foto(10), 'Quiero que sigamos conociéndonos, aprendiendo a cuidarnos y eligiéndonos con libertad.'),
        scene(foto(4), 'Nuestro primer aniversario aún está por venir. Me ilusiona todo lo que construiremos hasta entonces y después.'),
        scene(foto(10), 'Leo, Yuzvivi y Roxxy Pop estarán siempre para ti.', 'Con mis dos nombres y todo mi corazón, aquí estaré.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Apenas comienza', anio: 2026,
    clasificacion: 'TP', imagen: portada(7), musica: tracks[1].src,
    cancion: [tracks[1], tracks[4], tracks[3]].map(t => t.titulo).join(' · '),
    sinopsis: 'Tres episodios sobre nuestra conexión, un malentendido y los sueños que siguen.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Próximo capítulo', 'Por escribir juntos']],
    episodios: [
      { titulo: 'Esa conexión', duracion: 56, descripcion: 'Lo que empezó sin planes se volvió especial.', musica: tracks[1].src, cancion: tracks[1].titulo,
        escenas: [
          scene(foto(1), 'No estábamos buscando una historia de amor.'),
          scene(foto(8), 'Pero bastó coincidir para sentir que había algo distinto entre nosotros.'),
          scene(foto(4), 'Esa conexión sigue sorprendiéndome.'),
          scene(foto(7), 'Y me alegra poder descubrirla contigo, paso a paso.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'El malentendido', duracion: 56, descripcion: 'Un capítulo difícil que también forma parte de nosotros.', musica: tracks[4].src, cancion: tracks[4].titulo,
        escenas: [
          scene(foto(9), 'En nuestra historia también hubo un malentendido.'),
          scene(foto(3), 'No necesito convertirlo en una historia de culpables.'),
          scene(foto(8), 'Quiero que podamos escucharnos con calma, incluso cuando algo nos duela o nos confunda.'),
          scene(foto(10), 'Gracias por seguir aquí. Yo quiero aprender contigo a cuidarnos mejor.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Nuestro próximo capítulo', duracion: 56, descripcion: 'Los sueños que todavía podemos escribir.', musica: tracks[3].src, cancion: tracks[3].titulo,
        escenas: [
          scene(foto(10), 'Sueño con más días que se conviertan en recuerdos nuestros.'),
          scene(foto(1), 'Con acompañarnos en nuestros proyectos y celebrar cada pequeño avance.'),
          scene(foto(7), 'Con cuidarnos en los días fáciles y en los que pidan más paciencia.'),
          scene(foto(4), 'Y con llegar juntos al 22 de febrero de 2027 para mirar todo lo que construimos.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'El día que empezó todo', img: foto(3), texto: '22 de febrero de 2026. Una fecha que siempre recordaré.' },
    { titulo: 'Esa mirada retadora', img: foto(5), texto: '«No creo que dures». Todavía me hace sonreír recordarlo.' },
    { titulo: 'Nuestro secreto', img: foto(2), texto: 'De Yuzvivia para Leonardo. Aunque en secreto siempre me conociste como Roxxy Pop.' },
    { titulo: 'Un recuerdo de los dos', img: foto(7), texto: 'Una de esas fotos que me hacen sonreír cada vez que la miro.' },
    { titulo: 'Más momentos juntos', img: foto(8), texto: 'Sigamos llenando de momentos nuestros esta historia.' },
    { titulo: 'Nuestra banda sonora', img: foto(4), texto: tracks.map(t => t.titulo).join(' · ') }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Leonardo', imagen: foto(10),
    sinopsis: 'Una carta de Yuzvivia para Leo sobre lo que comenzó sin buscarlo y todo lo que aún pueden vivir.',
    preguntas: [
      '¿Qué recuerdo nuestro te hace sonreír?',
      '¿Qué sentiste cuando empezamos a conocernos?',
      '¿Qué te gustaría que hiciéramos juntos?',
      '¿Qué sueño quieres que acompañemos uno del otro?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `Leonardo, mi Leo:\n\nNunca imaginé que una coincidencia pudiera cambiar tanto. Cuando nos conocimos, ninguno estaba buscando algo; aun así, la vida nos puso frente a frente y aquella conexión comenzó a encontrar su lugar.\n\nDesde el 22 de febrero de 2026 hemos empezado a escribir una historia de sonrisas, complicidad e ilusiones. Todavía puedo ver tu mirada retadora cuando dijiste «No creo que dures». Cada vez que lo recuerdo, sonrío.\n\nGracias por estar, por darme la oportunidad de conocerte y por los momentos que ya son nuestros. Quiero acompañarte en tus metas, celebrar tus logros, escucharte de verdad y seguir aprendiendo a cuidarnos. Me emociona pensar en todo lo que podremos vivir antes de nuestro primer aniversario y mucho después.\n\nNo sé cuántos capítulos tendrá esta historia. Sí sé que quiero seguir escribiéndolos contigo, con cariño, honestidad y ganas de elegirnos cada día.\n\nCon todo mi amor,\nYuzvivia\n\nP. D. Para ti, siempre seré también Roxxy Pop. ♡`
  });
  c.creditos = [
    ['Una historia para', B], ['Con amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Primera fecha', '22 de febrero de 2026'], ['Frase inolvidable', '«No creo que dures»'],
    ['Identidad secreta', 'Roxxy Pop'], ['Banda sonora', tracks.map(t => t.titulo).join(' · ')],
    ['Agradecimiento especial', 'Por estar y seguir descubriéndonos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(10), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Leo… nuestra historia apenas comienza.', anuncio: 'Próximo estreno: 22 de febrero de 2027',
    subtitulo: 'Nuestro primer aniversario llegará con muchos recuerdos por escribir.',
    sorpresa: 'De Yuzvivia, tu Roxxy Pop, para Leonardo. ♡'
  };
})();

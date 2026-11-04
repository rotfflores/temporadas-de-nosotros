/* Contenido exclusivo de Josué para Mariana; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Josué';
  const B = 'Mariana';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const video = n => ({ img: `assets/video/momento-${String(n).padStart(2, '0')}.mp4`, poster: `assets/fotos/momento-${String(n).padStart(2, '0')}.webp` });
  const tracks = {
    eresTu: { titulo: 'Eres Tú — Manny Montes', src: 'assets/audio/eres-tu-climax.mp3' },
    ciudad: { titulo: 'Ciudad Amurallada — Ariza y Morat', src: 'assets/audio/ciudad-amurallada-climax.mp3' },
    contigo: { titulo: 'Contigo — Maniako ft. Moisés Garduño', src: 'assets/audio/contigo-climax.mp3' },
    meGustas: { titulo: 'Me Gustas Tanto — Moisés Garduño', src: 'assets/audio/me-gustas-tanto-climax.mp3' },
    enviciame: { titulo: 'Envíciame — Flex', src: 'assets/audio/enviciame-climax.mp3' }
  };

  /* Su historia, con las palabras de Josué (solo se repartió en subtítulos y se acentuó «amaré»). */
  const historia = [
    'Un 5 de septiembre decidimos empezar esto',
    'y hoy en día te has convertido en alguien', 'a quien yo no quiero perder nunca,',
    'tu flaco estará siempre para ti.',
    'Te amaré por el resto de mi vida ❤️'
  ];
  const historiaTexto = `${historia.slice(0, 4).join(' ')}\n${historia[4]}`;

  const carta = [
    'Mariana:',
    'Quise regalarte nuestra historia como si fuera una serie, porque para mí es la más bonita de todas.',
    'Desde aquel 5 de septiembre en que decidimos empezar esto, te has convertido en alguien a quien no quiero perder nunca.',
    'Gracias por tu cariño, por tu paciencia y por cada momento que hemos vivido juntos. Gracias por elegirme y por hacerme tan feliz.',
    'Quiero seguir creciendo contigo, cumplir nuestras metas y vivir muchos capítulos más a tu lado.',
    'Pase lo que pase, tu flaco estará siempre para ti.',
    'Te amaré por el resto de mi vida. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi amor'], apodo: B,
    fechaInicio: '2025-09-05', anioInicio: 2025, anios: 1, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Eres Tú', artista: 'Manny Montes', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Cumplir juntos cada meta', 'Seguir creciendo de la mano', 'Amarnos el resto de la vida'],
    mensajeFinal: 'Tu flaco estará siempre para ti. Te amaré por el resto de mi vida ❤️ — Josué'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-24.webp', perfilB: foto(1), perfilPareja: foto(6),
    t0: foto(3), t1: foto(9), t2: foto(12), t3: foto(19), t4: foto(24), t5: foto(27),
    t6: foto(34), t7: foto(42), final: portada(45),
    puzzle: foto(20), puzzle2: foto(37), postCreditos: foto(47)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks.eresTu.src, tracks.ciudad.src, tracks.contigo.src, tracks.meGustas.src, tracks.enviciame.src];
  c.media.canciones = [tracks.eresTu.titulo, tracks.ciudad.titulo, tracks.contigo.titulo, tracks.meGustas.titulo, tracks.enviciame.titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-mariana.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: '029cc0873514586e5652223ff68a1c770eb24c573058e5f9eb31fb6acd90b94d', pistaPassword: 'El día en que decidimos empezar esto (DDMMAA).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '529601059759', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/josue-mariana/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, gratitud y para siempre',
    heroTag: 'EXCLUSIVO PARA MARIANA', heroTop: 'Una historia de Josué para Mariana',
    sinopsis: 'Un 5 de septiembre decidieron empezar esto. Hoy, tu flaco te cuenta lo que significas en su vida: cuatro películas, una serie y un juego sobre su historia.',
    generos: ['Romance', 'Basada en hechos reales', 'Para siempre'], filaRecomendada: 'Tu flaco estará siempre para ti'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const vscene = (n, ...texto) => ({ ...video(n), texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2025, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', `${A}, tu flaco`], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Un 5 de septiembre', portada(6), tracks.eresTu,
      'Un 5 de septiembre decidieron empezar esto. La historia de Josué y Mariana, contada por él, con sus propias palabras.', [
        scene(foto(1), 'Mariana, esta historia es para ti.', 'La escribió tu flaco, con todo su corazón.'),
        scene(foto(2), historia[0]),
        scene(foto(3), historia[1], historia[2]),
        scene(foto(4), historia[3]),
        scene(foto(5), historia[4]),
        scene(foto(6), 'Aquel día no imaginaba todo lo que llegaría contigo,', 'pero hoy sé que fue la mejor decisión que he tomado.'),
        scene(foto(7), 'Tu sonrisa se volvió mi parte favorita del día', 'y tu compañía, mi lugar seguro.'),
        scene(foto(8), 'Gracias por quedarte, por tu paciencia', 'y por quererme tal como soy.'),
        scene(foto(9), 'Contigo todo es más bonito:', 'los días buenos se disfrutan más y los difíciles pesan menos.'),
        scene(foto(10), 'Esto apenas empieza, mi amor,', 'y quiero vivir cada capítulo contigo.')
      ], 90),
    film(1, 'Gracias por elegirme', portada(19), tracks.ciudad,
      'Hay cosas que no siempre se dicen. Josué le da las gracias a Mariana, una por una, por todo lo que ha traído a su vida.', [
        scene(foto(11), 'Mariana, hay cosas que no siempre te digo,', 'así que hoy quiero decírtelas una por una.'),
        scene(foto(12), 'Gracias por elegirme cada día', 'y por dejarme ser parte de tu vida.'),
        scene(foto(13), 'Gracias por tu paciencia, por tu cariño', 'y por esa forma tan tuya de cuidarme.'),
        scene(foto(14), 'Gracias por las risas', 'y por los momentos sencillos que contigo se vuelven especiales.'),
        scene(foto(15), 'Gracias por escucharme', 'y por estar cuando más lo necesito.'),
        scene(foto(16), 'Gracias por tomar mi mano', 'y no soltarla.'),
        vscene(17, 'Un corazón en la arena', 'para decirte lo que siento.'),
        scene(foto(18), 'Las olas pueden borrar lo que escribimos,', 'pero nunca lo que siento por ti.'),
        scene(foto(19), 'Gracias por iluminar mis días', 'como nadie lo había hecho.'),
        scene(foto(20), 'Por todo eso y por mucho más:', 'gracias, mi amor.')
      ]),
    film(2, 'Contigo', portada(27), tracks.contigo,
      'Los besos, las risas, las manos entrelazadas y todo lo que se siente estar al lado de Mariana.', [
        scene(foto(21), 'Contigo hasta las tonterías', 'se vuelven mis momentos favoritos.'),
        scene(foto(22), 'Cada beso tuyo', 'me recuerda por qué te elegí.'),
        scene(foto(23), 'Contigo puedo ser yo mismo,', 'sin miedo y sin máscaras.'),
        scene(foto(24), 'Me gusta cómo te ves a mi lado', 'y cómo me siento cuando estás cerca.'),
        scene(foto(25), 'Tus besos, tus abrazos y tu risa', 'son mi lugar favorito en el mundo.'),
        scene(foto(26), 'Tu mano en la mía', 'es todo lo que necesito para estar en paz.'),
        scene(foto(27), 'De día o de noche,', 'contigo siempre es buen momento.'),
        vscene(28, 'El amor también es dar:', 'tiempo, paciencia y el corazón completo.'),
        scene(foto(29), 'Hasta cuando te escondes de la cámara', 'me pareces la más bonita.'),
        scene(foto(30), 'Contigo, siempre contigo.')
      ]),
    film(3, 'Me gustas tanto', portada(34), tracks.meGustas,
      'Todo lo que a Josué le gusta de Mariana, lo que admira de ella y los momentos que quiere guardar para siempre.', [
        scene(foto(31), 'Me gustas tanto, Mariana,', 'que a veces no encuentro las palabras.'),
        scene(foto(32), 'Me gustas en los días buenos', 'y también en los complicados.'),
        scene(foto(33), 'De verdad o en caricatura,', 'nos vemos bonitos juntos.'),
        scene(foto(34), 'Admiro tu fuerza, tu corazón', 'y la manera en que quieres a los tuyos.'),
        scene(foto(35), 'Los que amamos también forman parte de esta historia,', 'y cada sonrisa compartida la hace más bonita.'),
        scene(foto(36), 'Momentos así', 'son los que quiero guardar para siempre.'),
        scene(foto(37), 'Me gusta tu forma de mirarme', 'y cómo me haces sentir en casa.'),
        scene(foto(38), 'Me gusta cuando te ríes conmigo,', 'porque esa risa me cambia el día.'),
        scene(foto(39), 'Me gustan tus besos, tus abrazos', 'y tu forma de quererme.'),
        scene(foto(40), 'Me gustas tanto…', 'y cada día un poquito más.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'El resto de mi vida', anio: 2025,
    clasificacion: 'TP', imagen: portada(42), musica: tracks.enviciame.src, cancion: tracks.enviciame.titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 5 de septiembre: lo que Mariana significa para Josué, las metas que sueña con ella y una promesa para siempre.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '5 de septiembre de 2025'], ['Duración', 'El resto de nuestra vida']],
    episodios: [
      { titulo: 'Lo que eres para mí', duracion: 40, descripcion: 'Mi persona favorita, mi calma y mi alegría.', musica: tracks.enviciame.src,
        escenas: [
          scene(foto(41), 'Eres mi persona favorita,', 'mi calma y mi alegría.'),
          scene(foto(42), 'Eres alguien a quien', 'no quiero perder nunca.'),
          scene(foto(43), 'Y por eso, pase lo que pase,', 'tu flaco estará siempre para ti.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que quiero contigo', duracion: 50, descripcion: 'Las metas y los sueños que Josué quiere cumplir al lado de Mariana.', musica: tracks.contigo.src,
        escenas: [
          scene(foto(44), 'Quiero seguir sumando días,', 'risas y recuerdos contigo.'),
          scene(foto(45), 'Quiero que cumplamos juntos', 'cada meta y cada sueño.'),
          scene(foto(46), 'Quiero apoyarte en todo lo que te propongas', 'y celebrar cada uno de tus logros.'),
          scene(foto(47), 'Y construir, paso a paso,', 'una vida juntos.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Para siempre', duracion: 40, descripcion: 'Una promesa de tu flaco.', musica: tracks.meGustas.src,
        escenas: [
          scene(foto(48), 'Tú, con esa sonrisa', 'que me enamora cada día,'),
          scene(foto(49), 'y yo, tu flaco,', 'siempre a tu lado.'),
          scene(foto(50), 'Te amaré por el resto de mi vida, Mariana. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Josué', img: foto(3), texto: historiaTexto },
    { titulo: 'Gracias por elegirme', img: foto(19), texto: 'Gracias por tu paciencia, por tu cariño y por esa forma tan tuya de cuidarme. Gracias por tomar mi mano y no soltarla.' },
    { titulo: 'Lo que quiero contigo', img: foto(45), texto: 'Seguir sumando días, risas y recuerdos; cumplir juntos cada meta y cada sueño, y construir, paso a paso, una vida juntos.' },
    { titulo: 'Tu flaco', img: foto(49), texto: 'Pase lo que pase, tu flaco estará siempre para ti.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Mariana', imagen: portada(45),
    sinopsis: 'La última escena guarda una carta de tu flaco: lo que agradece, lo que siente y todo lo que quiere vivir contigo.',
    preguntas: [
      '¿Qué pensaste aquel 5 de septiembre?',
      '¿Cuál es tu recuerdo favorito conmigo?',
      '¿Qué es lo que más te gusta de nosotros?',
      '¿Qué meta te gustaría que cumpliéramos juntos?',
      '¿Qué capítulo quieres que vivamos después?'
    ],
    carta: () => `${cartaTexto}\n\nTu flaco, Josué`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', `${A}, tu flaco`], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', Object.values(tracks).map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Juntos desde el 5 de septiembre de 2025'],
    ['Agradecimientos especiales', 'A Mariana, por elegirme cada día'],
    ['Próximo estreno', 'El resto de nuestra vida'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(47), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Mariana… esto apenas empieza.', anuncio: 'Continuará',
    subtitulo: 'Todos los capítulos que nos faltan por vivir.',
    sorpresa: 'Te amaré por el resto de mi vida. — Tu flaco, Josué ♡'
  };
})();

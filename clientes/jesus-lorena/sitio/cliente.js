/* Contenido exclusivo de Jesús para Lorena; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Jesús';
  const B = 'Lorena';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = name => `assets/ambiente/${name}.webp`;
  const tracks = [
    { titulo: 'Love Me Again — John Newman', src: 'assets/audio/love-me-again-climax.mp3' },
    { titulo: 'Ni contigo ni sin ti — Pepe Aguilar', src: 'assets/audio/ni-contigo-ni-sin-ti-climax.mp3' },
    { titulo: 'Soy un novato', src: 'assets/audio/soy-un-novato-climax.mp3' },
    { titulo: 'Nuestra canción', src: 'assets/audio/nuestra-cancion-climax.mp3' }
  ];

  /* Su historia, con las palabras de Jesús (solo se añadió puntuación). */
  const historia = 'Nos conocimos hace 10 años, nos tratamos poco tiempo, nos alejamos y todo. Apenas hace 2 meses lo estamos intentando: por primera vez una relación, donde hemos pasado de todo.';

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B], apodo: B,
    fechaInicio: '2026-09-06', anioInicio: 2026, anios: 0, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Love Me Again', artista: 'John Newman', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir eligiéndonos todos los días', 'Celebrar juntos muchos 6 de septiembre', 'Construir algo nuestro, sin prisa y sin miedo'],
    mensajeFinal: 'Diez años después, por fin tú y yo. Gracias por darnos esta oportunidad, Lorena. — Jesús'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-23.webp', perfilB: foto(20), perfilPareja: foto(12),
    t0: foto(13), t1: foto(15), t2: foto(18), t3: foto(14), t4: foto(19), t5: foto(22),
    t6: foto(16), t7: foto(23), final: portada(12),
    puzzle: foto(20), puzzle2: foto(9), postCreditos: foto(23)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = tracks.map(t => t.src);
  c.media.canciones = tracks.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-lorena.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: '836627b318e4847ff6a7706b1cbb71d53c475e6498fe8d74d24430ebc59e6705', pistaPassword: 'Jesús te la envió por WhatsApp. Puedes escribirla con o sin guiones.', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '529841057499', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/jesus-lorena/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor y segundas oportunidades',
    heroTag: 'EXCLUSIVO PARA LORENA', heroTop: 'Una historia de Jesús para Lorena',
    sinopsis: 'Se conocieron hace diez años, la vida los separó y hoy, por fin, se están eligiendo. Cuatro películas, una serie y un juego sobre la historia que tardó una década en empezar.',
    generos: ['Romance', 'Segundas oportunidades', 'Nuestra historia'], filaRecomendada: 'Diez años después'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 60) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Diez años después', portada(23), tracks[0],
      'Se conocieron hace diez años, se alejaron, y la vida los volvió a juntar. Esta vez, para quedarse.', [
        scene(foto(23), 'Nos conocimos hace 10 años,', 'nos tratamos poco tiempo,'),
        scene(foto(3), 'nos alejamos y todo.'),
        scene(foto(1), 'Durante mucho tiempo cada quien siguió su camino…', 'pero algo de ti nunca se fue del todo.'),
        scene(foto(20), 'Apenas hace 2 meses lo estamos intentando:'),
        scene(foto(6), 'por primera vez una relación,', 'donde hemos pasado de todo.'),
        scene(foto(12), 'Y aquí estamos, Lorena. Diez años después,', 'por fin tú y yo.')
      ], 66),
    film(1, 'Ni contigo ni sin ti', portada(13), tracks[1],
      'En dos meses han pasado de todo: risas, dudas, días difíciles. Y aun así, siempre de regreso el uno al otro.', [
        scene(foto(13), 'Dicen que dos meses es poco tiempo.', 'Nosotros ya hemos pasado de todo.'),
        scene(foto(17), 'Hemos tenido días buenos, de esos que no quieres que se acaben,'),
        scene(foto(21), 'y días difíciles, de los que ponen a prueba lo que uno siente.'),
        scene(foto(8), 'Pero cada vez que algo se complica, descubro lo mismo:', 'no sé estar sin ti.'),
        scene(foto(7), 'Y eso, Lorena, es lo único que necesito saber', 'para seguir intentándolo contigo.')
      ], 70),
    film(2, 'Soy un novato', portada(16), tracks[2],
      'Jesús confiesa que en esto de quererte bonito todavía está aprendiendo… y que no piensa dejar de practicar.', [
        scene(foto(16), 'Te confieso algo: contigo me siento un novato.'),
        scene(foto(18), 'Me pongo nervioso, a veces no sé qué decir', 'y otras digo más de la cuenta.'),
        scene(foto(15), 'Pero si de algo estoy seguro', 'es de que quiero aprender a quererte bien.'),
        scene(foto(14), 'Aprenderme tus gestos, tus silencios,', 'lo que te hace reír y lo que te preocupa.'),
        scene(foto(4), 'Quiero ser el mejor alumno de esta historia,', 'aunque me tome toda la vida.')
      ]),
    film(3, 'Así eres tú', portada(10), tracks[3],
      'Inteligente, hermosa, trabajadora, emprendedora, sentimental y alegre. Una película sobre todo lo que Jesús admira de ti.', [
        scene(foto(10), 'Si alguien me pregunta cómo eres,', 'no me alcanza una sola palabra.'),
        scene(foto(9), 'Eres inteligente y hermosa,', 'de las que iluminan cualquier lugar sin proponérselo.'),
        scene(foto(2), 'Eres trabajadora y emprendedora:', 'admiro la fuerza con la que sales adelante.'),
        scene(foto(5), 'Eres sentimental,', 'y con ese corazón tan grande cuidas a los que quieres.'),
        scene(foto(19), 'Y eres alegre, Lorena.', 'Tu sonrisa me cambia el día.'),
        scene(foto(22), 'Así eres tú.', 'Y así es como te quiero.')
      ], 64)
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Nuestra primera temporada', anio: 2026,
    clasificacion: 'TP', imagen: portada(12), musica: tracks[0].src, cancion: tracks[0].titulo,
    sinopsis: 'Tres episodios sobre la historia que tardó diez años en empezar: el reencuentro, lo que hemos vivido y todo lo que viene.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '6 de septiembre de 2026'], ['Lo que sigue', 'Por escribir juntos']],
    episodios: [
      { titulo: 'El reencuentro', duracion: 58, descripcion: 'Diez años de distancia y un camino que nos volvió a cruzar.', musica: tracks[0].src,
        escenas: [
          scene(amb('camino'), 'Hay caminos que se separan… y años después se vuelven a encontrar.'),
          scene(foto(11), 'Yo seguí con mi vida, haciendo lo que me toca, sin saber que te iba a volver a ver.'),
          scene(amb('cielo-rosa'), 'Y un día, sin avisar, volviste a ser mi persona favorita.'),
          scene(foto(23), 'El 6 de septiembre decidimos dejar de esperar.', 'Ahí empezó nuestra primera temporada.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que hemos vivido', duracion: 58, descripcion: 'Dos meses que se sienten como muchos capítulos.', musica: tracks[1].src,
        escenas: [
          scene(amb('manos'), 'En poco tiempo hemos pasado de todo.'),
          scene(foto(6), 'Y cada cosa, buena o difícil, me ha enseñado algo de ti.', 'Gracias por tu paciencia, por tus ganas y por no rendirte conmigo.'),
          scene(foto(20), 'Lo que hemos vivido me confirma que valió la pena esperarte.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que viene', duracion: 58, descripcion: 'El próximo capítulo todavía no tiene título, pero sí protagonistas.', musica: tracks[3].src,
        escenas: [
          scene(amb('carta'), 'No sé todo lo que nos espera, pero quiero descubrirlo contigo.'),
          scene(foto(14), 'Quiero que celebremos muchos 6 de septiembre.', 'Quiero apoyarte en tus sueños y en cada proyecto que emprendas.'),
          scene(foto(12), 'Y quiero que esta historia, que tardó diez años en empezar,', 'no termine nunca.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Jesús', img: amb('carta'), texto: historia },
    { titulo: 'Tu sonrisa', img: foto(19), texto: 'La que me alegra cualquier día.' },
    { titulo: 'Así te veo', img: foto(10), texto: 'Inteligente, hermosa, trabajadora, emprendedora, sentimental y alegre.' },
    { titulo: 'Tú y yo', img: foto(12), texto: 'Diez años después, mi lugar favorito es a tu lado.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Lorena', imagen: portada(12),
    sinopsis: 'La última escena reúne todo lo que Jesús siente por ti y todo lo que sueña para los dos.',
    preguntas: [
      '¿Qué fue lo primero que pensaste cuando volvimos a hablar?',
      '¿Qué es lo que más disfrutas cuando estamos juntos?',
      '¿Qué te gustaría que hiciéramos para nuestro próximo 6 de septiembre?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `Lorena:\n\nNos conocimos hace diez años. Nos tratamos poco tiempo, nos alejamos y cada quien siguió su camino. Si alguien me hubiera dicho entonces que un día íbamos a estar aquí, quizá no lo habría creído.\n\nY sin embargo, aquí estamos. Desde el 6 de septiembre lo estamos intentando, por primera vez, en serio. En este tiempo hemos pasado de todo, y aun así cada día me convenzo más de que vale la pena.\n\nGracias por darnos esta oportunidad. Gracias por tu paciencia cuando todavía estoy aprendiendo, por tu alegría que me contagia y por ese corazón tan sentimental que tienes. Admiro lo inteligente, trabajadora y emprendedora que eres, y quiero estar a tu lado para aplaudir cada cosa que logres.\n\nNo te prometo que todo será perfecto, pero sí que voy a poner todo de mí para que esta historia, que tardó diez años en empezar, siga creciendo.\n\nTe quiero, Lorena.\n\nTuyo,\nJesús`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el cariño de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', tracks.map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Diez años de espera y una primera temporada'],
    ['Agradecimientos especiales', 'A ti, por darnos esta oportunidad'],
    ['Próximo estreno', 'Cada nuevo día juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(23), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Lorena… esta apenas es la primera temporada.', anuncio: 'Continuará',
    subtitulo: 'Lo mejor de nuestra historia todavía no se ha estrenado.',
    sorpresa: 'Diez años después, por fin tú y yo. — Jesús ♡'
  };
})();

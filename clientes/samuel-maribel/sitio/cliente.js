/* Contenido exclusivo de Samuel para Maribel; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Samuel';
  const B = 'Maribel';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = name => `assets/ambiente/${name}.webp`;
  const tracks = [
    { titulo: 'Regalo de Dios — Julión Álvarez', src: 'assets/audio/regalo-de-dios-climax.mp3' },
    { titulo: 'Lo tienes todo — Julión Álvarez', src: 'assets/audio/lo-tienes-todo-climax.mp3' },
    { titulo: 'Regalo de Dios — Julión Álvarez', src: 'assets/audio/regalo-de-dios-coro-climax.mp3' },
    { titulo: 'Lo tienes todo — Julión Álvarez', src: 'assets/audio/lo-tienes-todo-coro-climax.mp3' }
  ];

  /* Su historia, con las palabras de Samuel (solo se corrigieron acentos y puntuación). */
  const historia = [
    'Nosotros nos conocimos en el trabajo.',
    'Un día yo le di un aventón porque ella iba para el centro,',
    'y un compañero me dijo que si la podíamos llevar,', 'y yo acepté.',
    'Ahí nos presentamos,',
    'y ya después ella me contactó por Messenger', 'y empezamos a mensajear.',
    'Y pues de ahí en adelante nos pusimos de acuerdo para vernos',
    'y empezamos a salir.',
    'Después de tres meses nos fuimos a vivir juntos,',
    'y pues ya tenemos más de tres años juntos.'
  ];
  const historiaTexto = historia.join(' ');

  const carta = [
    'Maribel:',
    'Quién iba a decir que un aventón al centro me iba a cambiar la vida. Ese día solo acepté llevarte porque un compañero me lo pidió, y hoy no me imagino un solo día sin ti.',
    'Gracias por aquel mensaje por Messenger, por animarte a escribirme. Gracias por cada salida, por decidir que viviéramos juntos y por todo lo que hemos construido desde el 11 de abril de 2023.',
    'Llevamos más de tres años juntos y sigo sintiendo que contigo lo tengo todo. Eres mi compañera, mi hogar y mi regalo de Dios.',
    'Quiero seguir cumpliendo metas a tu lado, celebrar muchos aniversarios más y seguir llevándote a donde tú quieras ir, siempre juntos.',
    'Te amo, Maribel. Feliz aniversario. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B], apodo: B,
    fechaInicio: '2023-04-11', anioInicio: 2023, anios: 3, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Regalo de Dios', artista: 'Julión Álvarez', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir construyendo nuestro hogar', 'Cumplir juntos cada meta que nos propongamos', 'Celebrar muchos 11 de abril más'],
    mensajeFinal: 'Eres mi regalo de Dios, Maribel. Feliz aniversario. ❤️ — Samuel'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-13.webp', perfilB: foto(14), perfilPareja: foto(22),
    t0: foto(2), t1: foto(7), t2: foto(9), t3: foto(13), t4: foto(16), t5: foto(22),
    t6: foto(26), t7: foto(31), final: portada(22),
    puzzle: foto(12), puzzle2: foto(28), postCreditos: foto(13)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = tracks.map(t => t.src);
  c.media.canciones = tracks.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-maribel.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: 'b83904a6f9b4977accd1cf35d92496f16b501c2a07729fd775a9752bbe4fed16', pistaPassword: 'Samuel te la envió por WhatsApp.', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '528712326703', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/samuel-maribel/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, gratitud y un hogar de dos',
    heroTag: 'EXCLUSIVO PARA MARIBEL', heroTop: 'Una historia de Samuel para Maribel',
    sinopsis: 'Se conocieron en el trabajo y todo empezó con un aventón al centro. Desde el 11 de abril de 2023, Samuel y Maribel escriben su historia: cuatro películas, una serie y un juego sobre su camino juntos.',
    generos: ['Romance', 'Basada en hechos reales', 'Nuestra historia'], filaRecomendada: 'Un aventón al centro'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 60) => ({
    num, tipo: 'pelicula', titulo, anio: 2023, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Un aventón al centro', portada(6), tracks[0],
      'Se conocieron en el trabajo. Un aventón, una presentación y un mensaje por Messenger bastaron para empezar su historia.', [
        scene(foto(1), historia[0]),
        scene(amb('camino'), historia[1]),
        scene(foto(2), historia[2], historia[3]),
        scene(foto(3), historia[4]),
        { img: 'assets/video/momento-04.mp4', poster: 'assets/fotos/momento-04.webp', texto: [historia[5], historia[6]] },
        scene(foto(5), historia[7]),
        scene(foto(6), historia[8]),
        scene(foto(7), historia[9]),
        scene(foto(8), historia[10]),
        scene(foto(9), 'Desde el 11 de abril de 2023, Maribel,', 'tú eres mi regalo de Dios.')
      ], 96),
    film(1, 'Lo tienes todo', portada(14), tracks[1],
      'Samuel le cuenta a Maribel todo lo que ve en ella: lo que admira, lo que agradece y lo que lo hace sentir afortunado.', [
        scene(foto(10), 'Maribel, a veces me pregunto', 'cómo tuve tanta suerte.'),
        scene(foto(11), 'Tienes una sonrisa que me arregla el día', 'y una forma de querer que se siente en todo.'),
        scene(amb('flores'), 'Contigo aprendí que la felicidad', 'también está en lo sencillo.'),
        scene(foto(12), 'En llegar a casa y saber que estás ahí.'),
        scene(foto(13), 'A tu lado, cualquier lugar', 'se siente como volar.'),
        scene(foto(14), 'Lo tienes todo:', 'belleza, fuerza y un corazón enorme.'),
        scene(amb('rosas'), 'Y aun así, cada día', 'me sigues eligiendo a mí.'),
        scene(foto(15), 'Para mí lo tienes todo, Maribel.', 'Y contigo, yo también lo tengo todo.')
      ], 74),
    film(2, 'Gracias por todo', portada(19), tracks[2],
      'Hay cosas que no se dicen tan seguido como se debería. Esta película es para darle las gracias a Maribel.', [
        scene(foto(16), 'Hay cosas que no te digo tan seguido como debería.', 'Hoy quiero decirte gracias.'),
        scene(foto(17), 'Gracias por aquel mensaje,', 'por animarte a dar el primer paso.'),
        scene(foto(18), 'Gracias por aceptar', 'construir un hogar conmigo.'),
        scene(amb('manos'), 'Gracias por tu paciencia en los días difíciles', 'y por tu risa en los días buenos.'),
        scene(foto(19), 'Gracias por cuidarme, por escucharme', 'y por estar siempre a mi lado.'),
        scene(foto(20), 'Gracias por cada detalle,', 'por cada abrazo y por cada día juntos.'),
        scene(foto(21), 'Gracias por hacer de lo de todos los días', 'algo que vale la pena vivir.'),
        scene(amb('carta'), 'Si tuviera que agradecerle a la vida una sola cosa,', 'sería aquel aventón al centro.'),
        scene(foto(16), 'Gracias, Maribel.', 'Por todo.')
      ], 78),
    film(3, 'Lo que viene', portada(24), tracks[3],
      'Más de tres años juntos y apenas es el comienzo. Las metas, los sueños y todo lo que Samuel quiere vivir con Maribel.', [
        scene(amb('estrellas'), 'Llevamos más de tres años juntos…', 'y siento que apenas estamos empezando.'),
        scene(foto(23), 'Tengo muchos planes, Maribel,', 'y en todos estás tú.'),
        scene(foto(24), 'Quiero seguir construyendo nuestro hogar,', 'paso a paso, como lo hemos hecho hasta ahora.'),
        scene(amb('cielo-rosa'), 'Quiero conocer lugares nuevos contigo', 'y llenar el teléfono de fotos nuestras.'),
        scene(foto(25), 'Quiero que cumplamos cada meta que nos propongamos,', 'juntos, como equipo.'),
        scene(foto(26), 'Quiero que celebremos', 'muchos 11 de abril más.'),
        scene(amb('corazon-cielo'), 'Y cuando seamos viejitos,', 'quiero seguir dándote aventones a donde tú quieras.'),
        scene(foto(27), 'Lo mejor de nosotros', 'todavía está por venir.')
      ], 74)
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Más de tres años', anio: 2023,
    clasificacion: 'TP', imagen: portada(29), musica: tracks[1].src, cancion: tracks[1].titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 11 de abril de 2023: del trabajo al corazón, el hogar que construyeron y los años que llevan juntos.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '11 de abril de 2023'], ['Lo que sigue', 'Muchos años más juntos']],
    episodios: [
      { titulo: 'Del trabajo al corazón', duracion: 40, descripcion: 'Compañeros de trabajo, un aventón y un mensaje que lo cambió todo.', musica: tracks[1].src,
        escenas: [
          scene(amb('corazon-neon'), 'Todo empezó en el trabajo,', 'sin imaginar lo que venía.'),
          scene(foto(28), 'Un aventón, una presentación', 'y un mensaje por Messenger.'),
          scene(foto(29), 'Así de sencillo empezó', 'lo más bonito de mi vida.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Nuestro hogar', duracion: 40, descripcion: 'A los tres meses decidieron vivir juntos. Desde entonces lo comparten todo.', musica: tracks[2].src,
        escenas: [
          scene(amb('corazon-luces'), 'A los tres meses', 'nos fuimos a vivir juntos.'),
          scene(foto(30), 'Desde entonces lo compartimos todo:', 'la casa, los días y los sueños.'),
          scene(foto(31), 'Y no hay lugar en el mundo', 'donde me guste más estar que contigo.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Feliz aniversario', duracion: 40, descripcion: 'Más de tres años juntos, y las ganas de elegirse todos los días.', musica: tracks[0].src,
        escenas: [
          scene(foto(32), 'Hoy tenemos más de tres años juntos,'),
          scene(amb('flores'), 'y te volvería a elegir', 'en cada aventón, en cada mensaje y en cada día.'),
          scene(foto(1), 'Feliz aniversario, Maribel.', 'Eres mi regalo de Dios.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Samuel', img: foto(3), texto: historiaTexto },
    { titulo: 'Un aventón al centro', img: amb('camino'), texto: 'Ese día acepté llevarte sin saber que el camino iba a ser para toda la vida.' },
    { titulo: 'Lo tienes todo', img: foto(14), texto: 'Belleza, fuerza y un corazón enorme. Contigo lo tengo todo.' },
    { titulo: 'Mi regalo de Dios', img: foto(22), texto: 'Más de tres años juntos y sigo dando gracias por ti cada día.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Maribel', imagen: portada(22),
    sinopsis: 'La última escena guarda una carta de Samuel: lo que agradece, lo que siente y todo lo que quiere vivir contigo.',
    preguntas: [
      '¿Qué pensaste de mí el día del aventón?',
      '¿Qué te animó a escribirme por Messenger?',
      '¿Cuál es tu recuerdo favorito de nuestro hogar?',
      '¿Qué meta te gustaría que cumpliéramos juntos?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `${cartaTexto}\n\nSamuel`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', [...new Set(tracks.map(t => t.titulo))].join(' · ')],
    ['Basada en hechos reales', 'Desde el 11 de abril de 2023'],
    ['Agradecimientos especiales', 'Al compañero que pidió aquel aventón'],
    ['Próximo estreno', 'Cada nuevo día juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(13), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Maribel… esto apenas empieza.', anuncio: 'Continuará',
    subtitulo: 'Más de tres años juntos, y los que nos faltan.',
    sorpresa: 'Te amo, Maribel. — Samuel ♡'
  };
})();

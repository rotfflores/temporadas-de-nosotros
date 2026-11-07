/* Contenido exclusivo para Rosario (de Christian); la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Christian';
  const B = 'Rosario';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  /* Videos del cliente: en bucle y sin sonido, con su miniatura. */
  const vid = n => ({ img: `assets/video/momento-${n}.mp4`, poster: `assets/fotos/momento-${n}.webp` });
  const tracks = {
    historia: { titulo: 'Rosario, Contigo — Nuestra canción', src: 'assets/audio/rosario-contigo.mp3' },
    historiaClimax: { titulo: 'Rosario, Contigo — Nuestra canción', src: 'assets/audio/rosario-contigo-climax.mp3' },
    corazon: { titulo: 'Corazón — Los Auténticos Decadentes', src: 'assets/audio/corazon-climax.mp3' },
    sol: { titulo: 'Como un Sol — Inspector', src: 'assets/audio/como-un-sol-climax.mp3' },
    loco: { titulo: 'Que Me Digan Loco — La Original Banda El Limón', src: 'assets/audio/que-me-digan-loco-climax.mp3' },
    instante: { titulo: 'Solo un Instante — Jamaica 69', src: 'assets/audio/solo-un-instante-climax.mp3' }
  };

  const carta = [
    'Rosario:',
    'Quise regalarte nuestra historia como si fuera una película, porque para mí es la más bonita de todas.',
    'Cuando nos conocimos, los dos veníamos con el corazón lastimado. Poco a poco, plática tras plática, me devolviste la confianza y las ganas de sonreír.',
    'Gracias por aceptar a mis hijos y por quererlos como los quieres. Gracias por estar junto a mí cuando más te necesité.',
    'Hoy, 24 de diciembre, celebro contigo todo lo que hemos construido y todo lo que nos falta por vivir.',
    'Quiero seguir caminando a tu lado, cumplir juntos cada meta y que nuestra casa siempre esté llena de paz y de amor.',
    'Contigo encontré mi tranquilidad. Te quiero de verdad, mi amor. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi amor', 'mi Rosario'], apodo: 'mi amor',
    fechaInicio: '2025-12-24', anioInicio: '', aniosManual: 1, anios: 1, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Rosario, Contigo', artista: 'Nuestra canción', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Volver a empezar juntos cada día', 'Ver crecer a nuestra familia', 'Una casa llena de paz y de amor'],
    mensajeFinal: 'Contigo encontré mi tranquilidad. Te quiero de verdad, Rosario ❤️'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(19), perfilPareja: foto(16),
    t0: foto(33), t1: foto(3), t2: foto(27), t3: foto(28), t4: foto(25), t5: foto(29),
    t6: foto(20), t7: foto(40), final: portada(26),
    puzzle: foto(25), puzzle2: foto(16), postCreditos: foto(1)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks.historia.src, tracks.corazon.src, tracks.sol.src, tracks.loco.src, tracks.instante.src];
  c.media.canciones = [tracks.historia.titulo, tracks.corazon.titulo, tracks.sol.titulo, tracks.loco.titulo, tracks.instante.titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-rosario.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: '93e2a45037eb149bd13e633f2cdd848b0caaa04a4f048df7c49de10fb41a3d16', pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '528448458829', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/christian-rosario/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, segundas oportunidades y familia',
    heroTag: 'EXCLUSIVO PARA ROSARIO', heroTop: 'Una historia de amor para Rosario',
    sinopsis: 'Dos corazones lastimados, una app y muchas pláticas. La historia de cómo Christian y Rosario volvieron a confiar, a sonreír y a empezar de nuevo. Cuatro películas, una serie y un juego.',
    generos: ['Romance', 'Basada en hechos reales', 'Segundas oportunidades'], filaRecomendada: 'Porque contigo volví a empezar'
  });

  const scene = (img, ...texto) => (typeof img === 'string' ? { img, poster: img, texto } : { ...img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    /* La historia sigue la letra de «Rosario, Contigo», que suena completa (3 min). */
    film(0, 'Rosario, contigo', portada(33), tracks.historia,
      'Su historia, contada por su propia canción: dos corazones heridos, una app, muchas pláticas y un amor que les devolvió la confianza.', [
        scene(foto(1), 'Rosario, esta es nuestra historia,', 'y esta canción la cuenta mejor que nadie.'),
        scene(foto(7), 'Yo estaba muy mal, y tú también venías igual.', 'Los dos salíamos de un divorcio, con mucho dolor.'),
        scene(foto(5), 'Nos conocimos por una app y empezamos a salir,', 'platicando poco a poco, hasta no poder separarnos.'),
        scene(foto(17), 'Con cada charla y cada salida te fui queriendo más,', 'y un día ya no quisimos mirar atrás.'),
        scene(foto(16), 'Contigo volví a confiar,', 'después de todo lo que nos hizo llorar.'),
        scene(foto(25), 'Aceptaste a mis hijos, y ellos te quieren igual.', 'Evan, Hunter y Oliver te quieren mucho, se les ve.'),
        scene(foto(36), 'Los tres te dieron su lugar, y tú lo supiste aceptar.', 'Gracias por estar junto a mí cuando más te necesité.'),
        scene(foto(15), 'Contigo volví a sonreír,', 'y hoy te quiero más que ayer.'),
        scene(foto(20), 'Contigo quiero volver a empezar,', 'y escribir juntos lo que falta de esta historia.'),
        scene(foto(33), 'Rosario, mi amor, te quiero de verdad.', 'Contigo encontré mi tranquilidad.')
      ], 180),
    film(1, 'Se llevó mi corazón', portada(3), tracks.corazon,
      'Lo que Christian siente por Rosario, escena por escena: su sonrisa, su mirada y las ganas de ir siempre con ella.', [
        scene(foto(2), 'Rosario, no sé lo que me pasa', 'cuando estoy contigo.'),
        scene(foto(3), 'Me desarma tu sonrisa', 'y me encanta tu mirada.'),
        scene(foto(4), 'Contigo cualquier camino', 'se vuelve mi lugar favorito.'),
        scene(vid(1), 'Me gusta todo de ti,', 'hasta tu forma de mirarme.'),
        scene(foto(8), 'A donde vayamos,', 'lo único que quiero es ir contigo.'),
        scene(foto(9), 'Eres mi compañera de aventuras', 'y mi persona favorita.'),
        scene(foto(10), 'Contigo los días', 'se sienten más ligeros.'),
        scene(foto(11), 'Me haces reír', 'como nadie más.'),
        scene(foto(12), 'Hay algo en tu carita', 'que me gusta mucho.'),
        scene(foto(13), 'Y sin pedir permiso,', 'te llevaste mi corazón.')
      ]),
    film(2, 'Como un sol', portada(27), tracks.sol,
      'Hay cosas que no siempre se dicen. Hoy Rosario escucha, una por una, todas las gracias que Christian le debe.', [
        scene(foto(14), 'Rosario, gracias por llegar', 'cuando más lo necesitaba.'),
        scene(foto(18), 'Gracias por enseñarme', 'que se puede volver a amar.'),
        scene(foto(19), 'Gracias por tu paciencia', 'y por tu cariño de todos los días.'),
        scene(foto(21), 'Gracias por querer a mis hijos', 'como los quieres.'),
        scene(foto(22), 'Gracias por darme tu confianza', 'después de tanto dolor.'),
        scene(vid(2), 'Gracias por cada plática', 'y cada risa.'),
        scene(foto(23), 'Gracias por quedarte', 'también en los días difíciles.'),
        scene(foto(24), 'Gracias por cuidarme', 'y dejarme cuidarte.'),
        scene(foto(26), 'Gracias por hacerme sentir', 'en paz.'),
        scene(foto(27), 'Como un sol, tú me iluminas.', 'Gracias, mi amor.')
      ]),
    film(3, 'Que me digan loco', portada(28), tracks.loco,
      'Las metas y los sueños que Christian quiere cumplir al lado de Rosario y de su familia.', [
        scene(foto(28), 'Rosario, que me digan loco,', 'pero yo sueño una vida entera contigo.'),
        scene(foto(29), 'Quiero seguir construyendo', 'nuestro hogar, paso a paso.'),
        scene(foto(30), 'Quiero que sigamos siendo', 'refugio el uno del otro.'),
        scene(foto(31), 'Quiero que nuestra familia', 'siga creciendo en amor.'),
        scene(foto(34), 'Quiero celebrar contigo', 'muchos 24 de diciembre más.'),
        scene(foto(35), 'Quiero conocer el mundo', 'tomado de tu mano.'),
        scene(vid(3), 'Quiero que nunca te falten', 'motivos para sonreír.'),
        scene(foto(37), 'Quiero apoyarte', 'en cada meta que te propongas.'),
        scene(foto(38), 'Quiero envejecer contigo', 'y seguir abrazándote así.'),
        scene(foto(39), 'Esto no es un sueño, Rosario:', 'es nuestra realidad.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Volver a empezar', anio: 2026,
    clasificacion: 'TP', imagen: portada(25), musica: tracks.instante.src, cancion: tracks.instante.titulo,
    sinopsis: 'Tres episodios para celebrar este 24 de diciembre: aquel primer instante, la paz que encontraron juntos y una promesa para siempre.',
    creditos: [['Protagonista', B], ['Aniversario', '24 de diciembre'], ['Duración', 'Toda la vida']],
    episodios: [
      { titulo: 'Aquel instante', duracion: 45, descripcion: 'Desde que llegó Rosario, la tristeza se fue alejando.', musica: tracks.instante.src,
        escenas: [
          scene(foto(40), 'Desde aquel primer instante,', 'la tristeza se alejó de mí.'),
          scene(foto(41), 'Guardo cada recuerdo contigo', 'como un tesoro.'),
          scene(vid(4), 'Cada momento a tu lado', 'vale toda una vida.'),
          scene(foto(42), 'Y cada beso tuyo', 'me devuelve la calma.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Mi tranquilidad', duracion: 40, descripcion: 'Lo que Rosario significa para Christian.', musica: tracks.corazon.src,
        escenas: [
          scene(foto(43), 'Contigo encontré', 'mi tranquilidad.'),
          scene(vid(5), 'Eres mi persona favorita,', 'en cualquier versión.'),
          scene(foto(6), 'Todos nuestros momentos', 'caben en mi corazón.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Contigo, para siempre', duracion: 50, descripcion: 'Una promesa para Rosario.', musica: tracks.historiaClimax.src,
        escenas: [
          scene(foto(44), 'Rosario, contigo volví a confiar.'),
          scene(vid(6), 'Y contigo quiero', 'volver a empezar todos los días.'),
          scene(vid(7), 'Feliz 24 de diciembre, mi amor.', 'Te quiero de verdad. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Contigo volví a confiar', img: foto(16), texto: 'Después de lo que nos hizo llorar, contigo volví a confiar y a sonreír.' },
    { titulo: 'Feliz 24 de diciembre', img: foto(33), texto: 'Hoy celebro contigo todo lo que hemos construido y todo lo que nos falta por vivir.' },
    { titulo: 'Nuestra familia', img: foto(25), texto: 'Gracias por aceptar a mis hijos y por darles tanto cariño.' },
    { titulo: 'Lo que sueño contigo', img: foto(29), texto: 'Volver a empezar juntos cada día, en una casa llena de paz y de amor.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Rosario', imagen: portada(26),
    sinopsis: 'La última escena guarda una carta para Rosario: lo que Christian siente, lo que agradece y todo lo que quiere seguir viviendo con ella.',
    preguntas: [
      '¿Qué fue lo primero que te gustó de mí cuando empezamos a platicar?',
      '¿Cuál es tu recuerdo favorito conmigo?',
      '¿En qué momento supiste que ya no querías mirar atrás?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Cómo te imaginas nuestro próximo 24 de diciembre?'
    ],
    carta: () => `${cartaTexto}\n\nCon todo mi amor, Christian`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonista', B],
    ['Banda sonora', [tracks.historia, tracks.corazon, tracks.sol, tracks.loco, tracks.instante].map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Aniversario: 24 de diciembre'],
    ['Agradecimientos especiales', 'A Evan, Hunter y Oliver'],
    ['Próximo estreno', 'Todos los 24 de diciembre que nos esperan'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(1), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Rosario… esto no es el final de la película.', anuncio: 'Continuará',
    subtitulo: 'Apenas es el comienzo de todo lo que vamos a volver a empezar juntos.',
    sorpresa: 'Contigo encontré mi tranquilidad. ♡'
  };
})();

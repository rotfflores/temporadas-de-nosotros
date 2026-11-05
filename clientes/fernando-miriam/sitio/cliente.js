/* Contenido exclusivo de Fernando para Miriam; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Fernando';
  const B = 'Miriam';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = n => `assets/ambiente/${n}.webp`;
  const tracks = {
    llegaste: { titulo: 'Llegaste a Mi Vida — Carin León y Karol G', src: 'assets/audio/llegaste-a-mi-vida-climax.mp3' },
    razon: { titulo: 'Mi Razón de Ser — Banda MS', src: 'assets/audio/mi-razon-de-ser-climax.mp3' },
    enamorado: { titulo: 'Me Traes Bien Enamorado — VMJ Composiciones', src: 'assets/audio/me-traes-bien-enamorado-climax.mp3' }
  };

  /* Su historia, con las palabras de Fernando (solo se repartió en subtítulos y se acentuó «animé»). */
  const historia = [
    'La conocí en unos cursos de inglés,',
    'la conocí para las fiestas del lugar de dónde vivía ella,',
    'ese día hasta en la madrugada ya muy tarde le pregunté',
    'nos quedamos platicando afuera de su casa.',
    'Ahí fue como empezamos a tratarnos',
    'a salir a la playa',
    'a los días me animé a decirle si quería ser mi novia.'
  ];
  const historiaTexto = `${historia.slice(0, 4).join(' ')}\n${historia.slice(4).join(' ')}`;

  const carta = [
    'Miriam:',
    'Quise regalarte nuestra historia como si fuera una serie, porque para mí es la más bonita de todas.',
    'Todavía me acuerdo de aquellos cursos de inglés, de las fiestas del lugar donde vivías y de esa madrugada en que nos quedamos platicando afuera de tu casa. Ahí empezó todo.',
    'Desde aquel 14 de marzo de 2011 han pasado quince años, y te sigo eligiendo cada día.',
    'Gracias por tu amor, por tu paciencia, por cuidar de los nuestros y por hacer de nuestra casa un hogar.',
    'Quiero seguir cumpliendo metas contigo, ver crecer a nuestra familia y vivir muchos atardeceres más a tu lado.',
    'Me traes bien enamorado, igual que el primer día. Te amo. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi amor'], apodo: B,
    fechaInicio: '2011-03-14', anioInicio: 2011, anios: 15, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Llegaste a Mi Vida', artista: 'Carin León y Karol G', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Cumplir juntos cada meta', 'Ver crecer a nuestra familia', 'Amarnos toda la vida'],
    mensajeFinal: 'Me traes bien enamorado, igual que el primer día. Te amo ❤️ — Fernando'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-04.webp', perfilB: foto(15), perfilPareja: foto(3),
    t0: foto(1), t1: foto(3), t2: foto(4), t3: foto(6), t4: foto(9), t5: foto(11),
    t6: foto(15), t7: foto(17), final: portada(15),
    puzzle: foto(5), puzzle2: foto(10), postCreditos: foto(3)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks.llegaste.src, tracks.enamorado.src, tracks.razon.src, tracks.llegaste.src, tracks.razon.src];
  c.media.canciones = [tracks.llegaste.titulo, tracks.enamorado.titulo, tracks.razon.titulo, tracks.llegaste.titulo, tracks.razon.titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-miriam.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: '2f78ff294f045771bf8bcc312d12abe614934b64482f97e50ce70ff9c550f104', pistaPassword: 'El día de nuestro aniversario (DDMMAA).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '523221940568', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/fernando-miriam/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, familia y gratitud',
    heroTag: 'EXCLUSIVO PARA MIRIAM', heroTop: 'Una historia de Fernando para Miriam',
    sinopsis: 'Unos cursos de inglés, las fiestas del lugar donde ella vivía y una plática hasta la madrugada. Quince años después, Fernando le cuenta a Miriam su historia: cuatro películas, una serie y un juego.',
    generos: ['Romance', 'Basada en hechos reales', 'Familia'], filaRecomendada: 'Quince años y te sigo eligiendo'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2011, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Un 14 de marzo', portada(1), tracks.llegaste,
      'Unos cursos de inglés, las fiestas del lugar donde ella vivía y una plática que duró hasta la madrugada. Así empezó la historia de Fernando y Miriam, contada por él.', [
        scene(foto(1), 'Miriam, esta es nuestra historia,', 'contada por Fernando, tal como él la recuerda.'),
        scene(amb('carta'), historia[0]),
        scene(amb('corazon-luces'), historia[1]),
        scene(amb('estrellas'), historia[2]),
        scene(amb('balcon'), historia[3]),
        scene(amb('horizonte'), historia[4], historia[5]),
        scene(foto(2), historia[6]),
        scene(foto(3), 'Desde aquel 14 de marzo de 2011,', 'somos tú y yo.'),
        scene(foto(4), 'Quince años después,', 'te sigo eligiendo cada día.'),
        scene(foto(5), 'Y lo volvería a hacer todo:', 'quedarme platicando contigo hasta la madrugada.')
      ], 90),
    film(1, 'Me traes bien enamorado', portada(5), tracks.enamorado,
      'Quince años después, Fernando sigue igual de enamorado. Lo que siente, lo que le gusta de Miriam y lo que le provoca su sonrisa.', [
        scene(foto(4), 'Miriam, me traes bien enamorado,', 'igual que el primer día.'),
        scene(foto(5), 'Tus besos siguen siendo', 'mi lugar favorito.'),
        scene(amb('rosas'), 'Han pasado los años', 'y todavía me pones nervioso.'),
        scene(foto(3), 'Me gusta tu sonrisa, tu mirada', 'y tu forma de quererme.'),
        scene(amb('manos'), 'Me gusta caminar a tu lado', 'y tomarte de la mano.'),
        scene(foto(1), 'Desde aquellos primeros días', 'me robaste el corazón.'),
        scene(amb('corazon-neon'), 'Contigo todo se siente más bonito,', 'hasta lo más sencillo.'),
        scene(foto(2), 'Me encanta lo que somos', 'y todo lo que hemos construido.'),
        scene(amb('cielo-rosa'), 'Si me preguntan por qué sigo enamorado,', 'la respuesta eres tú.'),
        scene(foto(15), 'Eres hermosa, Miriam,', 'por dentro y por fuera.')
      ]),
    film(2, 'Mi razón de ser', portada(9), tracks.razon,
      'Los que más aman, las risas en casa y todo lo que han formado juntos en quince años.', [
        scene(foto(6), 'Miriam, verte con los que más amamos', 'me llena el corazón.'),
        scene(foto(7), 'Tu cariño y tu ternura', 'hacen de cualquier lugar un hogar.'),
        scene(foto(8), 'Admiro tu paciencia,', 'tu fuerza y tu forma de cuidar.'),
        scene(foto(9), 'Nuestra familia', 'es lo más bonito que tengo.'),
        scene(foto(10), 'Cada momento juntos, cada risa,', 'es un recuerdo que guardo.'),
        scene(foto(11), 'Ustedes son', 'mi razón de ser.'),
        scene(foto(13), 'Cada sonrisa en casa', 'es un regalo.'),
        scene(foto(14), 'Verlos crecer', 'es mi mayor orgullo.'),
        scene(foto(15), 'Gracias por cuidar de todos', 'con tanto amor.'),
        scene(foto(12), 'Todo lo que soy y todo lo que hago', 'es por ustedes.')
      ]),
    film(3, 'Gracias por llegar a mi vida', portada(17), tracks.llegaste,
      'Hay cosas que no siempre se dicen. Fernando le da las gracias a Miriam, una por una, por todo lo que ha traído a su vida.', [
        scene(foto(16), 'Miriam, gracias por llegar a mi vida.'),
        scene(foto(17), 'Gracias por la familia', 'que construimos juntos.'),
        scene(foto(18), 'Gracias por cada día a mi lado,', 'los fáciles y los difíciles.'),
        scene(amb('flores'), 'Gracias por tu paciencia', 'y por creer en mí.'),
        scene(amb('corazon-cielo'), 'Gracias por quedarte', 'durante quince años.'),
        scene(foto(6), 'Gracias por tu corazón', 'tan grande.'),
        scene(amb('luz'), 'Gracias por hacer de nuestra casa', 'un hogar.'),
        scene(foto(3), 'Gracias por elegirme', 'una y otra vez.'),
        scene(foto(5), 'Por todo eso y por mucho más:', 'gracias, mi amor.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Quince años contigo', anio: 2011,
    clasificacion: 'TP', imagen: portada(3), musica: tracks.razon.src, cancion: tracks.razon.titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 14 de marzo de 2011: lo que Miriam significa para Fernando, lo que sueña con ella y una promesa para siempre.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '14 de marzo de 2011'], ['Duración', 'Toda la vida']],
    episodios: [
      { titulo: 'Lo que eres para mí', duracion: 40, descripcion: 'Mi compañera, mi amiga y el amor de mi vida.', musica: tracks.enamorado.src,
        escenas: [
          scene(foto(2), 'Eres mi compañera, mi amiga', 'y el amor de mi vida.'),
          scene(foto(4), 'Eres mi calma', 'cuando todo se complica.'),
          scene(foto(15), 'Eres lo mejor', 'que me ha pasado.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que sueño contigo', duracion: 50, descripcion: 'Las metas y los sueños que Fernando quiere cumplir al lado de Miriam.', musica: tracks.razon.src,
        escenas: [
          scene(amb('camino'), 'Quiero seguir recorriendo el camino contigo,', 'paso a paso.'),
          scene(foto(9), 'Quiero ver crecer a nuestra familia,', 'siempre unida.'),
          scene(amb('horizonte'), 'Quiero volver a la playa contigo', 'y ver muchos atardeceres más.'),
          scene(foto(10), 'Y cumplir juntos', 'cada meta que nos propongamos.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Para siempre', duracion: 40, descripcion: 'Una promesa de Fernando.', musica: tracks.llegaste.src,
        escenas: [
          scene(foto(3), 'Quince años después,', 'te sigo eligiendo.'),
          scene(foto(5), 'Y te voy a seguir eligiendo', 'toda la vida.'),
          scene(foto(1), 'Te amo, Miriam. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Fernando', img: amb('carta'), texto: historiaTexto },
    { titulo: 'Desde el 14 de marzo de 2011', img: foto(3), texto: 'Quince años de risas, de familia y de amor. Y te sigo eligiendo cada día.' },
    { titulo: 'Lo que sueño contigo', img: amb('horizonte'), texto: 'Seguir recorriendo el camino juntos, ver crecer a nuestra familia, volver a la playa y cumplir cada meta que nos propongamos.' },
    { titulo: 'Mi razón de ser', img: foto(9), texto: 'Todo lo que soy y todo lo que hago es por ustedes.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Miriam', imagen: portada(15),
    sinopsis: 'La última escena guarda una carta de Fernando: lo que recuerda, lo que agradece y todo lo que quiere seguir viviendo contigo.',
    preguntas: [
      '¿Qué pensaste aquella madrugada en que nos quedamos platicando?',
      '¿Cuál es tu recuerdo favorito conmigo?',
      '¿Qué es lo que más te gusta de nuestra familia?',
      '¿Qué meta te gustaría que cumpliéramos juntos?',
      '¿A dónde quieres que vayamos la próxima vez?'
    ],
    carta: () => `${cartaTexto}\n\nCon todo mi amor, Fernando`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', Object.values(tracks).map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Juntos desde el 14 de marzo de 2011'],
    ['Agradecimientos especiales', 'A Miriam, por llegar a mi vida'],
    ['Próximo estreno', 'Toda una vida juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(3), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Miriam… quince años, y esto apenas empieza.', anuncio: 'Continuará',
    subtitulo: 'Todos los capítulos que nos faltan por vivir.',
    sorpresa: 'Me traes bien enamorado. — Fernando ♡'
  };
})();

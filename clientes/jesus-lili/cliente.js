/* Personalización del paquete Nuestro capítulo. La plantilla original vive en otra carpeta. */
(() => {
  const c = window.TDN;
  const A = 'Jesús';
  const B = 'Lili';
  const foto = n => `assets/fotos/pareja-${String(n).padStart(2, '0')}.jpg`;
  const poster = n => `assets/fotos/poster-${n}.jpg`;
  const ambiente = nombre => `assets/ambiente/${nombre}.jpg`;
  const tracks = [
    { titulo: 'Desde Que Te Tengo — Luis Mexia', src: 'assets/audio/desde-que-te-tengo-climax.mp3' },
    { titulo: 'Ella Es Mi Mujer — Jorge Santacruz', src: 'assets/audio/ella-es-mi-mujer-climax.mp3' },
    { titulo: 'De Puntitas — La Fugitiva de Mike Miramontes', src: 'assets/audio/de-puntitas-climax.mp3' }
  ];

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: ['goldita', 'mi chiquita hermosa'], apodo: 'mi goldita chula y preciosa',
    fechaInicio: '', anioInicio: 2026, anios: 0, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Desde Que Te Tengo', artista: 'Luis Mexia', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [], suenos: ['Viajar juntos', 'Compartir mil aventuras', 'Cuidar nuestro amor'],
    mensajeFinal: 'Gracias por llegar a mi vida. Has hecho por mí tantas cosas y sanado hasta lo que no pensé sanar. Te quiero muchísimo y te amo tanto, mi goldita chula y preciosa. Quédate conmigo por mil años más.'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.jpg', perfilB: foto(7), perfilPareja: foto(1),
    t0: poster(1), t1: poster(2), t2: poster(3), t3: poster(4), t4: poster(5),
    t5: poster(6), t6: poster(7), t7: 'assets/fotos/hero.jpg', final: 'assets/fotos/hero.jpg',
    puzzle: foto(7), puzzle2: foto(1), postCreditos: foto(6)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks[0].src, tracks[1].src, tracks[2].src, tracks[1].src, tracks[0].src];
  c.media.canciones = [tracks[0].titulo, tracks[1].titulo, tracks[2].titulo, tracks[1].titulo, tracks[0].titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/nuestro-capitulo.mp4';
  c.media.audioRemitente = '';
  Object.assign(c.acceso, { demo: false, password: '', pistaPassword: '', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/jesus-lili/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance y mucho cariño',
    heroTag: 'EXCLUSIVO PARA LILI', heroTop: 'Una historia de Jesús para Lili',
    sinopsis: 'Apenas llevamos unos meses juntos, pero ya quiero mil años más contigo. Cuatro películas, una serie y un juego sobre todo lo que siento por ti, mi goldita chula y preciosa.',
    generos: ['Romance', 'Basada en nosotros', 'Continuará'], filaRecomendada: 'Llegaste a mi vida'
  });

  const scene = (img, texto) => ({ img, poster: img, texto: [texto] });
  const film = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen, musica: track.src,
    cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Protagonistas', `${A} y ${B}`], ['Banda sonora', track.titulo]],
    episodios: [{ titulo, duracion: 62, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });

  const peliculas = [
    film(0, 'Llegaste a mi vida', poster(1), tracks[0],
      'Hace unos meses llegaste a mi vida y todo comenzó a sentirse distinto. Esta es la primera película de nuestra historia.', [
        scene(ambiente('ciudad-noche'), 'Hay días que parecen uno más, hasta que alguien llega y cambia la forma de mirarlos.'),
        scene(foto(1), 'Tú llegaste a mi vida, Lili, y la llenaste de una calma que no sabía que necesitaba.'),
        scene(foto(7), 'Estos primeros meses ya me dieron un motivo nuevo para sonreír todos los días.'),
        scene(ambiente('cielo-rosa'), 'Si este es solo el comienzo, no imaginas cuánto deseo vivir lo que sigue contigo.'),
        scene(foto(6), 'Gracias por estar aquí, mi chiquita hermosa.')
      ]),
    film(1, 'Lo que sanaste en mí', poster(2), tracks[1],
      'Has hecho por mí tantas cosas y sanado incluso lo que nunca pensé sanar. Gracias por quererme así.', [
        scene(foto(2), 'Has hecho por mí tantas cosas, incluso cuando quizá no te has dado cuenta.'),
        scene(ambiente('flores'), 'Con tu forma de quererme, has sanado hasta lo que no pensé sanar.'),
        scene(foto(3), 'A tu lado aprendí que el amor también puede sentirse como paz y confianza.'),
        scene(foto(4), 'Quiero cuidar esta historia con la misma ternura con la que tú has cuidado de mí.'),
        scene(ambiente('cielo-rosa'), 'Te quiero muchísimo y te amo más de lo que a veces sé explicar.')
      ]),
    film(2, 'Mil aventuras contigo', poster(3), tracks[2],
      'Quiero descubrir lugares nuevos contigo y reunir mil historias que algún día podamos contar.', [
        scene(ambiente('camino'), 'Quiero que tengamos mil aventuras y mil historias que contar.'),
        scene(foto(5), 'Algunas comenzarán con un plan; otras, con un “vamos” dicho de repente.'),
        scene(ambiente('ciudad-atardecer'), 'Hay ciudades que todavía no conocemos y paisajes que nos esperan.'),
        scene(foto(6), 'El destino me emociona más cuando imagino recorrerlo a tu lado.'),
        scene(ambiente('ciudad-luces'), 'Y al volver, quiero que cada recuerdo nos encuentre de la mano.')
      ]),
    film(3, 'Hoy, mañana y siempre', poster(4), tracks[1],
      'Quiero que seas tú hoy, mañana y siempre. Esta es la promesa que quiero seguir eligiendo.', [
        scene(foto(4), 'Quiero que seas tú en los días fáciles y en los que nos pidan cuidarnos más.'),
        scene(ambiente('cielo-rosa'), 'Quiero celebrar tus metas, aprender de ti y construir las nuestras sin prisa.'),
        scene(foto(7), 'Hoy te amo. Mañana quiero decírtelo otra vez, con palabras y con hechos.'),
        scene(foto(1), 'Quédate conmigo por mil años más, mi goldita chula y preciosa.'),
        scene(ambiente('flores'), 'Te amo, mi chiquita hermosa. Hoy, mañana y siempre.')
      ])
  ];

  const serie = {
    num: 4, tipo: 'serie', titulo: 'Mil años más', anio: 2026, clasificacion: 'TP',
    imagen: poster(5), musica: tracks[0].src, cancion: tracks[0].titulo,
    sinopsis: 'Tres episodios sobre el futuro que quiero imaginar y construir contigo, sin inventar recuerdos que todavía no hemos vivido.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Una historia que continúa', 'Cada día que viene']],
    episodios: [
      { titulo: 'Nuestros primeros recuerdos', duracion: 58, descripcion: 'Pocas fotos, muchísimas razones para volver a verlas.',
        musica: tracks[0].src, escenas: [
          scene(foto(1), 'Tal vez aún sean pocas fotos, pero para mí cada una guarda un mundo entero.'),
          scene(foto(2), 'Me gusta volver a esos gestos que nos acercaron.'),
          scene(foto(3), 'Cada imagen conserva una forma distinta de querernos.'),
          scene(foto(7), 'Y todavía nos faltan muchas fotografías por tomar.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Los lugares que vienen', duracion: 58, descripcion: 'Ciudades por conocer y planes que un día serán recuerdos.',
        musica: tracks[2].src, escenas: [
          scene(ambiente('camino'), 'Sueño con descubrir caminos nuevos contigo.'),
          scene(ambiente('ciudad-atardecer'), 'Con caminar por ciudades que hoy solo imaginamos.'),
          scene(foto(5), 'Con hacer planes pequeños que después nos den grandes historias.'),
          scene(ambiente('ciudad-luces'), 'No sé a dónde nos llevará la vida. Sí sé con quién quiero descubrirlo.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Continuará', duracion: 58, descripcion: 'La mejor escena de nosotros todavía está por venir.',
        musica: tracks[1].src, escenas: [
          scene(foto(6), 'Quiero ser un lugar seguro para ti mientras crecemos y cambiamos.'),
          scene(ambiente('flores'), 'Quiero que nuestras metas tengan espacio para florecer.'),
          scene(foto(7), 'Quiero seguir eligiéndote, aun en los días comunes.'),
          scene(foto(1), 'Te amo, Lili. Nuestra historia apenas comienza.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestros primeros meses', img: foto(7), texto: 'Cada fotografía es una escena que quiero volver a vivir contigo.' },
    { titulo: 'Ciudades por soñar', img: ambiente('ciudad-atardecer'), texto: 'Imagen de ambiente. Todavía nos quedan muchos lugares por descubrir.' },
    { titulo: 'El camino que viene', img: ambiente('camino'), texto: 'Imagen de ambiente. Mil aventuras por escribir juntos.' },
    { titulo: 'Mi lugar favorito', img: foto(1), texto: 'A tu lado, hasta los días comunes se vuelven especiales.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Lili', imagen: foto(1),
    sinopsis: 'Cuatro películas, una serie y un juego después, todavía queda mucho por vivir. Esta carta es para ti.',
    preguntas: [
      '¿Qué recuerdo de estos meses guardarías para siempre?',
      '¿Qué es lo que más te gusta de nosotros?',
      '¿Qué ciudad o lugar te gustaría conocer conmigo?',
      '¿Qué meta te gustaría que cumpliéramos juntos?',
      '¿Qué te gustaría decirme hoy?'
    ],
    carta: () => `Mi goldita chula y preciosa:\n\nGracias por llegar a mi vida. Has hecho por mí tantas cosas y has sanado incluso aquello que nunca pensé que pudiera sanar. Te quiero muchísimo y te amo tanto, Lili.\n\nAunque apenas llevemos unos meses, ya sé que quiero seguir sumando días contigo: los tranquilos, los emocionantes y esos que algún día recordaremos riéndonos. Quiero aprenderte más, cuidarte mejor y celebrar cada meta que alcancemos, juntos y por separado.\n\nQuédate conmigo por mil años más. Tengamos mil aventuras y mil historias que contar. Quiero descubrir ciudades a tu lado, hacer planes que se vuelvan recuerdos y seguir eligiéndote aun en los días comunes.\n\nQuiero que seas tú hoy, mañana y siempre. Te amo, mi chiquita hermosa. Y si esta historia apenas comienza, no puedo esperar a ver todo lo que viene.\n\nCon todo mi amor,\nJesús`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', tracks.map(t => t.titulo).join(' · ')],
    ['Locaciones por venir', 'Todas las que elijamos juntos'],
    ['Próximo estreno', 'Cada nuevo día a tu lado'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(6), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Lili… nuestra historia acaba de ser renovada.', anuncio: 'Mil años más',
    subtitulo: 'Hoy, mañana y siempre.', sorpresa: 'El siguiente capítulo lo escribimos juntos. Te amo, mi chiquita hermosa. ♡'
  };
})();


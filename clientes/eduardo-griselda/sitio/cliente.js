/* Edición exclusiva de Eduardo Mora para Griselda Zapata. */
(() => {
  const c = window.TDN;
  const A = 'Eduardo', B = 'Griselda';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const tracks = [
    ['Valiente — Koko Stambuk', 'valiente'],
    ['Mi Vida — DLD', 'mi-vida'],
    ['Agüita — Danna Paola', 'aguita'],
    ['El Mayor de Los Ranas — Victor Valverde x JR Torres', 'el-mayor-de-los-ranas'],
    ['Fuentes de Ortiz — Ed Maverick', 'fuentes-de-ortiz']
  ].map(([titulo, slug]) => ({ titulo, src: `assets/audio/${slug}-climax.mp3` }));
  const scene = (n, ...texto) => ({ img: foto(n), poster: foto(n), texto });
  const video = (n, ...texto) => ({ img: `assets/video/momento-${String(n).padStart(2, '0')}.mp4`, poster: `assets/fotos/momento-${String(n).padStart(2, '0')}.webp`, texto });
  const anios = Math.max(0, Math.floor((Date.now() - new Date('2025-03-24T00:00:00')) / 31557600000));
  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, nombreCompletoA: 'Eduardo Mora', nombreCompletoB: 'Griselda Zapata',
    apodos: [B, 'mi amor'], apodo: B, fechaInicio: '2025-03-24', anioInicio: 2025,
    anios, fechaCodigo: '24032025', ciudad: '', primeraCita: '', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [], cancion: 'Valiente', artista: 'Koko Stambuk',
    suenos: ['Seguir creando recuerdos juntos', 'Apoyarnos en nuestras metas', 'Cuidar nuestro amor cada día'],
    mensajeFinal: 'Griselda, quiero seguir eligiéndote y construyendo contigo los capítulos que vienen. Con amor, Eduardo.'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(19), perfilPareja: foto(12),
    t0: foto(1), t1: foto(7), t2: foto(12), t3: foto(19), t4: foto(24),
    t5: foto(26), t6: foto(27), t7: foto(28), final: portada(27),
    puzzle: foto(4), puzzle2: foto(28), postCreditos: foto(28)
  });
  Object.assign(c.media, {
    intro: 'assets/audio/intro.mp3', temporadas: tracks.map(t => t.src), canciones: tracks.map(t => t.titulo),
    musica: '', videoFinal: 'assets/video/para-griselda.mp4', audioRemitente: ''
  });
  Object.assign(c.acceso, {
    demo: false, password: 'f5d3b90551e26db4929cf6ac8c4ef3bb4e51030ce1e7b0677a450949e8896821',
    pistaPassword: 'Nuestra fecha de aniversario en seis dígitos: DDMMAA.', estreno: ''
  });
  Object.assign(c.notificacion, { whatsapp: '525615778791', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/eduardo-griselda/sitio/index.html?compartir=1', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Besos, risas y mucho amor',
    heroTag: 'SOLO PARA GRISELDA', heroTop: 'De Eduardo, con todo su amor',
    sinopsis: 'Desde el 24 de marzo de 2025, nuestra historia tiene dos protagonistas. Cuatro películas y una serie para decirte lo que siento, darte las gracias y soñar con lo que viene.',
    generos: ['Romance', 'Nuestros recuerdos', 'Tú y yo'], filaRecomendada: 'Desde aquel 24 de marzo'
  });
  const film = (num, titulo, img, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2025, clasificacion: 'TP', imagen: portada(img),
    musica: tracks[num].src, cancion: tracks[num].titulo, top10: num === 0,
    sinopsis, creditos: [['Para', 'Griselda Zapata'], ['Con amor de', 'Eduardo Mora'], ['Banda sonora', tracks[num].titulo]],
    episodios: [{ titulo, descripcion: sinopsis, duracion: 66, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Desde aquel 24 de marzo', 3,
      'Una fecha que nos pertenece. Eduardo le dedica a Griselda una película sobre la alegría de tener un nosotros.', [
        scene(1, 'Griselda, esta historia es para ti.', 'Con todo mi amor, Eduardo.'),
        scene(2, '24 de marzo de 2025.', 'Una fecha que siempre será nuestra.'),
        scene(3, 'Me gusta que exista un nosotros,', 'que al pensar en mis días también piense en ti.'),
        scene(4, 'De todos los recuerdos que guardamos,', 'mis favoritos son los que comparto contigo.'),
        scene(5, 'Quiero cuidar lo que tenemos,', 'con detalles, con tiempo y con cariño.'),
        scene(6, 'Hoy te regalo estas escenas,', 'porque tú haces especial mi historia.')
      ]),
    film(1, 'Gracias por estar', 10,
      'Un agradecimiento en seis escenas: por la compañía, las sonrisas y cada momento compartido.', [
        scene(7, 'Hay palabras que merecen decirse despacio:', 'gracias por estar en mi vida.'),
        scene(8, 'Gracias por cada sonrisa compartida', 'y por todos estos recuerdos que hoy podemos volver a ver.'),
        scene(9, 'Gracias por tu compañía,', 'por los ratitos que se vuelven nuestros.'),
        scene(10, 'A veces una foto guarda mucho más', 'de lo que se puede explicar con palabras.'),
        video(1, 'Y a veces basta vernos juntos', 'para recordar cuánto significas para mí.'),
        scene(11, 'Si hoy pudiera decirte una sola cosa,', 'sería esta: qué bonito compartir la vida contigo.')
      ]),
    film(2, 'Mi lugar favorito', 12,
      'Besos, miradas y pequeñas complicidades. Una dedicatoria a todo lo que se siente estar juntos.', [
        scene(12, 'Mi lugar favorito tiene algo de ti:', 'tu mirada, tu risa y tu compañía.'),
        scene(13, 'Me gustan las fotos bonitas,', 'pero me gusta más estar ahí, a tu lado.'),
        scene(14, 'Me gusta mirarte y sonreír', 'sin necesitar una explicación.'),
        scene(15, 'Un abrazo tuyo, un beso,', 'una pausa para quedarnos cerquita.'),
        scene(16, 'Qué bonito poder ser cómplices', 'de momentos tan nuestros.'),
        scene(17, 'Griselda, entre tantos lugares,', 'yo quiero seguir encontrándome contigo.')
      ]),
    film(3, 'Tú, yo y todas nuestras versiones', 19,
      'Arreglados para salir o riéndonos frente a la cámara: un brindis por la complicidad de Eduardo y Griselda.', [
        scene(18, 'Me gustamos así:', 'con nuestras formas tan distintas de sonreír.'),
        scene(19, 'Vestidos para una ocasión especial', 'o listos para cualquier plan.'),
        scene(20, 'Lo bonito de una foto juntos', 'es todo lo que sentimos fuera del encuadre.'),
        video(2, 'También quiero guardar esto:', 'las pequeñas escenas que nos hacen ser nosotros.'),
        scene(21, 'Sin poses perfectas, sin un guion:', 'tú y yo, viviendo el momento.'),
        scene(22, 'Que nunca nos falten las ganas', 'de seguir disfrutando juntos.')
      ])
  ];
  const episodio = (titulo, descripcion, escenas) => ({ titulo, descripcion, duracion: 32, musica: tracks[4].src, escenas, interaccion: null, recompensa: '' });
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Todo lo que viene', anio: 2025, clasificacion: 'TP', imagen: portada(28),
    musica: tracks[4].src, cancion: tracks[4].titulo,
    sinopsis: 'Tres capítulos para mirar hacia adelante: cuidar lo nuestro, acompañarnos en nuestras metas y seguir eligiéndonos.',
    creditos: [['Protagonistas', 'Eduardo y Griselda'], ['Próximo capítulo', 'Lo escribimos juntos']],
    episodios: [
      episodio('Cuidar lo nuestro', 'Lo que quiero hacer por este amor, todos los días.', [
        scene(23, 'Quiero seguir encontrando tiempo para ti,', 'para escucharte y saber cómo estás.'),
        scene(24, 'Que el cariño se vea en lo pequeño:', 'en cuidarnos y en tratarnos bonito.')
      ]),
      episodio('Crecer de la mano', 'Metas que se construyen con apoyo y paciencia.', [
        scene(25, 'Quiero acompañarte en tus metas,', 'celebrar tus pasos y animarte a seguir.'),
        scene(26, 'Y que construyamos nuestros planes', 'a nuestro ritmo, con paciencia y de la mano.')
      ]),
      episodio('Más recuerdos contigo', 'Una invitación a seguir llenando nuestro álbum.', [
        scene(27, 'Quiero más fotos, más risas,', 'más días que nos dé gusto recordar.'),
        scene(28, 'Griselda, el siguiente capítulo', 'quiero vivirlo contigo. — Eduardo')
      ])
    ]
  };
  c.temporadas = [...peliculas, serie];
  c.extras = [
    { titulo: 'Nuestra fecha', img: foto(3), texto: '24 de marzo de 2025. Una fecha para celebrar lo que somos y todo lo que viene.' },
    { titulo: 'Gracias por estar', img: foto(10), texto: 'Por compartir tu tiempo, tus sonrisas y tantos recuerdos conmigo. Gracias, Griselda.' },
    { titulo: 'Los planes que vienen', img: foto(26), texto: 'Quiero apoyarte en tus metas y construir nuestros planes con paciencia, cariño y muchas ganas.' },
    { titulo: 'Una dedicatoria para ti', img: foto(28), texto: 'Este pequeño universo de fotos y canciones lleva tu nombre, Griselda. Con amor, Eduardo.' }
  ];
  c.final = {
    titulo: 'Una carta para Griselda', imagen: portada(27),
    sinopsis: 'Después de los recuerdos, unas palabras de amor y un espacio para que tú también escribas el próximo capítulo.',
    preguntas: [
      '¿Qué recuerdo de nosotros te hace sonreír más?',
      '¿Qué es lo que más te gusta de estar juntos?',
      '¿Qué momento de estas películas volverías a vivir?',
      '¿Qué meta te gustaría que cumpliéramos juntos?',
      '¿Qué te gustaría decirle hoy a Eduardo?'
    ],
    carta: () => [
      'Griselda:',
      'Quise reunir estas fotos, estos videos y estas canciones para regalarte un momento que fuera solo nuestro.',
      'Desde el 24 de marzo de 2025 tenemos una fecha que nos une. Hoy quiero celebrarla recordándote lo mucho que significa para mí compartir esta historia contigo.',
      'Gracias por tu compañía, por tus sonrisas y por todos los instantes que hemos guardado juntos. Al mirar nuestras fotos, pienso en lo bonito que es tener un nosotros.',
      'Quiero cuidar nuestro amor con acciones, escucharte con atención y seguir encontrando motivos para hacerte sonreír. Quiero que podamos acompañarnos con respeto y cariño, a nuestro ritmo.',
      'También quiero seguir mirando hacia adelante contigo: apoyar tus metas, compartir mis sueños y construir los planes que elijamos juntos.',
      'Ojalá este regalo te recuerde algo sencillo: eres muy especial para mí, y tengo muchas ganas de seguir llenando nuestro álbum de recuerdos.',
      'Con todo mi amor,\nEduardo Mora'
    ].join('\n\n')
  };
  c.creditos = [
    ['Para', 'Griselda Zapata'], ['Con todo el amor de', 'Eduardo Mora'],
    ['Protagonistas', 'Eduardo y Griselda'], ['Nuestra fecha', '24 de marzo de 2025'],
    ['Banda sonora', tracks.map(t => t.titulo).join(' · ')],
    ['Agradecimientos', 'A cada momento que podemos volver a recordar'],
    ['Próximo estreno', 'Los recuerdos que todavía nos esperan'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(28), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Griselda… todavía nos quedan muchas escenas por vivir.',
    anuncio: 'Continuará', subtitulo: 'Contigo, el siguiente capítulo.',
    sorpresa: 'Mi parte favorita de esta historia es poder compartirla contigo. Con amor, Eduardo. ♡'
  };
})();

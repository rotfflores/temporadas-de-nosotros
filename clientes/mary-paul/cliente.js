/* Mary Frutes para Paul Garcia · paquete Nuestro capítulo. */
(() => {
  const c = window.TDN;
  const A = 'Mary Frutes', B = 'Paul Garcia';
  const f = n => `assets/fotos/foto-${n}.jpg`;
  const v = n => `assets/video/recuerdo-${n}-gloria.mp4`;
  const scene = (img, texto, video = '') => ({ img, poster: img, video, texto: [texto] });
  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: ['Paul'], apodo: 'Paul',
    fechaInicio: '', anioInicio: 2026, anios: 0, fechaCodigo: '',
    ciudad: '', primeraCita: '', cancion: 'Con los años que me quedan', artista: 'Gloria Estefan', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir creciendo juntos', 'Celebrar nuevas metas', 'Crear más recuerdos'],
    mensajeFinal: 'Gracias por compartir la vida conmigo. Deseo que sigamos encontrando motivos para abrazarnos, reír y mirar hacia adelante juntos.'
  });
  Object.assign(c.fotos, {
    hero: f(1), perfilB: f(3), perfilPareja: f(1),
    t0: f(1), t1: f(2), t2: f(4), t3: f(5), t4: 'assets/fotos/video-2.jpg',
    t5: f(3), t6: f(4), t7: f(5), final: f(1),
    puzzle: f(3), puzzle2: f(1), postCreditos: f(5)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [];
  c.media.canciones = ['Con los años que me quedan — Gloria Estefan'];
  c.media.musica = '';
  c.media.videoFinal = v(2);
  c.media.audioRemitente = '';
  Object.assign(c.acceso, { demo: false, password: '', pistaPassword: '', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/mary-paul/index.html',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor y recuerdos',
    heroTag: 'EXCLUSIVO PARA PAUL', heroTop: 'De Mary, con todo su amor',
    sinopsis: 'Paul, estas imágenes guardan instantes nuestros. Esta página guarda algo más: lo que siento por ti, lo que agradezco y todo lo que deseo seguir construyendo a tu lado.',
    generos: ['Romance', 'Nuestros recuerdos', 'Continuará'], filaRecomendada: 'Lo que siento por ti'
  });
  const film = (num, titulo, imagen, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: '', cancion: '', top10: num === 0, sinopsis,
    creditos: [['Protagonistas', `${A} y ${B}`], ['Una dedicatoria de', A]],
    episodios: [{ titulo, duracion: 55, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  c.temporadas.splice(0, c.temporadas.length,
    film(0, 'Lo que siento por ti', f(1),
      'Hay sentimientos que merecen su propia pantalla. Estas palabras son para ti, Paul.', [
        scene(f(1), 'Paul, cada vez que miro nuestras fotos recuerdo cuánto me gusta compartir la vida contigo.'),
        scene(f(3), 'Me haces sentir acompañada, querida y capaz de mirar el futuro con ilusión.'),
        scene(f(5), 'En los días luminosos y en los sencillos, me alegra saber que estás a mi lado.'),
        scene(f(2), 'Ojalá nunca nos falten las ganas de abrazarnos y descubrir algo nuevo juntos.'),
        scene(f(1), 'Te quiero. Y quería que pudieras volver a leerlo cuando tú quieras.')
      ]),
    film(1, 'Gracias por tanto', f(3),
      'Una película hecha de gratitud por los momentos que compartimos.', [
        scene(f(3), 'Gracias por los momentos que se quedan en la memoria mucho después de que pasan.'),
        scene(f(4), 'Gracias por la alegría de compartir tiempo con quienes queremos.'),
        scene('assets/fotos/video-1.jpg', 'Gracias por cada ocasión en que hemos podido celebrar y estar cerca.', v(1)),
        scene(f(5), 'Gracias por hacerme sentir que los pequeños momentos también merecen una gran celebración.'),
        scene(f(1), 'Y, sobre todo, gracias por ser tú.')
      ]),
    film(2, 'Los recuerdos que guardo', f(2),
      'Fotos y videos que invitan a volver a esos instantes sin contar una historia que no nos dieron.', [
        scene(f(2), 'Hay paisajes que impresionan. Lo que más atesoro es haber podido mirarlos contigo.'),
        scene(f(4), 'También guardo los momentos compartidos, las sonrisas y la gente que nos rodea.'),
        scene(f(5), 'Las luces, las miradas y ese instante en que una foto conserva lo que sentimos.'),
        scene('assets/fotos/video-2.jpg', 'Un recuerdo en movimiento para volver a sentir la alegría de estar juntos.', v(2)),
        scene(f(3), 'Quiero seguir sumando recuerdos que un día miremos con esta misma sonrisa.')
      ]),
    film(3, 'Que nunca me falten tus brazos', f(8),
      'Tres fotos nuevas y una dedicatoria de Mary para Paul.', [
        scene(f(7), 'Quiero seguir descubriendo lugares y momentos contigo.'),
        scene(f(8), 'Hay abrazos que se quedan conmigo aun después de que termina el día.'),
        scene(f(6), 'Que nunca me falten\nTus brazos')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Nuestro siguiente capítulo', anio: 2026,
      clasificacion: 'TP', imagen: 'assets/fotos/video-2.jpg', musica: '', cancion: '',
      sinopsis: 'Tres episodios breves para mirar con cariño el presente y desear todo lo que viene.',
      creditos: [['Protagonistas', `${A} y ${B}`], ['Próximos capítulos', 'Los que hagamos juntos']],
      episodios: [
        { titulo: 'Hoy', duracion: 48, descripcion: 'Lo valioso de estar aquí.', interaccion: null, recompensa: '', escenas: [
          scene(f(1), 'Hoy agradezco tenerte en mi vida.'), scene(f(3), 'Agradezco poder compartirte mis alegrías y mis sueños.'), scene(f(4), 'Y poder mirar estas imágenes y sonreír contigo.')
        ] },
        { titulo: 'Mañana', duracion: 80, descripcion: 'Las metas que aún nos esperan.', interaccion: null, recompensa: '', escenas: [
          scene(f(2), 'Mañana habrá nuevos caminos que recorrer.'), scene(f(5), 'Ojalá podamos celebrarlos, acompañarnos y aprender juntos.'), scene(f(1), 'Me emociona pensar en todos los recuerdos que todavía no existen.'),
          scene(f(5), 'Deseo que sigamos encontrando luz aun cuando el camino cambie.'),
          scene(f(2), 'Que nos demos tiempo para explorar, descansar y disfrutar cada paso.'),
          scene(f(4), 'Que celebremos nuestras metas y cuidemos lo que estamos construyendo.'),
          scene(f(1), 'Que el futuro nos encuentre con la misma ilusión de estar cerca.'),
          scene(f(3), 'Y que nunca se nos olvide decir gracias, te quiero y aquí estoy.')
        ] },
        { titulo: 'Siempre que volvamos a elegirnos', duracion: 48, descripcion: 'Un deseo para cada día que viene.', interaccion: null, recompensa: '', escenas: [
          scene('assets/fotos/video-1.jpg', 'Quiero que sigamos encontrando razones para celebrar.', v(1)),
          scene('assets/fotos/video-2.jpg', 'Para detenernos un momento, abrazarnos y disfrutar estar juntos.', v(2)),
          scene(f(1), 'Gracias, Paul. Por este presente y por todo lo que aún podremos construir.')
        ] }
      ]
    }
  );
  c.extras = [
    { titulo: 'Una foto para volver', img: f(1), texto: 'Hay imágenes que se sienten como un abrazo.' },
    { titulo: 'Juntos frente al paisaje', img: f(2), texto: 'Un instante compartido que merece quedarse aquí.' },
    { titulo: 'Celebrar la vida', img: 'assets/fotos/video-1.jpg', texto: 'Un recuerdo en movimiento para volver a mirar.' },
    { titulo: 'Lo que viene', img: f(5), texto: 'Más metas, más gratitud y más momentos por compartir.' }
  ];
  Object.assign(c.final, {
    titulo: 'Una carta para Paul', imagen: f(1),
    sinopsis: 'Después de las películas y la serie, quedan unas palabras de Mary para Paul.',
    preguntas: [
      '¿Qué recuerdo de nosotros te hace sonreír?',
      '¿Qué es lo que más agradeces de lo que compartimos?',
      '¿Qué te gustaría que hagamos juntos algún día?',
      '¿Qué meta te ilusiona para nuestro futuro?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `Paul:\n\nQuise reunir estas fotos y videos para decirte algo sencillo y muy grande a la vez: me alegra compartir mi vida contigo. Cada imagen me recuerda que el cariño también vive en una mirada, una sonrisa, un abrazo y en el tiempo que elegimos darnos.\n\nGracias por estar, por los momentos que hemos compartido y por darme razones para mirar hacia adelante con ilusión. Deseo que sigamos cuidándonos, escuchándonos y celebrando nuestras metas, las de cada uno y las que soñemos juntos.\n\nNo sé qué traerán los próximos capítulos. Sí sé que quiero llenarlos de gratitud, compañía, risas y nuevos recuerdos contigo. Que siempre encontremos un momento para decirnos cuánto nos queremos.\n\nCon todo mi cariño,\nMary Frutes`
  });
  c.creditos = [
    ['Una historia para', B], ['Con cariño de', A], ['Protagonistas', `${A} y ${B}`],
    ['Fotografías y videos', 'Recuerdos compartidos'],
    ['Música de los videos', 'Con los años que me quedan — Gloria Estefan'],
    ['Próximo capítulo', 'Por escribir juntos'],
    ['', 'Gracias por estar aquí, Paul. ♡']
  ];
  c.postCreditos = {
    imagen: f(5), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Paul… esto continúa.',
    anuncio: 'Muchos capítulos más', subtitulo: 'Con cariño, gratitud y ganas de seguir.',
    sorpresa: 'La próxima escena la escribimos juntos. ♡'
  };
})();

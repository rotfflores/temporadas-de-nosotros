/* Contenido exclusivo de Osa para Oso; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Osa';
  const B = 'Oso';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const tracks = [
    { titulo: 'Mi Mayor Anhelo — Banda MS', src: 'assets/audio/mi-mayor-anhelo-climax.mp3' },
    { titulo: 'Escondidos — La Adictiva', src: 'assets/audio/escondidos-climax.mp3' },
    { titulo: 'Creo en Ti — Reik', src: 'assets/audio/creo-en-ti-climax.mp3' },
    { titulo: 'Loca — Alejandra Guzmán', src: 'assets/audio/loca-climax.mp3' },
    { titulo: 'Vestida de Azúcar — Gloria Trevi', src: 'assets/audio/vestida-de-azucar-climax.mp3' }
  ];

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: ['Oso'], apodo: 'Oso',
    fechaInicio: '', anioInicio: 2026, anios: 0, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Mi Mayor Anhelo', artista: 'Banda MS', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir creciendo juntos', 'Compartir nuevos lugares', 'Cuidarnos cada día'],
    mensajeFinal: 'Gracias por estar conmigo, Oso. Deseo seguir creciendo a tu lado, celebrar tus metas y construir las nuestras con cariño. Te quiero mucho. — Osa'
  });
  Object.assign(c.fotos, {
    hero: foto(14), perfilB: foto(17), perfilPareja: foto(21),
    t0: foto(14), t1: foto(19), t2: foto(9), t3: foto(18), t4: foto(21),
    t5: foto(6), t6: foto(1), t7: foto(22), final: foto(22),
    puzzle: foto(21), puzzle2: foto(20), postCreditos: foto(22)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = tracks.map(t => t.src);
  c.media.canciones = tracks.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-alan.mp4';
  c.media.audioRemitente = '';
  Object.assign(c.acceso, { demo: false, password: '', pistaPassword: '', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/lisbeth-alan/index.html?compartir=2',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor y recuerdos',
    heroTag: 'EXCLUSIVO PARA OSO', heroTop: 'Una historia de Osa para Oso',
    sinopsis: 'Nuestras fotos, las canciones que acompañan esta historia y todo lo que siento por ti. Cuatro películas, una serie y un juego para recordar lo vivido e imaginar lo que viene.',
    generos: ['Romance', 'Nuestros recuerdos', 'Continuará'], filaRecomendada: 'Lo bonito de encontrarte'
  });

  const scene = (n, ...texto) => ({ img: foto(n), poster: foto(n), texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con cariño de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion: 60, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Lo bonito de encontrarte', foto(14), tracks[0],
      'Hay personas que hacen que los días comunes se vuelvan recuerdos especiales. Para mí, tú eres esa persona.', [
        scene(21, 'Oso, en cada foto nuestra encuentro una razón para sonreír.'),
        scene(14, 'Me gusta saber que hemos guardado momentos juntos, grandes y pequeños.'),
        scene(4, 'A tu lado, hasta un día sencillo se siente distinto.'),
        scene(18, 'Deseo que sigamos encontrando tiempo para mirarnos, reír y estar presentes.'),
        scene(22, 'Y que nunca nos falten formas de decirnos cuánto nos queremos.')
      ]),
    film(1, 'Mi lugar seguro', foto(19), tracks[1],
      'Entre abrazos y momentos tranquilos, aprendí cuánto puede decir la compañía de alguien.', [
        scene(6, 'Hay abrazos que me hacen sentir en casa.'),
        scene(19, 'Gracias por compartir conmigo también los momentos en que no hacen falta palabras.'),
        scene(12, 'Me gusta la confianza de poder ser yo cuando estoy contigo.'),
        scene(16, 'Deseo seguir cuidando eso tan bonito que estamos construyendo.'),
        scene(1, 'Quiero que sepas que también puedes contar conmigo, siempre.')
      ]),
    film(2, 'Contigo creo en lo que viene', foto(9), tracks[2],
      'Quiero celebrar tus sueños, trabajar por los míos y hacer espacio para los que nacen de nosotros.', [
        scene(9, 'Creo en ti, Oso, y en todo lo que puedes lograr.'),
        scene(17, 'Quiero aplaudir cada meta tuya, incluso las que hoy todavía parecen lejanas.'),
        scene(11, 'También quiero que hagamos planes nuevos, sin perder la alegría de lo sencillo.'),
        scene(7, 'Ojalá tengamos muchos caminos por recorrer y recuerdos por traer a casa.'),
        scene(14, 'No sé cómo serán todos nuestros próximos capítulos, pero me ilusiona vivirlos contigo.')
      ]),
    film(3, 'Así se siente quererte', foto(18), tracks[3],
      'Una historia hecha de ternura, alegría y esas pequeñas locuras que hacen única nuestra manera de estar juntos.', [
        scene(18, 'A veces no encuentro una sola palabra que explique todo lo que siento por ti.'),
        scene(10, 'Me haces sonreír de formas que no siempre esperaba.'),
        scene(13, 'Me gusta que nuestra historia tenga detalles tan nuestros.'),
        scene(20, 'Deseo que nunca perdamos las ganas de sorprendernos y de jugar.'),
        scene(1, 'Quererte también es elegir cada día lo que nos hace bien.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Nuestros siguientes capítulos', anio: 2026,
    clasificacion: 'TP', imagen: foto(21), musica: tracks[4].src, cancion: tracks[4].titulo,
    sinopsis: 'Tres episodios sobre lo que agradezco de nosotros, lo que deseo para ti y el futuro que quiero construir a tu lado.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Lo que sigue', 'Por escribir juntos']],
    episodios: [
      { titulo: 'Gracias por cada detalle', duracion: 58, descripcion: 'Los recuerdos pequeños también merecen su propio episodio.', musica: tracks[4].src,
        escenas: [
          scene(1, 'Gracias por estar en los días que terminan convertidos en fotografías.'),
          scene(15, 'Gracias por cada detalle, incluso los que tal vez para ti parecen pequeños.'),
          scene(16, 'Guardo con cariño nuestras conversaciones, nuestros gestos y nuestras ocurrencias.'),
          scene(21, 'Sobre todo, gracias por ser tú conmigo.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que deseo para ti', duracion: 58, descripcion: 'Quiero verte feliz y acompañarte en lo que sueñas.', musica: tracks[2].src,
        escenas: [
          scene(17, 'Deseo que nunca dejes de buscar lo que te hace feliz.'),
          scene(9, 'Que tengas fuerza para perseguir tus metas y calma para disfrutar el camino.'),
          scene(4, 'Quiero ser compañía en tus logros y apoyo en los días difíciles.'),
          scene(18, 'Me emociona imaginar todo lo bueno que todavía espera por ti.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que sueño para nosotros', duracion: 58, descripcion: 'Una historia que sigue creciendo con cariño y decisión.', musica: tracks[0].src,
        escenas: [
          scene(14, 'Sueño con seguir sumando momentos que algún día queramos volver a ver.'),
          scene(11, 'Con salir a descubrir lugares y regresar con historias nuevas.'),
          scene(6, 'Con hacer de nuestro amor un lugar de respeto, cuidado y alegría.'),
          scene(22, 'Y con seguir diciendo “te quiero” de muchas maneras, por mucho tiempo.')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Una Navidad juntos', img: foto(1), texto: 'Una foto que guarda la alegría de compartir.' },
    { titulo: 'Cerca de ti', img: foto(6), texto: 'De esos instantes en los que un abrazo lo dice todo.' },
    { titulo: 'Nuestros paseos', img: foto(14), texto: 'Más lugares y más recuerdos por descubrir juntos.' },
    { titulo: 'Un detalle para recordar', img: foto(22), texto: 'Un corazón rojo y una manera muy nuestra de decir “TQM”.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Oso', imagen: foto(22),
    sinopsis: 'La última escena reúne todo lo que Osa quiere agradecerte y desear para ustedes.',
    preguntas: [
      '¿Qué recuerdo nuestro te hace sonreír más?',
      '¿Qué es lo que más disfrutas cuando estamos juntos?',
      '¿Qué meta personal te gustaría cumplir próximamente?',
      '¿Qué plan te gustaría que hagamos juntos?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `Oso:\n\nQuise reunir nuestras fotos y estas canciones para decirte algo que siento de verdad: me hace feliz compartir mi vida contigo. En cada imagen veo un momento distinto, pero en todas encuentro algo que agradezco: tu compañía.\n\nGracias por los abrazos, las sonrisas y los detalles que han ido formando nuestra historia. Me gusta poder guardar esos recuerdos y saber que aún tenemos muchos por crear.\n\nDeseo verte cumplir tus metas. Quiero celebrar tus logros, acompañarte cuando necesites apoyo y seguir aprendiendo a cuidarnos mejor. También sueño con hacer planes contigo, descubrir lugares, reírnos de lo inesperado y construir un futuro que se sienta nuestro.\n\nGracias por ser parte de mis días, Oso. Te quiero mucho, y me ilusiona todo lo que todavía podemos vivir juntos.\n\nCon cariño,\nOsa`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el cariño de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', tracks.map(t => t.titulo).join(' · ')],
    ['Momentos favoritos', 'Los que ya vivimos y los que vienen'],
    ['Próximo estreno', 'Cada nuevo día juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(22), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Oso… todavía nos quedan capítulos por escribir.', anuncio: 'Continuará',
    subtitulo: 'Con más sueños, más recuerdos y mucho cariño.',
    sorpresa: 'Gracias por estar conmigo. Te quiero mucho. — Osa ♡'
  };
})();

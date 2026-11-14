window.TDN = (() => {
  const titulo = 'Mi lugar seguro';
  const nombreA = 'Ale';
  const nombreB = 'Manuel';
  const foto = id => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = id => `assets/fotos/portada-${id}.webp`;
  const ambiente = (id, video = false) => ({
    img: `assets/ambiente/${id}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${id}.webp` }),
    ambientacion: true
  });
  const pistas = {
    amor: ['amor-completo', 'Amor Completo · Mon Laferte'],
    sinTi: ['porque-sin-ti', 'Porque Sin Ti · La Adictiva'],
    hasta: ['hasta-donde', '¿Hasta Dónde Te Quiero?'],
    invento: ['no-es-invento-mio', 'No Es Invento Mío · Banda MS'],
    loco: ['pobre-loco', 'Pobre Loco · Duelo']
  };
  const musica = ([id, cancion]) => ({ cancion, musica: `assets/audio/${id}-climax.mp3` });
  const episodio = (titulo, descripcion, pista, escenas) => ({
    titulo, descripcion, duracion: 56, ...musica(pista),
    escenas: escenas.map(([medio, texto]) => ({
      ...(typeof medio === 'number' ? { img: foto(medio) } : medio), texto
    }))
  });
  const pelicula = (num, titulo, pista, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(num), anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...musica(pista),
    episodios: [episodio(titulo, sinopsis, pista, escenas)]
  });

  const temporadas = [
    pelicula(0, titulo, pistas.amor, 'Una dedicatoria para la persona que es refugio y aventura al mismo tiempo.', [
      [ambiente('luz', true), 'El amor que siento por ti es como un abrazo cálido en un día frío.'],
      [7, 'A veces miro una foto como esta y me dan ganas de quedarme ahí, bien cerca de ti.'],
      [10, 'También eres mi mayor aventura. Contigo siempre hay espacio para sorprendernos.'],
      [9, 'Es paz y huracán al mismo tiempo. Me gusta que las dos cosas quepan en lo que siento por ti.'],
      [18, 'No importa adónde nos lleve la vida. Mi corazón siempre encontrará el camino de vuelta al tuyo.']
    ]),
    pelicula(1, 'La risa fácil', pistas.loco, 'Todo lo que una sonrisa a tu lado puede cambiar en un día difícil.', [
      [4, 'Cuando pienso en la felicidad, es imposible no pensar en ti.'],
      [5, 'Hasta estos detalles que guardamos en fotos me dan ganas de volver a reír contigo.'],
      [14, 'Me gusta encontrar tantas caras nuestras en una sola imagen. Algún día hagamos otra así.'],
      [2, 'Gracias por la risa fácil en un día difícil y por dejarme ser como soy contigo.'],
      [13, 'Si mañana toca un día pesado, ojalá nos acordemos de esta sonrisa.']
    ]),
    pelicula(2, 'Gracias por la calma', pistas.sinTi, 'Un agradecimiento por tu compañía y por los días sencillos que quiero seguir compartiendo contigo.', [
      [ambiente('olas', true), 'Eres la paz en medio del caos. Gracias por lo bien que me hace tenerte cerca.'],
      [6, 'Me gusta la tranquilidad de poder quedarnos así, sin tener que decir nada.'],
      [11, 'Gracias por compartir conmigo hasta esos ratitos en los que no tenemos gran cosa que contar.'],
      [1, 'A veces abro nuestras fotos solo para verte y quedarme con esa sensación un rato más.'],
      [27, 'Quiero aprender a darte la misma calma que encuentro contigo.']
    ]),
    pelicula(3, 'Que el tiempo sea generoso', pistas.hasta, 'Un deseo para lo que viene después de estos primeros tres meses.', [
      [ambiente('camino'), 'Si pudiera pedirle algo al universo, le pediría que el tiempo fuera generoso con nosotros.'],
      [21, 'Quiero apartar tardes para salir juntos y dejar que el camino nos dé ideas.'],
      [22, 'Quiero escuchar lo que sueñas hacer y estar cerquita cuando empieces a intentarlo.'],
      [23, 'También quiero que cuidemos lo sencillo: comer juntos, preguntar cómo nos fue y escuchar la respuesta.'],
      [30, 'Quiero vivir a tu lado muchas, muchas vidas. Empecemos por todo lo que todavía nos queda por compartir.']
    ]),
    {
      num: 4, tipo: 'serie', titulo: 'Todo lo bonito de nosotros', imagen: portada(4), anio: 2026,
      clasificacion: 'TP', ...musica(pistas.invento),
      sinopsis: 'Tres episodios sobre lo que siento, los detalles que agradezco y lo que me ilusiona construir contigo.',
      episodios: [
        episodio('El amor que quise encontrar', 'Cómo se siente encontrar paz y emoción en la misma persona.', pistas.invento, [
          [8, 'Eres el amor que siempre quise encontrar. Me alegra poder decírtelo así de claro.'],
          [3, 'Me gusta lo cerca que estamos en esta foto. Quiero seguir encontrando maneras de decirte cuánto te quiero.'],
          [ambiente('mar'), 'A veces quererte se siente como el primer rayo de sol después de una larga noche.'],
          [16, 'Otras veces lo que siento cabe en algo muy sencillo: acercarme y darte un beso.'],
          [17, 'Siempre hay un pedacito de mí que tiene ganas de volver a ese abrazo.']
        ]),
        episodio('Lo que hacen los detalles', 'Una mesa, una foto en el espejo y unos minutos más para estar juntos.', pistas.loco, [
          [15, 'Hasta las fotos de la comida terminan recordándome cuánto disfruto compartir el día contigo.'],
          [12, 'Hay fotos frente al espejo que voy a seguir guardando aunque cada vez tengamos más.'],
          [19, 'Gracias por acercarte para que salgamos juntos una vez más.'],
          [26, 'Me gusta vernos en un día cualquiera. Es justo ahí donde más noto cómo vuelves bonita mi vida.'],
          [20, 'Y si estamos cerca cuando termine este episodio, ven. Te quiero dar otro beso.']
        ]),
        episodio('Un día más para quererte', 'Del 15 de agosto al 15 de noviembre y un deseo para el próximo capítulo.', pistas.hasta, [
          [24, '15 de agosto de 2026. Me gusta tener una fecha para volver al comienzo de lo nuestro.'],
          [25, '15 de noviembre de 2026. Tres meses, y ya tengo muchas ganas de ver qué nos toca después.'],
          [ambiente('luz', true), 'Quiero que sigamos haciéndonos tiempo, aunque solo tengamos un ratito para contarnos el día.'],
          [28, 'Quiero que podamos celebrar tus planes, mis planes y los que vayamos escogiendo juntos.'],
          [29, 'Por hoy quiero quedarme con esto: qué alegría que mi historia se haya encontrado con la tuya.']
        ])
      ]
    }
  ];

  return {
    pareja: {
      nombreA, nombreB, fechaInicio: '2026-08-15',
      ciudad: '', viajes: []
    },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: foto(30), perfilPareja: foto(7),
      t0: foto(8), t1: foto(4), t2: foto(18), t3: foto(21), t4: foto(23), t5: foto(29)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/nuestro-capitulo.mp4'
    },
    acceso: { demo: false, password: '', pistaPassword: '', estreno: '' },
    notificacion: { whatsapp: '528442833139', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us.rotfstudio.com/clientes/mi-lugar-seguro/sitio/index.html', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Una dedicatoria de amor',
      heroTag: '15 DE AGOSTO DE 2026 · NUESTRO COMIENZO',
      heroTop: '15 de noviembre de 2026 · Tres meses',
      sinopsis: 'Manuel, eres mi refugio, mi puerto seguro y mi mayor aventura. Hice este capítulo para celebrar tres meses contigo y todo lo que todavía quiero vivir a tu lado.',
      generos: ['Romance', 'Recuerdos'], filaRecomendada: titulo
    },
    temporadas,
    extras: [
      { titulo: 'Como un abrazo', img: foto(7), texto: 'Qué bien se siente estar cerca de ti.' },
      { titulo: 'Días de risa', img: foto(14), texto: 'Ojalá tengamos muchos días más en los que salgamos haciendo estas caras.' },
      { titulo: 'Queda camino', img: foto(21), texto: 'Me ilusiona pensar en todas las fotos que todavía nos faltan.' }
    ],
    final: {
      titulo: 'Muchas, muchas vidas', imagen: portada(5),
      sinopsis: 'La carta que dio origen a este regalo y un último montaje de nuestras fotos.',
      preguntas: [
        '¿Qué foto de los dos volverías a mirar en un día difícil?',
        '¿Qué detalle de estos tres meses te da ganas de sonreír?',
        '¿Qué canción de este capítulo pondrías en nuestra próxima salida?',
        '¿Qué meta te gustaría que celebremos juntos?',
        '¿Cómo llamarías al siguiente capítulo?'
      ],
      carta: () => [
        'El amor que siento por ti es como un abrazo cálido en un día frío, como el primer rayo de sol después de una larga noche. Es paz y huracán al mismo tiempo. Eres mi refugio, mi puerto seguro y mi mayor aventura. No importa adónde nos lleve la vida, mi corazón siempre encontrará el camino de vuelta al tuyo, porque es ahí donde vive todo lo más bonito que hay en mí.',
        'Cuando pienso en la felicidad, es imposible no pensar en ti. Eres la paz en medio del caos, la risa fácil en un día difícil y el amor que siempre quise encontrar. Contigo, cada detalle de la vida se vuelve más bonito y cada día más especial. Y si pudiera pedirle algo al universo, solo le pediría que el tiempo fuera generoso, para vivir a tu lado muchas, muchas vidas.'
      ].join('\n\n')
    },
    creditos: [
      ['De', nombreA],
      ['Para', nombreB],
      ['Nuestro comienzo', '15 de agosto de 2026'],
      ['Tres meses', '15 de noviembre de 2026'],
      ['Banda sonora', Object.values(pistas).map(([, cancion]) => cancion).join(' · ')],
      ['Escenas ilustrativas', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(20), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Antes de que se acabe, acércate. Todavía te quiero abrazar un ratito más.',
      anuncio: 'El siguiente capítulo', subtitulo: 'Nos toca escribirlo juntos.',
      sorpresa: 'Gracias por estos tres meses. Te amo.'
    }
  };
})();

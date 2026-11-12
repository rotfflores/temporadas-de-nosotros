window.TDN = (() => {
  const titulo = 'Qué orgullo verte crecer';
  const fecha = '6 de agosto de 1998';
  const foto = (id) => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const apoyo = (id) => ({ img: `assets/ambiente/${id}.webp`, ambientacion: true });
  const clip = (id) => ({ ...apoyo(id), img: `assets/ambiente/${id}.mp4`, poster: apoyo(id).img });
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'number' ? { img: foto(medio) } : medio),
    texto
  });
  const pista = (id, cancion) => ({ cancion, musica: `assets/audio/${id}.mp3` });
  const espera = pista('yo-te-esperaba', 'Yo Te Esperaba · Alejandra Guzmán');
  const orgullo = pista('que-orgullo', 'Mi Niño, Mi Hombre Qué Orgullo Verte Crecer');
  const regalo = pista('te-regalo', 'Te Regalo · Carla Morrison');
  const viaje = pista('el-viaje', 'El Viaje · Conchita');
  const mama = pista('aprendiendo-a-ser-mama', 'Perdóname hijo… También estaba aprendiendo a ser mamá');

  const episodio = (titulo, descripcion, duracion, track, escenas) => ({
    titulo, descripcion, duracion, escenas, ...track
  });
  const pelicula = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen, anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...track,
    creditos: [['Para', 'Josmar'], ['De', 'Melina, tu mamá'], ['Música', track.cancion]],
    episodios: [{ ...episodio(titulo, sinopsis, 6 + 10 * escenas.length, track, escenas), imagen }]
  });

  const temporadas = [
    pelicula(0, 'El día que me hiciste mamá', portada(0), espera,
      'El 6 de agosto de 1998 nació Josmar. Melina recuerda el miedo de esos primeros días y las ganas de protegerlo.', [
        escena(clip('bebe'), fecha, 'Ese día, con todo y mis miedos, tuve la fortuna de ser tu mamá.'),
        escena(apoyo('manos'), 'Todo era nuevo para mí. Te miraba tan chiquito y quería protegerte y amarte.'),
        escena(apoyo('zapatitos'), 'Todavía me acuerdo de tu olorcito. Qué ganas tenía de quedarme ahí contigo.'),
        escena(23, 'Al principio éramos tú y yo. Yo tenía poca experiencia y unas ganas enormes de conquistar el mundo para ti.'),
        escena(22, 'Luego te vi crecer fuerte, amoroso y alegre, rodeado de una familia que te quería mucho.'),
        escena(24, 'Todavía reconozco en ti al niño que se reía con tantas ganas.'),
        escena(27, 'Hoy te veo tomar tus propias decisiones. Hijo, te amo y aquí estoy para ti.')
      ]),
    pelicula(1, 'El hombre que eres hoy', portada(1), orgullo,
      'Del niño alegre al hombre decidido que sigue haciendo su propio camino.', [
        escena(25, 'En estas fotos de cuando eras niño me gusta buscar todo lo que sigo reconociendo en ti.'),
        escena(26, 'Creciste querido por tu familia y con una alegría que se nos pegaba a todos.'),
        escena(21, 'En el trayecto de la vida fuiste encontrando la manera de ver al mundo'),
        escena(14, 'Por más que pasen los años, me sigue alegrando verte sonreír así.'),
        escena(4, 'Admiro lo inteligente y amoroso que eres, y la decisión con la que vas tras tus metas.'),
        escena(7, 'Sé que cuesta llegar a donde uno quiere. Me da orgullo ver cómo sigues adelante.'),
        escena(11, 'Qué suerte la mía, Josmar, haber visto crecer al niño y poder abrazar al hombre.')
      ]),
    pelicula(2, 'Gracias, hijo', portada(2), regalo,
      'Melina vuelve a las fotos de familia para agradecer las risas, la compañía y la dicha de ser mamá.', [
        escena(9, 'Gracias por las veces que nos sentamos juntos y la plática se alargó sin darnos cuenta.'),
        escena(12, 'Por las salidas en familia y las sonrisas que todavía se nos escapan al ver una foto.'),
        escena(13, 'Por compartir la mesa, incluso cuando lo mejor del día fue estar todos ahí.'),
        escena(30, 'Gracias por prestarte para la foto, los disfraces y las ocurrencias de la familia.'),
        escena(15, 'Y por dejarme guardar caras como ésta, que me siguen dando risa.'),
        escena(18, 'Eres amado por tu familia'),
        escena(28, 'Gracias, hijo. Todavía disfruto tanto tener un ratito contigo.')
      ]),
    pelicula(3, 'Que seas feliz', portada(3), viaje,
      'Un deseo para lo que viene. Que Josmar haga su camino, cumpla sus metas y sepa que puede contar con su mamá.', [
        escena(clip('bosque'), 'Hijo, hay días en que uno avanza sin saber bien cómo va a salir todo.'),
        escena(2, 'Confío en que vas a encontrar tu manera de llegar a lo que te propones.'),
        escena(5, 'Si alguna vez necesitas sentarte un rato a pensar o platicar, aquí estoy.'),
        escena(3, 'Ojalá que entre tanta prisa siempre nos quede tiempo para salir y reírnos juntos.'),
        escena(6, 'Que puedas disfrutar lo que ya tienes mientras trabajas por lo que quieres.'),
        escena(clip('amanecer'), 'En este mundo de locos, hijo, la meta es ser felices.'),
        escena(16, 'Te amo, mi Josmar. Qué gusto me da seguir caminando contigo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'También crecía yo', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', ...mama,
      sinopsis: 'Tres episodios sobre aprender a ser mamá, los recuerdos que hicieron familia y la alegría de seguir cerca.',
      creditos: [['Para', 'Josmar'], ['De', 'Melina, tu mamá'], ['Música', mama.cancion]],
      episodios: [
        episodio('Cuando éramos tú y yo', 'Los primeros miedos y todo lo que Melina fue aprendiendo junto a Josmar.', 46, mama, [
          escena(clip('bebe'), 'Cuando naciste, yo estaba aprendiendo a ser mamá desde el primer día.'),
          escena(23, 'Si alguna vez me ganó el miedo o no supe cómo hacer algo, ojalá podamos hablarlo.'),
          escena(22, 'Yo quería cuidarte y darte lo mejor que tenía. Mientras tú crecías, yo también iba creciendo.'),
          escena(27, 'A veces quisiera regresar el tiempo, para abrazarte y besarte mas')
        ]),
        episodio('Los días de estar juntos', 'Fotos en la mesa y de cumpleaños, recuerdos del cariño con el que creció Josmar.', 46, regalo, [
          escena(17, 'Al vernos aquí, pienso en todo el cariño que te acompañó mientras crecías.'),
          escena(19, 'Qué gusto que tengamos fotos de esas veces en que nos juntamos alrededor de una mesa.'),
          escena(20, 'Siempre me da alegría tener un pretexto para celebrar que estás aquí.'),
          escena(29, 'Si volvemos a verlas juntos, me gustaría que me contaras qué recuerdas tú.')
        ]),
        episodio('Aquí sigue tu mamá', 'Un mensaje para los días tranquilos y para aquellos en los que hace falta compañía.', 46, viaje, [
          escena(1, 'Me gusta ver que sigues haciendo tus planes y encontrando lugares que quieres conocer.'),
          escena(8, 'Quiero seguir compartiendo contigo las salidas que planeamos y las que se arman sobre la marcha.'),
          escena(10, 'Si un día la vida se te hace pesada, puedes contarme cómo te sientes. Tengo tiempo para escucharte.'),
          escena(11, 'Te amo, mi hijo amado, mi Josmar. — Mamá')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: 'Melina', nombreB: 'Josmar', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: foto(14), perfilPareja: foto(11),
      t0: foto(23), t1: foto(25), t2: foto(9), t3: foto(7), t4: foto(11), t5: foto(29)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/para-josmar.mp4'
    },
    acceso: {
      demo: false, password: '1625d06d3de73937418ce4526853435cd850b2bc6dd078287f16888a4006099d',
      pistaPassword: 'Tu fecha de nacimiento (DDMMAA).', estreno: ''
    },
    notificacion: { whatsapp: '529221294214', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us.rotfstudio.com/clientes/melina-josmar/sitio/index.html', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Recuerdos y dedicatorias en familia',
      heroTag: 'DE MAMÁ PARA JOSMAR', heroTop: fecha,
      sinopsis: 'El día en que naciste yo también empecé a crecer. Junté estas fotos y canciones para decirte cuánto te quiero y cuánto orgullo me da ser tu mamá.',
      generos: ['Familia', 'Historias reales', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Desde pequeño', img: foto(23), texto: 'Hijo, cuando veo esta foto me dan ganas de volver a abrazarte así de chiquito.' },
      { titulo: 'Las risas en familia', img: foto(12), texto: 'Qué gusto tener una foto de esos días en que salíamos juntos y todo acababa en risas.' },
      { titulo: 'Un día para celebrar', img: foto(29), texto: 'Siempre voy a tener ganas de festejar tu cumpleaños y de verte pedir otro deseo.' },
      { titulo: 'Seguimos caminando', img: foto(16), texto: 'Ojalá que hagamos muchas más salidas de ésas que nos dejan fotos para volver a ver juntos.' }
    ],
    final: {
      titulo: 'Una carta de mamá', imagen: portada(4),
      sinopsis: 'Las palabras de Melina para Josmar, cinco preguntas para compartir recuerdos y un último montaje familiar.',
      preguntas: [
        '¿Qué foto de esta historia te hizo sonreír primero?',
        '¿Qué recuerdo de cuando eras niño te gustaría contarme?',
        '¿Qué recuerdo en familia te gustaría que volviéramos a platicar?',
        '¿Qué meta te ilusiona ahora, y cómo te gustaría que te acompañara?',
        '¿Qué plan te gustaría que hiciéramos juntos?'
      ],
      carta: () => [
        'Josmar, hijo:',
        'Un 6 de agosto de 1998 con miedos tuve la fortuna de ser madre de mi pequeño Josmar, todo era nuevo para mi.  te olía y te miraba tan pequeño, que solo quería protegerte y amarte.',
        'Fue una etapa donde solo éramos tu y yo. Con mi inexperiencia queriendo conquistar el mundo para ti.',
        'Fuiste creciendo y te desarrollabas tan bien, fuerte, amoroso, alegre, feliz, amado por tu familia.',
        'Has crecido y te has forjado como un hombre inteligente amoroso, decidido a lograr tus metas.',
        'Se que nada es fácil hijo, solo se que te amo y que aquí estoy para ti, seguir en este camino, en este mundo de locos donde la meta es ser felices.',
        'Te amo mi hijo amado, mi josmar',
        'Melina, tu mamá'
      ].join('\n\n')
    },
    creditos: [
      ['Para', 'Josmar'], ['De', 'Melina, tu mamá'], ['El día que me hiciste mamá', fecha],
      ['Banda sonora', [espera, orgullo, regalo, viaje, mama].map(({ cancion }) => cancion).join(' · ')],
      ['Escenas de ambientación', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(11), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Si pudiera volver a ese 6 de agosto por un momento, te cargaría otra vez y le diría a esa mamá que disfrute cada abrazo.',
      anuncio: 'Continuará', subtitulo: 'Todavía nos quedan muchas fotos por tomar.',
      sorpresa: 'Aquí estoy para ti. — Mamá'
    }
  };
})();

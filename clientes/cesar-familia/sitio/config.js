window.TDN = (() => {
  const fecha = '26 de junio de 2023';
  const foto = (id) => `assets/fotos/familia-${id}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const ambiente = (id) => ({ img: `assets/ambiente/${id}.webp`, ambientacion: true });
  const clip = (id) => ({
    img: `assets/ambiente/${id}.mp4`, poster: ambiente(id).img, ambientacion: true
  });
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'string' ? { img: medio } : medio),
    texto
  });

  const perfect = { cancion: 'Perfect — Ed Sheeran', musica: 'assets/audio/perfect-climax.mp3' };
  const photograph = { cancion: 'Photograph — Ed Sheeran', musica: 'assets/audio/photograph-climax.mp3' };
  const thinking = { cancion: 'Thinking Out Loud — Ed Sheeran', musica: 'assets/audio/thinking-out-loud-climax.mp3' };
  const reason = { cancion: 'Just Give Me a Reason — P!nk con Nate Ruess', musica: 'assets/audio/just-give-me-a-reason-climax.mp3' };
  const canciones = [perfect, photograph, thinking, reason];
  const episodio = (titulo, descripcion, duracion, track, escenas) => ({
    titulo, descripcion, duracion, escenas, ...track
  });
  const pelicula = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen, anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...track,
    creditos: [['Para', 'Alejandra y Mía Valentina'], ['De', 'Cesar'], ['Música', track.cancion]],
    episodios: [{ ...episodio(titulo, sinopsis, 76, track, escenas), imagen }]
  });

  const temporadas = [
    pelicula(0, 'El día que fuimos tres', portada('08-4'), perfect,
      'Primero se conocieron Cesar y Alejandra. El 26 de junio de 2023 nació Mía Valentina y los dos empezaron a escribir una historia de tres.', [
        escena(clip('ventana'), 'Alejandra, cuando te conocí no me imaginaba que un día íbamos a formar una familia.'),
        escena(foto('08-3'), 'Nos fuimos conociendo entre pláticas, risas y detalles.', 'Con el tiempo empecé a imaginar una vida contigo.'),
        escena(ambiente('zapatitos'), 'Y llegó el día que nos cambió la vida.', fecha),
        escena(foto('09-0'), 'Mía Valentina, el día que naciste conocí una forma de querer que hasta entonces no sabía que existía.'),
        escena(foto('08-0'), 'Desde entonces, hasta los días más comunes tienen algo que me da ganas de recordar.'),
        escena(foto('08-4'), 'Si algún día me preguntan qué es lo mejor que me ha pasado, voy a pensar en ustedes dos.')
      ]),
    pelicula(1, 'Las cosas que quiero guardar', portada('07-0'), photograph,
      'Las fotos que hacen reír a Cesar y las cosas que quiere recordar de ver crecer a Valentina.', [
        escena(foto('07-0'), 'Mía, me sigue dando risa vernos con esos sombreros y esas pantuflas.'),
        escena(foto('07-1'), 'Me encanta esa cara que pones cuando sabes que se te ocurrió algo divertido.'),
        escena(foto('09-6'), 'Quiero acordarme de cómo te veías con tu faldita de colores, sosteniendo la pelota.'),
        escena(foto('09-5'), 'Y de ti en la cancha con tu playera, tan ocupada descubriendo todo.'),
        escena(foto('07-3'), 'También de las veces en que ni te dabas cuenta de que te estaba tomando una foto.'),
        escena(foto('07-4'), 'Cuando seas más grande y veamos estas fotos, me encantará escuchar lo que tú recuerdas.')
      ]),
    pelicula(2, 'Gracias por lo de todos los días', portada('08-0'), thinking,
      'Una película para dar las gracias por el cariño que sostiene la casa y por las pequeñas alegrías de ser familia.', [
        escena(clip('ventana'), 'Quería darles las gracias por cosas que a veces se me olvida decir en voz alta.'),
        escena(foto('08-0'), 'Alejandra, gracias por construir esta vida conmigo y por el cariño con que cuidas a nuestra hija.'),
        escena(foto('09-1'), 'Gracias por las risas, por los detalles y por estar cerca en los días en que hace falta compañía.'),
        escena(foto('07-5'), 'Mía, gracias por hacer especial hasta la hora del postre.'),
        escena(foto('08-5'), 'Gracias por dejarme acompañarte mientras vas aprendiendo a hacer tantas cosas tú sola.'),
        escena(foto('09-3'), 'Qué suerte tengo de poder decir que ustedes son mi familia.')
      ]),
    pelicula(3, 'Todo lo que nos falta vivir', portada('07-6'), reason,
      'Cesar imagina lo que quiere cuidar, aprender y vivir con Alejandra y Mía Valentina mientras su familia sigue creciendo.', [
        escena(clip('olas'), 'Me ilusiona pensar en los días que todavía no conocemos.'),
        escena(foto('07-6'), 'Quiero que sigamos haciendo tiempo para salir los tres, aunque sea sin planear gran cosa.'),
        escena(foto('08-2'), 'Alejandra, quiero seguir preguntándote qué te ilusiona y ayudarte a hacerle lugar a eso.'),
        escena(ambiente('pasos'), 'Mía, quiero darte confianza para probar cosas nuevas y que sepas que siempre puedes volver a casa.'),
        escena(foto('08-1'), 'Quiero estar ahí para celebrar lo que te salga bien y para hacerte compañía cuando algo te cueste.'),
        escena(foto('08-4'), 'Y cuando un día nos gane el cansancio, quiero que nos demos tiempo para escucharnos.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Así somos los tres', imagen: portada('09-3'),
      anio: 2026, clasificacion: 'TP', ...photograph,
      sinopsis: 'Tres episodios sobre cómo empezó la familia, lo que disfrutan juntos y una promesa para Mía Valentina.',
      creditos: [['Para', 'Alejandra y Mía Valentina'], ['De', 'Cesar']],
      episodios: [
        episodio('Primero, nosotros dos', 'Cesar recuerda cómo fue haciendo espacio para Alejandra en su vida.', 36, thinking, [
          escena(clip('ventana'), 'Alejandra, al principio lo que más quería era seguir platicando contigo.'),
          escena(foto('08-3'), 'Entre una risa y otra, empecé a pensar en todas las cosas que quería vivir a tu lado.'),
          escena(foto('08-4'), 'Y qué bonito que aquella historia sea también la historia de cómo empezó nuestra familia.')
        ]),
        episodio('Un día cualquiera con ustedes', 'En la cancha y junto al agua, Cesar encuentra recuerdos que le gustaría volver a vivir.', 36, photograph, [
          escena(foto('09-3'), 'Me gusta vernos en esta foto, los tres con la playera del equipo.'),
          escena(foto('09-2'), 'También me gusta recordar esas caras que pones cuando algo te tiene bien entretenida.'),
          escena(clip('olas'), 'A veces extraño esos ratitos junto al agua, cuando podíamos quedarnos ahí sin mirar la hora.')
        ]),
        episodio('Cuando seas grande', 'Cesar deja unas palabras para que Mía Valentina las vuelva a escuchar cuando quiera.', 46, perfect, [
          escena(ambiente('zapatitos'), 'Mía Valentina, naciste el 26 de junio de 2023. Tu mamá y yo siempre vamos a guardar ese día con cariño.'),
          escena(foto('08-1'), 'Cuando seas grande quizá no te acuerdes de jugar en la arena conmigo. A mí todavía me hace sonreír.'),
          escena(foto('08-0'), 'Ojalá que, cada vez que vuelvas a estas fotos, sepas cuánto te queremos tu mamá y yo.'),
          escena(foto('08-4'), 'Qué alegría crecer como familia contigo. Te quiero, hija. — Papá')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: 'Cesar', nombreB: 'Familia', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: foto('08-4'), perfilPareja: foto('07-5'),
      t0: foto('08-4'), t1: foto('07-0'), t2: foto('08-0'),
      t3: foto('07-6'), t4: foto('09-3'), t5: foto('09-6')
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/para-mi-familia.mp4'
    },
    acceso: {
      demo: false, password: 'ac5b55bd42fd2b2c8b8b2f94fbef30fa36f54b95479425601442376b0982ba55',
      pistaPassword: 'El día en que nació Mía Valentina (DDMMAA).', estreno: ''
    },
    notificacion: { whatsapp: '525644904366', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us.rotfstudio.com/clientes/cesar-familia/sitio/index.html', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Recuerdos y dedicatorias en familia',
      heroTag: 'DE CESAR PARA SU FAMILIA', heroTop: fecha,
      sinopsis: 'Cuando llegó Mía Valentina, Cesar y Alejandra empezaron a escribir una historia de tres. Este regalo reúne los recuerdos que Cesar quiere guardar y lo que sueña vivir con ellas.',
      generos: ['Familia', 'Historias reales', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'La tarde de los sombreros', img: foto('07-0'), texto: 'Cada vez que veo esos sombreros me acuerdo de lo fácil que es ponerme a jugar contigo.' },
      { titulo: 'En la cancha', img: foto('09-5'), texto: 'Me gusta que tengamos una foto de ti con la playera del equipo. Me da curiosidad saber por cuál vas a echar porras cuando seas más grande.' },
      { titulo: 'Junto al agua', img: foto('07-6'), texto: 'De esa foto me gusta que estábamos los tres. Quiero volver a salir así con ustedes.' },
      { titulo: 'Tu falda de colores', img: foto('09-6'), texto: 'Cuando veo esta foto pienso en todas las cosas que todavía te queda por probar. Me ilusiona saber cuáles vas a elegir.' }
    ],
    final: {
      titulo: 'Una carta para mi familia', imagen: portada('08-2'),
      sinopsis: 'Unas palabras de Cesar para Alejandra y Mía Valentina, cinco preguntas para guardar sus propios recuerdos y un video de despedida.',
      preguntas: [
        '¿Qué recuerdo de los tres te gustaría volver a vivir?',
        '¿Qué gesto de cariño de nuestra familia te hace sentir en casa?',
        '¿Qué detalle de la infancia de Mía te gustaría que ella conozca cuando crezca?',
        '¿Qué plan te gustaría que hagamos los tres?',
        '¿Qué le dirías a nuestra familia para que lo lea dentro de unos años?'
      ],
      carta: () => [
        'Alejandra y Mía Valentina:',
        'Ale, cuando te conocí me gustaba pasar el tiempo contigo y seguir descubriendo cosas de ti. Poco a poco empecé a pensar que quería compartir mi vida contigo. Todavía me da alegría pensar en cómo llegamos hasta aquí.',
        'Mía, el 26 de junio de 2023 naciste y desde ese día hasta una tarde en casa puede terminar con una de mis fotos favoritas. Me gusta verte bailar, inventar juegos y hacer esas caras que luego trato de imitar.',
        'Gracias a las dos por hacerme parte de sus días. Quiero estar cerca para escucharlas, hacer planes que nos ilusionen a los tres y ayudar a que nuestra casa siga siendo el lugar al que nos gusta volver.',
        'Las quiero muchísimo.\nCesar'
      ].join('\n\n')
    },
    creditos: [
      ['Para', 'Alejandra y Mía Valentina'], ['De', 'Cesar'], ['El día que fuimos tres', fecha],
      ['Banda sonora', canciones.map(({ cancion }) => cancion).join(' · ')],
      ['Imágenes de ambientación', 'Pexels']
    ],
    postCreditos: {
      imagen: foto('08-4'), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Alejandra y Mía, de todos los papeles que me ha tocado hacer, mis favoritos son estar contigo, Ale, y ser tu papá, Mía.',
      anuncio: 'Continuará', subtitulo: 'La próxima foto de los tres todavía está por hacerse.',
      sorpresa: 'Las quiero. — Cesar'
    }
  };
})();

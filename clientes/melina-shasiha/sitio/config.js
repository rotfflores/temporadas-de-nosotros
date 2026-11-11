window.TDN = (() => {
  const nombreA = 'Melina';
  const nombreB = 'Shasiha';
  const aniversario = '15 de febrero';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = nombre => `assets/fotos/${nombre}.webp`;
  const escena = (n, ...texto) => ({ img: foto(n), texto });
  const ambiente = (nombre, ...texto) => ({
    img: `assets/ambiente/${nombre}.webp`, etiqueta: 'Escena ilustrativa', texto
  });
  const clip = (nombre, ...texto) => ({
    ...ambiente(nombre, ...texto),
    poster: `assets/ambiente/${nombre}.webp`, img: `assets/ambiente/${nombre}.mp4`
  });
  const tracks = {
    destino: ['La fuerza del destino · Mecano', 'destino'],
    ojos: ['El color de tus ojos · Banda MS', 'ojos'],
    diario: ['Nuestro amor de cada día · Laura Pausini', 'diario'],
    anos: ['Te amaré por mil años', 'mil-anos']
  };
  const bandaSonora = ([cancion, archivo]) => ({
    cancion, musica: `assets/audio/${archivo}-climax.mp3`
  });
  const episodio = (titulo, descripcion, track, escenas) => ({
    titulo, descripcion, duracion: 6 + escenas.length * 9, escenas, ...bandaSonora(track)
  });
  const creditos = [['Para', nombreB], ['Con amor de', nombreA]];
  const pelicula = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(imagen), anio: 2026,
    clasificacion: 'TP', sinopsis, top10: num === 0, creditos, ...bandaSonora(track),
    episodios: [episodio(titulo, sinopsis, track, escenas)]
  });

  const temporadas = [
    pelicula(0, 'La primera salida', 'primera-salida', tracks.destino,
      'Todo empezó cuando Shasiha pasaba por el vestidor del trabajo de Melina. Una invitación a comer cambió lo que vendría después.', [
        escena(5, 'Todo empezó en el vestidor de mi trabajo.', 'Llegabas y yo encontraba la forma de hacerte sonrojar.'),
        escena(4, 'Coincidimos varias veces.', 'Al principio me decías que no.'),
        escena(2, 'Hasta que un día aceptaste y salimos a comer.', 'Platicamos, nos reímos y quisimos volver a vernos.'),
        escena(6, 'A esa comida le siguieron unas cuantas salidas.', 'Yo tenía cada vez más ganas de conocerte.'),
        escena(23, 'El 1 de diciembre de 2019 me dijiste que sí.', 'Ese día empezamos a llamarnos novias.'),
        escena(29, 'Todavía me da alegría acordarme de cómo empezó todo.', 'A veces una comida alcanza para cambiarte los planes.')
      ]),
    pelicula(1, 'Elegirnos con todo y miedo', 'elegirnos', tracks.ojos,
      'Entre el miedo, las opiniones ajenas y las ganas de conocerse, las dos fueron aprendiendo a hacerle espacio a su historia.', [
        escena(31, 'Cuando empezamos, a veces daba miedo.', 'Hubo gente que no aceptaba que estuviéramos juntas.'),
        escena(30, 'Seguimos con ganas de conocernos', 'y de disfrutar lo que nos estaba pasando.'),
        escena(33, 'Hubo desacuerdos, enojos y dudas.', 'También hubo conversaciones que nos ayudaron a entendernos.'),
        escena(28, 'Fuimos encontrando acuerdos a nuestro ritmo.', 'Y aparecieron metas que nos ilusionaban a las dos.'),
        escena(32, 'Gracias por las sonrisas que guardamos de esos años.', 'Cuando veo nuestras fotos, me dan ganas de abrazarte.'),
        escena(9, 'Me alegra que hayamos tenido tiempo para conocernos.', 'Y me sigue gustando descubrir cosas de ti.')
      ]),
    pelicula(2, 'Un sí frente al mar', 'boda', tracks.anos,
      'El 15 de febrero de 2023 se casaron en la playa, vestidas de blanco. Después celebraron a su manera, entre lila y dorado.', [
        clip('olas', 'El 15 de febrero de 2023 nos casamos en la playa.', 'Las dos vestidas de blanco, con el mar cerquita.'),
        ambiente('rosas', 'Gracias a nuestra familia y amistades por acompañarnos.', 'Qué bonito fue poder compartir ese día con ustedes.'),
        escena(7, 'Me enternece volver a vernos celebrando la boda.', 'Hasta partir juntas un pastel nos sacaba una sonrisa.'),
        escena(11, 'Después llegamos al salón, adornado a nuestro gusto.', 'Tú de lila, yo de dorado.'),
        escena(19, 'Entramos nerviosas, sonrientes y felices.', 'Qué ganas teníamos de seguir haciendo una vida juntas.'),
        escena(11, 'Aquel día fue otro comienzo para nosotras.', 'Cada 15 de febrero vuelvo a pensar en lo que sentí.')
      ]),
    pelicula(3, 'La vida en sus matices', 'matices', tracks.diario,
      'Melina agradece la complicidad, las conversaciones y el cariño que sostienen la vida que comparten después de la boda.', [
        escena(22, 'Después de casarnos llegaron nuevos acuerdos.', 'Seguimos aprendiendo a acompañarnos día con día.'),
        escena(10, 'Gracias por hacer espacio para lo que nos importa a cada una.', 'Me gusta saber que puedo hablar contigo de lo que me ilusiona.'),
        escena(3, 'Gracias por las veces que acabamos riéndonos juntas.', 'Vuelvo a ver estas fotos y se me pega tu sonrisa.'),
        escena(20, 'Me gusta que tengamos cosas que celebrar', 'y también tardes en las que basta estar juntas.'),
        escena(17, 'Quiero seguir preguntándote cómo te fue,', 'sentarme cerquita y escucharte con calma.'),
        escena(16, 'En este mundo lleno de matices, qué bonito coincidir contigo.', 'Gracias por la vida que compartimos, Shasiha.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'De tu mano', imagen: portada('de-tu-mano'), anio: 2026,
      clasificacion: 'TP', creditos, ...bandaSonora(tracks.anos),
      sinopsis: 'Tres episodios sobre lo que Melina quiere seguir cuidando y lo que sueña vivir de la mano de Shasiha.',
      episodios: [
        episodio('Hacernos tiempo', 'Un episodio sobre las conversaciones y los planes pequeños que quieren cuidar.', tracks.diario, [
          escena(1, 'Quiero que sigamos haciendo tiempo para las dos.', 'Para salir, reírnos y volver a casa con algo que contar.'),
          escena(12, 'También quiero estar cerquita en los días difíciles.', 'Poder preguntarte qué necesitas y escucharte.'),
          escena(8, 'Que cada una tenga espacio para hacer lo que sueña.', 'Y que podamos celebrar juntas cuando algo salga bien.'),
          escena(24, 'Todavía tenemos mucho que aprender la una de la otra.', 'A mí me sigue dando gusto hacerlo contigo.')
        ]),
        episodio('Más caminos juntas', 'Las fotos de sus salidas le recuerdan a Melina las ganas que tiene de seguir viajando con Shasiha.', tracks.ojos, [
          escena(15, 'Miro esta foto en el barco y ya quiero volver a salir contigo.', 'Me gusta descubrir lugares y verlos también con tus ojos.'),
          escena(25, 'Quiero más días cerca del agua,', 'de esos en los que nos dan ganas de quedarnos un rato más.'),
          escena(26, 'Y más escapadas que podamos recordar riéndonos.', 'Hasta cuando nos toque salir bien abrigadas.'),
          escena(27, 'Nos queda mucho por conocer, Shasiha.', '¿Adónde te gustaría que fuéramos la próxima vez?')
        ]),
        episodio('Dos tazas, muchos años', 'Melina imagina la calma de tomar té, darse la mano y seguir disfrutando lo que la vida les regale.', tracks.anos, [
          clip('te', 'Cuando seamos grandes, me imagino sirviendo el té.', 'Quiero que podamos sentarnos juntas, sin prisa.'),
          ambiente('dos-tazas', 'Ojalá tengamos muchos viajes de los que hablar.', 'Y que todavía nos den ganas de planear el siguiente.'),
          escena(21, 'Si ese día solo tenemos que tomarnos de las manos,', 'a mí me va a dar gusto tener la tuya cerquita.'),
          escena(13, 'Feliz 15 de febrero, Shasiha.', 'Te amo. — Melina')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA, nombreB, anioInicio: 2019, aniversario, fechaInicio: '2019-12-01', ciudad: '', viajes: [] },
    fotos: {
      hero: portada('hero'), perfilB: portada('perfil-shasiha'), perfilPareja: portada('perfil-pareja'),
      t0: foto(5), t1: foto(28), t2: foto(11), t3: foto(22), t4: foto(15), t5: foto(19)
    },
    media: {
      intro: 'assets/audio/intro.mp3', temporadas: Object.values(tracks).map(track => bandaSonora(track).musica),
      videoFinal: 'assets/video/para-shasiha.mp4'
    },
    acceso: {
      demo: false, password: 'b7b99ba738afaaf923fa742a27b26940a9c5e327507b1660cc4de9d72ff19d78',
      pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: ''
    },
    notificacion: { whatsapp: '529221294214', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us.rotfstudio.com/clientes/melina-shasiha/sitio/index.html',
      coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance y recuerdos',
      titulo: 'De tu mano', heroTag: 'DE MELINA PARA SHASIHA', heroTop: aniversario,
      sinopsis: 'De aquella primera comida al día en que se casaron frente al mar. Melina vuelve a sus recuerdos con Shasiha y le cuenta cómo imagina los años que vienen.',
      generos: ['Romance', 'Historias reales', 'Aniversario'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Cuando se nos pega la risa', img: foto(14), texto: 'Me gusta cuando nos arreglamos, nos acercamos para la foto y acabamos riéndonos de algo que solo entendemos las dos.' },
      { titulo: 'Otra foto contigo', img: foto(18), texto: 'Gracias por todos esos ratitos en que nos basta acercarnos y sonreír.' },
      { titulo: 'Lila y dorado', img: foto(19), texto: 'Ese día entramos al salón nerviosas y felices. Todavía me emociona vernos con esos vestidos.' }
    ],
    final: {
      titulo: 'Una carta para Shasiha', imagen: portada('carta'),
      sinopsis: 'Una carta de Melina, cinco preguntas para recordar juntas y un último montaje de sus fotos.',
      preguntas: [
        '¿Qué recuerdas de aquella primera vez que salimos a comer?',
        '¿Qué momento de nuestra boda te gusta volver a recordar?',
        '¿Qué cosa de nuestra vida diaria te hace sentir más cerquita de mí?',
        '¿Qué lugar te gustaría que conociéramos juntas?',
        '¿Cómo imaginas una tarde de té cuando seamos grandes?'
      ],
      carta: () => [
        'Shasiha, mi amor:',
        'Todavía me acuerdo de cuando llegabas al vestidor de mi trabajo y yo te hacía sonrojar. Qué gusto me dio salir a comer contigo aquella vez. Después de platicar y reírnos juntas, me quedé con ganas de volver a verte. El 1 de diciembre de 2019 empezamos a ser novias y todavía me emociona acordarme de ese día.',
        'Tuvimos miedo y nos dolió que hubiera gente que no nos aceptara. En medio de todo eso nos fuimos conociendo. Me acuerdo de los enojos, de las dudas y de lo bien que se sentía encontrar un acuerdo o volver a reírnos después de un día complicado. Gracias por el tiempo que nos hemos dado para aprender a cuidarnos.',
        'El 15 de febrero de 2023 estábamos las dos de blanco en la playa, acompañadas por familia y amistades. Después, en ese salón que adornamos a nuestro gusto, tú de lila y yo de dorado, entramos nerviosas y sonrientes. A veces miro nuestras fotos y me vuelve la felicidad de aquel día.',
        'Me gusta la vida que estamos haciendo desde entonces. Gracias por apoyarme, por compartir tus días conmigo y por dejarme acompañarte en lo que sueñas. Quiero que sigamos viajando, riéndonos y encontrando ratos para platicar con calma.',
        'Me ilusiona imaginarte conmigo cuando seamos grandes. Dos tazas de té, tus manos en las mías y tiempo para disfrutar lo que la vida nos regale. Feliz aniversario, Shasiha.',
        'Te amo.\nMelina'
      ].join('\n\n')
    },
    creditos: [
      ...creditos, ['Nuestro aniversario', aniversario],
      ['Banda sonora', Object.values(tracks).map(([cancion]) => cancion).join(' · ')],
      ['Escenas ilustrativas', 'Mario Krimer, Charlotte May, Vladyslav Huivyk y Anastasiia Lopushynska · Pexels'],
      ['Agradecimientos', 'A nuestra familia y amistades por acompañarnos el día de nuestra boda.']
    ],
    postCreditos: {
      imagen: foto(21), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Shasiha, ¿nos tomamos un té?',
      anuncio: 'Continuará', subtitulo: 'Todavía nos quedan muchos caminos juntas.',
      sorpresa: 'Yo pongo el agua. Tú dime adónde vamos en nuestro próximo viaje. — Melina'
    }
  };
})();

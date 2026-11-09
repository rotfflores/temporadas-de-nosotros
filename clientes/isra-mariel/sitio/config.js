(() => {
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const ambiente = n => `assets/ambiente/${n}.webp`;
  const clip = n => ({ img: `assets/video/momento-${n}.mp4`, poster: `assets/fotos/momento-${n}.webp` });
  const bosque = { img: 'assets/ambiente/bosque.mp4', poster: ambiente('bosque') };
  const audio = n => `assets/audio/${n}.mp3`;
  const pista = (archivo, cancion) => ({ musica: audio(archivo), cancion });
  const ahi = pista('ahi', 'Ahí Estabas Tú — Carín León');
  const antes = pista('antes', 'Antes Que Al Mío — Los Claxons');
  const posibilidad = pista('posibilidad', 'La Posibilidad — Los Claxons');
  const solamente = pista('solamente', 'Solamente Tú — Pablo Alborán');
  const soledad = pista('soledad', 'Tu soledad y la mía — Intocable');

  const escena = (medio, ...texto) => typeof medio === 'string'
    ? { img: medio, poster: medio, texto }
    : { ...medio, texto };
  const episodio = (titulo, duracion, descripcion, imagen, musica, escenas) =>
    ({ titulo, duracion, descripcion, imagen, ...musica, escenas, interaccion: null, recompensa: '' });
  const pelicula = (num, titulo, imagen, musica, sinopsis, duracion, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    ...musica, top10: num === 0, sinopsis,
    creditos: [['Una historia para', 'Mariel'], ['Con cariño de', 'Isra'], ['Música', musica.cancion]],
    episodios: [episodio(titulo, duracion, sinopsis, imagen, musica, escenas)]
  });

  const peliculas = [
    pelicula(0, 'Veinte años después', portada(8), ahi,
      'Una amistad en la universidad, años sin verse y un reencuentro en Zacatlán que cambió los planes de Isra.', 69, [
        escena(ambiente('aula'), 'Hace veinte años éramos compañeros', 'en la universidad. Ahí nos hicimos amigos.'),
        escena(ambiente('costa'), 'Pasaron años sin vernos.', 'Yo vivía en La Paz, Baja California Sur.'),
        escena(foto(21), 'Tú estabas en Zacatlán, Puebla.', 'La distancia se volvió parte de la rutina.'),
        escena(foto(22), 'El 15 de agosto volví a llamarte.', 'Y desde entonces te llamé todos los días.'),
        escena(ambiente('camino'), 'El 8 de octubre fui a verte.', 'Por fin podía decirte hola en persona.'),
        escena(foto(8), 'Qué gusto volver a verte, Mariel.', 'Había tanto por contarnos.'),
        escena(foto(28), 'Vine a verte a Zacatlán.', 'Y decidí quedarme. Ya no regresaré a La Paz.'),
        escena(foto(26), 'El domingo 1 de noviembre', 'empezamos a ser novios. Qué bonito poder decirlo.'),
        escena(foto(30), 'Quién nos iba a decir que aquella amistad', 'todavía tenía tanto por delante.')
      ]),
    pelicula(1, 'Del otro lado de la llamada', portada(4), soledad,
      'El 15 de agosto volvió a sonar el teléfono. Poco a poco, dos ciudades dejaron de sentirse tan lejos.', 55, [
        escena(ambiente('costa'), 'Yo en La Paz. Tú en Zacatlán.', 'Habían pasado años desde la última vez que nos vimos.'),
        escena(foto(24), 'Todo empezó otra vez con una llamada.', 'El 15 de agosto volví a escuchar tu voz.'),
        escena(foto(11), 'Después te llamé todos los días.', 'Qué fácil fue volver a tener de qué hablar.'),
        escena(foto(7), 'Me gustaba imaginar tu cara', 'cuando te oía reír del otro lado.'),
        escena(foto(17), 'Cada llamada me dejaba', 'con más ganas de verte.'),
        escena(foto(23), 'Me hacía ilusión conocer de nuevo', 'a la persona en la que te habías convertido.'),
        escena(foto(4), 'Y un día ya pude escucharte', 'sin un teléfono de por medio.')
      ]),
    pelicula(2, 'El camino hasta ti', portada(14), antes,
      'El 8 de octubre llegó el reencuentro. Zacatlán pasó de ser la ciudad donde vivía Mariel al lugar donde Isra decidió quedarse.', 62, [
        escena(ambiente('camino'), '8 de octubre.', 'Después de tantas llamadas, fui a verte.'),
        escena(bosque, 'Todo lo que quería era volver a verte', 'y saber cómo se sentía estar juntos otra vez.'),
        escena(foto(28), 'Zacatlán era el lugar donde vivías.', 'Ahora también es donde quiero quedarme.'),
        escena(foto(9), 'Volver a estar cerca de ti', 'me dio una alegría que todavía me dura.'),
        escena(clip(2), 'Ahora me encanta tener momentos así,', 'de esos que no caben en una llamada.'),
        escena(foto(13), 'Ya no regresaré a La Paz.', 'Quiero descubrir cómo es la vida aquí contigo.'),
        escena(foto(14), 'Quiero aprender tus caminos favoritos', 'y que encontremos otros juntos.'),
        escena(foto(27), 'Qué gusto que el camino', 'me haya traído de vuelta a ti.')
      ]),
    pelicula(3, 'Domingo de estreno', portada(31), solamente,
      'El 1 de noviembre se hicieron novios. Isra celebra la fecha y todo lo que espera de este comienzo.', 55, [
        escena(foto(25), 'Domingo 1 de noviembre de 2026.', 'Nuestro primer día como novios.'),
        escena(foto(31), 'Todavía me hace sonreír', 'poder decir que soy tu novio.'),
        escena(clip(1), 'Me gusta estar cerca de ti', 'hasta cuando estamos haciendo cualquier cosa.'),
        escena(foto(1), 'Me gusta que primero fuéramos amigos.', 'Hay algo muy bonito en volver a conocernos así.'),
        escena(foto(29), 'Quiero cuidar la confianza', 'con la que volvimos a hablarnos.'),
        escena(foto(2), 'Y quiero que nos sigan dando ganas', 'de contarnos cómo nos fue en el día.'),
        escena(foto(3), 'Mariel, qué alegría empezar', 'este capítulo contigo.')
      ])
  ];

  const serie = {
    num: 4, tipo: 'serie', titulo: 'La vida que sigue', anio: 2026, clasificacion: 'TP',
    imagen: portada(26), ...posibilidad,
    sinopsis: 'Tres mensajes de Isra para Mariel sobre el cariño de todos los días, la gratitud y los planes que todavía pueden hacer juntos.',
    creditos: [['De', 'Isra'], ['Para', 'Mariel'], ['Próximo capítulo', 'El que hagamos juntos']],
    episodios: [
      episodio('Lo que me gusta de estar aquí', 37, 'Las cosas sencillas que Isra disfruta de tener a Mariel cerca.', foto(18), posibilidad, [
        escena(foto(5), 'Me gusta compartir la mesa contigo', 'y tener tiempo para hablar de cualquier cosa.'),
        escena(foto(6), 'Me gusta esa risa que te sale', 'cuando estamos haciendo tonterías.'),
        escena(foto(10), 'Me gusta mirarte cuando estás distraída', 'y sorprenderte sonriendo.'),
        escena(foto(18), 'Me gusta poder decirte todo esto', 'teniendo tu cara cerquita.')
      ]),
      episodio('Gracias por volver a hablar conmigo', 45, 'Una gratitud que va de la primera llamada a los días compartidos.', foto(20), ahi, [
        escena(foto(20), 'Gracias por dejarme conocerte', 'en esta etapa de tu vida.'),
        escena(foto(12), 'Gracias por hacerme un lugar', 'en tus días desde aquella llamada.'),
        escena(clip(3), 'Gracias por los ratitos', 'que ahora podemos compartir en persona.'),
        escena(foto(32), 'Me da gusto que hayamos vuelto a coincidir.', 'Ya tenemos recuerdos que me dan ganas de guardar.'),
        escena(foto(15), 'Gracias, Mariel, por empezar', 'esta historia conmigo.')
      ]),
      episodio('Planes de dos', 45, 'Los deseos de Isra para la vida que empieza a construir en Zacatlán con Mariel.', foto(19), antes, [
        escena(foto(19), 'Quiero que inventemos nuestras rutinas', 'y guardemos tiempo para salir a caminar.'),
        escena(foto(16), 'Quiero acompañarte en las cosas', 'que te ilusionan a ti.'),
        escena(foto(21), 'También quiero que hagamos planes juntos', 'y podamos cambiarlos cuando haga falta.'),
        escena(foto(30), 'En los días difíciles quiero escucharte', 'y aprender a pedirte que me escuches.'),
        escena(foto(26), 'Tenemos tiempo para descubrir', 'cómo queremos que se vea nuestra vida.')
      ])
    ]
  };

  const carta = [
    'Mariel,',
    'Hace veinte años te conocí en la universidad. Fuimos amigos y después pasaron muchos años sin vernos. Yo estaba en La Paz y tú en Zacatlán. A veces pienso en todo lo que pudo haberse quedado sin decir si aquel 15 de agosto no te hubiera llamado.',
    'Desde entonces te llamé todos los días. El 8 de octubre pude volver a verte, y el domingo 1 de noviembre nos hicimos novios. Todavía me da gusto repasar esas tres fechas y pensar en cómo cambió mi vida entre una y otra.',
    'Gracias por volver a abrirme un espacio en tus días. Me da ilusión quedarme en Zacatlán y descubrir contigo cómo se siente compartir la vida de cerca. Quiero que haya paseos, sobremesas, planes de los dos y tiempo para seguir siendo los amigos que fuimos al principio.',
    'Me alegra muchísimo ser tu novio.',
    'Con todo mi cariño, Isra'
  ].join('\n\n');

  window.TDN = {
    pareja: { nombreA: 'Isra', nombreB: 'Mariel', fechaInicio: '2026-11-01', anioInicio: 2026, ciudad: 'Zacatlán, Puebla', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: foto(22), perfilPareja: foto(26),
      t0: foto(8), t1: foto(4), t2: foto(14), t3: foto(31), t4: foto(25), t5: foto(26)
    },
    acceso: { demo: false, password: '5bedd317328c9ed79ecd3aecee74d37f97813cb4ce61ef3402eb388fb369fa86', pistaPassword: 'La fecha en que nos hicimos novios (DDMM).', estreno: '' },
    notificacion: { whatsapp: '526121768495', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us.rotfstudio.com/clientes/isra-mariel/sitio/index.html?compartir=1',
      coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance y reencuentros',
      heroTag: 'EXCLUSIVO PARA MARIEL', heroTop: 'Una historia de Isra para Mariel',
      sinopsis: 'Se conocieron en la universidad. Veinte años después, una llamada volvió a unir La Paz y Zacatlán. El 8 de octubre se reencontraron y el 1 de noviembre empezaron a ser novios.',
      generos: ['Romance', 'Basada en hechos reales', 'Reencuentros'], filaRecomendada: 'Veinte años después'
    },
    media: { intro: audio('intro'), temporadas: [ahi.musica, soledad.musica, antes.musica, solamente.musica, posibilidad.musica], videoFinal: 'assets/video/para-mariel.mp4' },
    temporadas: [...peliculas, serie],
    extras: [
      { titulo: '15 de agosto', img: foto(24), texto: 'Volví a llamarte. A partir de ese día, escuchar tu voz se volvió parte de mi rutina.' },
      { titulo: '8 de octubre', img: foto(28), texto: 'El día en que volví a verte en Zacatlán.' },
      { titulo: '1 de noviembre', img: foto(31), texto: 'Domingo. Nuestro primer día como novios.' }
    ],
    final: {
      titulo: 'Para ti, Mariel', imagen: portada(25),
      sinopsis: 'Un último montaje y una carta de Isra sobre la alegría de volver a encontrarse.',
      preguntas: [
        '¿Qué recuerdas de cuando éramos compañeros en la universidad?',
        '¿Qué pensaste cuando volví a llamarte el 15 de agosto?',
        '¿Qué guardas del reencuentro del 8 de octubre?',
        '¿Qué te gustaría que hiciéramos juntos en Zacatlán?',
        '¿Qué quieres que tenga nuestro próximo capítulo?'
      ],
      carta: () => carta
    },
    creditos: [
      ['Una historia para', 'Mariel'], ['Con cariño de', 'Isra'], ['Protagonistas', 'Isra y Mariel'],
      ['Banda sonora', [ahi, antes, posibilidad, solamente, soledad].map(track => track.cancion).join(' · ')],
      ['Desde', '1 de noviembre de 2026'], ['Próximo capítulo', 'En Zacatlán']
    ],
    postCreditos: {
      imagen: foto(25), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Mariel, ¿hacemos otro plan?',
      anuncio: 'Continuará', subtitulo: 'Tenemos mucho por conocer juntos.', sorpresa: 'Nos vemos en el próximo capítulo. — Isra'
    }
  };
})();

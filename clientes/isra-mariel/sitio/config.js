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

  const nuevaFoto = nombre => `assets/fotos/${nombre}.webp`;
  const lago = { img: 'assets/ambiente/lago.mp4', poster: ambiente('lago') };
  const todoCambio = pista('todo-cambio', 'Todo Cambió — Camila');
  const cosaBella = pista('la-cosa-mas-bella', 'La Cosa Más Bella — Eros Ramazzotti');
  const perfecta = pista('perfecta', 'Perfecta — Miranda!');
  const mezclaEncuentro = pista('mezcla-encuentro', `${ahi.cancion} · ${soledad.cancion}`);
  const mezclaPorvenir = pista('mezcla-porvenir', `${solamente.cancion} · ${posibilidad.cancion}`);
  const instrumental = pista('carefree', 'Carefree — Kevin MacLeod (instrumental)');

  const peliculasNuevas = [
    pelicula(5, 'Lo que cambió al quedarme', nuevaFoto('paseo'), todoCambio,
      'Isra le cuenta a Mariel qué significa hacer vida en Zacatlán, después de tantos años hablando desde lejos.', 62, [
        escena(lago, 'Antes, saber de ti era esperar una llamada.', 'Hoy me alegra poder decirte: ¿salimos un rato?'),
        escena(nuevaFoto('mariel-orilla'), 'Me gusta ir conociendo Zacatlán a tu lado.', 'También me gusta sentarme contigo y mirar el agua.'),
        escena(nuevaFoto('paseo'), 'Decidir quedarme fue apenas el comienzo.', 'Lo bonito es descubrir qué hacer con el tiempo que tenemos.'),
        escena(foto(28), 'Quiero que hagamos nuestros recorridos favoritos', 'y que algún día podamos elegirlos sin siquiera ponernos de acuerdo.'),
        escena(nuevaFoto('patio'), 'Gracias por hacerme espacio en tus días.', 'Yo quiero aprender a estar presente en los tuyos.'),
        escena(nuevaFoto('mariel-lago'), 'Si un martes cualquiera termina con una charla contigo,', 'para mí ya valió la pena el día.'),
        escena(foto(26), 'Por eso me da tanto gusto haber llegado.', 'Y por eso quiero seguir aquí.')
      ]),
    pelicula(6, 'Mis cosas favoritas de ti', nuevaFoto('muy-cerca'), cosaBella,
      'Una película para Mariel sobre lo que Isra admira de ella y las pequeñas cosas que se le quedan en la memoria.', 60, [
        escena(nuevaFoto('muy-cerca'), 'Mariel, hay cosas de ti', 'que se me quedan grabadas con solo mirarte.'),
        escena(nuevaFoto('mariel-taza'), 'Esa sonrisa que se te escapa', 'justo cuando intentas esconderla detrás de la taza.'),
        escena(nuevaFoto('mariel-orilla'), 'Lo fácil que es pasar de estar platicando', 'a quedarnos callados un rato, a gusto.'),
        escena(foto(7), 'Me hace feliz saber que todavía puedo descubrir', 'algo nuevo de la amiga que conocí hace veinte años.'),
        escena(foto(22), 'Admiro la vida que has hecho.', 'Gracias por contarme de ella y dejarme conocerte hoy.'),
        escena(nuevaFoto('brindis'), 'Quiero seguir encontrando motivos para decirte', 'lo mucho que me gustas.'),
        escena(foto(25), 'Y si mañana se me olvida decirlo,', 'aquí queda por escrito.')
      ]),
    pelicula(7, 'Brindis por lo sencillo', nuevaFoto('brindis'), perfecta,
      'Un paseo, una taza de barro y el gusto de pasar la tarde juntos. Una película para guardar esas escenas.', 61, [
        escena(nuevaFoto('brindis'), 'Un brindis por estas tardes', 'en que tenemos tiempo de quedarnos otro rato.'),
        escena(nuevaFoto('patio'), 'Por las fotos que nos tomamos', 'cuando estamos a medio chiste.'),
        escena(nuevaFoto('mariel-taza'), 'Por esas tazas de barro', 'que me van a recordar tu cara cada vez que vea una.'),
        escena(lago, 'Me gustaría que sigamos saliendo sin prisa', 'y preguntándonos qué se nos antoja hacer ese día.'),
        escena(nuevaFoto('paseo'), 'A veces el plan que más me gusta', 'es sentarme donde estás tú.'),
        escena(foto(5), 'Gracias por compartir conmigo', 'también las tardes de cualquier día.'),
        escena(nuevaFoto('muy-cerca'), 'Quiero guardar muchas más de esas', 'y acordarme de lo bien que la pasamos.')
      ]),
    pelicula(8, 'Siempre un lugar para Ger', nuevaFoto('ger-sonrisa'), mezclaEncuentro,
      'Isra le cuenta a Ger cuánto le alegra conocerlo y cómo le gustaría construir su amistad, a su ritmo.', 62, [
        escena(nuevaFoto('ger-sonrisa'), 'Ger, me da mucho gusto conocerte.', 'Qué bonito que podamos compartir esta etapa.'),
        escena(ambiente('sobremesa'), 'Cuando imagino los planes con tu mamá,', 'siempre hay un lugar para ti en la mesa.'),
        escena(nuevaFoto('ger-patio'), 'También hay un lugar para lo que tú piensas.', 'Me importa saber qué quieres y cómo te sientes.'),
        escena(nuevaFoto('minecraft'), 'Si un día quieres enseñarme Minecraft,', 'me dará gusto que tú seas mi maestro.'),
        escena(nuevaFoto('ger-fuente'), 'Quiero ser tu amigo, Ger,', 'y que nos conozcamos a tu ritmo.'),
        escena(nuevaFoto('ger-isra-lago'), 'Me gusta compartir ratos así contigo, Ger.', 'Hasta quedarnos un momento mirando el agua.'),
        escena(nuevaFoto('ger-sonrisa'), 'Gracias por los ratitos que ya hemos compartido.', 'Me alegra que estés aquí, tal como eres.')
      ])
  ];

  peliculasNuevas[0].episodios[0].interaccion = {
    tipo: 'quiz',
    pregunta: '¿En qué ciudad decidió quedarse Isra?',
    opciones: ['La Paz', 'Zacatlán', 'Puebla capital'],
    correcta: 1
  };
  peliculasNuevas[3].episodios[0].interaccion = {
    tipo: 'ordenar',
    titulo: 'Ordena nuestra historia',
    eventos: ['Nos hicimos amigos en la universidad', 'Volvimos a hablar el 15 de agosto', 'Nos reencontramos el 8 de octubre', 'Nos hicimos novios el 1 de noviembre']
  };

  const serieNueva = {
    num: 9, tipo: 'serie', titulo: 'Hacer equipo', anio: 2026, clasificacion: 'TP',
    imagen: nuevaFoto('paseo'), ...antes,
    sinopsis: 'Tres episodios sobre agradecer lo vivido, hacer planes en familia y dedicarle a Ger una aventura de Minecraft.',
    creditos: [
      ['Con cariño de', 'Isra'],
      ['Para', 'Mariel y Ger'],
      ['Música del especial', '«Carefree» — Kevin MacLeod (incompetech.com). CC BY 4.0. Fragmento editado.']
    ],
    episodios: [
      episodio('Gracias por hacerme un lugar', 50, 'Isra le agradece a Mariel la confianza con la que han vuelto a acercarse.', nuevaFoto('muy-cerca'), antes, [
        escena(ambiente('carta-familia'), 'Mariel, gracias por aquella primera charla', 'después de tanto tiempo.'),
        escena(nuevaFoto('muy-cerca'), 'Todavía me gusta cuando una conversación con la que', 'íbamos a ponernos al día nos lleva a hacer otro plan.'),
        escena(nuevaFoto('mariel-orilla'), 'Gracias por irme mostrando cómo es tu vida aquí', 'y por preguntarme cómo me gustaría hacer la mía.'),
        escena(nuevaFoto('patio'), 'Quiero darte también un lugar en mis planes', 'y tiempo para contarme los tuyos.'),
        escena(foto(14), 'Me da alegría hacer todo eso', 'con la amiga que volví a encontrar y que ahora es mi novia.')
      ]),
      episodio('Un sábado para los tres', 54, 'Isra imagina un sábado en familia en el que Ger también decide qué hacer.', nuevaFoto('ger-lago'), mezclaPorvenir, [
        escena(nuevaFoto('ger-lago'), 'Ger, si pudieras elegir el plan del sábado,', '¿por dónde empezaríamos?'),
        escena(nuevaFoto('ger-orilla'), 'Podríamos sentarnos junto al agua un rato', 'y después buscar algo rico para comer.'),
        escena(nuevaFoto('ger-patio'), 'O quedarnos en casa y armar una partida.', 'Me da curiosidad saber qué se te ocurriría a ti.'),
        escena(nuevaFoto('ger-fuente'), 'Me gusta pensar en una tarde con tiempo', 'para escuchar tus historias y reírnos juntos.'),
        escena(nuevaFoto('ger-sonrisa'), 'Tu mamá y yo tenemos ganas de compartir esos días contigo.', 'Tus ideas también hacen que el plan sea de los tres.')
      ]),
      episodio('Una aventura para Ger', 64, 'Un especial de Isra para Ger, con Minecraft y música instrumental.', nuevaFoto('ger-fuente'), instrumental, [
        escena(nuevaFoto('ger-fuente'), 'Ger, esta aventura es para ti.', 'Me da mucho gusto que podamos conocernos.'),
        escena(nuevaFoto('ger-patio'), 'Quiero ser tu amigo y conocer tu mundo.', '¿Qué es lo que más te gusta construir en Minecraft?'),
        escena(nuevaFoto('minecraft-1'), 'Yo llevo las antorchas.', 'Tú me dices si empezamos con una casa o una expedición.'),
        escena(nuevaFoto('ger-orilla'), 'También me gustaría salir a explorar contigo.', 'Puedes enseñarme los lugares que más te gustan.'),
        escena(nuevaFoto('especial-juntos'), 'Tu mamá y yo queremos que tengas tiempo para tus aventuras', 'y que sepas que puedes contar con nosotros.'),
        escena(nuevaFoto('especial-mariel'), 'Tu mamá y yo estaremos felices de escucharte', 'cuando quieras contarnos cómo te fue.'),
        escena(nuevaFoto('ger-sonrisa'), 'Ojalá nunca te falten ganas de imaginar', 'y de enseñarnos las cosas que inventas.'),
        escena(nuevaFoto('especial-ger'), 'Gracias por ser tú, Ger. Cuando quieras jugar, me apunto.', 'Con cariño, tu amigo Isra.')
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
    temporadas: [...peliculas, serie, ...peliculasNuevas, serieNueva],
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
      ['Música nueva', [todoCambio, cosaBella, perfecta].map(track => track.cancion).join(' · ')],
      ['Música del especial', '«Carefree» — Kevin MacLeod (incompetech.com). CC BY 4.0. Fragmento editado.'],
      ['Desde', '1 de noviembre de 2026'], ['Próximo capítulo', 'En Zacatlán']
    ],
    postCreditos: {
      imagen: foto(25), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Mariel, ¿hacemos otro plan?',
      anuncio: 'Continuará', subtitulo: 'Tenemos mucho por conocer juntos.', sorpresa: 'Nos vemos en el próximo capítulo. — Isra'
    }
  };
})();

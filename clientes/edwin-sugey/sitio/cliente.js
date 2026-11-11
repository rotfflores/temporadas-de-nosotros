(() => {
  const c = window.TDN;
  const remitente = 'Edwin';
  const destinataria = 'Margi Sugey Dias Rojas';
  const aniversario = '25 de julio';
  const edicion = 2026;
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = nombre => `assets/fotos/${nombre}.webp`;
  const tracks = [
    ['El color de tus ojos — Banda MS', 'el-color-de-tus-ojos'],
    ['Hagamos el amor — Mr Grillo', 'hagamos-el-amor'],
    ['Fuerte no soy — Intocable', 'fuerte-no-soy'],
    ['Para ti mi amor — Los Invasores de Nuevo León', 'para-ti-mi-amor'],
    ['Pequeña de ojos brujos — Banda Bucanera', 'pequena-de-ojos-brujos']
  ].map(([cancion, nombre]) => ({ cancion, musica: `assets/audio/${nombre}-climax.mp3` }));

  const escena = (n, ...texto) => ({ img: foto(n), texto });
  const ambiente = (nombre, ...texto) => ({
    img: portada(nombre), texto, etiqueta: 'Escena ilustrativa'
  });
  const clip = (nombre, ...texto) => ({
    img: `assets/video/${nombre}.mp4`, poster: portada(nombre), texto, etiqueta: 'Escena ilustrativa'
  });
  const episodio = (titulo, descripcion, duracion, escenas) => ({
    titulo, descripcion, duracion, escenas, interaccion: null, recompensa: ''
  });
  const creditos = [['Para', destinataria], ['Con amor de', remitente]];
  const pelicula = (num, titulo, imagen, sinopsis, escenas) => ({
    num, titulo, tipo: 'pelicula', anio: edicion, imagen: portada(imagen), sinopsis,
    clasificacion: 'TP', top10: num === 0, creditos, ...tracks[num],
    episodios: [episodio(titulo, sinopsis, 6 + escenas.length * 9, escenas)]
  });

  Object.assign(c.pareja, {
    nombreA: remitente, nombreB: 'Sugey', nombreCompletoA: remitente, nombreCompletoB: destinataria,
    apodo: 'Sugey', apodos: ['Sugey', 'mi amor'], fechaInicio: '', aniversario, anioInicio: edicion,
    anios: 0, fechaCodigo: '2507',
    mensajeFinal: 'Gracias a Dios por tu recuperación. Gracias a ti por seguir aquí conmigo. Te amo, Sugey.'
  });
  Object.assign(c.fotos, {
    hero: portada('hero'), perfilB: foto(24), perfilPareja: foto(16),
    t0: foto(5), t1: foto(23), t2: foto(17), t3: foto(16), t4: foto(27), t5: foto(11),
    final: portada('carta'), postCreditos: foto(11)
  });
  Object.assign(c.media, {
    intro: 'assets/audio/intro.mp3', temporadas: tracks.map(t => t.musica),
    canciones: tracks.map(t => t.cancion), videoFinal: 'assets/video/para-sugey.mp4', audioRemitente: ''
  });
  Object.assign(c.acceso, {
    demo: false, password: 'ecb80fffef1947a59eb3fff9d3dddfc60140387317a22d9c0e3f3f85177f3e68',
    pistaPassword: 'El día y el mes de nuestro aniversario, en cuatro dígitos.', estreno: ''
  });
  Object.assign(c.notificacion, { whatsapp: '525636591539', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/edwin-sugey/sitio/index.html?compartir=1', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance, recuerdos y esperanza',
    heroTag: 'PARA SUGEY', heroTop: 'Edwin te dedica esta historia',
    sinopsis: 'Un autolavado, tu nombre en mi piel y un septiembre que nos cambió. Entre altas y bajas, aquí seguimos.',
    generos: ['Romance', 'Nuestra historia', 'Dedicatoria'], filaRecomendada: 'Donde te conocí'
  });

  c.temporadas = [
    pelicula(0, 'Donde te conocí', 'encuentro', 'Un encuentro en un autolavado y las ganas de volver a vernos.', [
      clip('autolavado', 'Todo empezó en un autolavado.', 'Ahí te conocí, Sugey.'),
      ambiente('lluvia', 'Era un día cualquiera hasta que coincidimos.', 'Hoy me da gusto que haya sido justo ahí.'),
      escena(4, 'Después salimos un par de veces.', 'Yo tenía ganas de seguir conociéndote.'),
      escena(16, 'Cuando miro esta foto, vuelvo a pensar', 'en lo bonito que fue empezar a tener recuerdos contigo.'),
      escena(9, 'Me gustaba mirarte de cerca', 'y descubrir esa forma tan tuya de sonreír.'),
      escena(5, 'De aquel encuentro a este abrazo,', 'qué suerte la mía haberte encontrado.')
    ]),
    pelicula(1, 'Sugey, en mi piel', 'tatuaje', 'Una salida, unas copas de más y una anécdota que Edwin lleva escrita en el brazo.', [
      escena(18, 'En una de nuestras salidas', 'se nos pasaron un poquito las copas.'),
      escena(22, 'Y esa vez hice algo que todavía me da risa contar:', 'me tatué tu nombre.'),
      escena(25, 'Sugey.', 'Así quedó escrito en mi brazo.'),
      escena(26, 'Cada vez que lo veo recuerdo aquella locura', 'y las ganas de reírme contigo otra vez.'),
      escena(23, 'Me gusta esta foto: tu mano sobre mi brazo.', 'En ese pedacito cabe toda la anécdota.'),
      escena(14, 'Después de aquella noche,', 'todavía nos quedaba mucho por vivir.')
    ]),
    pelicula(2, 'El primero de septiembre', 'septiembre', 'La espera de Edwin durante la operación y el alivio de saber que Sugey se recuperaba.', [
      clip('pasillo', 'El primero de septiembre entraste a urgencias.', 'Te costaba respirar.'),
      escena(19, 'Te internaron, te operaron', 'y tuvieron que hacerte una traqueotomía.'),
      escena(20, 'Tardabas en despertar de la anestesia.', 'Recuerdo lo larga que se hizo esa espera.'),
      ambiente('camino', 'Lo que más quería era saber que estabas bien.', 'Poco a poco llegó el alivio.'),
      escena(24, 'Tu recuperación salió bien.', 'Gracias a Dios por verte salir adelante.'),
      escena(17, 'Hoy puedo volver a estar cerquita de ti.', 'Después de aquel susto, eso significa muchísimo.')
    ]),
    pelicula(3, 'Gracias por seguir aquí', 'gratitud', 'Una dedicatoria por lo compartido y por la oportunidad de seguir juntos.', [
      escena(3, 'Gracias por tu forma de sonreír, Sugey.', 'Es de esas cosas que me alegra volver a ver.'),
      escena(10, 'Gracias por los besos que caben en un segundo', 'y que me alegran el día entero.'),
      escena(13, 'Quiero seguir teniendo detalles contigo,', 'como regalarte flores y verte sonreír al recibirlas.'),
      escena(27, 'Hemos tenido días ligeros y días complicados.', 'Me importa cómo nos tratamos en los dos.'),
      escena(21, 'Este 25 de julio quiero celebrar', 'que seguimos compartiendo la vida.'),
      escena(11, 'Gracias por estar aquí, mi amor.', 'Me sigue dando alegría ser tu compañero.')
    ]),
    {
      num: 4, tipo: 'serie', titulo: 'Lo que viene contigo', anio: edicion, imagen: portada('serie'),
      clasificacion: 'TP', sinopsis: 'Tres episodios sobre lo que Edwin quiere cuidar, acompañar y celebrar con Sugey.',
      creditos, ...tracks[4],
      episodios: [
        episodio('Hacernos tiempo', 'Más espacio para hablar y compartir los días.', 33, [
          escena(12, 'Quiero que tengamos tiempo para nosotros,', 'aunque sea para salir un rato y ponernos al día.'),
          escena(15, 'Quiero preguntarte cómo estás', 'y quedarme a escuchar lo que tengas que decir.'),
          escena(6, 'También quiero disfrutar contigo', 'los días que compartimos con la gente que queremos.')
        ]),
        episodio('Estar de tu lado', 'Acompañarnos en las metas de cada uno.', 33, [
          escena(7, 'Me gustaría saber qué te hace ilusión ahora', 'y cómo puedo acompañarte para conseguirlo.'),
          escena(8, 'Quiero celebrar lo que logres', 'y darte ánimo cuando el paso cueste.'),
          escena(1, 'También quiero contarte lo que sueño yo', 'y hacer espacio para los planes que nos entusiasmen a los dos.')
        ]),
        episodio('Otro 25 de julio', 'Una fecha para volver a mirarnos y seguir haciendo recuerdos.', 33, [
          escena(2, 'Quiero más noches que nos den ganas de guardar,', 'como esta en la que posaste con la luna.'),
          escena(5, 'Y cuando vuelva el 25 de julio,', 'quiero que tengamos más historias que contarnos.'),
          escena(11, 'Con nuestras altas y bajas, aquí seguimos.', 'Te amo, Sugey. — Edwin')
        ])
      ]
    }
  ];

  c.extras = [
    { titulo: 'Nuestro 25 de julio', img: foto(5), texto: 'La fecha que elegimos celebrar tú y yo.' },
    { titulo: 'Tu nombre', img: foto(23), texto: 'Una anécdota que siempre podré contar mirando mi brazo.' },
    { titulo: 'Bajo la luna', img: foto(11), texto: 'Un beso que me alegra tener guardado.' }
  ];
  c.final = {
    titulo: 'Una carta para Sugey', imagen: portada('carta'),
    sinopsis: 'Lo que Edwin quiere agradecerte y lo que sueña seguir construyendo contigo.',
    preguntas: [
      '¿Qué recuerdas de cuando nos conocimos?',
      '¿Qué pensaste la primera vez que viste tu nombre en mi brazo?',
      '¿Qué recuerdo de los dos siempre te hace sonreír?',
      '¿Qué te gustaría que hiciéramos juntos de aquí al próximo 25 de julio?',
      '¿Qué te gustaría decirme hoy, Sugey?'
    ],
    carta: () => [
      'Sugey, mi amor:',
      'Cada vez que pienso en cómo nos conocimos me da gusto haber coincidido contigo en aquel autolavado. De las primeras salidas me quedó una anécdota que puedo contar con solo enseñarte el brazo: ahí está tu nombre.',
      'El primero de septiembre sentí mucho miedo. Durante la espera solo quería saber que estabas bien. Gracias a Dios pudiste recuperarte. Me emociona pensar en todo lo que hemos podido compartir desde entonces.',
      'Gracias por las risas, por los besos y por esos ratos en los que estamos a gusto sin hacer gran cosa. Hasta las fotos más sencillas me recuerdan por qué disfruto tanto estar contigo.',
      'Hemos tenido altas y bajas. Quiero poner de mi parte para escucharte con paciencia, hablar cuando algo nos pese y hacer tiempo para disfrutarnos. También quiero saber qué sueñas hacer y acompañarte en lo que decidas.',
      'Feliz aniversario, Margi Sugey Dias Rojas. Este 25 de julio celebro todo lo que ya vivimos y la oportunidad de seguir haciendo recuerdos contigo.',
      'Te amo.\nEdwin'
    ].join('\n\n')
  };
  c.creditos = [
    ...creditos, ['Nuestro aniversario', aniversario], ['Banda sonora', tracks.map(t => t.cancion).join(' · ')],
    ['Imágenes de ambientación', 'Ricky Esquivel, Enrique Silva, Alexey Demidov y Griffin Wooldridge · Pexels'],
    ['Agradecimientos', 'Gracias a Dios por tu recuperación, Sugey.'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(11), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Sugey, ¿y si volvemos a salir solo tú y yo?',
    anuncio: 'Continuará', subtitulo: 'Por otro recuerdo juntos.',
    sorpresa: 'Me encantaría que eligiéramos un día para salir y tomarnos otra foto. Te amo, Sugey. — Edwin'
  };
})();

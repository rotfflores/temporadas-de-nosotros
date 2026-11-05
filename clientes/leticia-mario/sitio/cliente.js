/* Contenido exclusivo de Lety para Mario; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Lety';
  const B = 'Mario';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = n => `assets/ambiente/${n}.webp`;
  /* Videos del cliente: en bucle y sin sonido, con su miniatura. */
  const vid = n => ({ img: `assets/video/momento-${n}.mp4`, poster: `assets/fotos/momento-${n}.webp` });
  const tracks = {
    esperaba: { titulo: 'Te Esperaba — Carlos Rivera', src: 'assets/audio/te-esperaba-climax.mp3' },
    quererme: { titulo: 'Tú Sí Sabes Quererme — Natalia Lafourcade', src: 'assets/audio/tu-si-sabes-climax.mp3' },
    aprendi: { titulo: 'Contigo Aprendí — Armando Manzanero', src: 'assets/audio/contigo-aprendi-climax.mp3' },
    especial: { titulo: 'Canción especial 1', src: 'assets/audio/especial-1-climax.mp3' },
    /* Pista continua para la primera película (6 min): «Te Esperaba» completa y después «Tú Sí Sabes Quererme», sin repetir. */
    historia: { titulo: 'Te Esperaba — Carlos Rivera', src: 'assets/audio/historia-completa.mp3' }
  };

  /* Su historia, con las palabras exactas de Lety (solo se repartió en subtítulos). */
  const historia = [
        "❤️ NUESTRA HISTORIA…",
        "Una historia que el destino tenía pendiente.",
        "Hay historias de amor que comienzan con un primer encuentro,",
        "otras con una mirada inesperada y algunas, como la nuestra,",
        "comienzan mucho antes de que el corazón",
        "alcance a comprenderlo.",
        "Nos conocimos en la Universidad Politécnica de Tecámac,",
        "sin imaginar que aquella coincidencia algún día",
        "se convertiría en uno de los capítulos",
        "más bonitos de nuestras vidas.",
        "Éramos dos personas que compartían un mismo espacio,",
        "sin saber que el destino ya había cruzado nuestros caminos",
        "y que todavía tenía algo maravilloso",
        "preparado para nosotros.",
        "Después, la vida siguió su curso.",
        "Dejamos de frecuentarnos,",
        "cada quien tomó su propio camino y el tiempo pasó.",
        "Quizá en aquel momento no era nuestro tiempo,",
        "quizá todavía teníamos que vivir otras experiencias,",
        "aprender, crecer y recorrer otros caminos",
        "antes de volver a encontrarnos.",
        "Pero hay personas que llegan a nuestra vida",
        "y dejan una huella que ni el tiempo",
        "ni la distancia consiguen borrar.",
        "Y entonces llegó el 24 de abril de 2022…",
        "Una llamada telefónica, una conversación, una invitación",
        "y un plan que parecía tan sencillo:",
        "ir juntos a la Feria del Caballo.",
        "Jamás imaginamos que aquella decisión, aparentemente tan casual,",
        "terminaría convirtiéndose en el comienzo",
        "de nuestra propia historia de amor.",
        "Entre música, sonrisas, miradas,",
        "conversaciones y momentos compartidos,",
        "algo comenzó a despertar.",
        "Y quizá ninguno de los dos lo sabía todavía,",
        "pero aquella noche estábamos escribiendo las primeras páginas",
        "de una historia que cambiaría nuestras vidas.",
        "Fue entonces cuando entendimos",
        "que nuestra historia aún no había comenzado.",
        "Que la vida nos estaba regalando una nueva oportunidad,",
        "no para volver al pasado,",
        "sino para descubrir todo lo bonito",
        "que todavía podíamos construir juntos.",
        "Y qué maravilloso ha sido descubrirte,",
        "conocerte de otra manera,",
        "compartir mis días contigo, reír a tu lado,",
        "crear recuerdos, vivir aventuras, superar momentos",
        "y encontrar en ti a esa persona",
        "con la que quiero seguir sumando historias.",
        "Porque amarte no solamente significa",
        "disfrutar de los días bonitos;",
        "también significa elegirte en los días difíciles,",
        "tomarte de la mano cuando las cosas no son sencillas,",
        "celebrar tus alegrías, acompañarte en tus sueños",
        "y seguir encontrando motivos para enamorarme de ti.",
        "Hoy puedo decir que agradezco profundamente",
        "aquella llamada, aquella invitación y, sobre todo,",
        "agradezco a la vida",
        "por haberte vuelto a poner en mi camino.",
        "No sé cuántas vueltas tuvo que dar el destino",
        "para reunirnos nuevamente,",
        "pero sí sé que volvería a recorrer cada uno de esos caminos",
        "si al final me llevaran otra vez a ti.",
        "Y si pudiera regresar a aquella noche del 24 de abril,",
        "volvería a aceptar esa invitación,",
        "volvería a encontrarte, volvería a mirarte",
        "y volvería a elegir comenzar esta historia contigo.",
        "Porque entre tantas personas,",
        "tantos lugares y tantos caminos,",
        "qué fortuna haber coincidido contigo.",
        "Qué fortuna que seas tú.",
        "Qué fortuna que, después de todo,",
        "la vida nos haya permitido escribir este amor.",
        "Y si esta vida me concediera mil oportunidades de vivir,",
        "quisiera encontrarte en cada una de ellas.",
        "Porque no solamente agradezco que hayas llegado a mi vida,",
        "agradezco que te hayas quedado",
        "y que hoy seas parte de mi felicidad.",
        "24 DE ABRIL DE 2022",
        "El día en que el destino nos dio una segunda oportunidad",
        "y comenzó nuestra historia favorita.",
        "Y esto no es el final de la película…",
        "apenas es el comienzo de todos los capítulos que todavía nos esperan.",
        "PROTAGONISTAS: LETY Y MARIO.",
        "Una historia real. Un amor que volvió a encontrarse.",
        "Dos corazones y toda una vida de recuerdos por construir.",
        "Y el amor… apenas comienza. ❤️"
    ];
  const historiaTexto = "❤️ NUESTRA HISTORIA…\n\nUna historia que el destino tenía pendiente.\n\nHay historias de amor que comienzan con un primer encuentro, otras con una mirada inesperada y algunas, como la nuestra, comienzan mucho antes de que el corazón alcance a comprenderlo.\n\nNos conocimos en la Universidad Politécnica de Tecámac, sin imaginar que aquella coincidencia algún día se convertiría en uno de los capítulos más bonitos de nuestras vidas. Éramos dos personas que compartían un mismo espacio, sin saber que el destino ya había cruzado nuestros caminos y que todavía tenía algo maravilloso preparado para nosotros.\n\nDespués, la vida siguió su curso. Dejamos de frecuentarnos, cada quien tomó su propio camino y el tiempo pasó. Quizá en aquel momento no era nuestro tiempo, quizá todavía teníamos que vivir otras experiencias, aprender, crecer y recorrer otros caminos antes de volver a encontrarnos.\n\nPero hay personas que llegan a nuestra vida y dejan una huella que ni el tiempo ni la distancia consiguen borrar.\n\nY entonces llegó el 24 de abril de 2022…\n\nUna llamada telefónica, una conversación, una invitación y un plan que parecía tan sencillo: ir juntos a la Feria del Caballo.\n\nJamás imaginamos que aquella decisión, aparentemente tan casual, terminaría convirtiéndose en el comienzo de nuestra propia historia de amor.\n\nEntre música, sonrisas, miradas, conversaciones y momentos compartidos, algo comenzó a despertar. Y quizá ninguno de los dos lo sabía todavía, pero aquella noche estábamos escribiendo las primeras páginas de una historia que cambiaría nuestras vidas.\n\nFue entonces cuando entendimos que nuestra historia aún no había comenzado. Que la vida nos estaba regalando una nueva oportunidad, no para volver al pasado, sino para descubrir todo lo bonito que todavía podíamos construir juntos.\n\nY qué maravilloso ha sido descubrirte, conocerte de otra manera, compartir mis días contigo, reír a tu lado, crear recuerdos, vivir aventuras, superar momentos y encontrar en ti a esa persona con la que quiero seguir sumando historias.\n\nPorque amarte no solamente significa disfrutar de los días bonitos; también significa elegirte en los días difíciles, tomarte de la mano cuando las cosas no son sencillas, celebrar tus alegrías, acompañarte en tus sueños y seguir encontrando motivos para enamorarme de ti.\n\nHoy puedo decir que agradezco profundamente aquella llamada, aquella invitación y, sobre todo, agradezco a la vida por haberte vuelto a poner en mi camino.\n\nNo sé cuántas vueltas tuvo que dar el destino para reunirnos nuevamente, pero sí sé que volvería a recorrer cada uno de esos caminos si al final me llevaran otra vez a ti.\n\nY si pudiera regresar a aquella noche del 24 de abril, volvería a aceptar esa invitación, volvería a encontrarte, volvería a mirarte y volvería a elegir comenzar esta historia contigo.\n\nPorque entre tantas personas, tantos lugares y tantos caminos, qué fortuna haber coincidido contigo. Qué fortuna que seas tú. Qué fortuna que, después de todo, la vida nos haya permitido escribir este amor.\n\nY si esta vida me concediera mil oportunidades de vivir, quisiera encontrarte en cada una de ellas. Porque no solamente agradezco que hayas llegado a mi vida, agradezco que te hayas quedado y que hoy seas parte de mi felicidad.\n\n24 DE ABRIL DE 2022\n\nEl día en que el destino nos dio una segunda oportunidad y comenzó nuestra historia favorita.\n\nY esto no es el final de la película… apenas es el comienzo de todos los capítulos que todavía nos esperan.\n\nPROTAGONISTAS: LETY Y MARIO.\n\nUna historia real. Un amor que volvió a encontrarse. Dos corazones y toda una vida de recuerdos por construir.\n\nY el amor… apenas comienza. ❤️";

  /* Imágenes de la primera película, por bloques de la historia (máximo 10 distintas). */
  const historiaImgs = [
    [3, foto(24)], [7, foto(17)], [12, amb('camino')], [16, vid(3)], [19, foto(5)],
    [24, foto(18)], [28, vid(2)], [34, foto(23)], [39, foto(29)], [44, foto(30)]
  ];
  const imgHistoria = i => historiaImgs.find(([hasta]) => i < hasta)[1];
  const escenasHistoria = [];
  for (let i = 0; i < historia.length; i += 2) {
    const m = imgHistoria(i / 2);
    const media = typeof m === 'string' ? { img: m, poster: m } : m;
    escenasHistoria.push({ ...media, texto: historia.slice(i, i + 2) });
  }

  const carta = [
    'Mario:',
    'Quise regalarte nuestra historia como si fuera una película, porque para mí es la más bonita de todas.',
    'Nos conocimos en la universidad sin imaginar nada, la vida nos llevó por caminos distintos y aun así el destino nos volvió a juntar.',
    'Gracias por aquella llamada, por aquella invitación a la Feria del Caballo y por todo lo que empezó el 24 de abril de 2022.',
    'Gracias por cada día a mi lado, por los momentos bonitos y también por los difíciles, porque en todos te sigo eligiendo.',
    'Quiero seguir sumando historias contigo, cumplir juntos nuestros sueños y escribir todos los capítulos que todavía nos esperan.',
    'Qué fortuna haber coincidido contigo. Qué fortuna que seas tú. Te amo. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi amor'], apodo: B,
    fechaInicio: '2022-04-24', anioInicio: 2022, anios: 4, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Te Esperaba', artista: 'Carlos Rivera', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir sumando historias juntos', 'Acompañarnos en cada sueño', 'Elegirnos todos los días'],
    mensajeFinal: 'Qué fortuna haber coincidido contigo. Te amo ❤️ — Lety'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(27), perfilPareja: foto(26),
    t0: foto(18), t1: foto(3), t2: foto(19), t3: foto(23), t4: foto(20), t5: foto(29),
    t6: foto(10), t7: foto(32), final: portada(24),
    puzzle: foto(22), puzzle2: foto(28), postCreditos: foto(29)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks.historia.src, tracks.quererme.src, tracks.aprendi.src, tracks.especial.src, tracks.esperaba.src];
  c.media.canciones = [tracks.esperaba.titulo, tracks.quererme.titulo, tracks.aprendi.titulo, tracks.especial.titulo, tracks.esperaba.titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-mario.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: 'e7ec9579bab24d67788c3f901e7d904c7733bb0e6fac1eb750d94704f99ba420', pistaPassword: 'El día en que comenzó nuestra historia (DDMMAA).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '525547081718', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/leticia-mario/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, destino y gratitud',
    heroTag: 'EXCLUSIVO PARA MARIO', heroTop: 'Una historia de Lety para Mario',
    sinopsis: 'Se conocieron en la universidad, la vida los llevó por caminos distintos y el 24 de abril de 2022 una llamada y una invitación a la Feria del Caballo les dieron una segunda oportunidad. Cuatro películas, una serie y un juego.',
    generos: ['Romance', 'Basada en hechos reales', 'Segundas oportunidades'], filaRecomendada: 'Qué fortuna haber coincidido contigo'
  });

  const scene = (img, ...texto) => (typeof img === 'string' ? { img, poster: img, texto } : { ...img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2022, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Nuestra historia favorita', portada(18), tracks.historia,
      'Una universidad, caminos que se separan y una llamada el 24 de abril de 2022. La historia de Lety y Mario, contada por ella con sus propias palabras.',
      escenasHistoria, 6 + historia.length * 4),
    film(1, 'Qué fortuna que seas tú', portada(3), tracks.quererme,
      'Lo que Lety siente por Mario, lo que le gusta de él y todo lo que despertó aquella noche.', [
        scene(foto(26), 'Mario, qué fortuna que seas tú.'),
        scene(foto(3), 'Me gusta tu sonrisa', 'y la forma en que me miras.'),
        scene(foto(14), 'Desde aquella noche', 'algo en mí despertó y no se ha ido.'),
        scene(foto(19), 'Contigo me siento en casa,', 'aunque estemos en cualquier lugar.'),
        scene(foto(10), 'Me encanta reír a tu lado', 'y descubrirte un poco más cada día.'),
        scene(foto(27), 'Me gusta quién soy', 'cuando estoy contigo.'),
        scene(foto(28), 'Tú sí sabes quererme,', 'y yo quiero quererte toda la vida.'),
        scene(foto(32), 'Si me preguntan por qué te elegí,', 'la respuesta es sencilla: porque eres tú.'),
        scene(foto(31), 'Me sigo enamorando de ti', 'en los detalles más pequeños.'),
        scene(foto(22), 'Eres mi persona favorita, Mario.')
      ]),
    film(2, 'Contigo aprendí', portada(20), tracks.aprendi,
      'Todo lo que Lety ha aprendido desde que la vida volvió a poner a Mario en su camino.', [
        scene(foto(21), 'Mario, contigo aprendí', 'que el amor también es paciencia.'),
        scene(vid(2), 'Aprendí que amar es tomarte de la mano', 'y caminar juntos.'),
        scene(foto(25), 'Aprendí que juntos', 'llegamos más lejos.'),
        scene(foto(9), 'Aprendí que algunos caminos se separan', 'para volver a encontrarse.'),
        scene(foto(7), 'Aprendí a celebrar tus alegrías', 'como si fueran mías.'),
        scene(foto(8), 'Aprendí que el tiempo correcto', 'siempre llega.'),
        scene(foto(13), 'Aprendí que contigo', 'hasta lo sencillo se vuelve una aventura.'),
        scene(foto(12), 'Aprendí a reírme de todo', 'a tu lado.'),
        scene(foto(16), 'Aprendí que los días difíciles', 'también se superan juntos.'),
        scene(foto(20), 'Y aprendí que no hay nada más bonito', 'que elegirte cada día.')
      ]),
    film(3, 'Gracias por quedarte', portada(29), tracks.especial,
      'Hay cosas que no siempre se dicen. Lety le da las gracias a Mario, una por una.', [
        scene(foto(15), 'Mario, gracias por llegar a mi vida…', 'y gracias por quedarte.'),
        scene(amb('carta'), 'Gracias por aquella llamada', 'y por aquella invitación.'),
        scene(foto(2), 'Gracias por cada recuerdo', 'y cada aventura a tu lado.'),
        scene(foto(4), 'Gracias por hacerme reír,', 'hasta en medio de los sustos.'),
        scene(foto(6), 'Gracias por abrazarme fuerte', 'y por cuidarme.'),
        scene(foto(11), 'Gracias por acompañarme en mis sueños', 'y por dejarme acompañarte en los tuyos.'),
        scene(vid(1), 'Gracias por cada momento,', 'por pequeño que sea.'),
        scene(foto(1), 'Gracias por cada celebración', 'a tu lado.'),
        scene(foto(17), 'Gracias por elegirme', 'también en los días difíciles.'),
        scene(foto(24), 'Por todo eso y por mucho más:', 'gracias, mi amor.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Los capítulos que nos esperan', anio: 2022,
    clasificacion: 'TP', imagen: portada(30), musica: tracks.esperaba.src, cancion: tracks.esperaba.titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 24 de abril de 2022: lo que Mario significa para Lety, los sueños que quiere cumplir con él y una promesa en cada vida.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '24 de abril de 2022'], ['Duración', 'Toda la vida']],
    episodios: [
      { titulo: 'Lo que eres para mí', duracion: 40, descripcion: 'Mi compañero, mi segunda oportunidad y mi historia favorita.', musica: tracks.quererme.src,
        escenas: [
          scene(foto(29), 'Eres mi compañero', 'y mi historia favorita.'),
          scene(foto(30), 'Eres la segunda oportunidad', 'que la vida me regaló.'),
          scene(foto(32), 'Eres lo más bonito', 'que me ha pasado.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que sueño contigo', duracion: 50, descripcion: 'Las metas y los sueños que Lety quiere cumplir al lado de Mario.', musica: tracks.aprendi.src,
        escenas: [
          scene(foto(20), 'Quiero seguir recorriendo la vida contigo,', 'paso a paso.'),
          scene(foto(27), 'Quiero seguir sumando historias,', 'recuerdos y aventuras.'),
          scene(foto(23), 'Quiero acompañarte en cada sueño', 'y cumplirlos juntos.'),
          scene(foto(25), 'Y construir juntos', 'toda una vida de recuerdos.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'En cada una de mis vidas', duracion: 40, descripcion: 'Una promesa de Lety.', musica: tracks.especial.src,
        escenas: [
          scene(foto(31), 'Si tuviera mil vidas,', 'te buscaría en cada una.'),
          scene(foto(22), 'Y en todas', 'volvería a elegirte.'),
          scene(foto(24), 'Te amo, Mario. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Lety', img: amb('carta'), texto: historiaTexto },
    { titulo: 'Desde el 24 de abril de 2022', img: foto(18), texto: 'El día en que el destino nos dio una segunda oportunidad y comenzó nuestra historia favorita.' },
    { titulo: 'Lo que sueño contigo', img: foto(23), texto: 'Seguir sumando historias, acompañarnos en cada sueño y construir juntos toda una vida de recuerdos.' },
    { titulo: 'Qué fortuna', img: foto(26), texto: 'Entre tantas personas, tantos lugares y tantos caminos, qué fortuna haber coincidido contigo.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Mario', imagen: portada(24),
    sinopsis: 'La última escena guarda una carta de Lety: lo que recuerda, lo que agradece y todo lo que quiere seguir viviendo contigo.',
    preguntas: [
      '¿Qué pensaste cuando aceptaste ir a la Feria del Caballo?',
      '¿Te acuerdas de mí en la universidad?',
      '¿Cuál es tu recuerdo favorito conmigo?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Cuál quieres que sea nuestro próximo capítulo?'
    ],
    carta: () => `${cartaTexto}\n\nCon todo mi amor, Lety`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', [tracks.esperaba, tracks.quererme, tracks.aprendi, tracks.especial].map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Juntos desde el 24 de abril de 2022'],
    ['Agradecimientos especiales', 'Al destino, por volver a juntarnos'],
    ['Próximo estreno', 'Todos los capítulos que nos esperan'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(29), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Mario… esto no es el final de la película.', anuncio: 'Continuará',
    subtitulo: 'Apenas es el comienzo de todos los capítulos que todavía nos esperan.',
    sorpresa: 'Y el amor… apenas comienza. — Lety ♡'
  };
})();

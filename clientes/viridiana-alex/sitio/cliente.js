/* Contenido exclusivo de Viridiana para Alex; la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Viridiana';
  const B = 'Alex';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const video = n => ({ img: `assets/video/momento-${String(n).padStart(2, '0')}.mp4`, poster: `assets/fotos/momento-${String(n).padStart(2, '0')}.webp` });
  const tracks = {
    eres: { titulo: 'Eres — Café Tacvba', src: 'assets/audio/eres-climax.mp3' },
    birdie: { titulo: 'Birdie — León Larregui', src: 'assets/audio/birdie-climax.mp3' },
    kilometros: { titulo: 'Kilómetros — Sin Bandera', src: 'assets/audio/kilometros-climax.mp3' },
    sone: { titulo: 'Soñé — Zoé', src: 'assets/audio/sone-climax.mp3' },
    borracho: { titulo: 'Ya borracho — Herencia de Grandes', src: 'assets/audio/ya-borracho-climax.mp3' }
  };

  /* Su historia, con las palabras de Viridiana (solo se repartió en subtítulos). */
  const parrafos = [
    ['Nuestra historia: qué bonito que existas, Alexito ❤️'],
    ['Todo comenzó de una manera que ninguno de los dos imaginaba:', 'a través de una pantalla, por Teams.',
      'Trabajábamos en el mismo lugar, pero en diferentes estados.', 'Tú comenzaste a buscarme por mensajes y,',
      'aunque al principio no contestaba demasiado,', 'poco a poco nuestras conversaciones fueron encontrando su propio camino.'],
    ['En septiembre del año pasado llegaron unos girasoles que me regalaste.', 'En ese momento éramos solamente amigos,',
      'sin saber que aquellos pequeños detalles serían parte de una historia mucho más grande.'],
    ['Llegó enero y algo cambió.', 'Comenzamos a hablar todos los días, a todas horas.',
      'Las conversaciones se hicieron más largas, las sonrisas más frecuentes', 'y las ganas de conocernos dejaron de ser solamente una idea.'],
    ['Un 19 de enero prometiste que vendrías a verme.', 'Y cumpliste.'],
    ['El primero de mayo cumpliste.', 'Llegaste a mi vida de una manera que ninguna pantalla habría podido conseguir:',
      'por fin pudimos conocernos, mirarnos frente a frente', 'y descubrir que aquello que había nacido entre mensajes',
      'también existía cuando estábamos juntos.'],
    ['Y el 2 de mayo me hiciste una pregunta que cambiaría nuestra historia:', 'me pediste que fuera tu novia. ❤️'],
    ['Desde entonces hemos aprendido que el amor también puede vivir a kilómetros de distancia.',
      'Que se puede acompañar a alguien desde una videollamada,', 'compartir películas sin estar en el mismo sofá,',
      'pasar horas hablando', 'y encontrar maneras de hacerse presente', 'incluso cuando los brazos no pueden alcanzar al otro.'],
    ['El 24 de julio volviste a recorrer la distancia para celebrar mi cumpleaños,',
      'y cada uno de esos encuentros se convirtió en un recuerdo que guardo con muchísimo cariño.'],
    ['Hoy llevamos seis meses siendo novios.',
      'Seis meses de mensajes, llamadas, películas, promesas cumplidas, visitas, momentos y muchísimo amor.'],
    ['Y hoy no quiero celebrar solamente un cumpleaños.', 'Quiero celebrar algo todavía más grande: tu vida.'],
    ['Celebrar el día en que llegaste a este mundo,', 'porque sin saberlo, algún día te convertirías en una persona tan importante para mí.'],
    ['Quiero agradecerle a la vida por haberte puesto en mi camino,', 'por aquella primera conversación en Teams,',
      'por los girasoles de septiembre,', 'por aquel enero en el que comenzamos a acercarnos',
      'y por cada kilómetro que decidiste recorrer para estar conmigo.'],
    ['No sé cuántos cumpleaños nos esperan,', 'cuántas películas veremos por videollamada,', 'cuántas visitas nos faltan',
      'ni cuántas historias nos quedan por vivir.', 'Pero sí sé que deseo estar presente en muchas de ellas.'],
    ['Ojalá la vida te regale muchísimos años, sueños cumplidos, salud, alegrías y motivos para sonreír.',
      'Y ojalá me permita acompañarte en muchos de esos años.'],
    ['Hoy celebro tu cumpleaños, pero también celebro la suerte de coincidir contigo.',
      'Porque de todas las personas que pudieron cruzarse en mi camino,', 'qué bonito que hayas sido tú.'],
    ['Feliz cumpleaños, mi amor.', 'Gracias por existir y por formar parte de mi historia.'],
    ['Te quiero muchísimo ❤️']
  ];
  const historiaTexto = parrafos.map(p => p.join(' ')).join('\n\n');
  const P = parrafos;
  /* Subtítulos de la primera película: 26 escenas de 1 a 3 líneas, en el orden del texto. */
  const bloques = [
    P[0], P[1].slice(0, 2), P[1].slice(2, 4), P[1].slice(4), P[2].slice(0, 1), P[2].slice(1),
    P[3].slice(0, 2), P[3].slice(2), P[4], P[5].slice(0, 2), P[5].slice(2), P[6],
    P[7].slice(0, 2), P[7].slice(2, 4), P[7].slice(4), P[8], P[9], P[10], P[11],
    P[12].slice(0, 3), P[12].slice(3), P[13].slice(0, 3), P[13].slice(3), P[14], P[15], [...P[16], ...P[17]]
  ];
  /* Medios 1 a 10 del cliente, en orden, repartidos a lo largo de la historia. */
  const medios0 = [video(1), video(2), { img: foto(3) }, video(4), video(5), video(6), { img: foto(7) }, { img: foto(8) }, { img: foto(9) }, video(10)];
  const reparto = [3, 3, 3, 2, 3, 2, 3, 2, 3, 2];
  const escenasHistoria = [];
  reparto.forEach((n, i) => {
    for (let k = 0; k < n; k++) {
      const m = medios0[i];
      escenasHistoria.push({ img: m.img, poster: m.poster || m.img, texto: bloques[escenasHistoria.length] });
    }
  });

  const carta = [
    'Alex:',
    'Hoy quise regalarte algo diferente: nuestra historia contada como una serie, porque para mí es la más bonita que he visto.',
    'Desde aquel primer mensaje por Teams hasta hoy, cada capítulo contigo ha valido la pena: los girasoles de septiembre, las pláticas de enero, el 1 de mayo, el 2 de mayo y cada kilómetro que recorriste para estar conmigo.',
    'Gracias por buscarme, por cumplir tus promesas y por hacerme sentir cerca aunque estemos lejos.',
    'Hoy celebro tu vida y la suerte de coincidir contigo. Deseo que este nuevo año te traiga salud, alegrías y sueños cumplidos, y que me dejes acompañarte en muchos más.',
    'Feliz cumpleaños, mi amor. Qué bonito que existas. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: ['Alexito', B], apodo: 'Alexito',
    fechaInicio: '2026-05-02', anioInicio: 2026, anios: 0, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Eres', artista: 'Café Tacvba', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Celebrar muchos cumpleaños juntos', 'Seguir acortando los kilómetros', 'Vivir muchas historias más'],
    mensajeFinal: 'Feliz cumpleaños, mi amor. Qué bonito que existas. ❤️ — Viridiana'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero-16.webp', perfilB: foto(17), perfilPareja: foto(22),
    t0: foto(9), t1: foto(15), t2: foto(18), t3: foto(27), t4: foto(33), t5: foto(38),
    t6: foto(44), t7: foto(48), final: portada(48),
    puzzle: foto(16), puzzle2: foto(29), postCreditos: foto(49)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = [tracks.eres.src, tracks.birdie.src, tracks.kilometros.src, tracks.sone.src, tracks.borracho.src];
  c.media.canciones = [tracks.eres.titulo, tracks.birdie.titulo, tracks.kilometros.titulo, tracks.sone.titulo, tracks.borracho.titulo];
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-alex.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: '7dca621117f50ba1e876014321d6c60c02de8f35fb8754677e323491f8ea13ca', pistaPassword: 'Viridiana te la envió por WhatsApp. Puedes escribirla con o sin guiones.', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '525567373460', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/viridiana-alex/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, girasoles y kilómetros',
    heroTag: 'EXCLUSIVO PARA ALEX', heroTop: 'Una historia de Viridiana para Alex',
    sinopsis: 'Empezó con un mensaje por Teams y unos girasoles en septiembre. Hoy, Viridiana celebra la vida de Alex y sus seis meses de novios: cuatro películas, una serie y un juego sobre su historia.',
    generos: ['Romance', 'Basada en hechos reales', 'Feliz cumpleaños'], filaRecomendada: 'Qué bonito que existas'
  });

  const scene = (img, ...texto) => ({ img, poster: img, texto });
  const vscene = (n, ...texto) => ({ ...video(n), texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion: null, recompensa: '' }]
  });
  const peliculas = [
    film(0, 'Qué bonito que existas', portada(9), tracks.eres,
      'Una pantalla, unos girasoles y muchos kilómetros. La historia de Viridiana y Alex, contada por ella, para celebrar su cumpleaños.',
      escenasHistoria, 240),
    film(1, 'Girasoles de septiembre', portada(17), tracks.birdie,
      'Antes de conocerse en persona, ya se conocían con palabras. Los mensajes, los girasoles y la promesa de enero.', [
        vscene(11, 'Alex, antes de conocerte en persona,', 'ya me conocías con palabras.'),
        vscene(12, 'Tú me buscaste primero,', 'y gracias a que no te rendiste, hoy existe esta historia.'),
        scene(foto(13), 'Gracias por tu paciencia', 'en esos primeros mensajes por Teams.'),
        scene(foto(14), 'Aquellos girasoles de septiembre', 'fueron el primero de muchos detalles.'),
        scene(foto(15), 'Los girasoles siempre buscan la luz…', 'y yo, sin darme cuenta, empecé a buscarte a ti.'),
        scene(foto(16), 'Luego llegó enero', 'y nuestras pláticas dejaron de tener horario.'),
        scene(foto(17), 'Me acostumbré a hablar contigo todos los días', 'y a no querer despedirme por las noches.'),
        scene(foto(18), 'Me prometiste que vendrías a verme,', 'y me enseñaste que tus promesas se cumplen.'),
        scene(foto(19), 'Gracias por ser un hombre de palabra,', 'por tu ternura y por tu forma de quererme.'),
        scene(foto(20), 'De todos los mensajes que he recibido,', 'los tuyos siguen siendo mis favoritos.')
      ]),
    film(2, 'Kilómetros', portada(27), tracks.kilometros,
      'El amor también puede vivir a kilómetros de distancia: videollamadas, películas desde lejos y cada viaje para volver a verse.', [
        scene(foto(21), 'Entre tú y yo hay muchos kilómetros,', 'pero contigo nunca se sienten como distancia.'),
        scene(foto(22), 'Te siento cerca en cada videollamada', 'y en cada película que vemos juntos desde lejos.'),
        scene(foto(23), 'Contigo aprendí que el amor', 'no se mide en kilómetros, sino en ganas.'),
        scene(foto(24), 'Y tú siempre has tenido ganas de estar.'),
        scene(foto(25), 'Gracias por cada viaje,', 'por cada kilómetro que recorriste para llegar a mí.'),
        scene(foto(26), 'El 1 de mayo por fin te tuve frente a mí', 'y pude tomar tu mano.'),
        scene(foto(27), 'Y el 2 de mayo me pediste que fuera tu novia.', 'Te dije que sí, y te lo volvería a decir mil veces.'),
        scene(foto(28), 'El 24 de julio volviste a recorrer la distancia', 'para celebrar mi cumpleaños conmigo.'),
        scene(foto(29), 'Cada despedida duele un poquito,', 'pero cada reencuentro lo vale todo.'),
        scene(foto(30), 'Ojalá algún día los kilómetros sean pocos', 'y los abrazos, muchísimos.')
      ]),
    film(3, 'Feliz cumpleaños, Alex', portada(33), tracks.sone,
      'Hoy no se celebra solo un cumpleaños: se celebra la vida de Alex. Gracias, buenos deseos y todo lo que Viridiana quiere para él.', [
        scene(foto(31), 'Hoy es tu día, Alex,', 'y el mundo es un poquito más bonito porque existes.'),
        scene(foto(32), 'Gracias a la vida', 'por el día en que llegaste a este mundo.'),
        scene(foto(33), 'Gracias por tu sonrisa,', 'que me alegra incluso a través de una pantalla.'),
        scene(foto(34), 'Gracias por tu cariño', 'y por hacerme sentir acompañada a la distancia.'),
        scene(foto(35), 'Te deseo un año lleno de salud,', 'de alegrías y de sueños cumplidos.'),
        scene(foto(36), 'Que todo lo que te propongas te salga bien,', 'porque te lo mereces.'),
        scene(foto(37), 'Que nunca te falten motivos para sonreír', 'ni personas que te quieran tanto como yo.'),
        scene(foto(38), 'Y si me lo permites,', 'quiero estar ahí para celebrarlo contigo.'),
        scene(foto(39), 'Este cumpleaños, el próximo', 'y muchos más.'),
        scene(foto(40), 'Feliz cumpleaños, mi amor.', 'Qué bonito que existas.')
      ])
  ];
  const serie = {
    num: 4, tipo: 'serie', titulo: 'Seis meses de novios', anio: 2026,
    clasificacion: 'TP', imagen: portada(47), musica: tracks.borracho.src, cancion: tracks.borracho.titulo,
    sinopsis: 'Tres episodios sobre lo que empezó el 2 de mayo de 2026: las promesas cumplidas, los primeros seis meses y todo lo que les falta por vivir.',
    creditos: [['Protagonistas', `${A} y ${B}`], ['Estreno', '2 de mayo de 2026'], ['Lo que sigue', 'Muchas historias más']],
    episodios: [
      { titulo: 'Promesas cumplidas', duracion: 40, descripcion: 'Prometió que vendría, y el 1 de mayo cumplió.', musica: tracks.borracho.src,
        escenas: [
          scene(foto(41), 'Me prometiste que vendrías,', 'y el primero de mayo cumpliste.'),
          scene(foto(42), 'Así eres tú:', 'lo que dices, lo haces.'),
          scene(foto(43), 'Y eso, Alex,', 'es de las cosas que más admiro de ti.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Seis meses', duracion: 40, descripcion: 'Seis meses de mensajes, llamadas, películas, visitas y muchísimo amor.', musica: tracks.eres.src,
        escenas: [
          scene(foto(44), 'El 2 de mayo empezamos a ser novios,', 'y hoy cumplimos seis meses.'),
          scene(foto(45), 'Seis meses de mensajes, llamadas y películas,', 'de visitas y de muchísimo amor.'),
          scene(foto(46), 'Y siento que apenas estamos empezando.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que nos falta', duracion: 40, descripcion: 'Las visitas, las películas y los cumpleaños que todavía les quedan por vivir.', musica: tracks.sone.src,
        escenas: [
          scene(foto(47), 'Nos faltan muchas visitas, muchas películas', 'y muchos cumpleaños por celebrar.'),
          scene(foto(48), 'Quiero que sigamos cumpliéndonos promesas', 'y acortando kilómetros.'),
          scene(foto(49), 'Feliz cumpleaños, Alexito.', 'Te quiero muchísimo. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, serie);
  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Viridiana', img: foto(9), texto: historiaTexto },
    { titulo: 'Girasoles de septiembre', img: foto(15), texto: 'Éramos solo amigos, sin saber que aquellos pequeños detalles serían parte de una historia mucho más grande.' },
    { titulo: 'A kilómetros', img: foto(26), texto: 'El amor también puede vivir a kilómetros de distancia, y el nuestro lo demuestra todos los días.' },
    { titulo: 'Qué bonito que existas', img: foto(48), texto: 'De todas las personas que pudieron cruzarse en mi camino, qué bonito que hayas sido tú.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Alex', imagen: portada(48),
    sinopsis: 'La última escena guarda una carta de Viridiana para tu cumpleaños: lo que agradece, lo que siente y todo lo que quiere vivir contigo.',
    preguntas: [
      '¿Qué pensaste la primera vez que me escribiste por Teams?',
      '¿Por qué elegiste girasoles?',
      '¿Qué sentiste el 1 de mayo cuando por fin nos vimos?',
      '¿Cuál es tu recuerdo favorito de estos seis meses?',
      '¿Qué deseo pediste para este cumpleaños?'
    ],
    carta: () => `${cartaTexto}\n\nViridiana`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonistas', `${A} y ${B}`],
    ['Banda sonora', Object.values(tracks).map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Novios desde el 2 de mayo de 2026'],
    ['Agradecimientos especiales', 'A Teams, a los girasoles de septiembre y a cada kilómetro recorrido'],
    ['Próximo estreno', 'Tu próximo cumpleaños, juntos'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(49), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Alex… esto apenas empieza.', anuncio: 'Continuará',
    subtitulo: 'Seis meses de novios, y todas las historias que nos faltan.',
    sorpresa: 'Feliz cumpleaños, mi amor. Te quiero muchísimo. — Viridiana ♡'
  };
})();

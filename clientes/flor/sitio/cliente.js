/* Contenido exclusivo para Flor (paquete Nuestra Temporada, $149); la plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  /* No se dio el nombre de quien regala: se usa «Tu amor» (en WhatsApp ella lo tiene como «Mi Amor»). */
  const A = 'Tu amor';
  const B = 'Flor';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const amb = n => `assets/ambiente/${n}.webp`;
  /* Videos del cliente: en bucle y sin sonido, con su miniatura. */
  const vid = n => ({ img: `assets/video/momento-${n}.mp4`, poster: `assets/fotos/momento-${n}.webp` });
  /* Videos de ambiente (libres, reutilizados de otras carpetas), también sin sonido. */
  const ambVid = n => ({ img: `assets/ambiente/${n}-video.mp4`, poster: `assets/ambiente/${n}-video.webp` });
  const tracks = {
    anhelo: { titulo: 'Mi Mayor Anhelo — Banda MS', src: 'assets/audio/mi-mayor-anhelo-climax.mp3' },
    mundo: { titulo: 'El Mundo a Tus Pies — Grupo Firme', src: 'assets/audio/el-mundo-a-tus-pies-climax.mp3' },
    perfecta: { titulo: 'Perfecta — Banda Los Recoditos', src: 'assets/audio/perfecta-climax.mp3' },
    deja: { titulo: 'Deja — Banda El Recodo', src: 'assets/audio/deja-climax.mp3' },
    /* Segundo tramo de cada canción (desde el primer coro), para que las películas nuevas no repitan el mismo audio. */
    anhelo2: { titulo: 'Mi Mayor Anhelo — Banda MS', src: 'assets/audio/mi-mayor-anhelo-coro.mp3' },
    mundo2: { titulo: 'El Mundo a Tus Pies — Grupo Firme', src: 'assets/audio/el-mundo-a-tus-pies-coro.mp3' },
    perfecta2: { titulo: 'Perfecta — Banda Los Recoditos', src: 'assets/audio/perfecta-coro.mp3' },
    deja2: { titulo: 'Deja — Banda El Recodo', src: 'assets/audio/deja-coro.mp3' }
  };

  const carta = [
    'Flor:',
    'Quise regalarte nuestra historia como si fuera una película, porque para mí no hay otra más bonita.',
    'Gracias por cada día a mi lado, por tu paciencia, por tu cariño y por la familia tan hermosa que tenemos.',
    'Gracias por ser la mamá que eres y por llenar nuestra casa de amor.',
    'Hoy, 2 de noviembre, celebro contigo todo lo que hemos vivido y todo lo que nos falta por vivir.',
    'Quiero seguir caminando de tu mano, cumplir juntos cada sueño y verte sonreír todos los días.',
    'Eres mi mayor anhelo, hoy y siempre. Te amo, mi Flor. ❤️'
  ];
  const cartaTexto = carta.join('\n\n');

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi Flor', 'mi amor'], apodo: 'mi Flor',
    fechaInicio: '2026-11-02', anioInicio: '', aniosManual: 1, anios: 1, fechaCodigo: '', ciudad: '', primeraCita: '',
    cancion: 'Mi Mayor Anhelo', artista: 'Banda MS', viajes: [], dificiles: [],
    anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir caminando de tu mano', 'Ver crecer a nuestra familia', 'Cumplir juntos cada sueño'],
    mensajeFinal: 'Eres mi mayor anhelo. Te amo, mi Flor ❤️'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(19), perfilPareja: foto(23),
    t0: foto(21), t1: foto(9), t2: foto(26), t3: foto(23), t4: foto(27), t5: foto(28),
    t6: foto(16), t7: foto(25), final: portada(27),
    puzzle: foto(24), puzzle2: foto(23), postCreditos: foto(28)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.musica = '';
  c.media.videoFinal = 'assets/video/para-flor.mp4';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: 'd852329eb1f82209e4c83c7a843552d9ee080716765cc96560189a2e982bef5a', pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '523531066530', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/flor/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, familia y gratitud',
    heroTag: 'EXCLUSIVO PARA FLOR', heroTop: 'Una historia de amor para Flor',
    sinopsis: 'Un 2 de noviembre para celebrar a la mujer que llena de amor una familia entera. Lo que siente por ella, lo que le agradece y todo lo que sueña a su lado. Ocho películas, dos series y tres juegos.',
    generos: ['Romance', 'Basada en hechos reales', 'Familia'], filaRecomendada: 'Porque eres mi mayor anhelo'
  });

  const scene = (img, ...texto) => (typeof img === 'string' ? { img, poster: img, texto } : { ...img, texto });
  const film = (num, titulo, imagen, track, sinopsis, escenas, interaccion = null, duracion = 76) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis,
    creditos: [['Una historia para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion, descripcion: sinopsis, escenas, interaccion, recompensa: '' }]
  });

  /* Los tres juegos del paquete: trivia, código secreto y ordena la historia. */
  const trivia = {
    tipo: 'quiz', titulo: 'Lo que más amo de ti', pregunta: 'Flor, ¿qué es lo que más amo de ti?',
    opciones: ['Tu sonrisa', 'Cómo cuidas a nuestra familia', 'Todo, absolutamente todo'], correcta: 2,
    ok: 'Todo de ti, mi Flor. Cada detalle.'
  };
  const codigo = {
    tipo: 'codigo', titulo: 'Nuestro día', modo: 'fecha', pregunta: '¿Qué día celebramos nuestro aniversario? Escribe día y mes (DDMM).',
    placeholder: 'DDMM', respuestas: ['0211'], pista: 'Es en noviembre… y es el día 2.', ok: 'El 2 de noviembre: nuestro día.'
  };
  const ordenar = {
    tipo: 'ordenar', titulo: 'Lo que te escribí', eventos: ['Solo', 'de tu mano', 'quiero caminar…', 'te amo,', 'mi Flor ❤️'],
    ok: 'Solo de tu mano quiero caminar… te amo, mi Flor.'
  };

  const peliculas = [
    film(0, 'Mi mayor anhelo', portada(21), tracks.anhelo,
      'Lo que él siente por Flor, contado escena por escena: su sonrisa, su mirada y el lugar donde siempre quiere estar.', [
        scene(foto(21), 'Flor, esta película es para ti,', 'porque mereces una historia tan bonita como tú.'),
        scene(foto(18), 'Desde que llegaste a mi vida,', 'todo tiene más sentido.'),
        scene(foto(16), 'Me encanta tu sonrisa', 'y la forma en que me miras.'),
        scene(foto(17), 'Contigo cualquier camino', 'se vuelve un viaje bonito.'),
        scene(foto(19), 'Eres mi paz', 'en medio de cualquier día.'),
        scene(foto(28), 'Cuando me miras así,', 'sé que estoy en el lugar correcto.'),
        scene(foto(22), 'No necesito ir muy lejos para ser feliz:', 'me basta con estar contigo.'),
        scene(foto(2), 'Solo de tu mano', 'quiero caminar.'),
        scene(foto(29), 'Mi lugar favorito', 'siempre será a tu lado.'),
        scene(foto(1), 'Eres mi mayor anhelo, Flor,', 'hoy y siempre.')
      ]),
    film(1, 'Nuestra familia', portada(9), tracks.deja,
      'Un día especial en la iglesia y todo lo que significa formar una familia con Flor.', [
        scene(foto(9), 'Flor, contigo aprendí', 'lo que significa la palabra familia.'),
        scene(foto(4), 'Verte así, tan feliz,', 'es uno de mis recuerdos favoritos.'),
        scene(vid(1), 'Ese día confirmé', 'que la vida nos regaló lo más bonito.'),
        scene(foto(5), 'Tu mano, tu sonrisa', 'y nuestro pequeño tesoro.'),
        scene(foto(6), 'Gracias por ser una mamá', 'tan amorosa y tan valiente.'),
        scene(foto(8), 'Cada vela, cada oración,', 'llevaba nuestro amor dentro.'),
        scene(vid(3), 'Lo que construimos juntos', 'es lo que más quiero en este mundo.'),
        scene(foto(3), 'Cuidar de nuestra familia', 'es mi orgullo más grande.'),
        scene(foto(10), 'Tú, yo', 'y los que más amamos.'),
        scene(foto(11), 'Nuestra familia', 'es mi mejor historia, Flor.')
      ]),
    film(2, 'Perfecta', portada(23), tracks.perfecta,
      'Hay cosas que no siempre se dicen. Hoy Flor escucha, una por una, todas las gracias que él le debe.', [
        scene(foto(23), 'Flor, gracias por llegar a mi vida', 'y por quedarte en ella.'),
        scene(foto(12), 'Gracias por hacer de nuestra familia', 'un lugar lleno de amor.'),
        scene(foto(13), 'Gracias por tu paciencia', 'y por tu cariño de todos los días.'),
        scene(foto(14), 'Gracias por cuidar de los que más amamos', 'con tanto corazón.'),
        scene(foto(20), 'Gracias por todo lo que haces,', 'aunque a veces nadie lo vea.'),
        scene(foto(26), 'Gracias por tu sonrisa,', 'que ilumina cualquier día.'),
        scene(foto(30), 'Gracias por los momentos sencillos,', 'que para mí son los más bonitos.'),
        scene(foto(31), 'Gracias por cada abrazo', 'y cada risa en casa.'),
        scene(foto(32), 'Gracias por elegirme', 'también en los días difíciles.'),
        scene(foto(33), 'Para mí eres perfecta.', 'Gracias, mi amor.')
      ], trivia),
    film(3, 'El mundo a tus pies', portada(27), tracks.mundo,
      'Las metas y los sueños que quiere cumplir al lado de Flor y de su familia.', [
        scene(foto(27), 'Flor, si pudiera,', 'te pondría el mundo a tus pies.'),
        scene(foto(24), 'Sueño con verte siempre así,', 'feliz y rodeada de amor.'),
        scene(foto(25), 'Quiero ver crecer a nuestra familia', 'y estar en cada paso.'),
        scene(foto(15), 'Quiero que nuestros días', 'estén llenos de momentos sencillos y bonitos.'),
        scene(vid(2), 'Quiero que sigamos celebrando', 'cada bendición juntos.'),
        scene(foto(7), 'Quiero ser tu apoyo', 'en cada meta que te propongas.'),
        scene(foto(26), 'Quiero construir contigo', 'un hogar cada vez más bonito.'),
        scene(foto(21), 'Quiero seguir enamorándote', 'como el primer día.'),
        scene(foto(28), 'Y quiero envejecer a tu lado,', 'mirándote así.'),
        scene(foto(23), 'Contigo lo tengo todo, Flor.')
      ]),
    film(4, 'Solo de tu mano', portada(37), tracks.anhelo2,
      'Los caminos que recorren juntos, la mano que no quiere soltar y el día que los une.', [
        scene(foto(37), 'Hay una mano que no quiero soltar nunca:', 'la tuya.'),
        scene(foto(41), 'Me gusta ir a tu lado,', 'aunque no sepamos a dónde vamos.'),
        scene(ambVid('bosque'), 'Cualquier carretera es bonita', 'si la recorro contigo.'),
        scene(foto(35), 'Contigo los trayectos largos', 'se sienten cortos.'),
        scene(foto(34), 'Tú de copiloto, nuestra familia atrás:', 'no necesito nada más.'),
        scene(amb('costa'), 'Si el camino se pone difícil,', 'lo caminamos juntos.'),
        scene(foto(17), 'Contigo hasta el silencio', 'se siente acompañado.'),
        scene(foto(22), 'Tu compañía es mi lugar seguro.'),
        scene(foto(16), 'A donde vayas,', 'quiero ir contigo.'),
        scene(foto(2), 'Solo de tu mano quiero caminar,', 'hoy y todos los días.')
      ], codigo),
    film(5, 'Los pequeños momentos', portada(36), tracks.deja2,
      'Un raspado compartido, una comida juntos, una tarde cualquiera: lo sencillo también es amor.', [
        scene(foto(36), 'Lo más bonito no siempre es lo más grande:', 'a veces es algo para compartir contigo.'),
        scene(ambVid('cafe'), 'Me gustan nuestras pláticas', 'sin prisa.'),
        scene(foto(1), 'Cada comida juntos', 'sabe mejor.'),
        scene(foto(20), 'Admiro cómo haces todo', 'con tanto cariño.'),
        scene(foto(15), 'Los días sencillos con nuestra familia', 'son mis favoritos.'),
        scene(foto(30), 'Las risas en casa', 'valen más que cualquier cosa.'),
        scene(foto(39), 'Una foto juntos al final del día', 'es todo lo que necesito.'),
        scene(foto(31), 'No necesito fechas especiales:', 'contigo cualquier día es especial.'),
        scene(amb('luz'), 'Tú le pones luz', 'a lo cotidiano.'),
        scene(foto(33), 'Gracias por enseñarme', 'que la felicidad está en los detalles.')
      ]),
    film(6, 'Mi Flor', portada(38), tracks.perfecta2,
      'Un homenaje a ella: su belleza, su fuerza y todo lo que la hace única.', [
        scene(foto(38), 'Flores para mi Flor,', 'aunque ninguna es tan bonita como tú.'),
        scene(foto(40), 'Un beso tuyo', 'me cambia el día.'),
        scene(amb('rosas'), 'Tu nombre te queda perfecto:', 'llenas de color todo lo que tocas.'),
        scene(foto(39), 'Me encanta verte sonreír así,', 'con esa luz que solo tú tienes.'),
        scene(foto(19), 'Eres hermosa por fuera', 'y todavía más por dentro.'),
        scene(foto(41), 'Me gusta cómo te ves', 'cuando eres feliz.'),
        scene(amb('flores'), 'Eres fuerte, dulce y valiente', 'al mismo tiempo.'),
        scene(foto(18), 'Admiro la mujer que eres', 'y la mamá en la que te convertiste.'),
        scene(foto(21), 'A tu lado aprendí', 'lo que es querer bonito.'),
        scene(foto(26), 'Nunca dejes de florecer,', 'mi Flor.')
      ], ordenar),
    film(7, 'Lo que aprendí contigo', portada(34), tracks.mundo2,
      'Todo lo que él ha aprendido desde que Flor está en su vida.', [
        scene(foto(34), 'Flor, contigo aprendí', 'que el amor se demuestra todos los días.'),
        scene(foto(35), 'Aprendí que un abrazo tuyo', 'arregla cualquier día.'),
        scene(ambVid('atardecer'), 'Aprendí que los atardeceres', 'se disfrutan más acompañado.'),
        scene(foto(23), 'Aprendí a ser mejor', 'por ti y por nuestra familia.'),
        scene(foto(25), 'Aprendí que la familia', 'es el regalo más grande.'),
        scene(foto(29), 'Aprendí que en tus brazos', 'encuentro descanso.'),
        scene(ambVid('olas'), 'Aprendí que, como el mar,', 'el amor siempre vuelve.'),
        scene(foto(32), 'Aprendí a reírme de todo', 'contigo.'),
        scene(amb('horizonte'), 'Y aprendí que el futuro', 'no me da miedo si es contigo.'),
        scene(foto(27), 'Todo lo bonito que sé del amor', 'lo aprendí contigo.')
      ])
  ];
  const serie = {
    num: 8, tipo: 'serie', titulo: 'Lo que eres para mí', anio: 2026,
    clasificacion: 'TP', imagen: portada(24), musica: tracks.anhelo.src, cancion: tracks.anhelo.titulo,
    sinopsis: 'Tres episodios para celebrar este 2 de noviembre: lo que Flor significa para él, lo que sueña a su lado y una promesa para siempre.',
    creditos: [['Protagonista', B], ['Aniversario', '2 de noviembre'], ['Duración', 'Toda la vida']],
    episodios: [
      { titulo: 'Mi compañera de vida', duracion: 40, descripcion: 'Mi compañera, mi casa y mi persona favorita.', musica: tracks.anhelo.src,
        escenas: [
          scene(foto(19), 'Eres mi compañera de vida', 'y mi persona favorita.'),
          scene(foto(30), 'Eres mi casa,', 'aunque estemos en cualquier lugar.'),
          scene(foto(16), 'Eres lo más bonito', 'que me ha pasado.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que sueño contigo', duracion: 50, descripcion: 'Las metas que quiere cumplir al lado de Flor.', musica: tracks.mundo.src,
        escenas: [
          scene(foto(24), 'Quiero seguir sumando días felices', 'contigo y con nuestra familia.'),
          scene(foto(27), 'Quiero ver muchos atardeceres', 'a tu lado.'),
          scene(foto(12), 'Quiero que nunca te falte', 'el amor que tú das.'),
          scene(foto(33), 'Y quiero que cada 2 de noviembre', 'celebremos un año más juntos.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Para siempre', duracion: 40, descripcion: 'Una promesa para Flor.', musica: tracks.perfecta.src,
        escenas: [
          scene(foto(28), 'Te prometo cuidarte', 'y quererte todos los días.'),
          scene(foto(21), 'Te prometo caminar siempre', 'de tu mano.'),
          scene(foto(23), 'Te amo, mi Flor. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  const serie2 = {
    num: 9, tipo: 'serie', titulo: 'Nuestro para siempre', anio: 2026,
    clasificacion: 'TP', imagen: portada(40), musica: tracks.deja.src, cancion: tracks.deja.titulo,
    sinopsis: 'Tres episodios sobre lo que viene: las promesas que él le hace a Flor, el futuro que imagina y un mensaje para los años que vienen.',
    creditos: [['Protagonista', B], ['Con amor de', A], ['Temporada', 'Para siempre']],
    episodios: [
      { titulo: 'Mis promesas', duracion: 40, descripcion: 'Lo que él le promete a Flor.', musica: tracks.deja.src,
        escenas: [
          scene(foto(37), 'Te prometo no soltarte la mano,', 'ni en los días buenos ni en los difíciles.'),
          scene(foto(40), 'Te prometo un beso', 'cada vez que lo necesites.'),
          scene(amb('manos'), 'Te prometo escucharte,', 'cuidarte y respetarte siempre.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Lo que viene', duracion: 50, descripcion: 'El futuro que imagina con Flor.', musica: tracks.anhelo2.src,
        escenas: [
          scene(amb('siluetas'), 'Me imagino muchos años más', 'caminando juntos.'),
          scene(foto(24), 'Me imagino a nuestra familia creciendo', 'y a nosotros a su lado.'),
          scene(amb('estrellas'), 'Me imagino noches tranquilas,', 'tú y yo, platicando de todo.'),
          scene(foto(41), 'Y me imagino que, con los años,', 'te seguiré mirando igual.')
        ], interaccion: null, recompensa: '' },
      { titulo: 'Carta al futuro', duracion: 40, descripcion: 'Un mensaje para todos los 2 de noviembre que vienen.', musica: tracks.perfecta2.src,
        escenas: [
          scene(foto(38), 'Flor del futuro:', 'espero que sigas sonriendo así.'),
          scene(amb('carta'), 'Si algún día lo dudas, vuelve a ver esto:', 'te elegí y te sigo eligiendo.'),
          scene(foto(34), 'Feliz 2 de noviembre,', 'hoy y todos los que vengan. ❤️')
        ], interaccion: null, recompensa: '' }
    ]
  };
  const todas = [...peliculas, serie, serie2];
  c.temporadas.splice(0, c.temporadas.length, ...todas);
  c.media.temporadas = todas.map(t => t.musica);
  c.media.canciones = todas.map(t => t.cancion);
  c.extras = [
    { titulo: 'Solo de tu mano', img: foto(37), texto: 'Solo de tu mano quiero caminar. Te amo, mi Flor.' },
    { titulo: 'Feliz 2 de noviembre', img: foto(27), texto: 'Hoy celebro contigo todo lo que hemos vivido y todo lo que nos falta por vivir.' },
    { titulo: 'Nuestra familia', img: foto(24), texto: 'Tú, yo y los que más amamos: mi mejor historia.' },
    { titulo: 'Lo que sueño contigo', img: foto(26), texto: 'Ver crecer a nuestra familia, cumplir juntos cada sueño y verte sonreír todos los días.' },
    { titulo: 'Flores para mi Flor', img: foto(38), texto: 'Ninguna flor es tan bonita como tú.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Flor', imagen: portada(27),
    sinopsis: 'Ocho películas, dos series y tres juegos después, la última escena guarda una carta para Flor: lo que siente, lo que agradece y todo lo que quiere seguir viviendo con ella.',
    preguntas: [
      '¿Cuál es tu recuerdo favorito conmigo?',
      '¿Qué fue lo que más te gustó de mí al principio?',
      '¿Qué es lo que más amas de nuestra familia?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Cómo te imaginas nuestro próximo 2 de noviembre?'
    ],
    carta: () => `${cartaTexto}\n\nCon todo mi amor, para siempre tuyo`
  });
  c.creditos = [
    ['Una historia para', B], ['Con todo el amor de', A], ['Protagonista', B],
    ['Banda sonora', [tracks.anhelo, tracks.mundo, tracks.perfecta, tracks.deja].map(t => t.titulo).join(' · ')],
    ['Basada en hechos reales', 'Aniversario: 2 de noviembre'],
    ['Agradecimientos especiales', 'A nuestra familia, lo más bonito que tenemos'],
    ['Próximo estreno', 'Todos los 2 de noviembre que nos esperan'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(28), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Flor… esto no es el final de la película.', anuncio: 'Continuará',
    subtitulo: 'Apenas es el comienzo de todos los capítulos que todavía nos esperan.',
    sorpresa: 'Solo de tu mano quiero caminar. ♡'
  };

  /* Bloqueo por pago pendiente (pedido por Obed el 7 de noviembre de 2026): ninguna página muestra contenido.
     Cuando el cliente pague, cambiar a false y volver a publicar (subir también el ?v= en los HTML). */
  const pagoPendiente = true;
  if (pagoPendiente && typeof document !== 'undefined') {
    document.documentElement.classList.add('pago-bloqueado');
    const pausar = () => document.querySelectorAll('audio, video').forEach(m => { try { m.pause(); m.muted = true; } catch (e) {} });
    const bloquear = () => {
      if (!document.querySelector('.pago-lock')) {
        const lock = document.createElement('div');
        lock.className = 'pago-lock'; lock.setAttribute('role', 'alertdialog'); lock.setAttribute('aria-modal', 'true');
        lock.innerHTML = '<div class="pago-lock-box"><div class="pago-lock-icon">🔒</div>' +
          '<h1>Contenido bloqueado</h1>' +
          '<p>Este regalo tiene un <strong>pago pendiente</strong>.</p>' +
          '<p>En cuanto se complete el pago, podrás disfrutarlo completo.</p></div>';
        document.body.appendChild(lock);
      }
      pausar();
    };
    if (document.body) bloquear(); else document.addEventListener('DOMContentLoaded', bloquear);
    setInterval(bloquear, 500);
    ['click', 'keydown', 'touchstart', 'pointerdown'].forEach(ev => window.addEventListener(ev, e => {
      e.stopImmediatePropagation(); e.preventDefault();
    }, { capture: true, passive: false }));
  }
})();

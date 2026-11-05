/* Contenido exclusivo de Alondra para Adrián (paquete Temporadas de Nosotros, $199). La plantilla original permanece intacta. */
(() => {
  const c = window.TDN;
  const A = 'Alondra';
  const B = 'Adrián';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const vid = n => ({ img: `assets/video/momento-${String(n).padStart(2, '0')}.mp4`, poster: `assets/fotos/momento-${String(n).padStart(2, '0')}.webp` });
  const T = (titulo, archivo) => ({ titulo, src: `assets/audio/${archivo}-climax.mp3` });
  const tracks = {
    esPorTi: T('Es por ti — Juanes', 'es-por-ti'),
    antesDeTi: T('Antes de ti — Mon Laferte', 'antes-de-ti'),
    amarte: T('Amarte a la antigua — Pedro Fernández', 'amarte-a-la-antigua'),
    favorito: T('Favorito — Camilo', 'favorito'),
    contigo: T('Contigo — Karol G y Tiësto', 'contigo'),
    ojitos: T('Ojitos lindos — Bad Bunny y Bomba Estéreo', 'ojitos-lindos'),
    perfect: T('Perfect Symphony — Ed Sheeran y Andrea Bocelli', 'perfect'),
    holdOn: T('Hold On — Justin Bieber', 'hold-on'),
    abrazame: T('Abrázame — Ángela Aguilar y Felipe Botello', 'abrazame'),
    lover: T('Lover — Taylor Swift', 'lover'),
    baila: T('Baila mi corazón — Belanova', 'baila-mi-corazon'),
    cantHelp: T("Can't Help Falling in Love — Elvis Presley", 'cant-help'),
    especial1: T('Canción especial 1', 'especial-1'),
    especial2: T('Canción especial 2', 'especial-2'),
    especial3: T('Canción especial 3', 'especial-3')
  };
  const lista = Object.values(tracks);

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [B, 'mi amor'], apodo: B,
    fechaInicio: '', anioInicio: '', anios: 0, aniosManual: 0, fechaCodigo: '1403',
    ciudad: 'El trabajo', primeraCita: '', cancion: 'Es por ti', artista: 'Juanes',
    viajes: [], dificiles: [], anecdota: '', culpableAnecdota: 2, gustosB: [],
    suenos: ['Seguir creciendo juntos', 'Cumplir nuestras metas de la mano', 'Celebrar muchos 14 de marzo más'],
    mensajeFinal: 'Adrián, gracias por llegar a mi vida. Nos conocimos en el trabajo y hoy eres mi lugar favorito. Te amo. — Alondra'
  });
  Object.assign(c.fotos, {
    hero: portada(1), perfilB: foto(20), perfilPareja: foto(1),
    t0: foto(1), t1: foto(3), t2: foto(4), t3: foto(14), t4: foto(15), t5: foto(17), t6: foto(7), t7: foto(16),
    final: portada(17), puzzle: foto(14), puzzle2: foto(1), postCreditos: foto(15)
  });
  c.media.intro = 'assets/audio/intro.mp3';
  c.media.temporadas = lista.map(t => t.src);
  c.media.canciones = lista.map(t => t.titulo);
  c.media.musica = '';
  c.media.videoFinal = '';
  c.media.audioRemitente = '';
  /* La contraseña no se guarda aquí: solo su huella SHA-256 (minúsculas, sin guiones ni espacios). */
  Object.assign(c.acceso, { demo: false, password: 'e8026bda3ea2eedc7dc7bce9daa640f8cc0f33e335bd73d986a872b3ba789c71', pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '525624787143', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/alondra-adrian/sitio/index.html?compartir=1',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, gratitud y sueños compartidos',
    heroTag: '14 DE MARZO · EXCLUSIVO PARA ADRIÁN', heroTop: 'Una historia de Alondra para Adrián',
    titulo: 'Nuestra historia, ahora en streaming',
    sinopsis: 'Nos conocimos en el trabajo. Lo que empezó entre compañeros se convirtió en la historia más bonita de nuestras vidas: doce películas, tres series y siete juegos para celebrar cada 14 de marzo.',
    generos: ['Romance', 'Basada en hechos reales', 'Aniversario'], filaRecomendada: 'Todo empezó en el trabajo'
  });

  const ph = (n, ...texto) => ({ img: foto(n), poster: foto(n), texto });
  const vd = (n, ...texto) => ({ ...vid(n), texto });
  const DUR = 54;
  const film = (num, titulo, imagen, track, sinopsis, escenas, interaccion = null) => ({
    num, tipo: 'pelicula', titulo, anio: '', clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, top10: num < 3, sinopsis,
    creditos: [['Para', B], ['Con amor de', A], ['Música', track.titulo]],
    episodios: [{ titulo, duracion: DUR, descripcion: sinopsis, escenas, interaccion, recompensa: '' }]
  });

  const peliculas = [
    film(0, 'Nos conocimos en el trabajo', portada(2), tracks.esPorTi,
      'Así lo cuenta Alondra: «Nos conocimos en el trabajo». Un lugar de todos los días se volvió el principio de todo.', [
        ph(2, 'Nos conocimos en el trabajo.'),
        ph(1, 'Un lugar de todos los días', 'se convirtió en el lugar donde empezó lo más bonito de mi vida.'),
        ph(16, 'Entre pendientes, horarios y rutinas,', 'apareciste tú.'),
        ph(13, 'Nunca imaginé que entre compañeros', 'iba a encontrar a la persona que hoy amo.'),
        ph(15, 'Gracias por aquel primer saludo', 'y por cada plática que vino después.'),
        ph(3, 'Desde entonces, Adrián,', 'cada día tiene una razón más para sonreír: tú.')
      ],
      { tipo: 'quiz', titulo: 'Donde todo empezó', pregunta: '¿Dónde nos conocimos?', opciones: ['En el trabajo', 'En una fiesta', 'En la escuela'], correcta: 0, ok: 'En el trabajo. Ahí empezó nuestra historia.' }),
    film(1, 'Antes de ti', portada(9), tracks.antesDeTi,
      'Hay una vida antes de conocerte y otra después. Alondra le cuenta a Adrián todo lo que cambió cuando llegó.', [
        ph(9, 'Antes de ti, mis días eran otros.'),
        ph(5, 'No sabía lo que era extrañar a alguien', 'apenas se iba.'),
        ph(11, 'No sabía que una sola sonrisa', 'podía cambiarme el día entero.'),
        ph(10, 'Y llegaste tú,', 'sin hacer ruido, a quedarte en mi corazón.'),
        ph(7, 'Hoy no me imagino mi vida', 'sin ti a mi lado.')
      ]),
    film(2, 'Amarte a la antigua', portada(4), tracks.amarte,
      'Un amor de los de antes: con detalles, respeto y la mano siempre tomada.', [
        ph(4, 'Me gusta que nos queramos así,', 'a la antigua.'),
        ph(3, 'Con detalles que dicen mucho', 'aunque sean sencillos.'),
        ph(6, 'Con respeto, con paciencia', 'y con ganas de cuidarnos.'),
        ph(1, 'Contigo aprendí que el amor', 'se demuestra todos los días.'),
        ph(17, 'Y quiero seguir amándote así,', 'hoy y siempre.')
      ],
      { tipo: 'quiz', titulo: 'Nuestra canción', pregunta: '¿Qué canción de Pedro Fernández acompaña esta película?', opciones: ['Amarte a la antigua', 'Si te vas', 'Deja que salga la luna'], correcta: 0, ok: 'Amarte a la antigua, como nos queremos tú y yo.' }),
    film(3, 'Mi lugar favorito', portada(14), tracks.favorito,
      'De todos los lugares del mundo, el favorito de Alondra siempre será al lado de Adrián.', [
        ph(14, 'De todos los lugares del mundo,', 'mi favorito eres tú.'),
        vd(4, 'Tus besos, tu forma de mirarme', 'y tu manera de hacerme sentir en casa.'),
        ph(3, 'Contigo hasta lo más sencillo', 'se vuelve especial.'),
        ph(17, 'Me encanta quedarme así,', 'cerquita de ti.'),
        ph(4, 'Eres mi persona favorita', 'y mi plan favorito.')
      ],
      { tipo: 'completar', titulo: 'Lo que eres para mí', frase: 'De todos los lugares del mundo, mi ___ eres tú.', opciones: ['favorito', 'lejano', 'pendiente'], correcta: 0, ok: 'Mi lugar favorito siempre serás tú.' }),
    film(4, 'Contigo', portada(12), tracks.contigo,
      'Los paseos, las fotos y los lugares que se vuelven especiales solo porque van juntos.', [
        vd(2, 'Contigo cualquier lugar', 'se vuelve un buen recuerdo.'),
        ph(12, 'Me gusta caminar a tu lado', 'y descubrir el mundo contigo.'),
        ph(8, 'Cada salida es una excusa', 'para abrazarte un poquito más.'),
        ph(16, 'Gracias por cada plan,', 'por cada viaje y por cada foto.'),
        ph(1, 'Lo mejor de cada lugar', 'siempre has sido tú.')
      ]),
    film(5, 'Ojitos lindos', portada(20), tracks.ojitos,
      'Una película dedicada solo a él: lo que Alondra ve cuando lo mira.', [
        ph(18, 'Esta película es solo para ti, Adrián.'),
        ph(20, 'Me encanta verte tranquilo,', 'disfrutando las cosas sencillas.'),
        ph(19, 'Me encanta cómo eres', 'en los días comunes.'),
        ph(21, 'Tu sonrisa, tus ojos', 'y tu forma de ser me enamoran.'),
        ph(15, 'Y no me canso de mirarte.')
      ],
      { tipo: 'adivinanza', titulo: 'Adivina quién', texto: 'Llegó a mi vida en el trabajo, me hace sonreír todos los días y es mi persona favorita. ¿Quién es?', respuestas: ['adrian', 'jose adrian', 'tu', 'mi amor', 'adrian rodriguez'], pista: 'Está viendo esta pantalla ahora mismo.', ok: '¡Eres tú, Adrián!' }),
    film(6, 'Gracias, vida', vid(1).poster, tracks.perfect,
      'Gracias por el hombre que la vida le dio: una película de gratitud.', [
        vd(1, 'Gracias, vida,', 'por el hombre que me diste.'),
        ph(13, 'Gracias por ponerte en mi camino', 'en el lugar menos esperado.'),
        ph(1, 'Gracias por tu paciencia,', 'tu cariño y tu manera de cuidarme.'),
        ph(15, 'Gracias por cada abrazo', 'en los días difíciles.'),
        ph(14, 'Y gracias por elegirme', 'todos los días.')
      ]),
    film(7, 'Lo que admiro de ti', portada(16), tracks.holdOn,
      'Su esfuerzo, su nobleza y su forma de ser: todo lo que Alondra admira de Adrián.', [
        ph(2, 'Admiro tu esfuerzo', 'y las ganas que le pones a cada día.'),
        ph(16, 'Admiro tu forma de tratar a los demás', 'y tu buen corazón.'),
        ph(18, 'Me inspiras a ser mejor', 'cada día.'),
        ph(13, 'Estoy muy orgullosa de ti', 'y de todo lo que eres.'),
        ph(3, 'Y siempre voy a estar a tu lado', 'para apoyarte.')
      ],
      { tipo: 'ordenar', titulo: 'Nuestra historia en orden', eventos: ['Nos conocimos en el trabajo', 'Empezamos a ser novios un 14 de marzo', 'Llegaron las salidas, los viajes y las fotos juntos', 'Hoy celebramos nuestra historia'], ok: 'Así, paso a paso, se escribió lo nuestro.' }),
    film(8, 'Abrázame', portada(17), tracks.abrazame,
      'Sus brazos como refugio: los abrazos que lo arreglan todo.', [
        ph(17, 'Abrázame así,', 'como si el mundo se detuviera.'),
        ph(10, 'En tus brazos encontré', 'mi lugar seguro.'),
        ph(8, 'No hay día malo', 'que no mejore con un abrazo tuyo.'),
        ph(5, 'Contigo me siento en paz.'),
        ph(11, 'Nunca me sueltes, Adrián.')
      ]),
    film(9, 'Nuestra vida juntos', portada(19), tracks.lover,
      'Los días comunes también son de película: el desayuno, la casa, el sillón y la vida compartida.', [
        ph(19, 'Me encantan nuestros días sencillos.'),
        ph(20, 'Los desayunos, las pláticas', 'y el tiempo que pasamos juntos.'),
        ph(21, 'Compartir la mesa contigo', 'es uno de mis momentos favoritos.'),
        ph(18, 'Contigo, la rutina', 'también se siente bonita.'),
        ph(6, 'Esta es nuestra vida', 'y la quiero seguir dibujando contigo.')
      ],
      { tipo: 'memory', titulo: 'Nuestros recuerdos', pares: [foto(1), foto(3), foto(4), foto(14), foto(15), foto(17)], ok: 'Cada foto guarda un pedacito de nosotros.' }),
    film(10, 'Baila mi corazón', portada(7), tracks.baila,
      'Las risas, las noches de salida y la alegría que se siente cuando están juntos.', [
        ph(7, 'Contigo mi corazón baila.'),
        ph(3, 'Me encantan nuestras risas', 'y nuestras salidas.'),
        ph(4, 'Contigo todo es más divertido.'),
        ph(9, 'Tu nombre me hace sonreír', 'cada vez que lo escucho.'),
        ph(1, 'Y quiero seguir bailando la vida', 'a tu lado.')
      ]),
    film(11, '14 de marzo', vid(3).poster, tracks.cantHelp,
      'Un 14 de marzo empezó nuestra historia como pareja. Hoy lo celebramos.', [
        ph(14, 'Un 14 de marzo', 'empezó nuestra historia.'),
        vd(3, 'Después de conocerte,', 'mi vida cambió para bien.'),
        ph(1, 'No pude evitar enamorarme de ti.'),
        ph(17, 'Y cada 14 de marzo', 'quiero celebrarlo contigo.'),
        ph(15, 'Feliz aniversario, mi amor.', 'Te amo, Adrián.')
      ],
      { tipo: 'codigo', titulo: 'Nuestra fecha', modo: 'fecha', pregunta: '¿Qué día celebramos nuestro aniversario?', placeholder: 'DDMM', respuestas: ['1403', '14/03', '14 de marzo', '14 marzo'], pista: 'Es en marzo.', ok: '14 de marzo, nuestro día.' })
  ];

  const serie = (num, titulo, imagen, track, sinopsis, episodios) => ({
    num, tipo: 'serie', titulo, anio: '', clasificacion: 'TP', imagen,
    musica: track.src, cancion: track.titulo, sinopsis,
    creditos: [['Protagonistas', `${A} y ${B}`], ['Con amor de', A], ['Música', track.titulo]],
    episodios: episodios.map(e => ({ titulo: e.titulo, duracion: DUR, descripcion: e.descripcion, escenas: e.escenas, interaccion: null, recompensa: '' }))
  });
  const series = [
    serie(12, 'Lo que siento por ti', portada(3), tracks.especial1,
      'Una serie sobre los sentimientos que Alondra guarda para Adrián.', [
        { titulo: 'Lo que siento', descripcion: 'Todo lo que siente cuando está con él.', escenas: [
          ph(3, 'Adrián, contigo siento paz.'),
          ph(5, 'Siento que puedo ser yo misma.'),
          ph(11, 'Siento que estoy en el lugar correcto.'),
          ph(10, 'Siento que mi corazón', 'encontró su hogar.'),
          ph(4, 'Y siento que esto', 'apenas está empezando.')
        ] },
        { titulo: 'Te elijo', descripcion: 'Porque cada día lo vuelve a elegir.', escenas: [
          ph(13, 'Te elijo en los días buenos'),
          ph(9, 'y en los días difíciles.'),
          ph(15, 'Te elijo con tus risas', 'y con tus silencios.'),
          ph(7, 'Te elijo hoy,'),
          ph(1, 'y te volvería a elegir', 'todas las veces.')
        ] }
      ]),
    serie(13, 'Nuestras metas', portada(16), tracks.especial2,
      'Lo que sueñan juntos y todo lo que todavía quieren construir.', [
        { titulo: 'Lo que soñamos', descripcion: 'Los sueños que quieren cumplir juntos.', escenas: [
          ph(16, 'Quiero que conozcamos muchos lugares juntos.'),
          vd(2, 'Que sigamos llenando el celular', 'de fotos y recuerdos.'),
          ph(12, 'Que cumplamos cada meta', 'que nos propongamos.'),
          ph(19, 'Que construyamos un hogar', 'lleno de amor.'),
          ph(14, 'Y que nunca dejemos de soñar juntos.')
        ] },
        { titulo: 'Lo que te prometo', descripcion: 'Las promesas de Alondra para Adrián.', escenas: [
          ph(2, 'Te prometo apoyarte', 'en cada uno de tus sueños.'),
          ph(18, 'Te prometo cuidarte', 'y respetarte siempre.'),
          ph(8, 'Te prometo abrazos', 'cuando más los necesites.'),
          ph(17, 'Te prometo seguir enamorándote', 'cada día.'),
          ph(1, 'Y te prometo que,', 'pase lo que pase, estaré contigo.')
        ] }
      ]),
    serie(14, 'Continuará', portada(15), tracks.especial3,
      'Todo lo vivido es solo la primera temporada.', [
        { titulo: 'Hoy', descripcion: 'Mirar lo que han vivido y agradecerlo.', escenas: [
          ph(15, 'Hoy miro todo lo que hemos vivido'),
          vd(3, 'y me siento muy afortunada.'),
          ph(14, 'Gracias por cada momento, Adrián.'),
          ph(6, 'Por cada risa, cada beso', 'y cada abrazo.'),
          ph(3, 'Esta historia es mi favorita.')
        ] },
        { titulo: 'Para siempre', descripcion: 'Lo que viene, juntos.', escenas: [
          ph(17, 'Lo mejor todavía está por venir.'),
          ph(4, 'Nos faltan muchos capítulos', 'por escribir.'),
          vd(4, 'Muchos besos'),
          ph(1, 'y muchos 14 de marzo por celebrar.'),
          ph(13, 'Te amo, Adrián.', 'Con todo mi corazón, Alondra.')
        ] }
      ])
  ];
  c.temporadas.splice(0, c.temporadas.length, ...peliculas, ...series);

  c.extras = [
    { titulo: 'Nuestra historia, en palabras de Alondra', img: foto(2), texto: 'Nos conocimos en el trabajo' },
    { titulo: 'Nuestro día', img: foto(14), texto: '14 de marzo' },
    { titulo: 'Gracias, vida', img: vid(1).poster, texto: 'Gracias, vida, por el hombre que me diste.' },
    { titulo: 'Nuestro retrato', img: foto(6), texto: 'Nuestra historia, también dibujada.' }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Adrián', imagen: portada(17),
    sinopsis: 'Después de doce películas y tres series, Alondra todavía tiene algo que decirte.',
    preguntas: [
      '¿Qué pensaste la primera vez que me viste en el trabajo?',
      '¿Cuál es tu recuerdo favorito de nosotros?',
      '¿Qué canción te recuerda a mí?',
      '¿Qué sueño te gustaría que cumpliéramos juntos?',
      '¿Qué quisieras decirme hoy?'
    ],
    carta: () => `Adrián:\n\nNos conocimos en el trabajo. Nunca imaginé que en un lugar de todos los días iba a encontrar a la persona más importante de mi vida.\n\nGracias por llegar, por tu paciencia, por tu cariño y por cada momento que hemos compartido. Gracias por los abrazos que me dan paz, por las risas, por los viajes y por los días sencillos que contigo se vuelven especiales.\n\nAdmiro tu esfuerzo y tu buen corazón. Quiero seguir apoyándote en cada meta, cumplir sueños a tu lado y celebrar contigo muchos 14 de marzo más.\n\nGracias, vida, por el hombre que me diste.\n\nFeliz aniversario, mi amor. Te amo.\n\nAlondra`
  });
  c.creditos = [
    ['Una historia de', `${A} y ${B}`], ['De', 'Alondra Ruiz'], ['Para', 'Adrián Rodríguez'],
    ['Donde todo empezó', 'El trabajo'], ['Nuestro día', '14 de marzo'],
    ['Banda sonora', lista.map(t => t.titulo).join(' · ')],
    ['Agradecimientos especiales', 'A la vida, por ponernos en el mismo camino'],
    ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(15), etiqueta: 'ESCENA POST-CRÉDITOS',
    texto: 'Adrián… esto apenas es la primera temporada.', anuncio: 'Continuará',
    subtitulo: 'Y cada 14 de marzo, un nuevo capítulo.',
    sorpresa: 'Te amo. — Alondra ♡'
  };

  /* Accesos a «Nuestras canciones» y «Nuestros recuerdos», como en el paquete completo. */
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.dataset.page || ['player', 'splash', 'password', 'profiles'].includes(document.body.dataset.page)) return;
    const add = (href, label, bottom, color) => { const x = document.createElement('a'); x.className = 'tdn-float'; x.href = href; x.setAttribute('aria-label', label.slice(2)); x.innerHTML = `<b>${label.slice(0, 1)}</b><span>${label.slice(2)}</span>`; Object.assign(x.style, { position: 'fixed', right: '16px', bottom, zIndex: '1000', background: color, color: 'white', padding: '9px 14px', borderRadius: '999px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px #0009', fontSize: '14px' }); document.body.append(x); };
    add('canciones.html', '♫ Nuestras canciones', '16px', '#e50914');
    add('recuerdos.html', '▣ Nuestros recuerdos', '62px', '#303030');
  });
})();

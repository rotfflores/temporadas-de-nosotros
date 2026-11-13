(() => {
  'use strict';
  const A = 'Alejandro';
  const B = 'Taly';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const ambiente = name => `assets/ambiente/${name}.webp`;
  const clip = name => ({ img: `assets/ambiente/${name}.mp4`, poster: ambiente(`${name}-poster`) });
  const tracks = window.TALY_TRACKS;
  const byId = Object.fromEntries(tracks.map(track => [track.id, track]));
  const scene = ([visual, text]) => ({
    ...(typeof visual === 'number' ? { img: foto(visual) }
      : typeof visual === 'string' ? { img: ambiente(visual) } : visual),
    texto: [text]
  });
  const episode = (titulo, descripcion, frames, interaccion = null, musica = '') => ({
    titulo, descripcion, duracion: 54, escenas: frames.map(scene), interaccion, musica
  });
  const quiz = (pregunta, opciones, correcta, ok) => ({ tipo: 'quiz', pregunta, opciones, correcta, ok });

  const films = [
    ['En el trabajo', 61, 'desde-hoy', 'Así empezó lo nuestro: nos conocimos en el trabajo.',
      [
        [61, 'Taly, nuestra historia empezó en el trabajo.'],
        [2, 'De todos los lugares donde pudimos coincidir, ahí fue donde te conocí.'],
        ['cafe', 'Qué raro pensar que, en medio de un día cualquiera, empezó algo que hoy significa tanto para mí.'],
        [44, 'Me alegra que, después de conocernos, hayamos querido seguir acercándonos.'],
        [21, 'Si pudiera asomarme a ese primer capítulo, le diría a mi yo de entonces que prestara atención.'],
        [63, 'La mujer que acaba de conocer terminaría siendo la persona con la que comparte su casa.']
      ], quiz('¿Dónde nos conocimos?', ['En una fiesta', 'En el trabajo', 'En la escuela'], 1, 'Ahí empezó nuestra historia.')],
    ['Te digo Taly', 53, 'quiero-hablarte', 'El nombre que Alejandro dice cuando quiere hablarle con cariño.',
      [
        [53, 'Natali Esmeralda Mendoza Gómez. Así quiero que aparezca tu nombre en los créditos.'],
        [67, 'En la casa te digo Taly. Me sale así, con todo el cariño que te tengo.'],
        [23, 'Me gusta cómo suena cuando te estoy buscando para contarte algo.'],
        [31, 'A veces solo quiero que me mires un segundo y sepas que estoy pensando en ti.'],
        [52, 'Por eso, cuando diga «Taly» en estas películas, imagíname diciéndotelo al oído.'],
        [26, 'Cada vez que lo digo, me da gusto tenerte cerca.']
      ], { tipo: 'completar', frase: 'De cariño te digo ___.', opciones: ['Taly', 'Nati', 'Esme'], correcta: 0, ok: 'Taly, con todo mi cariño.' }],
    ['Qué bonito coincidir', 15, 'un-nuevo-amor', 'La alegría de pensar en todo lo que nació de aquel encuentro.',
      [
        [15, 'A veces pienso en la suerte que tuve de encontrarte.'],
        [3, 'Tú llevabas tu vida y yo la mía, hasta que nuestros caminos se cruzaron.'],
        ['camino', 'Desde entonces, me ha dado gusto ir conociendo a la mujer detrás de esa primera impresión.'],
        [7, 'Entre más te conozco, más curiosidad tengo por lo que sueñas y por cómo ves el mundo.'],
        [27, 'Me sigue gustando la idea de descubrir cosas de ti aunque ya vivamos juntos.'],
        [38, 'Me encanta seguir encontrando razones para enamorarme de ti.']
      ]],
    ['Cuando te miro', 24, 'tornasol', 'Un retrato de Taly visto por Alejandro.',
      [
        [24, 'Hay fotos tuyas que me hacen quedarme mirando un rato más.'],
        [6, 'Esta es para que te veas un segundo como te veo yo.'],
        [20, 'Me gusta tu manera de mirar y esa expresión tuya que reconocería en cualquier foto.'],
        ['flores', 'Admiro a la mujer que eres y me gusta imaginar a la que todavía quieres llegar a ser.'],
        [19, 'Ojalá nunca te falten ganas de hacer cosas que te hagan sentir bien contigo misma.'],
        [59, 'Hoy me toca recordarte lo orgulloso que estoy de compartir mi vida contigo.']
      ]],
    ['Llegar a casa', 85, 'solo-contigo', 'Una película sobre compartir la casa y aprender a cuidarse todos los días.',
      [
        [85, 'Taly, me encanta que hoy podamos decir «nuestra casa».'],
        [83, 'Me gusta tener a quién preguntarle cómo estuvo su día y a quién contarle cómo estuvo el mío.'],
        ['cafe', 'A veces, el mejor plan que se me ocurre es quedarme en casa contigo y platicar.'],
        [87, 'Gracias por hacerme un lugar en tu rutina y por ir encontrando conmigo la forma de compartirla.'],
        [88, 'Quiero seguir aprendiendo cómo acompañarte cuando llegues cansada o necesites tu espacio.'],
        [11, 'Si me preguntan dónde quiero estar al final del día, casi siempre la respuesta es donde estés tú.']
      ], { tipo: 'adivinanza', texto: 'Lo compartimos todos los días. Tiene puerta, pero contigo también tiene corazón. ¿Qué es?', respuestas: ['casa', 'hogar', 'nuestra casa', 'nuestro hogar'], pista: 'Es el lugar donde vivimos juntos.', ok: 'Nuestro hogar.' }],
    ['Un beso tuyo', 30, 'un-beso', 'Una colección de besos, abrazos y ratos en los que sobra hablar.',
      [
        [30, 'Me gustan esas fotos en las que uno de los dos se acerca a dar un beso.'],
        [16, 'Cada vez que las veo, se me antoja dejar el celular y acercarme a ti.'],
        [18, 'A veces con eso basta para decirte cuánto gusto me da verte.'],
        [22, 'También me gusta cuando un abrazo se alarga porque ninguno quiere soltarse.'],
        [34, 'Gracias por el cariño que cabe en gestos tan chiquitos.'],
        [94, 'Ven, Taly. A esta película le falta el beso que te quiero dar ahorita.']
      ]],
    ['Reír contigo', 72, 'solo-tu', 'Las caras, las poses y los ratos que Alejandro querría repetir.',
      [
        [72, 'Si alguna vez se me olvida lo bien que la paso contigo, basta abrir nuestras fotos.'],
        [36, 'Me da risa ver las caras que hacemos cuando intentamos salir bien.'],
        [40, 'Me gusta que podamos emocionarnos, hacer relajo y guardar una foto del momento.'],
        [42, 'Hasta las fotos movidas me gustan. A veces son las que más se parecen a cómo se sintió ese rato.'],
        [46, 'Quiero que sigamos teniendo tiempo para divertirnos juntos.'],
        [45, 'Y cuando tengamos cara de sueño al día siguiente, también quiero acordarme de la risa.']
      ], { tipo: 'memory', pares: [36, 40, 42, 45, 46, 72].map(foto), ok: 'Encontraste todas nuestras fotos.' }],
    ['Gracias por quedarte cerquita', 82, 'la-obsesion', 'Alejandro le da las gracias a Taly por el cariño de todos los días.',
      [
        [82, 'Gracias por compartir conmigo tanto de tu tiempo, Taly.'],
        [37, 'Gracias por preguntarme cómo estoy y por escuchar lo que a veces me cuesta decir.'],
        [35, 'Me gusta sentir que podemos hablarnos con confianza.'],
        [49, 'También quiero aprender a escucharte mejor y acordarme de preguntarte qué necesitas.'],
        [73, 'En los días de prisa, quiero seguir haciendo tiempo para estar contigo.'],
        [99, 'Quiero que, cuando estés conmigo, te sientas tan querida como me haces sentir a mí.']
      ]],
    ['24 de julio', 68, 'el-amor-de-nosotros', 'El aniversario de Alejandro y Taly tiene su propia película.',
      [
        [68, 'El 24 de julio es nuestro aniversario.'],
        [5, 'Me gusta que tengamos una fecha para detenernos y mirar cómo ha crecido lo nuestro.'],
        [12, 'Cuando vuelva a llegar, quiero darte las gracias por todo lo que hayamos aprendido juntos.'],
        [64, 'Ojalá guardemos muchas más fotos que nos hagan decir: «¿Te acuerdas de ese día?».'],
        [70, 'Quiero seguir celebrando que te conocí y que hoy tengo la dicha de compartir casa contigo.'],
        [71, 'Cada 24 de julio voy a tener ganas de decirte lo mismo: qué bueno que hicimos una vida juntos.']
      ], { tipo: 'codigo', modo: 'fecha', pregunta: '¿Cuándo celebramos nuestro aniversario?', placeholder: 'DDMM', respuestas: ['2407', '24/07', '24 de julio'], pista: 'Lo celebramos en julio.', ok: '24 de julio. Nuestro día.' }],
    ['Nuestro álbum', 60, 'que-hago', 'Mirar las fotos juntos y dejar que cada imagen traiga su propio recuerdo.',
      [
        [60, 'Hay fotos que, con solo verlas, me devuelven las ganas de estar ahí contigo.'],
        [32, 'Esta me gusta por la cara que traemos los dos.'],
        [65, 'Y esta me hace pensar en todos los lugares donde todavía nos falta tomarnos una foto.'],
        [79, 'A veces me pregunto cuál de estas escogerías tú para contar nuestra historia.'],
        [89, 'También me gustaría saber qué recuerdas tú de los días que yo veo en estas imágenes.'],
        [91, 'La próxima vez que abramos el álbum, enséñame tu favorita. Yo te enseño la mía.']
      ], { tipo: 'puzzle', imagen: foto(60), ok: 'Otra foto de nosotros, pieza por pieza.' }],
    ['Un deseo para Taly', 50, 'un-milagro', 'El 6 de diciembre, Alejandro celebra a la mujer que ama.',
      [
        [clip('velas'), 'Hoy, 6 de diciembre, las velas son para ti.'],
        [50, 'Antes de que pidas tu deseo, déjame decirte el mío.'],
        [10, 'Deseo que este año te acerques a algo que quieras hacer desde hace tiempo.'],
        [13, 'Que tengas salud, ratos de descanso y días que te den ganas de guardar en fotos.'],
        [25, 'Que en casa siempre encuentres un abrazo mío cuando lo necesites.'],
        [96, 'Feliz cumpleaños, Taly. Te quiero ver feliz y me da mucha alegría poder festejarte.']
      ]],
    ['Me gusta lo que somos', 80, 'lo-que-hay', 'Una mirada a lo que ya comparten y a lo que todavía quieren cuidar.',
      [
        [80, 'Me gusta pensar en todo lo que cabe en la palabra «nosotros».'],
        [41, 'Caben los planes que armamos con tiempo y los que decidimos de un momento a otro.'],
        [43, 'Caben las fotos que nos dan risa y las que guardo porque quiero volver a mirarte así.'],
        [clip('olas'), 'También caben las conversaciones tranquilas que me hacen sentir cerca de ti.'],
        [57, 'Quiero seguir teniendo espacio para todo eso contigo.'],
        [78, 'Me hace ilusión descubrir cómo vamos a ser dentro de unos años, con un montón de recuerdos más.']
      ], { tipo: 'ordenar', eventos: ['Nos conocimos en el trabajo', 'Empezó nuestra historia de amor', 'Compartimos nuestra casa', 'Te preparé este regalo de cumpleaños'], ok: 'Así llegamos a este cumpleaños, Taly.' }]
  ];

  const series = [
    ['Te elegiría', 74, 'te-elegiria', 'Dos episodios sobre el cariño que siente Alejandro y cómo quiere demostrarlo.', [
      episode('Lo que siento cuando estás cerca', 'Alejandro le pone palabras a la calma que siente con Taly.', [
        [74, 'Contigo me siento en confianza, Taly.'],
        [28, 'Puedo contarte lo que me da vueltas en la cabeza y luego reírme contigo de cualquier cosa.'],
        [55, 'Me gusta que conozcas esas dos partes de mí.'],
        [76, 'Cuando el día viene pesado, estar cerca de ti me ayuda a bajar el ritmo.'],
        [92, 'Me gusta la paz de quedarme así, un rato contigo.'],
        [93, 'Quiero que también encuentres esa paz a mi lado.']
      ]),
      episode('Cómo quiero cuidarte', 'Escucharte, acompañarte y hacer tiempo para los dos.', [
        [66, 'Quiero seguir eligiéndote en decisiones chiquitas.'],
        [77, 'Preguntarte cómo estás y darte tiempo de contestarme.'],
        [95, 'Dejar el celular a un lado cuando tengamos algo que decirnos.'],
        [54, 'Preguntarte cómo puedo ayudarte cuando estés preocupada.'],
        [56, 'Celebrar contigo eso que te costó y que por fin lograste.'],
        [58, 'Así quiero quererte: estando presente en tu vida todos los días.']
      ])
    ]],
    ['Lo que soñamos juntos', 81, 'sonamos-juntos', 'Metas que Alejandro imagina para el hogar que ya comparten y para los años que vienen.', [
      episode('Hacer espacio para lo nuestro', 'Cuidar lo que han construido bajo el mismo techo.', [
        [81, 'Quiero que nuestra casa siga siendo el lugar donde podamos descansar del mundo.'],
        [84, 'Que podamos hablar tranquilos de lo que nos preocupa, incluso cuando nos cueste decirlo.'],
        ['amanecer', 'Que sepamos organizarnos para tener ratos de descanso y ratos para nosotros.'],
        [51, 'Que hagamos espacio para tus planes, para los míos y para los que decidamos juntos.'],
        [86, 'Quiero cuidar contigo la vida que ya empezamos a construir.'],
        [90, 'Me gusta pensar que podemos hacerla cada vez más nuestra.']
      ]),
      episode('Lo que viene para ti', 'Alejandro imagina cómo acompañarla en las metas que ella elija.', [
        [14, 'Quiero saber qué sueñas tú para este año, Taly.'],
        [17, 'Si hay algo que te emociona y todavía te da miedo empezar, me gustaría escucharte.'],
        [62, 'Si puedo ayudarte, quiero estar cerca para echarte la mano.'],
        [clip('ocaso'), 'También quiero aprender a acompañarte cuando lo único que necesitas es tiempo.'],
        [98, 'Me ilusiona ver cómo vas haciendo tuyas las cosas que hoy apenas imaginas.'],
        [8, 'Ojalá el próximo cumpleaños podamos festejar también alguna de ellas.']
      ])
    ]],
    ['Después de las velas', 4, 'volvere', 'Un cumpleaños que mira hacia los próximos capítulos de los dos.', [
      episode('El día de Taly', 'Una felicitación que Alejandro quiere que ella pueda volver a escuchar.', [
        [clip('velas'), 'Hoy quiero que te consientan mucho, Taly.'],
        [9, 'Que tengas tiempo de hacer algo que te guste y te dé risa hasta que te duela la cara.'],
        [47, 'Que la gente que quieres encuentre un ratito para felicitarte.'],
        [48, 'Si pudiera regalarte algo para todo el año, sería esa sensación de saber cuánto te quieren.'],
        [69, 'Por mi parte, ya sabes dónde encontrarme cuando quieras un abrazo.'],
        [1, 'Feliz cumpleaños, mi amor. Qué gusto poder decirte eso de cerquita.']
      ]),
      episode('Mañana, en casa', 'La historia sigue cuando termina el cumpleaños.', [
        [4, 'Cuando pase el cumpleaños, todavía tendremos todo un año por delante.'],
        [29, 'Quiero volver a hacer planes contigo y cambiar alguno al último momento si se nos antoja.'],
        [39, 'Quiero seguir escuchándote contar tu día mientras hacemos cualquier cosa en casa.'],
        [75, 'Y cuando llegue julio, quiero celebrar otro aniversario a tu lado.'],
        [97, 'Si volvemos a ver estas películas dentro de unos años, ojalá tengamos muchísimas fotos más.'],
        [33, 'Gracias por esta vida que compartimos, Taly. Con amor, Alejandro.']
      ])
    ]]
  ];

  const makeTitle = (num, titulo, cover, track, sinopsis, episodios, tipo) => ({
    num, titulo, tipo, imagen: portada(cover), clasificacion: 'TP', sinopsis,
    musica: byId[track].src, cancion: byId[track].titulo, top10: num < 10,
    creditos: [['Para', 'Natali Esmeralda Mendoza Gómez'], ['Con amor de', 'Alejandro Montoya Rodríguez']],
    episodios
  });
  const temporadas = [
    ...films.map(([titulo, cover, track, sinopsis, frames, game], i) =>
      makeTitle(i, titulo, cover, track, sinopsis, [episode(titulo, sinopsis, frames, game)], 'pelicula')),
    ...series.map(([titulo, cover, track, sinopsis, episodios], i) =>
      makeTitle(films.length + i, titulo, cover, track, sinopsis, episodios, 'serie'))
  ];

  window.TDN = {
    pareja: { nombreA: A, nombreB: B, apodo: B, ciudad: '', viajes: [], anioInicio: '', fechaCodigo: '2407' },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-taly.webp',
      perfilPareja: 'assets/fotos/perfil-pareja.webp', final: portada(85),
      puzzle: foto(60), postCreditos: portada(4)
    },
    media: {
      intro: 'assets/audio/intro.mp3', temporadas: tracks.map(t => t.src),
      canciones: tracks.map(t => t.titulo), videoFinal: 'assets/video/cumple-taly.mp4', audioRemitente: ''
    },
    acceso: {
      demo: false, password: '985c8ff3642f2d61753f9172e0f3b34361c6a92deedd9688d0857501f62a9494',
      pistaPassword: 'Tu cumpleaños: día y mes, con cuatro números.', estreno: ''
    },
    notificacion: { whatsapp: '528110406727', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us.rotfstudio.com/clientes/alejandro-taly/sitio/splash.html', titulo: 'Feliz cumpleaños, Taly', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Romance y recuerdos de la pareja', heroTag: '6 DE DICIEMBRE',
      heroTop: 'De Alejandro para Taly',
      sinopsis: 'Nos conocimos en el trabajo, nuestro aniversario es el 24 de julio y hoy compartimos nuestra casa. Para tu cumpleaños, Taly, quise guardar aquí lo que siento por ti y todo lo que me ilusiona vivir a tu lado.',
      generos: ['Romance', 'Recuerdos', 'Cumpleaños'], filaRecomendada: 'En el trabajo'
    },
    temporadas,
    extras: [
      { titulo: 'Cómo empezó lo nuestro', img: foto(61), texto: '«A ella le digo Taly de cariño. Nuestro aniversario es el 24 de julio. La conocí en el trabajo y vivimos juntos». — Alejandro' },
      { titulo: 'Nuestro 24 de julio', img: foto(68), texto: 'La fecha que Alejandro y Taly celebran juntos cada año.' },
      { titulo: 'El día de Taly', img: foto(50), texto: 'Un estreno de cumpleaños para Natali Esmeralda Mendoza Gómez.' }
    ],
    final: {
      titulo: 'Una carta para Taly', imagen: portada(85),
      sinopsis: 'Alejandro guardó una carta de cumpleaños y un último montaje para ti.',
      preguntas: [
        '¿Qué recuerdas de cuando nos conocimos en el trabajo?',
        '¿Cuál de nuestras fotos te trae el recuerdo que más te gusta?',
        '¿Qué es lo que más disfrutas de compartir casa conmigo?',
        '¿Qué te gustaría que hiciéramos juntos este año?',
        '¿Qué quieres contarme hoy, en tu cumpleaños?'
      ],
      carta: () => `Taly:

Cuando te conocí en el trabajo no tenía idea de que algún día iba a compartir casa contigo. Ahora me da gusto llegar y tener a quién contarle cómo me fue. Me gusta poder hacer planes contigo y también esos ratos en que tenemos tiempo de sentarnos a platicar.

Gracias por hacerme parte de tu vida. Gracias por dejarme conocerte poco a poco, por el cariño que me tienes y por todo lo que ponemos los dos para hacer nuestro hogar. Me da mucha alegría pensar en los 24 de julio que vamos a seguir celebrando juntos.

Hoy, 6 de diciembre, quiero que sepas cuánto te admiro. Para este año te deseo salud, descanso y tiempo para hacer eso que tanto quieres. Cuando tengas algo que celebrar, quiero alegrarme contigo. Y cuando necesites hablar, quiero que sepas que puedes contar conmigo.

Si algo quisiera guardar de este día es la cara que pongas cuando termines de leer esto. Así que cuando nos veamos, ven a darme un abrazo. Tengo muchas ganas de festejarte.

Feliz cumpleaños, Taly. Te amo.

Alejandro Montoya Rodríguez`
    },
    creditos: [
      ['De', 'Alejandro Montoya Rodríguez'], ['Para', 'Natali Esmeralda Mendoza Gómez'],
      ['Cumpleaños', '6 de diciembre'], ['Nuestro aniversario', '24 de julio'],
      ['La historia empezó en', 'El trabajo'], ['Banda sonora', 'Canciones elegidas por Alejandro'],
      ['Escenas de ambiente', 'Pexels y Unsplash'], ['', 'Te amo, Taly.']
    ],
    postCreditos: {
      imagen: portada(4), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Taly, ya acabaron las películas. Ven a darme ese abrazo.',
      anuncio: 'Feliz cumpleaños, mi amor', subtitulo: 'Con amor, Alejandro',
      sorpresa: 'Mañana me cuentas cuál fue tu escena favorita. Hoy quiero quedarme un rato contigo.'
    }
  };
})();


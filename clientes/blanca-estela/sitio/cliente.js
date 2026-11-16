(() => {
  const c = window.TDN;
  const destinataria = 'Blanca Estela';
  const fecha = '18 de diciembre de 2026';
  const historia = 'Blanca Estela, nos conocimos en una posada del trabajo. A veces pienso en aquel encuentro y en todo lo que todavía no sabíamos de nosotros. Hoy tenemos un bebé, y mirar lo que hemos construido desde entonces me llena de ternura.\n\nGracias por hacer equipo conmigo. Me gusta pensar que una familia también se construye en esos detalles que rara vez llegan a las fotos: preguntar cómo estuvo el día, repartir lo que falta por hacer y encontrar un ratito para estar juntos.\n\nQuiero seguir viéndote sonreír, acompañarte en tus propios sueños y guardar espacio para los nuestros. Quiero que nuestro bebé crezca entre cariño y paciencia, y que todavía nos queden muchas sobremesas, mañanas tranquilas y paseos de la mano.\n\nFeliz aniversario, Blanca Estela. Te amo.';
  const fotos = ['juntos', 'playa', 'balcon', 'cena', 'abrazo', 'palmeras', 'collage', 'familia', 'de-la-mano'];
  const f = nombre => `assets/fotos/${nombre}.webp`;
  const portada = nombre => `assets/fotos/portada-${nombre}.webp`;
  const escena = (nombre, ...texto) => ({ img: f(nombre), texto });
  const video = (nombre, ...texto) => ({ img: `assets/video/${nombre}.mp4`, poster: f(`${nombre}-poster`), texto });
  const ambiente = (nombre, ...texto) => ({ img: `assets/ambiente/${nombre}.webp`, texto });
  const movimiento = (nombre, ...texto) => ({ img: `assets/ambiente/${nombre}.mp4`, poster: `assets/ambiente/${nombre}-poster.webp`, texto });

  const pistas = [
    ['como-dormiste', 'cómo dormiste? — Rels B'],
    ['demo-0', "Can’t Help Falling in Love — Elvis Presley"],
    ['demo-1', 'Just the Way You Are — Bruno Mars'],
    ['demo-2', 'Your Song — Rita Ora'],
    ['demo-3', 'Baila Mi Corazón — Belanova'],
    ['demo-4', 'Al Aire — Morat'],
    ['demo-5', 'You & I — One Direction'],
    ['demo-6', 'you! — LANY'],
    ['demo-7', 'Lover — Taylor Swift']
  ].map(([id, titulo]) => ({ titulo, ruta: `assets/audio/${id}.mp3` }));

  Object.assign(c.pareja, {
    nombreA: '', nombreB: destinataria, apodos: [destinataria], apodo: destinataria,
    fechaAniversario: '2026-12-18', fechaCodigo: '1812', ciudad: '',
    viajes: [], dificiles: [], gustosB: [], suenos: ['Cuidar nuestra familia', 'Hacer tiempo para los dos', 'Acompañar los sueños de cada uno'],
    mensajeFinal: historia
  });
  Object.assign(c.fotos, {
    hero: portada('playa'), perfilB: f('perfil-blanca'), perfilPareja: f('perfil-juntos'),
    final: portada('de-la-mano'), puzzle: f('abrazo'), puzzle2: f('juntos'), postCreditos: f('de-la-mano')
  });
  Object.assign(c.media, {
    intro: 'assets/audio/intro.mp3', temporadas: pistas.map(pista => pista.ruta),
    canciones: pistas.map(pista => pista.titulo), musica: '', videoFinal: 'assets/video/horizonte.mp4', audioRemitente: ''
  });
  Object.assign(c.acceso, {
    demo: false, password: 'eb5af8ab99b55cda453f70e6a92c7b327bd8f76f49ff6a81c18ade4c26690057',
    pistaPassword: 'El día y el mes de nuestro aniversario, en cuatro números.', estreno: ''
  });
  Object.assign(c.notificacion, { whatsapp: '523314270193', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us.rotfstudio.com/clientes/blanca-estela/sitio/index.html',
    coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor, recuerdos y familia',
    titulo: 'Te amo por siempre', heroTag: 'ANIVERSARIO · 18 DE DICIEMBRE DE 2026', heroTop: 'Para Blanca Estela',
    sinopsis: 'Nos conocimos en una posada del trabajo. Hoy tenemos un bebé y una historia que sigue creciendo.',
    generos: ['Romance', 'Familia', 'Nuestra historia'], filaRecomendada: 'Desde aquella posada'
  });

  const encuentro = {
    tipo: 'quiz', titulo: 'La primera escena', pregunta: '¿En qué ocasión nos conocimos?',
    opciones: ['En una posada del trabajo', 'En un paseo por la playa', 'En el cine'], correcta: 0,
    ok: 'En la posada del trabajo empezó todo.'
  };
  const memoria = {
    tipo: 'memory', titulo: 'El álbum en pares', pares: ['juntos', 'playa', 'cena', 'abrazo', 'palmeras', 'familia'].map(f),
    ok: 'Encontraste todos los pares.'
  };
  const completar = {
    tipo: 'completar', titulo: 'Completa nuestra frase', frase: 'Lo más bonito de hacer familia es sentir que somos un ___.',
    opciones: ['equipo', 'concurso', 'misterio'], correcta: 0, ok: 'Un equipo, especialmente en las cosas pequeñas.'
  };
  const ordenar = {
    tipo: 'ordenar', titulo: 'Del encuentro al aniversario',
    eventos: ['Nos encontramos en la posada del trabajo', 'Empezamos a escribir nuestra historia', 'Llegó nuestro bebé', 'Celebramos este aniversario'],
    ok: 'Así llegamos hasta este capítulo.'
  };
  const adivina = {
    tipo: 'adivinanza', titulo: 'Una pista de diciembre',
    texto: 'Tengo luces de diciembre y reuní a dos personas del mismo trabajo. ¿Qué celebración soy?',
    pista: 'Empiezo con P.', respuestas: ['posada', 'la posada', 'posada del trabajo'], ok: 'La posada que nos hizo coincidir.'
  };
  const quizFamilia = {
    tipo: 'quiz', titulo: 'Nuestro nuevo papel', pregunta: '¿Quién abrió un capítulo nuevo en nuestra historia?',
    opciones: ['Un director de cine', 'Nuestro bebé', 'Una actriz invitada'], correcta: 1,
    ok: 'Nuestro bebé. Desde su llegada hay mucho más amor que contar.'
  };
  const codigo = {
    tipo: 'codigo', titulo: 'El día que celebramos', modo: 'fecha', pregunta: '¿Cuándo celebramos nuestro aniversario?',
    placeholder: 'DDMM', respuestas: ['1812', '18/12', '18122026', '18/12/2026'], pista: 'Día y mes, en cuatro números.',
    ok: '18 de diciembre. Feliz aniversario, Blanca Estela.'
  };

  const episodio = (titulo, descripcion, escenas, interaccion = null) => ({
    titulo, descripcion, duracion: 56, escenas, interaccion, recompensa: ''
  });
  const titulo = (num, tipo, nombre, imagen, pista, sinopsis, episodios) => ({
    num, tipo, titulo: nombre, anio: 2026, clasificacion: 'TP', imagen: portada(imagen),
    musica: pistas[pista].ruta, cancion: pistas[pista].titulo, sinopsis, top10: num < 3,
    creditos: [['Para', destinataria]], episodios
  });
  const pelicula = (num, nombre, imagen, pista, sinopsis, escenas, juego) =>
    titulo(num, 'pelicula', nombre, imagen, pista, sinopsis, [episodio(nombre, sinopsis, escenas, juego)]);

  c.temporadas.push(
    pelicula(0, 'Desde aquella posada', 'estrella', 5, 'Una fiesta del trabajo fue el comienzo de la historia.', [
      movimiento('luces', 'Nos conocimos en una posada del trabajo.'),
      ambiente('estrella', 'De todas las personas que podían coincidir esa noche,', 'nos tocó coincidir a nosotros.'),
      ambiente('esferas', 'Todavía no sabíamos lo que vendría después.'),
      video('primer-retrato', 'Hoy vuelvo a pensar en aquel encuentro', 'y en la vida que empezó a abrirse desde ahí.'),
      escena('juntos', 'Qué suerte, Blanca Estela, que nos encontramos.')
    ], encuentro),
    pelicula(1, 'Lo que veo cuando te miro', 'perfil-blanca', 2, 'Un retrato de Blanca Estela hecho de gestos y de cariño.', [
      escena('perfil-blanca', 'Entre todas nuestras fotos, siempre termino buscándote a ti.'),
      escena('cena', 'Me gusta esa mirada que pone atención', 'cuando te estoy contando algo.'),
      video('luz-de-tarde', 'Me gusta también cuando una foto te agarra sin posar.'),
      escena('abrazo', 'Y la facilidad con la que me dan ganas de acercarme.'),
      escena('palmeras', 'Qué gusto tenerte cerca, Blanca Estela.')
    ]),
    pelicula(2, 'Una mesa para dos', 'cena', 3, 'Una pausa para brindar y volver a conversar sin mirar el reloj.', [
      escena('cena', 'Volví a mirar esta foto de nuestra cena.'),
      escena('balcon', 'Se me antojó otro brindis contigo', 'y el tiempo suficiente para quedarnos platicando.'),
      movimiento('mar', '¿Qué fue lo mejor de tu día?'),
      escena('abrazo', 'Quiero seguir haciéndote esa pregunta', 'y tener tiempo de escuchar la respuesta.'),
      ambiente('costa', 'Y que las cosas sencillas nos sigan dando ganas de celebrar.')
    ]),
    pelicula(3, 'Mazatlán en cinco postales', 'mazatlan', 4, 'Agua azul, atardeceres y recuerdos de la costa.', [
      video('mazatlan', 'Mazatlán, en nuestro álbum.'),
      video('alberca', 'El azul de la alberca y un ratito juntos.'),
      escena('palmeras', 'Un cielo que se puso rosa.'),
      movimiento('olas', 'El mar detrás de tantas de nuestras fotos.'),
      escena('collage', 'Cinco maneras de volver a un lugar con solo mirar.')
    ], memoria),
    pelicula(4, 'Cuando llegaste, bebé', 'familia', 7, 'Lo que se siente al mirar crecer la historia de los tres.', [
      video('juegos-en-la-arena', 'A nuestra historia llegó alguien muy pequeño.'),
      video('sonrisa', 'Y ahora una sonrisa tuya puede cambiarnos toda la tarde, bebé.'),
      escena('familia', 'Ojalá cuando veas estas fotos sepas cuánto cariño te rodeaba.'),
      video('pasos-en-la-arena', 'Seguimos aprendiendo a ser tu familia.'),
      escena('de-la-mano', 'Y tenemos tantas ganas de verte crecer.')
    ], quizFamilia),
    pelicula(5, 'Hacemos equipo', 'juntos', 6, 'Una declaración de amor para los días que pasan entre pendientes.', [
      escena('juntos', 'Hay días en los que todo pasa de prisa.'),
      video('retrato-verde', 'Quiero aprender a mirar qué falta por hacer', 'y arrimar el hombro antes de que tengas que pedirlo.'),
      escena('cena', 'Y cuando podamos sentarnos, quiero saber cómo estás tú.'),
      ambiente('costa', 'Quiero que a los dos nos quede un rato para descansar.'),
      escena('familia', 'Eso también es cuidarnos como familia.')
    ], completar),
    pelicula(6, 'Quédate tantito', 'balcon', 0, 'La canción de Rels B acompaña los momentos que dan ganas de alargar.', [
      video('balcon-recuerdo', 'Hay ratos que quisiera guardar completos.'),
      escena('palmeras', 'La luz cuando se acaba la tarde.'),
      escena('juntos', 'La forma en que cabe la calma en un abrazo.'),
      video('baile-en-la-orilla', 'Esa alegría que dan ganas de estirar un poquito más.'),
      escena('playa', 'Quédate tantito, Blanca Estela.')
    ]),
    pelicula(7, 'Gracias en voz baja', 'abrazo', 1, 'Un agradecimiento por las formas sencillas de acompañarse.', [
      escena('abrazo', 'Gracias por compartir conmigo lo que te alegra y lo que te preocupa.'),
      escena('de-la-mano', 'Por dejarme estar cerca mientras aprendemos a ser familia.'),
      movimiento('mar', 'Por todas las pequeñas decisiones que tomamos pensando en nuestro bebé.'),
      escena('balcon', 'Gracias por hacerle un huequito a lo nuestro en medio del día.'),
      video('luz-de-tarde', 'Me hace feliz estar construyendo esto contigo.')
    ]),
    pelicula(8, 'Antes y ahora', 'retrato-verde', 5, 'Del primer encuentro a un álbum que también cuenta la historia de su bebé.', [
      ambiente('esferas', 'Al principio éramos dos personas en la misma posada.'),
      video('retrato-verde', 'Después empezamos a formar parte de la vida del otro.'),
      escena('collage', 'Nuestra historia fue llenándose de imágenes como estas.'),
      video('sonrisa', 'Y llegó nuestro bebé, con toda una vida por delante.'),
      escena('familia', 'También cambió lo que imaginamos cuando pensamos en el futuro.')
    ], ordenar),
    pelicula(9, 'Lo que sueño contigo', 'de-la-mano', 8, 'El futuro imaginado en días concretos y planes compartidos.', [
      movimiento('olas', 'Sueño con volver al mar cuando nuestro bebé pueda correr por la arena.'),
      escena('cena', 'Con encontrar días para una cena de los dos.'),
      escena('de-la-mano', 'Con preguntarte por tus metas', 'y ayudarte a hacerles espacio.'),
      video('horizonte', 'Con seguir buscando juntos el rumbo que tenga sentido para los tres.'),
      escena('palmeras', 'Todavía me da ilusión todo lo que podemos hacer.')
    ]),
    pelicula(10, 'Diciembre tiene una historia', 'esferas', 2, 'Las luces de diciembre traen de vuelta el recuerdo de cómo se conocieron.', [
      ambiente('esferas', 'Cuando llega diciembre pienso en aquella fiesta del trabajo.'),
      movimiento('luces', 'Ahora las luces me hacen pensar en los que éramos entonces.'),
      ambiente('estrella', 'Me pregunto qué habríamos dicho si alguien nos contaba el resto.'),
      escena('juntos', 'Que llegaríamos hasta aquí.'),
      video('a-la-orilla', 'Que esto sería una de mis imágenes favoritas de nosotros.')
    ], adivina),
    pelicula(11, '18 de diciembre', 'playa', 8, 'Un aniversario para mirar hacia atrás y brindar por lo que viene.', [
      escena('playa', '18 de diciembre de 2026.'),
      escena('balcon', 'Hoy brindo por la suerte de haberte conocido.'),
      video('baile-en-la-orilla', 'Por las risas que todavía tenemos pendientes.'),
      escena('familia', 'Y por nuestro bebé, que hace este capítulo tan especial.'),
      video('horizonte', 'Feliz aniversario, Blanca Estela. Te amo.')
    ], codigo),
    titulo(12, 'serie', 'Conversaciones de dos', 'palmeras', 0, 'Dos ratos para hablar del cariño y de cómo queremos cuidarlo.', [
      episodio('¿Cómo amaneciste?', 'Los pequeños gestos que hacen bien.', [
        escena('balcon', 'Me gusta saber cómo amaneciste.'),
        video('balcon-recuerdo', 'Y cómo te fue cuando te alcanzo al final del día.'),
        escena('cena', 'Me gusta cuando una conversación empieza con algo chiquito', 'y acaba haciéndonos reír.'),
        ambiente('costa', 'Quiero que sigamos encontrando esos ratitos.'),
        escena('palmeras', 'Todavía me queda tanto por conocer de ti.')
      ]),
      episodio('Cuando haga falta hablar', 'Escucharse también es una forma de quererse.', [
        movimiento('mar', 'Si el día pesa, quiero que encuentres espacio para contármelo.'),
        escena('perfil-blanca', 'Quiero escuchar hasta el final y preguntarte qué necesitas.'),
        video('alberca', 'Y cuando sea posible, hacer una pausa para volver a respirar juntos.'),
        escena('juntos', 'Quiero aprender a decirte también lo que me pasa.'),
        escena('abrazo', 'Y encontrar juntos las palabras que nos hagan bien.')
      ])
    ]),
    titulo(13, 'serie', 'Una familia en crecimiento', 'familia', 7, 'Dos capítulos sobre la llegada de su bebé y lo que desean darle.', [
      episodio('Un lugar para ti', 'La ternura de mirar al bebé y pensar en su futuro.', [
        video('entre-hojas', 'A veces me quedo mirándote, bebé, y me pregunto cómo verás el mundo.'),
        escena('familia', 'Pronto vas a inventar tus propios juegos.'),
        video('sonrisa', 'Y habrá palabras tuyas que todos vamos a querer guardar.'),
        ambiente('costa', 'Quiero estar ahí para que me cuentes lo que te sorprenda.'),
        escena('de-la-mano', 'Y para darte la mano mientras descubres lo demás.')
      ]),
      episodio('Lo que queremos darte', 'El tipo de hogar que sueñan construir juntos.', [
        video('pasos-en-la-arena', 'Me gustaría que encuentres cariño en casa incluso en los días difíciles.'),
        video('primer-retrato', 'Que puedas preguntarnos todo.'),
        escena('abrazo', 'Que nos veas pedir perdón y empezar de nuevo.'),
        movimiento('olas', 'Que tengas tiempo de jugar y espacio para equivocarte.'),
        video('horizonte', 'Y que siempre sepas que puedes volver a nuestros brazos.')
      ])
    ]),
    titulo(14, 'serie', 'Todavía por escribir', 'costa', 6, 'Dos capítulos para imaginar el tiempo que viene.', [
      episodio('El próximo paseo', 'Una idea para cuando haya tiempo para los tres.', [
        ambiente('costa', '¿Y si volvemos al mar cuando se pueda?'),
        video('mazatlan', 'Me gustaría dejar un día entero sin planes.'),
        escena('playa', 'Caminar descalzos sin preocuparnos por la hora.'),
        video('juegos-en-la-arena', 'Que el bebé juegue hasta cansarse.'),
        escena('collage', 'Y que al volver tengamos otra foto para esta colección.')
      ]),
      episodio('Donde estemos', 'Un deseo de aniversario para la vida de todos los días.', [
        escena('cena', 'Imagino más cenas como esta y más mañanas en casa.'),
        escena('perfil-blanca', 'Imagino celebrar esas metas tuyas que tú misma elijas.'),
        video('retrato-verde', 'Y seguir haciendo tiempo para preguntarnos qué queremos ahora.'),
        escena('palmeras', 'Me emociona conocer todas las formas en las que vamos a crecer.'),
        video('horizonte', 'Lo demás, Blanca Estela, lo escribimos juntos.')
      ])
    ])
  );

  c.extras = [
    { titulo: 'La posada del trabajo', img: 'assets/ambiente/estrella.webp', texto: 'Allí nos conocimos. Cada diciembre me acuerdo de la suerte de encontrarte.' },
    { titulo: 'De paseo', img: f('collage'), texto: 'Mazatlán, el mar y el gusto de tener un rato juntos.' },
    { titulo: 'Nuestro bebé', img: f('familia'), texto: 'Me da ilusión imaginar lo que nos contarás cuando crezcas.' },
    { titulo: 'Nuestro aniversario', img: f('playa'), texto: fecha }
  ];
  Object.assign(c.final, {
    titulo: 'Para ti, Blanca Estela', imagen: portada('de-la-mano'),
    sinopsis: 'Una carta de aniversario para recordar cómo empezó todo y lo que queremos seguir construyendo.',
    preguntas: ['¿Qué recuerdas de la posada en que nos conocimos?', '¿Qué foto guardarías primero en nuestro álbum?', '¿Qué momento con nuestro bebé te hace sonreír?', '¿Qué sueño te gustaría que construyéramos juntos?'],
    carta: () => historia
  });
  c.creditos = [
    ['Para', destinataria], ['Aniversario', fecha], ['El comienzo', 'Nuestra posada del trabajo'],
    ['Banda sonora', pistas.map(pista => pista.titulo).join(' · ')], ['Ambientación', 'Imágenes y clips de Pexels y Unsplash']
  ];
  c.postCreditos = {
    imagen: f('de-la-mano'), etiqueta: 'DESPUÉS DE LOS CRÉDITOS', texto: 'Blanca Estela',
    anuncio: 'Todavía nos quedan capítulos', subtitulo: 'Feliz aniversario, 18 de diciembre de 2026.',
    sorpresa: 'Gracias por esta familia. Te amo.'
  };
  window.CLIENT_MEDIA = {
    fotos: fotos.slice(0, 8).map(nombre => ({ ruta: f(nombre) })),
    videos: ['alberca', 'balcon-recuerdo', 'mazatlan', 'primer-retrato', 'luz-de-tarde', 'entre-hojas', 'juegos-en-la-arena', 'retrato-verde', 'pasos-en-la-arena', 'a-la-orilla', 'sonrisa', 'baile-en-la-orilla', 'horizonte'].map(nombre => ({
      ruta: `assets/video/${nombre}.mp4`, poster: f(`${nombre}-poster`)
    }))
  };
})();

/* Juntos por siempre · Luis Escalante para Amor */
(() => {
  const c = window.TDN;
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, "0")}.webp`;
  const score = slug => `assets/audio/${slug}.mp3`;
  const scene = (n, ...texto) => ({ img: foto(n), texto });
  const ambient = (slug, ...texto) => ({ img: `assets/fotos/${slug}.webp`, texto });
  const clip = (slug, ...texto) => ({
    img: `assets/video/${slug}.mp4`, poster: `assets/fotos/${slug}.webp`, texto
  });

  const now = new Date();
  const anios = Math.max(0, now.getFullYear() - 2023 -
    Number(now.getMonth() < 9 || (now.getMonth() === 9 && now.getDate() < 13)));
  c.pareja = {
    nombreA: "Luis", nombreB: "Amor",
    nombreCompletoA: "Luis Escalante", nombreCompletoB: "Amor",
    apodos: ["Amor"], apodo: "Amor", fechaInicio: "2023-10-13",
    fechaCodigo: "13102023", anioInicio: 2023, anios,
    primeraCita: "El 9 de septiembre, con un desayuno que estaba súper salado",
    viajes: ["Acuario Michin", "Mundo Inmersivo Disney", "Teotihuacán", "Pueblos Mágicos", "La playa"],
    anecdota: "Cuando te pedí que fueras mi novia me preguntaste «¿Estás seguro?»",
    suenos: ["Seguir descubriendo lugares juntos", "Acompañarnos en nuestras metas", "Hacernos tiempo para seguir teniendo citas"],
    mensajeFinal: "Amor, si hoy me volvieras a preguntar si estoy seguro, volvería a elegirte. — Luis"
  };
  c.fotos = {
    hero: "assets/fotos/hero.webp", perfilB: foto(19), perfilPareja: foto(13),
    t0: foto(4), t1: foto(38), t2: foto(15), t3: foto(26), t4: foto(32), t5: foto(45),
    final: portada(13), postCreditos: foto(21)
  };
  c.media = { intro: "assets/audio/intro.mp3", videoFinal: "assets/video/para-amor.mp4" };
  c.acceso = {
    demo: false, password: "ae3d2e8691de543507d39df74f5938c51f12d1bc5edddc7f11705db76c712a5f",
    pistaPassword: "Nuestro aniversario en seis dígitos (día, mes y año).", estreno: ""
  };
  c.notificacion = { whatsapp: "525585310368" };
  c.sitio = {
    url: "https://streaming-us.rotfstudio.com/clientes/luis-stephani-149/sitio/index.html", coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Romance y aventuras",
    heroTag: "PARA AMOR", heroTop: "De Luis Escalante",
    sinopsis: "Todo empezó con un desayuno demasiado salado y un «¿Estás seguro?». Desde el 13 de octubre de 2023, la mejor parte de cada plan es compartirlo contigo.",
    generos: ["Romance", "Aniversario", "Viajes"]
  };

  const episode = (titulo, descripcion, track, poster, escenas, interaccion = null) => {
    const seconds = escenas.length * 8;
    return {
      titulo, descripcion, duracion: 6 + seconds, imagen: portada(poster),
      musica: score(`${track[0]}-${seconds}`), cancion: track[1], escenas, interaccion
    };
  };
  const film = (num, ...details) => {
    const ep = episode(...details);
    return {
      num, tipo: "pelicula", titulo: ep.titulo, anio: 2023, clasificacion: "TP", imagen: ep.imagen,
      musica: ep.musica, cancion: ep.cancion, sinopsis: ep.descripcion,
      creditos: [["Para", "Amor"], ["De", "Luis Escalante"]], episodios: [ep]
    };
  };
  const series = (num, titulo, sinopsis, poster, episodios) => ({
    num, tipo: "serie", titulo, sinopsis, anio: 2023, clasificacion: "TP",
    imagen: portada(poster), cancion: [...new Set(episodios.map(ep => ep.cancion))].join(" · "),
    creditos: [["Protagonistas", "Luis y Amor"]], episodios
  });
  const tracks = {
    asi: ["asi-eres-tu", "Así Eres Tú — Maelo Ruiz"],
    pelo: ["en-tu-pelo", "En Tu Pelo — Javier Solís"],
    jamas: ["jamas", "Jamás — Eddie Santiago"],
    nina: ["nina-de-mi-corazon", "Niña de Mi Corazón — La Arrolladora Banda El Limón"],
    modos: ["de-todos-los-modos", "De Uno y de Todos los Modos — Palomo"],
    faltes: ["que-no-me-faltes-tu", "Que No Me Faltes Tú — Los Diablitos"],
    amarte: ["amarte-es-un-placer", "Amarte Es Un Placer — Luis Miguel"],
    sol: ["como-un-sol", "Como un Sol — Inspector"],
    viento: ["viento", "Viento — Caifanes"],
    razon: ["tu-eres-la-razon", "Tú Eres La Razón — La Arrolladora Banda El Limón"]
  };

  c.temporadas = [
    film(0, "Un desayuno con historia",
      "Las primeras pláticas, una invitación el 9 de septiembre y un desayuno que se pasó de sal.", tracks.asi, 4, [
        scene(37, "Amor, antes de que existiera un «nosotros»,", "empezamos por lo más sencillo: platicar."),
        scene(39, "Entre una plática y otra", "me daban más ganas de conocerte."),
        ambient("desayuno", "El 9 de septiembre te invité a salir.", "Para nuestra primera cita fuimos a desayunar."),
        scene(4, "¿Te acuerdas de lo salado que estaba?", "Todavía me río cuando pienso en ese desayuno."),
        scene(40, "Volvería a invitarte a ese desayuno.", "Aunque esta vez pediría la sal aparte.")
      ], {
        tipo: "quiz", titulo: "El detalle del desayuno", pregunta: "¿Qué tuvo de chusco nuestra primera cita?",
        opciones: ["El desayuno estaba súper salado.", "Nos trajeron el postre primero.", "Se nos enfrió el café."],
        correcta: 0, ok: "¡Sí! Todavía me río cuando me acuerdo."
      }),
    film(1, "¿Estás seguro?",
      "Luis recuerda los nervios de hacer la pregunta y la respuesta que todavía le hace sonreír.", tracks.jamas, 38, [
        scene(8, "Cuando te pedí que fueras mi novia,", "estaba muy nervioso."),
        scene(42, "Y tú me contestaste con otra pregunta:", "«¿Estás seguro?»"),
        scene(38, "Nunca se me olvidó cómo me lo preguntaste.", "Ahora lo recuerdo y sonrío."),
        scene(1, "13 de octubre de 2023.", "Nuestra fecha desde entonces."),
        scene(13, "Si me lo preguntaras hoy, Amor,", "sí, volvería a elegirte.")
      ], {
        tipo: "codigo", titulo: "La fecha de los dos", pregunta: "¿Qué fecha celebramos como nuestro aniversario?",
        modo: "fecha", placeholder: "DD/MM/AAAA", respuestas: ["13102023"],
        pista: "Fue en octubre de 2023. Escribe el día, el mes y el año completo.",
        ok: "13 de octubre de 2023. Nuestra fecha."
      }),
    film(2, "Entre luces y agua",
      "El Acuario Michin, el Mundo Inmersivo Disney y el gusto de quedarnos mirando juntos.", tracks.sol, 45, [
        scene(45, "El Acuario Michin es de mis citas favoritas.", "Me gusta tener una foto nuestra entre tanto azul."),
        clip("medusas", "Hay lugares que invitan a caminar más despacio.", "Me gusta descubrirlos contigo."),
        scene(20, "También guardo con cariño nuestra salida", "al Mundo Inmersivo Disney."),
        scene(6, "Y me encantan nuestros planes de cine,", "hasta la foto con lentes antes de la función."),
        scene(35, "Todavía quiero muchas citas así contigo.", "Siempre encontramos algo que comentar al salir.")
      ]),
    film(3, "Una noche en Teotihuacán",
      "El recuerdo de acampar juntos y una invitación a hacer tiempo para otra escapada.", tracks.viento, 21, [
        ambient("teotihuacan", "Entre mis escapadas favoritas", "está la vez que acampamos en Teotihuacán."),
        ambient("campamento", "Me hace ilusión volver a acampar contigo.", "Hacernos un espacio lejos de la rutina."),
        scene(9, "Me gusta ver el cielo cambiar contigo.", "Aunque haga frío, siempre puedo acercarme más."),
        scene(23, "También me gusta acordarme de otros paseos,", "como este, con lluvia y luces en el puente."),
        scene(21, "¿Dónde nos tocará ver el próximo atardecer?", "Me gustaría escoger el lugar contigo.")
      ]),
    film(4, "De pueblo en pueblo",
      "Los cascos de El Oro, el letrero de Huasca y las ganas de volver a tomar carretera.", tracks.pelo, 26, [
        scene(10, "En El Oro hasta nos pusimos casco para la foto.", "Me encanta que hagamos esas tonterías juntos."),
        scene(11, "De pronto, sentarnos en una banca", "también es parte del paseo."),
        scene(27, "En Huasca nos quedó esta foto bajo el letrero.", "Me gusta cómo nos miramos."),
        scene(26, "Y esta otra, frente al agua y de la mano.", "Siempre me detengo un poquito al verla."),
        scene(22, "Tenemos más Pueblos Mágicos por conocer.", "En el siguiente, tú eliges por dónde empezar.")
      ]),
    film(5, "Lo que guarda el mar",
      "Una escapada a la playa, un dibujo que se lleva el agua y las ganas de regresar.", tracks.razon, 32, [
        scene(33, "También guardo con mucho cariño", "nuestras escapadas a la playa."),
        clip("olas", "Me gusta quedarme contigo un ratito", "viendo cómo van y vienen las olas."),
        clip("dibujo-en-la-arena", "La ola se llevó el dibujo.", "Por suerte, alcanzamos a grabarlo."),
        scene(32, "La próxima vez hagamos otro.", "Y quedémonos un poquito más en la orilla."),
        scene(43, "Me encantan todos nuestros planes cerca del agua.", "De remar juntos a quedarnos viendo el mar.")
      ]),
    film(6, "En cada momento",
      "Un gracias por los días difíciles, los logros compartidos y todo lo que cabe entre unos y otros.", tracks.faltes, 15, [
        scene(46, "Gracias por estar conmigo", "en los días buenos y en los difíciles."),
        scene(15, "Me da gusto mirar esta foto de mi graduación", "y verte a mi lado en un día tan importante."),
        scene(47, "Quiero aprender a preguntarte qué necesitas", "y a decirte también cuándo necesito ayuda."),
        scene(19, "Y quiero ser el primero en emocionarme", "cuando me cuentes que algo te salió bien."),
        scene(5, "Gracias por hacer equipo conmigo, Amor.", "Cuenta conmigo para lo que venga.")
      ]),
    film(7, "Todo lo que nos espera",
      "Luis le cuenta a Amor qué quiere seguir cuidando y qué planes le gustaría compartir.", tracks.amarte, 28, [
        scene(18, "Me emociona pensar en los planes", "que todavía podemos inventar juntos."),
        scene(28, "Quiero que me cuentes qué te gustaría lograr.", "Me hace ilusión acompañarte mientras lo consigues."),
        scene(36, "También quiero contarte lo que sueño", "y hacer espacio para los planes de los dos."),
        scene(14, "Que sigamos buscando ratitos para platicar,", "aunque sea en el camino de regreso a casa."),
        scene(48, "Con todo lo que ya vivimos, Amor,", "qué ganas de ver qué sigue.")
      ]),
    series(8, "Los días que guardo",
      "Tres episodios sobre conocerse mejor, hacer el ridículo juntos y encontrar ratitos para una cita.", 25, [
        episode("El gusto de conocerte", "Las primeras pláticas y todo lo que Luis ha ido descubriendo al conocerla.",
          tracks.nina, 41, [
            scene(41, "Me acuerdo de cuando apenas nos conocíamos.", "Todavía me gusta aprender cosas nuevas de ti."),
            scene(3, "Hemos descubierto qué nos gusta", "y cómo acompañarnos cuando algo nos cuesta."),
            scene(12, "Quiero que sigamos haciéndonos preguntas.", "Siempre nos queda algo por contarnos.")
          ], {
            tipo: "ordenar", titulo: "Cómo empezó todo",
            eventos: [
              "Empezamos a platicar y a conocernos.",
              "Salimos a desayunar el 9 de septiembre.",
              "Te pedí que fueras mi novia.",
              "Nos hicimos novios y seguimos conociéndonos como pareja."
            ],
            ok: "¡Así empezó nuestra historia!"
          }),
        episode("Citas que se vuelven anécdota", "Entre jirafas, lluvia y fotos juguetonas, el plan se vuelve recuerdo.",
          tracks.viento, 24, [
            scene(44, "Hay días en que hasta la lluvia sale en la foto.", "Y una jirafa también, si tenemos suerte."),
            scene(24, "Me gusta que contigo pueda hacer estas caras", "y que nos dé risa ver la foto después."),
            scene(25, "Que nunca perdamos las ganas de jugar,", "sobre todo cuando nos topemos con otra carreta.")
          ]),
        episode("Hagamos tiempo", "Luis quiere seguir haciendo espacio para los planes sencillos.",
          tracks.asi, 2, [
            scene(2, "Me siguen dando ganas de preguntarte:", "«¿Qué se te antoja hacer hoy?»"),
            scene(17, "También cuentan las salidas sin plan perfecto", "y las fotos que salen con la luz atravesada."),
            scene(7, "Quiero guardar más tardes así contigo.", "Con un ratito juntos ya tenemos por dónde empezar.")
          ])
      ]),
    series(9, "Aquí contigo",
      "Una temporada de agradecimientos, celebraciones y planes para el siguiente capítulo.", 30, [
        episode("Estar cuando importa", "Una dedicatoria por estar presente y hacer equipo.",
          tracks.modos, 16, [
            scene(49, "Gracias por hacer espacio en tu día", "cuando algo es importante para mí."),
            scene(16, "Quiero que también puedas apoyarte en mí.", "Para celebrar, desahogarte o decidir qué sigue."),
            scene(15, "Cuando veo esta foto, me acuerdo de eso:", "qué bonito es tenerte ahí.")
          ]),
        episode("Brindemos por ti", "Los detalles que dan ganas de volver a celebrar.",
          tracks.pelo, 30, [
            scene(30, "Me encanta encontrar formas de celebrarte.", "Esta foto con la Sirenita me hace sonreír."),
            scene(31, "Quiero seguir acordándome de esos detalles", "que a ti te hacen ilusión."),
            scene(34, "También quiero seguir brindando contigo", "por otro año de nuestra historia.")
          ]),
        episode("Nuestra próxima cita", "El futuro visto desde un plan sencillo que todavía pueden hacer juntos.",
          tracks.amarte, 13, [
            scene(29, "Me quedan ganas de más viajes", "y de más días tranquilos a tu lado."),
            scene(13, "Hoy, si tengo que elegir un plan,", "me dan ganas de invitarte a desayunar otra vez."),
            scene(21, "Esta vez, yo le pongo poquita sal.", "Te amo, Amor. — Luis")
          ])
      ])
  ];
  c.extras = [
    { titulo: "El desayuno", img: foto(4), texto: "9 de septiembre. Nuestra primera cita y el desayuno más salado." },
    { titulo: "A tu lado", img: foto(15), texto: "Gracias por estar conmigo en días que siempre voy a recordar." },
    { titulo: "De pueblo en pueblo", img: foto(26), texto: "De El Oro a Huasca, todavía nos quedan muchas escapadas." },
    { titulo: "Nuestro aniversario", img: foto(13), texto: "13 de octubre de 2023. Te volvería a elegir, Amor." }
  ];
  c.final = {
    titulo: "Si me lo preguntas otra vez", imagen: portada(13),
    sinopsis: "Cinco preguntas para Amor, una carta de Luis y un último video juntos.",
    preguntas: [
      "¿Qué es lo primero que recuerdas de nuestra cita del 9 de septiembre?",
      "¿Cuál de nuestras escapadas volverías a hacer conmigo?",
      "¿En qué momento sentiste más que hacíamos equipo?",
      "¿Qué te gustaría que hiciéramos juntos en el próximo capítulo?",
      "Si pudieras dejarme un mensaje al final de la película, ¿qué me dirías?"
    ],
    carta: () => [
      "Amor:",
      "¿Te acuerdas de nuestro primer desayuno? Estaba tan salado que todavía me da risa acordarme. Qué bueno que el 9 de septiembre me animé a invitarte. Y qué nervioso estaba cuando te pedí que fueras mi novia y me contestaste «¿Estás seguro?». Cada 13 de octubre me da gusto volver a pensar en esos días.",
      "Desde entonces hemos aprendido qué nos gusta, qué se nos da bien y qué nos cuesta. Gracias por tenerme paciencia y por dejarme acompañarte cuando tú lo necesitas. Gracias por estar en mi graduación y en tantos momentos importantes, y por hacer espacio también para los días complicados.",
      "Me encanta que en nuestro álbum quepan el Acuario Michin, Disney, acampar en Teotihuacán, un casco de minero en El Oro y un dibujo que se llevó el mar. Todavía quiero descubrir más lugares contigo. También quiero tener tiempo para las citas cerquita de casa y para que nos contemos cómo nos fue.",
      "Quiero saber qué metas te ilusionan y estar ahí para festejar tus avances. Quiero que sigamos aprendiendo a apoyarnos, a decirnos qué necesitamos y a reírnos cuando los planes salgan tan salados como el primero.",
      "Si hoy me lo preguntas otra vez, sí, Amor. Estoy seguro de que volvería a invitarte a salir. Y volvería a elegirte.",
      "Te amo.\nLuis Escalante"
    ].join("\n\n")
  };
  c.creditos = [
    ["Para", "Amor"], ["De", "Luis Escalante"], ["Aniversario", "13 de octubre de 2023"],
    ["Banda sonora", Object.values(tracks).map(([, title]) => title).join(" · ")],
    ["Imágenes de ambiente", "Daniela Constantini y Necati Ömer Karpuzoğlu (Pexels) · Gary Todd (Wikimedia Commons, CC0)"],
    ["Videos de ambiente", "Chris Munnik y Kindel Media (Pexels)"], ["", "Continuará ♡"]
  ];
  c.postCreditos = {
    imagen: foto(21), etiqueta: "ESCENA POST-CRÉDITOS", texto: "Amor, ¿y si salimos a desayunar otra vez?",
    anuncio: "Continuará", subtitulo: "Nos vemos en la próxima cita.",
    sorpresa: "Esta vez, yo le pongo poquita sal. Te amo. — Luis"
  };
})();

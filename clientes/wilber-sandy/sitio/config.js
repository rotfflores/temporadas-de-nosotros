/* Nuestro capítulo · edición privada de Wilber y Sandy. */
(() => {
  const A = "Wilber Gómez", B = "Sandy López", anniversary = "17 de noviembre";
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const portada = (n) => `assets/fotos/${n}.webp`;
  const ambient = (n) => `assets/ambiente/${n}.webp`;
  const tracks = [
    ["Amor — Emmanuel Cortés", "amor"],
    ["Neverita — Bad Bunny", "neverita"],
    ["Nena — Grupo Súper T", "nena"],
    ["Quiero volar", "quiero-volar"]
  ].map(([cancion, key]) => ({ cancion, musica: `assets/audio/${key}-climax.mp3` }));
  const still = (img, ...texto) => ({ img: typeof img === "number" ? foto(img) : img, texto });
  const clip = (folder, name, ...texto) => ({
    video: `assets/${folder}/${name}.mp4`, poster: `assets/${folder}/${name}.webp`, texto
  });
  const episode = (titulo, descripcion, track, escenas) => ({
    titulo, descripcion, duracion: 68, ...tracks[track], escenas
  });
  const film = (num, poster, titulo, sinopsis, track, escenas) => ({
    num, tipo: "pelicula", titulo, imagen: portada(poster), anio: 2026, clasificacion: "TP", sinopsis,
    ...tracks[track], top10: num === 0, creditos: [["Protagonistas", `${A} y ${B}`]],
    episodios: [episode(titulo, sinopsis, track, escenas)]
  });
  const temporadas = [
    film(0, "llamada", "Todo empezó con una llamada",
      "Wilber nunca imaginó que una llamada con Sandy sería el comienzo de un libreto que querría releer toda la vida.", 0, [
        still(ambient("libreta"), "¿Quién iba a pensar que una llamada nos haría escribir este libreto de amor?"),
        still(6, "Me gusta volver a ese comienzo y pensar en todo lo que todavía no sabíamos."),
        still(3, "Antes de todos estos recuerdos, lo primero que tuve de ti fue tu voz."),
        still(2, "Qué suerte que aquella llamada no se quedó en un solo capítulo."),
        still(15, "Sandy, si pudiera volver a ese instante, me encantaría escucharte por primera vez otra vez.")
      ]),
    film(1, "amor", "Lo que me enseñaste del amor",
      "Una película para darle las gracias a Sandy por su manera de querer y por hacerle conocer el amor.", 2, [
        still(14, "Gracias por llegar a mi vida y hacerme conocer el amor."),
        still(17, "A veces lo encuentro en algo tan sencillo como la forma en que me abrazas."),
        still(20, "Me gusta que podamos guardar recuerdos hasta en los días en que no planeamos nada especial."),
        clip("video", "recuerdo", "Qué bonito poder darle play a un recuerdo y sentirte cerca."),
        still(18, "Te amo, Sandy López. Desde lo más profundo de mi corazón.")
      ]),
    film(2, "recuerdos", "Si pudiera repetir un día",
      "Paseos, luces de noche y sonrisas que Wilber volvería a ver una y otra vez.", 1, [
        still(16, "Podría pasarme un buen rato viendo estas fotos y recordando cómo se sentía estar ahí contigo."),
        still(11, "Me gusta cómo nos vemos juntos, incluso cuando solo estamos mirando a la cámara."),
        still(12, "Entre todas nuestras fotos, siempre termino sonriendo al volver a la del tren."),
        still(13, "Dos fotos del mismo paseo, y aun así me quedo con las dos."),
        still(10, "También me guardo la luz de esa noche y tu cara al lado de la mía."),
        still(8, "Si pudiera volver a uno de esos días, seguro acabaría queriendo repetirlos todos.")
      ]),
    film(3, "aniversario", "Cada 17 de noviembre",
      "Una dedicatoria de aniversario: lo que Wilber agradece hoy y cómo quiere cuidar lo que comparten.", 3, [
        still(7, "El 17 de noviembre me da una excusa para decirte con calma cuánto te amo."),
        still(1, "Gracias por las sonrisas que aparecen cuando volvemos a ver lo que hemos vivido."),
        still(22, "Quiero que podamos hablarnos con la misma confianza aunque pasen los años."),
        clip("ambiente", "atardecer", "Quiero que sigamos haciendo tiempo para estar juntos, incluso cuando la semana se llene de cosas."),
        still(5, "Feliz aniversario, Sandy. Qué ganas de seguir escribiendo esta historia contigo.")
      ]),
    {
      num: 4, tipo: "serie", titulo: "El libreto sigue abierto", imagen: portada("futuro"),
      anio: 2026, clasificacion: "TP", ...tracks[3],
      sinopsis: "Tres episodios sobre los detalles que Wilber guarda, los caminos que le ilusionan y las páginas que todavía quiere escribir con Sandy.",
      creditos: [["Protagonistas", `${A} y ${B}`], ["Guion", "Todavía lo escribimos juntos"]],
      episodios: [
        episode("Lo que cabe en una foto", "Los detalles que dan ganas de volver a mirar.", 1, [
          still(9, "Me gusta esta foto porque basta ver nuestras caras para acordarme del gusto de estar juntos."),
          still(4, "También quiero guardar estas fotos tuyas, hasta las que quizá a ti te parecen de cualquier día."),
          still(19, "A veces todo lo que quiero para una tarde es sentarme contigo y seguir platicando."),
          still(21, "Luego veo estas sonrisas y me dan ganas de hacerle espacio a más días así.")
        ]),
        episode("Caminos que todavía no conocemos", "Las ganas de salir, improvisar y volver con una historia nueva.", 3, [
          still(ambient("camino"), "Me ilusiona pensar en todos los caminos que todavía podríamos recorrer juntos."),
          still(3, "Quiero hacer más planes contigo, incluso si el plan es salir a dar una vuelta y ver qué encontramos."),
          clip("ambiente", "olas", "También quiero que sepamos tomarnos un respiro, sin prisa por llegar a ningún lado."),
          still(13, "Sea cual sea el próximo paseo, quiero que volvamos con una foto que nos haga sonreír así.")
        ]),
        episode("Una página más", "El amor que Wilber quiere cuidar en los días que vienen.", 0, [
          still(ambient("libreta"), "Si me preguntas qué quiero escribir después, empezaría por todas las veces que todavía quiero escucharte."),
          still(20, "Quiero conocer tus metas, alegrarme de tus logros y ayudarte cuando me necesites."),
          still(17, "Y cuando nos toque decidir algo importante, quiero que podamos hacerlo conversando, como equipo."),
          still(15, "Gracias por estar en mi vida, Sandy. Todo lo que escribamos después de esta página también será nuestro.")
        ])
      ]
    }
  ];
  const message = "¿Quién iba a pensar que una llamada nos haría escribir este libreto de amor que jamás dejaré de leer? Gracias por haber llegado a mi vida y hacerme conocer el amor. Te amo, Sandy López. Te amo tanto, desde lo más profundo de mi corazón.";
  const fotos = {
    hero: portada("hero"), perfilB: portada("perfil-sandy"), perfilPareja: portada("perfil-pareja"),
    t0: portada("llamada"), t1: portada("amor"), t2: portada("recuerdos"), t3: portada("aniversario"),
    t4: portada("futuro"), t5: foto(8), final: portada("final"), postCreditos: foto(15)
  };
  window.TDN = {
    pareja: { nombreA: A, nombreB: B, aniversario: anniversary, viajes: [], mensajeFinal: message },
    fotos, temporadas,
    media: { intro: "assets/audio/intro.mp3", musica: "", videoFinal: "assets/video/escena-final.mp4", audioRemitente: "" },
    acceso: { demo: false, password: "1711", pistaPassword: "Nuestro día y mes, con cuatro números.", estreno: "" },
    notificacion: { whatsapp: "529671331798", email: "", endpoint: "" },
    sitio: {
      url: "https://streaming-us.rotfstudio.com/clientes/wilber-sandy/sitio/splash.html", coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Romance",
      heroTag: "ESPECIAL DE ANIVERSARIO · 17 DE NOVIEMBRE", heroTop: "De Wilber para Sandy",
      titulo: "Nuestro libreto de amor",
      sinopsis: "Una llamada fue la primera página. Wilber reúne sus recuerdos con Sandy en cuatro películas y una serie, con una carta para el 17 de noviembre.",
      generos: ["Romance", "Recuerdos", "Aniversario"], filaRecomendada: temporadas[0].titulo
    },
    extras: [
      { titulo: "El tren", img: foto(12), texto: "Un paseo que quedó en más de una foto." },
      { titulo: "Entre luces", img: foto(10), texto: "Una sonrisa que me gusta volver a ver." },
      { titulo: "La banda sonora", img: foto(7), texto: tracks.map((t) => t.cancion).join(" · ") }
    ],
    final: {
      titulo: "Una carta para Sandy", imagen: fotos.final,
      sinopsis: "Unas palabras de Wilber para este 17 de noviembre. Al final, tú también puedes escribirle.",
      preguntas: [
        "¿Qué recuerdo nuestro volverías a vivir?",
        "¿Qué detalle de nosotros te hace sonreír?",
        "¿Qué escena de este libreto guardarías?",
        "¿Qué te gustaría hacer juntos en el próximo capítulo?",
        "¿Qué quieres decirme en nuestro aniversario?"
      ],
      carta: () => `Sandy:\n\n${message}\n\nCuando veo las fotos del tren, las de noche o esas en las que solo estamos abrazados, me dan ganas de sentarme contigo a recordar qué pasó antes y después de cada una. Gracias por todos esos ratitos que hiciste especiales con tu compañía.\n\nQuiero seguir escuchándote, hacer más planes contigo y celebrar cada cosa que te haga feliz. Quiero cuidarnos también en las semanas en que estemos ocupados y guardar tiempo para platicar, para reírnos o para dar una vuelta sin tener que planearla.\n\nFeliz aniversario, mi amor. Cada 17 de noviembre quiero acordarme de la suerte que tuve de escuchar tu voz en aquella llamada.\n\nCon todo mi amor,\nWilber Gómez`
    },
    creditos: [
      ["Una dedicatoria de", A], ["Para", B], ["Aniversario", anniversary],
      ["Primera escena", "Una llamada"], ["Banda sonora", tracks.map((t) => t.cancion).join(" · ")],
      ["Próximo capítulo", "Lo escribimos juntos"]
    ],
    postCreditos: {
      imagen: fotos.postCreditos, etiqueta: "ESCENA POST-CRÉDITOS",
      texto: "¿La mejor parte, Sandy? Todavía nos quedan páginas en blanco.",
      anuncio: "Una página más", subtitulo: "Wilber y Sandy · Continuará",
      sorpresa: "Si vuelvo a leer este libreto, quiero encontrar más días contigo. Te amo."
    }
  };
})();

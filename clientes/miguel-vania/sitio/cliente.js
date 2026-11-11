(() => {
  const c = window.TDN;
  const remitente = "Miguel";
  const destinataria = "Vania";
  const titulo = "Mi dulce tormento";
  const foto = id => `assets/escenas/${id}.webp`;
  const portada = id => `assets/portadas/${id}.webp`;
  const pistas = {
    vania: "Vania · Dedicatoria de Miguel",
    corazon: "Canta Corazón · Alejandro Fernández",
    desde: "Desde Hoy · Duelo",
    tiempo: "A Pesar del Tiempo · Mickey Taveras",
    prometiste: "Prometiste · Pepe Aguilar",
    mitad: "Mi Media Mitad · Rey Ruiz",
    ensenaste: "Me Enseñaste · Ricardo Arjona",
    "hasta-que-me-olvides": "Hasta Que Me Olvides · Luis Miguel",
    "vania-segunda-cancion": "Vania · Segunda canción"
  };
  const audio = id => `assets/audio/${id}.mp3`;
  const videosOriginales = [
    "8.13.55 AM", "8.13.56 AM", "8.14.00 AM", "8.14.50 AM",
    "8.14.51 AM", "8.14.53 AM", "8.14.56 AM", "8.14.57 AM",
    "8.14.58 AM", "8.14.58 AM (1)", "8.14.58 AM (2)", "8.14.58 AM (3)",
    "11.43.23 AM", "11.43.23 AM (1)"
  ].map((hora, index) => {
    const id = `v${String(index + 1).padStart(2, "0")}`;
    return { id, titulo: `Video de WhatsApp · ${hora}`, poster: foto(id), src: `assets/videos-originales/${id}.mp4` };
  });
  const clips = new Set([...videosOriginales.map(video => video.id), "olas", "ocaso"]);
  const escena = ([id, ...texto]) => ({
    img: foto(id),
    ...(clips.has(id) ? { video: `assets/escenas/${id}.mp4` } : {}),
    texto
  });

  Object.assign(c.pareja, { nombreA: remitente, nombreB: destinataria, apodos: [destinataria], apodo: destinataria });
  Object.assign(c.fotos, {
    hero: "assets/hero.webp", perfilB: portada("vania"), perfilPareja: portada("miguel-y-vania"),
    final: portada("carta")
  });
  Object.assign(c.media, {
    intro: "assets/audio/intro.mp3",
    temporadas: Object.keys(pistas).map(audio),
    canciones: Object.values(pistas),
    videosOriginales
  });
  Object.assign(c.acceso, { demo: false, password: "amor", pistaPassword: "Lo que empezó a sentirse sin que lo esperara.", estreno: "" });
  Object.assign(c.notificacion, { whatsapp: "525537082956", email: "", endpoint: "" });
  Object.assign(c.sitio, {
    url: "https://streaming-us.rotfstudio.com/clientes/miguel-vania/sitio/index.html",
    titulo, clasificacion: "TP", clasificacionTexto: "Recuerdos y despedida",
    heroTag: "PARA VANIA", heroTop: "Una despedida de Miguel",
    sinopsis: "Cuando te conocí, no imaginé que lo nuestro llegaría tan lejos. Fui conociendo tu vida sin pedirte que me la contaras. Ahora que terminó, quiero despedirme y darte las gracias por haber sido parte de la mía.",
    filaRecomendada: titulo, generos: ["Romance", "Memorias", "Despedida"]
  });

  const episodio = (titulo, descripcion, imagen, pista, escenas) => ({
    titulo, descripcion, duracion: 60, imagen, musica: pista ? audio(pista) : "", cancion: pistas[pista] || "",
    escenas: escenas.map(escena), interaccion: null, recompensa: ""
  });
  const catalogo = (num, tipo, titulo, sinopsis, episodios) => ({
    num, tipo, titulo, sinopsis, episodios, clasificacion: "TP", anio: 2026,
    imagen: portada(num), musica: episodios[0].musica, cancion: episodios[0].cancion,
    top10: num === 0, creditos: [["De", remitente], ["Para", destinataria]]
  });
  const pelicula = (num, titulo, sinopsis, pista, escenas) =>
    catalogo(num, "pelicula", titulo, sinopsis, [episodio(titulo, sinopsis, portada(num), pista, escenas)]);
  const serie = (num, titulo, sinopsis, episodios) => catalogo(num, "serie", titulo, sinopsis, episodios);

  c.temporadas = [
    pelicula(0, titulo, "El encuentro que Miguel jamás imaginó que se convertiría en una historia de amor, y las palabras con las que hoy se despide.", "vania", [
      ["p24", "Vania, cuando te conocí, nunca imaginé que lo nuestro llegaría tan lejos."],
      ["v02", "Fui conociendo tu vida de a poco.", "Me la fuiste mostrando sin que yo tuviera que preguntarte."],
      ["v04", "Y cuando me di cuenta, yo ya te quería.", "Hoy miro estas imágenes y me acuerdo de lo mucho que significó para mí."],
      ["ocaso", "Ahora que terminamos, todavía me cuesta despedirme.", "Quería decirte cuánto agradezco el tiempo que nos tocó compartir."],
      ["p02", "Me alegra haberte conocido, Vania.", "Con cariño, Miguel."]
    ]),
    pelicula(1, "Cuando te conocí", "Miguel vuelve al comienzo, cuando todavía no sabía todo lo que llegaría a sentir.", "corazon", [
      ["p01", "Me acuerdo de lo poco que sabía de ti cuando te conocí."],
      ["v03"],
      ["p04", "Jamás imaginé que un día iba a sentarme a escribirte todo esto."],
      ["p06", "Me gustaba saber de ti."],
      ["cielo", "Es raro mirar el principio desde aquí.", "Ahora entiendo por qué me acuerdo de ti hasta en días en los que ando en otra cosa."],
      ["v07", "Todavía me da gusto verte hacer esa cara.", "Detalles así son los que se me quedan."],
      ["p15", "Si pudiera mirar otra vez aquel comienzo,", "me daría gusto encontrarme contigo de nuevo."]
    ]),
    pelicula(2, "Sin tener que preguntar", "Sobre conocer a alguien a través de lo que elige compartir.", "tiempo", [
      ["p17", "Empecé a conocer tu vida sin darme cuenta."],
      ["p08", "Tú ibas compartiendo lo que querías compartir.", "A mí me gustaba descubrir quién eras, a tu ritmo."],
      ["p07", "Hasta los detalles más sencillos me daban ganas de conocerte un poco más."],
      ["p12"],
      ["v05", "Hoy agradezco la confianza con la que me dejaste asomarme a tu mundo."],
      ["v10"],
      ["horizonte", "Hay partes de tu vida que solo te pertenecen a ti.", "De lo que compartiste conmigo, me quedo con el cariño."]
    ]),
    pelicula(3, "Cuando empezó a importarme", "El momento en que Miguel reconoce que Vania ya ocupaba un lugar importante en su vida.", "mitad", [
      ["p05", "Me costaría señalar el momento en que empecé a sentir algo más."],
      ["v01", "Lo fui entendiendo cuando cualquier detalle me hacía pensar en ti."],
      ["p03", "A veces me sorprendía lo contento que me ponía con solo verte."],
      ["v13"],
      ["p22", "Después pude decirlo en voz alta: tú ya eras importante para mí."],
      ["p09", "Me alegra haberme dado tiempo de descubrir lo que sentía."]
    ]),
    pelicula(4, "Un mensaje de Miguel", "El mensaje de voz de Miguel para Vania, acompañado por las fotos y los recuerdos de Las cosas chiquitas.", null, [
      ["p11", "Mira esos peluches. Todavía me sacan una sonrisa."],
      ["p14", "También me da ternura volver a ver esos detalles que hacían tan tuyas las fotos."],
      ["v11", "A veces un recuerdo dura lo que dura este video.", "Lo puedes ver en segundos y quedarte pensando en él toda la tarde."],
      ["p18", "También quiero guardar las caras que hacías cuando estabas jugando."],
      ["p13"],
      ["p23", "Qué bonito que todavía tengamos estas imágenes."]
    ]),
    pelicula(5, "Gracias por tu confianza", "Lo que Miguel agradece de haber sido parte de la vida de Vania.", "ensenaste", [
      ["p24", "Gracias por el tiempo que compartiste conmigo, Vania."],
      ["p10", "Agradezco haber conocido esa parte de ti que aparecía en las cosas de todos los días."],
      ["p20", "Me llevo la alegría de haberte tenido cerca."],
      ["p16"],
      ["v12"],
      ["olas", "Quiero recordar lo que vivimos con el cuidado con que se guarda algo querido."],
      ["p02", "Darte las gracias era lo que más me importaba decirte."]
    ]),
    pelicula(6, "El día después", "Una despedida que reconoce la tristeza y el valor de lo que vivieron.", "prometiste", [
      ["horizonte", "Desde que terminamos, hay momentos en los que todavía me cuesta acostumbrarme."],
      ["p09", "A veces miro una de estas fotos y me entra la tristeza.", "También me da gusto haber vivido lo que veo ahí."],
      ["ocaso", "Supongo que me llevará un tiempo hablar de esto con calma."],
      ["p05", "Por ahora me ayuda acordarme de la alegría que también hubo."],
      ["v08", "La música me ayuda a volver a esos recuerdos."],
      ["p19"],
      ["cielo", "Poco a poco quiero poder recordarte en paz."]
    ]),
    pelicula(7, "Que te vaya bonito", "Los deseos de Miguel para Vania y lo que él quiere aprender al cerrar esta historia.", "desde", [
      ["cielo", "Ojalá te vaya bien en eso que más te importa, Vania."],
      ["p15", "Deseo que tengas tiempo y ánimo para dedicarte a lo que te hace feliz."],
      ["olas", "Yo quiero aprender a despedirme con calma y cuidar mejor las palabras que digo."],
      ["p01", "Ojalá podamos acordarnos de lo que vivimos sin que nos duela tanto."],
      ["horizonte", "Te deseo paz para lo que viene.", "Que te vaya bonito, Vania."]
    ]),
    serie(8, "Así fui conociéndote", "Dos episodios sobre la sorpresa de encontrarse y el cariño que fue creciendo.", [
      episodio("Llegaste sin aviso", "Lo que Miguel recuerda de haberte conocido sin imaginar cuánto significarías.", foto("p03"), "vania-segunda-cancion", [
        ["p03", "Hay encuentros que solo entiendes mucho después."],
        ["p04", "Lo nuestro empezó sin que yo esperara que pasara algo entre los dos."],
        ["v02", "Me gustaba ir conociéndote por lo que tú querías contarme."],
        ["p21"],
        ["v09"],
        ["p22", "Cuando vuelvo a ver estas fotos, me acuerdo de la sorpresa que me dio llegar a quererte así."],
        ["horizonte", "Me alegra que nuestros caminos se hayan cruzado."]
      ]),
      episodio("Lo cotidiano contigo", "Una mirada a la cercanía que se nota en las fotos y los videos.", foto("p17"), "vania-segunda-cancion", [
        ["p17", "Me gusta que entre nuestras fotos haya tantas cosas sencillas."],
        ["v07", "Así te recuerdo a veces, haciendo un gesto que me da risa."],
        ["p07", "O mostrándome un detalle que para ti era parte del día."],
        ["v06"],
        ["v04", "Estas imágenes tienen algo de la confianza que fuimos agarrando."],
        ["v14"],
        ["p11", "Cuando piense en ti, también me voy a acordar de esto."]
      ])
    ]),
    serie(9, "Después de nosotros", "Dos episodios para agradecer lo vivido y desearse lo mejor al seguir caminos distintos.", [
      episodio("Lo que me llevo", "Miguel piensa en lo que le enseñó conocer a Vania.", foto("p24"), "hasta-que-me-olvides", [
        ["p24", "Lo nuestro me enseñó que puedo conocer a alguien sin tener que entenderlo todo enseguida."],
        ["p08", "Quiero seguir aprendiendo a escuchar y a dejarle espacio a la otra persona."],
        ["olas", "También quiero tomarme mi tiempo para entender cómo me siento."],
        ["p23", "Guardo las sonrisas que se nos ven aquí.", "Todavía me da alegría acordarme de ellas."],
        ["cielo", "Eso es parte de lo que me llevo de ti, Vania."]
      ]),
      episodio("Mi última escena", "Un adiós que deja espacio para que cada quien siga su camino.", foto("p02"), "hasta-que-me-olvides", [
        ["p02", "Pensé mucho en cómo despedirme de ti."],
        ["ocaso", "Quería que quedara escrito que conocerte fue importante para mí."],
        ["p09", "Gracias por el cariño y por dejarme conocer un poquito de tu vida."],
        ["horizonte", "Espero que encuentres tranquilidad y que te vaya bien con lo que venga."],
        ["p24", "Hasta aquí llega mi historia, Vania.", "Con cariño, Miguel."]
      ])
    ])
  ];

  Object.assign(c.temporadas[4].episodios[0], { duracion: 33, voz: audio("mensaje-de-voz") });

  c.temporadas[1].episodios[0].interaccion = {
    tipo: "quiz", titulo: "Así empezó", pregunta: "Cuando Miguel conoció a Vania, ¿qué se imaginaba?",
    opciones: ["Que ya sabía cómo terminaría todo", "Que podrían llegar a ser algo más desde el primer día", "Nunca imaginó que llegarían tan lejos"],
    correcta: 2, ok: "Conocerte fue una sorpresa que me dio mucho gusto."
  };
  c.temporadas[4].episodios[0].interaccion = {
    tipo: "codigo", titulo: "El título escondido", modo: "texto",
    pregunta: "Completa el título de esta historia: Mi dulce ___.",
    placeholder: "Una palabra", respuestas: ["tormento"], pista: "Está en la portada de la película principal.",
    ok: "Mi dulce tormento."
  };
  c.temporadas[9].episodios[1].interaccion = {
    tipo: "ordenar", titulo: "Así pasó", eventos: [
      "Conocí a Vania", "Fui conociendo su vida sin preguntar", "Me di cuenta de que ya la quería", "Me despido agradeciendo lo vivido"
    ], ok: "Gracias por ser parte de esta historia."
  };

  const carta = `Vania:

Cuando te conocí, nunca me imaginé que pudiera llegar a más. Poco a poco fui conociendo tu vida sin que yo te preguntara. Antes de darme cuenta, ya me importaba saber cómo estabas y ya sentía algo por ti.

Ahora que terminamos, quería despedirme con calma. Me cuesta escribirlo. Cuando miro las fotos, todavía me da ternura ver nuestras caras con esos peluches. También me da tristeza saber que ese tiempo ya pasó. Me alegra poder agradecerte que haya sido parte de mi vida.

Gracias por lo que decidiste contarme de ti, por la confianza y por el cariño que compartimos. Yo me quedo con las ganas de aprender a escuchar mejor y de recordar lo nuestro con calma, aunque por ahora me cueste.

Deseo que te vaya bien y que puedas dedicarte a todo lo que te ilusiona. Quería que supieras que haberte conocido significó mucho para mí.

Cuídate, Vania.

Con cariño,
Miguel`;

  c.extras = [
    { titulo: "Los dos peluches", img: foto("p11"), texto: "Qué bonito que esta imagen todavía me haga sonreír." },
    { titulo: "Una foto nuestra", img: foto("p24"), texto: "Me gusta volver a ver esta foto. Todavía me da alegría haber estado ahí contigo." }
  ];
  Object.assign(c.final, {
    titulo: "Hasta aquí, con cariño", imagen: c.fotos.final,
    sinopsis: "Una última carta de Miguel para Vania.",
    preguntas: ["Si te nace decirme algo, ¿qué palabras quisieras dejarme?"],
    carta: () => carta
  });
  c.creditos = [["De", remitente], ["Para", destinataria], ["Paisajes de ambiente", "Pexels"]];
})();

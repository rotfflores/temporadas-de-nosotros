/* Copia independiente de Axel. Dedicatorias editoriales: no se recibió una historia biográfica ni fecha de aniversario. */
window.TDN = (() => {
  const f = (grupo, n) => `assets/fotos/${grupo}-${String(n).padStart(2, '0')}.webp`;
  const esposa = Array.from({length: 16}, (_, i) => f('esposa', i + 1));
  const hijas = Array.from({length: 16}, (_, i) => f('hijas', i + 1));
  const canciones = [
    ['contigo-quiero-envejecer', 'Contigo Quiero Envejecer'],
    ['lo-tienes-todo', 'Lo Tienes Todo — Julión Álvarez y su Norteño Banda'],
    ['regalo-de-dios', 'Regalo de Dios — Julión Álvarez y su Norteño Banda'],
    ['llegaste', 'Llegaste Cuando Ya No Creía en el Amor'],
    ['princesas-magicas', 'Princesas Mágicas — Jesús Adrián Romero']
  ].map(([slug, cancion]) => ({musica: `assets/audio/${slug}-climax.mp3`, cancion}));
  const palabrasEsposa = [
    'Gabriela, este regalo empieza contigo. Con esa manera tuya de hacerme sonreír.',
    'Me gusta vernos juntos y pensar en todo el cariño que cabe en una fotografía.',
    'A tu lado quiero seguir encontrando motivos para celebrar la vida.',
    'Gracias por compartir conmigo tu tiempo, tu compañía y tu corazón.',
    'Me enamoran esos detalles tuyos que hacen especial un día cualquiera.',
    'Quiero seguir buscando momentos para nosotros, aunque la vida vaya deprisa.',
    'Tomarte de la mano sigue siendo uno de mis planes favoritos.',
    'También quiero quererte en los días tranquilos, cuando no pasa nada extraordinario.',
    'Gracias por el cariño que hay detrás de tantas cosas de todos los días.',
    'Quiero mirarte con atención y seguir descubriendo lo que te hace feliz.',
    'Que nunca nos falten las ganas de escucharnos y cuidarnos.',
    'Tu sonrisa es de esas cosas que siempre quiero volver a ver.',
    'Me hace feliz compartir contigo esta familia y estos recuerdos.',
    'Sueño con más paseos, más conversaciones y más tiempo de tu mano.',
    'Quiero que lo que venga nos encuentre haciendo equipo.',
    'Te amo juete, Gabriela. Y quiero seguir demostrándotelo. — Axel'
  ];
  const palabrasHijas = [
    'Mis dos princesas: estas fotos son una forma de decirles cuánto las quiero.',
    'Cada fotografía guarda un pedacito del cariño que les tengo.',
    'Cada etapa de ustedes merece un lugar en mi memoria.',
    'Me gusta estar cerca y compartir esos ratitos que después se vuelven recuerdos.',
    'En mis brazos siempre quiero que encuentren cariño.',
    'Su alegría me da muchos motivos para sonreír.',
    'Quiero que se animen a descubrir el mundo y todo lo que les ilusiona.',
    'Quiero estar para celebrar cada nueva vuelta al sol.',
    'Me encanta que se atrevan a jugar, imaginar y ser ustedes mismas.',
    'Ojalá nunca pierdan la confianza para intentar lo que les gusta.',
    'Gracias por esas conversaciones que empiezan sin planearlas y me alegran el día.',
    'No hace falta un gran plan para pasarla bien con ustedes.',
    'Quiero acompañarlas mientras aprenden y encuentran su propio camino.',
    'Siempre voy a querer saber cómo estuvo su día.',
    'Que el tiempo nos regale muchos abrazos más.',
    'Mis dos princesas, las quiero muchísimo. Aquí tienen a su papá. — Axel'
  ];
  const palabrasSerie = [
    'Gabriela, me gusta empezar este álbum contigo y con lo que siento cuando estamos juntos.',
    'Quiero seguir haciendo espacio para los dos en medio de tantas cosas.',
    'Hay fotos a las que uno vuelve solo por las ganas de ver otra vez esa sonrisa.',
    'Gracias por compartir conmigo una parte tan grande de tu vida.',
    'A veces basta estar cerca para que el día se sienta distinto.',
    'Quiero seguir sumando recuerdos contigo, sin dejar pasar las oportunidades de estar juntos.',
    'Y acordarme de decirte lo mucho que te quiero, incluso en los días de prisa.',
    'Lo que más deseo es que sigamos encontrando cariño en nuestra vida de todos los días.',
    'Este capítulo es para agradecerte, Gabriela.',
    'Por los detalles que nacen del cariño y que a veces no alcanzo a agradecer en voz alta.',
    'Quiero escucharte más, saber qué te preocupa y qué te gustaría hacer.',
    'También quiero que sigamos riendo juntos y guardando momentos como este.',
    'Me da alegría mirar nuestras fotos y reconocer todo lo que quiero cuidar.',
    'Ojalá hagamos tiempo para los planes que todavía tenemos ganas de vivir.',
    'Quiero construir contigo una vida en la que ambos nos sintamos acompañados.',
    'Gracias por estar en estas páginas y en mi vida. Te amo juete.',
    'Y entonces aparecen ustedes, mis dos princesas, con tanto por descubrir.',
    'Verlas juntas me recuerda cuánto cariño puede caber en nuestra familia.',
    'Me gusta guardar estos recuerdos de cuando eran más pequeñas.',
    'Y volver a encontrarme en las fotos cerca de ustedes, compartiendo el momento.',
    'Quiero que sepan que pueden buscar mis brazos cuando los necesiten.',
    'Que su sonrisa siga teniendo un lugar importante en mis días.',
    'Que se atrevan a probar cosas nuevas y a contarme lo que les emociona.',
    'Y que cada cumpleaños nos encuentre celebrando lo bonito de tenerlas.',
    'Pienso en todo lo que todavía les queda por vivir y me emociona poder acompañarlas.',
    'Quiero animarlas a disfrutar lo que les gusta, sin compararlas con nadie.',
    'Quiero tener tiempo para escucharlas y aprender también de ustedes.',
    'Ojalá sigamos encontrando juegos y motivos para reír en cualquier lugar.',
    'Mi deseo es que crezcan sintiéndose queridas y libres para ser ustedes mismas.',
    'Aunque cambien los años y los planes, quiero seguir siendo alguien con quien puedan hablar.',
    'Gabriela y mis niñas: gracias por darle tanto sentido a la palabra familia.',
    'Familia Contreras Espinoza: nos quedan muchas fotos y mucho cariño por compartir. — Axel'
  ];
  const escenas = (fotos, textos) => fotos.map((img, i) => ({img, texto: [textos[i]]}));
  const episodio = (titulo, descripcion, fotos, textos, pista) => ({
    titulo, descripcion, imagen: fotos[0], duracion: fotos.length * 7,
    ...canciones[pista], escenas: escenas(fotos, textos), interaccion: null
  });
  const pelicula = (num, titulo, fotos, textos, pista, sinopsis, portada) => ({
    num, tipo: 'pelicula', titulo, imagen: portada, anio: 2026, clasificacion: 'TP',
    sinopsis, top10: true, ...canciones[pista],
    creditos: [['De', 'Axel Contreras'], ['Para', num === 0 ? 'Gabriela Espinoza' : 'Mis dos princesas'], ['Música', canciones[pista].cancion]],
    episodios: [episodio(titulo, sinopsis, fotos, textos, pista)]
  });
  const temporadas = [
    pelicula(0, 'te amo juete', esposa, palabrasEsposa, 1,
      'Gabriela, estas fotografías guardan mi cariño por ti. Una película para darte las gracias y seguir soñando contigo.', esposa[2]),
    pelicula(1, 'mis dos princesas', [hijas[1], hijas[0], ...hijas.slice(2)], palabrasHijas, 4,
      'Para mis niñas, con todo el amor de papá. Sus sonrisas, sus recuerdos y mi deseo de acompañarlas mientras crecen.', hijas[1]),
    {
      num: 2, tipo: 'serie', titulo: 'familia Contreras Espinoza', imagen: 'assets/fotos/portada-familia.webp',
      anio: 2026, clasificacion: 'TP', ...canciones[2],
      sinopsis: 'Nuestro álbum completo en cuatro capítulos: el amor por Gabriela, la alegría de mis dos princesas y todo lo que quiero cuidar como familia.',
      creditos: [['De', 'Axel Contreras'], ['Para', 'Gabriela Espinoza y sus hijas']],
      episodios: [
        episodio('Contigo quiero seguir', 'Ocho recuerdos para Gabriela y unas palabras sobre el amor que quiero seguir cuidando.', esposa.slice(0,8), palabrasSerie.slice(0,8), 0),
        episodio('Gracias por compartir tu vida', 'Las cosas que quiero agradecerte y los deseos que quiero compartir contigo.', esposa.slice(8), palabrasSerie.slice(8,16), 3),
        episodio('Mis princesas, mis sonrisas', 'Un capítulo para volver a sus primeros recuerdos y celebrar la alegría de tenerlas.', hijas.slice(0,8), palabrasSerie.slice(16,24), 4),
        episodio('Todo lo que viene', 'El cariño de hoy y mi deseo de seguir acompañándolas en cada nueva etapa.', hijas.slice(8), palabrasSerie.slice(24), 2)
      ]
    }
  ];
  return {
    pareja: {nombreA: 'Axel Contreras', nombreB: 'Gabriela y sus hijas', apodo: 'Gabriela', apodos: ['Gabriela'], ciudad: '', viajes: [], suenos: ['Cuidarnos como familia', 'Hacer tiempo para estar juntos', 'Acompañar los sueños de cada una']},
    fotos: {hero: 'assets/fotos/hero.webp', perfilB: esposa[2], perfilPareja: hijas[1], puzzle: esposa[6], puzzle2: hijas[1], t0: esposa[2], t1: hijas[1], t2: esposa[6], t3: hijas[4], t4: esposa[13], t5: hijas[14], final: esposa[15], postCreditos: 'assets/fotos/portada-familia.webp'},
    media: {intro: 'assets/audio/intro.mp3', temporadas: temporadas.map(t => t.musica), canciones: canciones.map(t => t.cancion), musica: canciones[2].musica, videoFinal: '', audioRemitente: ''},
    acceso: {demo: false, password: '2fe70f8fab887c96dd0abb620572088ea2a5435ef9fe82d635b553af88e55896', pistaPassword: 'El primer nombre de quien recibe este regalo, en minúsculas.', estreno: ''},
    notificacion: {whatsapp: '528662081409', email: '', endpoint: ''},
    sitio: {url: 'https://streaming-us.rotfstudio.com/clientes/axel-gabriela/sitio/index.html', titulo: 'Familia Contreras Espinoza', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Amor y recuerdos en familia', heroTag: 'DE AXEL, CON TODO MI AMOR', heroTop: 'Para Gabriela y mis dos princesas', sinopsis: 'Gabriela, mis niñas: este espacio es para ustedes. Dos películas y una serie con nuestros recuerdos, lo que agradezco y todo el cariño que quiero seguir compartiendo en familia.', generos: ['Amor', 'Familia', 'Recuerdos'], filaRecomendada: 'te amo juete'},
    temporadas,
    extras: [
      {titulo: 'Tu sonrisa', img: esposa[11], texto: 'Gabriela, quiero seguir encontrando motivos para verte sonreír.'},
      {titulo: 'Juntas', img: hijas[1], texto: 'Mis princesas, cuánto cariño guardo en esta fotografía.'},
      {titulo: 'Un abrazo más', img: hijas[4], texto: 'Que nunca nos falten las ganas de abrazarnos.'},
      {titulo: 'Lo que viene', img: esposa[13], texto: 'Quiero seguir haciendo tiempo para compartir la vida contigo.'}
    ],
    final: {
      titulo: 'Para ustedes, mi familia', imagen: 'assets/fotos/portada-familia.webp',
      sinopsis: 'Una carta de Axel para Gabriela y sus hijas, y un espacio para guardar sus propios recuerdos y deseos.',
      preguntas: ['¿Qué fotografía de este álbum te hizo sonreír más?', '¿Qué recuerdo familiar te gustaría volver a vivir?', '¿Qué detalle te hace sentir querida?', '¿Qué plan te gustaría que hiciéramos en familia?', '¿Qué mensaje quieres dejarnos para leerlo en el futuro?'],
      carta: () => [
        'Gabriela, mis dos princesas:',
        'Quería regalarles un lugar al que pudieran volver y encontrar algo sencillo: lo mucho que las quiero. Mirar estas fotos me da ganas de hacer más espacio para ustedes, para escucharlas y para compartir el tiempo sin tantas prisas.',
        'Gabriela, gracias por tu compañía y por el cariño que compartimos. Quiero seguir cuidando lo nuestro, preguntarte qué te ilusiona y hacer equipo contigo. Me gustaría que nunca se nos olvidara buscar un momento para los dos. Te amo juete.',
        'Mis princesas, quiero acompañarlas mientras crecen, celebrar lo que les hace felices y estar cerca cuando algo les cueste. Ojalá siempre sientan la confianza de contarme sus cosas. No tienen que ser iguales ni querer lo mismo: quiero aprender a acompañar a cada una en su propio camino.',
        'Mi deseo para nuestra familia es que sigamos tratándonos con cariño y paciencia. Que hagamos planes, que guardemos recuerdos y que también sepamos disfrutar los días sencillos. Me hace ilusión pensar en todas las fotos que todavía nos faltan.',
        'Las quiero muchísimo.\nAxel Contreras'
      ].join('\n\n')
    },
    creditos: [['Para', 'Gabriela Espinoza y sus hijas'], ['De', 'Axel Contreras'], ['Nuestra serie', 'familia Contreras Espinoza'], ['Banda sonora', canciones.map(c => c.cancion).join(' · ')]],
    postCreditos: {imagen: 'assets/fotos/portada-familia.webp', etiqueta: 'UN ÚLTIMO MENSAJE', texto: 'Gabriela y mis dos princesas: quiero seguir compartiendo mi vida con ustedes.', anuncio: 'Continuará', subtitulo: 'Nos quedan muchos recuerdos por hacer.', sorpresa: 'Con todo mi amor. — Axel'}
  };
})();

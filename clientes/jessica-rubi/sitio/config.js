window.TDN = (() => {
  const nombreA = 'Jessica Valeria';
  const nombreB = 'Rubí Breton';
  const aniversario = '12 de diciembre';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const video = (n) => ({ img: `assets/video/momento-${n}.mp4`, poster: `assets/fotos/momento-${n}.webp` });
  const paisaje = (nombre) => `assets/ambiente/${nombre}.webp`;
  const clip = (nombre) => ({ img: `assets/ambiente/${nombre}.mp4`, poster: paisaje(nombre) });
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'string' ? { img: medio, poster: medio } : medio),
    texto
  });

  const tracks = {
    anhelo: ['Mi Mayor Anhelo — Banda MS', 'mi-mayor-anhelo'],
    diferencia: ['La Diferencia — Enjambre', 'la-diferencia'],
    regalo: ['Regalo de Dios — Julión Álvarez y su Norteño Banda', 'regalo-de-dios'],
    oasis: ['El oasis — Los Caligaris', 'el-oasis'],
    volver: ['Voy a volver — Los Caligaris feat. Ximena Sariñana', 'voy-a-volver']
  };
  const bandaSonora = ([cancion, archivo]) => ({ cancion, musica: `assets/audio/${archivo}-climax.mp3` });
  const episodio = (titulo, descripcion, duracion, track, escenas) => ({
    titulo, descripcion, duracion, escenas, ...bandaSonora(track)
  });
  const pelicula = (num, titulo, portadaNum, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(portadaNum), anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...bandaSonora(track),
    creditos: [['Una historia para', nombreB], ['Con amor de', nombreA]],
    episodios: [episodio(titulo, sinopsis, 62, track, escenas)]
  });

  const temporadas = [
    pelicula(0, 'La fortuna de despertar contigo', 1, tracks.anhelo,
      'Desde las mañanas juntas hasta los viajes que todavía recuerdan con una sonrisa, Jessica agradece la fortuna de compartir su vida con Rubí.', [
        escena(clip('bosque'), 'Solo queda dejar fluir el día, Rubí.', 'Y agradecer que empieza a tu lado.'),
        escena(foto(26), 'Hay mañanas en las que abro los ojos', 'y me basta con saber que estás aquí.'),
        escena(foto(19), 'En nuestros viajes hemos vivido cosas increíbles.', 'Qué bonito acordarme de todo lo que descubrimos juntas.'),
        escena(foto(14), 'Pienso en Zimapán y en las fotos del camino.', 'Todavía me da alegría volver a vernos ahí.'),
        escena(foto(15), 'Me encanta vernos así, juntas bajo el sol.', 'Ya quiero hacer otro viaje contigo.'),
        escena(foto(1), 'Si pudiera pedir algo para mañana,', 'pediría la dicha de volver a despertar junto a ti.')
      ]),
    pelicula(1, 'La euforia de verte bien', 3, tracks.diferencia,
      'Rubí tiene una alegría que Jessica reconoce al instante. Entre luces de colores y sonrisas, Jessica le cuenta lo que siente al verla así.', [
        escena(foto(20), 'Rubí, qué bonito es verte bien.', 'Quisiera que pudieras verte como te veo yo.'),
        escena(foto(3), 'Miro esta foto entre todas esas luces', 'y me acuerdo de lo mucho que me gusta tenerte cerca.'),
        escena(foto(2), 'Me encanta cuando te emocionas tanto', 'que a mí también me dan ganas de reír.'),
        escena(foto(16), 'Cuando vuelvo a ver nuestras fotos,', 'hasta me acuerdo de cómo sonreía yo ese día.'),
        escena(foto(24), 'Hay días en los que ando pensando en mil cosas.', 'Entonces me miras así y por fin pongo atención a este momento.'),
        escena(foto(25), 'Verte bien y con esa euforia es una bendición.', 'Y qué bonito que me toque estar ahí para verla.')
      ]),
    pelicula(2, 'Gracias por la alegría', 11, tracks.regalo,
      'Jessica da las gracias por la fortuna de compartir tantos momentos con Rubí, desde los detalles que se guardan hasta las noches que se recuerdan entre risas.', [
        escena(foto(11), 'Gracias por la alegría de compartir tantos momentos.', 'A veces pienso en uno y enseguida me acuerdo de otros diez.'),
        escena(foto(18), 'Gracias por esos detalles que vuelvo a mirar', 'cuando quiero acordarme de cuánto cariño hay aquí.'),
        escena(foto(21), 'Gracias por acercarte para otra foto,', 'aunque ya tengamos tantas juntas.'),
        escena(foto(7), 'Me sigue dando risa vernos con esas sudaderas.', 'Me encanta tener a alguien con quien hacer esas cosas.'),
        escena(foto(5), 'Gracias por los viajes y por cada concierto.', 'Todavía me da alegría ver nuestras fotos de esas noches.'),
        escena(foto(4), 'De todos esos momentos me quedo con algo muy sencillo:', 'la alegría de haber estado contigo.')
      ]),
    pelicula(3, 'Que vengan más mañanas', 8, tracks.oasis,
      'Los deseos de Jessica para lo que sigue: cuidarse cuando el día pese, animarse en sus planes y seguir encontrando tiempo para disfrutar juntas.', [
        escena(clip('olas'), 'Cuando las cosas se ponen difíciles,', 'quiero acordarme de la fortuna de compartir mi vida contigo.'),
        escena(foto(9), 'Quiero preguntarte cómo estás', 'y darme el tiempo de escuchar la respuesta.'),
        escena(foto(8), 'Quiero que hagamos más planes al aire libre.', 'Y que de vez en cuando salgamos sin haber planeado nada.'),
        escena(foto(17), 'Quiero saber qué cosas te ilusionan ahora', 'y poder ayudarte a dar el siguiente paso.'),
        escena(paisaje('montanas'), 'Quiero que tengamos tiempo para respirar', 'cuando todo parezca ir demasiado rápido.'),
        escena(foto(6), 'Y cuando llegue otro 12 de diciembre,', 'quiero que tengamos mucho que contarnos de este año.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'La vida a tu lado', imagen: portada(23), anio: 2026,
      clasificacion: 'TP', ...bandaSonora(tracks.volver),
      sinopsis: 'Jessica vuelve a los viajes que han disfrutado juntas y a la alegría de cada concierto para celebrar su 12 de diciembre con Rubí.',
      creditos: [['Para', nombreB], ['De', nombreA], ['Aniversario', aniversario]],
      episodios: [
        episodio('Las ganas de cantar', 'En cada concierto, cantar al lado de Rubí le llena el corazón de una alegría que Jessica apenas puede explicar.', 34, tracks.volver, [
          escena(foto(13), 'Rubí, me encanta ir a conciertos contigo.', 'Todavía veo estas fotos y me dan ganas de cantar.'),
          escena(video(2), 'En cada concierto se me llena el corazón', 'de una alegría que no sé explicar.'),
          escena(foto(12), 'Entre tanta gente, qué bonito cantar contigo.', 'Quiero seguir viviendo noches así a tu lado.')
        ]),
        episodio('La alegría de compartir', 'Las fotos y los videos le devuelven a Jessica la emoción de los conciertos que ha vivido junto a Rubí.', 34, tracks.oasis, [
          escena(foto(23), 'Así quiero seguir recordándonos, Rubí:', 'pegaditas, riéndonos y felices de estar ahí.'),
          escena(video(1), 'Basta volver a ver las luces del escenario', 'para sentir otra vez la emoción de esa noche.'),
          escena(foto(10), 'Me gusta volver a ver lo que te hizo sonreír.', 'Tu alegría se me queda pegada.')
        ]),
        episodio('Nuestro 12 de diciembre', 'Jessica celebra la fecha que comparten y todo lo que todavía quiere vivir con Rubí.', 44, tracks.regalo, [
          escena(paisaje('amanecer'), 'Hoy quiero dejar fluir el día', 'y agradecer otra mañana a tu lado.'),
          escena(foto(27), 'Me quedan ganas de muchos planes contigo', 'y de más fotos que nos hagan reír cuando las volvamos a ver.'),
          escena(video(3), 'Todavía me enternece volver a ver este momento del violín.', 'Ojalá sigamos guardando sorpresas así.'),
          escena(foto(22), 'Feliz 12 de diciembre, Rubí.', 'Te amo. — Jessica')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA, nombreB, anioInicio: '', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-rubi.webp',
      perfilPareja: 'assets/fotos/perfil-pareja.webp', t0: foto(1), t1: foto(3),
      t2: foto(11), t3: foto(23), t4: foto(26), t5: foto(25)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: Object.values(tracks).map((track) => bandaSonora(track).musica),
      videoFinal: 'assets/video/para-rubi.mp4'
    },
    acceso: {
      demo: false, password: 'cbfad02f9ed2a8d1e08d8f74f5303e9eb93637d47f82ab6f1c15871cf8dd0481',
      pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: ''
    },
    notificacion: { whatsapp: '525575273876', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us.rotfstudio.com/clientes/jessica-rubi/sitio/index.html', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Romance, música y recuerdos compartidos',
      heroTag: 'PARA RUBÍ BRETON', heroTop: aniversario,
      sinopsis: 'Jessica Valeria celebra el 12 de diciembre con las fotos, canciones y recuerdos que comparte con Rubí.',
      generos: ['Romance', 'Historias reales', 'Música'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Nuestros viajes', img: foto(14), texto: 'Zimapán me recuerda cuántas cosas increíbles hemos vivido viajando juntas. Me ilusiona pensar en nuestro próximo viaje.' },
      { titulo: 'Entre luces de colores', img: foto(3), texto: 'Me alegra que tengamos fotos de días así.' },
      { titulo: 'Mi corazón está lleno de ti', img: foto(18), texto: 'Uno de esos detalles pequeños que dicen muchísimo.' },
      { titulo: 'Nuestros conciertos', img: foto(23), texto: 'Cada concierto contigo me deja una alegría en el corazón que no sé explicar. Vuelvo a ver los videos y me dan ganas de cantar contigo otra vez.' }
    ],
    final: {
      titulo: 'Para ti, Rubí', imagen: portada(25),
      sinopsis: 'Una carta de Jessica, cinco preguntas para recordar juntas y un video para cerrar este aniversario.',
      preguntas: [
        '¿Qué recuerdo nuestro te hace sonreír cada vez que vuelve?',
        '¿Qué canción de estas te da más ganas de cantar conmigo?',
        '¿Qué detalle de nuestras mañanas te gustaría guardar para siempre?',
        '¿Qué plan te ilusiona que hagamos juntas?',
        '¿Qué quisieras que recordemos cuando las cosas se pongan difíciles?'
      ],
      carta: () => [
        'Rubí:',
        "Solo queda dejar fluir el día y agradecer un día más la fortuna, dicha de despertar a tu lado cada mañana :')",
        'Verte bien y con esa euforia, es una bendición.',
        'Quiero agrádecer la alegria de compartir una infinidad de momentos cuando las cosas se ponen difíciles ay que recordar la que vida me dio la fortuna de compartir mi vida a tu lado.',
        'Te amo rubí',
        'Jessica Valeria'
      ].join('\n\n')
    },
    creditos: [
      ['Para', nombreB], ['Con amor de', nombreA], ['Aniversario', aniversario],
      ['Banda sonora', Object.values(tracks).map(([cancion]) => cancion).join(' · ')],
      ['', 'Por todas las mañanas que nos esperan.']
    ],
    postCreditos: {
      imagen: foto(26), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Rubí, ojalá mañana vuelva a despertar a tu lado.', anuncio: 'Continuará',
      subtitulo: 'Todavía nos quedan canciones por cantar juntas.', sorpresa: 'Feliz 12 de diciembre, mi amor.'
    }
  };
})();

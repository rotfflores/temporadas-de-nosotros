window.TDN = (() => {
  const fecha = '12 de noviembre';
  const titulo = 'Feliz cumpleaños, amor de mi vida';
  const foto = (id) => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const ambiente = (id, video = false) => ({
    img: `assets/ambiente/${id}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${id}.webp` }),
    ambientacion: true
  });
  const escena = (medio, texto) => ({
    ...(typeof medio === 'number' ? { img: foto(medio) } : medio), texto
  });
  const pista = (id, cancion) => ({ cancion, musica: `assets/audio/${id}.mp3` });
  const fuerza = pista('la-fuerza-del-corazon', 'La fuerza del corazón · Alejandro Sanz');
  const aqui = pista('aqui-es', 'Aquí es · La Original Banda El Limón');
  const bendiga = pista('dios-bendiga-nuestro-amor', 'Dios bendiga nuestro amor · Marco Antonio Solís');
  const corteEpisodio = (track) => ({ ...track, musica: track.musica.replace('.mp3', '-episodio.mp3') });
  const dedicatoria = [
    'Feliz cumpleaños, amor de mi vida.',
    'Es una dicha ser parte de tu vida. Te amo demasiado y te abrazo con todo mi amor.',
    'Eres el mejor hombre. Gracias por haber iniciado este amor.',
    'Pasaremos muchos cumpleaños juntos. ¡Felicidades, amor! ❤️'
  ];
  const creditos = [['Para', 'Benjamin'], ['De', 'Corina']];
  const episodio = (titulo, descripcion, track, escenas) => ({
    titulo, descripcion, duracion: 6 + 10 * escenas.length, escenas, ...track
  });
  const pelicula = (num, titulo, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(num), anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...track, creditos: [...creditos, ['Música', track.cancion]],
    episodios: [{ ...episodio(titulo, sinopsis, track, escenas), imagen: portada(num) }]
  });

  const temporadas = [
    pelicula(0, titulo, bendiga,
      'El 12 de noviembre, Corina le regala a Benjamin las palabras que quiere que recuerde en cada cumpleaños.', [
        escena(ambiente('pastel', true), '12 de noviembre. Hoy quiero celebrar lo feliz que me hace que estés en mi vida.'),
        escena(11, dedicatoria[0]),
        escena(23, dedicatoria[1]),
        escena(5, dedicatoria[2]),
        escena(ambiente('velas'), 'Que este nuevo año de vida te traiga salud, alegría y tiempo para todo lo que te hace feliz.'),
        escena(1, dedicatoria[3])
      ]),
    pelicula(1, 'Gracias por dar el primer paso', fuerza,
      'Corina mira lo que han construido y vuelve a una idea sencilla: qué bueno que él se animó a empezar.', [
        escena(4, 'Qué bonito pensar en todo lo que hoy tenemos porque tú te animaste a empezar.'),
        escena(7, 'Gracias por abrirle un espacio a este amor y por dejarme ser parte de tu vida.'),
        escena(6, 'Al vernos así de cerquita, me acuerdo de lo mucho que disfruto tenerte conmigo.'),
        escena(19, 'Te admiro, Benjamin. Quiero que hoy sepas lo orgullosa que me siento de estar a tu lado.'),
        escena(20, 'Todavía me dan ganas de acercarme a ti y quedarme ahí un ratito más.'),
        escena(25, 'Si pudiera volver a ese primer paso, me alegraría igual de que lo dieras.')
      ]),
    pelicula(2, 'Mi lugar es contigo', aqui,
      'Una vuelta por las fotos de carretera, de paseo y de sobremesa que Corina guarda con cariño.', [
        escena(2, 'Una vuelta en el coche contigo basta para que me den ganas de sacar el teléfono y guardar el momento.'),
        escena(9, 'Me encanta mirar estas fotos y acordarme de lo a gusto que estoy a tu lado.'),
        escena(14, 'También quiero guardar las noches de luces y esas fotos en que casi juntamos las narices.'),
        escena(8, 'Gracias por la compañía y por el gusto de sentarme a la mesa contigo.'),
        escena(21, 'Hasta en una foto en el espejo encuentro algo que me encanta: cómo me abrazas.'),
        escena(24, 'Donde sea que nos toque estar, siempre voy a querer un lugarcito junto a ti.')
      ]),
    pelicula(3, 'Por todos los que vienen', bendiga,
      'Un deseo de cumpleaños para Benjamin y para la vida que Corina quiere seguir compartiendo con él.', [
        escena(ambiente('olas', true), 'Me ilusiona pensar en todos los cumpleaños que todavía vamos a celebrar juntos.'),
        escena(12, 'Quiero acompañarte en tus planes y estar cerquita cuando uno de ellos por fin se cumpla.'),
        escena(13, 'También quiero que nos hagamos tiempo para salir de paseo y volver a ver el mar juntos.'),
        escena(ambiente('mar'), 'Que vengan días tranquilos para descansar, platicar y hacer planes con calma.'),
        escena(17, 'Cuando vuelvas a soplar las velitas, yo voy a seguir deseando tener muchos más años para abrazarte.'),
        escena(22, 'Hoy celebro tu vida, Benjamin. Me hace muy feliz poder compartirla contigo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Lo que quiero vivir contigo', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', ...aqui,
      sinopsis: 'Tres episodios sobre el cariño de todos los días, el gusto de descubrir lugares juntos y lo que aún queda por celebrar.',
      creditos,
      episodios: [
        episodio('Los días que se quedan', 'Hay días que vuelven con solo mirar una foto.', corteEpisodio(aqui), [
          escena(3, 'Mira nuestras caras en la feria. Qué bonito tener esta foto para volver un ratito a ese día.'),
          escena(16, 'También me gusta esta foto en la plaza. A veces solo quiero que salgamos y pasemos la tarde juntos.'),
          escena(15, 'Entre tantas fotos, me quedo mucho tiempo mirando las que me recuerdan cómo se siente estar cerca de ti.'),
          escena(24, 'Ojalá sigamos juntando fotos de esas salidas que empiezan con un “¿vamos?”.')
        ]),
        episodio('Donde nos alcance el sol', 'Un capítulo al aire libre, entre la playa y los abrazos.', corteEpisodio(fuerza), [
          escena(ambiente('mar'), 'Me gustaría volver a salir contigo sin prisa y quedarnos hasta que se vaya el sol.'),
          escena(10, 'En esta foto todavía puedo imaginar el sol en la cara y las ganas de abrazarte.'),
          escena(18, 'Aquí estamos los dos, bien pegaditos. Son esos ratos los que quiero seguir guardando.'),
          escena(ambiente('olas', true), 'Cuando volvamos a la orilla, quiero que caminemos un buen rato y hagamos otra foto.')
        ]),
        episodio('Que se repita cada noviembre', 'Corina deja un deseo para cuando llegue el próximo cumpleaños.', corteEpisodio(bendiga), [
          escena(ambiente('velas'), 'Cuando llegue otro 12 de noviembre, quiero volver a decirte esto mirándote a los ojos.'),
          escena(11, 'Te amo demasiado. Me hace feliz que seas tú la persona con la que puedo compartir estos días.'),
          escena(23, 'Pide un deseo, amor. Yo voy a pedir salud y muchos más ratitos así contigo.'),
          escena(5, 'Feliz cumpleaños, Benjamin. Te abrazo con todo mi amor. — Corina')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: 'Corina', nombreB: 'Benjamin', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-benjamin.webp',
      perfilPareja: 'assets/fotos/perfil-juntos.webp',
      t0: foto(4), t1: foto(7), t2: foto(11), t3: foto(17), t4: foto(22), t5: foto(24)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/para-benjamin.mp4'
    },
    acceso: {
      demo: false, password: '2ecefe59ab6ae4e734bb1adec3bbb706be8c6fae0b39500d05f7a6665ffa7390',
      pistaPassword: 'Tu cumpleaños, en cuatro dígitos: día y mes.', estreno: ''
    },
    notificacion: { whatsapp: '529994387679', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us.rotfstudio.com/clientes/corina-benjamin/sitio/index.html?compartir=1', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Una dedicatoria de cumpleaños',
      heroTag: 'DE CORINA PARA BENJAMIN', heroTop: fecha,
      sinopsis: 'Benjamin, qué dicha ser parte de tu vida. Junté nuestras fotos y estas canciones para agradecerte por haber iniciado este amor y celebrar todos los cumpleaños que nos esperan. Te amo. — Corina',
      generos: ['Romance', 'Cumpleaños', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Las palabras de Corina', img: foto(23), texto: dedicatoria.join(' ') },
      { titulo: 'Junto a ti', img: foto(25), texto: 'Me dan ganas de volver a sentir tu brazo alrededor de mí.' },
      { titulo: 'La última luz del día', img: foto(23), texto: 'Qué bonito que tengamos esta foto, con el cielo cambiando de color y nosotros abrazados.' }
    ],
    final: {
      titulo: 'Una carta para ti, Benjamin', imagen: portada(5),
      sinopsis: 'La carta de Corina, cinco preguntas para compartir sus recuerdos y un montaje de cumpleaños.',
      preguntas: [
        '¿Qué foto de los dos te hizo sonreír primero?',
        '¿Qué recuerdas de cuando empezamos a acercarnos?',
        '¿A qué lugar de estas fotos te gustaría volver conmigo?',
        '¿Qué te gustaría cumplir en este nuevo año de vida?',
        '¿Cómo te gustaría que celebremos tu próximo cumpleaños juntos?'
      ],
      carta: () => [
        'Benjamin, amor de mi vida:',
        dedicatoria.slice(0, 3).join(' '),
        'Me gusta mirar nuestras fotos y pensar que una salida, una comida o un rato frente al mar me hacen feliz por lo mismo: porque estoy contigo. Gracias por esos días y por dejarme acompañarte en tantos momentos.',
        'Deseo que este año tengas salud, que puedas hacer lo que te ilusiona y que nos queden tardes para platicar sin prisa. Me va a dar mucha alegría estar a tu lado para celebrar lo que venga.',
        dedicatoria[3],
        'Con todo mi amor,\nCorina'
      ].join('\n\n')
    },
    creditos: [
      ...creditos, ['Cumpleaños', fecha],
      ['Banda sonora', [fuerza, aqui, bendiga].map(({ cancion }) => cancion).join(' · ')],
      ['Escenas ilustrativas', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(11), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Si después de ver todo esto me tienes cerca, ven y abrázame. Todavía quiero darte otro abrazo de cumpleaños.',
      anuncio: 'Hasta el próximo noviembre', subtitulo: 'Todavía nos quedan muchas velitas por soplar.',
      sorpresa: 'Feliz cumpleaños, amor. — Corina'
    }
  };
})();

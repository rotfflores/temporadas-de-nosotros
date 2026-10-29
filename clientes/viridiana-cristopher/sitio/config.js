/* Versión independiente: Viridiana → Cristopher. Material y textos de esta pareja. */
window.TDN = (() => {
  const P = {
    nombreA: 'Viridiana', nombreB: 'Cristopher', apodos: ['Cristopher'], apodo: 'Cristopher',
    fechaInicio: '2024-11-11', fechaCodigo: '11112024', anioInicio: 2024,
    anios: 2, aniosManual: 2, aniversario: '2026-11-11', boda: 'Marzo',
    ciudad: 'La secundaria', primeraCita: 'Nuestro reencuentro',
    cancion: 'Nuestra canción principal', artista: '',
    viajes: [], dificiles: ['La distancia', 'Vernos solamente por una pantalla'],
    anecdota: 'La vida nos dio otra oportunidad de estar juntos', culpableAnecdota: 2,
    gustosB: [], suenos: ['Casarnos en marzo', 'Compartir la vida', 'Seguir eligiéndonos'],
    mensajeFinal: 'Gracias por volver a mi vida y por elegirme con toda mi historia. Gracias por querer compartir tu vida conmigo y con mis tres hijas. Durante mucho tiempo solo pude verte a través de una pantalla; hoy puedo abrazarte y soñar contigo con nuestra boda. Hace un mes me pediste matrimonio y te dije que sí. Hoy quiero regalarte yo una promesa: seguir eligiéndote, cuidarnos y construir juntos lo que viene. Te amo, Cristopher. Este anillo es para ti.'
  };
  const photo = n => `assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
  const video = n => window.CLIENT_MEDIA.videos[n-1];
  const songs = window.CLIENT_MEDIA.audios.map(x => x.ruta);
  const songNames = songs.map((_,i) => `Nuestra banda sonora · ${String(i+1).padStart(2,'0')}`);
  const F = {
    hero: photo(26), perfilB: 'assets/fotos/perfil-cristopher.webp',
    perfilPareja: 'assets/fotos/perfil-pareja.webp',
    t0: photo(25), t1: photo(8), t2: video(1).poster, t3: photo(3),
    t4: photo(36), t5: photo(23), t6: photo(30), t7: photo(12),
    final: photo(13), puzzle: 'assets/fotos/puzzle.webp', puzzle2: 'assets/fotos/puzzle-2.webp',
    postCreditos: photo(15), anillo: 'assets/fotos/anillo-referencia.jpg'
  };
  const M = {
    intro: 'assets/audio/intro.mp3', temporadas: songs, canciones: songNames,
    musica: 'assets/audio/tema-video-boda.m4a', cancionPrincipal: 'assets/audio/tema-video-boda.m4a', videoPrincipal: video(10).ruta,
    posterPrincipal: video(10).poster, videoFinal: video(11).ruta,
    audioRemitente: ''
  };
  const acceso = { demo: false, password: '', pistaPassword: '', estreno: '' };
  const notificacion = { whatsapp: '525652019625', email: '', endpoint: '' };
  const sitio = {
    url: '', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Una historia de amor real',
    heroTag: '11 DE NOVIEMBRE · 2 AÑOS', heroTop: 'De Viridiana, para Cristopher',
    titulo: 'La vida nos volvió a elegir',
    sinopsis: 'Fuimos novios en la secundaria. La vida nos llevó por caminos distintos, pero nuestra historia todavía tenía mucho por contar. Después de la distancia, hoy estás aquí. Dos años de nosotros y toda una vida por escribir.',
    generos: ['Romance', 'Reencuentros', 'Basada en nuestra historia'],
    filaRecomendada: 'Amarnos a distancia'
  };
  const S = (n,...texto) => ({ img: photo(n), texto });
  const V = (n,...texto) => ({ img: video(n).ruta, poster: video(n).poster, texto });
  const cred = () => [['De','Viridiana'],['Para','Cristopher'],['Guion','Nuestra historia'],['Próximo capítulo','Nuestra boda en marzo']];
  const film = (num,titulo,imagen,sinopsis,escenas,options={}) => ({
    num,titulo,imagen,sinopsis,tipo:'pelicula',anio:2026,clasificacion:'TP',top10:true,
    musica:songs[num%8],cancion:songNames[num%8],creditos:cred(),
    episodios:[{titulo,descripcion:sinopsis,duracion:options.duracion || 66,escenas,...options}]
  });
  const temporadas = [
    film(0,'El destino nos volvió a encontrar',F.t0,
      'Nuestro video principal, acompañado de nuestra canción principal. Porque hay historias que merecen una segunda oportunidad.',
      [V(10,'Cristopher, esta historia es para ti.','Antes de este presente hubo un primer nosotros.','Fuimos novios en la secundaria.','La vida nos llevó por caminos distintos.','Pero todavía nos quedaba mucho por vivir.','El 11 de noviembre celebramos dos años.','Y esta vez quiero seguir escribiendo nuestra historia contigo.')],
      {duracion:97}),
    film(1,'Desde la secundaria',F.t1,
      'El primer capítulo de lo nuestro empezó cuando éramos novios en la secundaria. El tiempo pasó; nuestra historia encontró la forma de volver.',
      [S(8,'Antes de todo lo que somos hoy,','hubo dos novios en la secundaria.'),
       S(21,'Después, la vida nos llevó por caminos distintos.','Cada uno siguió construyendo su propia historia.'),
       S(7,'Llegamos a este reencuentro con una vida detrás.','Y con la oportunidad de conocernos otra vez.'),
       S(20,'No sabíamos qué vendría después.','Hoy me alegra que nuestra historia haya continuado.')],
      {interaccion:{tipo:'quiz',pregunta:'¿Dónde empezó nuestra primera historia de amor?',opciones:['En la secundaria','En Estados Unidos','En una aplicación'],correcta:0,ok:'Aquí empezó el primer capítulo de nosotros.'},recompensa:'Hay recuerdos que el tiempo no borra.'}),
    film(2,'Amarnos a distancia',F.t2,
      'Tú en Estados Unidos y yo aquí. Durante mucho tiempo, una pantalla fue nuestra forma de estar cerca.',
      [V(1,'Había días en que tenerte cerca','significaba encontrarte al otro lado de una pantalla.'),
       V(6,'Una llamada no reemplazaba un abrazo.','Pero era nuestra manera de acompañarnos.'),
       V(7,'Seguimos eligiéndonos aun con la distancia.','Esperando el momento de estar juntos.'),
       V(8,'Así también se fue construyendo lo nuestro:','con tiempo, presencia y ganas de seguir.')],{duracion:94}),
    film(3,'Volver por nosotros',F.t3,
      'Tú regresaste tras vivir quince años en Estados Unidos. Yo me mudé de Tequisquiapan a Ciudad de México para nuestros planes. Hace dos meses, una pantalla dejó de ser la única forma de verte.',
      [S(2,'Quince años de tu vida en Estados Unidos.','Y una decisión que cambió nuestro presente.'),
       S(6,'Yo vivía en Tequisquiapan.','Me vine a Ciudad de México para nuestros planes.'),
       S(3,'Volviste para que pudiéramos casarnos.','Para compartir la vida del mismo lado de la pantalla.'),
       S(4,'Hace dos meses llegaste.','Y al fin pude abrazarte de verdad.'),
       S(9,'Ahora estás aquí, Cristopher.','Y cada día contigo tiene otro significado.')]),
    film(4,'Elegirme con toda mi vida',F.t4,
      'Tengo tres hijas y una historia que también forma parte de mí. Tú decidiste estar conmigo con todo lo que soy.',
      [S(36,'Mi vida también tiene tres amores inmensos:','mis tres hijas.'),
       S(33,'Cuando volviste, encontraste mi historia completa.','Y decidiste compartir la tuya conmigo.'),
       S(35,'Gracias por elegirme con todo lo que soy.','Por querer construir este presente a mi lado.'),
       S(11,'Lo nuestro llega con todo lo que hemos vivido.','Y con el deseo de cuidar lo que viene juntos.')]),
    film(5,'Un sí para siempre',F.t5,
      'Hace un mes me pediste matrimonio. Mi respuesta abrió un capítulo nuevo: nuestra vida juntos.',
      [S(23,'Hace un mes me hiciste una pregunta','que cambió la forma de mirar nuestro futuro.'),
       S(13,'Me pediste matrimonio.','Y yo elegí compartir mi vida contigo.'),
       S(17,'En ese sí cabe todo lo que hemos vivido.','También la ilusión de lo que aún nos espera.'),
       S(34,'Hoy quiero que tú también tengas','una promesa que puedas llevar contigo.')]),
    film(6,'Dos años de nosotros',F.t6,
      'Este 11 de noviembre cumplimos dos años. Un aniversario para mirar lo vivido y celebrar que hoy estamos juntos.',
      [S(5,'El 11 de noviembre es nuestro día.','Dos años de este nuevo nosotros.'),
       S(10,'Cada foto guarda algo que vivimos.','Algo a lo que siempre podemos volver.'),
       V(2,'Hay momentos que se quedan para siempre.','Y otros que apenas estamos empezando a crear.'),
       S(30,'Hoy quiero celebrar contigo.','Nuestra historia, nuestro presente y lo que viene.')],
      {interaccion:{tipo:'codigo',modo:'fecha',pregunta:'¿Qué día empezó esta nueva etapa de nosotros?',placeholder:'DDMMAAAA',respuestas:['11112024','11/11/2024','11 de noviembre de 2024'],pista:'Celebramos dos años el 11 de noviembre de 2026.'},recompensa:'11 de noviembre. Nuestra fecha.'}),
    film(7,'Nos vemos en marzo',F.t7,
      'Nuestra boda será en marzo. El siguiente gran capítulo ya tiene un lugar en nuestros sueños.',
      [S(12,'Hay un mes al que ahora miro','con una ilusión diferente: marzo.'),
       S(26,'El mes en que vamos a casarnos.','El comienzo de otra etapa de nosotros.'),
       V(12,'Hoy ya puedo imaginarte a mi lado.','Y seguir haciendo planes contigo.'),
       S(29,'Nos queda una vida por compartir.','Me emociona que sea contigo, Cristopher.')],
      {interaccion:{tipo:'rascar',titulo:'Descubre nuestro próximo capítulo',revelar:'Marzo: nuestra boda. Contigo, para siempre.',imagen:photo(26)},recompensa:'La próxima temporada la vivimos juntos.'}),
    film(8,'Las llamadas que nos acercaron',photo(16),
      'Aunque había una pantalla entre nosotros, buscamos la manera de seguir presentes.',
      [V(6,'Verte en una pantalla','era nuestra forma de estar juntos.'),
       V(7,'Cada llamada nos dejaba un poco más cerca','de ese día en que ya no habría distancia.'),
       V(8,'Esperábamos poder compartir algo más','que palabras a través del teléfono.'),
       S(16,'Y llegó el momento de vernos','sin tener que colgar la llamada.')]),
    film(9,'De Tequisquiapan a nuestros planes',photo(28),
      'Yo vivía en Tequisquiapan. Me vine a Ciudad de México para nuestros planes.',
      [S(6,'Yo vivía en Tequisquiapan.','Esa también es parte de nuestra historia.'),
       S(27,'Me vine a Ciudad de México','para nuestros planes.'),
       S(28,'Tú regresaste después de vivir en Estados Unidos.','Ahora podemos construir algo juntos.'),
       S(32,'Dos caminos volvieron a encontrarse.','Esta vez decidimos caminar juntos.')]),
    film(10,'Un futuro que elegimos',photo(35),
      'Después del reencuentro, la distancia y el compromiso, miramos hacia nuestra boda en marzo.',
      [S(35,'Hace un mes me pediste matrimonio.','Y desde entonces imagino nuestra vida juntos.'),
       S(36,'Gracias por querer compartir tu vida conmigo','y por aceptar la mía completa.'),
       S(12,'Marzo será el comienzo de otra etapa.','Me emociona que seas tú quien camine a mi lado.'),
       S(30,'Pero hoy, en nuestro aniversario,','también tengo algo importante que decirte.')]),
    film(11,'Yo también te elijo',photo(20),
      'La última película. Las palabras de Viridiana y, al final, la imagen del anillo que le entregará a Cristopher.',
      [S(20,'Mi vido hoy quiero decirte que yo también te elijo, cada día,','no esperé a la boda para decírtelo: sí, mil veces sí.'),
       S(23,'Tú me diste tu promesa, y hoy quiero darte la mía.','No es solo un anillo, es mi corazón diciendo: voy contigo, en las buenas y en las malas.'),
       S(31,'Cuando me diste tu anillo, sentí que el mundo se detenía.','Pero quiero que sepas que mi compromiso es tan grande como el tuyo.'),
       S(34,'Este anillo no compite con el tuyo, camina junto a él.','Gracias por elegirme. Yo te elijo a ti, hoy y todos los días de mi vida.','Tu futura esposa ❤️'),
       {img:F.anillo,texto:['']}],{duracion:226}),
    {
      num:12,tipo:'serie',titulo:'De la pantalla a tus brazos',anio:2026,clasificacion:'TP',
      imagen:photo(16),musica:songs[0],cancion:songNames[0],top10:true,creditos:cred(),
      sinopsis:'Dos episodios sobre la espera y la alegría de poder estar juntos.',
      episodios:[
        {titulo:'Una llamada más',duracion:64,descripcion:'Los días en que solo podíamos vernos por una pantalla.',
         escenas:[V(9,'Nos separaban muchos kilómetros.','Pero seguíamos encontrando un momento para nosotros.'),V(1,'A veces quería quedarme un poco más en la llamada.','Un poco más contigo.'),S(6,'Imaginaba cómo sería tomarte de la mano.','Sin tener que despedirnos de una pantalla.')]},
        {titulo:'Ahora de tu mano',duracion:68,descripcion:'Los días en que dejamos de contar la distancia.',
         escenas:[V(5,'Hoy hay caminos que podemos recorrer juntos.','Sin kilómetros entre nosotros.'),V(11,'Ya no tengo que imaginar cómo abrazarte.','Ahora puedo hacerlo.'),S(14,'Después de la espera, llegamos a este presente.','Y quiero disfrutarlo contigo.')]}
      ]
    },
    {
      num:13,tipo:'serie',titulo:'Lo que todavía nos espera',anio:2026,clasificacion:'TP',
      imagen:photo(28),musica:songs[0],cancion:songNames[0],top10:true,creditos:cred(),
      sinopsis:'El futuro no está escrito. Tenemos la oportunidad de construirlo juntos.',
      episodios:[
        {titulo:'Nuestra vida de ahora',duracion:70,descripcion:'Las pequeñas cosas que también forman nuestra historia.',
         escenas:[S(18,'No todos los capítulos tienen que ser extraordinarios.','También quiero compartir contigo los días sencillos.'),S(19,'Conversar, reír, hacernos compañía.','Conocernos un poco más cada día.'),S(22,'Seguir encontrando razones para elegirnos.','Incluso en los días que cuestan.'),S(24,'Nuestra historia también vive en estas fotos.','En los momentos que son nuestros.')]},
        {titulo:'Una promesa para ti',duracion:78,descripcion:'Una carta, una sorpresa y todo mi amor para Cristopher.',
         escenas:[S(27,'La vida nos dejó volver a encontrarnos.','Y nosotros decidimos quedarnos.'),S(31,'Gracias por recorrer este camino conmigo.','Por regresar y hacer planes a mi lado.'),S(32,'Este aniversario tengo algo para ti.','Un regalo para acompañar nuestra promesa.'),S(15,'Todavía queda una escena por ver.','La más importante te está esperando en el final.')],recompensa:'Tu carta y una sorpresa te esperan en el final.'}
      ]
    },
    {
      num:14,tipo:'serie',titulo:'Nuestra vida que comienza',anio:2026,clasificacion:'TP',
      imagen:photo(29),musica:songs[0],cancion:songNames[0],top10:true,creditos:cred(),
      sinopsis:'La boda en marzo y el deseo de seguir construyendo nuestra historia.',
      episodios:[
        {titulo:'Caminar juntos',duracion:70,descripcion:'Cada paso de esta nueva etapa lo damos juntos.',
         escenas:[S(14,'Después de tanto tiempo separados,','hoy podemos caminar juntos.'),S(25,'Los planes nos trajeron hasta aquí.','Todavía tenemos mucho por vivir.'),S(33,'Y quiero seguir cuidando','esta oportunidad que nos dimos.')]},
        {titulo:'El capítulo de marzo',duracion:72,descripcion:'Nuestra boda es el siguiente capítulo.',
         escenas:[S(26,'Nos casamos en marzo.','Un día que esperamos con ilusión.'),S(22,'Hasta entonces, y después también,','quiero seguir eligiéndote.'),S(29,'Esta serie continúa.','A tu lado, Cristopher.')]}
      ]
    }
  ];
  temporadas[0].musica = M.cancionPrincipal;
  temporadas[0].cancion = 'La canción de nuestro video de boda';
  const extras = [
    {titulo:'Nuestro comienzo',img:photo(8),texto:'Fuimos novios en la secundaria. Años después, tuvimos otra oportunidad de estar juntos.'},
    {titulo:'Nuestra banda sonora',img:photo(7),texto:'La canción del video de nuestra boda es el tema principal, junto a ocho canciones que acompañan nuestra historia.'},
    {titulo:'El regreso',img:photo(3),texto:'Después de quince años en Estados Unidos, volviste para casarnos. Hace dos meses comenzó nuestro presente juntos.'},
    {titulo:'Mi historia completa',img:photo(36),texto:'Mis tres hijas forman parte de mi vida. Gracias por elegir caminar a mi lado con todo lo que soy.'},
    {titulo:'Un mes que nos espera',img:photo(26),texto:'Marzo. Nuestra boda. El próximo gran capítulo de nosotros.'}
  ];
  const final = {
    titulo:'Tus palabras para Viridiana',imagen:F.final,
    sinopsis:'Después de ver nuestra historia, comparte con Viridiana lo que sientes.',
    preguntas:[
      '¿Qué recuerdo de nuestra historia te gustaría volver a vivir?',
      '¿Qué sentiste cuando por fin pudimos estar juntos?',
      '¿Qué es lo que más te ilusiona de nuestra boda?',
      '¿Qué te gustaría que construyéramos en esta nueva etapa?',
      '¿Qué te gustaría decirme hoy?'
    ],
    carta: () => `Mi vida, hoy quiero decirte que yo también te elijo, cada día. No esperé a la boda para decírtelo: sí, mil veces sí.\n\nTú me diste tu promesa, y hoy quiero darte la mía. No es solo un anillo, es mi corazón diciendo: voy contigo, en las buenas y en las malas.\n\nCuando me diste tu anillo, sentí que el mundo se detenía. Pero quiero que sepas que mi compromiso es tan grande como el tuyo. Este anillo no compite con el tuyo, camina junto a él.\n\nGracias por elegirme. Yo te elijo a ti, hoy y todos los días de mi vida.\n\nTu futura esposa ❤️`
  };
  const creditos = [
    ['Una historia de','Viridiana y Cristopher'],['De todo corazón','Viridiana'],['Para','Cristopher'],
    ['Nuestro primer capítulo','La secundaria'],['Una nueva oportunidad','11 de noviembre de 2024'],
    ['Lo que nos acompañó','Cada llamada y cada reencuentro'],['Lo que celebramos','Dos años de nosotros'],
    ['Nuestro próximo capítulo','Nuestra boda en marzo'],['Una promesa','Seguir eligiéndonos'],
    ['', 'Esta historia continuará. Contigo.'],['','11 de noviembre de 2026']
  ];
  const postCreditos = {
    imagen:F.postCreditos,etiqueta:'NUESTRA PRÓXIMA TEMPORADA',
    texto:'Cristopher, nuestra historia todavía tiene mucho por vivir.',
    anuncio:'Nos casamos en marzo',subtitulo:'Y hoy, esta promesa también es para ti.',
    sorpresa:'La historia continúa en marzo, cuando nos casamos.'
  };
  return {pareja:P,fotos:F,media:M,acceso,notificacion,sitio,temporadas,extras,final,creditos,postCreditos};
})();

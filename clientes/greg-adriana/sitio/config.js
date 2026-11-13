/* Greg Maldonado Perez → Adriana Lucia Santiago Vasquez · Nuestro Capítulo */
window.TDN = (() => {
  const fecha = '16 de noviembre de 2026';
  const titulo = 'Donde estés tú';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;
  const stock = (n, video = false) => ({
    img: `assets/ambiente/${n}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${n}.webp` }),
    ambientacion: true
  });
  const recuerdo = { img: 'assets/video/recuerdo.mp4', poster: 'assets/video/recuerdo.webp' };
  const escena = (m, texto) => ({ ...(typeof m === 'number' ? { img: foto(m) } : m), texto });
  const pista = (id, cancion) => ({ id, cancion, musica: `assets/audio/${id}-climax.mp3` });
  const jesse = pista('llegaste-tu','Llegaste tú · Jesse & Joy');
  const zoe = pista('corazon-atomico','Corazón atómico · Zoé');
  const enjambre = pista('divergencia','Divergencia · Enjambre');
  const sinBandera = pista('kilometros','Kilómetros · Sin Bandera');
  const malu = pista('ahora-tu','Ahora tú · Malú');
  const creditos = [['Para','Adriana Lucia Santiago Vasquez'], ['De','Greg Maldonado Perez']];
  const original = [
    'Todo empezó entre guardias, conversaciones acerca de nosotros, miradas y sonrisas que poco a poco se fueron convirtiendo en algo mucho más especial.',
    'Recuerdo nuestro primer café, aquella partida de UNO en las que terminaste ganándome de manera aplastante, las tardes caminando por Oaxaca, aquel día en que nos sorprendió la lluvia y terminamos compartiendo un paraguas. Recuerdo también nuestra aventura a San José del Pacífico, bien valerosos pasando ese puente bajo la lluvia, los paisajes, los momentos juntos y esa sensación tan bonita de estar exactamente donde quería estar: contigo.',
    'Son recuerdos que quizá para alguien más sean momentos cotidianos, pero para mí tienen un significado enorme, porque en cada uno de ellos fui descubriendo lo especial que eres y lo feliz que me hace compartir mi vida contigo.',
    'Después llegó nuestra historia, nuestra decisión de estar juntos y también esta distancia que hoy nos toca vivir. Pero si algo tengo claro es que ningún kilómetro puede cambiar lo que siento por ti.',
    'Porque no solamente me enamoré de ti, también me enamoré de nuestra historia, de nuestros recuerdos y de todo lo que todavía nos falta vivir.'
  ];
  const episodio = (titulo, descripcion, track, escenas, corte = 'pelicula') => ({
    titulo, descripcion, escenas, duracion: 6 + escenas.length * 10, cancion: track.cancion,
    musica: corte === 'pelicula' ? track.musica : `assets/audio/${track.id}-episodio.mp3`
  });
  const pelicula = (num, titulo, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(num), anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, cancion: track.cancion, musica: track.musica,
    creditos: [...creditos,['Música',track.cancion]],
    episodios: [{ ...episodio(titulo, sinopsis, track, escenas), imagen: portada(num) }]
  });
  const temporadas = [
    pelicula(0,'Entre guardias y café',jesse,
      'Unas conversaciones entre guardias, el primer café y una derrota en el UNO que Greg todavía recuerda.',[
      escena(3,'Amor, todo empezó entre guardias. Nos pusimos a platicar de nosotros y me gustó lo fácil que era seguir hablando contigo.'),
      escena(4,'Todavía me gusta pensar en esas miradas y sonrisas. Poco a poco me fui dando cuenta de cuánto me importabas.'),
      escena(stock('cafe'),'Me acuerdo de nuestro primer café. Hoy me encantaría sentarme otra vez frente a ti y alargar la plática hasta que se enfriara.'),
      escena(5,'Y cómo olvidar el UNO. Me ganaste de manera aplastante. Cuando juguemos otra vez, mínimo dame chance de pedir revancha.'),
      escena(13,'Gracias por dejarme conocerte en esos ratitos entre guardias. Qué suerte la mía que de ahí empezara todo.'),
      escena(6,'Si pudiera volver al principio, igual me quedaría platicando contigo un poquito más.'),
      escena(10,'De todas esas miradas, me quedo con las tuyas. Feliz mesiversario, amor.')
    ]),
    pelicula(1,'Debajo del mismo paraguas',zoe,
      'Una caminata por Oaxaca cambia de rumbo cuando los sorprende la lluvia y los dos acaban bajo un paraguas.',[
      escena(stock('oaxaca'),'Me acuerdo de las tardes caminando por Oaxaca. Si pudiera repetir una de ellas, me tomaría todavía más tiempo para recorrerla contigo.'),
      escena(15,'Me gusta mirar estas fotos y acordarme del gusto de salir contigo, de tener toda una tarde por delante.'),
      escena(16,'Hay lugares a los que me gustaría volver solo por caminar otra vez a tu lado.'),
      escena(stock('lluvia',true),'Una tarde nos sorprendió la lluvia. Terminamos compartiendo un paraguas, caminando más cerquita de lo que habíamos empezado.'),
      escena(recuerdo,'Este video me hace pensar en la cantidad de ratitos que hemos podido guardar, incluso cuando el cielo cambia de golpe.'),
      escena(14,'Ahora, cuando te extraño, me encantaría que lo más complicado del día fuera volver a caber los dos bajo el paraguas.'),
      escena(28,'Me encanta este beso en Oaxaca. Cuando volvamos a caminar por ahí, si llueve, yo llevo el paraguas.')
    ]),
    pelicula(2,'El puente bajo la lluvia',enjambre,
      'En San José del Pacífico, dos valerosos cruzan un puente bajo la lluvia. A Greg se le queda grabada la compañía.',[
      escena(stock('sierra',true),'Pienso en San José del Pacífico y enseguida vuelvo a imaginar el paisaje y aquella lluvia.'),
      escena(9,'De todos los momentos del viaje, ninguno me hace sonreír como el del puente. ¡Bien valerosos los dos, cruzándolo bajo la lluvia!'),
      escena({ img: 'assets/video/columpio.mp4', poster: 'assets/video/columpio.webp' },'Mira cómo se abre el paisaje desde el columpio. Me encanta que tengamos este video para volver un ratito al viaje.'),
      escena(12,'Cuando repaso las fotos, vuelvo a sentir esas ganas de quedarme un rato más ahí.'),
      escena(11,'En aquel viaje sentí que estaba exactamente donde quería estar: contigo.'),
      escena(2,'Gracias por animarte a vivir conmigo esas aventuras que luego se vuelven nuestras mejores anécdotas.'),
      escena(10,'Me ilusiona volver a hacer un viaje contigo. Tengo ganas de otro paisaje para mirar juntos y, con suerte, un puente seco.')
    ]),
    pelicula(3,'Lo que no miden los kilómetros',sinBandera,
      'Después de elegirse, les toca vivir la distancia. Greg encuentra en los recuerdos y en las llamadas razones para mirar hacia el reencuentro.',[
      escena(20,'Después de aquellas guardias, del café y de los paseos, decidimos estar juntos. Sigo feliz de haber tomado esa decisión contigo.'),
      escena(17,'Hoy nos toca estar lejos. Extraño poder acercarme a ti después de contarte cómo me fue.'),
      escena(18,'Gracias por encontrar un rato para hablar conmigo. Hasta cuando solo nos contamos lo que hicimos en el día, verte me hace bien.'),
      escena(19,'Quiero seguir escuchándote y haciéndote un espacio en mis días, aun cuando el abrazo tenga que esperar.'),
      escena(22,'Ningún kilómetro cambia lo que siento por ti. Cuando cierro la llamada, todavía me quedo un rato pensando en tu cara.'),
      escena(21,'Cuando volvamos a estar cerca, quiero abrazarte primero. Luego te invito un café y me cuentas todo lo que se me perdió entre llamadas.'),
      escena(14,'Me enamoré de ti, de nuestra historia y de todo lo que todavía nos falta vivir.')
    ]),
    {
      num: 4, tipo: 'serie', titulo: 'Todavía nos queda camino', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', musica: malu.musica, cancion: malu.cancion,
      sinopsis: 'Tres episodios sobre los detalles que Greg agradece, cómo quiere cuidar el amor a distancia y lo que sueña compartir cuando vuelvan a estar cerca.',
      creditos,
      episodios: [
        episodio('Gracias por lo de todos los días','Una mirada a los momentos pequeños que hicieron grande la historia.',malu,[
          escena(1,'A veces miro nuestras fotos y pienso en lo mucho que me gusta compartir contigo incluso los ratos de descanso.'),
          escena(7,'De las caminatas también me quedo con lo de todos los días: elegir por dónde ir, pararnos a ver algo y seguir sin prisa.'),
          escena(8,'Entre las primeras sonrisas y las de ahora, fui descubriendo lo feliz que me hace compartir mi vida contigo.'),
          escena(23,'Gracias por darme tantos recuerdos que me siguen sacando una sonrisa cuando estamos lejos.'),
          escena(25,'Tengo una debilidad por las fotos en las que te ríes. Esta me da ganas de verte reír otra vez.')
        ],'serie'),
        episodio('Hacerte espacio, aun de lejos','Los planes pequeños con los que Greg quiere que la distancia pese menos.',sinBandera,[
          escena(24,'Hay días en los que la pantalla se siente demasiado pequeña para todo lo que quisiera decirte.'),
          escena(27,'Quiero que podamos contarnos también lo que nos cuesta, y escucharnos con el mismo cariño que cuando el día va bien.'),
          escena(26,'Me gustaría que siguiéramos apartando ratitos para nosotros, incluso si ese día solo alcanzan para vernos la cara.'),
          escena(22,'Gracias por estar del otro lado. Ojalá pueda hacerte sentir acompañada en los días en que también me extrañes.'),
          escena(20,'Y cuando se pueda, cambiamos la llamada por una caminata. Tengo muchas ganas.')
        ],'serie'),
        episodio('La próxima vez que te vea','Un plan sencillo para el reencuentro: un abrazo, tiempo juntos y una revancha pendiente.',zoe,[
          escena(28,'Cuando por fin te vea, quiero abrazarte el tiempo que me haga falta para caer en cuenta de que ya estás aquí.'),
          escena(stock('cafe'),'Después, vamos por un café. Quiero que nos alcance el tiempo para hablar de todo, como al principio.'),
          escena(5,'También quiero la revancha de UNO. Si vuelves a ganarme, me va a dar tanto gusto estar ahí que hasta te voy a felicitar.'),
          escena(stock('oaxaca'),'Quiero volver a caminar Oaxaca contigo, descubrir más lugares y tener otras fotos para mirar cuando te extrañe.'),
          escena(10,'Y ojalá que, cuando llegue otro día 16, ya tengamos un recuerdo nuevo que hoy ni siquiera imaginamos.')
        ],'serie')
      ]
    }
  ];
  return {
    pareja: { nombreA: 'Greg', nombreB: 'Adri', nombreCompletoA: 'Greg Maldonado Perez',
      nombreCompletoB: 'Adriana Lucia Santiago Vasquez', mesiversario: '2026-11-16', ciudad:'Oaxaca', viajes:['San José del Pacífico'] },
    fotos: { hero: 'assets/fotos/hero.webp', perfilB:'assets/fotos/perfil-adriana.webp', perfilPareja:'assets/fotos/perfil-juntos.webp',
      t0:foto(6), t1:foto(8), t2:foto(10), t3:foto(11), t4:foto(28), t5:foto(25) },
    media: { intro:'assets/audio/intro.mp3', temporadas:temporadas.map((s)=>s.musica), videoFinal:'assets/video/para-adriana.mp4' },
    acceso: { demo:false, password:'57d007b09ade48ed22808fa42446ce7cd90d8dce81f2b68f6b4771f8d7a7aaff', pistaPassword:'Nuestro mesiversario: día, mes y los últimos dos dígitos del año (DDMMAA).', estreno:'' },
    notificacion: { whatsapp:'522881054490', email:'', endpoint:'' },
    sitio: { titulo, url: 'https://streaming-us.rotfstudio.com/clientes/greg-adriana/sitio/index.html?compartir=1',
      coincidencia:100, clasificacion:'TP', clasificacionTexto:'Una dedicatoria de mesiversario',
      heroTag:'DE GREG, PARA TI', heroTop:fecha, filaRecomendada:'Nuestro capítulo',
      sinopsis:'De las guardias al primer café. De las calles de Oaxaca a un puente bajo la lluvia. Amor, junté estos recuerdos porque ni la distancia me quita las ganas de seguir haciendo planes contigo. — Greg',
      generos:['Romance','Mesiversario','Basada en su historia'] },
    temporadas,
    extras: [
      { titulo:'La historia que escribió Greg', img:foto(14), texto:original.join('\n\n') },
      { titulo:'La revancha pendiente', img:foto(5), texto:'Te debo otra partida de UNO. Después del próximo café, ¿jugamos?' }
    ],
    final: {
      titulo:'Para cuando me extrañes', imagen:portada(5),
      sinopsis:'Cinco preguntas para recordar juntos y una carta de Greg para este mesiversario.',
      preguntas:[
        '¿Qué recuerdas de nuestras primeras pláticas entre guardias?',
        '¿Qué momento te da más risa cuando piensas en nuestro primer café o en el UNO?',
        '¿Qué recuerdo se te viene primero a la cabeza de Oaxaca o de San José del Pacífico?',
        '¿Qué te gustaría que hiciéramos la próxima vez que nos veamos?',
        '¿Qué plan te hace ilusión que hagamos juntos en los próximos meses?'
      ],
      carta: () => [
        'Amor:',
        'Hoy me puse a pensar en aquellas guardias. En lo fácil que era seguir platicando contigo, en el primer café y en lo poquito que me duró la esperanza de ganarte al UNO. Si me hubieran dicho todo lo que íbamos a compartir después de esos ratitos, me habría costado quedarme quieto de la emoción.',
        'Gracias por caminar conmigo, en Oaxaca y en aquel puente de San José del Pacífico, y por seguir haciéndome un lugar en tus días ahora que nos toca estar lejos. Extraño tenerte cerquita. Mientras tanto, quiero seguir sabiendo cómo amaneciste, qué te hizo reír y cómo puedo acompañarte cuando el día se ponga difícil.',
        'Tengo ganas de volver a darte un abrazo largo, salir por café y dejar que se nos vaya la tarde platicando. Y quiero que sigamos buscando tiempo para los planes que nos hacen ilusión, desde la revancha de UNO hasta otro viaje juntos.',
        'Me enamoré de ti y también de la historia que hicimos sin darnos cuenta, entre guardias, lluvia y risas. Qué bonito que todavía nos quede tanto por vivir.',
        'Feliz mesiversario, amor.\nCon cariño, Greg'
      ].join('\n\n')
    },
    creditos:[...creditos,['Mesiversario',fecha],['Banda sonora',[jesse,zoe,enjambre,sinBandera,malu].map((s)=>s.cancion).join(' / ')],['Escenas ilustrativas','Pexels']],
    postCreditos:{ imagen:foto(10), etiqueta:'ESCENA POST-CRÉDITOS',
      texto:'Ya elegí qué hacer cuando nos veamos: primero te abrazo. Después decidimos quién reparte las cartas.',
      anuncio:'Nos vemos en el próximo capítulo', subtitulo:'Nuestro café todavía está pendiente.', sorpresa:'Feliz mesiversario, amor. — Greg' }
  };
})();


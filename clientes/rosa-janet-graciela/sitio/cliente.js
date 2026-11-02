/* Rosa Janet → Graciela. Copia independiente de la plantilla. */
(() => {
  const c=window.TDN;
  const f=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
  const v=n=>`assets/video/video-${String(n).padStart(2,'0')}.mp4`;
  const vp=n=>`assets/fotos/video-${String(n).padStart(2,'0')}.webp`;
  const a=n=>`assets/audio/cancion-${String(n).padStart(2,'0')}.mp3`;
  const songs=['Lover — Taylor Swift','Birds of a Feather — Billie Eilish','Ordinary — Alex Warren','Just the Way You Are — Bruno Mars','The Only Exception — Paramore','Legendary Lovers — Katy Perry','Daisies — Justin Bieber','Be Mine — GIO DARA','So High School — Taylor Swift','De piedra a papel — Carin León','ily (i love you baby) — Surf Mesa y Emilee','Tu jardín con enanitos — Melendi','Ahora tú — Malú','Mi mundo tú — Yahir'];
  Object.assign(c.pareja,{
    nombreA:'Rosa Janet',nombreB:'Greys',apodos:['Greys','Graciela'],apodo:'Greys',
    fechaInicio:'2024-11-09',anioInicio:2024,anios:2,aniosManual:2,fechaCodigo:'09112024',
    ciudad:'Nuestro lugar de trabajo',primeraCita:'La estética',cancion:'Lover',artista:'Taylor Swift',
    viajes:[],dificiles:['Los encuentros de quince minutos entre turnos','Aprender a construir una familia juntas'],
    anecdota:'En el primer beso chocaron nuestros dientes y nos reímos',culpableAnecdota:2,
    gustosB:[],suenos:['Seguir cuidando nuestro amor','Acompañar a nuestros hijos','Seguir construyendo nuestro hogar'],
    mensajeFinal:'Greys, lo que empezó con una cita para las cejas se convirtió en la historia más bonita de mi vida. Gracias por aquel primer beso, por cada encuentro breve y por elegirme el 9 de noviembre de 2024. Hoy somos una familia que se cuida y lucha cada día por salir adelante. Te amo. Rosa Janet.'
  });
  Object.assign(c.fotos,{hero:f(1),perfilB:f(21),perfilPareja:f(1),final:f(45),postCreditos:f(30),puzzle:f(5)});
  [f(18),f(16),f(5),f(4),f(7),f(9),f(17),f(10)].forEach((img,i)=>c.fotos[`t${i}`]=img);
  Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:songs.map((_,i)=>a(i+1)),canciones:songs,musica:'',videoFinal:'',audioRemitente:'assets/audio/voz-01.mp3'});
  Object.assign(c.acceso,{demo:false,password:'',pistaPassword:'',estreno:''});
  Object.assign(c.notificacion,{whatsapp:'529981888482',email:'',endpoint:''});
  Object.assign(c.sitio,{
    url:'',heroTop:'De Rosa Janet, para Greys',heroTag:'9 DE NOVIEMBRE · DOS AÑOS',
    titulo:'Nuestra historia, ahora en streaming',
    sinopsis:'Una cita para las cejas. Un primer beso entre risas. Quince minutos robados a los turnos. Hoy somos una familia y celebramos dos años de elegirnos.',
    filaRecomendada:'La historia que empezó con unas cejas',
    generos:['Romance','Familia','Basada en nuestra historia'],clasificacion:'TP',
    clasificacionTexto:'Una historia de amor y familia'
  });
  const photo=(n,...texto)=>({img:f(n),poster:f(n),texto});
  const video=(n,...texto)=>({img:v(n),poster:vp(n),texto});
  const titles=[
    {titulo:'Antes de conocerte',imagen:f(18),song:9,sinopsis:'Dos vidas cerca, todavía sin saber que un estado de WhatsApp iba a cambiarlo todo.',escenas:[photo(18,'Yo seguía con mis turnos como policía.','Trabajaba en la misma corporación que tu mamá.'),photo(16,'Tú, Greys, tenías tu mundo en la estética.'),photo(1,'Aún no sabía que nuestras historias estaban a punto de encontrarse.')]},
    {titulo:'La publicación que lo empezó todo',imagen:f(16),song:8,sinopsis:'Una promoción de belleza en el estado de WhatsApp de tu mamá.',escenas:[photo(18,'A principios de septiembre vi un estado de WhatsApp de tu mamá.'),photo(16,'Era una promoción de belleza. Me interesó hacerme las cejas contigo.'),photo(4,'Le pedí que me consiguiera una cita con su hija para doce días después.')]},
    {titulo:'Doce días para verte',imagen:f(5),song:4,sinopsis:'Greys escribió para confirmar la cita. La espera terminó en la estética.',escenas:[photo(16,'Pasaron los días y tú me escribiste para saber si aún quería la cita.'),photo(5,'Te dije que sí. Cuando llegué a la estética y te vi, quedé flechada.'),photo(6,'Ese día iba por mis cejas. Salí pensando en ti.')]},
    {titulo:'Un mensaje que no me atrevía a enviar',imagen:f(4),song:5,sinopsis:'El trabajo de las cejas fue la excusa para decir lo que empezaba a sentir.',escenas:[photo(16,'Le dije a tu mamá que me había gustado mucho tu trabajo.'),photo(4,'No me atreví a escribirte directamente. Pensé que tu pareja podía malinterpretar el mensaje.'),photo(12,'Con los días empezamos a conversar cada vez más.')]},
    {titulo:'El beso de los dientes',imagen:f(8),song:11,sinopsis:'Greys llegó a vender comida. Rosa Janet le pidió un beso y las dos terminaron riendo.',escenas:[photo(13,'Un día viniste a mi casa a venderme la comida que habías preparado.'),photo(8,'Ahí me animé a pedirte un beso.'),photo(5,'Chocaron nuestros dientes. Nos miramos y nos reímos.'),video(1,'Ese primer beso imperfecto fue el comienzo de algo muy nuestro.')]},
    {titulo:'Quince minutos contigo',imagen:f(11),song:7,sinopsis:'Entre turnos de un día sí y un día no, bastaban quince minutos para volver a verse.',escenas:[photo(18,'Yo trabajaba un día sí y un día no.'),photo(11,'Nos veíamos en ratitos de unos quince minutos. Todo pasaba muy rápido.'),video(2,'Cada encuentro breve me dejaba deseando el siguiente.'),photo(9,'Aprendimos a hacer lugar para nosotras incluso en días ocupados.')]},
    {titulo:'La llamada del 9 de noviembre',imagen:f(7),song:1,sinopsis:'Por teléfono, Rosa Janet le pidió a Greys que fuera su novia. Greys dijo que sí.',escenas:[photo(3,'Los meses pasaron entre mensajes y encuentros.'),photo(7,'El 9 de noviembre de 2024 te pedí por teléfono que fueras mi novia.'),photo(1,'Aceptaste. También pusiste tus condiciones, y comenzamos nuestra historia juntas.') ]},
    {titulo:'Un hogar para dos',imagen:f(12),song:3,sinopsis:'Dos meses después, Greys se mudó con Rosa Janet.',escenas:[photo(12,'Dos meses después empezamos a vivir juntas.'),video(3,'La vida compartida llegó con días sencillos, cambios y mucho aprendizaje.'),photo(14,'Nuestro hogar empezó a llenarse de recuerdos propios.')]},
    {titulo:'La familia crece',imagen:f(17),song:12,sinopsis:'Primero llegó el hijo de Greys; después, su hija. El hogar se volvió de cuatro.',escenas:[photo(17,'Después vino a vivir con nosotras tu hijo, que tenía catorce años.'),photo(17,'Meses más tarde llegó también tu hija de doce.'),photo(7,'Nos volvimos una familia de cuatro, aprendiendo a cuidarnos cada día.') ]},
    {titulo:'Los días que también cuentan',imagen:f(9),song:2,sinopsis:'La historia se escribe en risas, salidas, trabajo y pequeños momentos cotidianos.',escenas:[photo(9,'No todos los capítulos necesitan una fecha especial.'),video(4,'Están los días comunes y las risas que nos acompañan.'),photo(14,'Cada recuerdo suma una página a nuestra vida juntas.'),video(5,'Y en cada etapa volvemos a elegirnos.') ]},
    {titulo:'También eres parte de nosotros',imagen:vp(9),song:10,sinopsis:'La hija de Rosa Janet también tiene un lugar en esta familia, aunque se vean pocas veces.',escenas:[video(9,'Hay otra niña que también forma parte de nuestra familia: mi hija.'),photo(7,'La veo pocas veces, pero su lugar en mi corazón y en esta historia permanece.'),photo(17,'Nuestra familia tiene distintas formas de estar cerca. Nadie queda fuera de ella.') ]},
    {titulo:'Dos años, y lo que viene',imagen:f(7),song:14,sinopsis:'Del 9 de noviembre de 2024 al 9 de noviembre de 2026: dos años de amor y familia.',escenas:[photo(7,'Greys: el 9 de noviembre de 2026 celebramos dos años de novias.'),photo(1,'Seguimos luchando por salir adelante y amándonos cada día.'),video(7,'Gracias por construir conmigo esta historia.'),photo(7,'Quiero seguir escribiendo los próximos capítulos a tu lado.') ]}
  ];
  const film=titles.map((x,i)=>({num:i,tipo:'pelicula',titulo:x.titulo,anio:i<6?2024:2026,clasificacion:'TP',imagen:x.imagen,top10:i<3,
    musica:a(x.song),cancion:songs[x.song-1],sinopsis:x.sinopsis,creditos:[['Para','Greys'],['De','Rosa Janet'],['Nuestra fecha','9 de noviembre de 2024']],
    episodios:[{titulo:x.titulo,descripcion:x.sinopsis,duracion:48,escenas:x.escenas,interaccion:null,recompensa:''}]}));
  const game=(i,interaccion)=>film[i].episodios[0].interaccion=interaccion;
  game(1,{tipo:'quiz',titulo:'La primera señal',pregunta:'¿Qué promoción hizo que pidiera una cita contigo?',opciones:['Cejas','Cabello','Uñas'],correcta:0,ok:'Todo comenzó con una cita para las cejas.'});
  game(2,{tipo:'adivinanza',titulo:'Donde te vi',texto:'Fui por mis cejas y salí flechada. ¿Dónde te vi por primera vez?',respuestas:['estetica','la estetica','salon','salon de belleza'],pista:'Era tu lugar de trabajo.',ok:'En la estética.'});
  game(4,{tipo:'quiz',titulo:'Nuestro primer beso',pregunta:'¿Qué pasó en nuestro primer beso?',opciones:['Chocaron nuestros dientes y nos reímos','Se fue la luz','Sonó el teléfono'],correcta:0,ok:'Ese beso todavía me hace sonreír.'});
  game(5,{tipo:'completar',titulo:'Nuestros ratitos',frase:'Entre turnos, nos veíamos por unos ___ minutos.',opciones:['15','30','60'],correcta:0,ok:'Quince minutos que valían muchísimo.'});
  game(6,{tipo:'codigo',titulo:'Nuestra fecha',modo:'fecha',pregunta:'¿Qué día aceptaste ser mi novia?',placeholder:'DDMMAAAA',respuestas:['09112024','09/11/2024','9 de noviembre de 2024'],pista:'Fue en noviembre de 2024.',ok:'9 de noviembre de 2024.'});
  game(8,{tipo:'ordenar',titulo:'Nuestra familia',eventos:['Greys se vino a vivir conmigo','Su hijo llegó a nuestro hogar','Su hija se vino a vivir con nosotras','Nos convertimos en una familia de cuatro'],ok:'Un hogar que fuimos formando paso a paso.'});
  game(11,{tipo:'memory',titulo:'Nuestros recuerdos',pares:[f(1),f(3),f(5),f(7),f(9),f(12)],ok:'Cada imagen guarda algo de nosotros.'});
  const series=[
    {titulo:'En nuestros propios ojos',imagen:f(6),song:6,sinopsis:'Las fotos y videos que guardan lo que fuimos viviendo.',episodios:[
      {titulo:'Instantes para volver',escenas:[photo(1,'Una foto no puede contar todo lo que sentimos, pero nos devuelve a ese instante.'),photo(3,'Me gusta encontrarnos juntas en estas imágenes.'),photo(5,'Hay sonrisas que reconocería entre mil.'),video(8,'Y movimientos que una foto sola no podría guardar.')]},
      {titulo:'Días compartidos',escenas:[photo(6,'Hemos vivido días diferentes, todos parte de la misma historia.'),photo(13,'Algunos recuerdos llegan sin aviso.'),video(8,'Otros merecen volver a verse una y otra vez.'),photo(15,'Me alegra haberlos vivido contigo.')]}]},
    {titulo:'Nuestra casa',imagen:f(17),song:13,sinopsis:'Una serie sobre nuestro hogar y las personas que forman parte de él.',episodios:[
      {titulo:'Cuatro en casa',escenas:[photo(12,'Primero aprendimos a compartir la vida las dos.'),photo(17,'Después nuestra casa recibió a tus hijos.'),photo(7,'Somos una familia de cuatro que sigue aprendiendo y creciendo.')]},
      {titulo:'Todos tienen su lugar',escenas:[photo(17,'Tus hijos son nuestros hijos en esta historia.'),video(9,'Mi hija también pertenece a nuestra familia, aunque nos veamos pocas veces.'),photo(18,'El cariño no se mide por la frecuencia de una visita.'),photo(7,'Quiero que siempre sepan que tienen un lugar con nosotras.')]}]},
    {titulo:'Lo que aún nos espera',imagen:f(7),song:1,sinopsis:'Mirar estos dos años y desear muchos capítulos más.',episodios:[
      {titulo:'Dos años de nosotras',escenas:[photo(7,'Desde aquel 9 de noviembre han pasado dos años.'),photo(4,'Todavía recuerdo cómo empezó todo.'),video(6,'Hoy miro nuestra vida y agradezco haberme animado a conocerte.') ]},
      {titulo:'Continuará',escenas:[photo(1,'La historia sigue en cada día que elegimos caminar juntas.'),photo(17,'En nuestro hogar y en quienes amamos.'),photo(7,'Greys, quiero seguir contigo. Con amor, Rosa Janet.')]}]}
  ].map((s,j)=>({num:12+j,tipo:'serie',titulo:s.titulo,anio:2026,clasificacion:'TP',imagen:s.imagen,musica:a(s.song),cancion:songs[s.song-1],sinopsis:s.sinopsis,creditos:[['De','Rosa Janet'],['Para','Greys']],episodios:s.episodios.map(e=>({titulo:e.titulo,descripcion:s.sinopsis,duracion:48,escenas:e.escenas,interaccion:null,recompensa:''}))}));
  // Revisión de la clienta: escenas más ágiles, fotos variadas y su familia completa.
  const extra=[
    [photo(24,'Mis turnos de policía seguían su ritmo.'),photo(21,'Y tú construías el tuyo en la estética.')],
    [photo(25,'Un estado de WhatsApp fue la primera señal.'),photo(21,'Doce días después iba a conocerte.')],
    [photo(22,'La cita llegó por fin.'),photo(23,'Aquel encuentro cambió todo para mí.')],
    [photo(22,'El trabajo de tus manos fue nuestra primera conversación.'),photo(23,'Después llegaron mensajes que quería seguir leyendo.')],
    [photo(46,'Esa risa nos acercó más de lo que imaginaba.')],
    [photo(35,'Quince minutos podían alegrarme todo el día.'),photo(47,'Siempre encontraba una razón para volver a verte.')],
    [photo(47,'Aquel sí fue el inicio de nuestra temporada.'),photo(48,'Desde entonces elegimos caminar juntas.')],
    [photo(46,'Los pequeños momentos fueron haciendo nuestro hogar.'),photo(49,'Aprendimos a compartir la vida cada día.')],
    [],
    [photo(27,'También salimos a descubrir lugares juntas.'),photo(29,'Nuestras primeras vacaciones se volvieron recuerdos preciosos.')],
    [],
    []
  ];
  film.forEach((item,i)=>item.episodios[0].escenas.push(...extra[i]));
  film[8].imagen=f(30);
  film[8].sinopsis='Nuestra casa recibió a los niños y aprendimos a crecer como familia.';
  film[8].episodios[0].escenas=[
    photo(46,'Primero construimos un hogar para las dos.'),
    photo(17,'Después nuestra casa recibió a los niños.'),
    photo(26,'Cada quien encontró su lugar entre nosotras.'),
    photo(30,'Los míos y los tuyos: una familia que se quiere.'),
    photo(45,'Y seguimos aprendiendo a cuidarnos cada día.')
  ];
  film[10].titulo='Tu lugar en nuestra familia';
  film[10].imagen=f(19);
  film[10].episodios[0].escenas=[
    photo(19,'Mi hija también pertenece a nuestra familia, aunque nos veamos pocas veces.'),
    photo(20,'Cada encuentro con ella es un recuerdo que guardo con cariño.'),
    photo(30,'Nuestro amor tiene lugar para todos los niños.'),
    photo(45,'Los míos y los tuyos forman parte de esta historia.'),
    photo(26,'Siempre habrá un lugar para cada uno en nuestro corazón.')
  ];
  film[11].imagen=f(45);
  film[11].episodios[0].escenas=[
    photo(7,'Greys: el 9 de noviembre de 2026 celebramos dos años de novias.'),
    photo(29,'También celebramos nuestros primeros viajes juntas.'),
    photo(47,'Seguimos caminando de la mano.'),
    photo(45,'Seguimos luchando por salir adelante como familia.'),
    photo(49,'Quiero escribir los próximos capítulos a tu lado.')
  ];
  series[0].episodios[0].escenas.push(photo(31,'Hay recuerdos que invitan a sonreír otra vez.'));
  series[0].episodios[1].escenas.push(photo(28,'Las primeras vacaciones juntas nos dieron nuevas historias.'));
  series[1].imagen=f(45);
  series[1].episodios[0].escenas=[
    photo(46,'Primero aprendimos a compartir la vida las dos.'),
    photo(17,'Después nuestra casa recibió a los niños.'),
    photo(26,'Fuimos encontrando nuestro lugar como familia.'),
    photo(30,'Los míos y los tuyos, juntos en una misma foto.'),
    photo(45,'Y cada día nos seguimos eligiendo.')
  ];
  series[1].episodios[1].escenas=[
    photo(17,'Tus hijos tienen su lugar en nuestra casa.'),
    photo(19,'Mi hija también pertenece a nuestra familia, aunque nos veamos pocas veces.'),
    photo(20,'Su sonrisa también forma parte de esta historia.'),
    photo(30,'En esta familia cabemos todos.'),
    photo(45,'Los míos y los tuyos: todos tienen su lugar.')
  ];
  series[2].episodios[0].escenas.push(photo(29,'Nuestras primeras vacaciones también son parte de estos dos años.'),photo(45,'La familia que formamos es mi capítulo favorito.'));
  series[2].episodios[1].escenas.push(photo(47,'Todavía quedan caminos por recorrer juntas.'),photo(49,'Y recuerdos nuevos por crear.'));
  film[9].episodios[0].escenas.push(video(10,'También guardamos nuestros momentos más espontáneos.'));
  c.temporadas.splice(0,c.temporadas.length,...film,...series);
  c.extras=[
    {titulo:'La cita de las cejas',img:f(16),texto:'El primer encuentro en la estética'},
    {titulo:'Nuestro primer beso',img:f(8),texto:'Chocaron nuestros dientes y nos reímos'},
    {titulo:'Nuestra fecha',img:f(7),texto:'9 de noviembre de 2024'},
    {titulo:'Nuestro hogar',img:f(17),texto:'Una familia que crece con amor'},
    {titulo:'Una parte de mí',img:f(18),texto:'Rosa Janet en uniforme'},
    {titulo:'Mi hija',img:f(19),texto:'También forma parte de nuestra familia'}
  ];
  Object.assign(c.final,{
    titulo:'Una carta para Greys',imagen:f(7),sinopsis:'Después de doce películas y tres series, todavía hay algo que quiero decirte.',
    preguntas:['¿Qué recuerdas de aquel primer beso?','¿Qué momento de estos dos años quisieras volver a vivir?','¿Qué te hace sentir nuestro hogar?','¿Qué sueño te gustaría construir conmigo?','¿Qué quisieras decirme hoy?'],
    carta:()=>`Greys:\n\nTodo empezó con una publicación de tu mamá y una cita para las cejas. Fui a la estética sin imaginar que, al verte, iba a cambiar mi vida. Después llegaron nuestros mensajes, la comida que me llevaste y aquel primer beso en el que chocaron nuestros dientes. Todavía me hace reír recordarlo.\n\nEntre mis turnos nos veíamos de quince minutos en quince minutos. El 9 de noviembre de 2024 te pedí que fueras mi novia por teléfono, y dijiste que sí. Dos meses después comenzamos a vivir juntas. Más tarde llegaron tus hijos y empezamos a formar nuestro hogar. Mi hija también forma parte de nuestra familia, aunque la vea pocas veces.\n\nHoy celebramos dos años. Gracias por acompañarme, por luchar conmigo para salir adelante y por amarnos cada día. Quiero seguir cuidando esta historia y a nuestra familia contigo.\n\nCon todo mi amor,\nRosa Janet`
  });
  c.creditos=[['Una historia de','Rosa Janet y Greys'],['De','Rosa Janet Alegria Maza'],['Para','Greys Perez'],['Primer encuentro','La estética'],['Nuestro primer beso','Una risa entre dientes'],['Nuestra fecha','9 de noviembre de 2024'],['Nuestra familia','Todos tienen su lugar'],['Continuará','En cada día juntas']];
  c.postCreditos={imagen:f(30),etiqueta:'NUESTRA PRÓXIMA TEMPORADA',texto:'Greys, todavía tenemos muchas historias por vivir.',anuncio:'Nuestra familia, nuestro futuro',subtitulo:'Y cada día una nueva oportunidad de elegirnos.',sorpresa:'Esta historia continúa con amor.'};
  document.addEventListener('DOMContentLoaded',()=>{
    if(!document.body.dataset.page||['player','splash','password','profiles'].includes(document.body.dataset.page))return;
    const add=(href,label,bottom,color)=>{const x=document.createElement('a');x.href=href;x.textContent=label;Object.assign(x.style,{position:'fixed',right:'16px',bottom,zIndex:'1000',background:color,color:'white',padding:'9px 14px',borderRadius:'999px',fontWeight:'700',textDecoration:'none',boxShadow:'0 4px 20px #0009'});document.body.append(x);};
    add('canciones.html','♫ Nuestras canciones','16px','#e50914');
    add('recuerdos.html','▣ Nuestros recuerdos','62px','#303030');
  });
})();

/* Experiencia completa de Microbio para Galindo. Contenido independiente. */
(() => {
  const c=window.TDN, A='Microbio', B='Galindo';
  const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
  const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
  const ph=(n,...texto)=>({img:foto(n),poster:foto(n),texto});
  const vd=(n,...texto)=>({img:`assets/video/momento-${String(n).padStart(2,'0')}.mp4`,poster:`assets/fotos/momento-${String(n).padStart(2,'0')}.webp`,texto});
  const paisaje=(nombre,...texto)=>({img:`assets/ambiente/${nombre}.webp`,texto});
  const ambiente=(nombre,...texto)=>({img:`assets/ambiente/${nombre}.mp4`,poster:`assets/ambiente/${nombre}-poster.webp`,texto});
  const nombres=[
    ['Porque tú llegaste — Jorge Medina','porque-tu-llegaste'],['Hasta donde te quiero — La Rondalla de Saltillo','hasta-donde'],
    ['Si quieres — Neto Bernal','si-quieres'],['No sé cómo pagarte — Fidel Rueda','no-se-como-pagarte'],
    ['Dame amor — Officialalex425','dame-amor'],['Hermoso cariño — Vicente Fernández','hermoso-carino'],
    ['Pvta Luna — Neton Vega','pvta-luna'],['LUNA — Peso Pluma, Junior H','luna'],
    ['Si yo te contara — La Arrolladora Banda El Limón','si-yo-te-contara'],['Vibra perfecta — Julión Álvarez','vibra-perfecta'],
    ['Mi talismán — Moy Bobadilla','mi-talisman'],['Suspiros — El Coyote y su Banda Tierra Santa','suspiros'],
    ['Dime — Julión Álvarez','dime'],['¿Cómo pagarte? — Carlos Rivera','como-pagarte'],['Amor, amor — Carla Morrison','amor-amor']
  ];
  const tracks=nombres.map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}-climax.mp3`}));
  const historia='Sabes, no puedo olvidar el primer día que nos pusimos de acuerdo para vernos. Estaba tan emocionada y tan nerviosa, pero cuando llegó el momento olvidé mis miedos. Cuando tomaste mi mano por primera vez, me sentí segura. Era todo perfecto.\n\nSabes, sé que hemos tenido errores ambos, pero te juro que mi amor por ti no ha cambiado. No quiero que se termine lo nuestro; quiero que cumplamos nuestra promesa de «juntos hasta viejitos».\n\n¿Aceptas? Acá esperaré. Si no me respondes, sabré entender, pero no olvides que te amo, mi bebo.';
  Object.assign(c.pareja,{nombreA:A,nombreB:B,apodos:['mi bebo','Galindo'],apodo:'mi bebo',fechaInicio:'2025-01-21',anioInicio:2025,anios:1,aniosManual:0,fechaCodigo:'21012025',ciudad:'Nuestro primer encuentro',primeraCita:'El día que tomaste mi mano',cancion:'Porque tú llegaste',artista:'Jorge Medina',viajes:[],dificiles:['Los errores de ambos'],anecdota:'Los nervios de aquel primer encuentro',culpableAnecdota:2,gustosB:[],suenos:['Cuidarnos mejor','Seguir construyendo nuestra historia','Juntos hasta viejitos'],mensajeFinal:historia});
  Object.assign(c.fotos,{hero:portada(6),perfilB:foto(6),perfilPareja:foto(6),t0:foto(4),t1:foto(6),t2:foto(7),t3:foto(8),t4:foto(9),t5:foto(10),t6:foto(11),t7:foto(12),final:portada(15),puzzle:foto(6),puzzle2:foto(15),postCreditos:foto(15)});
  Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/momento-01.mp4',audioRemitente:''});
  Object.assign(c.acceso,{demo:false,password:'e4b08ef2b7a820d1b77546c65411d12b17c977482620e15691003a23df2de4b4',pistaPassword:'Nuestra fecha especial: día, mes y los dos últimos dígitos del año.',estreno:''});
  Object.assign(c.notificacion,{whatsapp:'526633316789',email:'',endpoint:''});
  Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/microbio-galindo/sitio/index.html',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, recuerdos y una promesa',heroTag:'21 DE ENERO DE 2025 · NUESTRA HISTORIA',heroTop:'De Microbio, para Galindo',titulo:'Juntos hasta viejitos',sinopsis:'Mi bebo: no olvido el día que tomaste mi mano y me sentí segura. Doce películas, tres series y una promesa que todavía guardo en el corazón. Mi amor por ti no ha cambiado. ¿Aceptas escribir conmigo lo que sigue?',generos:['Romance','Nuestra historia','Una nueva oportunidad'],filaRecomendada:'Desde aquel primer encuentro'});
  const quiz={tipo:'quiz',titulo:'Ese primer día',pregunta:'¿Qué sentí cuando tomaste mi mano por primera vez?',opciones:['Me sentí segura','Me dio igual','Quise irme'],correcta:0,ok:'Contigo olvidé mis miedos y me sentí segura.'};
  const completar={tipo:'completar',titulo:'Nuestra promesa',frase:'Juntos hasta ___.',opciones:['viejitos','mañana','el domingo'],correcta:0,ok:'Juntos hasta viejitos. Esa promesa sigue en mi corazón.'};
  const adivinanza={tipo:'adivinanza',titulo:'Mi persona',texto:'Tiene un apodo que digo con cariño, tomó mi mano y me hizo sentir segura. ¿Quién es?',respuestas:['galindo','tu','yo','mi bebo','bebo'],pista:'Microbio le hizo esta historia.',ok:'Tú, Galindo. Mi bebo.'};
  const ordenar={tipo:'ordenar',titulo:'Así te lo cuento',eventos:['Nos pusimos de acuerdo para vernos','Me emocioné y me puse nerviosa','Llegó el momento de encontrarnos','Tomaste mi mano y me sentí segura'],ok:'No olvido ese primer día.'};
  const memory={tipo:'memory',titulo:'Pedacitos de nosotros',pares:[foto(4),foto(6),foto(7),foto(10),foto(11),foto(15)],ok:'Cada imagen guarda algo que no quiero olvidar.'};
  const fecha={tipo:'codigo',titulo:'Nuestro comienzo',modo:'fecha',pregunta:'¿Qué fecha marca nuestro aniversario?',placeholder:'DDMMAAAA',respuestas:['21012025','21/01/2025','210125'],pista:'21 de enero de 2025.',ok:'21 de enero de 2025. Una fecha que guardo conmigo.'};
  const quiz2={tipo:'quiz',titulo:'Lo que sigue intacto',pregunta:'A pesar de los errores de ambos, ¿qué no ha cambiado?',opciones:['Mi amor por ti','Nuestro peinado','El clima'],correcta:0,ok:'Mi amor por ti no ha cambiado, mi bebo.'};
  const film=(num,titulo,n,track,sinopsis,escenas,interaccion=null)=>({num,tipo:'pelicula',titulo,anio:2025,clasificacion:'TP',imagen:portada(n),musica:tracks[track].src,cancion:tracks[track].titulo,top10:num<3,sinopsis,creditos:[['Para',B],['Con amor de',A],['Música',tracks[track].titulo]],episodios:[{titulo,duracion:58,descripcion:sinopsis,escenas,interaccion,recompensa:''}]});
  const peliculas=[
    film(0,'El día que tomaste mi mano',4,0,'La emoción, los nervios y ese instante en que el miedo dejó lugar a la seguridad.',[
      ph(4,'No puedo olvidar el primer día','que nos pusimos de acuerdo para vernos.'),
      {img:'assets/fotos/primer-encuentro.jpg',poster:'assets/fotos/primer-encuentro.jpg',texto:[]},
      paisaje('atardecer','Estaba tan emocionada','y tan nerviosa a la vez.'),
      ph(6,'Pero llegó el momento de verte','y olvidé mis miedos.'),
      vd(1,'Cuando tomaste mi mano por primera vez,','me sentí segura.'),
      ph(15,'En ese momento, mi bebo,','todo se sentía perfecto.')],quiz),
    film(1,'Hasta donde te quiero',7,1,'Lo que siento por ti no cabe en una sola frase ni en una sola película.',[
      ph(7,'Hay cosas que me cuesta explicar.'),ph(8,'Como todo lo que siento','cuando pienso en ti.'),
      vd(2,'No quiero quedarme con las palabras','que todavía puedo decirte.'),
      paisaje('mar','Mi cariño está en los recuerdos','y en las ganas de volver a cuidarnos.'),
      ph(6,'Hasta donde te quiero, Galindo,','todavía hay mucho por contar.')]),
    film(2,'Si quieres, lo intentamos',15,2,'Una invitación a hablar con calma y elegir juntos el siguiente capítulo.',[
      ph(15,'No quiero que se termine lo nuestro.'),ph(10,'Quiero poder escucharte','sin adelantarnos a las respuestas.'),
      vd(3,'Decirte lo que siento','y conocer lo que sientes tú.'),ambiente('olas','Si quieres, podemos intentarlo','con más paciencia y más cuidado.'),
      ph(7,'La decisión también es tuya.','Yo te hablo desde el corazón.')],completar),
    film(3,'Gracias por aquella mano',11,3,'La gratitud de Microbio por el primer gesto que le dio seguridad.',[
      ph(11,'Gracias por aquel primer gesto.'),ph(4,'Por tomar mi mano','cuando yo estaba tan nerviosa.'),
      vd(4,'Por ese instante de calma','que todavía guardo conmigo.'),paisaje('cielo','A veces un detalle pequeño','se queda para siempre en la memoria.'),
      ph(6,'Gracias por ser parte','de una historia que me importa tanto.')]),
    film(4,'Dame un poquito de tu tiempo',8,4,'Lo que Microbio quisiera compartir: una conversación sincera, sin prisa.',[
      ph(8,'Si hoy me regalas un poquito de tu tiempo,'),ph(13,'quiero usarlo para decirte la verdad.'),
      vd(5,'Te extraño en las cosas sencillas','y pienso en lo que todavía podemos cuidar.'),
      ambiente('atardecer','Me gustaría hablar despacio,','mirarnos y escucharnos.'),ph(15,'Mi bebo, aquí están mis palabras.','Léelas a tu ritmo.')],adivinanza),
    film(5,'Hermoso cariño',6,5,'Los recuerdos felices también merecen su propia película.',[
      ph(6,'Qué bonito fue encontrarnos.'),ph(7,'Qué bonito guardar fotos','donde estamos cerquita.'),
      vd(6,'Volver a estos momentos','me recuerda cuánto te quiero.'),ph(10,'No quiero borrar lo bonito','por lo que nos ha costado.'),
      ph(15,'Este cariño sigue siendo','una parte muy importante de mí.')]),
    film(6,'Bajo el mismo cielo',14,6,'Una noche para pensar en lo que sentimos y en lo que todavía queremos decir.',[
      paisaje('cielo','Hay noches que invitan','a pensar con el corazón.'),ph(14,'Yo pienso en aquel primer encuentro.'),
      vd(7,'En lo nerviosa que estaba','antes de verte.'),ambiente('olas','En cómo se fue el miedo','cuando estuviste cerca.'),
      ph(6,'Y en lo mucho que todavía','significas para mí, Galindo.')],ordenar),
    film(7,'Lo que le contaría a la luna',3,7,'Las palabras que Microbio guarda cuando extraña a su bebo.',[
      paisaje('atardecer','Si pudiera contarle a la noche','todo lo que guardo,'),ph(3,'empezaría por tu nombre.'),
      vd(8,'Le hablaría de esa mano','que me hizo sentir segura.'),ph(9,'De la emoción de vernos','y de mi amor que no ha cambiado.'),
      ph(15,'Y terminaría con nuestra promesa:','juntos hasta viejitos.')]),
    film(8,'Si yo te contara',10,8,'Una película sobre lo que a veces cuesta decir en voz alta.',[
      ph(10,'Si yo te contara','cuánto me importa lo nuestro…'),ph(12,'Sabrías que no escribo esto','por costumbre.'),
      vd(9,'Lo escribo porque te amo','y porque quiero ser sincera contigo.'),ph(6,'Sé que ambos hemos cometido errores.'),
      ph(7,'También sé que mi amor por ti','no ha cambiado.')],quiz2),
    film(9,'Nuestra forma de sonreír',5,9,'Pequeños instantes que Microbio quiere volver a mirar.',[
      ph(5,'Me gusta volver a nuestras fotos.'),ph(6,'Detenerme un poquito','en nuestras sonrisas.'),
      vd(10,'Guardar los instantes','que el tiempo no puede repetir.'),ph(16,'Estos recuerdos son nuestros','y me alegra tenerlos.'),
      ph(15,'Ojalá podamos sumar','muchas sonrisas más.')],memory),
    film(10,'Mi lugar seguro',9,10,'Un gesto, una mano y el recuerdo de sentirse en calma.',[
      ph(9,'No olvido cómo me sentí','cuando tomaste mi mano.'),vd(11,'Los nervios dejaron','de ocuparlo todo.'),
      ph(11,'Me sentí segura.','Así de sencillo y así de importante.'),paisaje('mar','Quisiera que también tú encontraras','calma y cuidado a mi lado.'),
      ph(6,'Eso quiero aprender a darte','cada día mejor.')]),
    film(11,'21 de enero',15,11,'Nuestra fecha especial y una promesa que Microbio aún quiere cumplir.',[
      ph(15,'21 de enero de 2025.','Una fecha que llevo conmigo.'),vd(12,'Desde entonces hay una historia','que tiene nuestros nombres.'),
      ph(4,'Con capítulos bonitos','y otros que nos han costado.'),ambiente('atardecer','Yo todavía sueño','con nuestra promesa.'),
      ph(6,'Juntos hasta viejitos.','¿Aceptas, mi bebo?')],fecha)
  ];
  const serie=(num,titulo,n,track,sinopsis,episodios)=>({num,tipo:'serie',titulo,anio:2025,clasificacion:'TP',imagen:portada(n),musica:tracks[track].src,cancion:tracks[track].titulo,sinopsis,creditos:[['Protagonistas',`${A} y ${B}`],['Con amor de',A]],episodios:episodios.map(([titulo,escenas])=>({titulo,duracion:58,descripcion:titulo,escenas,interaccion:null,recompensa:''}))});
  const series=[
    serie(12,'Lo que todavía siento',7,12,'Dos capítulos para poner en palabras el cariño que sigue aquí.',[
      ['Mi amor no ha cambiado',[ph(7,'Mi bebo, quiero que sepas algo.'),ph(8,'Sé que hemos tenido','errores los dos.'),vd(13,'Pero mi amor por ti','no ha cambiado.'),ph(10,'No quiero guardar silencio','sobre algo que me importa tanto.'),ph(6,'Por eso hice esta historia para ti.')]],
      ['También quiero escucharte',[ph(11,'Hoy te cuento lo que siento yo.'),paisaje('mar','Pero también quiero saber','qué pasa por tu corazón.'),vd(2,'Podemos decirnos las cosas','con respeto y con calma.'),ph(15,'Sin prisa por tener','todas las respuestas.'),ph(7,'Si quieres hablar,','aquí estoy, Galindo.')]]
    ]),
    serie(13,'Aprender a cuidarnos',11,13,'Agradecimientos y metas para un amor que desea crecer.',[
      ['Lo que agradezco',[ph(11,'Agradezco haberte encontrado.'),vd(4,'Ese primer instante','en que sentí seguridad contigo.'),ph(6,'Las fotos que hoy puedo mirar','con tanto cariño.'),ph(10,'Y todo lo bonito','que guardo de nosotros.'),ph(15,'Gracias por formar parte','de mi vida, mi bebo.')]],
      ['Lo que quiero construir',[paisaje('cielo','Quiero aprender a escucharte mejor.'),ph(8,'Cuidar las palabras','cuando algo nos duela.'),vd(6,'Reconocer mis errores','y hacerme cargo de ellos.'),ambiente('olas','Construir más confianza','con hechos y paciencia.'),ph(6,'Si los dos lo elegimos,','ir de la mano, paso a paso.')]]
    ]),
    serie(14,'Juntos hasta viejitos',15,14,'La promesa, el futuro que deseo y una pregunta para ti.',[
      ['La promesa',[ph(15,'Hay una frase que no olvido:'),vd(8,'«Juntos hasta viejitos».','Nuestra promesa.'),ph(7,'Yo todavía quiero cumplirla contigo.'),paisaje('atardecer','Imagino más días sencillos,','más fotos y más momentos de paz.'),ph(6,'Imagino mirarnos con cariño','también cuando pase el tiempo.')]],
      ['¿Aceptas?',[ph(4,'No quiero que se termine lo nuestro.'),vd(13,'Quiero que podamos elegir','cómo escribir lo que sigue.'),ph(10,'¿Aceptas, mi bebo?','Acá esperaré.'),ph(11,'Si no me respondes,','sabré entender.'),ph(15,'Pero no olvides que te amo.','Con amor, tu Microbio.')]]
    ])
  ];
  c.temporadas.push(...peliculas,...series);
  c.extras=[{titulo:'Así te lo cuenta Microbio',img:foto(4),texto:historia},{titulo:'Nuestra fecha',img:foto(15),texto:'21 de enero de 2025'},{titulo:'La promesa',img:foto(6),texto:'Juntos hasta viejitos.'},{titulo:'Mi bebo',img:foto(11),texto:'Mi amor por ti no ha cambiado.'}];
  Object.assign(c.final,{titulo:'Mi bebo, ¿aceptas?',imagen:portada(15),sinopsis:'Mis palabras están aquí. Tu respuesta puede llegar cuando tú lo decidas.',preguntas:['¿Qué recuerdas de aquel primer día que nos vimos?','¿Cuál de nuestros recuerdos guardas con más cariño?','¿Qué te gustaría que aprendiéramos a cuidar mejor?','¿Qué sueñas para el siguiente capítulo?','¿Aceptas que intentemos cumplir nuestra promesa de juntos hasta viejitos?'],carta:()=>`Mi bebo:\n\n${historia}\n\nCon amor,\nTu Microbio`});
  c.creditos=[['De',A],['Para',B],['Nuestra fecha','21 de enero de 2025'],['El primer gesto','Tu mano junto a la mía'],['Una promesa','Juntos hasta viejitos'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Imágenes de ambiente','Paisajes simbólicos de Unsplash y Pexels'],['','Mi amor por ti no ha cambiado.']];
  c.postCreditos={imagen:foto(15),etiqueta:'UN ÚLTIMO MENSAJE',texto:'Galindo, acá esperaré.',anuncio:'¿Escribimos lo que sigue?',subtitulo:'Con calma, con cariño y porque los dos lo queramos.',sorpresa:'Te amo, mi bebo. — Tu Microbio ♡'};
  document.addEventListener('DOMContentLoaded',()=>{
    if(!document.body.dataset.page||['player','splash','password','profiles'].includes(document.body.dataset.page))return;
    [['canciones.html','♫','Nuestras canciones','16px','#e50914'],['recuerdos.html','▣','Nuestros recuerdos','62px','#303030']].forEach(([href,icon,label,bottom,background])=>{
      const x=document.createElement('a'); x.className='tdn-float';x.href=href;x.setAttribute('aria-label',label);x.innerHTML=`<b>${icon}</b><span>${label}</span>`;
      Object.assign(x.style,{position:'fixed',right:'16px',bottom,zIndex:1000,background,color:'white',padding:'9px 14px',borderRadius:'999px',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 20px #0009',fontSize:'14px'});document.body.append(x);
    });
  });
})();

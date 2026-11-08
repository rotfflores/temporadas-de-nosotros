/* Paquete $199 · Ricardo Contreras Isas → Marisol Trujillo Aguirre. */
(() => {
  const c = window.TDN, A = 'Ricardo', B = 'Marisol';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
  const ph = (n,...texto) => ({img:foto(n),poster:foto(n),texto});
  const am = (name,...texto) => ({img:`assets/ambiente/${name}.webp`,poster:`assets/ambiente/${name}.webp`,texto});
  const vd = (name,...texto) => ({img:`assets/ambiente/${name}.mp4`,poster:`assets/ambiente/${name}-poster.webp`,texto});
  const tracks = [
    ['Perfecta — Banda Los Recoditos','perfecta'], ['Solo con verte — Banda MS','solo-con-verte'],
    ['Desde que te tengo — Carín León','desde-que-te-tengo'], ['Cajita de cartón — Intocable','cajita-de-carton'],
    ['Porque tú llegaste — Jorge Medina','porque-tu-llegaste'], ['Tesoro — Julión Álvarez','tesoro'],
    ['A mí me gustas tú — Los Rojos, Duelo y Oscar Iván Treviño','a-mi-me-gustas-tu'], ['No te esperaba','no-te-esperaba'],
    ['Me cambiaste la vida — Río Roma','me-cambiaste-la-vida']
  ].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}-climax.mp3`}));
  const historia = 'Yo la conocí el 4 de octubre del 2021 ese día fue especial y raro fue cuando se fueron todas las redes sociales casi medio dia estuvimos sin redes y pues ya aviamos quedado en vernos pero no nos podíamos comunicar\nA nosotros nos presento una amiga en común\nY desde ahí no nos emos separado para nada';
  const notaPrimera = 'Esa foto es la primera que nos tomamos es especial para nosotros';
  Object.assign(c.pareja, {
    nombreA:A,nombreB:B,apodos:[B,'mi amor'],apodo:B,fechaInicio:'2021-10-04',anioInicio:2021,
    anios:Math.max(1,Math.floor((Date.now()-new Date('2021-10-04T00:00:00'))/31557600000)),aniosManual:0,fechaCodigo:'0410',
    ciudad:'',primeraCita:'',cancion:'Me cambiaste la vida',artista:'Río Roma',viajes:[],dificiles:[],
    anecdota:'El día que se cayeron las redes sociales y ya habíamos quedado en vernos',culpableAnecdota:2,gustosB:[],
    suenos:['Seguir eligiéndonos','Construir nuevos recuerdos','Celebrar muchos 4 de octubre juntos'],
    mensajeFinal:'Marisol, desde aquel 4 de octubre de 2021 no nos hemos separado. Gracias por ser parte de mi vida. Te amo. — Ricardo'
  });
  Object.assign(c.fotos,{hero:portada(1),perfilB:foto(8),perfilPareja:foto(1),t0:foto(1),t1:foto(4),t2:foto(6),t3:foto(7),t4:foto(9),t5:foto(10),t6:foto(11),t7:foto(12),final:portada(1),puzzle:foto(1),puzzle2:foto(6),postCreditos:foto(9)});
  Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/nuestro-proximo-capitulo.mp4',audioRemitente:''});
  Object.assign(c.acceso,{demo:false,password:'79d9d8f002c1c955fa0d21eeaaf2ebf03c3a878d2fdcb6e78d915b3ed81cc886',pistaPassword:'El día y el mes de nuestro aniversario (DDMM).',estreno:''});
  Object.assign(c.notificacion,{whatsapp:'528136408536',email:'',endpoint:''});
  Object.assign(c.sitio,{
    url:typeof location==='object'?new URL('index.html',location.href).href:'',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor y una vida por compartir',
    heroTag:'4 DE OCTUBRE · DESDE 2021',heroTop:'Ricardo y Marisol',titulo:'Cuando el mundo se desconectó',
    sinopsis:'El 4 de octubre de 2021 se apagaron las redes, pero empezó lo nuestro. Una amiga nos presentó y desde entonces no nos hemos separado. Marisol, estas doce películas y tres series son para ti.',
    generos:['Romance','Nuestra historia','Aniversario'],filaRecomendada:'Cuando el mundo se desconectó'
  });
  const ep = (titulo,descripcion,escenas,interaccion=null)=>({titulo,descripcion,duracion:57,escenas,interaccion,recompensa:''});
  const film = (num,titulo,n,track,sinopsis,escenas,interaccion=null)=>({num,tipo:'pelicula',titulo,anio:'',clasificacion:'TP',imagen:portada(n),musica:tracks[track].src,cancion:tracks[track].titulo,top10:num<4,sinopsis,creditos:[['Para','Marisol Trujillo Aguirre'],['Con amor de','Ricardo Contreras Isas']],episodios:[ep(titulo,sinopsis,escenas,interaccion)]});
  const peliculas = [
    film(0,'Cuando el mundo se desconectó',1,8,'Un 4 de octubre de 2021. Las redes dejaron de funcionar y nosotros ya habíamos quedado en vernos. Así empezó nuestra historia.',[
      am('luces','4 de octubre de 2021.','Un día especial y raro.'),
      am('estrellas','Se cayeron las redes sociales.','Pasamos casi medio día sin poder comunicarnos.'),
      am('camino','Ya habíamos quedado en vernos.','Y justo ese día no podíamos escribirnos.'),
      ph(1,'Una amiga en común nos presentó.','La vida ya había hecho su parte.'),
      ph(6,'Y desde ahí no nos hemos separado.','Así lo recuerdo. Así empezó todo.'),
      ph(1,'Marisol, el mundo se desconectó.','Nuestra historia apenas se estaba conectando.')
    ],{tipo:'quiz',titulo:'El comienzo',pregunta:'¿Quién nos presentó?',opciones:['Una amiga en común','Un compañero de trabajo','Nos conocimos en una aplicación'],correcta:0,ok:'Una amiga en común nos puso en el mismo camino.'}),
    film(1,'Nuestra primera foto',1,5,'La primera fotografía que nos tomamos. Un recuerdo que tiene un lugar especial en esta historia.',[
      ph(1,'Nuestra primera foto juntos.','Aquí hay mucho más que una imagen.'),
      ph(1,notaPrimera),
      am('flores','Hay recuerdos que no necesitan explicaciones.','Nosotros sabemos lo que significan.'),
      ph(1,'Cada vez que la miro,','vuelvo al comienzo de lo nuestro.'),
      vd('ocaso','Quiero seguir guardando momentos contigo.','De esos que el tiempo vuelve todavía más valiosos.'),
      ph(1,'Esta siempre será la primera.','Y siempre tendrá su lugar en mi corazón.')
    ],{tipo:'memory',titulo:'Encuentra nuestros recuerdos',pares:[foto(1),foto(4),foto(5),foto(6),foto(9),foto(11)],ok:'Todas son nuestras. La primera siempre tiene un lugar especial.'}),
    film(2,'No te esperaba',4,7,'A veces lo más bonito llega sin aviso. Gracias a una amiga, nuestras vidas se encontraron.',[
      am('camino','No sabía que aquel encuentro','iba a importar tanto en mi vida.'),
      ph(4,'Una amiga nos presentó.','Y apareciste tú, Marisol.'),
      vd('horizonte','Hay casualidades','que uno agradece para siempre.'),
      ph(6,'Me gusta pensar en todo lo que vino después.','En este nosotros que seguimos cuidando.'),
      ph(1,'No te esperaba.','Y qué bonito fue encontrarte.')
    ]),
    film(3,'Solo con verte',8,1,'Una sonrisa tuya puede convertirse en mi parte favorita del día.',[
      ph(8,'Marisol, me gusta mirarte.','Me gusta reconocerte entre todo lo demás.'),
      am('amanecer','Hay días que empiezan mejor','solo por saber que estás en mi vida.'),
      ph(7,'Tu sonrisa tiene algo','que siempre me invita a quedarme.'),
      vd('brisa','Quiero que sigamos encontrando','motivos sencillos para sonreír.'),
      ph(5,'Y que nunca se me olvide decirte','lo mucho que me gustas.')
    ],{tipo:'completar',titulo:'Una certeza',frase:'Desde aquel 4 de octubre no nos hemos ___.',opciones:['separado','olvidado','desconocido'],correcta:0,ok:'Desde ahí no nos hemos separado.'}),
    film(4,'Porque tú llegaste',6,4,'Una película para agradecer tu llegada y todo lo que significa tenerte cerca.',[
      vd('ocaso','Porque tú llegaste,','mi historia tiene un nosotros.'),
      ph(6,'Gracias por compartir conmigo','tu tiempo y tu cariño.'),
      am('cafe','Gracias por lo sencillo.','Por lo que no necesita grandes planes.'),
      ph(9,'Gracias por cada momento','que ahora forma parte de nuestros recuerdos.'),
      ph(1,'Y gracias por aquel comienzo','que todavía me hace sonreír.')
    ]),
    film(5,'Mi tesoro',9,5,'Hay cosas que no se guardan en una caja: se cuidan con tiempo, cariño y presencia.',[
      am('mar','Hay tesoros que no se compran.','Se encuentran y se cuidan.'),
      ph(9,'Tenerte en mi vida','es uno de los míos.'),
      vd('olas','Quiero cuidar nuestro tiempo,','nuestros abrazos y nuestras conversaciones.'),
      ph(10,'Quiero cuidar lo que somos','con hechos de todos los días.'),
      ph(1,'Y seguir dándole valor','a cada recuerdo contigo.')
    ],{tipo:'adivinanza',titulo:'La protagonista',texto:'Su nombre está en esta historia, la conocí un 4 de octubre y es a quien dedico estas películas. ¿Quién es?',respuestas:['marisol','marisol trujillo aguirre','yo','soy yo'],pista:'Empieza con M.',ok:'Marisol, esta historia es para ti.'}),
    film(6,'Desde que te tengo',7,2,'Lo que siento cuando miro todo lo que hemos compartido desde 2021.',[
      ph(7,'Desde que te tengo,','me gusta hablar en plural.'),
      am('lago','Pensar en lo que viene','y hacerte un lugar en mis planes.'),
      ph(4,'Me gusta que nuestros recuerdos','tengan dos protagonistas.'),
      vd('costa','Me ilusiona todo lo que todavía','podemos descubrir juntos.'),
      ph(11,'Y me hace feliz saber','que seguimos aquí, tú y yo.'),
      am('montanas','Paso a paso, juntos.','Con un horizonte por descubrir.')
    ]),
    film(7,'A mí me gustas tú',8,6,'Una dedicatoria directa: de todas las personas, eres tú.',[
      ph(8,'A mí me gustas tú, Marisol.','Así, con tu nombre y tu sonrisa.'),
      am('flores','Me gusta poder decírtelo','sin esperar una fecha especial.'),
      ph(7,'Me gustan estas fotos','porque estás tú en ellas.'),
      vd('brisa','Quiero seguir descubriendo','razones para enamorarme de ti.'),
      ph(6,'Y recordarte algo sencillo:','para mí eres especial.')
    ],{tipo:'quiz',titulo:'Aquel día',pregunta:'¿Qué pasó el día que nos conocimos?',opciones:['Se cayeron las redes sociales','Se adelantó el reloj','Era Año Nuevo'],correcta:0,ok:'Las redes fallaron. Nuestra historia encontró su comienzo.'}),
    film(8,'Perfecta para mi historia',11,0,'Lo bonito de querernos está en poder ser nosotros y seguir creciendo juntos.',[
      ph(11,'No hace falta tener todas las respuestas','para querer seguir juntos.'),
      am('bosque','Quiero conocerte cada día mejor.','Escucharte con tiempo y con cariño.'),
      ph(10,'Que podamos ser nosotros mismos','sin dejar de cuidarnos.'),
      vd('horizonte','Que aprendamos, que conversemos,','que sigamos creciendo.'),
      ph(6,'Marisol, qué bonito','que seas parte de mi historia.')
    ]),
    film(9,'Nuestra cajita de recuerdos',5,3,'Una colección de fotos y momentos para volver a lo que más queremos.',[
      ph(1,'Si guardara nuestra historia en una cajita,','esta foto tendría el primer lugar.'),
      ph(5,'También guardaría nuestras sonrisas','y estas ganas de estar juntos.'),
      ph(2,'Los instantes que sí fotografiamos.'),
      am('luces','Y los que solo nosotros recordamos.','Esos también cuentan.'),
      ph(3,'Quiero que sigamos llenándola','con muchos momentos más.')
    ],{tipo:'ordenar',titulo:'Así empezó lo nuestro',eventos:['Una amiga en común nos presentó','Quedamos en vernos','El 4 de octubre de 2021 fallaron las redes y no podíamos comunicarnos','Desde entonces no nos hemos separado'],ok:'Ese comienzo tan raro se volvió nuestra historia favorita.'}),
    film(10,'Me cambiaste la vida',10,8,'De un encuentro a una historia compartida. Una dedicatoria de Ricardo para Marisol.',[
      vd('costa','Hay encuentros que dividen la vida','en un antes y un después.'),
      ph(10,'El nuestro tiene fecha:','4 de octubre de 2021.'),
      am('atardecer','Hoy quiero agradecer','que nuestros caminos se cruzaran.'),
      ph(9,'Quiero que sepas lo valioso','que es para mí este nosotros.'),
      ph(1,'Marisol, gracias por llegar.','Gracias por seguir aquí.')
    ]),
    film(11,'Nuestro 4 de octubre',6,1,'Cada aniversario es una oportunidad de volver al comienzo y mirar hacia adelante.',[
      am('amanecer','4 de octubre.','Nuestra fecha, nuestro comienzo.'),
      ph(1,'La vida nos dio un primer encuentro','y nosotros seguimos escribiendo la historia.'),
      vd('ocaso','Quiero celebrar muchos aniversarios contigo.','Con el mismo cariño y nuevas razones.'),
      ph(6,'Volver a mirar nuestra primera foto','y sumar otra a la colección.'),
      ph(9,'Feliz aniversario, Marisol.','Con todo mi amor, Ricardo.')
    ],{tipo:'codigo',titulo:'Nuestra fecha',modo:'fecha',pregunta:'¿Cuál es el día y mes de nuestro aniversario?',placeholder:'DDMM',respuestas:['0410','04/10','4 de octubre','4 octubre'],pista:'El día que se cayeron las redes. Formato DDMM.',ok:'4 de octubre. Una fecha que siempre será nuestra.'})
  ];
  const serie=(num,titulo,n,track,sinopsis,episodios)=>({num,tipo:'serie',titulo,anio:'',clasificacion:'TP',imagen:portada(n),musica:tracks[track].src,cancion:tracks[track].titulo,sinopsis,creditos:[['Protagonistas','Ricardo y Marisol']],episodios});
  const series=[
    serie(12,'Lo que siento por ti',7,2,'Las palabras que quiero que encuentres cuando pienses en nosotros.',[
      ep('La alegría de encontrarte','Así se siente tenerte en mi vida.',[
        ph(7,'Marisol, me alegra haberte encontrado.'),am('flores','Me alegra que aquel día extraño','haya terminado siendo nuestro comienzo.'),ph(6,'Me hace bien pensar','en todo lo que hemos compartido.'),vd('olas','Quiero seguir haciendo espacio','para nuestra alegría.'),ph(1,'Y que sepas cuánto valoro','que sigamos juntos.')]),
      ep('Elegirte cada día','El amor también se escribe en los días comunes.',[
        ph(4,'Quiero elegirte también','en los días sin planes especiales.'),am('cafe','Con tiempo para escucharnos','y ganas de acompañarnos.'),ph(9,'Con detalles que digan','aquí estoy para ti.'),vd('horizonte','Con paciencia para aprender','y cariño para volver a intentarlo.'),ph(6,'Hoy quiero seguir eligiendo','esta historia contigo.')])
    ]),
    serie(13,'Lo que quiero construir contigo',12,4,'Deseos para el futuro: tiempo, compañía y recuerdos nuevos.',[
      ep('Nuestros próximos recuerdos','Una lista abierta de cosas bonitas por vivir.',[
        am('camino','Quiero que hagamos planes','que nos emocionen a los dos.'),ph(12,'Descubrir lugares nuevos','y guardar más fotos juntos.'),vd('costa','Tomarnos tiempo para disfrutar','sin tener que correr siempre.'),am('playa','Animarnos a ir por nuestras metas','paso a paso, de la mano.'),ph(1,'Y volver al comienzo cuando haga falta','recordar por qué elegimos seguir.')]),
      ep('La vida que deseo contigo','Cuidar lo nuestro como un proyecto de los dos.',[
        am('bosque','Quiero una vida donde podamos','hablar con confianza.'),ph(6,'Donde tu voz importe','tanto como la mía.'),vd('brisa','Donde nos alegremos','por los logros del otro.'),am('lago','Donde encontremos calma','para resolver lo que venga.'),ph(9,'Y donde nunca falten','respeto, cariño y compañía.')])
    ]),
    serie(14,'Todavía nos falta',9,8,'El catálogo termina. Nuestra historia sigue.',[
      ep('Gracias por quedarte','Una pausa para mirar lo vivido con gratitud.',[
        ph(1,'Gracias por ser parte','de aquel primer recuerdo.'),am('atardecer','Gracias por el tiempo','que hemos compartido desde entonces.'),ph(10,'Por cada foto que ahora','podemos mirar juntos.'),vd('ocaso','Por este nosotros','que vale la pena cuidar.'),ph(11,'Marisol, qué bonito','seguir aquí contigo.')]),
      ep('Nuestro próximo capítulo','Lo mejor del futuro es poder escribirlo juntos.',[
        am('amanecer','Nos faltan nuevos amaneceres.'),vd('olas','Nuevas conversaciones','y planes por decidir.'),ph(6,'Más fotos que algún día','también serán especiales.'),am('estrellas','Muchos 4 de octubre','que deseo celebrar a tu lado.'),ph(1,'Esta historia continuará.','Te amo, Marisol. — Ricardo')])
    ])
  ];
  c.temporadas.push(...peliculas,...series);
  c.extras=[{titulo:'La historia en palabras de Ricardo',img:foto(1),texto:historia},{titulo:'Nuestra primera foto',img:foto(1),texto:notaPrimera},{titulo:'La amiga que nos presentó',img:foto(6),texto:'Gracias a una amiga en común, nuestros caminos se encontraron.'},{titulo:'4 de octubre de 2021',img:foto(9),texto:'Un día sin redes. El principio de nosotros.'}];
  Object.assign(c.final,{
    titulo:'Marisol, ahora te toca a ti',imagen:portada(1),sinopsis:'Después de estas películas y series, todavía quiero escucharte. Responde y descubre una carta para ti.',
    preguntas:['¿Qué recuerdas de aquel 4 de octubre de 2021?','¿Qué sientes cuando miras nuestra primera foto juntos?','¿Cuál es tu recuerdo favorito de nosotros?','¿Qué meta te gustaría que construyéramos juntos?','¿Qué quisieras decirme hoy?'],
    carta:r=>`Marisol:\n\nEl 4 de octubre de 2021 fue un día especial y raro. Se cayeron las redes, ya habíamos quedado en vernos y no podíamos comunicarnos. Una amiga en común nos presentó y, desde ahí, no nos hemos separado.\n\nNuestra primera foto tiene algo que ninguna otra podrá tener: fue la primera. Es especial para nosotros porque guarda un comienzo al que siempre podemos volver.\n\nGracias por compartir tu vida conmigo, por tu cariño y por cada momento que ahora forma parte de esta historia. Quiero seguir cuidándonos, escuchándonos y encontrando razones para sonreír juntos.\n\nMe ilusiona lo que escribiste sobre nuestro futuro: ${r[3]}. Quiero que sigamos hablando de nuestros sueños y dando pasos para construirlos entre los dos.\n\nNo sé cuántas fotos nos faltan ni cuántos capítulos vendrán. Sí sé que quiero seguir compartiéndolos contigo y celebrar muchos 4 de octubre más.\n\nTe amo, Marisol.\n\nCon todo mi amor,\nRicardo`
  });
  c.creditos=[['Una historia de','Ricardo y Marisol'],['De','Ricardo Contreras Isas'],['Para','Marisol Trujillo Aguirre'],['Nuestro comienzo','4 de octubre de 2021'],['Agradecimientos','A nuestra amiga en común, por presentarnos'],['Nuestro recuerdo especial','La primera foto que nos tomamos'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Imágenes de ambiente','Unsplash, Pexels y Mixkit · Paisajes simbólicos'],['','Continuará ♡']];
  c.postCreditos={imagen:foto(1),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Marisol, cuando el mundo se desconectó, empezó nuestra historia.',anuncio:'Continuará',subtitulo:'Por muchos 4 de octubre más.',sorpresa:'Te amo. — Ricardo ♡'};
  document.addEventListener('DOMContentLoaded',()=>{
    if(['player','splash','password','profiles'].includes(document.body.dataset.page)||!document.body.dataset.page)return;
    for(const [href,label,bottom] of [['canciones.html','♫ Nuestras canciones','16px'],['recuerdos.html','▣ Nuestros recuerdos','66px']]){
      const a=document.createElement('a');a.href=href;a.className='tdn-float';a.setAttribute('aria-label',label.slice(2));a.innerHTML=`<b>${label[0]}</b><span>${label.slice(2)}</span>`;
      Object.assign(a.style,{position:'fixed',right:'16px',bottom,zIndex:'1000',background:href==='canciones.html'?'#e50914':'#303030',color:'#fff',padding:'9px 14px',borderRadius:'999px',fontWeight:'700',textDecoration:'none',boxShadow:'0 4px 20px #0009'});document.body.append(a);
    }
    const title=document.querySelector('.home-hero .hero-title');if(title&&!location.search.includes('ver='))title.textContent=c.sitio.titulo;
    const promo=document.querySelector('.games-promo');if(promo){promo.querySelector('b').textContent='7 juegos de nuestra historia';promo.querySelector('small').textContent='Trivia, memorama, frases y nuestra fecha · Juega cuando quieras';}
  });
})();

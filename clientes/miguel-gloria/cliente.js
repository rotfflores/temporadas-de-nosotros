/* Edición independiente · Miguel para Amor · Nuestro capítulo, $79 MXN. */
(() => {
  const c = window.TDN;
  const foto = n => `assets/fotos/pareja-${String(n).padStart(2,'0')}.jpg`;
  const poster = n => `assets/fotos/poster-${n}.jpg`;
  const ambiente = n => `assets/ambiente/${n}.jpg`;
  const track = {src:'assets/audio/x-ti-climax.mp3', titulo:'X TI — Kapo x Feid'};
  Object.assign(c.pareja, {
    nombreA:'Miguel', nombreB:'Amor', apodos:['Amor'], apodo:'mi amor', fechaInicio:'2025-05-07',
    anioInicio:2025, anios:1, aniosManual:0, fechaCodigo:'07052025', ciudad:'', primeraCita:'',
    cancion:'X TI', artista:'Kapo x Feid', viajes:[], dificiles:[], anecdota:'Todo comenzó cuando te confesé que me gustabas y nos besamos. Al día siguiente comenzamos a salir.',
    culpableAnecdota:2, gustosB:[], suenos:['Seguir eligiéndonos','Acompañar nuestras metas','Crear nuevos recuerdos'],
    mensajeFinal:'Amor, hace un año y seis meses comenzó lo nuestro. Gracias por cada beso y por todos los días que hemos compartido. Quiero seguir escribiendo esta historia contigo. Te amo. — Miguel'
  });
  Object.assign(c.fotos, {hero:'assets/fotos/hero.jpg',perfilB:foto(4),perfilPareja:foto(5),
    t0:poster(1),t1:poster(2),t2:poster(3),t3:poster(4),t4:poster(5),t5:poster(6),t6:poster(7),t7:foto(6),
    final:foto(4),puzzle:foto(4),puzzle2:foto(2),postCreditos:foto(5)});
  Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:Array(5).fill(track.src),canciones:Array(5).fill(track.titulo),musica:track.src,videoFinal:'assets/video/nuestro-recuerdo.mp4',audioRemitente:''});
  Object.assign(c.acceso,{demo:false,password:'7525',pistaPassword:'Nuestra fecha, como la recuerdas: día, mes y año, en cuatro dígitos.',estreno:''});
  Object.assign(c.notificacion,{whatsapp:'525665905895',email:'',endpoint:''});
  Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/miguel-gloria/index.html',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Romance, besos y una vida por escribir',heroTag:'EXCLUSIVO PARA AMOR',heroTop:'Miguel y Amor · 1 año y 6 meses',
    sinopsis:'Nuestro amor está hecho de momentos simples que se vuelven inolvidables, de risas espontáneas, de abrazos largos y de besos que dicen más que mil palabras. Es complicidad, cariño y pasión mezclados en un sentimiento que crece cada día. Y si hay algo que deseo, es seguir coleccionando estos instantes a tu lado, construyendo una historia que ni el tiempo pueda borrar.',
    generos:['Romance','Nuestra historia','Desde el 7 de mayo de 2025'],filaRecomendada:'El beso que lo cambió todo'});
  const scene=(img,texto)=>({img,poster:img,texto:[texto]});
  // Passing MP4 as img uses the template’s muted, looping footage renderer.
  const clip=(name,texto)=>scene(`assets/video/${name}.mp4`,texto);
  const film=(num,titulo,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:poster(num+1),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,
    creditos:[['De Miguel para','Amor'],['Nuestra fecha','7 de mayo de 2025'],['Banda sonora',track.titulo]],
    episodios:[{titulo,duracion:68,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
  const peliculas=[
    film(0,'El beso que lo cambió todo','Una confesión sincera, un beso y el principio de nosotros.',[
      scene(foto(11),'A veces una historia entera empieza con algo tan sencillo y tan valiente como decir lo que sientes.'),
      scene(foto(8),'Amor, todo comenzó cuando te confesé que me gustabas. Dejé de guardármelo y me atreví a decírtelo.'),
      scene(foto(6),'Después nos besamos. Y ese beso se convirtió en el inicio de algo que hoy sigue siendo tan nuestro.'),
      scene('assets/video/nuestro-recuerdo.mp4','Hay instantes que duran muy poco y, aun así, cambian la dirección de todos los días que vienen.'),
      scene(foto(5),'Si volviera a ese momento, volvería a decirte que me gustas. Volvería a elegir ese beso contigo.')]),
    film(1,'Al día siguiente, nosotros','Comenzamos a salir al día siguiente. Lo que parecía un comienzo se volvió nuestra historia.',[
      scene(foto(1),'Al día siguiente de aquel beso comenzamos a salir. Así, un día después, ya estábamos escribiendo otra parte de nosotros.'),
      scene(foto(9),'Vinieron más besos y más ganas de estar cerca. Lo nuestro dejó de ser una posibilidad para convertirse en algo real.'),
      scene(foto(10),'Me gusta pensar en la ternura de esos primeros días: cuando todo era nuevo y queríamos seguir descubriéndonos.'),
      scene(foto(16),'Nuestro amor está hecho de momentos simples que se vuelven inolvidables: risas espontáneas, abrazos largos y besos que dicen más que mil palabras.'),
      scene(foto(11),'Qué bonito que aquel “me gustas” no se quedara en palabras. Qué bonito que después llegara todo esto.')]),
    film(2,'Dieciocho meses contigo','Un año y seis meses desde aquel comienzo. Gracias por ser parte de mis días.',[
      scene(foto(12),'7 de mayo de 2025. Nuestra fecha. El punto de partida de esta historia que hoy celebramos.'),
      scene('assets/video/nuestro-recuerdo.mp4','Un pequeño momento de nosotros que siempre quiero volver a mirar.'),
      scene(foto(2),'Hoy, 7 de noviembre de 2026, cumplimos un año con seis meses. Dieciocho meses que empezaron con aquel primer beso.'),
      scene(foto(18),'Gracias por compartir tu tiempo conmigo, por cada beso y por los momentos que ya tienen un lugar en nuestra historia.'),
      scene(foto(3),'No necesito una película perfecta. Me hace feliz que esta tenga nuestros nombres, nuestras miradas y tantas páginas por escribir.')]),
    film(3,'Lo que viene, a tu lado','Deseos para nuestro futuro: cuidarnos, acompañarnos y crear más recuerdos.',[
      scene(foto(9),'Quiero seguir descubriendo caminos contigo. Cada paseo y cada momento compartido me dan más ganas de seguir a tu lado.'),
      scene(foto(17),'Quiero acompañar tus metas, escuchar lo que sueñas y celebrar cada paso que te acerque a ello.'),
      scene(foto(13),'Quiero que sigamos aprendiendo a cuidarnos: con paciencia, con cariño y con tiempo para nosotros.'),
      scene(foto(7),'Sueño con nuevos lugares, con tardes sin prisa y con planes sencillos que después se vuelvan nuestros recuerdos favoritos.'),
      scene(foto(14),'No sé cuántos capítulos nos esperan. Sí sé que quiero seguir escribiéndolos contigo, Amor.')])
  ];
  const episode=(titulo,descripcion,escenas)=>({titulo,descripcion,duracion:60,musica:track.src,escenas,interaccion:null,recompensa:''});
  const serie={num:4,tipo:'serie',titulo:'Seguir eligiéndote',anio:2026,clasificacion:'TP',imagen:poster(5),musica:track.src,cancion:track.titulo,
    sinopsis:'Tres capítulos para agradecer lo vivido, cuidar lo que somos e imaginar lo que viene.',creditos:[['Protagonistas','Miguel y Amor'],['Próximo capítulo','Cada nuevo día juntos']],
    episodios:[
      episode('Gracias por nosotros','Lo que siento al volver a mirar nuestra historia.',[
        scene(foto(10),'Amor, gracias por formar parte de esta historia desde el primer beso.'),
        scene(foto(15),'Gracias por los días compartidos y por dejarme guardar estos pequeños recuerdos contigo.'),
        scene(foto(18),'Quiero aprender a decirte más seguido cuánto valoro tenerte en mi vida.'),
        scene(foto(8),'Hoy celebro el tiempo que llevamos juntos. Y también celebro que aquella confesión nos haya traído hasta aquí.')]),
      episode('Las cosas que quiero cuidar','El amor que deseo demostrar con hechos.',[
        scene(foto(14),'Lo nuestro es complicidad, cariño y pasión mezclados en un sentimiento que crece cada día.'),
        scene(foto(5),'Quiero que podamos hablar con calma, comprendernos mejor y encontrar juntos la forma de seguir creciendo.'),
        scene(foto(15),'Quiero cuidar los detalles: un abrazo, un mensaje, un beso, estar presente cuando haga falta.'),
        scene(foto(13),'Y quiero recordarte que no solo me gusta nuestra historia: me importa la persona con quien la estoy viviendo.')]),
      episode('Nuestros próximos capítulos','Metas y deseos que todavía podemos convertir en recuerdos.',[
        scene(ambiente('camino-atardecer'),'Deseo seguir coleccionando estos instantes a tu lado, construyendo una historia que ni el tiempo pueda borrar.'),
        scene(ambiente('montanas'),'Quiero verte cumplir tus sueños y encontrar la manera de acompañarte sin dejar de crecer los dos.'),
        scene(foto(7),'Nos faltan más fotografías, más besos y más aniversarios por celebrar.'),
        scene(foto(4),'Feliz año y seis meses, Amor. Con amor, Miguel. Nuestra historia continúa.')])
    ]};
  c.temporadas.push(...peliculas,serie);
  c.extras=[{titulo:'Nuestra fecha',img:foto(5),texto:'7 de mayo de 2025. El comienzo de nosotros.'},{titulo:'Un año y seis meses',img:foto(4),texto:'Hoy celebramos 18 meses de nuestra historia.'},{titulo:'Nuestros momentos',img:foto(16),texto:'Los momentos sencillos que compartimos y se vuelven inolvidables.'},{titulo:'Una mirada nuestra',img:foto(6),texto:'Hay recuerdos que caben en una mirada.'}];
  Object.assign(c.final,{titulo:'Amor, esta carta es para ti',imagen:foto(4),sinopsis:'Después de nuestras películas y capítulos, quiero regalarte unas palabras y escuchar las tuyas.',
    preguntas:['¿Qué recuerdo de nosotros te hace sonreír más?','¿Qué sentiste cuando te dije que me gustabas?','¿Qué es lo que más te gusta de nuestra historia?','¿Qué meta o plan te gustaría que construyéramos juntos?','¿Qué quieres decirme en nuestro año y seis meses?'],
    carta:()=>`Amor, mi amor:\n\nTodo comenzó cuando te confesé que me gustabas. Nos besamos y, al día siguiente, comenzamos a salir. Cuando recuerdo ese principio, sonrío al pensar en todo lo que vino después de atreverme a decirte lo que sentía.\n\nHoy cumplimos un año con seis meses. Desde aquel 7 de mayo de 2025 hemos ido llenando nuestra historia de días compartidos, besos y recuerdos que para mí tienen un valor enorme. Gracias por ser parte de todo esto y por compartir conmigo un pedacito de tu vida.\n\nQuiero seguir demostrándote mi cariño con detalles y con tiempo. Quiero escucharte mejor, aprender a cuidarnos y encontrar más motivos para sonreír juntos. Que nunca nos falten las ganas de hablar, de entendernos y de volver a elegir lo que estamos construyendo.\n\nTambién quiero mirar hacia adelante contigo: acompañar tus metas, celebrar tus logros y crear nuevos recuerdos. No tengo que conocer todos los lugares a los que iremos para saber que me ilusiona descubrirlos a tu lado. Hay sueños que todavía no tienen fecha, y me gusta pensar que podremos darles forma juntos.\n\nSi nuestra historia comenzara otra vez, volvería a decirte que me gustas. Volvería a elegir ese primer beso y las ganas de seguir conociéndote al día siguiente.\n\nFeliz año y seis meses, Amor. Gracias por nosotros. Te amo.\n\nCon todo mi amor,\nMiguel`});
  c.creditos=[['De todo corazón','Miguel'],['Hecho para','Amor'],['Protagonistas','Miguel y Amor'],['Todo comenzó','7 de mayo de 2025'],['Celebramos','Un año y seis meses'],['Banda sonora',track.titulo],['Nuestro próximo estreno','Todo lo que nos queda por vivir'],['','Continuará ♡']];
  c.postCreditos={imagen:foto(5),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Amor… todavía nos quedan muchos besos por dar.',anuncio:'Continuará contigo',subtitulo:'Nuestro próximo capítulo empieza mañana.',sorpresa:'La próxima escena la escribimos juntos. Con amor, Miguel. ♡'};
})();

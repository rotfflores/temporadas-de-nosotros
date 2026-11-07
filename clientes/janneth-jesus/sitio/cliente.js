/* Experiencia exclusiva de Janneth Frausto Velarde para Jesus Alberto Figueroa Castillo. */
(() => {
 const c=window.TDN, A='Janneth', B='Jesus';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const amb=n=>`assets/ambiente/${n}.webp`;
 const video={img:'assets/video/recuerdo.mp4',poster:'assets/fotos/recuerdo.webp'};
 const olas={img:'assets/ambiente/olas.mp4',poster:'assets/ambiente/olas.webp'};
 const tracks=[
  ['Volver a sonreír — Nael Music','volver-a-sonreir'],
  ['Me enamoro más de ti cada día','me-enamoro'],
  ['Quiero tenerte a mi lado','quiero-tenerte'],
  ['Cambiaste mi vida — Nael The Producer','cambiaste-mi-vida'],
  ['Más fuerte que ayer — Nael Music','mas-fuerte']
 ].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Nuestra historia comienza por qué a le comentaron cosas mías pero nosotros no nos conocíamos el me busco y me mandó un mensaje y pues empezamos a mensajear y pues nos fuimos mandando mensajes cada días más aumentaba las ganas de platicar y pues de conocernos y platicamos abiertamente de nosotros somos una pareja que sufrimos mucho los dos y pues nos identificamos mucho y luchamos por seguir adelante los dos se que no es fácil pero tampoco imposible';
 const scene=(img,...texto)=>typeof img==='string'?{img,poster:img,texto}:{...img,texto};
 const carta=[
  'Jesus:',
  'A veces pienso en aquel primer mensaje y en todo lo que comenzó sin que lo supiéramos. Todavía no nos conocíamos, pero tus palabras fueron acercándonos, un día a la vez.',
  'Cada conversación me daba más ganas de saber de ti. Poder hablar abiertamente, escucharnos y reconocernos en lo que habíamos vivido hizo que entre nosotros naciera una confianza muy especial.',
  'Los dos sabemos lo que es sufrir. Por eso valoro tanto que hoy podamos acompañarnos con paciencia, con respeto y con ganas de seguir adelante. Gracias por buscarme y por darme la oportunidad de conocerte más allá de lo que otros pudieran decir.',
  'Quiero que sigamos aprendiendo a cuidarnos, que podamos decir lo que sentimos y que nunca nos falten las ganas de escucharnos. Sueño con días tranquilos, nuevas sonrisas y metas que podamos celebrar juntos, paso a paso.',
  'Este 11 de noviembre de 2026 quiero celebrar nuestro aniversario y todo lo que estamos construyendo. No sé todas las cosas que vendrán, pero sí sé que quiero poner de mi parte para seguir escribiendo esta historia contigo.',
  'Sé que no es fácil, pero tampoco imposible. Gracias por ser parte de mis ganas de volver a sonreír. Te amo.',
  'Con todo mi amor,\nJanneth Frausto Velarde'
 ].join('\n\n');
 Object.assign(c.pareja,{
  nombreA:A,nombreB:B,nombreCompletoA:'Janneth Frausto Velarde',nombreCompletoB:'Jesus Alberto Figueroa Castillo',
  apodos:[B,'mi amor'],apodo:B,fechaInicio:'2026-11-11',anioInicio:2026,anios:0,fechaCodigo:'',
  ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Nael Music',viajes:[],
  dificiles:['Ambos hemos vivido momentos difíciles'],anecdota:'Todo empezó con un mensaje',culpableAnecdota:2,gustosB:[],
  suenos:['Escucharnos con paciencia','Apoyarnos en nuestras metas','Seguir adelante juntos'],
  mensajeFinal:'Sé que no es fácil, pero tampoco imposible. Quiero seguir adelante contigo. — Janneth'
 });
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(7),perfilPareja:foto(3),
  t0:foto(3),t1:foto(5),t2:foto(6),t3:foto(1),t4:foto(7),t5:foto(8),t6:foto(2),t7:foto(9),
  final:portada(5),puzzle:foto(3),puzzle2:foto(5),postCreditos:foto(6)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-jesus.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'a4aae22a48133b115b7900db0d3fb0e3c1c3f8dc0fedca657e8f4486b8bfe8ae',pistaPassword:'La clave de seis dígitos que Janneth preparó para ti.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'526862451050',email:'',endpoint:''});
 Object.assign(c.sitio,{
  url:'https://streaming-us.rotfstudio.com/clientes/janneth-jesus/sitio/index.html?compartir=1',
  coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, confianza y esperanza',heroTag:'EXCLUSIVO PARA JESUS',
  heroTop:'De Janneth para Jesus · Aniversario 11 de noviembre de 2026',
  sinopsis:'Un mensaje los acercó. Las conversaciones les dieron confianza. Hoy, Janneth y Jesus eligen luchar juntos por lo que sienten. Cuatro películas, una serie y recuerdos de una historia que sigue escribiéndose.',
  generos:['Romance','Basada en hechos reales','Volver a creer'],filaRecomendada:'Todo empezó con un mensaje'
 });
 const film=(num,titulo,img,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:img,
  musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,
  creditos:[['Para','Jesus Alberto Figueroa Castillo'],['Con amor de','Janneth Frausto Velarde'],['Aniversario','11 de noviembre de 2026']],
  episodios:[{titulo,duracion:86,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Todo empezó con un mensaje',portada(3),tracks[0],
   'Antes de conocerse, hubo un mensaje. Después llegaron las ganas de conversar, la confianza y la decisión de seguir adelante juntos.',[
    scene(foto(3),'Nuestra historia','Janneth y Jesus'),
    scene(amb('atardecer'),'Antes de conocernos,','alguien te habló de mí.'),
    scene(foto(7),'Tú me buscaste','y me mandaste un mensaje.'),
    scene(foto(6),'Así empezamos a conversar,','sin saber todo lo que vendría.'),
    scene(amb('manos'),'Cada día crecían las ganas de platicar,','de conocernos un poco más.'),
    scene(foto(5),'Nos abrimos el corazón','y hablamos de lo que habíamos vivido.'),
    scene(foto(9),'Los dos habíamos sufrido.','En nuestras historias encontramos comprensión.'),
    scene(video,'Y elegimos luchar','por seguir adelante juntos.'),
    scene(foto(3),'Sé que no es fácil…','pero tampoco imposible.'),
    scene(foto(5),'Gracias por aquel primer mensaje.','Hoy quiero seguir escribiendo contigo. — Janneth')
   ]),
  film(1,'Me enamoro de ti',portada(6),tracks[1],
   'Una declaración de Janneth: las palabras, la confianza y los pequeños momentos que hacen crecer lo que siente.',[
    scene(foto(6),'Jesus, me enamoro de ti','en cada conversación.'),
    scene(foto(3),'Me gusta poder hablar contigo','con el corazón abierto.'),
    scene(foto(7),'Me emociona conocerte más,','sin prisas y con sinceridad.'),
    scene(amb('manos'),'Quiero cuidar esta confianza','que fuimos construyendo.'),
    scene(foto(8),'Me ilusiona lo sencillo:','compartir un rato y sonreír contigo.'),
    scene(foto(5),'Quiero seguir descubriendo','todo lo bonito que hay en ti.'),
    scene(foto(9),'Y que cada día encuentres en mí','a alguien dispuesto a escucharte.'),
    scene(foto(3),'Te amo, Jesus.','Qué bonito estar escribiendo esto contigo.')
   ]),
  film(2,'Gracias por llegar',portada(5),tracks[3],
   'Gracias por buscarme, por escuchar y por construir conmigo una oportunidad para volver a creer.',[
    scene(foto(5),'Gracias por buscarme,','cuando todavía no nos conocíamos.'),
    scene(amb('atardecer'),'Por dar el primer paso','y abrir esta conversación.'),
    scene(foto(6),'Por escuchar mi historia','y compartir conmigo la tuya.'),
    scene(foto(7),'Por dejarme conocerte','más allá de cualquier comentario.'),
    scene(foto(1),'Gracias por los recuerdos','que ahora puedo guardar.'),
    scene(foto(2),'Por esas pequeñas alegrías','que también cuentan nuestra vida.'),
    scene(foto(4),'Quiero aprender a disfrutar','cada instante de nuestro camino.'),
    scene(video,'Y agradecerte, hoy,','las ganas de seguir adelante juntos.'),
    scene(foto(3),'Tu llegada tiene un lugar','muy especial en mi historia.'),
    scene(foto(5),'Gracias, Jesus.','Con todo mi amor, Janneth.')
   ]),
  film(3,'No es imposible',portada(9),tracks[4],
   'Los dos conocen los días difíciles. Esta es una promesa de paciencia, compañía y esperanza para el camino que viene.',[
    scene(foto(9),'Los dos sabemos','que a veces la vida pesa.'),
    scene(olas,'Hemos sufrido,','pero seguimos aquí.'),
    scene(foto(6),'Quiero que podamos escucharnos','cuando falten las palabras.'),
    scene(amb('manos'),'Aprender a pedir ayuda,','a comprendernos y a tener paciencia.'),
    scene(foto(5),'Acompañarnos sin dejar de cuidar','lo que cada uno necesita.'),
    scene(video,'Celebrar los pasos pequeños,','porque también nos llevan lejos.'),
    scene(foto(3),'Seguir adelante no siempre será fácil.','Quiero poner de mi parte.'),
    scene(foto(5),'Porque contigo quiero intentarlo.','No es fácil, pero tampoco imposible.')
   ])
 ];
 const episode=(titulo,descripcion,track,escenas)=>({titulo,descripcion,duracion:58,musica:track.src,cancion:track.titulo,escenas,interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Lo que viene para nosotros',anio:2026,clasificacion:'TP',imagen:portada(8),
  musica:tracks[2].src,cancion:tracks[2].titulo,sinopsis:'Tres capítulos para mirar al futuro: escucharnos, acompañar nuestras metas y seguir eligiendo este camino.',
  creditos:[['Protagonistas','Janneth y Jesus'],['Próximo capítulo','Seguir adelante juntos']],episodios:[
   episode('Un lugar para hablar','Que nunca nos falten la confianza y las ganas de conocernos.',tracks[2],[
    scene(foto(6),'Todo empezó hablando.','Quiero que nunca perdamos eso.'),
    scene(foto(7),'Que podamos decir lo que sentimos','y escuchar sin apresurarnos.'),
    scene(amb('manos'),'Construir un amor','donde ambos podamos ser nosotros mismos.'),
    scene(foto(3),'Quiero tenerte a mi lado','y seguir conociéndote cada día.')]),
   episode('Metas compartidas','Deseos para construir, paso a paso, una vida con más calma y alegría.',tracks[4],[
    scene(olas,'Sueño con días tranquilos','y con motivos nuevos para sonreír.'),
    scene(foto(5),'Quiero apoyar tus metas','y compartir contigo las mías.'),
    scene(foto(8),'Hacer espacio para nosotros,','para conversar y crear recuerdos.'),
    scene(video,'Sin prisa. Sin rendirnos.','Un paso a la vez, juntos.')]),
   episode('Seguir eligiéndonos','Una dedicatoria de aniversario y una promesa de Janneth.',tracks[0],[
    scene(foto(9),'11 de noviembre de 2026','Nuestro aniversario.'),
    scene(foto(6),'Hoy celebro que coincidimos','y que quisimos conocernos.'),
    scene(foto(3),'Quiero cuidar lo que sentimos','con hechos, respeto y paciencia.'),
    scene(foto(5),'Y seguir escribiendo esta historia contigo.','Te amo, Jesus. — Janneth')])
  ]};
 c.temporadas.push(...films,serie);
 c.extras=[
  {titulo:'Nuestra historia, en palabras de Janneth',img:foto(3),texto:historia},
  {titulo:'Nuestro aniversario',img:foto(5),texto:'11 de noviembre de 2026. Una fecha para celebrar lo que sentimos y todo lo que queremos seguir construyendo.'},
  {titulo:'Un mensaje que lo cambió todo',img:foto(6),texto:'Todavía no nos conocíamos. Me buscaste, me escribiste y cada día crecieron las ganas de conversar contigo.'},
  {titulo:'Lo que deseo para nosotros',img:foto(8),texto:'Paciencia para los días difíciles, confianza para hablar y alegría para celebrar cada pequeño paso juntos.'}
 ];
 Object.assign(c.final,{titulo:'Una carta para Jesus',imagen:portada(5),sinopsis:'Antes de la última escena, cuéntame qué significa para ti lo que estamos construyendo.',
  preguntas:['¿Qué pensaste cuando me mandaste aquel primer mensaje?','¿Qué conversación nuestra recuerdas con más cariño?','¿Qué te hace sentir acompañado a mi lado?','¿Qué meta te gustaría que apoyáramos juntos?','¿Qué deseas para nuestro próximo capítulo?'],carta:()=>carta});
 c.creditos=[['Para','Jesus Alberto Figueroa Castillo'],['Con todo el amor de','Janneth Frausto Velarde'],['Aniversario','11 de noviembre de 2026'],['Nuestra historia','Un primer mensaje y las ganas de seguir adelante'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Lo que viene','Más conversaciones, más sonrisas y nuevas metas'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(3),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Jesus, nuestra historia sigue…',anuncio:'Continuará',subtitulo:'No es fácil, pero tampoco imposible.',sorpresa:'Quiero seguir adelante contigo. — Janneth ♡'};
})();

/* De Jesús para Ragelly. Nuestro capítulo. */
(() => {
 const c=window.TDN, A='Jesús', B='Ragelly';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const amb=n=>`assets/ambiente/${n}.webp`;
 const vid=n=>({img:`assets/ambiente/${n}.mp4`,poster:amb(n)});
 const scene=(img,...texto)=>typeof img==='string'?{img,poster:img,texto}:{...img,texto};
 const tracks=[['Perdóname Mi Amor — Conjunto Primavera','primavera'],['Perdóname — Gerardo Ortiz','gerardo'],['Perdón — Camila','camila'],['Una dedicatoria más para ti','audio-adjunto']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='quisiera pedir una disculpa por todo el daño causado a ti persona a ti corazón decirte que no hay manera ni forma de componer todo lo que te lastime pero que aré cada día valga la pena para remediar un poco el daño causado a ti te amo demasiado chaparrita dejeme demostrar que las cosas van ser diferente mi amor te amo mi vida';
 Object.assign(c.pareja,{
  nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:['chaparrita','mi amor','mi vida'],apodo:'chaparrita',
  fechaInicio:'2025-12-12',anioInicio:2025,aniosManual:0,anios:Math.max(0,new Date().getFullYear()-2025-(new Date().getMonth()<11||(new Date().getMonth()===11&&new Date().getDate()<12)?1:0)),fechaCodigo:'121225',
  ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Conjunto Primavera',viajes:[],dificiles:[],anecdota:'Quiero demostrarte con hechos que las cosas pueden ser diferentes.',culpableAnecdota:1,gustosB:[],
  suenos:['Aprender a escucharte','Cuidar tu corazón con hechos','Construir días de respeto y tranquilidad'],
  mensajeFinal:'Te amo demasiado, chaparrita. Quiero que mis acciones hablen por mí, cada día. Con amor, Jesús. ♡'
 });
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(4),perfilPareja:foto(1),t0:foto(1),t1:foto(13),t2:foto(23),t3:foto(25),t4:foto(20),t5:foto(29),t6:foto(15),t7:foto(37),final:portada(1),puzzle:foto(1),puzzle2:foto(25),postCreditos:foto(13)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-ragelly.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'d019f42c1ce35ea49060ac8e5fdd19c387c696ccb53f631cf96e93dbe1e44135',pistaPassword:'Nuestra fecha especial: día, mes y los dos últimos dígitos del año.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'529841057499',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/jesus-ragelly/sitio/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, disculpas y nuevos comienzos',heroTag:'EXCLUSIVO PARA RAGELLY',heroTop:'De Jesús para Ragelly · 12 de diciembre de 2025',
  sinopsis:'Chaparrita, esta historia guarda nuestros recuerdos y algo que necesito decirte de corazón: perdón por haberte lastimado. Te amo y quiero demostrarte, con acciones de cada día, que puedo cuidar mejor de ti y de lo nuestro.',
  generos:['Romance','Nuestra historia','Para mi chaparrita'],filaRecomendada:'Lo que quiero decirte, mi amor'});
 const film=(num,titulo,n,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,
  creditos:[['Para',B],['Con amor de',A],['Nuestra fecha','12 de diciembre de 2025']],episodios:[{titulo,duracion:96,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Perdóname, mi amor',1,tracks[0],'Una disculpa de corazón: reconocer el daño y empezar a responder con hechos.',[
   scene(foto(1),'Ragelly, mi amor…','Necesito hablarte desde el corazón.'),
   scene(foto(2),'Quiero pedirte una disculpa','por todo el daño que te causé.'),
   scene(foto(5),'Por lastimar a tu persona,','tus sentimientos y tu corazón.'),
   scene(amb('cielo'),'Sé que no hay una frase','que pueda borrar ese dolor.'),
   scene(foto(6),'No quiero buscar excusas.','Quiero hacerme responsable.'),
   scene(foto(7),'Escuchar lo que te dolió','sin minimizar lo que sientes.'),
   scene(foto(8),'Te amo demasiado, chaparrita.','Y quiero aprender a cuidarte mejor.'),
   scene(foto(9),'Haré que cada día valga la pena','para remediar un poco el daño.'),
   scene(vid('atardecer'),'Que mis acciones hablen,','con paciencia y constancia.'),
   scene(foto(10),'Déjame demostrarte un cambio real.','Te amo, mi vida. — Jesús')]),
  film(1,'Gracias por lo que compartimos',15,tracks[1],'Nuestros recuerdos merecen gratitud, cuidado y un lugar especial en esta historia.',[
   scene(foto(11),'Gracias por cada momento','que hoy guardo con cariño.'),
   scene(foto(12),'Por compartir conmigo','tantos pedacitos de tu vida.'),
   scene(foto(13),'Miro estas fotos y recuerdo','lo valioso que es estar a tu lado.'),
   scene(foto(14),'Los días sencillos también','merecen quedarse para siempre.'),
   scene(foto(15),'Quiero agradecer tu compañía','sin darla nunca por sentada.'),
   scene(foto(16),'Por cada sonrisa compartida,','por cada recuerdo nuestro.'),
   scene(foto(17),'Gracias por formar parte','de mi historia, Ragelly.'),
   scene(foto(18),'Quiero cuidar mucho mejor','los momentos que puedan venir.'),
   scene(amb('horizonte'),'Que agradecerte también sea','respetarte y escucharte.'),
   scene(vid('olas'),'Lo vivido tiene un lugar en mí.','Gracias, mi amor. — Jesús')]),
  film(2,'Mi chaparrita',4,tracks[2],'Una dedicatoria a Ragelly, a su lugar en el corazón de Jesús y al amor que desea cuidar.',[
   scene(foto(19),'Mi chaparrita…','Así te llama mi corazón.'),
   scene(foto(20),'Tu nombre tiene un lugar','muy especial en mi vida.'),
   scene(foto(21),'Te amo demasiado, Ragelly.','Quiero que puedas sentirlo en mi trato.'),
   scene(foto(22),'Que a tu lado haya espacio','para tus sueños y tu voz.'),
   scene(foto(23),'Que no falten las ganas','de compartir una sonrisa.'),
   scene(foto(24),'Quiero valorar tu presencia','también en los días cotidianos.'),
   scene(foto(25),'Decirte que eres importante','y demostrarlo en los detalles.'),
   scene(foto(26),'Que mi cariño no se quede','solamente en palabras bonitas.'),
   scene(foto(27),'Mi amor, mi vida, chaparrita…','Todo esto quiero decirte.'),
   scene(vid('atardecer'),'Mereces respeto y tranquilidad.','Quiero aprender a darte eso. — Jesús')]),
  film(3,'Demostrarlo cada día',29,tracks[3],'Lo que deseo construir: respeto, paciencia y cambios que se sostengan en el tiempo.',[
   scene(foto(28),'No puedo cambiar lo que pasó.','Sí puedo decidir cómo actuar hoy.'),
   scene(foto(29),'Quiero aprender a escucharte','antes de responder.'),
   scene(foto(30),'Hablarte con respeto,','incluso cuando pensemos diferente.'),
   scene(foto(31),'Hacerme cargo de mis errores','y cumplir lo que te prometa.'),
   scene(foto(32),'Cuidar nuestros días sencillos','sin esperar una ocasión especial.'),
   scene(foto(33),'Respetar tu espacio, tus tiempos','y todo lo que tú necesitas.'),
   scene(foto(34),'Deseo apoyar tus metas','y celebrar cada paso que tú elijas.'),
   scene(foto(35),'Sueño con más recuerdos juntos,','si también es lo que tú deseas.'),
   scene(amb('horizonte'),'No quiero apresurar tu corazón.','Quiero ser constante en mi cambio.'),
   scene(vid('olas'),'Un día a la vez, con hechos.','Te amo, mi vida. — Jesús')])
 ];
 const episode=(titulo,descripcion,track,escenas)=>({titulo,descripcion,duracion:68,musica:track.src,cancion:track.titulo,escenas,interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Un día a la vez',anio:2026,clasificacion:'TP',imagen:portada(13),musica:tracks[2].src,cancion:tracks[2].titulo,
  sinopsis:'Tres capítulos sobre escuchar, reparar y construir con hechos. El futuro que Jesús desea cuidar, respetando siempre el corazón de Ragelly.',creditos:[['Protagonistas','Jesús y Ragelly'],['Nuestra fecha','12 de diciembre de 2025']],episodios:[
   episode('Primero, escucharte','Entender tu dolor es el primer paso para empezar a cambiar.',tracks[2],[
    scene(foto(36),'Mi amor, quiero detenerme','a escuchar cómo te sientes.'),
    scene(foto(37),'Sin interrumpirte,','sin justificar lo que te dolió.'),
    scene(foto(3),'Tu corazón merece cuidado.','Tus palabras merecen respeto.'),
    scene(foto(3),'Quiero aprender a comprenderte','con calma y honestidad.'),
    scene(foto(4),'No te pido olvidar.','Quiero hacerme responsable.')]),
   episode('Reparar con hechos','La confianza necesita acciones que se repitan y promesas que se cumplan.',tracks[0],[
    scene(foto(25),'Quiero que un cambio real','se note en lo cotidiano.'),
    scene(foto(29),'En cómo te hablo,','en cómo te escucho.'),
    scene(vid('olas'),'En respetar tus límites','y cumplir mi palabra.'),
    scene(foto(37),'Sin pedirte que confíes de golpe.','Sin poner un plazo a tu dolor.'),
    scene(foto(1),'Cada día es una oportunidad','para actuar mejor. — Jesús')]),
   episode('Lo que deseo contigo','Un futuro como deseo compartido: paz, respeto y nuevos recuerdos.',tracks[1],[
    scene(foto(36),'El 12 de diciembre de 2025','es nuestra fecha especial.'),
    scene(foto(13),'Deseo más días para agradecer','y más motivos para sonreír.'),
    scene(vid('atardecer'),'Que tus metas tengan espacio','y tus decisiones, respeto.'),
    scene(foto(25),'Si tú también lo deseas,','quiero construir algo más bonito.'),
    scene(foto(1),'Chaparrita, te amo demasiado.','Un día a la vez. — Jesús ♡')])
  ]};
 c.temporadas=[...films,serie];
 c.extras=[
  {titulo:'El mensaje de Jesús',img:foto(1),texto:historia},
  {titulo:'Nuestra fecha especial',img:foto(13),texto:'12 de diciembre de 2025. Una fecha nuestra, guardada con cariño.'},
  {titulo:'Lo que quiero demostrarte',img:foto(25),texto:'Respeto, escucha y constancia. Quiero que mi forma de actuar acompañe lo que hoy te digo.'},
  {titulo:'Mi chaparrita',img:foto(4),texto:'Te amo demasiado, Ragelly. Quiero cuidar tu corazón y respetar tus tiempos, mi amor.'}
 ];
 const carta=[
  'Ragelly, mi chaparrita:',
  'Quisiera pedirte una disculpa por todo el daño que causé a tu persona y a tu corazón. Sé que no hay manera de borrar lo que te lastimé ni palabras que puedan hacer como si nada hubiera pasado. Quiero reconocerlo sin excusas.',
  'Te amo demasiado, mi amor. Precisamente por eso necesito que este mensaje vaya acompañado de algo más que palabras: escuchar lo que sientes, respetar tus límites y hacerme responsable de mis decisiones.',
  'Gracias por los momentos que compartimos y por los recuerdos que guardan estas fotografías. Miro nuestra historia con cariño. Lo bonito que vivimos no hace menos importante lo que te dolió; quiero aprender a cuidar ambas cosas con honestidad.',
  'Haré que cada día valga la pena para remediar un poco el daño causado. Quiero hablarte con respeto, cumplir mi palabra y detenerme a escucharte. Que el cambio se vea en los días comunes, cuando no hay una cámara ni una fecha especial.',
  'Nuestra fecha, el 12 de diciembre de 2025, tiene un lugar especial en este capítulo. Para lo que viene, deseo tranquilidad, metas que podamos apoyar y nuevos recuerdos que nazcan del cariño y el respeto.',
  'No quiero apresurar tu corazón ni pedirte que olvides. Tus tiempos y tus decisiones merecen respeto. Si tú también deseas seguir construyendo, quiero demostrarte con constancia que las cosas pueden ser diferentes.',
  'Te amo, mi vida. Déjame demostrarte con hechos lo que hoy te digo de corazón. Un día a la vez, chaparrita.',
  'Con amor,\nJesús ♡'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'De corazón, para Ragelly',imagen:portada(1),sinopsis:'Una carta sobre lo que siento, lo que agradezco y lo que quiero demostrarte cada día.',
  preguntas:['¿Qué te gustaría que comprendiera mejor de cómo te sientes?','¿Qué necesitas para sentirte escuchada y respetada?','¿Qué recuerdo de nosotros guardas con cariño?','¿Qué cambio concreto te gustaría ver en mis acciones?','¿Qué deseas para ti y para nuestro próximo capítulo?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con amor de',A],['Nuestra fecha','12 de diciembre de 2025'],['Un compromiso','Escucharte y respetarte cada día'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Nuestros recuerdos','Gracias por los momentos compartidos'],['Lo que deseo','Demostrarlo con hechos'],['','Un día a la vez ♡']];
 c.postCreditos={imagen:foto(13),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Ragelly, te amo demasiado, chaparrita.',anuncio:'Un día a la vez',subtitulo:'Quiero que mis acciones cuiden lo que mis palabras te dicen.',sorpresa:'Con todo mi amor, Jesús. ♡'};
})();

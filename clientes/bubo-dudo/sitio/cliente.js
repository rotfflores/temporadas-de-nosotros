/* De Bubo para Dudo. Contenido exclusivo de este cliente. */
(() => {
 const c=window.TDN, A='Bubo', B='Dudo';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const amb=n=>`assets/ambiente/${n}.webp`;
 const vid=n=>({img:`assets/ambiente/${n}.mp4`,poster:amb(n)});
 const scene=(img,...texto)=>typeof img==='string'?{img,poster:img,texto}:{...img,texto};
 const tracks=[['Perfect — Ed Sheeran','perfect'],['HOLLYWOOD — Peso Pluma, Estevan Plazola','hollywood'],['Die With A Smile — Lady Gaga, Bruno Mars','die-with-a-smile'],['Morena Canela — Chino Pacas','morena-canela'],['Te Regalo — Rels B, J Abecia','te-regalo']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='El de estado de México y yo de Michoacán nos conocimos en Coahuila. Desde la primera vez que nos conocimos sentimos esa conexión. Ambos somos muy lindos y atentos... Somos muy felices gracias a dios. Tenemos muchos cosas en común!!! Eres muy lindo   guapo, amable y trabajador';
 Object.assign(c.pareja,{
  nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:[B,'mi amor'],apodo:B,
  fechaInicio:'2024-11-10',anioInicio:2024,aniosManual:0,anios:Math.max(0,new Date().getFullYear()-2024-(new Date().getMonth()<10||(new Date().getMonth()===10&&new Date().getDate()<10)?1:0)),fechaCodigo:'10112024',
  ciudad:'Coahuila',primeraCita:'',cancion:tracks[0].titulo,artista:'Ed Sheeran',viajes:[],dificiles:[],
  anecdota:'De lugares distintos, coincidimos en Coahuila.',culpableAnecdota:2,gustosB:[],
  suenos:['Seguir cuidando nuestra conexión','Apoyarnos en nuestras metas','Construir más recuerdos juntos'],
  mensajeFinal:'Dudo, gracias por ser tan lindo, guapo, amable y trabajador. Qué bonito coincidir contigo. Con amor, Bubo. ♡'
 });
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(14),perfilPareja:foto(9),t0:foto(9),t1:foto(14),t2:foto(16),t3:foto(11),t4:foto(8),t5:foto(19),t6:foto(1),t7:foto(28),final:portada(14),puzzle:foto(9),puzzle2:foto(16),postCreditos:foto(11)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-dudo.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'f28345094df0b1ed1e0639f26fba93cffb8077d97cb93d1d5a76dc0e46c1c144',pistaPassword:'Nuestra fecha especial, en seis dígitos: día, mes y año.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'523334637462',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/bubo-dudo/sitio/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, conexión y gratitud',heroTag:'EXCLUSIVO PARA DUDO',heroTop:'De Bubo para Dudo · Desde el 10 de noviembre de 2024',
  sinopsis:'Él, del Estado de México. Ella, de Michoacán. Coahuila fue el lugar donde sus caminos se encontraron y sintieron una conexión desde el primer momento. Esta es su historia, contada con amor por Bubo.',
  generos:['Romance','Basada en nuestra historia','Hecha para ti'],filaRecomendada:'La suerte de coincidir contigo'});
 const film=(num,titulo,n,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,
  creditos:[['Para',B],['Con amor de',A],['Nuestra fecha','10 de noviembre de 2024']],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Coahuila nos encontró',9,tracks[0],'Dos lugares de origen, un encuentro en Coahuila y esa conexión que ambos sintieron desde la primera vez.',[
   scene(foto(1),'Dudo, esta es nuestra historia.','De Bubo, con todo mi amor.'),
   scene(amb('horizonte'),'Tú, del Estado de México.','Yo, de Michoacán.'),
   scene(foto(8),'Y entre tantos caminos,','nos conocimos en Coahuila.'),
   scene(foto(9),'Desde la primera vez que nos vimos,','los dos sentimos esa conexión.'),
   scene(foto(10),'Qué bonito encontrarnos','y descubrir tanto en común.'),
   scene(foto(11),'Me gusta cómo se siente','estar cerca de ti.'),
   scene(foto(12),'Tu cariño y tus atenciones','hacen muy bonito lo nuestro.'),
   scene(vid('atardecer'),'Somos muy felices.','Y le doy gracias a Dios por ello.'),
   scene(foto(13),'Nuestro comienzo tiene una fecha:','10 de noviembre de 2024.'),
   scene(foto(14),'De lugares distintos a esta misma historia.','Qué suerte la mía coincidir contigo.')]),
  film(1,'Todo lo lindo de ti',16,tracks[3],'Una dedicatoria a su sonrisa, su amabilidad, sus atenciones y esa forma trabajadora de mirar la vida.',[
   scene(foto(15),'Dudo, hay tantas cosas','que me encantan de ti.'),
   scene(foto(16),'Eres muy lindo.','Y sí: también muy guapo.'),
   scene(foto(17),'Admiro tu amabilidad,','esa forma bonita de tratarme.'),
   scene(foto(18),'Me gusta que seamos atentos','y que cuidemos nuestros detalles.'),
   scene(foto(19),'Admiro al hombre trabajador','que veo en ti.'),
   scene(foto(2),'Me hace feliz lo mucho','que tenemos en común.'),
   scene(amb('cielo'),'Quiero seguir descubriendo','motivos para admirarte.'),
   scene(foto(3),'Y recordarte, también en lo cotidiano,','lo especial que eres para mí.'),
   scene(foto(4),'No necesito una gran ocasión','para querer estar contigo.'),
   scene(foto(16),'Me gustas tú, Dudo.','Con todo lo lindo que eres. — Bubo')]),
  film(2,'Gracias por lo nuestro',14,tracks[4],'Flores, una mesa compartida, manos juntas: una carta de agradecimiento por el amor que se vive en los detalles.',[
   scene(foto(20),'Gracias por los pequeños momentos','que se vuelven grandes recuerdos.'),
   scene(foto(21),'Por compartir conmigo','la alegría de lo sencillo.'),
   scene(foto(22),'Por cada detalle bonito','que guardo en el corazón.'),
   scene(foto(23),'Por esos ratitos juntos','que quisiera volver a vivir.'),
   scene(foto(24),'Por las palabras de amor','que vale la pena conservar.'),
   scene(foto(25),'Por hacer espacio','para disfrutar de nosotros.'),
   scene(foto(26),'Por tu compañía,','tus atenciones y tu cariño.'),
   scene(foto(27),'Por convertir un día sencillo','en un recuerdo nuestro.'),
   scene(foto(28),'Gracias a Dios por esta felicidad.','Gracias a ti por compartirla conmigo.'),
   scene(vid('olas'),'Quiero seguir cuidando','todo lo bonito que tenemos.')]),
  film(3,'Lo que sueño contigo',11,tracks[2],'Un futuro contado como deseo: apoyarse, crecer, disfrutar la vida y seguir eligiendo su conexión.',[
   scene(foto(5),'Dudo, cuando pienso en lo que viene,','me ilusiona seguir contigo.'),
   scene(foto(6),'Quiero que sigamos siendo','lindos y atentos el uno con el otro.'),
   scene(foto(7),'Que podamos celebrar tus metas','y también compartir las mías.'),
   scene(amb('horizonte'),'Sueño con nuevos caminos','que podamos descubrir juntos.'),
   scene(foto(9),'Quiero que nuestras coincidencias','sigan acercándonos.'),
   scene(foto(11),'Y que aprendamos a escucharnos','también cuando pensemos diferente.'),
   scene(vid('atardecer'),'Deseo días llenos de paz,','de cariño y de motivos para agradecer.'),
   scene(foto(14),'Muchos más 10 de noviembre','para celebrar nuestra historia.'),
   scene(foto(16),'Y recuerdos que todavía','no sabemos que vamos a amar.'),
   scene(foto(19),'Paso a paso, con amor.','Eso es lo que sueño contigo. — Bubo')])
 ];
 const episode=(titulo,descripcion,track,escenas)=>({titulo,descripcion,duracion:64,musica:track.src,cancion:track.titulo,escenas,interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Nuestra conexión',anio:2026,clasificacion:'TP',imagen:portada(8),musica:tracks[1].src,cancion:tracks[1].titulo,
  sinopsis:'Tres episodios sobre lo que nos une: el primer encuentro, el cariño de cada día y las ganas de seguir construyendo.',creditos:[['Protagonistas','Bubo y Dudo'],['Desde','10 de noviembre de 2024']],episodios:[
   episode('Donde coincidimos','Coahuila: el punto de encuentro de dos caminos distintos.',tracks[1],[
    scene(amb('horizonte'),'Michoacán y el Estado de México.','Dos comienzos distintos.'),
    scene(foto(8),'Coahuila fue el lugar','en el que nos encontramos.'),
    scene(foto(9),'Y desde la primera vez,','sentimos esa conexión.'),
    scene(foto(14),'Hay encuentros que se quedan contigo.','El nuestro se quedó en mi corazón.'),
    scene(foto(11),'Qué bonito que fuimos nosotros','los que coincidimos. ♡')]),
   episode('Nuestro idioma','Atenciones, cosas en común y un cariño que se cuida entre los dos.',tracks[4],[
    scene(foto(16),'Tenemos tanto en común','y tanto por seguir descubriendo.'),
    scene(foto(19),'Somos lindos y atentos.','Quiero que sigamos cuidando eso.'),
    scene(foto(28),'A veces basta tomarnos de la mano','para sentirnos cerca.'),
    scene(foto(14),'Que nunca nos falte tiempo','para decirnos lo que sentimos.'),
    scene(foto(9),'Me hace feliz lo nuestro, Dudo.','Gracias por compartirlo conmigo.')]),
   episode('Todavía nos queda', 'Una dedicatoria para todos los capítulos que Bubo desea vivir con Dudo.',tracks[0],[
    scene(foto(11),'10 de noviembre.','La fecha que guardamos como nuestra.'),
    scene(vid('olas'),'Deseo que el futuro nos encuentre','con ganas de seguir creciendo.'),
    scene(foto(16),'Que haya nuevas metas,','nuevas risas y más recuerdos.'),
    scene(foto(28),'Y gratitud por lo que ya tenemos.','Somos muy felices, gracias a Dios.'),
    scene(foto(9),'Esta historia sigue, mi amor.','Con todo mi cariño, Bubo. ♡')])
  ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[
  {titulo:'Nuestra historia, en palabras de Bubo',img:foto(9),texto:historia},
  {titulo:'Nuestra fecha',img:foto(11),texto:'10 de noviembre de 2024. Un comienzo que quiero seguir celebrando contigo.'},
  {titulo:'Lo que admiro de ti',img:foto(16),texto:'Lindo, guapo, amable y trabajador. Dudo, me encanta poder recordarte todo lo que veo en ti.'},
  {titulo:'Gracias por esta felicidad',img:foto(28),texto:'Desde aquella conexión en Coahuila hasta las atenciones de cada día: gracias a Dios por lo felices que somos.'}
 ];
 const carta=[
  'Dudo:',
  'Tú, del Estado de México, y yo, de Michoacán. Quién diría que nuestros caminos se encontrarían en Coahuila y que desde la primera vez sentiríamos esa conexión tan bonita.',
  'Me hace feliz pensar en lo mucho que tenemos en común. Me gusta que seamos lindos y atentos, que haya cariño en nuestros detalles y que podamos guardar tantos momentos que hablan de nosotros.',
  'Quiero decirte lo que admiro de ti: eres muy lindo, guapo, amable y trabajador. Tu forma de ser tiene un lugar muy especial en mi corazón. Gracias por tu cariño y por todo lo bonito que compartimos.',
  'Somos muy felices, gracias a Dios. Hoy quiero detenerme a agradecer esa felicidad, nuestra conexión y cada recuerdo que forma parte de esta historia desde el 10 de noviembre de 2024.',
  'Para lo que viene, deseo que sigamos cuidándonos con atenciones, que podamos escucharnos y apoyar nuestras metas. Sueño con seguir creciendo contigo, disfrutar de los días sencillos y encontrar nuevos motivos para sonreír juntos.',
  'No sé cómo serán todos nuestros próximos capítulos, pero sí sé que quiero poner amor, paciencia y ganas de mi parte. Que nunca dejemos de valorar lo que sentimos desde aquel primer encuentro.',
  'Gracias por ser tú, Dudo. Qué bonito coincidir contigo. Que nos queden muchos recuerdos y muchos 10 de noviembre por celebrar.',
  'Con todo mi amor,\nBubo ♡'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Una carta para Dudo',imagen:portada(14),sinopsis:'Lo que siento, lo que agradezco y lo que deseo seguir viviendo contigo. Una última escena, escrita para ti.',
  preguntas:['¿Qué sentiste la primera vez que nos conocimos en Coahuila?','¿Qué es lo que más te gusta que tengamos en común?','¿Cuál de nuestros recuerdos te gustaría volver a vivir?','¿Qué meta sueñas que podamos apoyarnos a cumplir?','¿Qué deseas para nuestro próximo 10 de noviembre?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con todo el amor de',A],['Nuestra fecha','10 de noviembre de 2024'],['Donde nos encontramos','Coahuila'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Gracias a Dios','Por la felicidad que compartimos'],['El próximo capítulo','Seguir cuidando nuestra conexión'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(11),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Dudo, todavía nos queda mucho por contar…',anuncio:'Continuará',subtitulo:'De todos los caminos, qué bonito coincidir contigo.',sorpresa:'Con todo mi amor, Bubo. ♡'};
})();

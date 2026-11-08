/* Edición independiente de Axel para Xhunashi. */
(() => {
 const c=window.TDN,A='Axel',B='Xhunashi';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const amb=n=>`assets/ambiente/${n}.webp`;
 const olas={img:'assets/ambiente/olas.mp4',poster:amb('olas')};
 const atardecer={img:'assets/ambiente/atardecer.mp4',poster:amb('atardecer')};
 const tracks=[
  {titulo:'Hasta la Camisa',src:'assets/audio/hasta-la-camisa-climax.mp3'},
  {titulo:'Te conozco — Ricardo Arjona',src:'assets/audio/te-conozco-climax.mp3'}
 ];
 const historia='Gracias mi berrinchuda por este tiempo que emos estado juntos, gracias por llegar a mi vida cuando mas lo necesitaba porque durante este tiempo has sido mi guía, mi luz y mi paz te quiero mucho feliz dia';
 const scene=(img,...texto)=>typeof img==='string'?{img,poster:img,texto}:{...img,texto};
 Object.assign(c.pareja,{
  nombreA:A,nombreB:B,apodos:['mi berrinchuda',B],apodo:'mi berrinchuda',
  fechaInicio:'',anioInicio:2026,anios:0,fechaCodigo:'0811',ciudad:'',primeraCita:'',
  cancion:'Hasta la Camisa',artista:'',viajes:[],dificiles:[],anecdota:'',culpableAnecdota:2,gustosB:[],
  suenos:['Cuidarnos con paciencia','Apoyar nuestras metas','Seguir creando recuerdos juntos'],
  mensajeFinal:'Gracias por ser mi guía, mi luz y mi paz. Te quiero mucho, mi berrinchuda. — Axel'
 });
 Object.assign(c.fotos,{
  hero:'assets/fotos/hero.webp',perfilB:foto(4),perfilPareja:foto(10),
  t0:foto(10),t1:foto(4),t2:foto(6),t3:foto(3),t4:foto(8),t5:foto(11),t6:foto(9),t7:foto(7),
  final:portada(10),puzzle:foto(10),puzzle2:foto(7),postCreditos:foto(10)
 });
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-xhunashi.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'7ef45737ddac485934ae911a6da811525324409b94e89cb6c67b066d7aaef772',pistaPassword:'Nuestro aniversario: día y mes, en cuatro dígitos.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'529612365535',email:'',endpoint:''});
 Object.assign(c.sitio,{
  url:'https://streaming-us.rotfstudio.com/clientes/axel-xhunashi/sitio/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Cariño, gratitud y compañía',
  heroTag:'SOLO PARA XHUNASHI',heroTop:'De Axel para ti · 8 de noviembre',
  sinopsis:'Llegaste cuando más te necesitaba y te convertiste en mi guía, mi luz y mi paz. Mi berrinchuda, estas cuatro películas y una serie guardan lo que siento por ti. Feliz aniversario. — Axel',
  generos:['Romance','Nuestra historia','Un regalo para ti'],filaRecomendada:'Gracias por llegar'
 });
 const credits=track=>[['Para',B],['Con cariño de',A],['Aniversario','8 de noviembre'],['Banda sonora',track.titulo]];
 const film=(num,titulo,n,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:credits(track),episodios:[{titulo,duracion:86,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Gracias por llegar',10,tracks[0],
   'Un mensaje de Axel para Xhunashi: gracias por llegar en el momento en que más necesitaba compañía y por llenar de luz su vida.',[
    scene(foto(10),'Xhunashi, esta historia es para ti.','De Axel, con mucho cariño.'),
    scene(foto(7),'Gracias, mi berrinchuda,','por este tiempo que hemos estado juntos.'),
    scene(atardecer,'Gracias por llegar a mi vida','cuando más lo necesitaba.'),
    scene(foto(4),'Durante este tiempo','has sido mi guía.'),
    scene(amb('luz'),'Has sido mi luz,','incluso en los días que se sienten grises.'),
    scene(foto(6),'Y has sido mi paz.','Eso significa mucho para mí.'),
    scene(foto(11),'Te quiero mucho.','Me alegra tenerte en mi vida.'),
    scene(foto(10),'Feliz aniversario, mi berrinchuda.','8 de noviembre · Axel y Xhunashi')]),
  film(1,'Mi berrinchuda',4,tracks[1],
   'Hay formas de decir «te quiero» que solo tienen sentido entre dos personas. Esta es una de las nuestras.',[
    scene(foto(4),'Mi berrinchuda…','Qué bonito poder llamarte así con cariño.'),
    scene(foto(3),'Me gusta tu sonrisa.','Siempre encuentro algo bonito en ella.'),
    scene(foto(8),'Me gusta verte siendo tú,','sin tener que cambiar para nadie.'),
    scene(foto(11),'Quiero conocerte cada día un poco más:','lo que te ilusiona y lo que te preocupa.'),
    scene(olas,'Quiero escucharte con calma,','aunque a veces no encuentre las palabras.'),
    scene(foto(1),'Que nunca nos falten motivos','para reír y pasar tiempo juntos.'),
    scene(foto(5),'No necesito una escena perfecta.','Me gusta compartir la vida contigo.'),
    scene(foto(10),'Entre todas las historias,','me alegra estar viviendo la nuestra.')]),
  film(2,'Mi guía, mi luz y mi paz',6,tracks[0],
   'Tres palabras para agradecer lo que Xhunashi significa en la vida de Axel. Una historia sobre la compañía que hace bien.',[
    scene(amb('luz'),'Hay personas que llegan','y hacen más ligero el camino.'),
    scene(foto(6),'Tú llegaste cuando más lo necesitaba.','Gracias por estar aquí.'),
    scene(atardecer,'Mi guía:','tu compañía me ayuda a mirar hacia adelante.'),
    scene(foto(2),'Quiero agradecerte los detalles,','también los que parecen pequeños.'),
    scene(foto(9),'Mi luz:','me haces encontrar razones para sonreír.'),
    scene(olas,'Mi paz:','a tu lado valoro los momentos tranquilos.'),
    scene(foto(7),'También quiero ser para ti','alguien que te escuche y te cuide.'),
    scene(foto(10),'Gracias por todo lo que significas para mí.','Te quiero mucho, Xhunashi.')]),
  film(3,'Todo lo que quiero contigo',3,tracks[1],
   'Los deseos de Axel para el próximo capítulo: tiempo juntos, apoyo para sus metas y más recuerdos por crear.',[
    scene(foto(10),'Todavía hay tantas cosas','que me gustaría compartir contigo.'),
    scene(atardecer,'Quiero regalarnos tiempo','para hablar sin mirar el reloj.'),
    scene(foto(3),'Quiero conocer tus metas,','escucharlas y animarte a seguirlas.'),
    scene(foto(8),'Y compartirte las mías,','para acompañarnos en el camino.'),
    scene(amb('mar'),'Sueño con más días sencillos,','de esos que terminan siendo inolvidables.'),
    scene(foto(1),'Quiero cuidar lo que tenemos','con paciencia, respeto y pequeños detalles.'),
    scene(foto(11),'Seguir tomando fotos,','seguir encontrando motivos para sonreír.'),
    scene(foto(10),'Y que el próximo capítulo','nos encuentre queriéndonos bonito.')])
 ];
 const episode=(titulo,descripcion,track,escenas)=>({titulo,descripcion,duracion:56,musica:track.src,cancion:track.titulo,escenas,interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Nuestro próximo capítulo',anio:2026,clasificacion:'TP',imagen:portada(7),musica:tracks[0].src,cancion:tracks[0].titulo,
  sinopsis:'Tres episodios sobre lo que quiero seguir compartiendo contigo: cuidarnos, acompañar nuestras metas y celebrar lo nuestro.',creditos:credits(tracks[0]),episodios:[
   episode('Cuidarnos bonito','Un deseo: escucharnos con paciencia y hacernos sentir acompañados.',tracks[1],[
    scene(foto(7),'Quiero que podamos hablar','de lo que sentimos, con confianza.'),
    scene(olas,'Escucharnos sin prisa.','Entender que cada día puede ser distinto.'),
    scene(foto(6),'Agradecer lo que hacemos el uno por el otro,','sin darlo por sentado.'),
    scene(foto(10),'Y cuidar esta paz','que tanto valoro contigo.')]),
   episode('Tus metas y las mías','Planes que empiezan con una conversación y se construyen paso a paso.',tracks[0],[
    scene(atardecer,'Me gustaría saber qué sueñas','y qué te emociona del futuro.'),
    scene(foto(2),'Quiero celebrar tus pasos,','también los que solo tú sabes cuánto costaron.'),
    scene(foto(9),'Que podamos animarnos mutuamente','y aprender en el camino.'),
    scene(foto(11),'Sin tener todo resuelto hoy.','Un paso a la vez, con cariño.')]),
   episode('Otro 8 de noviembre','Hoy celebro tu llegada a mi vida y todo lo que todavía podemos vivir.',tracks[1],[
    scene(foto(7),'8 de noviembre.','Una fecha para dedicarte estas palabras.'),
    scene(foto(3),'Gracias por este tiempo juntos,','por tu compañía y por tu luz.'),
    scene(amb('luz'),'Ojalá sigamos sumando recuerdos','que nos dé gusto volver a mirar.'),
    scene(foto(10),'Feliz aniversario, mi berrinchuda.','Te quiero mucho. — Axel')])
  ]};
 c.temporadas.push(...films,serie);
 c.extras=[
  {titulo:'El mensaje de Axel',img:foto(10),texto:historia},
  {titulo:'Nuestro aniversario',img:foto(7),texto:'8 de noviembre. Hoy celebro el tiempo que hemos compartido y lo bonito que es tenerte en mi vida.'},
  {titulo:'Tres palabras para ti',img:amb('luz'),texto:'Mi guía, mi luz y mi paz. Así describo lo que has sido para mí durante este tiempo.'},
  {titulo:'Lo que deseo para nosotros',img:foto(11),texto:'Seguir cuidándonos, apoyar nuestras metas y tener tiempo para crear nuevos recuerdos juntos.'}
 ];
 const carta=[
  'Xhunashi, mi berrinchuda:',
  'Gracias por este tiempo que hemos estado juntos. Gracias por llegar a mi vida cuando más lo necesitaba y por convertirte en una compañía tan especial para mí.',
  'Durante este tiempo has sido mi guía, mi luz y mi paz. Quiero que sepas cuánto valoro tu presencia y lo bonito que es poder compartir contigo lo que siento.',
  'Me gustaría seguir construyendo momentos contigo: escucharte, conocer tus sueños, apoyar tus metas y compartirte las mías. Que encontremos tiempo para nosotros y aprendamos a cuidarnos cada día con más paciencia y cariño.',
  'Hoy, 8 de noviembre, celebro nuestra historia. No hace falta que todo sea perfecto para agradecer lo que tenemos y tener ilusión por lo que viene.',
  'Te quiero mucho. Feliz aniversario, mi berrinchuda.',
  'Con cariño,\nAxel'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Una carta para mi berrinchuda',imagen:portada(10),sinopsis:'Cinco preguntas para seguir conociéndonos y una carta que guarda lo que significas para mí.',
  preguntas:['¿Cuál es tu recuerdo favorito de nuestro tiempo juntos?','¿Qué te hace sonreír de nuestra historia?','¿Cómo te gustaría que nos cuidáramos más?','¿Qué meta sueñas que podamos compartir o apoyar?','¿Qué te gustaría vivir conmigo en nuestro próximo capítulo?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con cariño de',A],['Nuestro aniversario','8 de noviembre'],['Lo que eres para mí','Mi guía, mi luz y mi paz'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Los próximos capítulos','Los que sigamos escribiendo juntos'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(10),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Mi berrinchuda, todavía quedan capítulos por vivir…',anuncio:'Continuará',subtitulo:'Gracias por llegar a mi vida.',sorpresa:'Te quiero mucho, Xhunashi. — Axel ♡'};
})();

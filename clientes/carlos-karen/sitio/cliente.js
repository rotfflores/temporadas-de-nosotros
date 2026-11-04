/* Edición independiente: Carlos para Karen, Nuestro capítulo ($79). */
(() => {
const c=window.TDN,A='Carlos',B='Karen';
const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`,amb=n=>`assets/ambiente/${n}.webp`;
const tracks=[['Favorito — Camilo','favorito'],['Es por ti — Juanes','es-por-ti'],['Algo más — La Quinta Estación','algo-mas'],['No me doy por vencido — Luis Fonsi','no-me-doy-por-vencido'],['Antes de ti — Mon Laferte','antes-de-ti']].map(([titulo,id])=>({titulo,src:`assets/audio/${id}-climax.mp3`}));
const historia='Fue esa vez que te vi desde el balcón; de ahí me empecé a emocionar por ti. Y cuando te di mi chamarra y platicamos, algo cambió. Ese primer beso y ese acercamiento fueron el inicio de una gran historia.';
Object.assign(c.pareja,{nombreA:A,nombreB:B,apodos:[B],apodo:B,fechaInicio:'',anioInicio:'',anios:0,fechaCodigo:'0803',aniversario:'8 de marzo',ciudad:'',primeraCita:'',cancion:'Favorito',artista:'Camilo',viajes:[],dificiles:[],anecdota:historia,culpableAnecdota:2,gustosB:[],suenos:['Seguir cuidando nuestro amor','Acompañarnos en nuestras metas','Celebrar muchos aniversarios más'],mensajeFinal:'Karen, desde aquella mirada hasta todo lo que viene: te volvería a elegir. Con amor, Carlos.'});
Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(13),perfilPareja:foto(16),t0:foto(7),t1:foto(16),t2:foto(19),t3:foto(20),t4:foto(4),t5:foto(14),t6:foto(15),t7:foto(1),final:foto(19),puzzle:foto(16),puzzle2:foto(7),postCreditos:foto(20)});
Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-karen.mp4',audioRemitente:''});
Object.assign(c.acceso,{demo:false,password:'a445b92ef7ba817efc27de361e28375a841dca08f5858e10838c52683b23ed9d',pistaPassword:'Nuestro aniversario: día y mes, con cuatro números.',estreno:''});
Object.assign(c.notificacion,{whatsapp:'529834732481',email:'',endpoint:''});
Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/carlos-karen/sitio/index.html?compartir=4',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, recuerdos y sueños compartidos',heroTag:'EXCLUSIVO PARA KAREN',heroTop:'Una historia de Carlos para Karen',sinopsis:'Una mirada desde el balcón. Una chamarra. Una conversación que lo cambió todo. Carlos y Karen protagonizan cuatro películas y una serie sobre el amor que nació de aquellos pequeños momentos.',generos:['Romance','Nuestra historia','Para siempre'],filaRecomendada:'Desde aquel balcón'});
const scene=(img,...texto)=>({img,poster:img,texto});
const episode=(titulo,descripcion,track,escenas,duracion=70)=>({titulo,descripcion,musica:track.src,cancion:track.titulo,duracion,escenas,interaccion:null,recompensa:''});
const film=(num,titulo,imagen,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:'',clasificacion:'TP',imagen,musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con amor de',A],['Nuestra fecha','8 de marzo'],['Banda sonora',track.titulo]],episodios:[episode(titulo,sinopsis,track,escenas)]});
const films=[
film(0,'Desde aquel balcón',foto(7),tracks[4],'Todo empezó con una mirada, una chamarra y esa conversación que acercó nuestros corazones.',[
scene(amb('balcon'),'Karen, fue aquella vez que te vi desde el balcón…','cuando empecé a emocionarme por ti.'),
scene(foto(12),'Todavía no sabía cómo sería nuestra historia.','Solo sabía que algo en ti me hacía querer acercarme.'),
scene(amb('luz'),'Después te di mi chamarra y nos pusimos a platicar.','Un gesto sencillo; un momento que lo cambió todo.'),
scene(foto(5),'Llegó ese primer beso, ese acercamiento…','y lo que sentíamos empezó a convertirse en nosotros.'),
scene(foto(15),'Ahí comenzó una gran historia.','Una que sigo agradeciendo vivir contigo.'),
scene(foto(16),'Si pudiera regresar a aquel balcón,','volvería a emocionarme por ti.')]),
film(1,'Mi lugar favorito',foto(1),tracks[0],'Hay personas que hacen más bonita la vida. Para Carlos, esa persona tiene nombre: Karen.',[
scene(foto(1),'Mi lugar favorito no tiene una dirección.','Tiene tu sonrisa, Karen.'),
scene(foto(2),'Me gusta compartir contigo las cosas sencillas.','Una comida, una plática, un ratito sin prisa.'),
scene(foto(10),'Me gusta verte disfrutar, reír, ser tú.','Y saber que puedo estar cerquita.'),
scene(foto(13),'A tu lado, cualquier día puede guardar un recuerdo bonito.'),
scene(foto(14),'No necesito que cada momento sea extraordinario.','Me basta con que podamos vivirlo juntos.'),
scene(foto(17),'Entre tantos lugares y tantos caminos,','yo sigo queriendo estar aquí, contigo.')]),
film(2,'Gracias por ser tú',foto(19),tracks[1],'Una carta en imágenes para agradecer tu compañía, tus detalles y todo lo que significa caminar a tu lado.',[
scene(amb('carta'),'Hay cosas que a veces siento tanto','que se me olvida decirlas en voz alta.'),
scene(foto(4),'Gracias por compartir tu tiempo conmigo.','Por dejarme ser parte de tu vida.'),
scene(foto(18),'Gracias por las conversaciones, los abrazos','y esos detalles que se quedan en el corazón.'),
scene(foto(6),'Cuando miro nuestros recuerdos,','entiendo lo valioso que es lo que compartimos.'),
scene(foto(3),'Quiero aprender a escucharte mejor,','a cuidarte con hechos y a celebrar lo que te hace feliz.'),
scene(foto(19),'Karen, gracias por ser tú.','Y por darle tanto sentido a esta historia.')]),
film(3,'Todo lo que nos espera',foto(20),tracks[3],'El futuro todavía tiene páginas en blanco. Quiero llenarlas de metas, paciencia y mucho amor contigo.',[
scene(amb('horizonte'),'Cuando pienso en el futuro,','me ilusiona imaginarte a mi lado.'),
scene(foto(8),'Quiero que sigamos encontrando tiempo para nosotros,','incluso entre las responsabilidades de cada día.'),
scene(foto(9),'Quiero acompañarte en tus metas,','escuchar tus ideas y aplaudir tus logros.'),
scene(foto(11),'Deseo que podamos cumplir sueños juntos,','sin dejar de cuidar los sueños de cada uno.'),
scene(foto(20),'Quiero construir contigo confianza, calma','y un amor que también se demuestre en lo cotidiano.'),
scene(foto(16),'Y cuando llegue otro 8 de marzo,','quiero tener más razones para decirte: te volvería a elegir.')])];
const serie={num:4,tipo:'serie',titulo:'Una gran historia',anio:'',clasificacion:'TP',imagen:foto(16),musica:tracks[2].src,cancion:tracks[2].titulo,sinopsis:'Tres capítulos para volver al inicio, abrazar nuestro presente y soñar con lo que viene. Nuestro aniversario: 8 de marzo.',creditos:[['Protagonistas','Carlos y Karen'],['Una fecha para nosotros','8 de marzo'],['Próximos capítulos','Por escribir juntos']],episodios:[
episode('La mirada que inició todo','El balcón, la chamarra y el beso con el que comenzó nuestra historia.',tracks[4],[
scene(amb('balcon'),'A veces una gran historia','empieza con una mirada que no se olvida.'),
scene(foto(12),'Te vi desde el balcón','y empecé a sentir esa emoción por ti.'),
scene(amb('luz'),'Te di mi chamarra. Platicamos.','Y entre palabras, algo cambió.'),
scene(foto(5),'Después llegó nuestro primer beso.','El comienzo de este nosotros.'),
scene(foto(7),'De todos los recuerdos de nuestra historia,','ese inicio siempre tendrá un lugar especial.')]),
episode('Algo más que recuerdos','Lo que significan los pequeños momentos cuando los vivimos juntos.',tracks[2],[
scene(foto(2),'Lo nuestro vive en los momentos','que a veces parecen pequeños.'),
scene(foto(2),'En las sonrisas que guardamos','y en las fotos que nos hacen volver a sentir.'),
scene(foto(7),'En el tiempo que compartimos','y en todo lo que aprendemos el uno del otro.'),
scene(foto(19),'Cada recuerdo me recuerda también algo:','quiero seguir cuidando este amor.'),
scene(foto(19),'Somos algo más que una colección de fotos.','Somos una historia que seguimos escribiendo.')]),
episode('Muchos 8 de marzo','Metas, amor y la ilusión de celebrar muchos aniversarios más.',tracks[0],[
scene(amb('horizonte'),'Todavía hay tantas cosas','que me gustaría vivir contigo.'),
scene(foto(16),'Quiero que podamos hablar de nuestros planes','con la confianza de sabernos un equipo.'),
scene(foto(20),'Quiero celebrar tus alegrías','y saber acompañarte cuando necesites apoyo.'),
scene(foto(20),'Sueño con muchos aniversarios más,','con nuevas fotos y nuevas razones para abrazarnos.'),
scene(foto(16),'Karen: mi deseo para nuestro próximo capítulo','es seguir eligiéndonos con amor. — Carlos')]) ]};
c.temporadas.push(...films,serie);
c.extras=[{titulo:'Así comenzó todo',img:amb('balcon'),texto:historia},{titulo:'Nuestra fecha',img:foto(19),texto:'8 de marzo. Una fecha para celebrar nuestra historia y todo lo que nos queda por vivir.'},{titulo:'Mi deseo',img:amb('horizonte'),texto:'Que sigamos creciendo juntos, cuidando lo nuestro y acompañándonos en cada meta.'},{titulo:'Para ti, Karen',img:foto(16),texto:'De aquella primera emoción a todo lo que viene: te volvería a elegir. — Carlos'}];
Object.assign(c.final,{titulo:'Karen, te volvería a elegir',imagen:foto(19),sinopsis:'Una carta de Carlos para ti y cinco preguntas para seguir escribiendo juntos su historia.',preguntas:['¿Qué recuerdas de aquella vez que empezamos a acercarnos?','¿Cuál de nuestros recuerdos te hace sonreír más?','¿Qué te gustaría que cuidáramos más de nuestro amor?','¿Qué meta te gustaría que cumpliéramos juntos?','¿Cómo te gustaría celebrar nuestro próximo 8 de marzo?'],carta:()=>`Karen:\n\nTodo comenzó aquella vez que te vi desde el balcón. Desde ahí me empecé a emocionar por ti. Después te di mi chamarra, platicamos y algo cambió. Ese primer beso y ese acercamiento fueron el inicio de una gran historia: la nuestra.\n\nHoy quiero darte las gracias por tu compañía, por los recuerdos que hemos construido y por esos momentos sencillos que contigo se vuelven especiales. A veces una foto basta para recordarme cuánto significa tenerte cerca.\n\nQuiero seguir aprendiendo a quererte de la manera que necesitas: escucharte, respetarte, cuidarte y demostrarte con mis acciones lo importante que eres para mí. Quiero que podamos hablar de lo que sentimos, acompañarnos en nuestras metas y disfrutar también del camino.\n\nMi deseo es que sigamos haciendo espacio para nosotros, para las conversaciones sin prisa, los abrazos y los sueños que todavía nos faltan por cumplir. Quiero celebrar tus logros y que construyamos juntos un futuro que nos haga ilusión a los dos.\n\nCada 8 de marzo será una oportunidad de mirar atrás con gratitud y hacia adelante con esperanza. Si aquella mirada fue el comienzo, quiero que el amor que cuidemos cada día sea lo que mantenga viva nuestra historia.\n\nTe volvería a elegir, Karen.\n\nCon todo mi amor,\nCarlos`});
c.creditos=[['Para','Karen'],['Con amor de','Carlos'],['Protagonistas','Carlos y Karen'],['Todo empezó con','Una mirada desde el balcón'],['Un detalle inolvidable','Aquella chamarra'],['Nuestra fecha','8 de marzo'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Próximo estreno','Todos los sueños que nos faltan por vivir'],['','Continuará ♡']];
c.postCreditos={imagen:foto(20),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Karen… todavía nos quedan muchos capítulos.',anuncio:'Continuará',subtitulo:'Por muchos 8 de marzo más, juntos.',sorpresa:'De aquel balcón a todo lo que viene. Con amor, Carlos ♡'};
})();

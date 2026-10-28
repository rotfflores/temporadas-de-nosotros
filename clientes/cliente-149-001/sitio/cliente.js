/* Historia personalizada de Juan Alberto y Dulce. Las escenas de continuidad son escritura creativa; las fechas y lugares provienen de sus audios. */
(() => {
  const c = window.TDN, media = window.CLIENT_MEDIA;
  const photos = n => media.fotos.filter(x => x.tanda === n).map(x => x.ruta);
  const videos = n => media.videos.filter(x => x.tanda === n).map(x => x.ruta);
  const p = [1,2,3,4].map(photos), v = [1,2,3,4].map(videos);
  const audio = media.audios.map(x => x.ruta);
  const A = "Juan Alberto", B = "Dulce";
  Object.assign(c.pareja, {
    nombreA:A, nombreB:B, apodos:["mi bubuncita"], apodo:"mi bubuncita",
    fechaInicio:"2026-04-18", anioInicio:2026, anios:0, fechaCodigo:"18042026",
    ciudad:"Ciudad de México", primeraCita:"La Marquesita", cancion:"Nuestra historia", artista:"Canciones que me compartiste",
    viajes:["Pachuca","Huasca de Ocampo","Prismas Basálticos"],
    dificiles:[], anecdota:"Los caminos nos llevaron al mismo lugar", gustosB:[], suenos:[],
    mensajeFinal:"Cada día contigo me confirma que aquel primer mensaje valió la pena. Me emociona seguir descubriendo lugares, reír contigo y escribir todo lo que aún nos falta vivir. Te amo."
  });
  Object.assign(c.fotos, {hero:p[3][0]||p[0][0], perfilB:"assets/cliente/dulce-perfil.jpg", perfilPareja:p[1][0], final:p[3][1]||p[3][0], postCreditos:p[3][2]||p[3][0], puzzle:p[2][0]});
  for(let i=0;i<8;i++) c.fotos[`t${i}`]=moviesPlaceholder(i);
  function moviesPlaceholder(i){const batch=Math.min(3,Math.floor(i/2));return p[batch][i%p[batch].length]||p[0][0];}
  c.media.intro="";
  c.media.temporadas=[audio[0],audio[1],audio[2],audio[3],audio[4],audio[1],audio[2],audio[3]];
  c.media.canciones=["Serenata para Dulce","Las locuras mías — Omar Chaparro","Chocolate — Jesse & Joy","Canción compartida III","Canción compartida IV","Las locuras mías — Omar Chaparro","Chocolate — Jesse & Joy","Canción compartida III"];
  c.media.musica="";
  c.media.videoFinal="";
  c.media.audioRemitente="";
  c.acceso.demo=false; c.acceso.password=""; c.acceso.pistaPassword=""; c.acceso.estreno="";
  c.notificacion.whatsapp="528122234198"; c.notificacion.email=""; c.notificacion.endpoint="";
  Object.assign(c.sitio, {
    url:"https://streaming-us.rotfstudio.com/clientes/cliente-149-001/sitio/index.html", heroTop:"Una historia que comenzó con un mensaje", heroTag:"EXCLUSIVO PARA DULCE",
    sinopsis:"De un comentario en TikTok a una historia juntos. Juan Alberto y Dulce: ocho películas, dos series y tres juegos con los recuerdos que han creado desde abril de 2026.",
    filaRecomendada:"Un mensaje en TikTok"
  });
  const stories = [
    {title:"Antes del primer mensaje", batch:1, lines:["Ella exploraba pueblos mágicos y guardaba sus recuerdos en fotografías.","Él, desde Monterrey, encontró una imagen que parecía una invitación a conocerla.","Todavía no se conocían, pero sus caminos ya se acercaban."]},
    {title:"Un comentario en TikTok", batch:1, lines:["Juan Alberto vio una foto de Dulce y preguntó dónde estaba aquel paisaje.","Pensó que ella también vivía en Monterrey.","La respuesta tardó casi dos semanas. La curiosidad, en cambio, no se fue."]},
    {title:"Dos semanas después", batch:1, lines:["Dulce respondió y habló de los pueblos mágicos que había visitado.","A partir de ese mensaje comenzaron a conversar todos los días.","Sin planearlo, la distancia se llenó de palabras."]},
    {title:"17 de abril", batch:1, lines:["Después de unos cinco meses de conversaciones, Juan Alberto viajó a Ciudad de México.","El 17 de abril de 2026 se vieron por primera vez.","Las fotos de esta tanda guardan aquel encuentro."]},
    {title:"El sí en La Marquesita", batch:2, lines:["Al día siguiente fueron a La Marquesita.","El 18 de abril de 2026 Dulce le dio el sí.","Ese paseo se convirtió en el primer capítulo oficial de su relación."]},
    {title:"La ruta de junio y julio", batch:3, lines:["Ya juntos, salieron a descubrir nuevos paisajes.","Pachuca y Huasca de Ocampo entraron en su historia.","Las fotos y videos de esta tanda muestran las vacaciones de junio y julio."]},
    {title:"Prismas Basálticos", batch:3, lines:["La ruta continuó entre los paisajes de los Prismas Basálticos.","Una nueva postal se sumó a la colección de lugares compartidos.","Lo mejor del viaje siempre fue vivirlo juntos."]},
    {title:"Seis meses, y seguimos", batch:4, lines:["Las últimas imágenes llegaron después de cumplir seis meses de noviazgo.","Ya iban camino al séptimo mes.","Esta historia apenas está tomando forma, y todavía quedan muchas escenas por vivir."]}
  ];
  [
    ["En aquella etapa cada uno llevaba su propio rumbo.","Las fotos de un viaje terminaron abriendo una puerta inesperada.","A veces una historia empieza antes de que sus protagonistas lo sepan."],
    ["La pregunta era sencilla: ¿dónde quedaba aquel lugar?","El mensaje quedó enviado y llegó la espera.","Dos semanas pueden parecer mucho cuando quieres conocer una respuesta."],
    ["Llegaron nombres de pueblos, historias de caminos y más preguntas.","La conversación ya no necesitó un pretexto para continuar.","De pronto, hablar todos los días se volvió parte de la rutina."],
    ["Hubo que convertir los mensajes en un viaje real.","Una ciudad nueva esperaba al otro lado de la pantalla.","Y al verse, aquello que habían contado durante meses empezó una etapa distinta."],
    ["Un paseo juntos llevó la historia a La Marquesita.","El 18 de abril dejó de ser una fecha cualquiera.","Desde entonces pudieron decir: este es nuestro comienzo."],
    ["Las vacaciones trajeron otros paisajes y otra manera de mirarlos.","Pachuca y Huasca quedaron en el mismo álbum.","Cada imagen conserva un instante que vale la pena volver a ver."],
    ["Los paisajes de los Prismas Basálticos se sumaron a la ruta.","Una foto puede guardar el lugar; el recuerdo guarda cómo se sintieron allí.","Aquel viaje merece su propio capítulo."],
    ["Seis meses después, seguían reuniendo fotos y videos.","El calendario marcaba el camino hacia un séptimo mes.","Cada recuerdo nuevo demuestra que la historia sigue viva."]
  ].forEach((extra,i)=>stories[i].lines.push(...extra));
  const imagesByBatch = [p[0],p[1],p[2],p[3]];
  const videosByBatch = [v[0],v[1],v[2],v[3]];
  let photoOffsets=[0,0,0,0], videoOffsets=[0,0,0,0];
  function scene(batch,text,i) {
    const index=batch-1, images=imagesByBatch[index], clips=videosByBatch[index];
    const img=images.length ? images[photoOffsets[index]++ % images.length] : "";
    const video=clips.length && i===1 ? clips[videoOffsets[index]++ % clips.length] : "";
    return {img, poster:img, video, texto:[text]};
  }
  const movies=stories.map((story,num)=>({
    num,tipo:"pelicula",titulo:story.title,anio:2026,clasificacion:"TP",
    imagen:imagesByBatch[story.batch-1][Math.min(num,imagesByBatch[story.batch-1].length-1)]||"",
    musica:audio[num % audio.length], cancion:c.media.canciones[num % c.media.canciones.length],
    top10:num===4, sinopsis:story.lines.join(" "),
    creditos:[["Protagonistas",`${A} y ${B}`],["Recuerdos",`Tanda ${story.batch}`]],
    episodios:[{titulo:story.title,duracion:3,descripcion:story.lines[0],escenas:story.lines.map((line,i)=>scene(story.batch,line,i)),interaccion:null,recompensa:""}]
  }));
  // Cada película reproduce una secuencia de recuerdos reales. Las tandas grandes
  // se reparten entre títulos para que las fotos y videos se vean dentro del relato.
  const portions=[
    {photos:p[0].slice(0,2),videos:[]},{photos:p[0].slice(2,4),videos:[]},
    {photos:p[0].slice(4,6),videos:[]},{photos:p[0].slice(6),videos:[]},
    {photos:p[1],videos:v[1]},
    {photos:p[2].slice(0,Math.ceil(p[2].length/2)),videos:v[2].slice(0,2)},
    {photos:p[2].slice(Math.ceil(p[2].length/2)),videos:v[2].slice(2)},
    {photos:p[3].slice(0,25),videos:v[3].slice(0,5)}
  ];
  function montage(lines,part) {
    const scenes=lines.map((text,i)=>({img:part.photos[i%part.photos.length]||"",texto:[text]}));
    part.photos.forEach((img,i)=>scenes.push({img,poster:img,texto:[i<lines.length?lines[i]:"Un momento de nuestra historia, guardado para volver a verlo."]}));
    part.videos.forEach((video,i)=>scenes.push({video,poster:part.photos[i%part.photos.length]||"",texto:["Así se veía nuestra historia desde dentro."]}));
    return scenes;
  }
  movies.forEach((movie,i)=>{
    const scenes=montage(stories[i].lines,portions[i]);
    movie.episodios[0].escenas=scenes;
    movie.episodios[0].duracion=Math.max(65,scenes.length*5+6);
    movie.imagen=portions[i].photos[0]||movie.imagen;
  });
  movies[0].titulo="Nuestro primer mensaje";
  movies[0].imagen="assets/cliente/primer-mensaje-poster.jpg";
  movies[0].musica="";
  movies[0].cancion="Audio original del video";
  movies[0].sinopsis="La primera película de Juan Alberto y Dulce, con el video que compartieron para abrir su historia.";
  Object.assign(movies[0].episodios[0],{
    titulo:"Nuestro primer mensaje",descripcion:"El video original con el que empieza esta historia.",
    duracion:59,escenas:[{video:"assets/cliente/primer-mensaje.mp4",poster:"assets/cliente/primer-mensaje-poster.jpg",texto:[""]}]
  });
  movies[1].episodios[0].interaccion={tipo:"quiz",titulo:"El primer mensaje",pregunta:"¿Dónde comenzó la conversación?",opciones:["TikTok","En un concierto","En la escuela"],correcta:0,ok:"Una foto abrió la conversación."};
  movies[4].episodios[0].interaccion={tipo:"codigo",titulo:"La fecha de nuestro sí",modo:"fecha",pregunta:"¿Qué día comenzó nuestra relación?",placeholder:"DDMMAAAA",respuestas:["18042026"],pista:"18 de abril de 2026",ok:"Ese día comenzó nuestra historia."};
  movies[6].episodios[0].interaccion={tipo:"ordenar",titulo:"La ruta de nuestra historia",eventos:["Un comentario en TikTok","Primer encuentro en Ciudad de México","El sí en La Marquesita","Vacaciones en Pachuca y Huasca","Seis meses de noviazgo"],ok:"Así se fue escribiendo nuestra historia."};
  const series=[
    {num:8,tipo:"serie",titulo:"Pequeños momentos",anio:2026,clasificacion:"TP",imagen:p[3][3]||p[3][0],musica:audio[3],cancion:c.media.canciones[3],sinopsis:"Dos episodios sobre la vida que se va construyendo entre fotos, videos y conversaciones.",creditos:[["Protagonistas",`${A} y ${B}`]],episodios:[
      {titulo:"Lo cotidiano también cuenta",duracion:3,descripcion:"Recuerdos pequeños que se vuelven enormes.",escenas:[scene(4,"Hay días que parecen normales hasta que vuelves a mirarlos en una foto.",0),scene(4,"Seis meses juntos ya dejaron una colección de instantes para recordar.",1)],interaccion:null,recompensa:""},
      {titulo:"Nuestro álbum",duracion:3,descripcion:"Una selección de recuerdos compartidos.",escenas:[scene(4,"Las imágenes cuentan cosas que las palabras no siempre alcanzan.",0),scene(4,"Cada una guarda una parte de este primer tramo juntos.",1)],interaccion:null,recompensa:""}]},
    {num:9,tipo:"serie",titulo:"Lo que viene",anio:2026,clasificacion:"TP",imagen:p[3][5]||p[3][0],musica:audio[4],cancion:c.media.canciones[4],sinopsis:"Dos episodios para mirar los próximos meses sin inventarles destino.",creditos:[["Protagonistas",`${A} y ${B}`]],episodios:[
      {titulo:"El siguiente capítulo",duracion:3,descripcion:"Después del sexto mes comienza otra etapa.",escenas:[scene(4,"El séptimo mes ya estaba en camino cuando enviaron estas imágenes.",0),scene(4,"Quedan lugares por conocer y días que todavía no tienen fotografía.",1)],interaccion:null,recompensa:""},
      {titulo:"Continuará",duracion:3,descripcion:"La historia sigue abierta.",escenas:[scene(4,"No hace falta adivinar lo que vendrá para querer vivirlo juntos.",0),scene(4,"Nuestra mejor escena puede ser la siguiente.",1)],interaccion:null,recompensa:""}]}
  ];
  const lastPhotos=p[3].slice(25), lastVideos=v[3].slice(5);
  series.flatMap(s=>s.episodios).forEach((ep,i)=>{
    const q=Math.ceil(lastPhotos.length/4), w=Math.ceil(lastVideos.length/4);
    const part={photos:lastPhotos.slice(i*q,(i+1)*q),videos:lastVideos.slice(i*w,(i+1)*w)};
    ep.escenas=montage([ep.descripcion,"Quedan momentos pequeños que merecen volver a verse."],part);
    ep.duracion=Math.max(65,ep.escenas.length*5+6);
  });
  c.temporadas.splice(0,c.temporadas.length,...movies,...series);
  c.extras=[
    {titulo:"La primera vez",img:p[0][0],texto:"Ciudad de México · 17 de abril de 2026"},
    {titulo:"La Marquesita",img:p[1][0],texto:"El sí · 18 de abril de 2026"},
    {titulo:"De viaje",img:p[2][0],texto:"Pachuca · Huasca de Ocampo · Prismas Basálticos"},
    {titulo:"Seis meses",img:p[3][0],texto:"Los recuerdos más recientes de nuestra historia"}
  ];
  c.final.titulo="Nuestra historia continúa";
  c.final.sinopsis="Ocho películas, dos series y tres juegos después, todavía queda mucho por vivir.";
  c.final.imagen=c.fotos.final;
  c.final.preguntas=["¿Qué recuerdo de estos seis meses guardarías para siempre?","¿Qué fue lo primero que pensaste cuando nos vimos en persona?","¿Qué lugar te gustaría visitar conmigo?","¿Qué canción te recuerda a nosotros?","¿Qué te gustaría decirme hoy?"];
  c.final.carta=()=>`Mi bubuncita hermosa:\n\nTodo empezó con una foto y un mensaje. Tardaste un poquito en responder, pero cuando lo hiciste comenzó una conversación que no he querido dejar. Desde Monterrey yo imaginaba paisajes; al final, el mejor destino eras tú.\n\nEl 17 de abril por fin te vi en Ciudad de México. Un día después, en La Marquesita, me dijiste que sí. A partir de entonces empezamos a contar el tiempo de otra manera: en pláticas, en fotos, en viajes y en cada momento que nos ha acercado.\n\nPachuca, Huasca y los Prismas Basálticos ya son parte de nuestro álbum. También lo son los días sencillos que quizá no salgan en ninguna foto, pero que yo quiero seguir viviendo contigo.\n\nGracias por estos primeros seis meses y por lo que viene. Eres mi sí en un mundo lleno de dudas. Te amo más de lo que alcanzan a decir estas palabras; quiero seguir demostrándotelo con la vida que construyamos juntos.\n\nCon todo mi amor,\nJuan Alberto`;
  c.creditos=[["Una historia para",B],["Con amor de",A],["Primer encuentro","17 de abril de 2026 · Ciudad de México"],["Nuestro sí","18 de abril de 2026 · La Marquesita"],["Viajes","Pachuca · Huasca de Ocampo · Prismas Basálticos"],["Continuará","En cada día que venga"]];
  c.postCreditos=null;
  document.addEventListener("DOMContentLoaded",()=>{
    if(document.body.dataset.page==="player") return;
    const link=document.createElement("a"); link.href="canciones.html"; link.textContent="♫ Canciones que me compartiste";
    Object.assign(link.style,{position:"fixed",right:"16px",bottom:"16px",zIndex:"1000",background:"#e50914",color:"white",padding:"10px 14px",borderRadius:"999px",fontWeight:"700",textDecoration:"none",boxShadow:"0 4px 20px #0009"});
    document.body.append(link);
    const album=link.cloneNode(); album.href="recuerdos.html"; album.textContent="▣ Nuestro álbum"; album.style.bottom="68px"; album.style.background="#303030";
    document.body.append(album);
  });
})();

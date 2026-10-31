/* Edición independiente: Yesica le dedica esta historia a Florencio. */
(() => {
  const c = window.TDN;
  const A = "Yesica", B = "Florencio";
  const f = n => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const a = n => `assets/audio/cancion-${String(n).padStart(2, "0")}.mp3`;
  const cine = "assets/ambiente/cine.webp", manos = "assets/ambiente/manos.webp", estrellas = "assets/ambiente/estrellas.webp";
  const corazonLuces = "assets/ambiente/corazon-luces.webp", corazonNeon = "assets/ambiente/corazon-neon.webp";
  const corazonCielo = "assets/ambiente/corazon-cielo.webp", rosas = "assets/ambiente/rosas.webp", carta = "assets/ambiente/carta.webp";
  const dedicatoria = "te amo milochomil ❤️ gracias por estos 5 años juntos";
  const canciones = [
    "Entra en mi vida — Sin Bandera", "Te amo — Franco De Vita",
    "A besitos — Los Diablitos", "Amorcito mío — Joan Sebastian",
    "Te quiero, te amo — Pesado", "Razón — Los Caligaris",
    "Gracias por tu amor — Pesado", "Mi nueva vida — Jhon Alex El Guajiro"
  ];
  Object.assign(c.pareja, {
    nombreA:A, nombreB:B, apodos:["Florencio"], apodo:"Florencio",
    fechaInicio:"2021-10-18", anioInicio:2021, anios:5, fechaCodigo:"18102021",
    ciudad:"", primeraCita:"el cine", cancion:"Entra en mi vida", artista:"Sin Bandera",
    viajes:[], dificiles:[], anecdota:"Nuestra primera cita fue en el cine, viendo una película de Halloween.",
    gustosB:[], suenos:["Seguir compartiendo momentos", "Cuidar este amor", "Escribir nuevos capítulos"],
    mensajeFinal:"Florencio, gracias por estos 5 años juntos. Eres lo mejor de mi historia. Te amo milochomil ❤️. Deseo seguir encontrándonos en los días sencillos, cuidarnos en los difíciles y celebrar todo lo que todavía nos espera. Con amor, Yesica."
  });
  Object.assign(c.fotos, {hero:f(1),perfilB:f(4),perfilPareja:f(7),final:f(8),postCreditos:estrellas,puzzle:f(3)});
  [f(1),cine,f(7),f(3),f(4),f(8),manos,estrellas].forEach((img,i)=>{ c.fotos[`t${i}`]=img; });
  c.media.intro="";
  c.media.temporadas=Array.from({length:8},(_,i)=>a(i+1));
  c.media.canciones=canciones;
  c.media.musica=""; c.media.videoFinal=""; c.media.audioRemitente="";
  Object.assign(c.acceso,{demo:false,password:"",pistaPassword:"",estreno:""});
  Object.assign(c.notificacion,{whatsapp:"",email:"",endpoint:""});
  Object.assign(c.sitio,{
    url:"https://streaming-us.rotfstudio.com/clientes/yesica-florencio/sitio/index.html", heroTop:"Una historia que empezó en el cine", heroTag:"PARA FLORENCIO",
    sinopsis:"El 18 de octubre de 2021, Yesica y Florencio fueron al cine a ver una película de Halloween. Aquella primera cita se volvió el comienzo de una historia que aún tiene mucho por contar: 8 películas, 2 series, 3 juegos y una carta hecha con amor.",
    filaRecomendada:"18 de octubre de 2021", generos:["Romance","Recuerdos","Nuestra historia"],
    clasificacion:"TP",clasificacionTexto:"Amor, recuerdos y nuevos capítulos"
  });
  const stories = [
    {title:"El día que comenzó todo",image:f(1),song:1,summary:"Una primera cita, una pantalla grande y una historia que apenas empezaba.",scenes:[
      [cine,"18 de octubre de 2021. Había una película por ver y una persona por conocer de otra manera."],
      [f(1),"Fuimos al cine a ver una película de Halloween. Hoy recuerdo sobre todo que estuvimos juntos."],
      [f(7),"Entre luces que se apagaban y una pantalla que se encendía, comenzó nuestro primer capítulo."],
      [corazonLuces,"No sabía cuántas escenas nos esperaban. Sí supe que quería conservar aquella noche."],
      [f(8),"Desde entonces, el 18 de octubre tiene un lugar especial en mi corazón."],
      [estrellas,"Al salir del cine, la película terminó. Lo nuestro siguió."],
      [f(1),"Florencio, me alegra que aquella primera cita haya sido contigo."]]},
    {title:"Lo que siento por ti",image:f(7),song:2,summary:"te amo milochomil ❤️ gracias por estos 5 años juntos. Una dedicatoria para Florencio.",scenes:[
      [corazonNeon,dedicatoria],
      [f(2),"Contigo he aprendido a guardar también los momentos pequeños."],
      [f(5),"Me gusta saber que puedo volver a estas imágenes y encontrarte en ellas."],
      [manos,"Mi cariño por ti vive en la cercanía, en la confianza y en las ganas de seguir."],
      [f(8),"Cuando pienso en nosotros, siento gratitud por el camino compartido."],
      [corazonNeon,dedicatoria]]},
    {title:"A besitos",image:f(3),song:3,summary:"Los gestos de cariño que hacen inolvidable una historia.",scenes:[
      [f(3),"Un beso puede guardar más de lo que cabe en una frase."],
      [f(2),"Hay recuerdos que no necesitan una fecha para seguir sintiéndose cerca."],
      [f(6),"Me gusta la ternura que aparece cuando estamos juntos."],
      [f(7),"Cada abrazo y cada beso escriben un pedacito de nosotros."],
      [corazonLuces,"Ojalá nunca nos falten las ganas de cuidarnos con esos detalles."],
      [f(3),"Esta escena es para volver a sentir lo bonito de querernos."]]},
    {title:"Amorcito mío",image:f(4),song:4,summary:"Una mirada a la persona que quiero y admiro.",scenes:[
      [f(4),"Florencio, esta película lleva tu nombre aunque su título diga otra cosa."],
      [f(1),"Me gusta mirarte y recordar que coincidimos en esta vida."],
      [f(7),"Las fotos cuentan una historia de cercanía, de confianza y de cariño."],
      [f(4),"Quiero seguir conociendo cada versión de ti que el tiempo nos regale."],
      [rosas,"Deseo que tus días tengan motivos para sonreír y un lugar donde sentirte querido."],
      [f(8),"Gracias por ser parte de mi historia, amorcito mío."]]},
    {title:"Te quiero, te amo",image:f(8),song:5,summary:"Una declaración sencilla, repetida de todas las formas posibles.",scenes:[
      [f(8),"Te quiero en los días que se convierten en recuerdos."],
      [f(5),"Te quiero también en los días corrientes que nadie fotografía."],
      [f(6),"Te amo por lo que hemos vivido y por la posibilidad de seguir creciendo."],
      [f(1),"No necesito una historia perfecta; deseo una historia sincera contigo."],
      [corazonCielo,"Que podamos elegirnos con paciencia, alegría y cuidado."],
      [f(7),"Florencio: te quiero, te amo y me alegra poder decírtelo."]]},
    {title:"Mi razón para sonreír",image:f(5),song:6,summary:"Los recuerdos que vuelven más luminoso cualquier día.",scenes:[
      [f(5),"A veces basta volver a una foto para que aparezca una sonrisa."],
      [f(6),"Están los instantes espontáneos, los gestos y las miradas que son solo nuestros."],
      [f(2),"Guardo con cariño incluso esos momentos que no salieron como una fotografía perfecta."],
      [f(3),"Porque lo valioso de cada imagen es que estuvimos ahí."],
      [corazonLuces,"Aquella primera cita fue el inicio de muchos recuerdos que todavía me acompañan."],
      [f(1),"Gracias por darme tantas razones para volver a sonreír."]]},
    {title:"Gracias por tu amor",image:f(2),song:7,summary:"Una pausa para agradecer lo compartido y lo aprendido juntos.",scenes:[
      [f(2),"Gracias por llegar a mi vida y hacer espacio para una historia en común."],
      [f(7),"Gracias por los momentos cercanos, por las conversaciones y por tu cariño."],
      [f(8),"Agradezco también lo que hemos aprendido mientras avanzamos."],
      [carta,"Deseo que podamos seguir cuidando este vínculo con hechos pequeños cada día."],
      [f(5),"No doy por sentado el regalo de compartir tiempo contigo."],
      [corazonNeon,"Gracias por estos 5 años juntos, Florencio ❤️"],
      [f(1),"Eres lo mejor de mi historia."]]},
    {title:"La vida que imagino contigo",image:estrellas,song:8,summary:"Esperanzas y deseos para los capítulos que aún no conocemos.",scenes:[
      [estrellas,"No sé exactamente cómo serán los próximos capítulos, y eso también me emociona."],
      [manos,"Espero que sigamos encontrando tiempo para mirarnos, escucharnos y acompañarnos."],
      [f(4),"Deseo verte cumplir tus sueños y estar cerca para celebrarlos contigo."],
      [f(8),"Quiero que hagamos más recuerdos, de esos que un día volveremos a mirar sonriendo."],
      [corazonCielo,"Del cine de aquella primera cita a todo lo que todavía podemos vivir."],
      [f(7),"Si escribimos el futuro juntos, quiero hacerlo con amor, esperanza y gratitud."]]}
  ];
  const makeScene=([img,texto])=>({img,poster:img,texto:[texto]});
  const movies=stories.map((s,i)=>({num:i,tipo:"pelicula",titulo:s.title,anio:i===0?2021:2026,clasificacion:"TP",imagen:s.image,
    musica:a(s.song),cancion:canciones[s.song-1],top10:i===0,sinopsis:s.summary,
    creditos:[["Para",B],["Con amor de",A],["Nuestra primera cita","18 de octubre de 2021"]],
    episodios:[{titulo:s.title,duracion:70,descripcion:s.summary,escenas:s.scenes.map(makeScene),interaccion:null,recompensa:""}]}));
  movies[0].episodios[0].interaccion={tipo:"quiz",titulo:"Nuestra primera cita",pregunta:"¿A dónde fuimos el 18 de octubre de 2021?",opciones:["Al cine","A un concierto","A un restaurante"],correcta:0,ok:"Aquella noche fuimos al cine."};
  movies[4].episodios[0].interaccion={tipo:"codigo",titulo:"Nuestra fecha",modo:"fecha",pregunta:"¿Cuándo fue nuestra primera cita?",placeholder:"DDMMAAAA",respuestas:["18102021"],pista:"Fue en octubre de 2021.",ok:"El 18 de octubre de 2021 comenzó este recuerdo."};
  movies[7].episodios[0].interaccion={tipo:"ordenar",titulo:"Nuestros capítulos",eventos:["Nuestra primera cita en el cine","Los recuerdos que fuimos guardando","Las palabras que hoy quiero decirte","Los sueños que vienen"],ok:"Nuestra historia sigue escribiéndose."};
  const series=[
    {num:8,tipo:"serie",titulo:"Nuestro álbum",anio:2026,clasificacion:"TP",imagen:f(7),musica:a(3),cancion:canciones[2],sinopsis:"Dos episodios para mirar de nuevo nuestras fotos y lo que guardan.",creditos:[["Protagonistas",`${A} y ${B}`]],episodios:[
      {titulo:"Cerca de ti",duracion:70,descripcion:"Las imágenes que me recuerdan tu cercanía.",escenas:[[f(1),"Una foto conserva un instante; yo guardo cómo se sintió estar a tu lado."],[f(2),"Los gestos sencillos hablan de cariño."],[f(5),"Me gusta volver a estos recuerdos contigo."],[f(6),"En cada imagen encuentro un pedacito de nosotros."],[manos,"Espero que sigamos dándonos tiempo para estar cerca."],[f(7),"Gracias por compartir conmigo estos momentos."]].map(makeScene),interaccion:null,recompensa:""},
      {titulo:"Para volver a mirar",duracion:70,descripcion:"Nuestro pequeño archivo de momentos.",escenas:[[f(3),"Esta imagen guarda un gesto que quiero recordar."],[f(8),"Aquí estamos, construyendo una historia propia."],[f(4),"También me gusta verte brillar en tus propios momentos."],[f(1),"Cada foto tiene una historia alrededor que solo nosotros conocemos."],[estrellas,"Quedan espacios en el álbum para las escenas que todavía vienen."],[f(7),"Y ojalá siempre nos den ganas de volver a mirarlas." ]].map(makeScene),interaccion:null,recompensa:""}]},
    {num:9,tipo:"serie",titulo:"Lo que viene",anio:2026,clasificacion:"TP",imagen:manos,musica:a(8),cancion:canciones[7],sinopsis:"Dos episodios sobre lo que deseo, espero y agradezco de nuestra historia.",creditos:[["Para",B],["De",A]],episodios:[
      {titulo:"Mis deseos para ti",duracion:70,descripcion:"Que la vida te dé motivos para ser feliz.",escenas:[[f(4),"Deseo que puedas perseguir lo que te ilusiona."],[estrellas,"Que los días difíciles encuentren alivio y compañía."],[f(7),"Que nunca te falten personas que celebren quién eres."],[manos,"Yo quiero escucharte, acompañarte y seguir aprendiendo a quererte bien."],[f(8),"Ojalá construyamos juntos recuerdos llenos de alegría."],[f(1),"Te deseo un futuro hermoso, Florencio."]].map(makeScene),interaccion:null,recompensa:""},
      {titulo:"Continuará",duracion:70,descripcion:"Una historia que sigue abierta.",escenas:[[cine,"Todo empezó aquella noche de octubre en el cine."],[f(1),"Desde entonces hemos sumado días, fotos y palabras."],[f(7),"No sé qué escenas nos esperan, pero me gusta imaginarte en ellas."],[manos,"Quiero que podamos cuidarnos y elegirnos con sinceridad."],[estrellas,"Tengo esperanza en todo lo bueno que todavía podemos construir."],[f(8),"Con amor, Yesica. Continuará…"]].map(makeScene),interaccion:null,recompensa:""}]}
  ];
  series[0].episodios[0].escenas[4]=makeScene([corazonLuces,"Los detalles también hacen grande una historia de amor."]);
  series[0].episodios[1].escenas[4]=makeScene([rosas,"Quedan espacios en el álbum para las escenas que todavía vienen."]);
  series[1].episodios[0].escenas[1]=makeScene([corazonCielo,"Que los días difíciles encuentren alivio y compañía."]);
  series[1].episodios[1].escenas[4]=makeScene([carta,"Tengo esperanza en todo lo bueno que todavía podemos construir."]);
  c.temporadas.splice(0,c.temporadas.length,...movies,...series);
  c.extras=[
    {titulo:"Nuestra primera cita",img:cine,texto:"18 de octubre de 2021 · Una película de Halloween"},
    {titulo:"Nuestras fotos",img:f(7),texto:"Momentos que quiero volver a mirar"},
    {titulo:"Gracias",img:manos,texto:"Por todo lo compartido"},
    {titulo:"5 años juntos",img:corazonNeon,texto:"Te amo milochomil ❤️"},
    {titulo:"Eres lo mejor",img:rosas,texto:"De mi historia"},
    {titulo:"Lo que viene",img:estrellas,texto:"Más capítulos juntos"}
  ];
  Object.assign(c.final,{
    titulo:"Una carta para Florencio",sinopsis:"Después de ocho películas y dos series, aún quedan palabras por decir.",imagen:f(8),
    preguntas:["¿Qué recuerdas de nuestra primera cita en el cine?","¿Cuál de nuestras fotos te hace sonreír más?","¿Qué momento te gustaría volver a vivir?","¿Qué sueño te gustaría compartir conmigo?","¿Qué quisieras decirme hoy?"],
    carta:()=>`Florencio:\n\nEl 18 de octubre de 2021 fuimos al cine a ver una película de Halloween. La pantalla contó una historia aquella noche; yo, sin saberlo, estaba empezando otra contigo. Desde entonces, ese recuerdo tiene un lugar especial para mí.\n\nAl mirar nuestras fotos pienso en la cercanía, en las sonrisas, en los besos y en todos esos instantes sencillos que juntos se vuelven enormes. Me hace feliz poder volver a ellos y recordar que forman parte de nosotros.\n\nGracias por estos 5 años juntos, por tu amor y por todo lo que hemos aprendido en el camino. Eres lo mejor de mi historia. Deseo que podamos seguir escuchándonos, cuidándonos y encontrando razones para sonreír. Quiero verte alcanzar tus sueños y seguir creando recuerdos a tu lado.\n\nNo sé exactamente qué traerán los próximos capítulos, pero tengo esperanza en lo que podemos construir juntos. Te amo milochomil ❤️ y me alegra que nuestra historia comenzara aquel día.\n\nCon todo mi amor,\nYesica`
  });
  c.creditos=[["Una historia para",B],["Con amor de",A],["Primera cita","18 de octubre de 2021 · El cine"],["Momentos","Los que guardamos y los que vendrán"],["Continuará","En cada nuevo capítulo"]];
  c.postCreditos=null;
  document.addEventListener("DOMContentLoaded",()=>{
    if(!document.body.dataset.page || ["player","splash","password","profiles"].includes(document.body.dataset.page)) return;
    const addLink=(href,label,bottom,color)=>{const link=document.createElement("a");link.href=href;link.textContent=label;
      Object.assign(link.style,{position:"fixed",right:"16px",bottom,zIndex:"1000",background:color,color:"white",padding:"9px 14px",borderRadius:"999px",fontWeight:"700",textDecoration:"none",boxShadow:"0 4px 20px #0009"});document.body.append(link);};
    addLink("canciones.html","♫ Nuestras canciones","16px","#e50914");
    addLink("recuerdos.html","▣ Nuestro álbum","62px","#303030");
  });
})();

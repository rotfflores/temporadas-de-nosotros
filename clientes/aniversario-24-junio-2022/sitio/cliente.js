/* Edición independiente para Maribel y Silvino. */
(() => {
  const c = window.TDN;
  const photo = n => `assets/cliente/fotos/foto-${String(n).padStart(2,'0')}.jpeg`;
  const video = n => `assets/cliente/video/video-${String(n).padStart(2,'0')}.mp4`;
  const aud = n => `assets/cliente/audio/climax-${String(n).padStart(2,'0')}.mp3`;
  const names = ['A la antigüita — Calibre 50','Amor sincero — Grupo Bryndis','Aquí hay para llevar — La Arrolladora Banda El Limón','A mí me gustas tú — Los Rojos, Duelo y Oscar Iván Treviño','Loco por ti — Los Temerarios','Las locuras mías — Omar Chaparro','Mi promesa — Pesado','La alegría de mi vida — Río Roma','Mi persona favorita — Río Roma','Tu poeta — Alex Campos'];
  Object.assign(c.pareja, {
    nombreA:'Maribel',nombreB:'Silvino',apodos:['Mi amor'],apodo:'Mi amor',
    fechaInicio:'2022-06-24',anioInicio:2022,fechaCodigo:'24062022',
    ciudad:'',primeraCita:'',cancion:'Nuestras canciones',artista:'Nuestra selección',
    viajes:[],dificiles:['Peleas y discusiones que supimos atravesar'],anecdota:'Sin buscarnos, nos encontramos',
    gustosB:[],suenos:['Seguir eligiéndonos','Cuidar lo que hemos construido','Crear nuevos recuerdos'],
    mensajeFinal:'Gracias por seguir aquí, por los momentos felices y por la voluntad de volver a encontrarnos incluso después de los días difíciles.'
  });
  Object.assign(c.fotos,{hero:photo(16),perfilB:photo(41),perfilPareja:photo(8),final:photo(57),puzzle:photo(28),postCreditos:photo(61)});
  [1,8,16,21,28,36,43,57].forEach((n,i)=>c.fotos[`t${i}`]=photo(n));
  Object.assign(c.media,{intro:'',temporadas:Array.from({length:8},(_,i)=>aud(i+1)),canciones:names.slice(0,8),musica:'',videoFinal:'',audioRemitente:''});
  Object.assign(c.acceso,{demo:false,password:'',pistaPassword:'',estreno:''});
  Object.assign(c.notificacion,{whatsapp:'',email:'',endpoint:''});
  Object.assign(c.sitio,{url:'https://streaming-us.rotfstudio.com/clientes/aniversario-24-junio-2022/sitio/index.html',heroTop:'Desde aquel viernes 24',heroTag:'UNA HISTORIA PARA SILVINO',
    sinopsis:'Maribel y Silvino: una historia que comenzó sin buscarse el 24 de junio de 2022. Ocho películas, dos series y recuerdos que siguen creciendo.',
    filaRecomendada:'Nuestro 24 de junio'});

  const specs = [
    {title:'Sin buscarnos, nos encontramos',from:1,to:6,
     lines:['Historia breve: sin buscarnos nos encontramos ese viernes 24 fue totalmente diferente a los demás días muchos momentos felices al igual que peleas discusiones ganas de dejar todo y al final aquí seguimos juntos','24 de junio de 2022. Una fecha que cambió la manera de contar nuestra historia.','Desde entonces, cada día ha sido una página que escribimos entre los dos.','Hubo risas que quisiéramos repetir y conversaciones que nos hicieron crecer.','Después de todo lo vivido, aquí seguimos: juntos.','Y eso hace que aquella casualidad siga teniendo sentido.']},
    {title:'Los días que elegimos',from:7,to:12,
     lines:['El cariño también vive en las cosas sencillas.','En una mirada compartida, en una comida juntos, en salir sin prisa.','Cada fotografía guarda algo que quizá en su momento parecía pequeño.','Hoy sabemos que esos instantes construyeron nuestra historia.','Gracias por estar presente en mis días.','Quiero seguir encontrando motivos para sonreír contigo.']},
    {title:'Así se siente el amor',from:13,to:19,
     lines:['Hay días llenos de luz que se quedan en la memoria.','Y hay gestos que dicen más que cualquier discurso.','Tus abrazos se han vuelto parte de mi lugar favorito.','Contigo he aprendido a valorar el tiempo compartido.','No necesito que todo sea perfecto para saber lo mucho que significas.','Me basta con mirarte y recordar por qué vale la pena.','Lo que siento por ti sigue creciendo en cada capítulo.']},
    {title:'Nuestros caminos',from:20,to:26,
     lines:['Fuimos juntando paseos, conversaciones y recuerdos.','Cada salida nos dio otra historia que contar.','A veces el mejor plan fue simplemente estar uno al lado del otro.','En las fotos queda el paisaje; en nosotros queda lo que sentimos.','Me ilusiona seguir descubriendo lugares contigo.','También quiero volver a los sitios donde fuimos felices.','Que nunca nos falten ganas de caminar juntos.']},
    {title:'Aun en los días difíciles',from:27,to:32,
     lines:['No todos los capítulos fueron sencillos.','También hubo peleas, discusiones y momentos en que pensamos dejarlo todo.','Aprendimos que escuchar, hablar y volver a intentarlo importa.','No borraría lo que nos enseñó a conocernos mejor.','Gracias por seguir aquí cuando el camino se puso difícil.','Sigamos cuidando este amor con paciencia y honestidad.']},
    {title:'Las pequeñas locuras',from:33,to:39,
     lines:['Quiero guardar también nuestras risas espontáneas.','Los planes improvisados tienen un lugar especial en mi memoria.','En cada momento compartido apareció una versión nueva de nosotros.','Hasta los días comunes pueden convertirse en una aventura.','Me encanta la alegría que traes a mi vida.','Gracias por acompañarme a vivirla con el corazón abierto.','Que sigan las historias que después recordaremos sonriendo.']},
    {title:'Mi promesa',from:40,to:46,
     lines:['No puedo prometer que nunca vendrán días difíciles.','Sí quiero prometerte que seguiré buscando la manera de escucharte.','Quiero celebrar contigo lo bueno y sostenerte en lo complicado.','Que nuestras metas tengan espacio para los sueños de ambos.','Que cada paso nos acerque a una vida que nos haga bien.','Te agradezco la confianza que hemos construido.','Hoy elijo cuidar de lo nuestro.']},
    {title:'Lo que aún nos espera',from:47,to:53,
     lines:['Quedan fotos que todavía no hemos tomado.','Lugares por conocer y tardes sencillas por disfrutar.','Quiero seguir haciendo planes contigo, grandes y pequeños.','Seguir aprendiendo a querernos mejor con el paso del tiempo.','Gracias por los recuerdos que ya compartimos.','Gracias también por la esperanza de todo lo que viene.','Mientras sigamos eligiéndonos, la historia continúa.']}
  ];
  function scenes(spec,withVideo) {
    const out=[];
    for(let n=spec.from;n<=spec.to;n++) out.push({img:photo(n),poster:photo(n),texto:[spec.lines[n-spec.from]]});
    if(withVideo) out.splice(Math.min(3,out.length),0,{video:withVideo,poster:photo(spec.from+2),texto:['Un instante en movimiento de nuestra historia.']});
    return out;
  }
  const movies=specs.map((s,i)=>({num:i,tipo:'pelicula',titulo:s.title,anio:i===0?2022:2026,clasificacion:'TP',imagen:photo(s.from),
    musica:aud(i+1),cancion:names[i],top10:i===0,sinopsis:s.lines.slice(0,3).join(' '),
    creditos:[['Protagonistas','Maribel y Silvino'],['Aniversario','24 de junio de 2022']],
    episodios:[{titulo:s.title,duracion:i===0?130:155,descripcion:s.lines[0],escenas:scenes(s,[null,null,'assets/cliente/video/video-01-extracto.mp4',null,'assets/cliente/video/video-02-extracto.mp4',null,null,'assets/cliente/video/video-03-extracto.mp4'][i]),interaccion:null,recompensa:''}]}));
  movies[0].episodios[0].interaccion={tipo:'quiz',pregunta:'¿Qué fecha comenzó nuestra historia?',opciones:['24 de junio de 2022','24 de julio de 2022','24 de junio de 2023'],correcta:0,ok:'Ese viernes 24 fue distinto a todos los demás.'};
  movies[3].episodios[0].interaccion={tipo:'memory',titulo:'Nuestro álbum',pares:[photo(4),photo(8),photo(16),photo(21),photo(28),photo(36)],ok:'Cada recuerdo nos trajo hasta aquí.'};
  movies[6].episodios[0].interaccion={tipo:'puzzle',titulo:'Arma nuestro recuerdo',imagen:photo(28),ok:'Juntos, pieza por pieza.'};

  const series=[
    {num:8,tipo:'serie',titulo:'Gracias por estar',anio:2026,clasificacion:'TP',imagen:photo(54),musica:aud(9),cancion:names[8],
     sinopsis:'Dos episodios para agradecer la compañía, la ternura y la vida que compartimos.',creditos:[['Protagonistas','Maribel y Silvino']],episodios:[
       {titulo:'Lo que agradezco de ti',duracion:90,descripcion:'Gracias por cada instante compartido.',escenas:[54,55].map((n,i)=>({img:photo(n),texto:[[ 'Gracias por hacer espacio para mí en tu vida.','Gracias por quedarte y por ayudarme a crecer.' ][i]]})),interaccion:null,recompensa:''},
       {titulo:'Lo que aprendimos',duracion:90,descripcion:'Amar también es aprender.',escenas:[56,57].map((n,i)=>({img:photo(n),texto:[[ 'Aprendimos a vivir momentos hermosos y a atravesar los difíciles.','Me alegra que sigamos escribiendo esta historia.' ][i]]})),interaccion:null,recompensa:''}]},
    {num:9,tipo:'serie',titulo:'Nuestra próxima temporada',anio:2026,clasificacion:'TP',imagen:photo(58),musica:aud(10),cancion:names[9],
     sinopsis:'Dos episodios para mirar adelante con cariño, metas y ganas de seguir juntos.',creditos:[['Protagonistas','Maribel y Silvino']],episodios:[
       {titulo:'Metas para dos',duracion:90,descripcion:'Un futuro que queremos construir.',escenas:[58,59].map((n,i)=>({img:photo(n),texto:[[ 'Quiero que sigamos compartiendo sueños sin dejar de ser nosotros mismos.','Que cada meta nos encuentre apoyándonos mutuamente.' ][i]]})),interaccion:null,recompensa:''},
       {titulo:'Continuará',duracion:90,descripcion:'Todavía queda mucho por vivir.',escenas:[60,61,62].map((n,i)=>({img:photo(n),texto:[[ 'Después de cada dificultad, hay una nueva oportunidad de elegirnos.','Quiero vivir contigo los capítulos que aún no conocemos.','Gracias por estar aquí. Feliz aniversario, Silvino.' ][i]]})),interaccion:null,recompensa:''}]}
  ];
  c.temporadas.splice(0,c.temporadas.length,...movies,...series);
  c.extras=[
    {titulo:'Nuestro 24 de junio',img:photo(1),texto:'El comienzo · 24 de junio de 2022'},
    {titulo:'Momentos juntos',img:photo(25),texto:'Instantes pequeños, recuerdos enormes'},
    {titulo:'Lo que sigue',img:photo(57),texto:'Metas, gratitud y nuevos capítulos'}
  ];
  Object.assign(c.final,{titulo:'Nuestra historia continúa',sinopsis:'Después de ocho películas y dos series, queda lo más importante: seguir eligiéndonos.',imagen:photo(57),
    preguntas:['¿Cuál de nuestros recuerdos te hace sonreír más?','¿Qué es lo que más agradeces de estos años juntos?','¿Qué sueño te gustaría cumplir conmigo?','¿Qué momento quisieras volver a vivir?','¿Qué deseas para nuestra próxima temporada?'],
    carta:()=>`Silvino:\n\nSin buscarnos nos encontramos aquel viernes 24 de junio de 2022. Desde entonces hemos reunido muchos momentos felices. También hemos tenido peleas, discusiones y ganas de dejarlo todo. Al final, aquí seguimos juntos.\n\nTe agradezco las risas, los abrazos, los paseos y los días comunes que a tu lado se volvieron especiales. Te agradezco también el esfuerzo de volver a hablarnos y de seguir construyendo lo nuestro.\n\nDeseo que sigamos creciendo, cuidándonos y cumpliendo metas juntos. Quiero descubrir lugares contigo, celebrar las alegrías y acompañarte cuando la vida se ponga difícil.\n\nFeliz aniversario. Ojalá sigamos escribiendo muchos capítulos más.\n\nCon amor,\nMaribel`});
  c.creditos=[['Una historia para','Silvino'],['Con amor de','Maribel'],['Nuestra fecha','24 de junio de 2022'],['Protagonistas','Los dos'],['Banda sonora','Diez canciones elegidas para esta historia'],['Agradecimiento','Por seguir aquí, juntos'],['','Continuará…']];
  c.postCreditos=null;
  document.addEventListener('DOMContentLoaded',()=>{
    if(['player','splash'].includes(document.body.dataset.page)) return;
    const wrap=document.createElement('nav');
    wrap.setAttribute('aria-label','Álbum y canciones');
    Object.assign(wrap.style,{position:'fixed',right:'14px',bottom:'14px',zIndex:'1000',display:'grid',gap:'8px'});
    [['▣ Nuestro álbum','recuerdos.html'],['♫ Nuestras canciones','canciones.html']].forEach(([label,url])=>{
      const a=document.createElement('a');a.href=url;a.textContent=label;
      Object.assign(a.style,{background:'#252525',color:'#fff',textDecoration:'none',padding:'9px 13px',borderRadius:'999px',font:'bold 13px Arial,sans-serif',boxShadow:'0 4px 14px #0009'});
      wrap.append(a);
    });
    document.body.append(wrap);
  });
})();

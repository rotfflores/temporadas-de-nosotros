/* Versión independiente: Viridiana → Cristopher. Material y textos de esta pareja. */
window.TDN = (() => {
  const P = {
    nombreA: 'Viridiana', nombreB: 'Cristopher', apodos: ['Cristopher'], apodo: 'Cristopher',
    fechaInicio: '2024-11-11', fechaCodigo: '11112024', anioInicio: 2024,
    anios: 2, aniosManual: 2, aniversario: '2026-11-11', boda: 'Marzo',
    ciudad: 'La secundaria', primeraCita: 'Nuestro reencuentro',
    cancion: 'Nuestra canción principal', artista: '',
    viajes: [], dificiles: ['La distancia', 'Vernos solamente por una pantalla'],
    anecdota: 'La vida nos dio otra oportunidad de estar juntos', culpableAnecdota: 2,
    gustosB: [], suenos: ['Casarnos en marzo', 'Compartir la vida', 'Seguir eligiéndonos'],
    mensajeFinal: 'Gracias por volver a mi vida y por elegirme con toda mi historia. Gracias por querer compartir tu vida conmigo y con mis tres hijas. Durante mucho tiempo solo pude verte a través de una pantalla; hoy puedo abrazarte y soñar contigo con nuestra boda. Hace un mes me pediste matrimonio y te dije que sí. Hoy quiero regalarte yo una promesa: seguir eligiéndote, cuidarnos y construir juntos lo que viene. Te amo, Cristopher. Este anillo es para ti.'
  };
  const photo = n => `assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
  const video = n => window.CLIENT_MEDIA.videos[n-1];
  const songs = window.CLIENT_MEDIA.audios.map(x => x.ruta);
  const songNames = songs.map((_,i) => i === 6 ? 'Nuestra canción principal' : `Nuestra banda sonora · ${String(i+1).padStart(2,'0')}`);
  const F = {
    hero: photo(26), perfilB: 'assets/fotos/perfil-cristopher.webp',
    perfilPareja: 'assets/fotos/perfil-pareja.webp',
    t0: photo(25), t1: photo(8), t2: video(1).poster, t3: photo(3),
    t4: photo(36), t5: photo(23), t6: photo(30), t7: photo(12),
    final: photo(13), puzzle: 'assets/fotos/puzzle.webp', puzzle2: 'assets/fotos/puzzle-2.webp',
    postCreditos: photo(15), anillo: 'assets/fotos/anillo-referencia.jpg'
  };
  const M = {
    intro: 'assets/audio/intro.mp3', temporadas: songs, canciones: songNames,
    musica: songs[6], cancionPrincipal: songs[6], inicioCancionPrincipal: 71, videoPrincipal: video(10).ruta,
    posterPrincipal: video(10).poster, videoFinal: video(11).ruta,
    audioRemitente: ''
  };
  const acceso = { demo: false, password: '', pistaPassword: '', estreno: '' };
  const notificacion = { whatsapp: '525652019625', email: '', endpoint: '' };
  const sitio = {
    url: '', coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Una historia de amor real',
    heroTag: '11 DE NOVIEMBRE · 2 AÑOS', heroTop: 'De Viridiana, para Cristopher',
    titulo: 'La vida nos volvió a elegir',
    sinopsis: 'Fuimos novios en la secundaria. La vida nos llevó por caminos distintos, pero nuestra historia todavía tenía mucho por contar. Después de la distancia, hoy estás aquí. Dos años de nosotros y toda una vida por escribir.',
    generos: ['Romance', 'Reencuentros', 'Basada en nuestra historia'],
    filaRecomendada: 'Amarnos a distancia'
  };
  const S = (n,...texto) => ({ img: photo(n), texto });
  const V = (n,...texto) => ({ img: video(n).ruta, poster: video(n).poster, texto });
  const cred = () => [['De','Viridiana'],['Para','Cristopher'],['Guion','Nuestra historia'],['Próximo capítulo','Nuestra boda en marzo']];
  const film = (num,titulo,imagen,sinopsis,escenas,options={}) => ({
    num,titulo,imagen,sinopsis,tipo:'pelicula',anio:2026,clasificacion:'TP',top10:true,
    musica:songs[num%8],cancion:songNames[num%8],creditos:cred(),
    episodios:[{titulo,descripcion:sinopsis,duracion:options.duracion || 66,escenas,...options}]
  });
  const temporadas = [
    film(0,'El destino nos volvió a encontrar',F.t0,
      'El video principal de nuestra historia. Fuimos novios en la secundaria; la vida nos separó, pero volvimos a elegirnos.',
      [V(10,'Cristopher, esta historia es para ti.','Fuimos novios en la secundaria.','Después, la vida nos llevó por caminos distintos.','Por azares del destino, volvimos a encontrarnos.','Hoy quiero celebrar que estamos juntos otra vez.')],
      {duracion:97,audioVideo:'musica'}),
    film(1,'De la pantalla a tus brazos',F.t2,
      'Quince años en Estados Unidos, muchas llamadas y dos caminos que se encontraron de nuevo. Tú regresaste; yo dejé Tequisquiapan para comenzar nuestros planes en Ciudad de México.',
      [S(8,'Nuestra historia comenzó en la secundaria.','Luego cada uno siguió su propio camino.'),
       S(2,'Viviste quince años en Estados Unidos.','Por mucho tiempo solo pudimos vernos por una pantalla.'),
       V(1,'Las llamadas nos permitían seguir cerca.','Aunque una pantalla nunca reemplazó un abrazo.'),
       S(36,'Yo tengo tres hijas que son parte de mi vida.','Gracias por elegirme con toda mi historia.'),
       S(6,'Yo vivía en Tequisquiapan.','Me vine a Ciudad de México para nuestros planes.'),
       S(3,'Tú volviste para que pudiéramos casarnos.','Hace dos meses llegaste y al fin pudimos estar juntos.'),
       V(11,'Ya no tengo que imaginar cómo sería abrazarte.','Ahora estamos del mismo lado de la pantalla.')],
      {duracion:174,audioVideo:'musica'}),
    film(2,'Dos años de nosotros',F.t6,
      'Hoy 11 de noviembre cumplimos dos años. Hace un mes me pediste matrimonio y en marzo comenzará nuestra vida de casados.',
      [S(5,'Hoy 11 de noviembre cumplimos dos años.','Dos años de esta nueva oportunidad de amarnos.'),
       S(10,'Celebramos todo lo que vivimos para llegar hasta aquí.','Las llamadas, el regreso y cada día juntos.'),
       S(23,'Hace un mes me pediste matrimonio.','Te dije que sí, mil veces sí.'),
       S(12,'En marzo vamos a casarnos.','Y me emociona construir contigo lo que viene.'),
       S(30,'Hoy, en nuestro aniversario,','también quiero hacerte una promesa.')],
      {duracion:136,interaccion:{tipo:'codigo',modo:'fecha',pregunta:'¿Qué día empezó esta nueva etapa de nosotros?',placeholder:'DDMMAAAA',respuestas:['11112024','11/11/2024','11 de noviembre de 2024'],pista:'Hoy 11 de noviembre de 2026 cumplimos dos años.'},recompensa:'11 de noviembre. Nuestra fecha.'}),
    film(3,'Yo también te elijo',photo(20),
      'Nuestra historia con mis hijas, las palabras que quiero decirte y una promesa para los dos.',
      [S(36,'Mis tres hijas son una parte inmensa de mi vida.','Gracias por elegirme con toda mi historia.'),
       V(5,'Me encanta verte cargar a mi hija más pequeña.','Contigo, nuestra vida también encontró un lugar para crecer.'),
       S(20,'Mi vido hoy quiero decirte que yo también te elijo, cada día,','no esperé a la boda para decírtelo: sí, mil veces sí.'),
       S(23,'Tú me diste tu promesa, y hoy quiero darte la mía.','No es solo un anillo, es mi corazón diciendo: voy contigo, en las buenas y en las malas.'),
       S(31,'Cuando me diste tu anillo, sentí que el mundo se detenía.','Pero quiero que sepas que mi compromiso es tan grande como el tuyo.'),
       S(34,'Este anillo no compite con el tuyo, camina junto a él.','Gracias por elegirme. Yo te elijo a ti, hoy y todos los días de mi vida.','Tu futura esposa ❤️'),
       {img:F.anillo,texto:['']}],{duracion:226,audioVideo:'musica'})
  ];
  const filmSongs = [6,2,5,3];
  const filmMusicStarts = [71,45,96,100];
  temporadas.forEach((season,index) => {
    season.musica = songs[filmSongs[index]];
    season.cancion = songNames[filmSongs[index]];
    season.episodios[0].inicioMusica = filmMusicStarts[index];
    season.top10 = false;
  });
  const extras = [
    {titulo:'Nuestro comienzo',img:photo(8),texto:'Fuimos novios en la secundaria. Años después, tuvimos otra oportunidad de estar juntos.'},
    {titulo:'Nuestra banda sonora',img:photo(7),texto:'La canción que nos envió Viridiana es el tema principal, junto a las demás canciones que acompañan nuestra historia.'},
    {titulo:'El regreso',img:photo(3),texto:'Después de quince años en Estados Unidos, volviste para casarnos. Hace dos meses comenzó nuestro presente juntos.'},
    {titulo:'Mi historia completa',img:photo(36),texto:'Mis tres hijas forman parte de mi vida. Gracias por elegir caminar a mi lado con todo lo que soy.'},
    {titulo:'Un mes que nos espera',img:photo(26),texto:'Marzo. Nuestra boda. El próximo gran capítulo de nosotros.'}
  ];
  const final = {
    titulo:'Tus palabras para Viridiana',imagen:F.final,
    sinopsis:'Después de ver nuestra historia, comparte con Viridiana lo que sientes.',
    preguntas:[
      '¿Qué recuerdo de nuestra historia te gustaría volver a vivir?',
      '¿Qué sentiste cuando por fin pudimos estar juntos?',
      '¿Qué es lo que más te ilusiona de nuestra boda?',
      '¿Qué te gustaría que construyéramos en esta nueva etapa?',
      '¿Qué te gustaría decirme hoy?'
    ],
    carta: () => `Mi vida, hoy quiero decirte que yo también te elijo, cada día. No esperé a la boda para decírtelo: sí, mil veces sí.\n\nTú me diste tu promesa, y hoy quiero darte la mía. No es solo un anillo, es mi corazón diciendo: voy contigo, en las buenas y en las malas.\n\nCuando me diste tu anillo, sentí que el mundo se detenía. Pero quiero que sepas que mi compromiso es tan grande como el tuyo. Este anillo no compite con el tuyo, camina junto a él.\n\nGracias por elegirme. Yo te elijo a ti, hoy y todos los días de mi vida.\n\nTu futura esposa ❤️`
  };
  const creditos = [
    ['Una historia de','Viridiana y Cristopher'],['De todo corazón','Viridiana'],['Para','Cristopher'],
    ['Nuestro primer capítulo','La secundaria'],['Una nueva oportunidad','11 de noviembre de 2024'],
    ['Lo que nos acompañó','Cada llamada y cada reencuentro'],['Lo que celebramos','Dos años de nosotros'],
    ['Nuestro próximo capítulo','Nuestra boda en marzo'],['Una promesa','Seguir eligiéndonos'],
    ['', 'Esta historia continuará. Contigo.'],['','11 de noviembre de 2026']
  ];
  const postCreditos = {
    imagen:F.postCreditos,etiqueta:'NUESTRA PRÓXIMA TEMPORADA',
    texto:'Cristopher, nuestra historia todavía tiene mucho por vivir.',
    anuncio:'Nos casamos en marzo',subtitulo:'Y hoy, esta promesa también es para ti.',
    sorpresa:'La historia continúa en marzo, cuando nos casamos.'
  };
  return {pareja:P,fotos:F,media:M,acceso,notificacion,sitio,temporadas,extras,final,creditos,postCreditos};
})();

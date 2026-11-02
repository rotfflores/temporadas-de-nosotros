window.CLIENT_MEDIA={
  fotos:Array.from({length:51},(_,i)=>({ruta:`assets/fotos/foto-${String(i+1).padStart(2,'0')}.webp`})),
  videos:Array.from({length:10},(_,i)=>({ruta:`assets/video/video-${String(i+1).padStart(2,'0')}.mp4`,poster:`assets/fotos/video-${String(i+1).padStart(2,'0')}.webp`})),
  audios:[...Array.from({length:14},(_,i)=>({ruta:`assets/audio/cancion-${String(i+1).padStart(2,'0')}.mp3`,tipo:'cancion'})),{ruta:'assets/audio/voz-01.mp3',tipo:'audio compartido'},{ruta:'assets/audio/intro.mp3',tipo:'introduccion'}]
};

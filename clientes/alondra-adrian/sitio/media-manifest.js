window.CLIENT_MEDIA={
  fotos:Array.from({length:21},(_,i)=>({ruta:`assets/fotos/foto-${String(i+1).padStart(2,'0')}.webp`})),
  videos:Array.from({length:4},(_,i)=>({ruta:`assets/video/momento-${String(i+1).padStart(2,'0')}.mp4`,poster:`assets/fotos/momento-${String(i+1).padStart(2,'0')}.webp`}))
};

window.FB = (() => {
 const C=window.TDN,M=window.CLIENT_MEDIA;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function renderMemories({renderNav,footer}){
  renderNav('recuerdos');
  document.querySelector('#app').innerHTML=`<main class="library"><span class="inter-kicker">El Mugres + La Greñas</span><h1>Nuestros recuerdos</h1><p>${M.fotos.length} imágenes y ${M.videos.length} videos de nuestra historia.</p><div class="memory-grid">${M.fotos.map((x,i)=>`<button class="memory-photo" data-photo="${i}" aria-label="Abrir recuerdo ${i+1}"><img src="${x.ruta}" alt="Recuerdo ${i+1} de Francisco y Brenda" loading="lazy"></button>`).join('')}${M.videos.map((x,i)=>`<figure><video controls playsinline preload="none" poster="${x.poster}" src="${x.ruta}" aria-label="Video de recuerdo ${i+1}"></video><figcaption>Un instante de nosotros · ${i+1}</figcaption></figure>`).join('')}</div></main><dialog class="photo-dialog"><div class="dialog-bar"><button class="btn btn-gray" id="prevPhoto">← Anterior</button><span id="photoCount"></span><button class="btn btn-gray" id="nextPhoto">Siguiente →</button><button class="btn btn-red" id="closePhoto">Cerrar</button></div><img id="bigPhoto" alt="Recuerdo de Francisco y Brenda"></dialog>${footer()}`;
  const dialog=document.querySelector('dialog');let index=0;
  const show=i=>{index=(i+M.fotos.length)%M.fotos.length;document.querySelector('#bigPhoto').src=M.fotos[index].ruta;document.querySelector('#photoCount').textContent=`${index+1} / ${M.fotos.length}`;};
  document.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>{show(+b.dataset.photo);dialog.showModal();});
  document.querySelector('#closePhoto').onclick=()=>dialog.close();
  document.querySelector('#prevPhoto').onclick=()=>show(index-1);document.querySelector('#nextPhoto').onclick=()=>show(index+1);
  dialog.onkeydown=e=>{if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1);};pauseOther();
 }
 function renderSongs({renderNav,footer}){
  renderNav('canciones');document.querySelector('#app').innerHTML=`<main class="library"><span class="inter-kicker">Nuestra banda sonora</span><h1>Quince formas de sentir.</h1><p>Las canciones que acompañan nuestras películas y series.</p><div class="song-list">${M.audios.map((a,i)=>`<article class="song-card"><span>${String(i+1).padStart(2,'0')}</span><div><h2>${esc(a.titulo)}</h2><audio controls preload="none" src="${a.ruta}" aria-label="${esc(a.titulo)}"></audio></div></article>`).join('')}</div></main>${footer()}`;pauseOther();
 }
 function pauseOther(){document.querySelectorAll('audio,video').forEach(el=>el.addEventListener('play',()=>document.querySelectorAll('audio,video').forEach(other=>{if(other!==el)other.pause();})));}
 document.addEventListener('DOMContentLoaded',()=>{
  const game=document.querySelector('.game-detail');if(!game)return;
  document.body.classList.add('game-immersive');
  const button=document.createElement('button');button.className='btn btn-gray game-fullscreen';button.textContent='Pantalla completa';game.prepend(button);
  const active=()=>document.fullscreenElement||document.webkitFullscreenElement;
  button.onclick=async()=>{
   try{if(active()){await(document.exitFullscreen?.()||document.webkitExitFullscreen?.());}
   else {const request=game.requestFullscreen||game.webkitRequestFullscreen;if(request)await request.call(game);else button.textContent='Vista completa activada';}}
   catch{button.textContent='Vista completa activada';}
  };
  const update=()=>button.textContent=active()?'Salir de pantalla completa':'Pantalla completa';
  document.addEventListener('fullscreenchange',update);document.addEventListener('webkitfullscreenchange',update);
  // Request native fullscreen within the user's first game gesture where supported.
  game.addEventListener('pointerdown',e=>{if(e.target.closest('.game-fullscreen,.games-back,a')||active())return;const request=game.requestFullscreen||game.webkitRequestFullscreen;if(request)Promise.resolve(request.call(game)).catch(()=>{});},{once:true});
 });
 return {renderMemories,renderSongs};
})();

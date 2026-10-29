/* Páginas propias de este cliente. No modifica la plantilla ni otros pedidos. */
window.VC = (() => {
  const C = window.TDN;
  const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const unique = kind => [...new Map(window.CLIENT_MEDIA[kind].map(x=>[x.ruta,x])).values()];
  const ring = () => `<div class="ring-card"><span class="inter-kicker">El final de nuestra última película</span><h2>Este es el final.</h2><img src="${C.fotos.anillo}" alt="La imagen de la cajita con el anillo elegida por Viridiana" width="800" height="846"><p>Ahora mira a Viridiana. Ella tiene algo para ti.</p></div>`;

  function renderPromiseEnding(player) {
    const ending=document.createElement('section');
    ending.className='promise-ending';
    ending.setAttribute('aria-label','El final de nuestra última película');
    ending.innerHTML=`<div class="promise-inner"><div class="promise-ring" id="filmRing">${ring()}<a class="btn btn-gray" href="index.html">Volver a nuestra historia</a></div></div>`;
    player.append(ending);
    ending.scrollTop=0;
  }

  function renderFinal({renderNav,footer,Sound,S,save}) {
    renderNav('final');
    document.title='Tus palabras para Viridiana | Cristopher';
    const saved=S.final?.respuestas || S.draft || [];
    document.querySelector('#app').innerHTML=`
      <section class="hero season-hero final-hero"><div class="hero-bg"><img src="${C.fotos.final}" alt="Viridiana y Cristopher juntos"></div><div class="hero-content"><span class="inter-kicker">Cristopher, ahora te toca a ti</span><h1 class="hero-title">Tus palabras<br>para Viridiana.</h1><p class="hero-synopsis">La dedicatoria de Viridiana y la imagen del anillo están al final de la película «Yo también te elijo».</p><div class="hero-btns"><a class="btn btn-play" href="episodio.html?t=11&e=1">Ver la última película</a></div></div></section>
      <main class="final-wrap vc-final">
        <details class="optional-answers"><summary>Dejarle unas palabras a Viridiana <span>Opcional</span></summary><p>Tus palabras se guardan en este navegador. Puedes enviarlas a Viridiana por WhatsApp.</p><form id="qForm">${C.final.preguntas.map((q,i)=>`<div class="q-card"><label for="q${i}">${esc(q)}</label><textarea id="q${i}" maxlength="1200" placeholder="Lo que quieras decirme…">${esc(saved[i] || '')}</textarea></div>`).join('')}<div class="actions"><button class="btn btn-red" id="sendWords" type="button">Enviar a Viridiana por WhatsApp</button><button class="btn btn-gray" type="submit">Guardar mis palabras</button><button class="btn btn-gray" id="downloadAnswers" type="button">Descargar mis palabras</button></div><p id="answerStatus" role="status"></p></form></details>
      </main>${footer()}`;
    const areas=[...document.querySelectorAll('#qForm textarea')];
    const saveWords=()=>{S.draft=areas.map(a=>a.value);S.final={respuestas:S.draft,fecha:new Date().toISOString()};save();};
    areas.forEach(a=>a.addEventListener('input',saveWords));
    document.querySelector('#qForm').onsubmit=e=>{e.preventDefault();saveWords();document.querySelector('#answerStatus').textContent='Tus palabras quedaron guardadas en este navegador.';};
    document.querySelector('#sendWords').onclick=()=>{
      saveWords();
      const text='De Cristopher, para Viridiana\n\n'+C.final.preguntas.map((q,i)=>q+'\n'+(S.draft[i]||'')+'\n').join('\n');
      window.open(`https://wa.me/${C.notificacion.whatsapp}?text=${encodeURIComponent(text)}`,'_blank','noopener');
    };
    document.querySelector('#downloadAnswers').onclick=()=>{
      saveWords();
      const text='De Cristopher, para Viridiana\n\n'+C.final.preguntas.map((q,i)=>q+'\n'+(S.draft[i]||'')+'\n').join('\n');
      const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
      const a=document.createElement('a');a.href=url;a.download='Para-Viridiana-de-Cristopher.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    };
  }

  function renderMemories({renderNav,footer}) {
    renderNav('recuerdos');
    const fotos=unique('fotos'),videos=unique('videos');
    document.querySelector('#app').innerHTML=`<main class="vc-library"><header class="vc-library-head"><span class="inter-kicker">Viridiana + Cristopher</span><h1>Nuestros recuerdos</h1><p>Los momentos que forman nuestra historia. ${fotos.length} fotos y ${videos.length} videos para volver a nosotros.</p></header><div class="memory-filters" role="group" aria-label="Mostrar recuerdos"><button class="btn btn-play" data-filter="todos" aria-pressed="true">Todos</button><button class="btn btn-gray" data-filter="fotos" aria-pressed="false">Fotos</button><button class="btn btn-gray" data-filter="videos" aria-pressed="false">Videos</button></div><div class="memory-grid">${fotos.map((x,i)=>`<button class="memory-photo" data-photo="${i}" data-kind="fotos" aria-label="Abrir foto ${i+1}"><img src="${x.ruta}" alt="Un recuerdo de nuestra historia · ${i+1}" loading="lazy" width="400" height="500"></button>`).join('')}${videos.map((x,i)=>`<figure data-kind="videos" class="memory-video"><video controls playsinline preload="none" poster="${x.poster}" src="${x.ruta}" aria-label="${x.ruta===C.media.videoPrincipal?'Nuestro video principal':`Video de recuerdo ${i+1}`}"></video><figcaption>${x.ruta===C.media.videoPrincipal?'Nuestro video principal':`Un instante de nosotros · ${i+1}`}</figcaption></figure>`).join('')}</div></main><dialog id="photoDialog" class="photo-dialog"><div class="photo-dialog-bar"><span id="photoCounter"></span><button class="btn btn-gray" id="closePhoto" autofocus>Cerrar</button></div><img id="largePhoto" alt=""><div class="photo-dialog-nav"><button class="btn btn-gray" id="prevPhoto" aria-label="Foto anterior">← Anterior</button><button class="btn btn-gray" id="nextPhoto" aria-label="Siguiente foto">Siguiente →</button></div></dialog>${footer()}`;
    let current=0;
    const dialog=document.querySelector('#photoDialog');
    const show=i=>{current=(i+fotos.length)%fotos.length;document.querySelector('#largePhoto').src=fotos[current].ruta;document.querySelector('#largePhoto').alt=`Recuerdo ${current+1} de Viridiana y Cristopher`;document.querySelector('#photoCounter').textContent=`${current+1} / ${fotos.length}`;};
    document.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>{show(+b.dataset.photo);dialog.showModal();});
    document.querySelector('#closePhoto').onclick=()=>dialog.close();
    document.querySelector('#prevPhoto').onclick=()=>show(current-1);
    document.querySelector('#nextPhoto').onclick=()=>show(current+1);
    dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});
    document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{
      document.querySelectorAll('[data-filter]').forEach(x=>{x.setAttribute('aria-pressed',String(x===b));x.className='btn '+(x===b?'btn-play':'btn-gray');});
      document.querySelectorAll('[data-kind]').forEach(x=>{x.hidden=b.dataset.filter!=='todos'&&x.dataset.kind!==b.dataset.filter;if(x.hidden)x.querySelector('video')?.pause();});
    });
    pauseOtherMedia();
  }

  function renderSongs({renderNav,footer}) {
    renderNav('canciones');
    document.querySelector('#app').innerHTML=`<main class="vc-library"><header class="vc-library-head"><span class="inter-kicker">Nuestra banda sonora</span><h1>Hay canciones<br>que son nosotros.</h1><p>La canción del video de nuestra boda es el tema principal de esta historia. Aquí también están las otras ocho canciones que nos acompañan.</p></header><div class="song-list"><article class="song-card main-song"><span class="song-number">★</span><div><span class="inter-kicker">EL TEMA PRINCIPAL</span><h2>La canción de nuestro video de boda</h2><p>La que suena en el video de «nos vamos a casar».</p><audio controls preload="none" src="${C.media.cancionPrincipal}" aria-label="La canción de nuestro video de boda"></audio></div></article>${C.media.temporadas.map((src,i)=>`<article class="song-card"><span class="song-number">${String(i+1).padStart(2,'0')}</span><div><span class="inter-kicker">NUESTRA BANDA SONORA</span><h2>${esc(C.media.canciones[i])}</h2><p>Elegida por Viridiana para Cristopher.</p><audio controls preload="none" src="${src}" aria-label="${esc(C.media.canciones[i])}"></audio></div></article>`).join('')}</div></main>${footer()}`;
    pauseOtherMedia();
  }
  function pauseOtherMedia(){document.querySelectorAll('audio,video').forEach(el=>el.addEventListener('play',()=>document.querySelectorAll('audio,video').forEach(other=>{if(other!==el)other.pause();})));}
  return {renderFinal,renderMemories,renderSongs,renderPromiseEnding,ring};
})();

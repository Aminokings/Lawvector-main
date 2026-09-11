/* ==================================================================
   LawOrchard — hero scenes and motion
   ================================================================== */
const RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- shared courtroom scene ---------- */
const PIECES={
 start:`<g>
   <rect x="543" y="366" width="114" height="16" rx="3" fill="var(--sc-fig)"/>
   <path d="M576 206 C561 246 549 306 546 366 L654 366 C651 306 639 246 624 206 Z" fill="var(--sc-fig)"/>
   <circle cx="600" cy="182" r="18" fill="var(--sc-fig)"/>
   <rect x="580" y="176" width="40" height="9" rx="2" fill="var(--brass)"/>
   <path d="M579 212 L516 160" stroke="var(--sc-fig)" stroke-width="13" stroke-linecap="round"/>
   <path d="M624 216 L646 366" stroke="var(--sc-fig)" stroke-width="10" stroke-linecap="round"/>
   <rect x="628" y="240" width="34" height="7" rx="2" fill="var(--sc-fig)"/>
   <g class="scales">
     <rect x="510" y="150" width="4" height="26" fill="var(--brass)"/>
     <rect x="446" y="146" width="132" height="5" rx="2.5" fill="var(--brass)"/>
     <line x1="452" y1="151" x2="452" y2="168" stroke="var(--brass)" stroke-width="1.6"/>
     <line x1="572" y1="151" x2="572" y2="168" stroke="var(--brass)" stroke-width="1.6"/>
     <path d="M436 168 q16 18 32 0" fill="none" stroke="var(--brass)" stroke-width="3.6" stroke-linecap="round"/>
     <path d="M556 168 q16 18 32 0" fill="none" stroke="var(--brass)" stroke-width="3.6" stroke-linecap="round"/>
   </g></g>`,
 situation:`<g>
   <rect x="512" y="150" width="176" height="232" rx="6" fill="var(--sc-col)"/>
   <rect x="528" y="166" width="144" height="216" fill="var(--sc-glow)" opacity=".55"/>
   <path d="M528 382 L672 382 L742 382 L458 382 Z" fill="var(--sc-glow)" opacity=".3"/>
   <circle cx="660" cy="272" r="6" fill="var(--brass)"/>
   <rect x="586" y="120" width="28" height="34" rx="4" fill="var(--brass)"/>
   <path d="M600 92 L622 120 L578 120 Z" fill="var(--brass)"/></g>`,
 lab:`<g>
   <g class="gavel-g">
     <rect x="556" y="196" width="88" height="34" rx="8" fill="var(--sc-fig)" transform="rotate(-24 600 213)"/>
     <rect x="592" y="222" width="12" height="88" rx="6" fill="var(--sc-fig)" transform="rotate(-24 600 213)"/>
   </g>
   <rect x="524" y="344" width="152" height="18" rx="5" fill="var(--sc-fig)"/>
   <g class="scales" opacity=".55">
     <rect x="598" y="120" width="4" height="60" fill="var(--brass)"/>
     <rect x="520" y="116" width="160" height="5" rx="2.5" fill="var(--brass)"/>
     <path d="M508 138 q16 18 32 0" fill="none" stroke="var(--brass)" stroke-width="3.4"/>
     <path d="M660 138 q16 18 32 0" fill="none" stroke="var(--brass)" stroke-width="3.4"/>
     <line x1="524" y1="121" x2="524" y2="138" stroke="var(--brass)" stroke-width="1.5"/>
     <line x1="676" y1="121" x2="676" y2="138" stroke="var(--brass)" stroke-width="1.5"/>
   </g></g>`,
 world:`<g><circle cx="600" cy="250" r="96" fill="none" stroke="var(--sc-fig)" stroke-width="5"/>
   <ellipse cx="600" cy="250" rx="40" ry="96" fill="none" stroke="var(--sc-fig)" stroke-width="3"/>
   <ellipse cx="600" cy="250" rx="76" ry="96" fill="none" stroke="var(--sc-fig)" stroke-width="2" opacity=".55"/>
   <line x1="504" y1="250" x2="696" y2="250" stroke="var(--sc-fig)" stroke-width="3"/>
   <line x1="518" y1="204" x2="682" y2="204" stroke="var(--sc-fig)" stroke-width="2" opacity=".55"/>
   <line x1="518" y1="296" x2="682" y2="296" stroke="var(--sc-fig)" stroke-width="2" opacity=".55"/>
   <circle cx="600" cy="250" r="118" fill="none" stroke="var(--brass)" stroke-width="2" opacity=".5" class="ring"/>
   <rect x="560" y="368" width="80" height="14" rx="3" fill="var(--sc-fig)"/></g>`,
 learn:`<g>
   <path d="M600 200 L470 226 L470 348 L600 322 Z" fill="var(--sc-fig)"/>
   <path d="M600 200 L730 226 L730 348 L600 322 Z" fill="var(--sc-col)"/>
   <rect x="596" y="198" width="8" height="126" fill="var(--brass)"/>
   ${[0,1,2].map(i=>`<rect x="492" y="${248+i*22}" width="86" height="4" rx="2" fill="var(--sc-glow)" opacity=".6"/>`).join('')}
   ${[0,1,2].map(i=>`<rect x="622" y="${248+i*22}" width="86" height="4" rx="2" fill="var(--sc-glow)" opacity=".4"/>`).join('')}
   <rect x="516" y="356" width="168" height="14" rx="3" fill="var(--sc-fig)"/></g>`,
 tools:`<g class="scales">
   <rect x="596" y="150" width="8" height="196" fill="var(--sc-fig)"/>
   <rect x="540" y="336" width="120" height="16" rx="4" fill="var(--sc-fig)"/>
   <rect x="470" y="146" width="260" height="8" rx="4" fill="var(--brass)"/>
   <line x1="486" y1="154" x2="486" y2="196" stroke="var(--brass)" stroke-width="2"/>
   <line x1="714" y1="154" x2="714" y2="196" stroke="var(--brass)" stroke-width="2"/>
   <path d="M452 196 q34 40 68 0" fill="none" stroke="var(--brass)" stroke-width="5" stroke-linecap="round"/>
   <path d="M680 196 q34 40 68 0" fill="none" stroke="var(--brass)" stroke-width="5" stroke-linecap="round"/>
   <circle cx="600" cy="150" r="11" fill="var(--brass)"/></g>`,
 careers:`<g>
   ${[0,1,2,3].map(i=>`<rect x="${476+i*72}" y="${340-i*46}" width="52" height="${28+i*46}" rx="4" fill="${i===3?'var(--brass)':'var(--sc-fig)'}" opacity="${0.55+i*0.15}"/>`).join('')}
   <rect x="452" y="368" width="308" height="14" rx="3" fill="var(--sc-fig)"/>
   <circle cx="746" cy="168" r="15" fill="var(--brass)"/></g>`,
 about:`<g>
   <circle cx="600" cy="252" r="86" fill="none" stroke="var(--brass)" stroke-width="6"/>
   <circle cx="600" cy="252" r="70" fill="none" stroke="var(--brass)" stroke-width="2" stroke-dasharray="5 7" class="ring"/>
   <rect x="596" y="204" width="8" height="96" fill="var(--sc-fig)"/>
   <rect x="552" y="212" width="96" height="5" rx="2.5" fill="var(--sc-fig)"/>
   <path d="M540 232 q12 15 24 0" fill="none" stroke="var(--sc-fig)" stroke-width="3.4"/>
   <path d="M636 232 q12 15 24 0" fill="none" stroke="var(--sc-fig)" stroke-width="3.4"/>
   <rect x="556" y="296" width="88" height="8" rx="4" fill="var(--sc-fig)"/>
   <rect x="540" y="368" width="120" height="14" rx="3" fill="var(--sc-fig)"/></g>`
};

/* ==================================================================
   HERO SCENE — a room, not a band
   ------------------------------------------------------------------
   Built in depth layers so the pointer parallax has something to
   separate: back wall and window, colonnade, gallery rail, the focal
   piece for the page, then a foreground rail that sits closest to
   the reader. Everything is drawn from theme variables so all four
   palettes stay coherent.
   ================================================================== */
function col(x, w, top, base){
  const capH = w * 0.34, baseH = w * 0.30;
  let flutes = '';
  for (let i = 1; i < 5; i++){
    const fx = x + (w * i / 5);
    flutes += `<rect x="${fx.toFixed(1)}" y="${top + capH}" width="${(w*0.055).toFixed(1)}"
      height="${(base - top - capH - baseH).toFixed(1)}" fill="var(--sc-flute)"/>`;
  }
  return `<g>
    <rect x="${x}" y="${top}" width="${w}" height="${base - top}" fill="var(--sc-col)"/>
    ${flutes}
    <rect x="${x - w*0.12}" y="${top}" width="${w*1.24}" height="${capH}" rx="2" fill="var(--sc-col)"/>
    <rect x="${x - w*0.17}" y="${top}" width="${w*1.34}" height="${capH*0.3}" rx="2" fill="var(--sc-col)"/>
    <rect x="${x - w*0.15}" y="${base - baseH}" width="${w*1.30}" height="${baseH}" rx="2" fill="var(--sc-col)"/>
    <rect x="${x}" y="${top}" width="${(w*0.16).toFixed(1)}" height="${base - top}" fill="#fff" opacity=".05"/>
  </g>`;
}

function heroArt(page){
  const motes = Array.from({length: 30}, () => {
    const x = 240 + Math.random()*720, y = 60 + Math.random()*420;
    const r = 0.8 + Math.random()*2.4;
    return `<circle class="mote" cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}"
      style="animation-duration:${(7+Math.random()*8).toFixed(1)}s;animation-delay:${(-Math.random()*9).toFixed(1)}s"/>`;
  }).join('');

  /* coffered ceiling */
  let coffer = '';
  for (let i = 0; i < 9; i++){
    const y = 16 + i*13, inset = i*26;
    coffer += `<rect x="${240+inset}" y="${y}" width="${720-inset*2}" height="6" rx="2"
      fill="var(--sc-line)"/>`;
  }

  /* gallery railing */
  let rail = '';
  for (let i = 0; i < 26; i++){
    rail += `<rect x="${186 + i*33}" y="392" width="5" height="40" rx="2.5" fill="var(--sc-col)" opacity=".85"/>`;
  }

  /* back wall panelling */
  let panels = '';
  for (let i = 0; i < 6; i++){
    panels += `<rect x="${430 + i*57}" y="250" width="44" height="150" rx="3"
      fill="none" stroke="var(--sc-line)" stroke-width="2"/>`;
  }

  return `<svg class="scene" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <linearGradient id="shaft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="var(--sc-glow)" stop-opacity=".55"/>
      <stop offset="55%"  stop-color="var(--sc-glow)" stop-opacity=".16"/>
      <stop offset="100%" stop-color="var(--sc-glow)" stop-opacity="0"/></linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--sc-glow)" stop-opacity=".85"/>
      <stop offset="100%" stop-color="var(--sc-glow)" stop-opacity=".25"/></linearGradient>
    <linearGradient id="floorFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--sc-col)" stop-opacity=".55"/>
      <stop offset="100%" stop-color="var(--sc-col)" stop-opacity="0"/></linearGradient>
    <radialGradient id="lamp" cx="50%" cy="50%">
      <stop offset="0%"   stop-color="var(--sc-glow)" stop-opacity=".5"/>
      <stop offset="100%" stop-color="var(--sc-glow)" stop-opacity="0"/></radialGradient>
  </defs>

  <!-- back wall, window, light -->
  <g data-depth=".012">
    ${coffer}
    ${panels}
    <path d="M470 250 A130 130 0 0 1 730 250 L730 400 L470 400 Z" fill="url(#glass)" opacity=".2"/>
    <path d="M470 250 A130 130 0 0 1 730 250" fill="none" stroke="var(--brass)" stroke-width="3.5" opacity=".55"/>
    <path d="M600 122 L600 400 M470 250 L730 250 M508 178 L692 178" stroke="var(--brass)"
      stroke-width="2" opacity=".4"/>
    <rect x="468" y="398" width="264" height="7" rx="3" fill="var(--sc-col)"/>
  </g>

  <!-- volumetric shaft -->
  <g data-depth=".035">
    <path d="M474 252 L726 252 L980 680 L220 680 Z" fill="url(#shaft)"/>
  </g>

  <!-- colonnade -->
  <g data-depth=".07">
    ${col(70, 62, 60, 560)}${col(228, 48, 96, 540)}
    ${col(924, 48, 96, 540)}${col(1068, 62, 60, 560)}
  </g>

  <!-- hanging lamps -->
  <g data-depth=".10">
    <circle cx="330" cy="150" r="46" fill="url(#lamp)"/>
    <circle cx="870" cy="150" r="46" fill="url(#lamp)"/>
    <path d="M330 40 L330 132 M870 40 L870 132" stroke="var(--sc-col)" stroke-width="3"/>
    <path d="M306 132 h48 l-8 22 h-32 z" fill="var(--sc-col)"/>
    <path d="M846 132 h48 l-8 22 h-32 z" fill="var(--sc-col)"/>
  </g>

  <!-- gallery rail -->
  <g data-depth=".14">
    <rect x="180" y="384" width="840" height="8" rx="4" fill="var(--sc-col)"/>
    ${rail}
    <rect x="180" y="430" width="840" height="9" rx="4" fill="var(--sc-col)"/>
  </g>

  <!-- the page's own piece -->
  <g data-depth=".20">${PIECES[page] || PIECES.start}</g>

  <!-- foreground: the bench you are standing behind -->
  <g data-depth=".30">
    <path d="M0 600 L1200 600 L1200 680 L0 680 Z" fill="var(--sc-col)" opacity=".9"/>
    <rect x="0" y="592" width="1200" height="10" rx="4" fill="var(--sc-col)"/>
    <path d="M0 640 L1200 640" stroke="var(--sc-flute)" stroke-width="3"/>
    <path d="M120 600 v80 M420 600 v80 M780 600 v80 M1080 600 v80"
      stroke="var(--sc-flute)" stroke-width="4"/>
  </g>

  <g data-depth=".045" class="motes">${motes}</g>
  <path d="M0 560 L1200 560 L1200 680 L0 680 Z" fill="url(#floorFade)" opacity=".5"/>
</svg>`;
}
let _io=null;
function revealScan(){
  if(RM||typeof IntersectionObserver==='undefined'){
    document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));return}
  if(!_io)_io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');_io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal:not(.in)').forEach(e=>_io.observe(e));
}

/* ---------- init ---------- */
function initFX(){ try{ _initFX() }catch(e){ document.body.classList.add('booted');
    document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')) } }
function _initFX(){
  const hero=document.querySelector('.hero');
  if(hero&&!hero.querySelector('.scene')){
    const art=document.createElement('div'); art.className='hero-art';
    art.innerHTML=heroArt(document.body.dataset.page||'start');
    hero.prepend(art);
  }
  document.body.classList.add('booted');
  revealScan();
  if(RM)return;

  /* cursor parallax + spotlight */
  const layers=[...document.querySelectorAll('.scene [data-depth]')];
  const spot=document.getElementById('spot');
  let tx=0,ty=0,cx=0,cy=0,raf=null;
  function loop(){
    cx+=(tx-cx)*0.08; cy+=(ty-cy)*0.08;
    layers.forEach(l=>{const d=parseFloat(l.dataset.depth);
      l.style.transform=`translate(${(cx*d*90).toFixed(2)}px,${(cy*d*46).toFixed(2)}px)`});
    if(Math.abs(tx-cx)>0.001||Math.abs(ty-cy)>0.001)raf=requestAnimationFrame(loop); else raf=null;
  }
  if(hero)hero.addEventListener('pointermove',e=>{
    const r=hero.getBoundingClientRect();
    tx=((e.clientX-r.left)/r.width-0.5)*2; ty=((e.clientY-r.top)/r.height-0.5)*2;
    if(spot){spot.style.setProperty('--mx',(e.clientX-r.left)+'px');spot.style.setProperty('--my',(e.clientY-r.top)+'px');spot.style.opacity='1'}
    if(!raf)raf=requestAnimationFrame(loop);
  });
  if(hero)hero.addEventListener('pointerleave',()=>{tx=0;ty=0;if(spot)spot.style.opacity='0';if(!raf)raf=requestAnimationFrame(loop)});

  /* scroll drift */
  let sr=null;
  addEventListener('scroll',()=>{ if(sr)return;
    sr=requestAnimationFrame(()=>{ sr=null;
      const y=Math.min(scrollY,520);
      layers.forEach(l=>{const d=parseFloat(l.dataset.depth);
        l.style.marginTop=(-y*d*1.5).toFixed(1)+'px'});
      const h=document.querySelector('.hero-art');
      if(h)h.style.opacity=String(Math.max(0,1-y/460));
    });
  },{passive:true});

  /* card tilt */
  document.addEventListener('pointermove',e=>{
    const c=e.target.closest('.tilt'); if(!c)return;
    const r=c.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
    c.style.transform=`perspective(760px) rotateX(${(-py*5).toFixed(2)}deg) rotateY(${(px*6).toFixed(2)}deg) translateY(-3px)`;
    c.style.setProperty('--gx',((px+0.5)*100).toFixed(1)+'%');
    c.style.setProperty('--gy',((py+0.5)*100).toFixed(1)+'%');
  },{passive:true});
  document.addEventListener('pointerout',e=>{
    const c=e.target.closest('.tilt'); if(c&&!c.contains(e.relatedTarget))c.style.transform='';
  },{passive:true});

  /* gavel strike on section change */
  document.addEventListener('click',e=>{
    const b=e.target.closest('.srow button, .seg button, .grow a');
    if(!b)return;
    const s=document.createElement('span'); s.className='strike';
    const r=b.getBoundingClientRect();
    s.style.left=(r.left+r.width/2)+'px'; s.style.top=(r.top+r.height/2)+'px';
    document.body.appendChild(s); setTimeout(()=>s.remove(),620);
  });
}
window.initFX=initFX; window.revealScan=revealScan;

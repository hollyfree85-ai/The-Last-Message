const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => [...el.querySelectorAll(q)];

const translations = {
  en: {
    install:'Install', introEyebrow:'A conversation across time', introTitle:'What would you ask yourself?', introCopy:'Meet a version of you from another point on your timeline.', begin:'Enter', back:'Back', profileEyebrow:'Before the timeline opens', profileTitle:'Tell me who you are.', fullName:'Full name', birthDate:'Date of birth', birthTime:'Time of birth', optional:'Optional', continue:'Continue', beforeContinue:'Before you continue', consentTitle:'The future is not fixed.', consentP1:'This experience draws from multiple historical systems of interpretation from cultures around the world.', consentP2:'It can suggest patterns, tendencies and periods of change. It cannot know exact events, locations, other people, or guaranteed outcomes.', consentP3:'A single choice can change what comes next. Treat this as an interpretive experience, not a factual prediction.', agreeText:'I understand and want to continue.', openTimeline:'Open my timeline', chooseDirection:'Choose a direction', past:'Past', pastSub:'Talk to who you were.', future:'Future', futureSub:'Talk to who you may become.', choosePoint:'Choose a point in time.', connected:'connected', messagePlaceholder:'Message yourself...', chatNote:'An interpretive conversation, not factual knowledge of future events.', conversation:'Conversation', changeTime:'Change point in time', clearChat:'Clear this conversation', required:'Please enter your full name and date of birth.', invalidPast:'Choose a past year after your birth.', age:'Age', yearsAgo:'years ago', yearsAhead:'years ahead', now:'Now', error:'I lost the connection for a moment. Try that again.', empty:'Say something first.', clearConfirm:'Clear this conversation?', pastHello:"Wait... you're me? Okay. That's weird. What do you want to ask me?", futureHello:"Took you long enough. 😅 What do you want to know?", promptsPast:['How are you, really?','What are you afraid of?','What do you want most?','What do you wish I remembered?'], promptsFuture:['Are you happy there?','What changed the most?','What should I stop worrying about?','What do you wish I did sooner?'], statusThinking:'thinking...'
  },
  id: {
    install:'Install', introEyebrow:'Percakapan melintasi waktu', introTitle:'Apa yang ingin lu tanyakan ke diri lu sendiri?', introCopy:'Temui versi diri lu dari titik lain di garis waktu.', begin:'Masuk', back:'Kembali', profileEyebrow:'Sebelum lorong waktu terbuka', profileTitle:'Ceritain siapa diri lu.', fullName:'Nama lengkap', birthDate:'Tanggal lahir', birthTime:'Jam lahir', optional:'Opsional', continue:'Lanjut', beforeContinue:'Sebelum lanjut', consentTitle:'Masa depan tidak pernah benar-benar tetap.', consentP1:'Pengalaman ini mengambil pola dari berbagai sistem interpretasi historis dari banyak budaya di dunia.', consentP2:'Sistem dapat menunjukkan pola, kecenderungan, dan periode perubahan. Sistem tidak dapat mengetahui kejadian detail, lokasi, pihak lain, atau hasil yang pasti.', consentP3:'Satu pilihan kecil dapat mengubah jalan berikutnya. Gunakan ini sebagai pengalaman interpretatif, bukan prediksi faktual.', agreeText:'Gw mengerti dan mau lanjut.', openTimeline:'Buka garis waktu gw', chooseDirection:'Pilih arah', past:'Masa lalu', pastSub:'Ngobrol dengan diri lu yang dulu.', future:'Masa depan', futureSub:'Ngobrol dengan diri lu yang mungkin akan datang.', choosePoint:'Pilih satu titik waktu.', connected:'terhubung', messagePlaceholder:'Ketik pesan ke diri lu...', chatNote:'Percakapan interpretatif, bukan pengetahuan faktual tentang kejadian masa depan.', conversation:'Percakapan', changeTime:'Ganti titik waktu', clearChat:'Hapus percakapan ini', required:'Isi nama lengkap dan tanggal lahir dulu.', invalidPast:'Pilih tahun masa lalu setelah tahun kelahiran lu.', age:'Umur', yearsAgo:'tahun lalu', yearsAhead:'tahun lagi', now:'Sekarang', error:'Koneksi tadi sempat putus. Coba kirim lagi.', empty:'Ketik sesuatu dulu.', clearConfirm:'Hapus percakapan ini?', pastHello:'Bentar... lu itu gw? Oke, ini aneh. Lu mau nanya apa?', futureHello:'Akhirnya lu datang juga. 😅 Mau nanya apa?', promptsPast:['Lu sebenarnya gimana?','Apa yang paling lu takutin?','Apa yang paling lu mau?','Apa yang lu harap gw tetap inget?'], promptsFuture:['Lu bahagia di sana?','Apa yang paling berubah?','Apa yang harus gw berhenti khawatirin?','Apa yang seharusnya gw lakukan lebih cepat?'], statusThinking:'lagi mikir...'
  },
  es: {
    install:'Instalar', introEyebrow:'Una conversación a través del tiempo', introTitle:'¿Qué le preguntarías a tu propio yo?', introCopy:'Conoce una versión de ti en otro punto de tu línea del tiempo.', begin:'Entrar', back:'Atrás', profileEyebrow:'Antes de abrir la línea del tiempo', profileTitle:'Dime quién eres.', fullName:'Nombre completo', birthDate:'Fecha de nacimiento', birthTime:'Hora de nacimiento', optional:'Opcional', continue:'Continuar', beforeContinue:'Antes de continuar', consentTitle:'El futuro no está fijado.', consentP1:'Esta experiencia toma patrones de múltiples sistemas históricos de interpretación de distintas culturas del mundo.', consentP2:'Puede sugerir patrones, tendencias y periodos de cambio. No puede conocer eventos exactos, lugares, otras personas ni resultados garantizados.', consentP3:'Una sola decisión puede cambiar lo que viene después. Tómalo como una experiencia interpretativa, no como una predicción factual.', agreeText:'Entiendo y quiero continuar.', openTimeline:'Abrir mi línea del tiempo', chooseDirection:'Elige una dirección', past:'Pasado', pastSub:'Habla con quien eras.', future:'Futuro', futureSub:'Habla con quien podrías llegar a ser.', choosePoint:'Elige un punto en el tiempo.', connected:'conectado', messagePlaceholder:'Escríbete un mensaje...', chatNote:'Una conversación interpretativa, no conocimiento factual de eventos futuros.', conversation:'Conversación', changeTime:'Cambiar punto en el tiempo', clearChat:'Borrar esta conversación', required:'Ingresa tu nombre completo y fecha de nacimiento.', invalidPast:'Elige un año posterior a tu nacimiento.', age:'Edad', yearsAgo:'años atrás', yearsAhead:'años adelante', now:'Ahora', error:'Perdí la conexión por un momento. Inténtalo de nuevo.', empty:'Escribe algo primero.', clearConfirm:'¿Borrar esta conversación?', pastHello:'Espera... ¿eres yo? Vale, esto es raro. ¿Qué quieres preguntarme?', futureHello:'Ya era hora de que aparecieras. 😅 ¿Qué quieres saber?', promptsPast:['¿Cómo estás de verdad?','¿Qué te da más miedo?','¿Qué quieres más que nada?','¿Qué quieres que recuerde?'], promptsFuture:['¿Eres feliz allí?','¿Qué cambió más?','¿De qué debería dejar de preocuparme?','¿Qué ojalá hubiera hecho antes?'], statusThinking:'pensando...'
  },
  'zh-TW': {
    install:'安裝', introEyebrow:'穿越時間的對話', introTitle:'你最想問另一個時空的自己什麼？', introCopy:'和時間線上另一個階段的自己見面。', begin:'進入', back:'返回', profileEyebrow:'在時間線開啟之前', profileTitle:'先告訴我，你是誰。', fullName:'完整姓名', birthDate:'出生日期', birthTime:'出生時間', optional:'選填', continue:'繼續', beforeContinue:'繼續之前', consentTitle:'未來並不是固定的。', consentP1:'這個體驗會綜合世界各地多種歷史性的詮釋系統來尋找重複出現的模式。', consentP2:'它可以呈現趨勢、傾向與變化期，但無法知道精確事件、地點、其他人物或保證結果。', consentP3:'一個小小的選擇就可能改變接下來的路。請把它視為一種詮釋體驗，而不是事實性的預言。', agreeText:'我了解，並希望繼續。', openTimeline:'開啟我的時間線', chooseDirection:'選擇方向', past:'過去', pastSub:'和以前的自己說話。', future:'未來', futureSub:'和可能成為的自己說話。', choosePoint:'選擇一個時間點。', connected:'已連線', messagePlaceholder:'傳訊息給自己...', chatNote:'這是一段詮釋性的對話，不代表對未來事件的事實性知情。', conversation:'對話', changeTime:'更換時間點', clearChat:'清除此對話', required:'請先輸入完整姓名和出生日期。', invalidPast:'請選擇出生年份之後的過去年份。', age:'年齡', yearsAgo:'年前', yearsAhead:'年後', now:'現在', error:'剛剛連線中斷了一下，請再試一次。', empty:'先輸入一些內容。', clearConfirm:'要清除這段對話嗎？', pastHello:'等等……你是我？好吧，這真的很奇怪。你想問我什麼？', futureHello:'你終於來了。😅 想知道什麼？', promptsPast:['你現在真的好嗎？','你最害怕什麼？','你最想得到什麼？','你希望我一直記得什麼？'], promptsFuture:['你在那裡快樂嗎？','什麼改變最大？','我應該停止擔心什麼？','有什麼事你希望我早點做？'], statusThinking:'正在想...'
  }
};

const state = {
  lang: localStorage.getItem('tlm_lang') || 'en',
  profile: JSON.parse(localStorage.getItem('tlm_profile') || 'null'),
  direction: null,
  year: null,
  deferredInstall: null,
  sending: false
};

function t(key){ return translations[state.lang]?.[key] ?? translations.en[key] ?? key; }
function setScreen(name){
  $$('.screen').forEach(s=>s.classList.toggle('active', s.dataset.screen===name));
  window.scrollTo(0,0);
}
function applyLanguage(){
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
  $('#langSelect').value = state.lang;
  $('#installBtn').textContent = t('install');
  if(state.direction) renderTimeline();
  if(state.year) renderQuickPrompts();
  updateDirectionName();
}
function buildStars(){
  const host=$('#stars');
  for(let i=0;i<55;i++){
    const s=document.createElement('i'); s.className='star';
    s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%';
    s.style.setProperty('--d',(3+Math.random()*7)+'s'); s.style.animationDelay=(-Math.random()*8)+'s'; host.appendChild(s);
  }
}
function buildRings(id, count=9){
  const host=$(id); host.innerHTML='';
  for(let i=0;i<count;i++){
    const ring=document.createElement('div'); ring.className='time-ring';
    const size=8+i*12;
    ring.style.width=`${size}vmin`; ring.style.height=`${size*.62}vmin`;
    ring.style.animationDelay=`${-i*.55}s`; ring.style.opacity=.1+i*.035;
    host.appendChild(ring);
  }
}
function ageInYear(year){ return Math.max(0, year - Number(state.profile.birthDate.slice(0,4))); }
function currentYear(){ return new Date().getFullYear(); }
function firstName(){ return (state.profile?.fullName || 'YOU').trim().split(/\s+/)[0]; }
function updateDirectionName(){
  if(!state.profile) return;
  $('#directionName').textContent = `${firstName().toUpperCase()} · ${t('now').toUpperCase()}`;
}
function profileVector(){
  const src=`${state.profile.fullName}|${state.profile.birthDate}|${state.profile.birthTime||''}`;
  let h=2166136261;
  for(const ch of src){ h^=ch.charCodeAt(0); h=Math.imul(h,16777619); }
  const traits=['observant','protective','restless','private','persistent','adaptable','sentimental','direct'];
  return [0,1,2].map((_,i)=>traits[Math.abs((h>>(i*4))%traits.length)]);
}
function chatKey(){ return `tlm_chat_${state.direction}_${state.year}`; }
function loadMessages(){ return JSON.parse(localStorage.getItem(chatKey()) || '[]'); }
function saveMessages(msgs){ localStorage.setItem(chatKey(), JSON.stringify(msgs.slice(-60))); }
function nowTime(){ return new Intl.DateTimeFormat(state.lang==='zh-TW'?'zh-TW':state.lang,{hour:'2-digit',minute:'2-digit'}).format(new Date()); }

function renderTimeline(){
  if(!state.profile || !state.direction) return;
  $('#timelineEyebrow').textContent = state.direction==='past' ? t('past').toUpperCase() : t('future').toUpperCase();
  const cy=currentYear(); const birthYear=Number(state.profile.birthDate.slice(0,4));
  const offsets = state.direction==='past' ? [5,10,15,20,25] : [1,5,10,20,30];
  const years = offsets.map(n=>state.direction==='past'?cy-n:cy+n).filter(y=>state.direction==='future'||y>birthYear);
  const track=$('#yearTrack'); track.innerHTML='';
  years.forEach((year,idx)=>{
    const btn=document.createElement('button'); btn.type='button'; btn.className='year-card'; btn.dataset.year=year;
    const delta=Math.abs(year-cy);
    btn.innerHTML=`<span class="age">${t('age')} ${ageInYear(year)}</span><strong>${year}</strong><small>${delta} ${state.direction==='past'?t('yearsAgo'):t('yearsAhead')}</small>`;
    btn.addEventListener('click',()=>openChat(year)); track.appendChild(btn);
  });
}
function renderMessages(){
  const host=$('#chatMessages'); host.innerHTML='';
  const msgs=loadMessages();
  if(!msgs.length){
    addMessageToDOM('assistant', state.direction==='past'?t('pastHello'):t('futureHello'), nowTime());
    saveMessages([{role:'assistant',text:state.direction==='past'?t('pastHello'):t('futureHello'),time:nowTime()}]);
  } else msgs.forEach(m=>addMessageToDOM(m.role,m.text,m.time));
  requestAnimationFrame(()=>host.scrollTop=host.scrollHeight);
}
function addMessageToDOM(role,text,time){
  const row=document.createElement('div'); row.className=`message-row ${role}`;
  const msg=document.createElement('div'); msg.className='message';
  msg.textContent=text;
  const ts=document.createElement('span'); ts.className='message-time'; ts.textContent=time||nowTime(); msg.appendChild(ts); row.appendChild(msg); $('#chatMessages').appendChild(row);
}
function renderQuickPrompts(){
  const host=$('#quickPrompts'); host.innerHTML='';
  const list=state.direction==='past'?t('promptsPast'):t('promptsFuture');
  list.forEach(text=>{ const b=document.createElement('button');b.type='button';b.className='quick-prompt';b.textContent=text;b.onclick=()=>{$('#chatInput').value=text;resizeInput();$('#chatInput').focus();};host.appendChild(b); });
}
function openChat(year){
  state.year=Number(year);
  $('#chatName').textContent=`${firstName().toUpperCase()} — ${state.year}`;
  $('#avatarLetter').textContent=firstName().charAt(0).toUpperCase();
  $('#chatStatus').textContent=t('connected');
  renderMessages(); renderQuickPrompts(); setScreen('chat'); $('#chatInput').focus();
}
function resizeInput(){ const el=$('#chatInput'); el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,150)+'px'; }
function setTyping(show){ $('#typingRow').classList.toggle('hidden',!show); $('#chatStatus').textContent=show?t('statusThinking'):t('connected'); }
function detectDeathQuestion(text){ return /\b(die|death|dead|meninggal|mati|kematian|morir|muerte|muero|死亡|死|過世)\b/i.test(text); }

async function sendMessage(text){
  if(state.sending) return;
  const clean=text.trim(); if(!clean) return;
  state.sending=true; $('#sendBtn').disabled=true;
  const time=nowTime(); const msgs=loadMessages();
  const userMsg={role:'user',text:clean,time}; msgs.push(userMsg); saveMessages(msgs); addMessageToDOM('user',clean,time);
  $('#chatInput').value=''; resizeInput(); setTyping(true); $('#chatMessages').scrollTop=$('#chatMessages').scrollHeight;
  try{
    const payload={
      message:clean,
      language:state.lang,
      timeline:{direction:state.direction,year:state.year,age:ageInYear(state.year),currentYear:currentYear()},
      profile:{fullName:state.profile.fullName,birthDate:state.profile.birthDate,birthTime:state.profile.birthTime||null,personaVector:profileVector()},
      history:msgs.slice(-20).map(({role,text})=>({role,text})),
      deathQuestion:detectDeathQuestion(clean)
    };
    const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data=await res.json(); if(!data.reply) throw new Error('No reply');
    const assistant={role:'assistant',text:data.reply,time:nowTime()};
    const updated=loadMessages();updated.push(assistant);saveMessages(updated);addMessageToDOM('assistant',assistant.text,assistant.time);
  }catch(err){
    console.error(err);
    const fallback={role:'assistant',text:t('error'),time:nowTime()};const updated=loadMessages();updated.push(fallback);saveMessages(updated);addMessageToDOM('assistant',fallback.text,fallback.time);
  }finally{
    setTyping(false); state.sending=false; $('#sendBtn').disabled=false; $('#chatMessages').scrollTop=$('#chatMessages').scrollHeight;
  }
}

$('#beginBtn').onclick=()=>setScreen('profile');
$$('[data-back]').forEach(b=>b.onclick=()=>setScreen(b.dataset.back));
$('#homeBtn').onclick=()=>setScreen('intro');
$('#profileForm').addEventListener('submit',e=>{
  e.preventDefault(); const fullName=$('#fullName').value.trim(), birthDate=$('#birthDate').value, birthTime=$('#birthTime').value;
  if(!fullName||!birthDate){$('#formError').textContent=t('required');$('#formError').classList.remove('hidden');return;}
  $('#formError').classList.add('hidden'); state.profile={fullName,birthDate,birthTime};localStorage.setItem('tlm_profile',JSON.stringify(state.profile));updateDirectionName();setScreen('consent');
});
$('#agreeCheck').onchange=e=>$('#openTimelineBtn').disabled=!e.target.checked;
$('#openTimelineBtn').onclick=()=>setScreen('direction');
$$('[data-direction]').forEach(b=>b.onclick=()=>{state.direction=b.dataset.direction;renderTimeline();setScreen('timeline');});
$('#chatBackBtn').onclick=()=>setScreen('timeline');
$('#chatInput').addEventListener('input',resizeInput);
$('#chatInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#chatForm').requestSubmit();}});
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();sendMessage($('#chatInput').value);});
$('#langSelect').addEventListener('change',e=>{state.lang=e.target.value;localStorage.setItem('tlm_lang',state.lang);applyLanguage(); if(state.profile){$('#fullName').value=state.profile.fullName;$('#birthDate').value=state.profile.birthDate;$('#birthTime').value=state.profile.birthTime||'';}});
$('#chatMenuBtn').onclick=()=>{$('#menuSheet').classList.remove('hidden');$('#sheetBackdrop').classList.remove('hidden');};
function closeSheet(){$('#menuSheet').classList.add('hidden');$('#sheetBackdrop').classList.add('hidden');}
$('#sheetClose').onclick=closeSheet;$('#sheetBackdrop').onclick=closeSheet;
$('#changeTimeBtn').onclick=()=>{closeSheet();setScreen('timeline');};
$('#clearChatBtn').onclick=()=>{if(confirm(t('clearConfirm'))){localStorage.removeItem(chatKey());renderMessages();closeSheet();}};

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredInstall=e;$('#installBtn').classList.remove('hidden');});
$('#installBtn').onclick=async()=>{if(!state.deferredInstall)return;state.deferredInstall.prompt();await state.deferredInstall.userChoice;state.deferredInstall=null;$('#installBtn').classList.add('hidden');};

if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('sw.js').catch(console.warn);

buildStars(); buildRings('#ringsDirection',11); buildRings('#ringsTimeline',12); buildRings('#ringsChat',9); applyLanguage();
if(state.profile){$('#fullName').value=state.profile.fullName;$('#birthDate').value=state.profile.birthDate;$('#birthTime').value=state.profile.birthTime||'';updateDirectionName();}

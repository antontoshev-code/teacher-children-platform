/* Обща рамка: демо лента, роля, шапка, долен колонтитул и карта на педагог. Шаблонни части в WordPress. */
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const SS={get(k,d){try{const v=sessionStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{sessionStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
const ROLES={visitor:"Посетител",parent:"Родител",teacher:"Педагог"};

/* Демо роля: ?demo=parent и ?demo=teacher задават сесията и презареждат същата страница без параметъра. */
(function initRole(){
  const p=new URLSearchParams(location.search).get("demo");
  if(p==="parent"||p==="teacher"){
    SS.set("sn_role",p);
    const u=new URL(location.href);u.searchParams.delete("demo");
    location.replace(u.pathname+(u.search?u.search:"")+u.hash);
  }
})();
const role=()=>SS.get("sn_role","visitor");
const qData=()=>SS.get("sn_q",null);
const saved=()=>SS.get("sn_saved",[]);
function unreadCount(){
  if(role()==="visitor") return 0;
  const seen=SS.get("sn_seen",[]);
  return DEMO_THREADS.filter(th=>!seen.includes(th.id)).length;
}

(function header(){
  const r=role();
  const page=location.pathname.split("/").pop()||"index.html";
  const cur=h=>h===page?' aria-current="page"':"";
  const navLinks=[["index.html#how","Как работи","index.html"],["results.html","Намери педагог","results.html"],["teacher-register.html","За педагози","teacher-register.html"]];
  const nav=navLinks.map(([h,t,p])=>`<li><a href="${h}"${cur(p)}>${t}</a></li>`).join("");
  let actions="";
  if(r==="visitor"){
    actions=`<a class="pill ghost" href="login.html">Вход</a><a class="pill yellow" href="signup-family.html">Регистрация</a>`;
  }else{
    const un=unreadCount();
    actions=`${r==="parent"?`<a class="pill ghost" href="saved.html">Запазени (${saved().length})</a>`:`<a class="pill ghost" href="teacher-dashboard.html">Табло</a>`}
      <a class="pill ghost" href="inbox.html">Съобщения${un?` <span class="badge" aria-label="${un} непрочетени">${un}</span>`:""}</a>
      <button class="pill yellow" type="button" id="logout">Изход</button>`;
  }
  const bar=`<div class="demo-bar"><div class="wrap"><p><strong>Демо за първо впечатление.</strong> Визията е груба, а имената, цветовете и функциите са временни. Всички данни са измислени. Нищо не се изпраща.</p>
    <label class="role-pick">Разглеждате като <select id="role">${Object.entries(ROLES).map(([k,v])=>`<option value="${k}"${k===r?" selected":""}>${v}</option>`).join("")}</select></label></div></div>`;
  const top=`<a class="skip" href="#main">Към основното съдържание</a>
  ${bar}
  <div class="a11y-bar" role="region" aria-label="Настройки за четене"><div class="wrap">
    <span>Четене:</span>
    <button type="button" id="fs-dec" aria-label="По-малък текст">A−</button>
    <button type="button" id="fs-inc" aria-label="По-голям текст">A+</button>
    <button type="button" id="hc" aria-pressed="false">Висок контраст</button>
  </div></div>
  <header class="site"><div class="wrap head">
    <a class="logo" href="index.html"><img src="img/logo.webp" alt="Sientica Nest" width="44" height="44"></a>
    <nav class="main" aria-label="Основно меню"><ul>${nav}</ul></nav>
    <div class="acts">${actions}</div>
  </div></header>`;
  document.body.insertAdjacentHTML("afterbegin",top);
  document.getElementById("role").onchange=e=>{SS.set("sn_role",e.target.value);location.reload();};
  const lo=document.getElementById("logout");
  if(lo) lo.onclick=()=>{SS.set("sn_role","visitor");location.href="index.html";};
  const root=document.documentElement;
  const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
  const set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
  let fs=+get("fs")||0; const apply=()=>{root.classList.remove("fs-1","fs-2","fs-3"); if(fs>0) root.classList.add("fs-"+fs);};
  if(get("hc")==="1"){root.classList.add("hc");document.getElementById("hc").setAttribute("aria-pressed","true");}
  apply();
  document.getElementById("fs-inc").onclick=()=>{fs=Math.min(3,fs+1);set("fs",fs);apply();};
  document.getElementById("fs-dec").onclick=()=>{fs=Math.max(0,fs-1);set("fs",fs);apply();};
  document.getElementById("hc").onclick=e=>{const on=root.classList.toggle("hc");e.currentTarget.setAttribute("aria-pressed",on);set("hc",on?"1":"0");};
})();

(function footer(){
  const cityLinks=CITIES.map(c=>`<a href="results.html?city=${encodeURIComponent(c)}">${esc(c)}</a>`).join(" · ");
  const subjLinks=Object.entries(SUBJECTS).map(([k,v])=>`<a href="results.html?subject=${k}">${esc(v)}</a>`).join(" · ");
  document.body.insertAdjacentHTML("beforeend",`
  <footer class="site"><div class="wrap">
    <div class="foot-grid">
      <div><img src="img/logo.webp" alt="Sientica Nest" width="72" height="72"><p>Sientica Nest е безплатна за семействата. Платформата е свързана с фондация „Слънчеви деца“.</p></div>
      <div><h2 class="foot-h">Педагози по предмет</h2><p>${subjLinks}</p></div>
      <div><h2 class="foot-h">Педагози по град</h2><p>${cityLinks}</p></div>
    </div>
    <p>Данните се пазят на сървър в България и се показват само на избрания от вас педагог, след вашето съгласие. <a href="privacy.html">Как пазим данните</a></p>
    <p>Платформата подрежда предложения по профили. Тя не гарантира, че даден педагог е подходящ за вашето дете. Първият урок е пробен.</p>
    <p><a href="index.html">Начало</a> · <a href="results.html">Намери педагог</a> · <a href="teacher-register.html">За педагози</a> · <a href="login.html">Вход</a> · <a href="feedback.html">Обратна връзка</a> · <a href="terms.html">Условия за ползване</a> · <a href="privacy.html">Поверителност</a></p>
  </div></footer>`);
})();

/* Карта на педагог: снимка (или инициали), име и първа буква, град, формат, предмети, чипове, цена, оценка, бутони. */
function teacherCard(t,opts){
  opts=opts||{};
  const q=opts.q||null;
  const parts=t.name.split(" ");
  const disp=parts[0]+" "+(parts[1]||"");
  const initials=parts.map(w=>w[0]).join("");
  const photo=t.ph?`<img class="round-photo" src="img/${t.ph}-card.webp" alt="Примерна снимка на ${esc(disp)}" width="140" height="140" loading="lazy">`:`<span class="round-photo initials" aria-hidden="true">${esc(initials)}</span>`;
  const subj=t.subjects.map(s=>`<span class="chip">${esc(SUBJECTS[s])}</span>`).join("");
  const fm=t.formats.map(f=>`<span class="chip">${esc(FORMATS[f])}</span>`).join("");
  const ex=q?score(q,t):null;
  const matchChips=ex?ex.chips.filter(c=>c.green).map(c=>`<span class="chip green">И двамата обичате: ${esc(c.t)}</span>`).join("")+ex.chips.filter(c=>!c.green&&c.ok).slice(0,3).map(c=>`<span class="chip ok">${esc(c.t)}</span>`).join(""):"";
  const pct=ex?`<p class="matchnum" aria-label="Съвпадение ${ex.pct} процента">${ex.pct}% съвпадение</p>`:"";
  const isSaved=saved().includes(t.id);
  const rating=t.reviews?`<span aria-hidden="true">★</span> ${String(t.rating).replace(".",",")} от 5 <span class="muted">(${t.reviews} ${t.reviews==1?"отзив":"отзива"})</span>`:"Нов профил, още без отзиви";
  return `<article class="card pcard" data-id="${t.id}">
    <div class="pcard-top">${photo}
      <button type="button" class="save${isSaved?" on":""}" data-save="${t.id}" aria-pressed="${isSaved}">${isSaved?"Запазен":"Запази"}</button>
    </div>
    <div class="pbody">
      <h3><a href="teacher.html?id=${t.id}">${esc(disp)}</a> ${t.verified?'<span class="chip ok">Проверен профил</span>':""}</h3>
      <p class="rate">${rating}</p>
      <p class="meta">${esc(t.city)} · ${fm}</p>
      <p>${subj}</p>
      ${pct}
      <p class="chips">${matchChips}</p>
      <p class="bio">${esc(t.bio)}</p>
      <p class="pfoot"><span class="price">${t.price} € <small>на час</small></span></p>
      <p class="btn-row"><a class="btn" href="teacher.html?id=${t.id}">Виж профила</a><a class="btn alt" href="contact.html?id=${t.id}">Изпрати заявка за пробен урок</a></p>
    </div>
  </article>`;
}

/* Бутон „Запази“ на картите и профила. Работи и за посетители (sessionStorage). */
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-save]");
  if(!b) return;
  const id=+b.dataset.save;let list=saved();
  list=list.includes(id)?list.filter(x=>x!==id):list.concat(id);
  SS.set("sn_saved",list);
  const on=list.includes(id);
  b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);b.textContent=on?"Запазен":"Запази";
  const c=document.querySelector(".acts a[href='saved.html']");if(c)c.textContent="Запазени ("+list.length+")";
});

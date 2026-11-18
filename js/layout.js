/* Обща лента, навигация и долен колонтитул. В WordPress това са шаблонни части на Kadence (Header/Footer Builder). */
(function(){
  /* Меню: логото води към началото. „Намери педагог“ е бутонът-действие (въпросник с процент на съвпадение). Без каталог. */
  const NAV=[["how-it-works.html","Как работи"],["teacher-register.html","За педагози"]];
  const page=location.pathname.split("/").pop()||"index.html";
  const cur=h=>h===page?' aria-current="page"':"";
  const ctaCur=(page==="questionnaire.html"||page==="results.html")?' aria-current="page"':"";
  const top=`
  <a class="skip" href="#main">Към основното съдържание</a>
  <div class="proto-bar"><div class="wrap"><p><strong>Прототип за обсъждане.</strong> Данните са измислени, цветовете и шрифтът са временни. Нищо не се изпраща и не се записва никъде освен във вашия браузър.</p></div></div>
  <div class="a11y-bar" role="region" aria-label="Настройки за четене"><div class="wrap">
    <span>Четене:</span>
    <button type="button" id="fs-dec" aria-label="По-малък текст">A−</button>
    <button type="button" id="fs-inc" aria-label="По-голям текст">A+</button>
    <button type="button" id="hc" aria-pressed="false">Висок контраст</button>
  </div></div>
  <header class="site"><div class="wrap">
    <a class="logo" href="index.html"><span class="dot" aria-hidden="true"></span><span>Слънчев мост</span></a>
    <nav class="main" aria-label="Основно меню"><ul>${NAV.map(([h,t])=>`<li><a href="${h}"${cur(h)}>${t}</a></li>`).join("")}<li><a class="navcta" href="questionnaire.html"${ctaCur}>Намери педагог</a></li></ul></nav>
  </div></header>`;
  const foot=`
  <footer class="site"><div class="wrap">
    <p><strong>Слънчев мост</strong> е безплатна за семействата. Платформата е свързана с фондация „Слънчеви деца“.</p>
    <p>Данните за децата се пазят в ЕС и се показват само на избран от вас педагог, след вашето съгласие. <a href="how-it-works.html#privacy">Как пазим данните</a></p>
    <p>Платформата подрежда предложения по профили. Тя не гарантира, че даден педагог е подходящ за вашето дете. Първият урок е пробен.</p>
    <p><a href="index.html">Начало</a> · <a href="how-it-works.html">Как работи</a> · <a href="questionnaire.html">Намери педагог</a> · <a href="teacher-register.html">Регистрация за педагози</a> · <a href="terms.html">Условия за ползване</a> · <a href="privacy.html">Поверителност</a></p>
  </div></footer>`;
  document.body.insertAdjacentHTML("afterbegin",top);
  document.body.insertAdjacentHTML("beforeend",foot);
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

const fmtRating=t=>t.reviews?`<span aria-hidden="true">★</span> ${String(t.rating).replace(".",",")} <span class="sr">от 5, </span>(${t.reviews} ${t.reviews==1?"отзив":"отзива"})`:"Нов профил, още без отзиви";
const SLOT_SHORT={wdm:"сутрин",wda:"следобед",wde:"вечер",we:"уикенд"};

function teacherCard(t,extra){
  const initials=t.name.split(" ").map(w=>w[0]).join("");
  const subj=t.subjects.map(s=>`<span class="chip">${SUBJECTS[s]}</span>`).join("");
  const fm=t.formats.map(f=>`<span class="chip">${FORMATS[f]}</span>`).join("")+(t.verified?'<span class="chip ok">Проверен профил</span>':'')+(t.freeTrial?'<span class="chip">Безплатен пробен урок</span>':'');
  return `<article class="card teacher">
    <div class="avatar" aria-hidden="true">${initials}</div>
    <div>
      <h3><a href="teacher.html?id=${t.id}">${t.name}</a></h3>
      <p style="margin-bottom:.4rem">${t.city} · ${classLabel(t.ageFrom)} – ${classLabel(t.ageTo)}</p>
      <div>${subj}${fm}</div>
      ${extra||`<p>${t.bio}</p>`}
    </div>
    <div class="side"><div class="price">${t.price} €<small style="font-weight:400"> / час</small></div>
      <p style="margin:0">${fmtRating(t)}</p></div>
  </article>`;
}

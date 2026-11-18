/* ПРИМЕРНИ ДАННИ - всички педагози са измислени. Реални данни ще идват от WordPress (вж. BUILD-PLAN.md). */
const SUBJECTS = {math:"Математика",bg:"Български език и литература",en:"Английски език",science:"Природни и обществени науки",nvo:"Подготовка за НВО/матури",daily:"Умения за ежедневието"};
const NEEDS = {autism:"Аутизъм (РАС)",down:"Синдром на Даун",other:"Друга потребност / не искам да посочвам"};
const CITIES = ["Благоевград","София","Пловдив","Варна","Бургас","Русе","Стара Загора","Сандански","Разлог","Банско"];
const TIMES = {wdm:"Делнични сутрини",wda:"Делнични следобеди",wde:"Делнични вечери",we:"Събота и неделя"};
const FORMATS = {presential:"Присъствено",online:"Онлайн"};
/* Незадължителни уточнения за детето (стъпка 3). Влизат само в мекото точкуване, никога като твърд филтър. */
const SUPPORT = {visual:"Визуални опори (картинки, схеми)",short:"Кратки уроци с почивки",sensory:"Спокойна среда (малко шум и светлина)",routine:"Предвидим план на урока",nonverbal:"Опит с деца, които не говорят или говорят малко",aac:"Опит с комуникатор или картинна комуникация"};

/* ageFrom/ageTo = клас (0 = подготвителна група, 1-12). exp = години опит с типа потребност. */
const TEACHERS = [
 {id:1,skills:["visual","routine","short"],verified:true,freeTrial:true,name:"Мария Д.",city:"Благоевград",subjects:["math","daily"],ageFrom:1,ageTo:7,exp:{autism:6,down:2},formats:["presential","online"],price:25,times:["wda","wde","we"],rating:4.9,reviews:14,respHours:3,
  bio:"Начален и прогимназиален учител по математика. Работи с визуални схеми и конкретни предмети. Пробният урок е 30 минути.",training:["Магистър по специална педагогика","Курс по визуална подкрепа за деца с РАС (2024)"],ageExp:{"1-4":8,"5-7":3}},
 {id:2,skills:["routine"],verified:false,freeTrial:true,name:"Георги П.",city:"Благоевград",subjects:["math","science","nvo"],ageFrom:4,ageTo:12,exp:{autism:3,down:0},formats:["presential"],price:20,times:["wde"],rating:4.6,reviews:6,respHours:20,
  bio:"Учител по математика и физика. Разделя задачите на малки стъпки и използва интересите на ученика като мотивация.",training:["Учител по математика и информатика","Обучение за работа с ученици с РАС (2023)"],ageExp:{"1-4":1,"5-7":6,"8-12":6}},
 {id:3,skills:["visual","nonverbal","aac","routine"],verified:true,freeTrial:true,name:"Елена С.",city:"София",subjects:["bg","en"],ageFrom:1,ageTo:8,exp:{autism:2,down:7},formats:["online","presential"],price:30,times:["wda","wde","we"],rating:5.0,reviews:9,respHours:2,
  bio:"Логопед-педагог. Учи четене чрез цели думи и картинки, с много повторение и похвала.",training:["Логопед","Сертификат Макатон (2022)"],ageExp:{"1-4":9,"5-7":4}},
 {id:4,skills:["visual","short"],verified:false,freeTrial:true,name:"Иван Т.",city:"Сандански",subjects:["math","bg","daily"],ageFrom:1,ageTo:6,exp:{autism:1,down:5},formats:["presential","online"],price:18,times:["wda","we"],rating:4.4,reviews:3,respHours:6,
  bio:"Учител в начален етап. Работи функционално: час, пари, пазаруване, четене на кратки текстове.",training:["Начална училищна педагогика"],ageExp:{"1-4":10,"5-7":2}},
 {id:5,skills:["routine","visual"],verified:true,freeTrial:true,name:"Ралица К.",city:"Благоевград",subjects:["en","bg"],ageFrom:2,ageTo:10,exp:{autism:4,down:1},formats:["online","presential"],price:22,times:["wdm","wda","wde"],rating:4.8,reviews:11,respHours:4,
  bio:"Преподавател по английски. Структурирани диалози и ролеви ситуации, предвидим план на всяка среща.",training:["Английска филология","Курс по социални истории за деца с РАС (2025)"],ageExp:{"1-4":3,"5-7":5,"8-12":2}},
 {id:6,skills:["visual","routine","short"],verified:true,freeTrial:true,name:"Десислава Н.",city:"Пловдив",subjects:["math","science","nvo"],ageFrom:5,ageTo:12,exp:{autism:8,down:0},formats:["online"],price:28,times:["wde","we"],rating:4.9,reviews:21,respHours:1,
  bio:"Подготовка за НВО с адаптации. Работи онлайн с визуални опори и ясен график на урока.",training:["Магистър по математика","Специализация по приобщаващо образование"],ageExp:{"5-7":9,"8-12":9}},
 {id:7,skills:["short","sensory"],verified:false,freeTrial:true,name:"Петър Л.",city:"Разлог",subjects:["science","math","daily"],ageFrom:1,ageTo:7,exp:{autism:2,down:3},formats:["presential","online"],price:16,times:["wda","wde"],rating:4.2,reviews:2,respHours:12,
  bio:"Учител и ресурсен педагог в малко училище. Практически опити и кратки уроци с почивки.",training:["Ресурсен учител (2023)"],ageExp:{"1-4":5,"5-7":4}},
 {id:8,skills:["visual","sensory","nonverbal","short","routine"],verified:true,freeTrial:true,name:"Анна М.",city:"Благоевград",subjects:["bg","daily","en"],ageFrom:0,ageTo:5,exp:{autism:5,down:6},formats:["presential"],price:24,times:["wdm","wda","we"],rating:4.7,reviews:8,respHours:5,
  bio:"Работи с по-малките деца: първо четене, реч, рутини. Тихо пространство, без шум и ярка светлина.",training:["Предучилищна педагогика","Сензорна интеграция, основен курс (2024)"],ageExp:{"1-4":9}},
 {id:9,skills:["visual","routine"],verified:false,freeTrial:true,name:"Николай В.",city:"Варна",subjects:["math","science","nvo"],ageFrom:5,ageTo:12,exp:{autism:4,down:1},formats:["online"],price:26,times:["wde","we"],rating:4.7,reviews:7,respHours:8,
  bio:"Преподавател по математика и природни науки онлайн. Урок с ясен план, визуален график и кратки задачи.",training:["Физик, учител","Курс по работа с ученици с РАС (2024)"],ageExp:{"5-7":5,"8-12":5}},
 {id:10,skills:["visual","short","nonverbal","aac"],verified:true,freeTrial:true,name:"Светла А.",city:"Пловдив",subjects:["bg","en","daily"],ageFrom:1,ageTo:7,exp:{autism:3,down:5},formats:["presential","online"],price:21,times:["wdm","wda"],rating:4.8,reviews:10,respHours:3,
  bio:"Работи с деца, които говорят малко или не говорят. Използва картинна комуникация и кратки, повтаряеми дейности.",training:["Специална педагогика","Обучение по картинна комуникация (2023)"],ageExp:{"1-4":7,"5-7":3}},
 {id:11,skills:["short","sensory"],verified:false,freeTrial:true,name:"Борис Х.",city:"Банско",subjects:["daily","math"],ageFrom:3,ageTo:9,exp:{autism:2,down:2},formats:["presential"],price:15,times:["wda","we"],rating:0,reviews:0,respHours:10,
  bio:"Нов профил. Ресурсен учител, работи в тиха обстановка с практични задачи от ежедневието.",training:["Ресурсен учител (2025)"],ageExp:{"1-4":3,"5-7":2}},
 {id:12,skills:["visual","routine","short"],verified:true,freeTrial:true,name:"Калина Р.",city:"София",subjects:["en","nvo","science"],ageFrom:4,ageTo:12,exp:{autism:6,down:0},formats:["online"],price:32,times:["wde","we"],rating:4.9,reviews:18,respHours:1,
  bio:"Английски и подготовка за НВО. Ясни правила, схеми и предсказуем ред на всяка среща.",training:["Английска филология","Приобщаващо образование, специализация"],ageExp:{"1-4":2,"5-7":6,"8-12":7}},
 {id:13,skills:["visual","routine"],verified:true,freeTrial:true,name:"Теодора М.",city:"Русе",subjects:["math","science"],ageFrom:1,ageTo:6,exp:{autism:5,down:0},formats:["presential","online"],price:22,times:["wdm","wda"],rating:4.8,reviews:9,respHours:2,
  bio:"Учител по математика в начален етап. Работи със скоби, цветни пръчици и предвидим ред на часа.",training:["Учител в начален етап","Курс по визуална подкрепа за деца с РАС (2025)"],ageExp:{"1-4":6,"5-7":1}},
 {id:14,skills:["short","sensory"],verified:false,freeTrial:true,name:"Виктор Ст.",city:"Стара Загора",subjects:["bg","daily"],ageFrom:1,ageTo:8,exp:{autism:0,down:4},formats:["presential"],price:18,times:["wda","we"],rating:4.3,reviews:4,respHours:12,
  bio:"Работи с думи, които детето вижда и чува, и с ежедневни ситуации: магазин, автобус, готвене.",training:["Педагог, начално образование","Обучение по сричкуване (2024)"],ageExp:{"1-4":4,"5-7":2}},
 {id:15,skills:["routine","visual","short"],verified:true,freeTrial:true,name:"Диана Ч.",city:"Бургас",subjects:["en","nvo"],ageFrom:5,ageTo:12,exp:{autism:3,down:0},formats:["online","presential"],price:30,times:["wde"],rating:4.6,reviews:12,respHours:5,
  bio:"Английски и подготовка за НВО. Планираме урока заедно с родителя и обясняваме всяка стъпка предварително.",training:["Филолог, английски език","Специализация по приобщаващо образование"],ageExp:{"5-7":4,"8-12":6}},
 {id:16,skills:["visual","short","routine"],verified:false,freeTrial:true,name:"Павел И.",city:"Пловдив",subjects:["math","bg"],ageFrom:1,ageTo:6,exp:{autism:1,down:1},formats:["online"],price:16,times:["wdm","wde"],rating:0,reviews:0,respHours:15,
  bio:"Нов профил. Работя онлайн с картинки, таймер и кратки задачи. Пробният урок е 30 минути.",training:["Бакалавър, начална училищна педагогика (2025)"],ageExp:{"1-4":2,"5-7":1}},
 {id:17,skills:["visual","sensory","routine","short"],verified:true,freeTrial:true,name:"Любомира Н.",city:"София",subjects:["science","daily"],ageFrom:2,ageTo:9,exp:{autism:6,down:2},formats:["presential","online"],price:27,times:["wda","wde","we"],rating:4.9,reviews:22,respHours:1,
  bio:"Природни науки и ежедневни умения. Опити с кухненски продукти и кратки игри, никога по повече от 40 минути.",training:["Биолог, магистър","Сензорна интеграция, основен курс (2024)"],ageExp:{"1-4":4,"5-7":6,"8-12":2}},
 {id:18,skills:["routine"],verified:false,freeTrial:true,name:"Станимир Д.",city:"Сандански",subjects:["math","nvo"],ageFrom:6,ageTo:12,exp:{autism:2,down:0},formats:["presential"],price:20,times:["wde"],rating:4.2,reviews:3,respHours:24,
  bio:"Математика за по-големи ученици. Подреждам задачите по трудност и давам време за подготовка между уроците.",training:["Учител по математика","Курс за подготовка за НВО (2023)"],ageExp:{"5-7":2,"8-12":4}},
 {id:19,skills:["visual","nonverbal","aac"],verified:false,freeTrial:true,name:"Гергана В.",city:"Благоевград",subjects:["bg","en"],ageFrom:0,ageTo:4,exp:{autism:2,down:5},formats:["presential"],price:19,times:["wdm","we"],rating:4.7,reviews:7,respHours:4,
  bio:"Подготвителна група и първи клас. Работя с думи, картинки и песни. Много повторение без натиск.",training:["Учител в предучилищна група","Обучение по картинна комуникация (2024)"],ageExp:{"1-4":7}},
 {id:20,skills:["short","routine","visual"],verified:true,freeTrial:true,name:"Ивелина К.",city:"Варна",subjects:["daily","bg"],ageFrom:3,ageTo:9,exp:{autism:4,down:3},formats:["online"],price:23,times:["wda","we"],rating:4.5,reviews:6,respHours:6,
  bio:"Онлайн уроци за самостоятелност и четене. Всяка среща започва с график на деня и свършва с обобщение.",training:["Психолог, бакалавър","Курс по работа с ученици с РАС (2025)"],ageExp:{"1-4":3,"5-7":3,"8-12":2}},
 {id:21,skills:["visual","routine"],verified:false,freeTrial:true,name:"Мартин П.",city:"Велико Търново",subjects:["math","science"],ageFrom:4,ageTo:10,exp:{autism:3,down:1},formats:["presential","online"],price:24,times:["wde","we"],rating:4.1,reviews:2,respHours:10,
  bio:"Физика и математика в по-горните класове на начален етап. Опитвам с реални обекти, после с формули.",training:["Физик, учител","Курс по работа с ученици с индивидуални нужди (2024)"],ageExp:{"1-4":2,"5-7":3,"8-12":1}},
 {id:22,skills:["visual","short","sensory"],verified:true,freeTrial:true,name:"Росица Т.",city:"Враца",subjects:["en","bg"],ageFrom:1,ageTo:5,exp:{autism:1,down:6},formats:["presential"],price:17,times:["wdm","wda"],rating:4.9,reviews:15,respHours:2,
  bio:"Работя с деца с Даун синдром от 4 години. Използвам картинки за всяка дума и редуване на активност и почивка.",training:["Логопед-педагог","Сертификат Макатон (2023)"],ageExp:{"1-4":8,"5-7":1}}];

const classLabel=c=>c==0?"подготвителна група":c+". клас";
const bandOf=c=>c<=4?"1-4":(c<=7?"5-7":"8-12");
const bandLabel={"1-4":"1.-4. клас","5-7":"5.-7. клас","8-12":"8.-12. клас"};

/* ====== ПРАВИЛНО СЪВПАДЕНИЕ (rule-based) ======
   Стъпка 1: твърди филтри - отпадат несъвместимите.
   Стъпка 2: точки по тежести (общо 100). Тежестите са на едно място и се настройват. */
const WEIGHTS = {need:25,support:10,age:20,price:15,reviews:15,response:15};

function hardFilter(q,t){
  if(!t.subjects.includes(q.subject)) return "не преподава избрания предмет";
  if(q.cls<t.ageFrom||q.cls>t.ageTo) return "не работи с този клас";
  if(!q.times.some(x=>t.times.includes(x))) return "няма съвпадащи часове";
  const wantsP=q.format==="presential"||q.format==="any", wantsO=q.format==="online"||q.format==="any";
  const okP=wantsP&&t.formats.includes("presential")&&t.city===q.city;
  const okO=wantsO&&t.formats.includes("online");
  if(!okP&&!okO) return q.format==="presential"?"е в друго населено място":"не предлага избрания формат";
  return null;
}

function score(q,t){
  const r=[];let s=0;
  // 1. Опит с типа потребност (най-голяма тежест заедно с уточненията)
  const y=q.need==="other"?0:(t.exp[q.need]||0);
  const n=q.need==="other"?0.5:Math.min(y/5,1);
  s+=WEIGHTS.need*n;
  if(q.need!=="other"&&y>0) r.push(`Има ${y} ${y==1?"година":"години"} опит с деца ${q.need==="autism"?"с аутизъм":"със синдром на Даун"}.`);
  // 1б. Уточнения за детето (по желание): дял от поисканото, което педагогът предлага
  const want=q.support||[];const have=want.filter(k=>t.skills.includes(k));
  s+=WEIGHTS.support*(want.length?have.length/want.length:0.5);
  have.forEach(k=>r.push(SUPPORT[k]+"."));
  // 2. Опит с възрастовата група
  const ya=t.ageExp[bandOf(q.cls)]||0; s+=WEIGHTS.age*Math.min(ya/6,1);
  if(ya>0) r.push(`Работи ${ya} ${ya==1?"година":"години"} с ученици от ${bandLabel[bandOf(q.cls)]}.`);
  // 3. Цена в бюджета
  if(t.price<=q.budget){ s+=WEIGHTS.price*(0.6+0.4*(q.budget-t.price)/q.budget); r.push(`Цената (${t.price} € на час) е в рамките на бюджета ви.`);}
  else { s+=WEIGHTS.price*Math.max(0,0.4-(t.price-q.budget)/q.budget); r.push(`Цената (${t.price} € на час) е малко над бюджета ви.`);}
  // 4. Отзиви
  if(t.reviews>0){ s+=WEIGHTS.reviews*((t.rating-3)/2)*Math.min(t.reviews/8,1); r.push(`Оценка ${t.rating.toString().replace(".",",")} от ${t.reviews} отзива на родители.`);}
  // 5. Бързина на отговор
  s+=WEIGHTS.response*Math.max(0,1-t.respHours/24);
  if(t.respHours<=6) r.push(`Обикновено отговаря до ${t.respHours} ${t.respHours==1?"час":"часа"}.`);
  const common=q.times.filter(x=>t.times.includes(x)).map(x=>TIMES[x].toLowerCase());
  r.unshift(`Преподава ${SUBJECTS[q.subject].toLowerCase()} и има свободни часове: ${common.join(", ")}.`);
  const chips=[];
  chips.push({t:SUBJECTS[q.subject],ok:true});
  if(q.need!=="other") chips.push({t:NEEDS[q.need].replace(/ \(.*\)/,""),ok:y>0});
  want.forEach(k=>chips.push({t:SUPPORT[k].replace(/ \(.*\)/,""),ok:t.skills.includes(k)}));
  chips.push({t:t.price<=q.budget?"В бюджета":"Над бюджета",ok:t.price<=q.budget});
  return {pct:Math.round(s),reasons:r,chips};
}

function runMatch(q){
  const kept=[],dropped=[];
  TEACHERS.forEach(t=>{const why=hardFilter(q,t); if(why) dropped.push({t,why}); else kept.push({t,...score(q,t)});});
  kept.sort((a,b)=>b.pct-a.pct);
  return {top:kept.slice(0,5),kept,dropped};
}

const ABOUT={
 1:"Обичам зелен чай и дълги разходки край реката. Ако детето обича динозаври, ще ги ползваме за задачите.",
 2:"Бивш физик, който сега учи деца. Имам силна слабост към пъзели и не се отказвам от задача на първата грешка.",
 3:"Говоря три езика, но в уроците използвам само българските думи, които детето вече знае.",
 4:"Израснал съм в село и знам как е да пътуваш до града за урок. Затова често предлагам онлайн.",
 5:"Пътувала съм по света и обичам да разказвам истории. Всеки урок има своя тема.",
 6:"Ако има нещо, което детето показва с ръце, ще го повторя с него. Много търпение, без бързане.",
 7:"Прекарвам свободното си време в градината. Имам една котка, която понякога се включва в уроците онлайн.",
 8:"Внимавам с шума и светлината в стаята. Ако детето се уморява, винаги има тиха почивка.",
 9:"Обичам да готвя. Част от задачите за пари и мерки са с истински продукти от кухнята.",
 10:"Първо говорим, после пишем. Не е нужно детето да е готово за всичко от първата среща.",
 11:"Пристигам винаги с 5 минути по-рано, за да подредя стаята, както обичате.",
 12:"Вярвам, че предвидимият урок е половината подкрепа. Изпращам план на родителя преди всяка среща.",
 13:"Учила съм в Русе и в Рим. Обичам разкази за животни и числа, които се виждат.",
 14:"Работя с деца от 25 години. Не използвам компютър по време на урока, само хартия и живо общуване.",
 15:"Кафе без захар, книги и пътувания с влак. Пишем кратки дневници на английски след всеки урок.",
 16:"Нов съм на платформата. Ще се видим на първия урок и ще проверим какво работи за вас.",
 17:"Имам две деца, така че знам как изглежда денят вкъщи. Гледам уроците да са кратки и да свършват на добра нота.",
 18:"Обичам футбол и шах. Ако детето обича шах, ще ползваме позициите за логически задачи.",
 19:"Пея в хор в неделя. Песните помагат за запаметяване на думи и за настроението в стаята.",
 20:"Работих в център за деца в Пловдив. Сега съм онлайн, защото е по-спокойно за семейството.",
 21:"Колекционирам камъни и показвам физика с тях. Може да се окаже, че и детето ще харесва камъни.",
 22:"Пиша стихове в свободното си време. Текстовете, които ползвам в уроците, понякога са мои."
}

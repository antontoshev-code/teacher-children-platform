/* ПРИМЕРНИ ДАННИ - всички педагози и семейства са измислени. Снимките са от папка на проекта и са за демото.
   Единствен списък с градовете и предметите. Всички стойности са на български. */
const SUBJECTS = {math:"Математика",bg:"Български език и литература",en:"Английски език",science:"Природни и обществени науки",nvo:"Подготовка за НВО и матури",daily:"Умения за ежедневието"};
const NEEDS = {autism:"Аутизъм (РАС)",down:"Синдром на Даун",other:"Друга потребност или не искам да посочвам"};
const CITIES = ["Благоевград","София","Пловдив","Варна","Бургас","Русе","Стара Загора","Велико Търново","Плевен","Враца","Сандански","Разлог","Банско","Шумен"];
const TIMES = {wdm:"Делнични сутрини",wda:"Делнични следобеди",wde:"Делнични вечери",we:"Събота и неделя"};
const FORMATS = {presential:"Присъствено",online:"Онлайн"};
const SUPPORT = {visual:"Визуални опори (картинки, схеми)",short:"Кратки уроци с почивки",sensory:"Спокойна среда (малко шум и светлина)",routine:"Предвидим план на урока",nonverbal:"Опит с деца, които говорят малко или не говорят",aac:"Опит с картинна комуникация"};
const INTERESTS = ["музика","пеене","шах","футбол","плуване","рисуване","готвене","природа и разходки","животни","динозаври","автомобили","театър","четене","танци","градинарство","туризъм","фотография","колоездене","пъзели","конструиране"];

/* Оценката и отзивите се показват. Няма обещание за време на отговор. */
const TEACHERS = [
 {id:1,name:"Мария Д.",city:"Благоевград",subjects:["math","daily"],ageFrom:1,ageTo:7,exp:{autism:6,down:2},formats:["presential","online"],price:25,times:["wda","wde","we"],rating:4.9,reviews:14,skills:["visual","routine","short"],interests:["пъзели","четене","природа и разходки"],ph:8,verified:true,
  edu:"Софийски университет, начална училищна педагогика",work:"ресурсен учител в начално училище",
  bio:"Работя с деца, които учат по-добре с картинки и схеми. Всеки урок започва с план, който детето вижда на масата.",ageExp:{"1-4":8,"5-7":3}},
 {id:2,name:"Георги П.",city:"Благоевград",subjects:["math","science","nvo"],ageFrom:4,ageTo:12,exp:{autism:3,down:0},formats:["presential"],price:20,times:["wde"],rating:4.6,reviews:6,skills:["routine"],interests:["шах","автомобили","футбол"],ph:null,verified:false,
  edu:"Пловдивски университет „Паисий Хилендарски“, математика",work:"учител по математика в средно училище",
  bio:"Обичам да разбирам как работят нещата. Задачите разделям на малки стъпки и ги връзвам с това, което детето вече знае.",ageExp:{"1-4":1,"5-7":6,"8-12":6}},
 {id:3,name:"Елена С.",city:"София",subjects:["bg","en"],ageFrom:1,ageTo:8,exp:{autism:2,down:7},formats:["online","presential"],price:30,times:["wda","wde","we"],rating:5.0,reviews:9,skills:["visual","nonverbal","aac","routine"],interests:["музика","пеене","рисуване"],ph:9,verified:true,
  edu:"ЮЗУ „Неофит Рилски“, специална педагогика",work:"логопед в детска градина",
  bio:"Учя четене чрез цели думи и картинки. Повтарям много и хваля всяка стъпка, колкото и малка да е.",ageExp:{"1-4":9,"5-7":4}},
 {id:4,name:"Иван Т.",city:"Сандански",subjects:["math","bg","daily"],ageFrom:1,ageTo:6,exp:{autism:1,down:5},formats:["presential","online"],price:18,times:["wda","we"],rating:4.4,reviews:3,skills:["visual","short"],interests:["футбол","природа и разходки"],ph:null,verified:false,
  edu:"Шуменски университет „Епископ Константин Преславски“, начална училищна педагогика",work:"учител в подготвителна група",
  bio:"Работя функционално: час, пари, пазаруване, кратко четене. Израствам в село и знам, че не всяко семейство има време за пътуване.",ageExp:{"1-4":10,"5-7":2}},
 {id:5,name:"Ралица К.",city:"Благоевград",subjects:["en","bg"],ageFrom:2,ageTo:10,exp:{autism:4,down:1},formats:["online","presential"],price:22,times:["wdm","wda","wde"],rating:4.8,reviews:11,skills:["routine","visual"],interests:["туризъм","театър","четене"],ph:5,verified:false,
  edu:"Великотърновски университет „Св. св. Кирил и Методий“, английска филология",work:"частен педагог, работя с деца у дома",
  bio:"Работя с деца, които говорят малко. Структурираме диалози и ролеви игри, за да можем да говорим на английски без страх от грешки.",ageExp:{"1-4":3,"5-7":5,"8-12":2}},
 {id:6,name:"Десислава Н.",city:"Пловдив",subjects:["math","science","nvo"],ageFrom:5,ageTo:12,exp:{autism:8,down:0},formats:["online"],price:28,times:["wde","we"],rating:4.9,reviews:21,skills:["visual","routine","short"],interests:["животни","природа и разходки"],ph:10,verified:false,
  edu:"Пловдивски университет „Паисий Хилендарски“, математика",work:"педагог в център за деца със специални нужди",
  bio:"Подготвям за НВО с адаптации. Работя онлайн с визуални опори и ясен график, който родителят получава преди всеки урок.",ageExp:{"5-7":9,"8-12":9}},
 {id:7,name:"Петър Л.",city:"Разлог",subjects:["science","math","daily"],ageFrom:1,ageTo:7,exp:{autism:2,down:3},formats:["presential","online"],price:16,times:["wda","wde"],rating:4.2,reviews:2,skills:["short","sensory"],interests:["конструиране","динозаври"],ph:null,verified:false,
  edu:"Софийски университет, биология",work:"ресурсен учител в начално училище",
  bio:"Правя кратки уроци с почивки. Опитите с вода, пръст и светлина са любимата ми част, защото там всичко се вижда.",ageExp:{"1-4":5,"5-7":4}},
 {id:8,name:"Анна М.",city:"Благоевград",subjects:["bg","daily","en"],ageFrom:0,ageTo:5,exp:{autism:5,down:6},formats:["presential"],price:24,times:["wdm","wda","we"],rating:4.7,reviews:8,skills:["visual","sensory","nonverbal","short","routine"],interests:["рисуване","животни"],ph:6,verified:true,
  edu:"Софийски университет, предучилищна педагогика",work:"учител в подготвителна група",
  bio:"Работя с най-малките: първо четене, реч и рутини. В стаята е тихо, без ярка светлина, а почивката е част от урока.",ageExp:{"1-4":9}},
 {id:9,name:"Николай В.",city:"Варна",subjects:["math","science","nvo"],ageFrom:5,ageTo:12,exp:{autism:4,down:1},formats:["online"],price:26,times:["wde","we"],rating:4.7,reviews:7,skills:["visual","routine"],interests:["шах","колоездене"],ph:12,verified:false,
  edu:"Варненски свободен университет „Черноризец Храбър“, физика",work:"учител по физика и математика",
  bio:"Онлайн уроците ми имат ясен план, визуален график и кратки задачи. Винаги казвам първо какво ще направим и какво очаквам.",ageExp:{"5-7":5,"8-12":5}},
 {id:10,name:"Светла А.",city:"Пловдив",subjects:["bg","en","daily"],ageFrom:1,ageTo:7,exp:{autism:3,down:5},formats:["presential","online"],price:21,times:["wdm","wda"],rating:4.8,reviews:10,skills:["visual","short","nonverbal"],interests:["танци","готвене"],ph:7,verified:true,
  edu:"Пловдивски университет „Паисий Хилендарски“, специална педагогика",work:"частен педагог, работя с деца у дома",
  bio:"Работя с деца, които говорят малко или не говорят. Използвам картинна комуникация и кратки дейности, които се повтарят.",ageExp:{"1-4":7,"5-7":3}},
 {id:11,name:"Борис Х.",city:"Банско",subjects:["daily","math"],ageFrom:3,ageTo:9,exp:{autism:2,down:2},formats:["presential"],price:15,times:["wda","we"],rating:0,reviews:0,skills:["short","sensory"],interests:["природа и разходки","туризъм"],ph:null,verified:false,
  edu:"Софийски университет, начална училищна педагогика",work:"ресурсен учител в начално училище",
  bio:"Нов съм на платформата. Работя в тиха обстановка с практични задачи от ежедневието: пазаруване, часовник, пари.",ageExp:{"1-4":3,"5-7":2}},
 {id:12,name:"Калина Р.",city:"София",subjects:["en","nvo","science"],ageFrom:4,ageTo:12,exp:{autism:6,down:0},formats:["online"],price:32,times:["wde","we"],rating:4.9,reviews:18,skills:["visual","routine","short"],interests:["четене","фотография"],ph:11,verified:true,
  edu:"Софийски университет, английска филология",work:"педагог в център за деца със специални нужди",
  bio:"Английски и подготовка за НВО. Ясни правила, схеми и предвидим ред на всяка среща, който можете да видите предварително.",ageExp:{"1-4":2,"5-7":6,"8-12":7}},
 {id:13,name:"Теодора М.",city:"Русе",subjects:["math","science"],ageFrom:1,ageTo:6,exp:{autism:5,down:0},formats:["presential","online"],price:22,times:["wdm","wda"],rating:4.8,reviews:9,skills:["visual","routine"],interests:["рисуване","пъзели"],ph:null,verified:true,
  edu:"Русенски университет „Ангел Кънчев“, информатика и физика",work:"учител по математика в начален етап",
  bio:"Работя с цветни пръчици, скоби и предвиден ред на часа. Ако детето обича нещо, го използвам в задачата.",ageExp:{"1-4":6,"5-7":1}},
 {id:14,name:"Виктор Ст.",city:"Стара Загора",subjects:["bg","daily"],ageFrom:1,ageTo:8,exp:{autism:0,down:4},formats:["presential"],price:18,times:["wda","we"],rating:4.3,reviews:4,skills:["short","sensory"],interests:["футбол","автомобили"],ph:14,verified:false,
  edu:"Шуменски университет „Епископ Константин Преславски“, начално образование",work:"учител в начален етап",
  bio:"Работя с думи, които детето вижда и чува, и с ежедневни ситуации: магазин, автобус, готвене.",ageExp:{"1-4":4,"5-7":2}},
 {id:15,name:"Диана Ч.",city:"Бургас",subjects:["en","nvo"],ageFrom:5,ageTo:12,exp:{autism:3,down:0},formats:["online","presential"],price:30,times:["wde"],rating:4.6,reviews:12,skills:["routine","visual","short"],interests:["четене","театър"],ph:null,verified:true,
  edu:"Бургаски свободен университет, английска филология",work:"учител по английски език",
  bio:"Планираме урока заедно с родителя и обясняваме всяка стъпка предварително. Учим и по текст, и по разговор.",ageExp:{"5-7":4,"8-12":6}},
 {id:16,name:"Павел И.",city:"Пловдив",subjects:["math","bg"],ageFrom:1,ageTo:6,exp:{autism:1,down:1},formats:["online"],price:16,times:["wdm","wde"],rating:0,reviews:0,skills:["visual","short"],interests:["конструиране","шах"],ph:null,verified:false,
  edu:"Тракийски университет, начална училищна педагогика",work:"учител в начален етап",
  bio:"Нов съм на платформата. Работя онлайн с картинки, таймер и кратки задачи.",ageExp:{"1-4":2,"5-7":1}},
 {id:17,name:"Любомира Н.",city:"София",subjects:["science","daily"],ageFrom:2,ageTo:9,exp:{autism:6,down:2},formats:["presential","online"],price:27,times:["wda","wde","we"],rating:4.9,reviews:22,skills:["visual","sensory","routine","short"],interests:["природа и разходки","готвене"],ph:null,verified:true,
  edu:"Софийски университет, биология",work:"учител по природни науки",
  bio:"Опити с кухненски продукти и кратки игри. Никога не работим повече от 40 минути без почивка.",ageExp:{"1-4":4,"5-7":6,"8-12":2}},
 {id:18,name:"Станимир Д.",city:"Сандански",subjects:["math","nvo"],ageFrom:6,ageTo:12,exp:{autism:2,down:0},formats:["presential"],price:20,times:["wde"],rating:4.2,reviews:3,skills:["routine"],interests:["шах","футбол"],ph:13,verified:false,
  edu:"Софийски университет, математика",work:"учител по математика в средно училище",
  bio:"Подреждам задачите по трудност и давам време между уроците. Използвам шахматни позиции за логически задачи.",ageExp:{"5-7":2,"8-12":4}},
 {id:19,name:"Гергана В.",city:"Благоевград",subjects:["bg","en"],ageFrom:0,ageTo:4,exp:{autism:2,down:5},formats:["presential"],price:19,times:["wdm","we"],rating:4.7,reviews:7,skills:["visual","nonverbal","aac"],interests:["музика","танци"],ph:null,verified:false,
  edu:"ЮЗУ „Неофит Рилски“, предучилищна педагогика",work:"учител в подготвителна група",
  bio:"Работя с думи, картинки и песни. Много повторение, без натиск. Песните помагат за запаметяването.",ageExp:{"1-4":7}},
 {id:20,name:"Ивелина К.",city:"Варна",subjects:["daily","bg"],ageFrom:3,ageTo:9,exp:{autism:4,down:3},formats:["online"],price:23,times:["wda","we"],rating:4.5,reviews:6,skills:["short","routine","visual"],interests:["готвене","градинарство"],ph:null,verified:true,
  edu:"Варненски свободен университет „Черноризец Храбър“, психология",work:"частен педагог, работя онлайн",
  bio:"Онлайн уроци за самостоятелност и четене. Всяка среща започва с план на деня и свършва с кратко обобщение.",ageExp:{"1-4":3,"5-7":3,"8-12":2}},
 {id:21,name:"Мартин П.",city:"Велико Търново",subjects:["math","science"],ageFrom:4,ageTo:10,exp:{autism:3,down:1},formats:["presential","online"],price:24,times:["wde","we"],rating:4.1,reviews:2,skills:["visual","routine"],interests:["животни","автомобили"],ph:4,verified:false,
  edu:"Великотърновски университет „Св. св. Кирил и Методий“, физика",work:"учител по физика в начален етап",
  bio:"Започвам с реални предмети, после минавам към формули. Ако детето обича животни, те са в задачите.",ageExp:{"1-4":2,"5-7":3,"8-12":1}},
 {id:22,name:"Росица Т.",city:"Враца",subjects:["en","bg"],ageFrom:1,ageTo:5,exp:{autism:1,down:6},formats:["presential"],price:17,times:["wdm","wda"],rating:4.9,reviews:15,skills:["visual","short","sensory"],interests:["четене","рисуване"],ph:null,verified:true,
  edu:"Логопедия, Тракийски университет",work:"логопед в детска градина",
  bio:"Работя с деца с Даун синдром от 4 години. Използвам картинка за всяка дума и редуване на активност и почивка.",ageExp:{"1-4":8,"5-7":1}},
 {id:23,name:"Кирил Т.",city:"Плевен",subjects:["math","bg","nvo"],ageFrom:5,ageTo:12,exp:{autism:5,down:0},formats:["presential","online"],price:26,times:["wde","we"],rating:4.6,reviews:9,skills:["routine","visual"],interests:["футбол","шах","колоездене"],ph:3,verified:false,
  edu:"Плевенски университет, математика",work:"учител по математика в средно училище",
  bio:"Подготвям за НВО с ясна структура и визуални схеми. Първите уроци са за разбиране, после за скорост.",ageExp:{"5-7":5,"8-12":5}},
 {id:24,name:"Надя Г.",city:"Шумен",subjects:["bg","daily"],ageFrom:1,ageTo:7,exp:{autism:3,down:4},formats:["presential"],price:18,times:["wda","wde"],rating:4.4,reviews:5,skills:["visual","short","sensory"],interests:["готвене","четене"],ph:null,verified:false,
  edu:"Шуменски университет „Епископ Константин Преславски“, български език и литература",work:"учител в начален етап",
  bio:"Уроците ми са кратки и спокойни. Работим с книжки с картинки и с ежедневни рецепти, които пишем заедно.",ageExp:{"1-4":5,"5-7":3}},
 {id:25,name:"Владимир Л.",city:"Шумен",subjects:["science","math"],ageFrom:3,ageTo:10,exp:{autism:2,down:1},formats:["online"],price:24,times:["wde","we"],rating:4.0,reviews:1,skills:["routine","short"],interests:["динозаври","конструиране"],ph:null,verified:false,
  edu:"Шуменски университет „Епископ Константин Преславски“, физика",work:"учител по природни науки",
  bio:"Опитвам с модели и конструкции. Динозаврите работят на всяка възраст, стига да знаем какво обича детето.",ageExp:{"1-4":2,"5-7":3,"8-12":1}},
 {id:26,name:"Ема Х.",city:"Плевен",subjects:["en","daily"],ageFrom:2,ageTo:8,exp:{autism:2,down:2},formats:["presential","online"],price:21,times:["wda","wde"],rating:0,reviews:0,skills:["visual","nonverbal"],interests:["пеене","танци"],ph:null,verified:false,
  edu:"Софийски университет, английска филология",work:"частен педагог, работя с деца у дома",
  bio:"Нов съм на платформата. Учим английски през песни, игри и ежедневни фрази.",ageExp:{"1-4":2,"5-7":2}},
 {id:27,name:"Радостин Е.",city:"Русе",subjects:["science","nvo"],ageFrom:6,ageTo:12,exp:{autism:4,down:0},formats:["presential"],price:22,times:["wde","we"],rating:4.5,reviews:6,skills:["routine"],interests:["фотография","туризъм"],ph:null,verified:false,
  edu:"Русенски университет „Ангел Кънчев“, биология",work:"учител по биология",
  bio:"Опитите и снимките са основата на урока. Винаги оставяме време да разгледаме резултата заедно.",ageExp:{"5-7":3,"8-12":4}},
 {id:28,name:"Лилия М.",city:"Стара Загора",subjects:["math","daily"],ageFrom:1,ageTo:6,exp:{autism:0,down:6},formats:["presential"],price:17,times:["wdm","wda"],rating:4.6,reviews:8,skills:["visual","routine"],interests:["градинарство","пъзели"],ph:null,verified:true,
  edu:"Тракийски университет, начална училищна педагогика",work:"ресурсен учител в начално училище",
  bio:"Броим с конкретни предмети: монети, пръчици, зарчета. Всяко броене започва с нещо, което се вижда и пипа.",ageExp:{"1-4":6,"5-7":2}},
 {id:29,name:"Константин Д.",city:"Велико Търново",subjects:["en","bg"],ageFrom:4,ageTo:10,exp:{autism:3,down:0},formats:["online"],price:29,times:["wde","we"],rating:4.8,reviews:10,skills:["short","routine"],interests:["театър","четене"],ph:null,verified:false,
  edu:"Великотърновски университет „Св. св. Кирил и Методий“, английска филология",work:"учител по английски език",
  bio:"Учим по сценарии: кратък диалог, после роля. Ако детето се притеснява, започваме с думи, които харесва.",ageExp:{"1-4":1,"5-7":4,"8-12":3}},
 {id:30,name:"Вероника Р.",city:"София",subjects:["bg","daily","en"],ageFrom:0,ageTo:6,exp:{autism:4,down:4},formats:["presential","online"],price:35,times:["wdm","wda","we"],rating:4.9,reviews:16,skills:["visual","aac","nonverbal","sensory"],interests:["музика","рисуване"],ph:null,verified:true,
  edu:"Софийски университет, специална педагогика",work:"педагог в център за деца със специални нужди",
  bio:"Работя с картинна комуникация и музика. Всяко дете има свой начин да каже „да“ и „не“, и го уважавам.",ageExp:{"1-4":8,"5-7":3}},
 {id:31,name:"Андрей Б.",city:"Бургас",subjects:["math","daily"],ageFrom:2,ageTo:8,exp:{autism:2,down:1},formats:["presential"],price:15,times:["wda","we"],rating:3.9,reviews:2,skills:["sensory","short"],interests:["плуване","колоездене"],ph:null,verified:false,
  edu:"Бургаски свободен университет, математика",work:"частен педагог, работя с деца у дома",
  bio:"Пазаруваме заедно в час: пари, мерки, рецепти. Учим, докато правим нещо полезно.",ageExp:{"1-4":3,"5-7":3}},
 {id:32,name:"Таня Ш.",city:"Разлог",subjects:["bg","en","science"],ageFrom:1,ageTo:8,exp:{autism:3,down:3},formats:["online"],price:20,times:["wda","wde"],rating:4.4,reviews:4,skills:["visual","short"],interests:["животни","природа и разходки"],ph:null,verified:false,
  edu:"Софийски университет, български език",work:"учител в начален етап",
  bio:"Четем книги за животни и говорим за тях. Онлайн уроците са кратки, с по една картинка на всяка стъпка.",ageExp:{"1-4":4,"5-7":3,"8-12":0}},
 {id:33,name:"Стефан Ц.",city:"Банско",subjects:["math","science"],ageFrom:4,ageTo:10,exp:{autism:1,down:2},formats:["presential","online"],price:25,times:["wde","we"],rating:4.7,reviews:9,skills:["routine","visual"],interests:["туризъм","фотография"],ph:null,verified:false,
  edu:"Пловдивски университет „Паисий Хилендарски“, математика",work:"учител по математика в начален етап",
  bio:"Измерваме разстояния и височини, когато излезем навън. Математиката е навсякъде, стига да я видим.",ageExp:{"1-4":2,"5-7":3,"8-12":1}},
 {id:34,name:"Мирела П.",city:"Враца",subjects:["daily","bg"],ageFrom:0,ageTo:5,exp:{autism:0,down:5},formats:["presential"],price:19,times:["wdm","we"],rating:4.3,reviews:5,skills:["visual","short","nonverbal"],interests:["рисуване","готвене"],ph:null,verified:false,
  edu:"Софийски университет, предучилищна педагогика",work:"учител в подготвителна група",
  bio:"Рисуваме, готвим и четем кратки текстове. Всичко се повтаря, защото повторението е половината от ученето.",ageExp:{"1-4":5}},
 {id:35,name:"Борислав Н.",city:"Пловдив",subjects:["nvo","math","science"],ageFrom:7,ageTo:12,exp:{autism:6,down:0},formats:["online"],price:33,times:["wde","we"],rating:4.9,reviews:13,skills:["routine","visual","short"],interests:["шах","пъзели"],ph:null,verified:true,
  edu:"Пловдивски университет „Паисий Хилендарски“, математика",work:"педагог в център за деца със специални нужди",
  bio:"Подготовка за НВО с ясен план за всяка седмица. Преди първия урок искам да знам какви задачи трудно се решават.",ageExp:{"5-7":2,"8-12":8}},
 {id:36,name:"Симона Г.",city:"Благоевград",subjects:["en","nvo"],ageFrom:6,ageTo:12,exp:{autism:2,down:0},formats:["presential"],price:23,times:["wde"],rating:4.1,reviews:3,skills:["routine"],interests:["четене","театър"],ph:null,verified:false,
  edu:"ЮЗУ „Неофит Рилски“, английска филология",work:"учител по английски език",
  bio:"Работя с учебници и с разговори за прочетеното. Всеки урок има ясна цел за този ден.",ageExp:{"5-7":2,"8-12":3}},
 {id:37,name:"Калоян Ж.",city:"Варна",subjects:["bg","math"],ageFrom:1,ageTo:5,exp:{autism:1,down:1},formats:["presential"],price:16,times:["wdm","wda"],rating:0,reviews:0,skills:["visual"],interests:["футбол","автомобили"],ph:null,verified:false,
  edu:"Варненски свободен университет „Черноризец Храбър“, начално образование",work:"учител в подготвителна група",
  bio:"Нов съм на платформата. Работя с картинки, кола и топка, защото децата това обичат.",ageExp:{"1-4":2}},
 {id:38,name:"Йорданка С.",city:"Русе",subjects:["daily","science"],ageFrom:2,ageTo:7,exp:{autism:4,down:2},formats:["online","presential"],price:26,times:["wda","wde"],rating:4.6,reviews:7,skills:["visual","sensory","routine"],interests:["градинарство","животни"],ph:null,verified:true,
  edu:"Русенски университет „Ангел Кънчев“, биология",work:"учител по природни науки",
  bio:"Засаждаме семена и ги следим всяка седмица. Ако детето се уморява, спираме и гледаме растенията.",ageExp:{"1-4":4,"5-7":3}}
];

const classLabel=c=>c==0?"подготвителна група":c+". клас";
const bandOf=c=>c<=4?"1-4":(c<=7?"5-7":"8-12");
const bandLabel={"1-4":"1.-4. клас","5-7":"5.-7. клас","8-12":"8.-12. клас"};

/* Тежести на съвпадението (сумата се нормализира до 100). Времето на отговор не се оценява. */
const WEIGHTS = {need:25,support:10,age:25,price:15,reviews:15,interests:10};

function hardFilter(q,t){
  if(!t.subjects.includes(q.subject)) return "не преподава избрания предмет";
  if(q.cls<t.ageFrom||q.cls>t.ageTo) return "не работи с този клас";
  if(!q.times.some(x=>t.times.includes(x))) return "няма съвпадащи часове";
  const wantsP=q.format==="presential"||q.format==="any", wantsO=q.format==="online"||q.format==="any";
  const okP=wantsP&&t.formats.includes("presential")&&t.city===q.city;
  const okO=wantsO&&t.formats.includes("online");
  if(okP||okO) return null;
  if(q.format==="online") return "не предлага онлайн";
  if(!t.formats.includes("presential")) return "не предлага присъствено обучение";
  return "е в друго населено място";
}

/* Общите интереси (хоби на педагога и интереси на детето). */
function commonInterests(q,t){
  return (q.interests||[]).filter(x=>(t.interests||[]).includes(x));
}

/* Критериите, които не могат да се оценят, се пропускат и тежестите се мащабират до 100. */
function score(q,t){
  const r=[];const parts=[];
  const y=q.need==="other"?0:(t.exp[q.need]||0);
  if(q.need!=="other"){
    parts.push([WEIGHTS.need,Math.min(y/5,1)]);
    if(y>0) r.push(`Има ${y} ${y==1?"година":"години"} опит с деца ${q.need==="autism"?"с аутизъм":"със синдром на Даун"}.`);
  }
  const want=q.support||[];const have=want.filter(k=>t.skills.includes(k));
  if(want.length){ parts.push([WEIGHTS.support,have.length/want.length]); have.forEach(k=>r.push(SUPPORT[k]+".")); }
  const ya=t.ageExp[bandOf(q.cls)]||0;
  parts.push([WEIGHTS.age,Math.min(ya/6,1)]);
  if(ya>0) r.push(`Работи ${ya} ${ya==1?"година":"години"} с ученици от ${bandLabel[bandOf(q.cls)]}.`);
  const pv=t.price<=q.budget ? 0.6+0.4*(q.budget-t.price)/q.budget : Math.max(0,0.4-(t.price-q.budget)/q.budget);
  parts.push([WEIGHTS.price,pv]);
  r.push(t.price<=q.budget?`Цената (${t.price} € на час) е в рамките на бюджета ви.`:`Цената (${t.price} € на час) е малко над бюджета ви.`);
  if(t.reviews>0){
    parts.push([WEIGHTS.reviews,Math.max(0,Math.min(1,(t.rating-3)/2))*Math.min(t.reviews/8,1)]);
    r.push(`Оценка ${t.rating.toString().replace(".",",")} от ${t.reviews} отзива на родители.`);
  }
  const common=commonInterests(q,t);
  if(common.length){ parts.push([WEIGHTS.interests,Math.min(common.length/2,1)]); r.push(`И двамата обичате: ${common.join(", ")}.`); }
  const timeNames=q.times.filter(x=>t.times.includes(x)).map(x=>TIMES[x].toLowerCase());
  r.unshift(`Преподава ${SUBJECTS[q.subject].toLowerCase()} и има свободни часове: ${timeNames.join(", ")}.`);
  const chips=[];
  chips.push({t:SUBJECTS[q.subject],ok:true});
  if(q.need!=="other") chips.push({t:NEEDS[q.need].replace(/ \(.*\)/,""),ok:y>0});
  want.forEach(k=>chips.push({t:SUPPORT[k].replace(/ \(.*\)/,""),ok:t.skills.includes(k)}));
  common.forEach(x=>chips.push({t:x,ok:true,green:true}));
  chips.push({t:t.price<=q.budget?"В бюджета":"Над бюджета",ok:t.price<=q.budget});
  const total=parts.reduce((a,p)=>a+p[0],0);
  const s=parts.reduce((a,p)=>a+p[0]*p[1],0);
  return {pct:Math.round(100*s/total),reasons:r,chips,common};
}

function runMatch(q){
  const kept=[],dropped=[];
  TEACHERS.forEach(t=>{const why=hardFilter(q,t); if(why) dropped.push({t,why}); else kept.push({t,...score(q,t)});});
  kept.sort((a,b)=>b.pct-a.pct);
  return {top:kept.slice(0,5),kept,dropped};
}

/* Примерни съобщения за демото (от sessionStorage се добавят нови). */
const DEMO_THREADS = [
 {id:"t1",with:"Мария Д.",teacher:1,last:"Може ли пробен урок във вторник?",msgs:[
   {from:"parent",text:"Здравейте, видях профила ви. Може ли пробен урок във вторник след 17:00?"},
   {from:"teacher",text:"Здравейте! Във вторник 17:30 ми е свободно. Ще ви изпратя потвърждение по имейла."}]},
 {id:"t2",with:"Ралица К.",teacher:5,last:"Благодаря, ще се видим в четвъртък.",msgs:[
   {from:"parent",text:"Здравейте, интересуваме се от английски на онлайн."},
   {from:"teacher",text:"Благодаря, че ни пишете. Четвъртък 16:00 е свободно."},
   {from:"parent",text:"Благодаря, ще се видим в четвъртък."}]}
];

/* „Нещо, което е хубаво да знаеш за мен“: кратко, от първо лице, по интересите на педагога. */
TEACHERS.forEach(t=>{
  t.about=`Свободното си време прекарвам с ${t.interests.join(" и ")}. Ако детето обича нещо от тези неща, ще го използвам в урока.`;
});

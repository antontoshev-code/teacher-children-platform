// Тест на правилата за съвпадение. Без зависимости: node tests/matching.test.js
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const src = fs.readFileSync(path.join(__dirname, "..", "prototype", "js", "data.js"), "utf8");
const api = new Function(src + "\nreturn {TEACHERS, CITIES, WEIGHTS, runMatch, hardFilter, score, commonInterests};")();
const { TEACHERS, CITIES, WEIGHTS, runMatch, hardFilter, score, commonInterests } = api;

// Родител: математика, 4. клас, аутизъм, присъствено, Благоевград, делнични вечери
const q = { city: "Благоевград", subject: "math", cls: 4, need: "autism", format: "presential", budget: 25, times: ["wde"], support: [], interests: [] };

// 1. Резултатите са непразни и подредени по процент
const r = runMatch(q);
assert.ok(r.top.length > 0, "няма подходящи педагози");
r.top.forEach((m, i) => {
  assert.ok(m.pct >= 0 && m.pct <= 100, "процент извън 0-100");
  if (i > 0) assert.ok(r.top[i - 1].pct >= m.pct, "не е подредено по процент");
});

// 2. Причина за отпадане: онлайн педагог, родителят иска присъствено
const onlineOnly = { ...q, city: "Пловдив", cls: 9, times: ["wde"], format: "presential" };
assert.strictEqual(hardFilter(onlineOnly, TEACHERS.find(t => t.id === 6)), "не предлага присъствено обучение");

// 3. Причина „е в друго населено място“ при присъствен педагог в друг град
assert.strictEqual(hardFilter(q, TEACHERS.find(t => t.id === 7)), "е в друго населено място");

// 4. Общи интереси: показват се само когато има общо, и без „няма“
const t2 = TEACHERS.find(t => t.id === 2);                 // интереси: шах, автомобили, футбол
const withChess = score({ ...q, interests: ["шах"] }, t2);
assert.deepStrictEqual(withChess.common, ["шах"]);
assert.ok(withChess.reasons.some(x => x === "И двамата обичате: шах."), "липсва причината за общ интерес");
const noCommon = score({ ...q, interests: ["танци"] }, t2);
assert.deepStrictEqual(noCommon.common, []);
assert.ok(!noCommon.reasons.some(x => /общ|няма/i.test(x) && /интерес|обичате/i.test(x)), "не трябва да се пише за липса на общи интереси");
assert.ok(!noCommon.chips.some(c => c.green), "не трябва да има зелени чипове без общи интереси");

// 5. Общият интерес увеличава процента (с тежест 10 от 100)
assert.ok(withChess.pct >= noCommon.pct, "общ интерес не трябва да намалява процента");

// 6. Времето на отговор вече не е критерий: няма такава тежест и такива причини
assert.strictEqual(WEIGHTS.response, undefined, "тежестта за време на отговор трябва да е премахната");
TEACHERS.forEach(t => {
  const s = score(q, t);
  assert.ok(!s.reasons.some(x => /отговаря/i.test(x)), "не трябва да има обещание за време на отговор");
});

// 7. Всички градове от списъка се използват и всеки предмет има поне 2 педагога
CITIES.forEach(c => assert.ok(TEACHERS.some(t => t.city === c), "град без педагог: " + c));
["math", "bg", "en", "science", "nvo", "daily"].forEach(s => {
  assert.ok(TEACHERS.filter(t => t.subjects.includes(s)).length >= 2, "малко педагози за предмет " + s);
});
assert.ok(TEACHERS.length >= 36, "нужни са поне 36 примерни профила");

// 8. Проценти са в 0-100 за всички педагози
TEACHERS.forEach(t => {
  const s = score(q, t);
  assert.ok(s.pct >= 0 && s.pct <= 100, "процент извън 0-100 за " + t.name);
});

console.log("matching tests: ok (" + TEACHERS.length + " profiles)");

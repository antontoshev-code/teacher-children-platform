// Тест на правилата за съвпадение. Без зависимости: node tests/matching.test.js
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const src = fs.readFileSync(path.join(__dirname, "..", "prototype", "js", "data.js"), "utf8");
const api = new Function(src + "\nreturn {TEACHERS, runMatch, hardFilter, score};")();
const { TEACHERS, runMatch, hardFilter, score } = api;

// Родител: математика, 4. клас, аутизъм, присъствено, Благоевград, делнични вечери
const q = { city: "Благоевград", subject: "math", cls: 4, need: "autism", format: "presential", budget: 25, times: ["wde"], support: [] };

// 1. Първият педагог е Мария Д. и причината за опит е написана на ясен език
const r = runMatch(q);
assert.strictEqual(r.top[0].t.name, "Мария Д.", "първият педагог трябва да е Мария Д.");
assert.ok(r.top[0].reasons.includes("Има 6 години опит с деца с аутизъм."), "липсва причината за опит с аутизъм");
assert.ok(r.top[0].pct >= 80 && r.top[0].pct <= 100, "процентът е извън 0-100 или е твърде нисък");

// 2. Процентите са в 0-100 и подредени низходящо
r.top.forEach((m, i) => {
  assert.ok(m.pct >= 0 && m.pct <= 100, "процент извън 0-100");
  if (i > 0) assert.ok(r.top[i - 1].pct >= m.pct, "не е подредено по процент");
});

// 3. Причината за отпадане: онлайн педагог в същия град, но родителят иска присъствено
const onlineOnly = { ...q, city: "Пловдив", cls: 9, times: ["wde"], format: "presential" };
assert.strictEqual(hardFilter(onlineOnly, TEACHERS.find(t => t.id === 6)), "не предлага присъствено обучение");

// 4. Причината „е в друго населено място“ при присъствен педагог в друг град
assert.strictEqual(hardFilter(q, TEACHERS.find(t => t.id === 7)), "е в друго населено място");

// 5. Без уточнения и без отзиви критериите не носят безплатни точки: процентът се мащабира
const bare = score({ ...q, need: "other", support: [] }, TEACHERS.find(t => t.id === 16)); // без отзиви
assert.ok(bare.pct >= 0 && bare.pct <= 100);
const noSupport = score({ ...q, support: [] }, TEACHERS[0]);
const withSupport = score({ ...q, support: ["visual"] }, TEACHERS[0]);
assert.ok(withSupport.pct >= noSupport.pct, "съвпадащо уточнение не трябва да намалява процента");

console.log("matching tests: ok");

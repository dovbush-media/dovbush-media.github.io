---
title: "Як перетворити World of Warcraft: WotLK на соло RPG з ботами: повний гайд"
description: "Детальна інструкція зі встановлення та налаштування власного сервера WoW 3.3.5a з модулем індивідуального прогресу та розумними ботами."
date: 2026-03-19T10:35:00.000+02:00
layout: post
cover: https://lh3.googleusercontent.com/u/0/d/1KZ0RPaDbgoTrBCs-r_PrKhwChocuBtEx
category: Гайди
excerpt: "Завжди мріяли пройти шлях героя в WoW наодинці? Дізнайтеся, як налаштувати сервер з Playerbots та системою прогресії від Vanilla до WotLK."
tags: [World of Warcraft, WotLK, AzerothCore, Solo RPG, Гайд, Геймдев]
---

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="https://lh3.googleusercontent.com/u/0/d/1KZ0RPaDbgoTrBCs-r_PrKhwChocuBtEx" style="width: 400px; max-width: 100%;">
</div>

<p><span>&nbsp;&nbsp;&nbsp;</span>Завжди мріяли спокійно зачистити класичні рейди та підземелля World of Warcraft, але не хочете залежати від інших гравців чи шукати гільдію? Тут я покажу, як перетворити Wrath of the Lich King на повноцінну соло RPG з розумними ботами та унікальною системою індивідуального прогресу!</p>
<p><span>&nbsp;&nbsp;&nbsp;</span>У цій збірці є ще безліч фішок: спеціальні NPC для трансмогріфікації, скидання КД рейдів, модуль автопродажу сміття (Junk-to-gold) та багато іншого. Які не ламають оригінальний досвід, а лише трохи покращують життя.</p>

<h2>💻 Встановлення</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Нам знадобляться три речі:</p>
<ul>
  <li><strong>Сам "Repack" сервера, беремо AzerothCore WoTLK Repack збірка Aldebaraan</strong><span>&nbsp;</span><i><a href="https://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-emulator-servers/wow-emu-general-releases/1040387-azerothcore-wotlk-repack-playerbots-individual-progression-32-other-modules.html?__cf_chl_rt_tk=GFn0hgAAKcQTIqlFTm7GdPmkF4OlfHun38ypXnwBxbg-1772889333-1.0.1.1-o5lhzBgk0m_bPBZFiPiThp7EPPFrZrYJ8I2TQIJ0gYw" target="_blank"><span style="color: red;">Скачуємо тут!</span></a></i> (можна обрати версію з індивідуальним прогресом або без)</li>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="https://lh3.googleusercontent.com/u/0/d/1hZR_W_dTyeYuzPC_ES1fhkF7RKHQvPBx" style="width: 400px; max-width: 100%;">
  </div>
  <li><strong>Файли даних (Data files)</strong><span>&nbsp;</span>Беремо найновішу доступну версію</li>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="https://lh3.googleusercontent.com/u/0/d/1GrgQx_i1wEfQG5dcfoaaiWy3kNBZjLm1" style="width: 400px; max-width: 100%;">
  </div>
  <li><strong>Ігровий клієнт версії 3.3.5a.</strong><span>&nbsp;</span>Я особисто використовую <i><a href="https://www.chromiecraft.com/en/downloads/" target="_blank"><span style="color: red;">Chromiecraft</span></a></i>, але підійде і будь який інший. Також можна використовувати HD-клієнт.</li>
</ul>

<h2>📂 Встановлення сервера</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Розпаковуємо наш сервер у зручне місце. Я скачував версію з індивідуальною прогресією, тож у моєму випадку буде C:\Server WOW\Azerothcore WoTLK Repack (Playerbots + Individual Progression) (2026-01-04) - Далі "C:\Azerothcore WoTLK\"</p>
<ul>
  <li><strong>Відкриваємо папку "C:\Azerothcore WoTLK\data" (якщо немає створюємо)</strong><span>&nbsp;</span>і розархівовуємо туди завантажений архів файлів даних "Data". У вас має вийти папка розміром близько 3 гігабайт. Після цього розпаковуємо архів з оновленнями (Автор заявляє оновлення кожні 6 тижнів) прямо в папку сервера і погоджуємося на заміну всіх файлів. Якщо скачуєте вперше, то оновлювати не потрібно.</li>
  <li><strong>Сервер майже готовий!</strong><span>&nbsp;</span>Перед запуском, зробимо ще декілька налаштувань (необов'язково).</li>
</ul>

<h2>⚙️ Опціональні патчі (можна і без них)</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Додаткові файли містять для індивідуальної прогресії, повертають старі витрати мани на заклинання та класичні реагенти для професій. Тобто все як було у ванілі. Потребують спеціального патча для для сервера і для клієнта. <i><a href="https://github.com/ZhengPeiRu21/mod-individual-progression/releases/download/20260309/ModIndividualProgressionPreview.7z" target="_blank"><span style="color: red;">Скачуємо архів тут!</span></a></i></p>
<ul>
  <li><strong>Розпакуйте ModIndividualProgressionPreview.7z</strong><span>&nbsp;</span>у будь-яку папку (для розпакування 7z-архіву потрібен 7-zip)</li>
  <li><strong>Розпакуйте з папки ModIndividualProgressionPreview ще один архів dbc.7z</strong><span>&nbsp;</span>файли .dbc закидаємо в папку "C:\Azerothcore WoTLK\data\dbc" сервера (із заміною)</li>
  <li><strong>Розпакуйте з папки ModIndividualProgressionPreview ще два архіва patch-S.7z та patch-V.7z</strong><span>&nbsp;</span> Файли .mpq (наприклад, Patch-V для класичної мани) — у папку "C:\ChromieCraft_3.3.5a\Data" вашого клієнта.</li>
</ul>

<h2>🤖 Боти та оптимізація</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Щодо наших вірних напарників-ботів — вони вже на сервері! Але потрібно оптимізувати їхню кількість, якщо у вас слабкий ПК, або просто не хочете нагружати комп'ютер. Усі налаштування ботів проводяться тут: "C:\Azerothcore WoTLK\configs\modules\playerbots.conf"</p>
<ul>
  <li><strong>Як включити або виключити їх?</strong><span>&nbsp;</span>AiPlayerbot.Enabled = 0 - виключено, AiPlayerbot.Enabled = 1 - включено.</li>
  <li><strong>Як збільшити або зменшити ботів? (Спавнить рандомно від 600 до 800 ботів)</strong><span>&nbsp;</span>AiPlayerbot.MinRandomBots = 600 (Для слабких ПК ставимо 50-100), AiPlayerbot.MaxRandomBots = 800 (Для слабких ПК ставимо 100-150)</li>
  <li><strong>Пам'ятайте:</strong><span>&nbsp;</span>більше ботів = більше навантаження на вашу оперативну пам'ять та процесор.(Мій ноутбук (GTX 1650, Ryzen 5 5500u, 16 GB RAM) чудово справляється із 600 ботами)</li>
</ul>

<h2>🛠️ Налаштування сервера</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Усі налаштування сервера проводяться тут: "C:\Azerothcore WoTLK\configs\worldserver.conf". Будь які зміни проводимо коли сервер виключено!</p>
<ul>
  <li><strong>Якщо слабкий ПК</strong><span>&nbsp;</span>шукаємо параметр MapUpdate.Threads і встановіть значення 2 або 3.</li>
  <li><strong>Змінюємо XP Rate (За замовчуванням стоїть x1 як в оригіналі)</strong><span>&nbsp;</span>Шукаємо параметри: Rate.XP.Kill, Rate.XP.Quest, Rate.XP.Quest.DF, Rate.XP.Explore, Rate.XP.Pet (Ставимо швидкість прокачки на ваш вибір від 1 до 100)</li>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="https://lh3.googleusercontent.com/u/0/d/1xjYZsfRnNq6ShF3SatfDcp0WiFFtfkiR" style="width: 400px; max-width: 100%;">
  </div>
  <p><span>&nbsp;&nbsp;&nbsp;</span>У файлі багато налаштувань, тож є над чим посидіти.</p>
</ul>

<h2>🤖 Запуск сервера</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Запуск завжди проводимо через файл C:\Azerothcore WoTLK\Start Server.bat. Можемо зробити ярлик на робочий стіл.</p>
<ul>
  <li><strong>Відкривається вікно терміналу.</strong><span>&nbsp;</span>Тут прописуємо англійську літеру "y" і натискаємо Enter. Чекаємо, поки сервер завантажиться — ви почуєте характерний звуковий сигнал. 🔔</li>
  <li><strong>Створюємо акаунт:</strong><span>&nbsp;</span>Коли все загрузилось, прямо у вікні worldserver пишемо команду: "account create [Ім'я] [Пароль]". Приклад: "account create test test1"</li>
  <li><strong>Щоб видати собі права адміністратора (GM):</strong><span>&nbsp;</span>У цьому ж вікні worldserver пишемо команду: "account set gmlevel [Ім'я] 3 1". Приклад: "account set gmlevel test 3 1"</li>
  <li><strong>Останній штрих перед входом:</strong><span>&nbsp;</span>У папці з грою знаходимо файл C:\ChromieCraft_3.3.5a\Data\enUS\realmlist.wtf, відкриваємо його і замінюємо весь текст на: "set realmlist 127.0.0.1"</li>
  <p><span>&nbsp;&nbsp;&nbsp;</span>Усе, можна заходити в гру!</p>
</ul>

<h2>🛑 Важливо:</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Дуже важливий момент: ніколи не закривайте сервер просто "хрестиком", інакше пошкодите базу даних! Щоб безпечно вимкнути сервер необхідно:</p>
<ul>
  <li><strong>У worldserver.exe</strong><span>&nbsp;</span>натисніть Ctrl+C і чекайте закриття.</li>
  <li><strong>В authserver.exe</strong><span>&nbsp;</span>натисніть Ctrl+C і чекайте закриття.</li>
  <li><strong>В mysql</strong><span>&nbsp;</span>натисніть Ctrl+C двічі.</li>
  <li><strong>У вікні терміналу запуску</strong><span>&nbsp;</span>натисніть Ctrl+C і пропишіть англійську букву "Y" та чекайте закриття.</li>
  <p><span>&nbsp;&nbsp;&nbsp;</span>Ctrl+C може зразу не спрацювати, тож нажимайте поки не закриється. Процес закриття менше 1 хв.</p>
</ul>

<h2>🧙‍♂️ Команди для виклику НПС</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Весь перелік команд є <i><a href="https://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-emulator-servers/wow-emu-general-releases/1040387-azerothcore-wotlk-repack-playerbots-individual-progression-32-other-modules.html?__cf_chl_rt_tk=GFn0hgAAKcQTIqlFTm7GdPmkF4OlfHun38ypXnwBxbg-1772889333-1.0.1.1-o5lhzBgk0m_bPBZFiPiThp7EPPFrZrYJ8I2TQIJ0gYw" target="_blank"><span style="color: red;">На сторінці Repack</span></a></i>. Для виклику НПС: у грі станьте у підходяще місце, де в майбтньому буде розміщений НПС, та вводити команди в ігровому чаті. Основні НПС:</p>
<ul>
  <li><strong>Трансмогрифікація:</strong><span>&nbsp;</span>.npc add 190010</li>
  <li><strong>Скидання підземелля/рейду:</strong><span>&nbsp;</span>.npc add 300000</li>
  <li><strong>Чарівник:</strong><span>&nbsp;</span>.npc add 601015</li>
  <li><strong>Гільдхаус:</strong><span>&nbsp;</span>.npc add 500030</li>
  <p><span>&nbsp;&nbsp;&nbsp;</span>Щоб видалити NPC, виберіть його та введіть: .npc delete</p>
  <p><span>&nbsp;&nbsp;&nbsp;</span>Весь перелік GM команд(Збільшити рівень, безсмерття і тд.): <i><a href="https://www.azerothcore.org/wiki/gm-commands" target="_blank"><span style="color: red;">Тут!</span></a></i></p>
</ul>

<h2>💾 База даних</h2>
<p><span>&nbsp;&nbsp;&nbsp;</span>Так, ви можете також змінювати, додавати власні предмети, певні характеристики, босів, персонажів (раса, клас) та багато іншого, залізши у базу даних. Тут в нагоді стане програма: <i><a href="https://github.com/HeidiSQL/HeidiSQL/releases/tag/v12.16" target="_blank"><span style="color: red;">HeidiSQL</span></a></i>. Щоб зайти в базу даних нашого сервера, скачуємо та відкриваємо програму. Всі зміни проводимо коли сервер запущений!</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="https://lh3.googleusercontent.com/u/0/d/1vnqgjmNnYL4bfaCTv0ZDIOH5vrYo2ViS" style="width: 400px; max-width: 100%;">
  </div>
<p><span>&nbsp;&nbsp;&nbsp;</span>Тепер ваш особистий Азерот готовий до пригод! Якщо виникнуть питання по налаштуванню — пишіть у коментарях. 👇✨</p>

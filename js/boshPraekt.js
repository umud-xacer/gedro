function setLanguage() {
    setLang(document.getElementById("langTan").value)
}

function setLang(lang) {
    console.log(lang);
    if (lang === "english") {

        !!document.getElementById("bosh") ? document.getElementById("bosh").innerText = "Homepage" : "";
        !!document.getElementById("loy") ? document.getElementById("loy").innerText = "Projects" : "";
        !!document.getElementById("hud") ? document.getElementById("hud").innerText = "Territory" : "";
        !!document.getElementById("til") ? document.getElementById("til").innerText = "Language":"";
        !!document.getElementById("sayt") ? document.getElementById("sayt").innerText = "About the site":"";
        !!document.getElementById("muhan") ? document.getElementById("muhan").innerText = "Engineering Hydro Energetics":"";
        !!document.getElementById("malumot") ? document.getElementById("malumot").innerText = "It was possible to build micro and small hydroelectric power stations, to produce electricity for own needs and business":"";
        !!document.getElementById("uzbe") ? document.getElementById("uzbe").innerText = "According to the decree of the President of the Republic of Uzbekistan dated September 9, 2022 On additional measures for the introduction of energy-saving technologies and the development of small-capacity renewable energy sources No. PF-220, hydropower Uzbekhydroenergo JSC is consistently working to ensure the implementation of the clauses related to the direction. holding meetings, open dialogues, promotional activities in Namangan, Fergana, Samarkand, Kashkadarya, Surkhondarya and Tashkent regions for business subjects who want to become involved and the necessary information for the implementation of the project During the promotional events, entrepreneurs and applicants were provided with the necessary information, relevant explanations were given through a special video clip, slides and handouts related to the essence of the Decree, and the facilities created for the representatives of the private sector in our country regarding the further development of hydropower were introduced. for information: land areas for the construction of micro and small hydroelectric power plants are leased to entrepreneurs free of charge for a period of at least 20 years. will pay in the amount of 50 percent of the established rates. Starting from October 1, 2022, the electricity produced at hydroelectric power plants with a capacity of up to 5 MW will be guaranteed by JSC Territorial Electric Networks and the body entrusted with the function (authority) of purchasing electricity by the state will be purchased. The initiators of the project on the construction of hydroelectric power plants with a capacity of up to 5 MW  (hereinafter referred to as the project initiators) will be determined based on the results of the electronic auction on the reduction of the tariff for the purchase of produced electricity held on the electronic trading platform E-Auction based on the order of the Ministry of Energy. In this case, the initial price is 150 percent for hydroelectric power plants with a capacity of up to 500 kW compared to the tariff set for consumers of the II group; 120 percent for hydroelectric power plants with a capacity of 500 kW to 2 MW; 100 percent is set for hydroelectric power plants with a capacity of 2 MW to 5 MW":"";
        !!document.getElementById("mgl") ? document.getElementById("mgl").innerText = "It is planned to be built in our country":"";
        !!document.getElementById("yan") ? document.getElementById("yan").innerText = "News":"";
        !!document.getElementById("jor") ? document.getElementById("jor").innerText = "Current projects":"";
        !!document.getElementById("aj1") ? document.getElementById("aj1").innerText = "Uzbekhydroenergo JSC is planning to commission 7 projects with a total capacity of 197 MW in 2023.":"";
        !!document.getElementById("aj2") ? document.getElementById("aj2").innerText = "In this regard, 3 projects (188.6 MW) within the framework of the Investment Program:":"";
        !!document.getElementById("aj3") ? document.getElementById("aj3").innerText = "1. Modernization of Topolang HPP (175 MW);":"";
        !!document.getElementById("aj4") ? document.getElementById("aj4").innerText = "2. Construction of Shaudar HPP (7.2 MW);":"";
        !!document.getElementById("aj5") ? document.getElementById("aj5").innerText = "3. Construction of a hydroelectric power station at picket 102+00 (6.4 MW);":"";
        !!document.getElementById("aj6") ? document.getElementById("aj6").innerText = "Also, 4 additional projects (8.2 MW):":"";
        !!document.getElementById("aj7") ? document.getElementById("aj7").innerText = "4. Shahimardon small HPP (2.0 MW);":"";
        !!document.getElementById("aj8") ? document.getElementById("aj8").innerText = "5. Construction of Ispaysoy microhydroelectric power station (0.2 MW);":"";
        !!document.getElementById("aj9") ? document.getElementById("aj9").innerText = "6. Hisorak small HPP construction (3.5 MW);":"";
        !!document.getElementById("aj10") ? document.getElementById("aj10").innerText = "7. Construction of a small hydroelectric power station (2.5 MW).":"";
        !!document.getElementById("aj11") ? document.getElementById("aj11").innerText = "Obtaining loans for construction of small hydros up to 1 MVT":"";
        !!document.getElementById("yul") ? document.getElementById("yul").innerText = "Make a visit":"";
        !!document.getElementById("ges") ? document.getElementById("ges").innerText = "Hydroelectric power plants planned to be built in our republic are located in regions":"";
        !!document.getElementById("sayha") ? document.getElementById("sayha").innerText = "About the site":"";
        !!document.getElementById("busa") ? document.getElementById("busa").innerText = "This site provides news about Gido Energetika":"";
        !!document.getElementById("sayt12") ? document.getElementById("sayt12").innerText ="Promotes on-site small hydro projects and revenue generation through their use":"";
        !!document.getElementById("about-h4") ? document.getElementById("about-h4").innerText ="about Us":"";
        !!document.getElementById("sayt-1") ? document.getElementById("sayt-1").innerText ="The founder of the site":"";
        !!document.getElementById("loyxa") ? document.getElementById("loyxa").innerText ="Project manager":"";
        !!document.getElementById("webdas") ? document.getElementById("webdas").innerText = "Web developer":"";
        !!document.getElementById("grafik") ? document.getElementById("grafik").innerText = "Graphic designer":"";
        // !!document.getElementById("hsob") ? document.getElementById("hsob").innerText = "Calculation of the potential energy of a river or water flow intended for the construction of a small hydroelectric power station":"";
        // !!document.getElementById("formu1") ? document.getElementById("formu1").innerText = "Q - consumption of water flow":"";
        // !!document.getElementById("formu2") ? document.getElementById("formu2").innerText = "H - is the height of the water drop":"";
        // !!document.getElementById("hsob2") ? document.getElementById("hsob2").innerText = "Calculation":"";
        // !!document.getElementById("hsob3") ? document.getElementById("hsob3").innerText = "Current energy:":"";
        // !!document.getElementById("hsob4") ? document.getElementById("hsob4").innerText = "If water consumption is not known, methods of its calculation":"";
        // !!document.getElementById("hsob5") ? document.getElementById("hsob5").innerText = "1. For trapezoidal water flow.":"";
        // !!document.getElementById("formu3") ? document.getElementById("formu3").innerText = "b - the width of the water channel.":"";
        // !!document.getElementById("formu4") ? document.getElementById("formu4").innerText = "h - height of flowing water.":"";
        // !!document.getElementById("hsob6") ? document.getElementById("hsob6").innerText = "2. For triangular water flow.":"";
        // !!document>getElementById("hsob7") ? document.getElementById("hsob7").innerText = "3. For parabolic trough":"";
        // !!document.getElementById("hsob8") ? document.getElementById("hsob8").innerText = "4. For consumption of water flowing from the pipe":"";
        // !!document.getElementById("formu5") ? document.getElementById("formu5").innerText = "d- pipe diameter":"";
        // !!document.getElementById("formu6") ? document.getElementById("formu6").innerText = "v - speed of water m/s":"";
    }
    else if (lang === "russian") {
        !!document.getElementById("bosh") ? document.getElementById("bosh").innerText = "Домашняя страница":"";
        !!document.getElementById("loy") ? document.getElementById("loy").innerText = "Проекты":"";
        !!document.getElementById("hud") ? document.getElementById("hud").innerText = "Территория":"";
        !!document.getElementById("til") ? document.getElementById("til").innerText = "Язык":"";
        !!document.getElementById("sayt") ? document.getElementById("sayt").innerText = "О сайте":"";
        !!document.getElementById("muhan") ? document.getElementById("muhan").innerText = "Инженерная гидроэнергетика":"";
        !!document.getElementById("malumot") ? document.getElementById("malumot").innerText = "Можно было строить микро и малые ГЭС, производить электроэнергию для собственных нужд и бизнеса":"";
        !!document.getElementById("uzbe") ? document.getElementById("uzbe").innerText = "Согласно постановлению Президента Республики Узбекистан от 9 сентября 2022 года «О дополнительных мерах по внедрению энергосберегающих технологий и развитию маломощных возобновляемых источников энергии № ПФ-220, ГЭС АО «Узбекгидроэнерго» планомерно работает обеспечить выполнение пунктов, связанных с направлением. проведение встреч, открытых диалогов, рекламных мероприятий в Наманганской, Ферганской, Самаркандской, Кашкадарьинской, Сурхандарьинской и Ташкентской областях для субъектов бизнеса, желающих принять участие и необходимой информации для реализации проекта. В ходе рекламных мероприятий предпринимателям и заявителям были предоставлены посредством специального видеоролика, слайдов и раздаточных материалов была дана необходимая информация, соответствующие пояснения, связанные с сутью Указа, а также были представлены созданные для представителей частного сектора в нашей стране льготы по дальнейшему развитию гидроэнергетики. для справки: земельные участки под строительство микро- и малых ГЭС предоставляются предпринимателям в безвозмездную аренду на срок не менее 20 лет. будут платить в размере 50 процентов от установленных ставок. С 1 октября 2022 года электроэнергия, вырабатываемая на гидроэлектростанциях мощностью до 5 МВт, будет гарантирована АО «Территориальные электрические сети», а орган, на который возложены функции (полномочия) по закупке электроэнергии государством, будет приобретаться. Инициаторы проекта строительства гидроэлектростанций мощностью до 5 МВт (далее – инициаторы проекта) будут определены по результатам электронного аукциона по снижению тарифа на закупку произведенной электроэнергии проводится на электронной торговой площадке «Электронный аукцион» на основании приказа Минэнерго. При этом начальная цена составляет 150 процентов для гидроэлектростанций мощностью до 500 кВт по сравнению с тарифом, установленным для потребителей II группы; 120 процентов для гидроэлектростанций мощностью от 500 кВт до 2 МВт; 100 процентов установлено для гидроэлектростанций мощностью от 2 МВт до 5 МВт":"";
        !!document.getElementById("mgl") ? document.getElementById("mgl").innerText = "Планируется построить в нашей стране":"";
        !!document.getElementById("yan") ? document.getElementById("yan").innerText ="Новости":"";
        !!document.getElementById("jor") ? document.getElementById("jor").innerText = "Текущие проекты":"";
        !!document.getElementById("aj1") ? document.getElementById("aj1").innerText = "АО «Узбекгидроэнерго» в 2023 году планирует ввести в эксплуатацию 7 объектов общей мощностью 197 МВт.":"";
        !!document.getElementById("aj2") ? document.getElementById("aj2").innerText = "В связи с этим 3 проекта (188,6 МВт) в рамках Инвестиционной программы:":"";
        !!document.getElementById("aj3") ? document.getElementById("aj3").innerText = "1. Модернизация Тополангской ГЭС (175 МВт);":"";
        !!document.getElementById("aj4") ? document.getElementById("aj4").innerText = "2. Строительство Шаударской ГЭС (7,2 МВт);":"";
        !!document.getElementById("aj5") ? document.getElementById("aj5").innerText = "3. Строительство ГЭС на пикете 102+00 (6,4 МВт);":"";
        !!document.getElementById("aj6") ? document.getElementById("aj6").innerText = "Также 4 дополнительных проекта (8,2 МВт):":"";
        !!document.getElementById("aj7") ? document.getElementById("aj7").innerText = "4. Шахимардонская малая ГЭС (2,0 МВт);":"";
        !!document.getElementById("aj8") ? document.getElementById("aj8").innerText = "5. Строительство Испайсойской микроГЭС (0,2 МВт);":"";
        !!document.getElementById("aj9") ? document.getElementById("aj9").innerText = "6. Строительство Хисоракской малой ГЭС (3,5 МВт);":"";
        !!document.getElementById("aj10") ? document.getElementById("aj10").innerText = "7. Строительство малой ГЭС (2,5 МВт).":"";
        !!document.getElementById("aj11") ? document.getElementById("aj11").innerText ="Получение кредитов на строительство малых ГЭС до 1 МВт":"";
        !!document.getElementById("yul") ? document.getElementById("yul").innerText = "Ходить в гости":"";
        !!document.getElementById("ges") ? document.getElementById("ges").innerText = "ГЭС, планируемые к строительству в нашей республике, расположены в регионах":"";
        !!document.getElementById("sayha") ? document.getElementById("sayha").innerText = "О сайте":"";
        !!document.getElementById("busa") ? document.getElementById("busa").innerText = "На этом сайте представлены новости о Gido Energetika":"";
        !!document.getElementById("sayt12") ? document.getElementById("sayt12").innerText ="Способствует развитию малых гидроэлектростанций на месте и получению доходов за счет их использования.":"";
        !!document.getElementById("about-4") ? document.getElementById("about-h4").innerText ="о нас":"";
        !!document.getElementById("sayt-1") ? document.getElementById("sayt-1").innerText ="Основатель сайта":"";
        !!document.getElementById("loyxa") ? document.getElementById("loyxa").innerText ="Руководитель проекта":"";
        !!document.getElementById("webdas") ? document.getElementById("webdas").innerText = "веб-разработчик":"";
        !!document.getElementById("grafik") ? document.getElementById("grafik").innerText = "Графический дизайнер":"";
        // !!document.getElementById("hsob") ? document.getElementById("hsob").innerText = "Расчет потенциальной энергии реки или водного потока, предназначенного для строительства малой ГЭС":"";
        // !!document.getElementById("formu1") ? document.getElementById("formu1").innerText = "Q - расход расхода воды":"";
        // !!document.getElementById("formu2") ? document.getElementById("formu2").innerText = "H - высота капли воды":"";
        // !!document.getElementById("hsob2") ? document.getElementById("hsob2").innerText = "Расчет":"";
        // !!document.getElementById("hsob3") ? document.getElementById("hsob3").innerText = "Текущая энергия:":"";
        // !!document.getElementById("hsob4") ? document.getElementById("hsob4").innerText = "Если расход воды не известен, методы его расчета":"";
        // !!document.getElementById("hsob5") ? document.getElementById("hsob5").innerText = "1. Для трапецеидального потока воды.":"";
        // !!document.getElementById("formu3") ? document.getElementById("formu3").innerText = "b - ширина водного канала.":"";
        // !!document.getElementById("formu4") ? document.getElementById("formu4").innerText = "h - высота протекающей воды.":"";
        // !!document.getElementById("hsob6") ? document.getElementById("hsob6").innerText = "2. Для треугольного потока воды.":"";
        // !!document>getElementById("hsob7") ? document.getElementById("hsob7").innerText = "3. Для параболического желоба":"";
        // !!document.getElementById("hsob8") ? document.getElementById("hsob8").innerText = "4. Для потребления воды, вытекающей из трубы":"";
        // !!document.getElementById("formu5") ? document.getElementById("formu5").innerText = "d- диаметр трубы":"";
        // !!document.getElementById("formu6") ? document.getElementById("formu6").innerText = "v - скорость воды м/с":"";
    }
    else if (lang === "uzbek") {
        !!document.getElementById("bosh") ? document.getElementById("bosh").innerText = "Bosh sahifa":"";
        !!document.getElementById("loy") ? document.getElementById("loy").innerText = "Loyihalar":"";
        !!document.getElementById("hud") ? document.getElementById("hud").innerText = "Hudud":"";
        !!document.getElementById("til") ? document.getElementById("til").innerText = "Til":"";
        !!document.getElementById("sayt") ? document.getElementById("sayt").innerText = "Sayt haqida":"";
        !!document.getElementById("muhan") ? document.getElementById("muhan").innerText = "Muhandislik gidroenergetikasi":"";
        !!document.getElementById("malumot") ? document.getElementById("malumot").innerText = "Mikro va kichik GESlar qurish, o'z ehtiyojlari va biznes uchun elektr energiyasi ishlab chiqarish mumkin edi":"";
        !!document.getElementById("uzbe") ? document.getElementById("uzbe").innerText = "O‘zbekiston Respublikasi Prezidentining 2022-yil 9-sentabrdagi “Energiya tejovchi texnologiyalarni joriy etish va kichik quvvatli qayta tiklanuvchi energiya manbalarini rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi PF-220-son qaroriga asosan “O‘zbekgidroenergetika” aksiyadorlik jamiyati gidroenergetika tizimida izchil ishlar amalga oshirilmoqda. yo'nalishiga oid bandlarning bajarilishini ta'minlash. Namangan, Farg‘ona, Samarqand, Qashqadaryo, Surxondaryo va Toshkent viloyatlarida ishtirok etish istagida bo‘lgan tadbirkorlik subyektlari uchun uchrashuvlar, ochiq muloqotlar, targ‘ibot tadbirlari o‘tkazish hamda loyihani amalga oshirish uchun zarur ma’lumotlar taqdim etildi. Farmon mazmun-mohiyatiga oid maxsus videorolik, slayd va tarqatma materiallar orqali zarur ma’lumotlar, tegishli tushuntirishlar berildi, mamlakatimizda gidroenergetikani yanada rivojlantirish borasida xususiy sektor vakillari uchun yaratilgan qulayliklar bilan tanishtirildi. maʼlumot uchun: mikro va kichik gidroelektrostansiyalar qurish uchun yer maydonlari tadbirkorlarga kamida 20 yil muddatga bepul ijaraga beriladi. belgilangan stavkalarning 50 foizi miqdorida to‘laydi. 2022-yil 1-oktabrdan boshlab quvvati 5 MVt gacha bo‘lgan gidroelektr stansiyalarida ishlab chiqarilgan elektr energiyasi “Hududiy elektr tarmoqlari” aksiyadorlik jamiyati tomonidan kafolatlanadi va davlat tomonidan elektr energiyasini xarid qilish funksiyasi (organligi) yuklangan organ xarid qilinadi. 5 MVt gacha quvvatga ega GESlar qurish loyihasi tashabbuskorlari (keyingi o‘rinlarda loyiha tashabbuskorlari deb yuritiladi) sotib olish tarifini pasaytirish bo‘yicha elektron kim oshdi savdosi natijalariga ko‘ra aniqlanadi. ishlab chiqarilgan elektr energiyasi Energetika vazirligining buyrug'i asosida E-Auksion elektron savdo maydonchasida o'tkazildi. Bunda quvvati 500 kVt gacha bo‘lgan gidroelektrostansiyalar uchun dastlabki narx II guruh iste’molchilari uchun belgilangan tarifga nisbatan 150 foizni tashkil etadi; quvvati 500 kVt dan 2 MVt gacha bo‘lgan gidroelektr stansiyalar uchun 120 foiz; 2 MVt dan 5 MVt gacha bo'lgan GESlar uchun 100 foiz belgilangan":"";
        !!document.getElementById("mgl") ? document.getElementById("mgl").innerText = "Mamlakatimizda qurilishi rejalashtirilgan":"";
        !!document.getElementById("yan") ? document.getElementById("yan").innerText ="Yangiliklar":"";
        !!document.getElementById("jor") ? document.getElementById("jor").innerText = "Joriy loyihalar":"";
        !!document.getElementById("aj1") ? document.getElementById("aj1").innerText = "“O‘zbekgidroenergo” AJ 2023 yilda umumiy quvvati 197 MVt bo‘lgan 7 ta ob’ektni ishga tushirishni rejalashtirmoqda.":"";
        !!document.getElementById("aj2") ? document.getElementById("aj2").innerText = "Shu munosabat bilan Investitsiya dasturi doirasida 3 ta loyiha (188,6 MVt):":"";
        !!document.getElementById("aj3") ? document.getElementById("aj3").innerText = "1. Topolangskaya GESini modernizatsiya qilish (175 MVt);":"";
        !!document.getElementById("aj4") ? document.getElementById("aj4").innerText = "2. Shaudar GESini qurish (7,2 MVt);":"";
        !!document.getElementById("aj5") ? document.getElementById("aj5").innerText = "3. Piket 102+00 (6,4 MVt) da GES qurilishi;":"";
        !!document.getElementById("aj6") ? document.getElementById("aj6").innerText = "Shuningdek, 4 ta qoʻshimcha loyiha (8,2 MVt):":"";
        !!document.getElementById("aj7") ? document.getElementById("aj7").innerText = "4. Shohimardon kichik GESi (2,0 MVt);":"";
        !!document.getElementById("aj8") ? document.getElementById("aj8").innerText = "5. “Ispaysoyskaya” mikro GESini qurish (0,2 MVt);":"";
        !!document.getElementById("aj9") ? document.getElementById("aj9").innerText = "6. Xisorak kichik GESini qurish (3,5 MVt);":"";
        !!document.getElementById("aj10") ? document.getElementById("aj10").innerText = "7. Kichik GES qurilishi (2,5 MVt).":"";
        !!document.getElementById("aj11") ? document.getElementById("aj11").innerText ="1 MVt gacha bo'lgan kichik GESlarni qurish uchun kreditlar olish":"";
        !!document.getElementById("yul") ? document.getElementById("yul").innerText = "Tashrif buyuring":"";
        !!document.getElementById("ges") ? document.getElementById("ges").innerText = "Respublikamizda qurilishi rejalashtirilgan GESlar hududlarda joylashgan":"";
        !!document.getElementById("sayha") ? document.getElementById("sayha").innerText = "Sayt haqida":"";
        !!document.getElementById("busa") ? document.getElementById("busa").innerText = "Ushbu sayt Gido Energetika haqidagi yangiliklarni taqdim etadi":"";
        !!document.getElementById("sayt12") ? document.getElementById("sayt12").innerText ="Saytda kichik gidroelektr stansiyalar loyihalari va ulardan foydalanish orqali daromat olishni targ'ib etadi.":"";
        !!document.getElementById("about-h4") ? document.getElementById("about-h4").innerText ="Biz haqimizda":"";
        !!document.getElementById("sayt-1") ? document.getElementById("sayt-1").innerText ="Veb-sayt asoschisi":"";
        !!document.getElementById("loyxa") ? document.getElementById("loyxa").innerText ="Loyihalar bo'yicha menejer":"";
        !!document.getElementById("webdas") ? document.getElementById("webdas").innerText = "Veb dasturchi":"";
        !!document.getElementById("grafik") ? document.getElementById("grafik").innerText = "Grafik dizayner":"";
        // !!document.getElementById("hsob") ? document.getElementById("hsob").innerText = "Kichik gidroelektrostantsiyani qurish uchun mo'ljallangan daryo yoki suv oqimining potentsial energiyasini hisoblash":"";
        // !!document.getElementById("formu1") ? document.getElementById("formu1").innerText = "Q - suv oqimi tezligi":"";
        // !!document.getElementById("formu2") ? document.getElementById("formu2").innerText = "H - suv tomchilarining balandligi":"";
        // !!document.getElementById("hsob2") ? document.getElementById("hsob2").innerText = "Hisoblash":"";
        // !!document.getElementById("hsob3") ? document.getElementById("hsob3").innerText = "Hozirgi energiya:":"";
        // !!document.getElementById("hsob4") ? document.getElementById("hsob4").innerText = "Agar suv oqimi ma'lum bo'lmasa, uni hisoblash usullari":"";
        // !!document.getElementById("hsob5") ? document.getElementById("hsob5").innerText = "1. Trapezoidal suv oqimi uchun.":"";
        // !!document.getElementById("formu3") ? document.getElementById("formu3").innerText = "b - suv kanalining kengligi.":"";
        // !!document.getElementById("formu4") ? document.getElementById("formu4").innerText = "h - oqayotgan suvning balandligi.":"";
        // !!document.getElementById("hsob6") ? document.getElementById("hsob6").innerText = "2. Uchburchak suv oqimi uchun.":"";
        // !!document>getElementById("hsob7") ? document.getElementById("hsob7").innerText = "3. Parabolik truba uchun":"";
        // !!document.getElementById("hsob8") ? document.getElementById("hsob8").innerText = "4. Quvurdan oqayotgan suvni iste'mol qilish uchun":"";
        // !!document.getElementById("formu5") ? document.getElementById("formu5").innerText = "d - quvur diametri":"";
        // !!document.getElementById("formu6") ? document.getElementById("formu6").innerText = "v - suv tezligi m/s":"";
    }


}
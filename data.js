// ============================================
// POLONIA — DATA FILE
// Исторические события, традиции, временная шкала
// ============================================

// ============================================
// ИСТОРИЧЕСКИЕ СОБЫТИЯ ДЛЯ КАРТЫ
// ============================================
const MAP_EVENTS = [
  {
    id: 1, era: 'piast',
    lat: 52.408, lng: 16.934,
    type: 'capital',
    year: 966,
    title: { ru: 'Крещение Польши', pl: 'Chrzest Polski' },
    desc: {
      ru: 'Князь Мешко I принимает крещение вместе со своим двором — Польша входит в круг христианских народов Европы. Начало польской государственности.',
      pl: 'Książę Mieszko I przyjmuje chrzest wraz ze swoim dworem — Polska wchodzi do kręgu chrześcijańskich narodów Europy. Początek polskiej państwowości.'
    },
    tags: ['piast', 'religion', 'state']
  },
  {
    id: 2, era: 'piast',
    lat: 52.408, lng: 16.934,
    type: 'capital',
    year: 1000,
    title: { ru: 'Гнезненский съезд', pl: 'Zjazd Gnieźnieński' },
    desc: {
      ru: 'Германский император Оттон III прибывает в Гнезно на поклонение к мощам св. Войцеха. Польша получает архиепископство — международное признание как равного государства.',
      pl: 'Cesarz Otton III przybywa do Gniezna, aby oddać hołd relikwiom św. Wojciecha. Polska otrzymuje arcybiskupstwo — uznanie jako równorzędne państwo.'
    },
    tags: ['piast', 'diplomacy']
  },
  {
    id: 3, era: 'piast',
    lat: 50.061, lng: 19.938,
    type: 'capital',
    year: 1038,
    title: { ru: 'Краков — новая столица', pl: 'Kraków — nowa stolica' },
    desc: {
      ru: 'После разрушения Гнезно и Познани войсками чешского князя Бржетислава, столица Польши переносится в Краков на Вавельский холм.',
      pl: 'Po zniszczeniu Gniezna i Poznania przez wojska czeskiego księcia Brzetysława, stolica Polski przenosi się do Krakowa na Wawel.'
    },
    tags: ['piast', 'capital']
  },
  {
    id: 4, era: 'piast',
    lat: 51.107, lng: 17.038,
    type: 'battle',
    year: 1241,
    title: { ru: 'Битва при Легнице', pl: 'Bitwa pod Legnicą' },
    desc: {
      ru: 'Монгольское нашествие. Польско-немецкое войско разгромлено ханом Байдаром. Польша опустошена, но Западная Европа остановила продвижение монголов.',
      pl: 'Najazd mongolski. Wojska polsko-niemieckie rozgromione przez chana Bajdara. Polska spustoszona, ale Europa Zachodnia zatrzymała postęp Mongołów.'
    },
    tags: ['piast', 'battle', 'tragedy']
  },
  {
    id: 5, era: 'piast',
    lat: 50.061, lng: 19.938,
    type: 'capital',
    year: 1320,
    title: { ru: 'Коронация Владислава Локетека', pl: 'Koronacja Władysława Łokietka' },
    desc: {
      ru: 'Владислав I Локоток ("Коротышка") объединяет раздробленную Польшу и коронуется в Кракове. Начало восстановления единого Польского королевства.',
      pl: 'Władysław I Łokietek jednoczy rozbite dzielnicowo Polskę i koronuje się w Krakowie. Odbudowa Królestwa Polskiego.'
    },
    tags: ['piast', 'unity']
  },
  {
    id: 6, era: 'jagiello',
    lat: 53.432, lng: 20.106,
    type: 'battle',
    year: 1410,
    title: { ru: 'Грюнвальдская битва', pl: 'Bitwa pod Grunwaldem' },
    desc: {
      ru: 'Величайшая победа польско-литовского войска над Тевтонским орденом. Под командованием короля Ягайлы разгромлена непобедимая армия крестоносцев. Символ польской военной мощи.',
      pl: 'Największe zwycięstwo wojsk polsko-litewskich nad Zakonem Krzyżackim. Pod dowództwem króla Jagiełły rozgromiono niezwyciężoną armię krzyżacką. Symbol polskiej potęgi militarnej.'
    },
    tags: ['jagiello', 'battle', 'victory']
  },
  {
    id: 7, era: 'jagiello',
    lat: 50.061, lng: 19.938,
    type: 'culture',
    year: 1364,
    title: { ru: 'Краковский университет', pl: 'Akademia Krakowska' },
    desc: {
      ru: 'Король Казимир Великий основывает первый польский университет — Краковскую академию. Позже она станет Ягеллонским университетом и alma mater Коперника.',
      pl: 'Król Kazimierz Wielki zakłada pierwszy polski uniwersytet. Później stanie się Akademią Jagiellońską i alma mater Kopernika.'
    },
    tags: ['jagiello', 'culture', 'education']
  },
  {
    id: 8, era: 'jagiello',
    lat: 53.130, lng: 18.001,
    type: 'culture',
    year: 1473,
    title: { ru: 'Рождение Коперника', pl: 'Narodziny Kopernika' },
    desc: {
      ru: 'В Торуни рождается Николай Коперник — польский астроном, который перевернёт представления человечества о Вселенной. "И всё-таки она вертится".',
      pl: 'W Toruniu rodzi się Mikołaj Kopernik — polski astronom, który odwróci wyobrażenia ludzkości o Wszechświecie.'
    },
    tags: ['jagiello', 'culture', 'science']
  },
  {
    id: 9, era: 'rzecz',
    lat: 52.229, lng: 21.012,
    type: 'capital',
    year: 1596,
    title: { ru: 'Перенос столицы в Варшаву', pl: 'Przeniesienie stolicy do Warszawy' },
    desc: {
      ru: 'Король Сигизмунд III Ваза переносит двор из Кракова в Варшаву. Город на Висле становится столицей на следующие четыре века.',
      pl: 'Król Zygmunt III Waza przenosi dwór z Krakowa do Warszawy. Miasto nad Wisłą staje się stolicą na kolejne cztery wieki.'
    },
    tags: ['rzecz', 'capital']
  },
  {
    id: 10, era: 'rzecz',
    lat: 48.721, lng: 21.258,
    type: 'battle',
    year: 1683,
    title: { ru: 'Битва под Веной', pl: 'Bitwa pod Wiedniem' },
    desc: {
      ru: 'Король Ян III Собеский ведёт крылатых гусар против 150-тысячной османской армии. Крупнейшая кавалерийская атака в истории — Вена спасена. "Пришёл, увидел, Бог победил".',
      pl: 'Król Jan III Sobieski prowadzi husarię przeciw 150-tysięcznej armii osmańskiej. Największa szarża kawalerii w historii — Wiedeń uratowany. "Przybyłem, ujrzałem, Bóg zwyciężył".'
    },
    tags: ['rzecz', 'battle', 'victory']
  },
  {
    id: 11, era: 'rzecz',
    lat: 52.229, lng: 21.012,
    type: 'culture',
    year: 1791,
    title: { ru: 'Конституция 3 мая', pl: 'Konstytucja 3 Maja' },
    desc: {
      ru: 'Принята первая в Европе и вторая в мире конституция. Прогрессивный документ, пытавшийся спасти Польшу от раздела. Праздник отмечается до сих пор.',
      pl: 'Uchwalono pierwszą w Europie i drugą na świecie konstytucję. Postępowy dokument, który miał ocalić Polskę przed rozbiorami. Święto obchodzone do dziś.'
    },
    tags: ['rzecz', 'politics', 'constitution']
  },
  {
    id: 12, era: 'modern',
    lat: 52.229, lng: 21.012,
    type: 'battle',
    year: 1944,
    title: { ru: 'Варшавское восстание', pl: 'Powstanie Warszawskie' },
    desc: {
      ru: '63 дня героической борьбы Армии Крайовой против немецких оккупантов. 200 000 погибших. Варшава стёрта с лица земли. Трагедия, ставшая символом польского духа.',
      pl: '63 dni bohaterskiej walki Armii Krajowej przeciw niemieckim okupantom. 200 000 ofiar. Warszawa zrównana z ziemią. Tragedia, która stała się symbolem polskiego ducha.'
    },
    tags: ['modern', 'battle', 'tragedy']
  },
  {
    id: 13, era: 'modern',
    lat: 54.352, lng: 18.646,
    type: 'culture',
    year: 1980,
    title: { ru: '"Солидарность"', pl: '"Solidarność"' },
    desc: {
      ru: 'Гданьские судоверфи. Лех Валенса возглавляет первый в советском блоке независимый профсоюз "Солидарность". Начало конца коммунизма в Восточной Европе.',
      pl: 'Stocznia Gdańska. Lech Wałęsa staje na czele pierwszego w bloku sowieckim niezależnego związku zawodowego "Solidarność". Początek końca komunizmu w Europie Wschodniej.'
    },
    tags: ['modern', 'politics', 'freedom']
  },
  {
    id: 14, era: 'piast',
    lat: 52.883, lng: 14.200,
    type: 'battle',
    year: 972,
    title: { ru: 'Битва при Цедыне', pl: 'Bitwa pod Cedynią' },
    desc: {
      ru: 'Одно из первых документированных сражений польского войска. Победа Мешко I над маркграфом Годоным укрепляет западную границу молодого государства.',
      pl: 'Jedna z pierwszych udokumentowanych bitew polskiego wojska. Zwycięstwo Mieszka I nad margrabią Hodonem umacnia zachodnią granicę młodego państwa.'
    },
    tags: ['piast', 'battle', 'border']
  },
  {
    id: 15, era: 'piast',
    lat: 51.937, lng: 15.505,
    type: 'culture',
    year: 1138,
    title: { ru: 'Раздел Польши по завещанию Болеслава Кривоустого', pl: 'Testament Bolesława Krzywoustego' },
    desc: {
      ru: 'Князь делит страну между сыновьями, вводя систему удельных княжеств. Начинается период феодальной раздробленности.',
      pl: 'Książę dzieli kraj między synów, wprowadzając system dzielnicowy. Rozpoczyna się okres rozbicia dzielnicowego.'
    },
    tags: ['piast', 'politics']
  },
  {
    id: 16, era: 'piast',
    lat: 50.289, lng: 18.677,
    type: 'tragedy',
    year: 1296,
    title: { ru: 'Убийство короля Пшемысла II в Рогожно', pl: 'Zabójstwo króla Przemysła II w Rogoźnie' },
    desc: {
      ru: 'Король, попытавшийся восстановить единство Польши, гибнет от рук наёмных убийц. Страна снова погружается в анархию.',
      pl: 'Król, który próbował zjednoczyć Polskę, ginie z rąk najemnych zabójców. Kraj ponownie pogrąża się w chaosie.'
    },
    tags: ['piast', 'tragedy', 'politics']
  },
  {
    id: 17, era: 'piast',
    lat: 52.401, lng: 16.920,
    type: 'culture',
    year: 1253,
    title: { ru: 'Основание Познани как городского центра', pl: 'Lokacja Poznania na prawie magdeburskim' },
    desc: {
      ru: 'Познань получает городское право и становится одним из главных торговых центров Польши.',
      pl: 'Poznań otrzymuje prawo miejskie i staje się jednym z głównych ośrodków handlowych Polski.'
    },
    tags: ['piast', 'city', 'trade']
  },
  {
    id: 18, era: 'jagiello',
    lat: 54.190, lng: 19.990,
    type: 'battle',
    year: 1457,
    title: { ru: 'Покупка Мальборка и конец могущества ордена', pl: 'Wykupienie Malborka' },
    desc: {
      ru: 'Польский король выкупает Мальборк у наёмников Тевтонского ордена. Символический конец военного доминирования крестоносцев над Балтикой.',
      pl: 'Król polski wykupuje Malbork od zaciężnych Zakonu Krzyżackiego. Symboliczny koniec militarnej dominacji Krzyżaków nad Bałtykiem.'
    },
    tags: ['jagiello', 'battle', 'politics']
  },
  {
    id: 19, era: 'jagiello',
    lat: 50.061, lng: 19.938,
    type: 'culture',
    year: 1505,
    title: { ru: 'Конституция "Ничего о нас без нас"', pl: 'Konstytucja Nihil novi' },
    desc: {
      ru: 'Сейм в Радоме утверждает принцип, что король не может принимать законов без согласия шляхты. Польша становится "шляхетской демократией".',
      pl: 'Sejm w Radomiu ustanawia zasadę, że król nie może stanowić prawa bez zgody szlachty. Polska staje się "demokracją szlachecką".'
    },
    tags: ['jagiello', 'politics', 'constitution']
  },
  {
    id: 20, era: 'jagiello',
    lat: 54.308, lng: 18.573,
    type: 'culture',
    year: 1477,
    title: { ru: 'Первый печатник в Гданьске', pl: 'Pierwsza drukarnia w Gdańsku' },
    desc: {
      ru: 'В Польше распространяется книгопечатание. Гданьск становится важным центром гуманизма и Ренессанса.',
      pl: 'W Polsce rozwija się drukarstwo. Gdańsk staje się ważnym ośrodkiem humanizmu i renesansu.'
    },
    tags: ['jagiello', 'culture', 'printing']
  },
  {
    id: 21, era: 'rzecz',
    lat: 51.250, lng: 22.568,
    type: 'culture',
    year: 1569,
    title: { ru: 'Люблин — столица унии', pl: 'Lublin — miasto Unii Lubelskiej' },
    desc: {
      ru: 'В Люблине подписывается договор, создающий Речь Посполитую Обоих Народов — общую державу поляков и литовцев.',
      pl: 'W Lublinie podpisano akt tworzący Rzeczpospolitą Obojga Narodów — wspólne państwo Polaków i Litwinów.'
    },
    tags: ['rzecz', 'politics', 'union']
  },
  {
    id: 22, era: 'rzecz',
    lat: 49.695, lng: 21.750,
    type: 'culture',
    year: 1581,
    title: { ru: 'Любовь к свободе — шляхетские сеймики', pl: 'Sejmiki szlacheckie' },
    desc: {
      ru: 'Местные собрания шляхты принимают решения и выбирают послов на сейм. Польша становится одной из самых самоуправляемых стран Европы.',
      pl: 'Lokalne zgromadzenia szlachty podejmują decyzje i wybierają posłów na sejm. Polska staje się jednym z najbardziej samorządnych krajów Europy.'
    },
    tags: ['rzecz', 'politics', 'society']
  },
  {
    id: 23, era: 'rzecz',
    lat: 50.041, lng: 21.999,
    type: 'battle',
    year: 1656,
    title: { ru: 'Осада Ясной Гуры', pl: 'Oblężenie Jasnej Góry' },
    desc: {
      ru: 'Во время шведского Потопа монахи и шляхта обороняют монастырь Ясна Гура в Ченстохове. Успешная оборона становится символом сопротивления и религиозной веры.',
      pl: 'Podczas potopu szwedzkiego zakonnicy i szlachta bronią klasztoru Jasna Góra w Częstochowie. Udana obrona staje się symbolem oporu i wiary.'
    },
    tags: ['rzecz', 'battle', 'religion']
  },
  {
    id: 24, era: 'rzecz',
    lat: 54.095, lng: 18.778,
    type: 'battle',
    year: 1627,
    title: { ru: 'Морское сражение при Оливе', pl: 'Bitwa pod Oliwą' },
    desc: {
      ru: 'Польский флот одерживает редкую морскую победу над Швецией у берегов Гданьска. Фрегат "Święty Jerzy" становится легендой.',
      pl: 'Polska flota odnosi rzadkie zwycięstwo morskie nad Szwecją u wybrzeży Gdańska. Fregata "Święty Jerzy" przechodzi do legendy.'
    },
    tags: ['rzecz', 'battle', 'navy']
  },
  {
    id: 25, era: 'rzecz',
    lat: 53.014, lng: 18.598,
    type: 'culture',
    year: 1772,
    title: { ru: 'Первый раздел и утрата Поморья', pl: 'Pierwszy rozbiór i utrata Pomorza' },
    desc: {
      ru: 'Пруссия аннексирует значительную часть польского побережья. Связь с Балтикой серьёзно ослаблена.',
      pl: 'Prusy anektują znaczną część polskiego wybrzeża. Połączenie z Bałtykiem zostaje poważnie osłabione.'
    },
    tags: ['rzecz', 'partitions', 'tragedy']
  },
  {
    id: 26, era: 'modern',
    lat: 50.871, lng: 20.631,
    type: 'battle',
    year: 1914,
    title: { ru: 'Легионы Пилсудского в Хентыне', pl: 'Legiony Piłsudskiego pod Kielcami' },
    desc: {
      ru: 'Добровольческие польские легионы сражаются в составе австро-венгерской армии, мечтая о будущей независимости.',
      pl: 'Ochotnicze Legiony Polskie walczą w składzie armii austro-węgierskiej, marząc o przyszłej niepodległości.'
    },
    tags: ['modern', 'battle', 'independence']
  },
  {
    id: 27, era: 'modern',
    lat: 52.407, lng: 16.931,
    type: 'battle',
    year: 1918,
    title: { ru: 'Великопольское восстание', pl: 'Powstanie Wielkopolskie' },
    desc: {
      ru: 'Одно из немногих полностью успешных польских восстаний. Познань и Великопольша возвращаются в состав возрожденной Польши.',
      pl: 'Jedno z nielicznych całkowicie zwycięskich powstań. Poznań i Wielkopolska wracają do odrodzonej Polski.'
    },
    tags: ['modern', 'battle', 'victory']
  },
  {
    id: 28, era: 'modern',
    lat: 53.123, lng: 18.008,
    type: 'culture',
    year: 1923,
    title: { ru: 'Памятник Копернику и пряничная традиция', pl: 'Pomnik Kopernika i tradycja piernika toruńskiego' },
    desc: {
      ru: 'Торунь подчеркивает свою связь с Коперником и славится пряниками, ставшими сладким символом города.',
      pl: 'Toruń podkreśla związek z Kopernikiem i słynie z pierników, które stają się słodkim symbolem miasta.'
    },
    tags: ['modern', 'culture', 'city']
  },
  {
    id: 29, era: 'modern',
    lat: 49.300, lng: 19.950,
    type: 'culture',
    year: 1935,
    title: { ru: 'Закопане — столица Подгалья', pl: 'Zakopane — stolica Podhala' },
    desc: {
      ru: 'Горный курорт под Татрами становится "зимней столицей Польши" и центром горянской культуры и архитектуры.',
      pl: 'Kurort pod Tatrami staje się "zimową stolicą Polski" oraz ośrodkiem kultury i architektury podhalańskiej.'
    },
    tags: ['modern', 'culture', 'region']
  },
  {
    id: 30, era: 'modern',
    lat: 51.246, lng: 22.568,
    type: 'tragedy',
    year: 1940,
    title: { ru: 'Люблинский концлагерь Майданек', pl: 'Obóz koncentracyjny Majdanek' },
    desc: {
      ru: 'Один из нацистских лагерей смерти на территории Польши. Сегодня — государственный музей и место памяти жертв Холокоста.',
      pl: 'Jeden z nazistowskich obozów zagłady na ziemiach polskich. Dziś państwowe muzeum i miejsce pamięci ofiar Holokaustu.'
    },
    tags: ['modern', 'tragedy', 'ww2']
  },
  {
    id: 31, era: 'modern',
    lat: 50.052, lng: 19.178,
    type: 'tragedy',
    year: 1940,
    title: { ru: 'Концлагерь Аушвиц-Биркенау', pl: 'KL Auschwitz-Birkenau' },
    desc: {
      ru: 'Крупнейший лагерь смерти Третьего рейха. Символ Холокоста и преступлений нацизма, включён в список наследия ЮНЕСКО.',
      pl: 'Największy niemiecki obóz zagłady. Symbol Holokaustu i zbrodni nazizmu, wpisany na listę dziedzictwa UNESCO.'
    },
    tags: ['modern', 'tragedy', 'ww2']
  },
  {
    id: 32, era: 'modern',
    lat: 51.774, lng: 19.466,
    type: 'culture',
    year: 1945,
    title: { ru: 'Послевоенная реконструкция Лодзи', pl: 'Powojenna Łódź — miasto przemysłu i filmu' },
    desc: {
      ru: 'Лодзь превращается в центр текстильной промышленности и польской кинематографии с известной киношколой.',
      pl: 'Łódź staje się centrum przemysłu włókienniczego i polskiej kinematografii z słynną szkołą filmową.'
    },
    tags: ['modern', 'culture', 'industry']
  },
  {
    id: 33, era: 'modern',
    lat: 54.441, lng: 18.568,
    type: 'culture',
    year: 1945,
    title: { ru: 'Рождение Гдыни и Труймясто', pl: 'Gdynia i Trójmiasto — okno na świat' },
    desc: {
      ru: 'Молодой портовый город Гдыня вместе с Гданьском и Сопотом образует агломерацию Труймясто — новое "окно Польши на мир".',
      pl: 'Młode miasto portowe Gdynia wraz z Gdańskiem i Sopotem tworzy aglomerację Trójmiasto — nowe "okno Polski na świat".'
    },
    tags: ['modern', 'city', 'port']
  },
  {
    id: 34, era: 'modern',
    lat: 50.061, lng: 19.936,
    type: 'culture',
    year: 1978,
    title: { ru: 'Кароль Войтыла становится Папой Римским', pl: 'Karol Wojtyła zostaje papieżem' },
    desc: {
      ru: 'Краковский архиепископ избран Папой Иоанном Павлом II. Первым папой-славянином в истории.',
      pl: 'Krakowski arcybiskup zostaje wybrany na papieża Jana Pawła II. Pierwszego papieża-Słowianina w historii.'
    },
    tags: ['modern', 'religion', 'culture']
  },
  {
    id: 35, era: 'modern',
    lat: 52.250, lng: 20.995,
    type: 'tragedy',
    year: 1981,
    title: { ru: 'Введение военного положения', pl: 'Wprowadzenie stanu wojennego' },
    desc: {
      ru: 'Генерал Ярузельский вводит военное положение, чтобы подавить "Солидарность". Тысячи интернированных, комендантский час, танки на улицах.',
      pl: 'Generał Jaruzelski wprowadza stan wojenny, by zdławić "Solidarność". Tysiące internowanych, godzina milicyjna, czołgi na ulicach.'
    },
    tags: ['modern', 'tragedy', 'politics']
  },
  {
    id: 36, era: 'modern',
    lat: 51.125, lng: 17.028,
    type: 'culture',
    year: 1997,
    title: { ru: 'Вроцлав — европейский город мостов', pl: 'Wrocław — europejskie miasto mostów' },
    desc: {
      ru: 'Город на Одере после послевоенной реконструкции становится одним из самых красивых и динамично развивающихся городов Польши.',
      pl: 'Miasto nad Odrą po powojennej odbudowie staje się jednym z najpiękniejszych i najszybciej rozwijających się miast Polski.'
    },
    tags: ['modern', 'city', 'culture']
  },
  {
    id: 37, era: 'modern',
    lat: 52.229, lng: 21.012,
    type: 'culture',
    year: 2000,
    title: { ru: 'Старый город Варшавы после восстановления', pl: 'Odbudowane Stare Miasto w Warszawie' },
    desc: {
      ru: 'Исторический центр, воссозданный после войны "кирпич к кирпичу", включён в список ЮНЕСКО как пример идеальной реконструкции.',
      pl: 'Historyczne centrum odbudowane po wojnie "cegła po cegle" wpisano na listę UNESCO jako przykład wzorcowej rekonstrukcji.'
    },
    tags: ['modern', 'city', 'unesco']
  },
  {
    id: 38, era: 'modern',
    lat: 54.518, lng: 18.530,
    type: 'culture',
    year: 2014,
    title: { ru: 'Музей Второй мировой войны в Гданьске', pl: 'Muzeum II Wojny Światowej w Gdańsku' },
    desc: {
      ru: 'Один из самых современных музеев Европы, рассказывающий о трагедии войны с польской и мировой перспективы.',
      pl: 'Jeden z najnowocześniejszych muzeów w Europie, opowiadający o tragedii wojny z perspektywy polskiej i światowej.'
    },
    tags: ['modern', 'museum', 'ww2']
  },
  {
    id: 39, era: 'modern',
    lat: 53.013, lng: 23.152,
    type: 'culture',
    year: 2016,
    title: { ru: 'Беловежская пуща — спор о первозданном лесу', pl: 'Puszcza Białowieska — spór o prastary las' },
    desc: {
      ru: 'Защищённый лес на границе с Беларусью становится символом борьбы за охрану природы и разумную вырубку.',
      pl: 'Chroniony las na granicy z Białorusią staje się symbolem sporu o ochronę przyrody i racjonalną gospodarkę leśną.'
    },
    tags: ['modern', 'nature', 'unesco']
  },
  {
    id: 40, era: 'modern',
    lat: 50.064, lng: 19.945,
    type: 'culture',
    year: 2000,
    title: { ru: 'Краков — европейская столица культуры', pl: 'Kraków — Europejska Stolica Kultury' },
    desc: {
      ru: 'Краков получает титул Европейской столицы культуры, подчёркивая роль города как культурного сердца Польши.',
      pl: 'Kraków otrzymuje tytuł Europejskiej Stolicy Kultury, podkreślając rolę miasta jako kulturalnego serca Polski.'
    },
    tags: ['modern', 'culture', 'city']
  },
  {
    id: 41, era: 'modern',
    lat: 52.406, lng: 16.931,
    type: 'culture',
    year: 1956,
    title: { ru: 'Познаньский июнь', pl: 'Poznański Czerwiec 1956' },
    desc: {
      ru: 'Первый массовый рабочий протест против коммунистической власти. Пролитая кровь становится предвестником будущих перемен.',
      pl: 'Pierwszy masowy robotniczy protest przeciw władzy komunistycznej. Przelana krew zapowiada przyszłe zmiany.'
    },
    tags: ['modern', 'protest', 'politics']
  },
  {
    id: 42, era: 'modern',
    lat: 52.229, lng: 21.012,
    type: 'culture',
    year: 2012,
    title: { ru: 'Евро-2012 в Польше', pl: 'EURO 2012 w Polsce' },
    desc: {
      ru: 'Совместный с Украиной чемпионат Европы по футболу приносит Польше новые стадионы и инфраструктуру в Варшаве, Гданьске, Вроцлаве и Познани.',
      pl: 'Wspólnie z Ukrainą Polska organizuje Mistrzostwa Europy w piłce nożnej, z nowymi stadionami i infrastrukturą w Warszawie, Gdańsku, Wrocławiu i Poznaniu.'
    },
    tags: ['modern', 'sport', 'infrastructure']
  },
  {
    id: 43, era: 'modern',
    lat: 50.870, lng: 20.627,
    type: 'culture',
    year: 2015,
    title: { ru: 'Святой Крест и древний монастырь', pl: 'Święty Krzyż w Górach Świętokrzyskich' },
    desc: {
      ru: 'Один из старейших монастырей Польши на Свентокшиских горах — место паломничества и легенд о рогах сатаны.',
      pl: 'Jeden z najstarszych klasztorów w Polsce w Górach Świętokrzyskich — miejsce pielgrzymek i legend o rogach diabła.'
    },
    tags: ['modern', 'religion', 'region']
  },
  {
    id: 44, era: 'modern',
    lat: 54.127, lng: 15.004,
    type: 'nature',
    year: 1970,
    title: { ru: 'Словинский национальный парк', pl: 'Słowiński Park Narodowy' },
    desc: {
      ru: 'Подвижные дюны и озёра Балтики образуют уникальный пейзаж "польской Сахары".',
      pl: 'Ruchome wydmy i jeziora Bałtyku tworzą unikalny krajobraz "polskiej Sahary".'
    },
    tags: ['modern', 'nature', 'baltic']
  },
  {
    id: 45, era: 'modern',
    lat: 50.267, lng: 19.023,
    type: 'industry',
    year: 1970,
    title: { ru: 'Силезский угольный бассейн', pl: 'Górny Śląsk — region górniczy' },
    desc: {
      ru: 'Шахтёрский край Верхней Силезии десятилетиями обеспечивает Польшу углём и тяжёлой промышленностью.',
      pl: 'Region Górnego Śląska przez dziesięciolecia dostarcza Polsce węgla i mocy przemysłowej.'
    },
    tags: ['modern', 'industry', 'region']
  },
  {
    id: 46, era: 'modern',
    lat: 54.518, lng: 18.530,
    type: 'battle',
    year: 1939,
    title: { ru: 'Оборона Вестерплатте', pl: 'Obrona Westerplatte' },
    desc: {
      ru: 'Маленький польский гарнизон семь дней сдерживает немецкое наступление у входа в порт Гданьска. Символ начала войны и мужества.',
      pl: 'Niewielki garnizon polski przez siedem dni powstrzymuje niemieckie natarcie u wejścia do portu w Gdańsku. Symbol początku wojny i odwagi.'
    },
    tags: ['modern', 'battle', 'ww2']
  },
  {
    id: 47, era: 'modern',
    lat: 52.406, lng: 16.921,
    type: 'culture',
    year: 2003,
    title: { ru: 'Познаньский ярмарочный центр', pl: 'Międzynarodowe Targi Poznańskie' },
    desc: {
      ru: 'Один из крупнейших выставочных комплексов Центральной Европы, показывающий экономическую динамику региона.',
      pl: 'Jeden z największych kompleksów targowych w Europie Środkowej, świadczący o gospodarczym potencjale regionu.'
    },
    tags: ['modern', 'trade', 'city']
  },
  {
    id: 48, era: 'modern',
    lat: 49.822, lng: 19.046,
    type: 'culture',
    year: 1963,
    title: { ru: 'Фестиваль польской песни в Ополе', pl: 'Festiwal Polskiej Piosenki w Opolu' },
    desc: {
      ru: 'Музыкальный фестиваль в Ополе становится главным местом, где рождаются хиты польской эстрады.',
      pl: 'Festiwal w Opolu staje się główną sceną, na której rodzą się przeboje polskiej muzyki rozrywkowej.'
    },
    tags: ['modern', 'music', 'culture']
  },
  {
    id: 49, era: 'modern',
    lat: 53.778, lng: 20.480,
    type: 'nature',
    year: 1975,
    title: { ru: 'Мазурские озёра — край тысячи озёр', pl: 'Mazury — kraina tysiąca jezior' },
    desc: {
      ru: 'Один из самых популярных туристических регионов Польши, рай для яхтсменов и любителей природы.',
      pl: 'Jeden z najpopularniejszych regionów turystycznych Polski, raj dla żeglarzy i miłośników przyrody.'
    },
    tags: ['modern', 'nature', 'region']
  },
  {
    id: 50, era: 'modern',
    lat: 52.229, lng: 21.015,
    type: 'culture',
    year: 1956,
    title: { ru: 'Фестиваль "Варшавская осень"', pl: 'Festiwal "Warszawska Jesień"' },
    desc: {
      ru: 'Международный фестиваль современной музыки в Варшаве открывает польскую сцену композиторов миру.',
      pl: 'Międzynarodowy festiwal muzyki współczesnej w Warszawie otwiera polską scenę kompozytorską na świat.'
    },
    tags: ['modern', 'music', 'culture']
  },
  {
    id: 51, era: 'modern',
    lat: 50.873, lng: 20.627,
    type: 'culture',
    year: 2013,
    title: { ru: 'Деревянные церкви Малой Польши', pl: 'Drewniane kościoły Małopolski' },
    desc: {
      ru: 'Уникальные деревянные храмы, занесённые в список ЮНЕСКО, показывают богатство местной архитектурной традиции.',
      pl: 'Unikalne drewniane świątynie wpisane na listę UNESCO ukazują bogactwo lokalnej tradycji architektonicznej.'
    },
    tags: ['modern', 'unesco', 'architecture']
  },
];

// ============================================
// ГОДОВОЙ КРУГ ТРАДИЦИЙ
// ============================================
const CALENDAR_DATA = [
  {
    month: 0,
    name: { ru: 'Январь', pl: 'Styczeń' },
    season: 'winter',
    holidays: [
      {
        date: { ru: '1 января', pl: '1 stycznia' },
        name: { ru: 'Новый год — Nowy Rok', pl: 'Nowy Rok' },
        emoji: '🎆',
        desc: {
          ru: 'В Польше Новый год встречают шумно — фейерверки, танцы, шампанское. Но главный праздник для поляков — Рождество, Новый год более светский.',
          pl: 'W Polsce Nowy Rok świętuje się hucznie — fajerwerki, tańce, szampan. Głównym świętem jest jednak Boże Narodzenie.'
        }
      },
      {
        date: { ru: '6 января', pl: '6 stycznia' },
        name: { ru: 'Три Царя — Trzech Króli', pl: 'Trzech Króli (Epifania)' },
        emoji: '👑',
        desc: {
          ru: 'Богоявление — один из важнейших католических праздников. Процессии волхвов проходят по всей стране. На дверях домов мелом пишут буквы K+M+B (Каспар, Мельхиор, Бальтазар) — защита дома на год.',
          pl: 'Jedno z ważniejszych świąt katolickich. Orszaki Trzech Króli przechodzą przez całą Polskę. Na drzwiach domów pisze się kredą K+M+B — ochrona domu na cały rok.'
        }
      }
    ]
  },
  {
    month: 1,
    name: { ru: 'Февраль', pl: 'Luty' },
    season: 'winter',
    holidays: [
      {
        date: { ru: 'Перед Великим постом', pl: 'Przed Wielkim Postem' },
        name: { ru: 'Жирный четверг — Tłusty Czwartek', pl: 'Tłusty Czwartek' },
        emoji: '🍩',
        desc: {
          ru: 'Последний четверг перед постом — вся Польша ест пончики (пончки). По традиции нужно съесть хотя бы один — иначе год будет неудачным. В этот день пекари продают миллионы пончков с розовой глазурью.',
          pl: 'Ostatni czwartek przed postem — cała Polska je pączki. Tradycja mówi, że należy zjeść przynajmniej jednego — inaczej rok będzie pechowy. Sprzedaje się miliony pączków z różowym lukrem.'
        }
      },
      {
        date: { ru: 'Последний вторник перед постом', pl: 'Ostatni wtorek przed postem' },
        name: { ru: 'Запусты — Ostatki', pl: 'Ostatki / Zapusty' },
        emoji: '🎭',
        desc: {
          ru: 'Конец карнавального сезона — последние дни веселья перед Великим постом. Балы, маскарады, гуляния. Традиционная еда — śledź (сельдь) как символ наступающего поста.',
          pl: 'Koniec karnawału — ostatnie dni zabawy przed Wielkim Postem. Bale, maskarady, zabawy. Tradycyjne jedzenie — śledź jako symbol nadchodzącego postu.'
        }
      }
    ]
  },
  {
    month: 2,
    name: { ru: 'Март', pl: 'Marzec' },
    season: 'spring',
    holidays: [
      {
        date: { ru: '21 марта', pl: '21 marca' },
        name: { ru: 'Топление Марены — Marzanna', pl: 'Topienie Marzanny' },
        emoji: '🌊',
        desc: {
          ru: 'Дохристианский обряд прогнания зимы. Дети мастерят соломенную куклу-Марену — символ зимы и смерти — и торжественно топят или сжигают её в реке. Потом нельзя оглядываться назад.',
          pl: 'Przedchrześcijański obrzęd przeganiania zimy. Dzieci robią słomianą kukłę Marzannę — symbol zimy i śmierci — i uroczyście topią ją lub palą w rzece. Potem nie wolno się oglądać.'
        }
      },
      {
        date: { ru: 'Переменная дата', pl: 'Data ruchoma' },
        name: { ru: 'Пальмовое воскресенье — Niedziela Palmowa', pl: 'Niedziela Palmowa' },
        emoji: '🌿',
        desc: {
          ru: 'Начало Страстной недели. В Польше вместо пальмовых ветвей используют красочные "пальмы" из ивовых веток, сухих цветов и лент. Конкурсы на самую красивую и высокую пальму — до 30 метров!',
          pl: 'Początek Wielkiego Tygodnia. W Polsce zamiast gałązek palmowych używa się kolorowych "palm" z wierzbiny, suchych kwiatów i wstążek. Konkursy na najpiękniejszą i najwyższą palmę — nawet 30 metrów!'
        }
      }
    ]
  },
  {
    month: 3,
    name: { ru: 'Апрель', pl: 'Kwiecień' },
    season: 'spring',
    holidays: [
      {
        date: { ru: 'Переменная дата', pl: 'Data ruchoma' },
        name: { ru: 'Пасха — Wielkanoc', pl: 'Wielkanoc' },
        emoji: '🐣',
        desc: {
          ru: 'Важнейший праздник польского года. Освящение корзины со святки (жур, хлеб, яйца, колбаса, кулич). Śmigus-dyngus — поливальный понедельник, когда обливают водой. Украшение яиц — писанки (pisanki).',
          pl: 'Najważniejsze święto polskiego roku. Święcenie koszyka ze święconką. Śmigus-dyngus — lany poniedziałek, kiedy oblewa się wodą. Zdobienie pisanek.'
        }
      },
      {
        date: { ru: '1 апреля', pl: '1 kwietnia' },
        name: { ru: 'День смеха — Prima Aprilis', pl: 'Prima Aprilis' },
        emoji: '😄',
        desc: {
          ru: 'В Польше обманывать можно только до полудня. Даже газеты и телевизор публикуют розыгрыши. Поговорка: "Prima Aprilis, wystrzegaj się myśli" ("Первое апреля — берегись мыслей").',
          pl: 'W Polsce żartować można tylko do południa. Nawet gazety i telewizja publikują żarty. Przysłowie: "Prima Aprilis, wystrzegaj się myśli".'
        }
      }
    ]
  },
  {
    month: 4,
    name: { ru: 'Май', pl: 'Maj' },
    season: 'spring',
    holidays: [
      {
        date: { ru: '1 мая', pl: '1 maja' },
        name: { ru: 'День труда — Święto Pracy', pl: 'Święto Pracy' },
        emoji: '🌷',
        desc: {
          ru: 'Государственный праздник. В народе чаще называют "majówka" — время первых пикников, выездов на природу, шашлыков. Начало сезона гриля.',
          pl: 'Święto państwowe. Popularnie zwane "majówką" — czas pierwszych pikników, wyjazdów na łono natury, grillowania. Początek sezonu grillowego.'
        }
      },
      {
        date: { ru: '3 мая', pl: '3 maja' },
        name: { ru: 'День Конституции — Święto Konstytucji 3 Maja', pl: 'Święto Konstytucji 3 Maja' },
        emoji: '🇵🇱',
        desc: {
          ru: 'Национальный праздник в честь первой европейской конституции 1791 года. Парады, концерты, торжественные службы. Один из самых важных государственных праздников Польши.',
          pl: 'Święto narodowe ku czci pierwszej europejskiej konstytucji z 1791 roku. Parady, koncerty, uroczyste nabożeństwa. Jedno z najważniejszych świąt państwowych Polski.'
        }
      },
      {
        date: { ru: 'Весь май', pl: 'Cały maj' },
        name: { ru: 'Майские молитвы — Majówki', pl: 'Majówki (nabożeństwa majowe)' },
        emoji: '🌸',
        desc: {
          ru: 'Каждый вечер мая поляки собираются у придорожных часовен и статуй Девы Марии для вечерних молитв — литаний. Живая традиция, особенно в деревнях и малых городах.',
          pl: 'Każdego wieczoru maja Polacy zbierają się przy przydrożnych kapliczkach i figurach Matki Bożej na wieczorne modlitwy — litanie. Żywa tradycja, szczególnie na wsi.'
        }
      }
    ]
  },
  {
    month: 5,
    name: { ru: 'Июнь', pl: 'Czerwiec' },
    season: 'summer',
    holidays: [
      {
        date: { ru: 'Ночь с 23 на 24 июня', pl: 'Noc z 23 na 24 czerwca' },
        name: { ru: 'Ночь Купалы — Noc Kupały / Wianki', pl: 'Noc Kupały / Wianki' },
        emoji: '🔥',
        desc: {
          ru: 'Праздник летнего солнцестояния. Девушки плетут венки с цветами и пускают их по реке со свечами — если венок поймает парень, жди замужества. Прыжки через костёр, поиск цветка папоротника.',
          pl: 'Święto przesilenia letniego. Dziewczęta plotą wianki z kwiatów i puszczają je z zapalonymi świeczkami po rzece. Skakanie przez ognisko, szukanie kwiatu paproci.'
        }
      }
    ]
  },
  {
    month: 6,
    name: { ru: 'Июль', pl: 'Lipiec' },
    season: 'summer',
    holidays: [
      {
        date: { ru: 'Весь июль', pl: 'Cały lipiec' },
        name: { ru: 'Сезон паломничеств — Pielgrzymki', pl: 'Sezon pielgrzymek' },
        emoji: '🚶',
        desc: {
          ru: 'Тысячи поляков пешком идут в Ченстохову к чудотворной иконе Ченстоховской Богоматери — Чёрной Мадонны. Главная пешая пилигримка из Варшавы — 300 км за 9 дней.',
          pl: 'Tysiące Polaków idzie pieszo do Częstochowy do cudownego obrazu Matki Boskiej Częstochowskiej — Czarnej Madonny. Główna pielgrzymka z Warszawy — 300 km przez 9 dni.'
        }
      }
    ]
  },
  {
    month: 7,
    name: { ru: 'Август', pl: 'Sierpień' },
    season: 'summer',
    holidays: [
      {
        date: { ru: '15 августа', pl: '15 sierpnia' },
        name: { ru: 'Успение / День польской армии — Wniebowzięcie / Wojsko Polskie', pl: 'Wniebowzięcie NMP / Święto Wojska Polskiego' },
        emoji: '⚔️',
        desc: {
          ru: 'Два праздника в один день: религиозное Успение Богородицы и День польской армии — в честь победы над большевиками в Варшавской битве 1920 года ("Чудо на Висле"). Военные парады.',
          pl: 'Dwa święta w jednym dniu: religijne Wniebowzięcie NMP i Święto Wojska Polskiego — na cześć zwycięstwa nad bolszewikami w Bitwie Warszawskiej 1920 roku ("Cud nad Wisłą").'
        }
      },
      {
        date: { ru: 'Середина августа', pl: 'Połowa sierpnia' },
        name: { ru: 'Ченстоховское явление — Jasna Góra', pl: 'Odpust Jasnogórski' },
        emoji: '🕯️',
        desc: {
          ru: 'Кульминация паломнического сезона. Сотни тысяч верующих собираются у монастыря Ясна Гура в Ченстохове. Ночные бдения, процессии, молитвы перед иконой Чёрной Мадонны.',
          pl: 'Kulminacja sezonu pielgrzymkowego. Setki tysięcy wiernych gromadzą się przy klasztorze Jasna Góra. Nocne czuwania, procesje, modlitwy przed ikoną Czarnej Madonny.'
        }
      }
    ]
  },
  {
    month: 8,
    name: { ru: 'Сентябрь', pl: 'Wrzesień' },
    season: 'autumn',
    holidays: [
      {
        date: { ru: '1 сентября', pl: '1 września' },
        name: { ru: 'День памяти — начало войны', pl: 'Dzień Pamięci — wybuch II wojny' },
        emoji: '🕯️',
        desc: {
          ru: '1 сентября 1939 года Германия напала на Польшу. Ежегодно — торжественные церемонии у Вестерплатте в Гданьске. День государственной памяти и траура.',
          pl: '1 września 1939 roku Niemcy napadły na Polskę. Co roku — uroczyste ceremonie na Westerplatte w Gdańsku. Dzień państwowej pamięci i żałoby.'
        }
      },
      {
        date: { ru: 'Конец сентября', pl: 'Koniec września' },
        name: { ru: 'Дожинки — Dożynki', pl: 'Dożynki (Święto Plonów)' },
        emoji: '🌾',
        desc: {
          ru: 'Праздник урожая — древняя традиция, до сих пор живая в деревнях. Венки из колосьев, народные танцы, угощение хлебом. Президентские дожинки — национальное торжество.',
          pl: 'Święto plonów — starożytna tradycja, wciąż żywa na wsiach. Wieńce ze zbóż, tańce ludowe, poczęstunek chlebem. Dożynki Prezydenckie — narodowa uroczystość.'
        }
      }
    ]
  },
  {
    month: 9,
    name: { ru: 'Октябрь', pl: 'Październik' },
    season: 'autumn',
    holidays: [
      {
        date: { ru: 'Весь октябрь', pl: 'Cały październik' },
        name: { ru: 'Розарий — Różaniec', pl: 'Miesiąc Różańcowy' },
        emoji: '📿',
        desc: {
          ru: 'Октябрь — месяц Розария. Каждый день в костёлах читают розарий. Особо торжественно — 7 октября (праздник Богоматери Розария), в память о победе при Лепанто 1571 года.',
          pl: 'Październik to miesiąc Różańca. Codziennie w kościołach odmawia się różaniec. Szczególnie uroczyście — 7 października (święto Matki Bożej Różańcowej).'
        }
      }
    ]
  },
  {
    month: 10,
    name: { ru: 'Ноябрь', pl: 'Listopad' },
    season: 'autumn',
    holidays: [
      {
        date: { ru: '1 ноября', pl: '1 listopada' },
        name: { ru: 'День всех святых — Wszystkich Świętych', pl: 'Wszystkich Świętych' },
        emoji: '🕯️',
        desc: {
          ru: 'Самый визуально поразительный польский праздник. Вся страна идёт на кладбища. Тысячи свечей и цветов превращают погосты в моря огня. Живые традиции памяти и уважения к предкам.',
          pl: 'Najbardziej wizualnie uderzające polskie święto. Cały kraj idzie na cmentarze. Tysiące świec i kwiatów zamieniają cmentarze w morza ognia. Żywe tradycje pamięci.'
        }
      },
      {
        date: { ru: '2 ноября', pl: '2 listopada' },
        name: { ru: 'День усопших — Zaduszki', pl: 'Zaduszki' },
        emoji: '🕊️',
        desc: {
          ru: 'Поминовение всех душ умерших. Молитвы, заупокойные службы. Во многих регионах сохранился обычай ставить еду для душ предков, которые в эту ночь приходят домой.',
          pl: 'Wspominanie wszystkich dusz zmarłych. Modlitwy, msze za zmarłych. W wielu regionach zachował się zwyczaj zostawiania jedzenia dla dusz przodków.'
        }
      },
      {
        date: { ru: '11 ноября', pl: '11 listopada' },
        name: { ru: 'День независимости — Święto Niepodległości', pl: 'Święto Niepodległości' },
        emoji: '🇵🇱',
        desc: {
          ru: 'Главный государственный праздник. 11 ноября 1918 года Польша восстановила независимость после 123 лет разделов. Марш независимости в Варшаве собирает десятки тысяч людей.',
          pl: 'Główne święto państwowe. 11 listopada 1918 roku Polska odzyskała niepodległość po 123 latach zaborów. Marsz Niepodległości w Warszawie gromadzi dziesiątki tysięcy.'
        }
      }
    ]
  },
  {
    month: 11,
    name: { ru: 'Декабрь', pl: 'Grudzień' },
    season: 'winter',
    holidays: [
      {
        date: { ru: '6 декабря', pl: '6 grudnia' },
        name: { ru: 'День Святого Миколая — Mikołajki', pl: 'Mikołajki' },
        emoji: '🎅',
        desc: {
          ru: 'Польский Дед Мороз — Święty Mikołaj — приходит не под Новый год, а 6 декабря. Дети ставят ботинки у кровати, а утром находят в них подарки. Самый ожидаемый детский праздник.',
          pl: 'Święty Mikołaj przybywa 6 grudnia. Dzieci stawiają buty przy łóżku, a rano znajdują w nich prezenty. Najbardziej wyczekiwane przez dzieci święto.'
        }
      },
      {
        date: { ru: '24 декабря', pl: '24 grudnia' },
        name: { ru: 'Сочельник — Wigilia', pl: 'Wigilia Bożego Narodzenia' },
        emoji: '⭐',
        desc: {
          ru: 'Самый важный вечер польского года. Ужин начинается с появлением первой звезды. 12 постных блюд — карп, борщ с ушками, капуста с горохом, кутья. Пустое место за столом — для неожиданного гостя или умершего родственника.',
          pl: 'Najważniejszy wieczór polskiego roku. Kolacja zaczyna się od pojawienia pierwszej gwiazdy. 12 postnych potraw — karp, barszcz z uszkami, kapusta z grochem, kutia. Puste miejsce przy stole — dla niespodziewanego gościa.'
        }
      },
      {
        date: { ru: '25-26 декабря', pl: '25-26 grudnia' },
        name: { ru: 'Рождество — Boże Narodzenie', pl: 'Boże Narodzenie' },
        emoji: '🎄',
        desc: {
          ru: 'Два дня Рождества. Посещение костёла на Рашу (полуночная месса в полночь). Колядники (Kolędnicy) ходят по домам с вертепом (szopka). Польские колядки — одни из красивейших в мире.',
          pl: 'Dwa dni Bożego Narodzenia. Msza o północy (Pasterka). Kolędnicy chodzą po domach z szopką. Polskie kolędy — jedne z najpiękniejszych na świecie.'
        }
      }
    ]
  }
];

// ============================================
// ВРЕМЕННАЯ ШКАЛА ИСТОРИИ
// ============================================
const TIMELINE_DATA = [
  {
    year: '966',
    title: { ru: 'Крещение Польши', pl: 'Chrzest Polski' },
    desc: { ru: 'Мешко I принимает христианство. Рождение польского государства. Начало тысячелетней христианской традиции.', pl: 'Mieszko I przyjmuje chrześcijaństwo. Narodziny polskiego państwa. Początek tysiącletniej tradycji chrześcijańskiej.' },
    tag: 'piast'
  },
  {
    year: '1000',
    title: { ru: 'Гнезненский съезд', pl: 'Zjazd Gnieźnieński' },
    desc: { ru: 'Польша признана равноправным европейским государством. Создано Гнезненское архиепископство.', pl: 'Polska uznana za równorzędne państwo europejskie. Utworzono arcybiskupstwo gnieźnieńskie.' },
    tag: 'piast'
  },
  {
    year: '1226',
    title: { ru: 'Тевтонские рыцари приходят в Польшу', pl: 'Krzyżacy przybyją do Polski' },
    desc: { ru: 'Князь Конрад Мазовецкий приглашает рыцарей-крестоносцев для защиты от пруссов — решение, определившее судьбу региона на века.', pl: 'Książę Konrad Mazowiecki zaprasza krzyżowców do ochrony przed Prusami — decyzja, która ukształtowała losy regionu na wieki.' },
    tag: 'piast'
  },
  {
    year: '1410',
    title: { ru: 'Победа при Грюнвальде', pl: 'Zwycięstwo pod Grunwaldem' },
    desc: { ru: 'Польско-литовское войско сокрушает Тевтонский орден. Крупнейшее сражение средневековой Европы. Слава Ягайлы гремит по всему христианскому миру.', pl: 'Wojska polsko-litewskie rozbijają zakon krzyżacki. Największa bitwa średniowiecznej Europy. Sława Jagiełły rozbrzmiewa po całym chrześcijańskim świecie.' },
    tag: 'jagiello'
  },
  {
    year: '1543',
    title: { ru: '"De revolutionibus" Коперника', pl: '"De revolutionibus" Kopernika' },
    desc: { ru: 'Николай Коперник публикует труд, доказывающий гелиоцентрическую систему мира. Поляк меняет представление человечества о Вселенной.', pl: 'Mikołaj Kopernik publikuje dzieło, które dowodzi heliocentrycznego układu słonecznego. Polak zmienia wyobraźnię ludzkości o Wszechświecie.' },
    tag: 'jagiello'
  },
  {
    year: '1569',
    title: { ru: 'Люблинская уния', pl: 'Unia Lubelska' },
    desc: { ru: 'Польша и Литва объединяются в Речь Посполитую — крупнейшее государство Европы с уникальной системой шляхетской демократии.', pl: 'Polska i Litwa łączą się w Rzeczpospolitą Obojga Narodów — największe państwo Europy z unikalnym systemem demokracji szlacheckiej.' },
    tag: 'rzecz'
  },
  {
    year: '1683',
    title: { ru: 'Ян Собеский спасает Вену', pl: 'Jan Sobieski ratuje Wiedeń' },
    desc: { ru: 'Крылатые гусары в крупнейшей кавалерийской атаке истории останавливают османское нашествие. Польша — щит христианства.', pl: 'Husaria w największej szarży kawaleryjskiej w historii zatrzymuje najazd osmański. Polska — przedmurze chrześcijaństwa.' },
    tag: 'rzecz'
  },
  {
    year: '1791',
    title: { ru: 'Конституция 3 мая', pl: 'Konstytucja 3 Maja' },
    desc: { ru: 'Первая в Европе конституция — но уже через год Польша разделена между Россией, Пруссией и Австрией. Начало 123 лет неволи.', pl: 'Pierwsza w Europie konstytucja — ale już rok później Polska zostaje podzielona między Rosję, Prusy i Austrię. Początek 123 lat niewoli.' },
    tag: 'rzecz'
  },
  {
    year: '1795',
    title: { ru: 'Третий раздел — Польши нет на карте', pl: 'Trzeci rozbiór — Polski nie ma na mapie' },
    desc: { ru: 'Польское государство исчезает с карты Европы на 123 года. Но народ сохраняет язык, культуру и веру. "Ещё Польша не погибла, пока мы живём".', pl: 'Państwo polskie znika z mapy Europy na 123 lata. Ale naród zachowuje język, kulturę i wiarę. "Jeszcze Polska nie zginęła, kiedy my żyjemy".' },
    tag: 'partitions'
  },
  {
    year: '1918',
    title: { ru: 'Независимость восстановлена', pl: 'Odzyskanie niepodległości' },
    desc: { ru: 'После 123 лет разделов Польша возрождается. Юзеф Пилсудский возглавляет новое государство. 11 ноября — навсегда войдёт в историю.', pl: 'Po 123 latach zaborów Polska odradza się. Józef Piłsudski staje na czele nowego państwa. 11 listopada — na zawsze wejdzie do historii.' },
    tag: 'modern'
  },
  {
    year: '1939',
    title: { ru: 'Начало Второй мировой войны', pl: 'Początek II Wojny Światowej' },
    desc: { ru: '1 сентября Германия нападает на Польшу. 17 сентября — СССР с востока. Польша оккупирована, но продолжает борьбу — в подполье, на всех фронтах мира.', pl: '1 września Niemcy napadają na Polskę. 17 września — ZSRR ze wschodu. Polska jest okupowana, ale walczy — w podziemiu, na wszystkich frontach świata.' },
    tag: 'modern'
  },
  {
    year: '1944',
    title: { ru: 'Варшавское восстание', pl: 'Powstanie Warszawskie' },
    desc: { ru: '63 дня борьбы. 200 000 погибших. Варшава уничтожена на 85%. Трагедия, ставшая символом польского характера — бороться до конца.', pl: '63 dni walki. 200 000 ofiar. Warszawa zniszczona w 85%. Tragedia, która stała się symbolem polskiego charakteru — walczyć do końca.' },
    tag: 'modern'
  },
  {
    year: '1980',
    title: { ru: '"Солидарность"', pl: '"Solidarność"' },
    desc: { ru: 'Лех Валенса и миллионы рабочих создают первый свободный профсоюз советского блока. Начало конца коммунизма в Восточной Европе.', pl: 'Lech Wałęsa i miliony robotników tworzą pierwszy wolny związek zawodowy bloku sowieckiego. Początek końca komunizmu w Europie Wschodniej.' },
    tag: 'modern'
  },
  {
    year: '1989',
    title: { ru: 'Круглый стол. Свободные выборы', pl: 'Okrągły Stół. Wolne wybory' },
    desc: { ru: 'Польша первой из стран Восточного блока проводит свободные выборы. Падение коммунизма. Начало новой Польши в демократической Европе.', pl: 'Polska pierwsza spośród krajów bloku wschodniego przeprowadza wolne wybory. Upadek komunizmu. Nowa Polska w demokratycznej Europie.' },
    tag: 'modern'
  },
  {
    year: '2004',
    title: { ru: 'Польша вступает в Евросоюз', pl: 'Polska w Unii Europejskiej' },
    desc: { ru: '1 мая 2004 года. Польша возвращается в семью европейских народов. Начало крупнейшего в истории периода развития и модернизации страны.', pl: '1 maja 2004 roku. Polska wraca do rodziny narodów europejskich. Początek największego w historii okresu rozwoju i modernizacji kraju.' },
    tag: 'modern'
  },
];

// ============================================
// MULTILINGUAL EXTENSIONS
// English, German, French, Spanish, Portuguese translations
// for timeline and map events (as patch data)
// app.js already falls back to pl/ru if lang not found
// ============================================

// Extend TIMELINE_DATA with more languages
(function() {
  const TL_EN = {
    '966':  { title: 'Baptism of Poland',           desc: 'Mieszko I accepts Christianity. Birth of the Polish state. Beginning of a thousand-year Christian tradition.' },
    '1000': { title: 'Congress of Gniezno',          desc: 'Poland recognized as an equal European state. The Archbishopric of Gniezno established.' },
    '1226': { title: 'Teutonic Knights enter Poland',desc: 'Duke Konrad of Masovia invites the crusading knights to protect against the Prussians — a decision that shaped the region for centuries.' },
    '1410': { title: 'Victory at Grunwald',          desc: 'Polish-Lithuanian forces crush the Teutonic Order. The largest battle of medieval Europe. Jagiełło\'s glory resounds across the Christian world.' },
    '1543': { title: '"De revolutionibus" by Copernicus', desc: 'Nicolaus Copernicus publishes his heliocentric theory. A Pole changes humanity\'s understanding of the universe.' },
    '1569': { title: 'Union of Lublin',              desc: 'Poland and Lithuania unite to form the Polish-Lithuanian Commonwealth — the largest state in Europe with a unique noble democracy.' },
    '1683': { title: 'Jan Sobieski saves Vienna',    desc: 'The Winged Hussars in history\'s greatest cavalry charge stop the Ottoman invasion. Poland — the shield of Christendom.' },
    '1791': { title: 'Constitution of May 3',        desc: 'Europe\'s first constitution — but just a year later Poland is partitioned between Russia, Prussia and Austria. 123 years of captivity begin.' },
    '1795': { title: 'Third Partition — Poland erased from the map', desc: 'The Polish state disappears from the map of Europe for 123 years. But the people preserve their language, culture and faith. "Poland has not yet perished..."' },
    '1918': { title: 'Independence restored',        desc: 'After 123 years of partitions, Poland is reborn. Józef Piłsudski leads the new state. November 11 enters history forever.' },
    '1939': { title: 'World War II begins',          desc: 'On September 1, Germany invades Poland. On September 17 — the USSR from the east. Poland is occupied but continues to fight — underground, on all fronts.' },
    '1944': { title: 'Warsaw Uprising',             desc: '63 days of fighting. 200,000 dead. Warsaw destroyed 85%. A tragedy that became a symbol of the Polish character — to fight to the end.' },
    '1980': { title: '"Solidarity"',               desc: 'Lech Wałęsa and millions of workers create the first free trade union in the Soviet bloc. The beginning of the end of communism in Eastern Europe.' },
    '1989': { title: 'Round Table. Free elections', desc: 'Poland first among Eastern Bloc countries holds free elections. Fall of communism. A new Poland in democratic Europe.' },
    '2004': { title: 'Poland joins the European Union', desc: 'May 1, 2004. Poland returns to the family of European nations. The largest period of development and modernization in history begins.' },
  };

  const TL_DE = {
    '966':  { title: 'Taufe Polens',                desc: 'Mieszko I nimmt das Christentum an. Geburt des polnischen Staates.' },
    '1000': { title: 'Kongress von Gnesen',          desc: 'Polen als gleichwertiger europäischer Staat anerkannt. Das Erzbistum Gnesen gegründet.' },
    '1410': { title: 'Sieg bei Grunwald',            desc: 'Polnisch-litauische Truppen vernichten den Deutschen Orden. Die größte Schlacht des mittelalterlichen Europas.' },
    '1791': { title: 'Verfassung vom 3. Mai',        desc: 'Europas erste Verfassung — aber schon ein Jahr später wird Polen geteilt. 123 Jahre Unfreiheit beginnen.' },
    '1918': { title: 'Unabhängigkeit wiederhergestellt', desc: 'Nach 123 Jahren Teilungen ersteht Polen neu. Józef Piłsudski führt den neuen Staat.' },
    '1944': { title: 'Warschauer Aufstand',          desc: '63 Kampftage. 200.000 Tote. Warschau zu 85% zerstört. Eine Tragödie als Symbol des polnischen Charakters.' },
    '1980': { title: '"Solidarität"',              desc: 'Lech Wałęsa und Millionen Arbeiter schaffen die erste freie Gewerkschaft im Ostblock.' },
    '1989': { title: 'Runder Tisch. Freie Wahlen',  desc: 'Polen hält als erstes Ostblockland freie Wahlen ab. Beginn eines neuen demokratischen Polen.' },
    '2004': { title: 'Polen tritt der EU bei',       desc: '1. Mai 2004. Polen kehrt in die Familie der europäischen Völker zurück.' },
  };

  const TL_ES = {
    '966':  { title: 'Bautismo de Polonia',          desc: 'Mieszko I acepta el cristianismo. Nacimiento del Estado polaco.' },
    '1410': { title: 'Victoria en Grunwald',         desc: 'Las fuerzas polaco-lituanas aplastan a la Orden Teutónica. La mayor batalla de la Europa medieval.' },
    '1791': { title: 'Constitución del 3 de Mayo',   desc: 'La primera constitución de Europa — un año después Polonia es repartida. 123 años de cautiverio comienzan.' },
    '1918': { title: 'Independencia restaurada',     desc: 'Tras 123 años de particiones, Polonia renace. El 11 de noviembre entra en la historia para siempre.' },
    '1944': { title: 'Levantamiento de Varsovia',    desc: '63 días de lucha. 200.000 muertos. Varsovia destruida en un 85%. Una tragedia símbolo del carácter polaco.' },
    '1980': { title: '"Solidaridad"',              desc: 'Lech Wałęsa y millones de trabajadores crean el primer sindicato libre del bloque soviético.' },
    '2004': { title: 'Polonia entra en la UE',       desc: '1 de mayo de 2004. Polonia regresa a la familia de los pueblos europeos.' },
  };

  const TL_FR = {
    '966':  { title: 'Baptême de la Pologne',       desc: 'Mieszko Ier accepte le christianisme. Naissance de l\'État polonais.' },
    '1410': { title: 'Victoire de Grunwald',         desc: 'Les forces polono-lituaniennes écrasent l\'Ordre Teutonique. La plus grande bataille de l\'Europe médiévale.' },
    '1791': { title: 'Constitution du 3 mai',        desc: 'La première constitution d\'Europe — un an plus tard, la Pologne est partagée. 123 ans de captivité commencent.' },
    '1918': { title: 'Indépendance restaurée',       desc: 'Après 123 ans de partages, la Pologne renaît. Le 11 novembre entre dans l\'histoire.' },
    '1944': { title: 'Soulèvement de Varsovie',      desc: '63 jours de combat. 200 000 morts. Varsovie détruite à 85%. Une tragédie symbole du caractère polonais.' },
    '1980': { title: '"Solidarité"',               desc: 'Lech Wałęsa et des millions de travailleurs créent le premier syndicat libre du bloc soviétique.' },
    '2004': { title: 'La Pologne rejoint l\'UE',     desc: '1er mai 2004. La Pologne rejoint la famille des peuples européens.' },
  };

  TIMELINE_DATA.forEach(item => {
    if (TL_EN[item.year]) { item.title.en = TL_EN[item.year].title; item.desc.en = TL_EN[item.year].desc; }
    if (TL_DE[item.year]) { item.title.de = TL_DE[item.year].title; item.desc.de = TL_DE[item.year].desc; }
    if (TL_ES[item.year]) { item.title.es = TL_ES[item.year].title; item.desc.es = TL_ES[item.year].desc; }
    if (TL_FR[item.year]) { item.title.fr = TL_FR[item.year].title; item.desc.fr = TL_FR[item.year].desc; }
  });

  // Map events — add English
  const ME_EN = {
    1: { title: 'Baptism of Poland', desc: 'Prince Mieszko I is baptized along with his court — Poland enters the circle of Christian European peoples. The beginning of Polish statehood.' },
    2: { title: 'Congress of Gniezno', desc: 'Emperor Otto III travels to Gniezno to venerate the relics of St. Adalbert. Poland receives an archbishopric — international recognition as an equal state.' },
    3: { title: 'Kraków — the new capital', desc: 'After the destruction of Gniezno and Poznań, the capital of Poland moves to Kraków on Wawel Hill.' },
    4: { title: 'Battle of Legnica', desc: 'The Mongol invasion. The Polish-German army is defeated. Poland is devastated, but Western Europe stops the Mongol advance.' },
    5: { title: 'Coronation of Władysław the Elbow-high', desc: 'Władysław I unites fragmented Poland and is crowned in Kraków. Beginning of the restoration of the unified Kingdom of Poland.' },
    6: { title: 'Battle of Grunwald', desc: 'The greatest victory of the Polish-Lithuanian army over the Teutonic Order. The invincible crusader army crushed under King Jagiełło. Symbol of Polish military might.' },
    7: { title: 'University of Kraków', desc: 'King Casimir the Great founds Poland\'s first university. It will later become the Jagiellonian University and alma mater of Copernicus.' },
    8: { title: 'Birth of Copernicus', desc: 'Nicolaus Copernicus is born in Toruń — the Polish astronomer who will revolutionize humanity\'s understanding of the universe.' },
    9: { title: 'Transfer of the capital to Warsaw', desc: 'King Sigismund III Vasa moves the court from Kraków to Warsaw. The city on the Vistula becomes the capital for the next four centuries.' },
    10: { title: 'Battle of Vienna', desc: 'King Jan III Sobieski leads the Winged Hussars against 150,000 Ottomans. The largest cavalry charge in history — Vienna is saved.' },
    11: { title: 'Constitution of May 3', desc: 'Europe\'s first constitution adopted. A progressive document that tried to save Poland from partition. The holiday is still celebrated today.' },
    12: { title: 'Warsaw Uprising', desc: '63 days of heroic fighting by the Home Army against the German occupiers. 200,000 dead. Warsaw razed to the ground. A tragedy that became a symbol of the Polish spirit.' },
    13: { title: '"Solidarity"', desc: 'Gdańsk Shipyard. Lech Wałęsa leads the first independent trade union in the Soviet bloc. The beginning of the end of communism in Eastern Europe.' },
  };

  MAP_EVENTS.forEach(ev => {
    if (ME_EN[ev.id]) { ev.title.en = ME_EN[ev.id].title; ev.desc.en = ME_EN[ev.id].desc; }
  });
})();
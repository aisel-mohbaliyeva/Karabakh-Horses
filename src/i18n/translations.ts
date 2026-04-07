export type Language = "az" | "en" | "ru";

export type TranslationKey =
  | "brand.name"
  | "nav.home"
  | "nav.about"
  | "nav.gallery"
  | "nav.facts"
  | "nav.horses"
  | "nav.contact"
  | "lang.label"
  | "lang.az"
  | "lang.en"
  | "lang.ru"
  | "hero.kicker"
  | "hero.slide1.headline"
  | "hero.slide1.sub"
  | "hero.slide2.headline"
  | "hero.slide2.sub"
  | "hero.slide3.headline"
  | "hero.slide3.sub"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "about.label"
  | "about.title"
  | "about.lede"
  | "about.p1"
  | "about.p2"
  | "about.metric"
  | "about.pillar1.label"
  | "about.pillar1.desc"
  | "about.pillar2.label"
  | "about.pillar2.desc"
  | "about.pillar3.label"
  | "about.pillar3.desc"
  | "about.pillar4.label"
  | "about.pillar4.desc"
  | "about.cta"
  | "facts.label"
  | "facts.title"
  | "facts.quote"
  | "facts.cite"
  | "horses.label"
  | "horses.title"
  | "horses.watchLabel"
  | "horses.watchText"
  | "horses.videoTitle"
  | "contact.label"
  | "contact.title"
  | "contact.lede"
  | "contact.info.location"
  | "contact.info.phone"
  | "contact.info.email"
  | "contact.form.sentTitle"
  | "contact.form.sentText"
  | "contact.form.sendAnother"
  | "contact.form.fullName"
  | "contact.form.emailAddress"
  | "contact.form.message"
  | "contact.form.placeholderMessage"
  | "contact.form.placeholderEmail"
  | "contact.form.placeholderName"
  | "contact.form.error.nameRequired"
  | "contact.form.error.emailRequired"
  | "contact.form.error.emailInvalid"
  | "contact.form.error.messageRequired"
  | "contact.form.submit"
  | "contact.form.sending"
  | "footer.tagline"
  | "footer.learnMore"
  | "footer.explore"
  | "footer.connect"
  | "footer.stayUpdated"
  | "footer.subscribeText"
  | "footer.emailPlaceholder"
  | "footer.rights"
  | "gallery.label"
  | "gallery.title"
  | "gallery.subtitle"
  | "gallery.caption.1"
  | "gallery.caption.2"
  | "gallery.caption.3"
  | "gallery.caption.4"
  | "gallery.caption.5"
  | "gallery.caption.6"
  | "gallery.caption.7"
  | "gallery.caption.8"
  | "gallery.caption.9"
  | "facts.item.1.title"
  | "facts.item.1.text"
  | "facts.item.2.title"
  | "facts.item.2.text"
  | "facts.item.3.title"
  | "facts.item.3.text"
  | "facts.item.4.title"
  | "facts.item.4.text"
  | "facts.item.5.title"
  | "facts.item.5.text"
  | "facts.item.6.title"
  | "facts.item.6.text"
  | "facts.item.7.title"
  | "facts.item.7.text"
  | "facts.item.8.title"
  | "facts.item.8.text"
  | "horse.kehraba.meaning"
  | "horse.kehraba.desc"
  | "horse.sumakh.meaning"
  | "horse.sumakh.desc"
  | "horse.zaman.meaning"
  | "horse.zaman.desc";

type Dict = Record<TranslationKey, string>;

export const translations: Record<Language, Dict> = {
  az: {
    "brand.name": "Karabakh Horses",
    "nav.home": "Ana səhifə",
    "nav.about": "Haqqında",
    "nav.gallery": "Qalereya",
    "nav.facts": "Faktlar",
    "nav.horses": "Atlar",
    "nav.contact": "Əlaqə",
    "lang.label": "Dil",
    "lang.az": "AZ",
    "lang.en": "EN",
    "lang.ru": "RU",
    "hero.kicker": "Azərbaycanın canlı əfsanəsi",
    "hero.slide1.headline": "Qafqazın qızıl atı",
    "hero.slide1.sub": "Azərbaycan irsinin canlı simvolu — cəsur, zərif, əbədi.",
    "hero.slide2.headline": "Sürət qədim dağlardan doğur",
    "hero.slide2.sub": "Qarabağın yüksək dağ-çöl düzənliklərində əsrlərlə yetişdirilib — dözümlülükdə bənzərsiz.",
    "hero.slide3.headline": "Şahlar və çarlar tərəfindən qiymətləndirilib",
    "hero.slide3.sub": "İmperiyalar boyunca dəyərli sayılıb — Qarabağ atı qədim dünyada nüfuzun rəmzi idi.",
    "hero.cta.primary": "Cinslə tanış olun",
    "hero.cta.secondary": "Qalereyaya baxın ↓",
    "about.label": "Cins haqqında",
    "about.title": "Qafqazda doğulub,\nƏbədiyyət üçün yaradılıb",
    "about.lede": "Qarabağ atı — <em>Qarabağ atı</em> — Azərbaycanın qədim Qarabağ bölgəsindən olan dağ-çöl yarış və minik cinsidir.",
    "about.p1": "Əsrlər boyu bu atlar Qarabağ xanları tərəfindən bəslənib və İran şahları, Rusiya çarları, eləcə də Avropa zadəganları tərəfindən arzulanan bir cins olub. Metallik qızılı-şabalıdı rəngi, yığcam amma güclü quruluşu və həm alovlu, həm də mülayim xasiyyəti onları fərqləndirir.",
    "about.p2": "Bu gün Azərbaycanın milli rəmzi kimi tanınan cinsin qorunması üçün xüsusi proqramlar nəsli bir vaxtlar yox olma həddinə yaxınlaşmış bu irsi bərpa etməyə çalışır.",
    "about.metric": "İrsin illəri",
    "about.pillar1.label": "Qədim nəsil xətti",
    "about.pillar1.desc": "Cənubi Qafqazın dağ-çöl bölgələrindən 2 500 ildən çox izlənə bilən irs.",
    "about.pillar2.label": "Möhtəşəm sürət",
    "about.pillar2.desc": "Yığcam, amma çox sürətli — tarixən Çovqan kimi nüfuzlu idmanda istifadə olunub.",
    "about.pillar3.label": "Dağ dözümlülüyü",
    "about.pillar3.desc": "Yüksək dağlıq relyef üçün formalaşıb; iri cinslərin çətinlik çəkdiyi yerlərdə möhkəm addımlayır.",
    "about.pillar4.label": "Metallik parlaqlıq",
    "about.pillar4.desc": "Onların imza rəngi təbii metallik parlaqlıqla işıldayır — nadir xüsusiyyətdir.",
    "about.cta": "Qalereyanı kəşf edin →",
    "facts.label": "Bilirdinizmi?",
    "facts.title": "<em>Səkkiz</em> maraqlı fakt",
    "facts.quote": "“Qarabağ atı sadəcə bir heyvan deyil — o, sürət və bədənlə yazılmış bir şeirdir.”",
    "facts.cite": "— Azərbaycan xalq deyimi",
    "horses.label": "Əfsanələr",
    "horses.title": "Məşhur <em>Qarabağ</em> atları",
    "horses.watchLabel": "İzləyin",
    "horses.watchText": "Qarabağ atlarını təbii gözəllikləri ilə izləyin",
    "horses.videoTitle": "Karabakh Horses",
    "contact.label": "Əlaqə saxlayın",
    "contact.title": "Bizimlə <em>əlaqə</em>",
    "contact.lede": "Tədqiqatçı, həvəskar və ya Qarabağ atlarının gözəlliyinə heyran biri olmağınızdan asılı olmayaraq — sizdən xəbər almaq istərik.",
    "contact.info.location": "Ünvan",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-poçt",
    "contact.form.sentTitle": "Mesaj göndərildi!",
    "contact.form.sentText": "Bizə yazdığınız üçün təşəkkürlər. Tezliklə sizə geri dönüş edəcəyik.",
    "contact.form.sendAnother": "Yenidən göndər",
    "contact.form.fullName": "Ad və soyad",
    "contact.form.emailAddress": "E-poçt ünvanı",
    "contact.form.message": "Mesaj",
    "contact.form.placeholderMessage": "Mesajınız...",
    "contact.form.placeholderEmail": "siz@example.com",
    "contact.form.placeholderName": "Adınız",
    "contact.form.error.nameRequired": "Ad tələb olunur",
    "contact.form.error.emailRequired": "E-poçt tələb olunur",
    "contact.form.error.emailInvalid": "E-poçt yanlışdır",
    "contact.form.error.messageRequired": "Mesaj tələb olunur",
    "contact.form.submit": "Mesaj göndər →",
    "contact.form.sending": "Göndərilir...",
    "footer.tagline": "Azərbaycanın ən dəyərli cinsinin qızıl irsini qoruyuruq — hər hekayə, hər addım.",
    "footer.learnMore": "Wikipedia-da daha çox öyrənin →",
    "footer.explore": "Kəşf et",
    "footer.connect": "Əlaqə",
    "footer.stayUpdated": "Yeniliklərdən xəbərdar olun",
    "footer.subscribeText": "Cinsin qorunması ilə bağlı yeniliklər üçün abunə olun.",
    "footer.emailPlaceholder": "sizin@email.com",
    "footer.rights": "Bütün hüquqlar qorunur.",
    "gallery.label": "Vizual hekayələr",
    "gallery.title": "Gözəlliyin <em>qalereyası</em>",
    "gallery.subtitle": "Hər şəkil zəriflik, güc və zamansız gözəlliyin bir anını əks etdirir.",
    "gallery.caption.1": "Kəhrəba — Qızıl olan",
    "gallery.caption.2": "Klassik Qarabağ profili",
    "gallery.caption.3": "Dağlarda azad",
    "gallery.caption.4": "Şabalıdı rəng günbatımında",
    "gallery.caption.5": "Sübh çağı çapış",
    "gallery.caption.6": "Çöllərin ruhu",
    "gallery.caption.7": "Möhtəşəm addım",
    "gallery.caption.8": "Zadəgan portreti",
    "gallery.caption.9": "Vəhşi və azad",
    "facts.item.1.title": "Qədim mənşə",
    "facts.item.1.text": "Qarabağ atı dünyanın ən qədim cinslərindən biridir; kökləri Cənubi Qafqazın dağ-çöl bölgələrində 2 500 ildən çox əvvələ gedib çıxır.",
    "facts.item.2.title": "Metallik qızılı rəng",
    "facts.item.2.text": "Onların imza şabalıdı və ya doru rəngi metallik parlaqlığa malikdir — bu təbii xüsusiyyət onları unikal edir.",
    "facts.item.3.title": "Milli rəmz",
    "facts.item.3.text": "Rəsmi olaraq Azərbaycanın milli atı kimi tanınır; poçt markalarında, dövlət rəmzlərində və mədəni festivallarda yer alır.",
    "facts.item.4.title": "Yüksək sürət",
    "facts.item.4.text": "Yığcam boyuna (14–15 hand) baxmayaraq çox sürətlidir; tarixən Çovqan (polo) kimi ənənəvi idmanda istifadə olunub.",
    "facts.item.5.title": "Dağ dözümlülüyü",
    "facts.item.5.text": "Yüksək dağlıq ərazilərdə formalaşıb; böyük cinslərin çətinlik çəkdiyi yerlərdə möhkəm addımlayır.",
    "facts.item.6.title": "Kritik təhlükə",
    "facts.item.6.text": "Bir vaxtlar saf Qarabağ atlarının sayı 50-dən də az idi. Azərbaycanda yetişdirmə proqramları populyasiyanı bərpa edir.",
    "facts.item.7.title": "Sarayların sevimlisi",
    "facts.item.7.text": "İran şahları, Rusiya çarları və Avropa zadəganları Qarabağ atlarını çox qiymətləndirirdi — krallara layiq hədiyyə sayılırdı.",
    "facts.item.8.title": "Mədəni irs",
    "facts.item.8.text": "At Azərbaycan folklorunda, poeziyada, xalçaçılıqda və UNESCO siyahısına daxil olan Çovqan ənənəsində mühüm yer tutur.",
    "horse.kehraba.meaning": "“Kəhrəba”",
    "horse.kehraba.desc": "Parlaq kəhrəba-qızılı rənginə görə adlandırılan Kəhrəba müasir dövrdə ən məşhur Qarabağ madyanıdır — mülayim xasiyyətli, amma yarış meydanında çox sürətlidir.",
    "horse.sumakh.meaning": "“Sumax giləsi”",
    "horse.sumakh.desc": "Alovlu ruhlu tünd şabalıdı ayğır Sumax cinsin dağ irsini təcəssüm etdirir — sadiq, cəsur və inanılmaz çevikdir.",
    "horse.zaman.meaning": "“Zaman”",
    "horse.zaman.desc": "Zaman cinsin əbədiliyini simvolizə edir — nəsil şəcərəsi nəsillər boyunca Ağdamda fasiləsiz izlənən zərif və heybətli atdır.",
  },
  en: {
    "brand.name": "Karabakh Horses",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.facts": "Facts",
    "nav.horses": "Horses",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "lang.az": "AZ",
    "lang.en": "EN",
    "lang.ru": "RU",
    "hero.kicker": "Azerbaijan's Living Legend",
    "hero.slide1.headline": "The Golden Horse of the Caucasus",
    "hero.slide1.sub": "A living symbol of Azerbaijani heritage — fierce, elegant, immortal.",
    "hero.slide2.headline": "Speed Born from Ancient Mountains",
    "hero.slide2.sub": "Bred for centuries in the highland steppes of Karabakh, unmatched in endurance.",
    "hero.slide3.headline": "Treasured by Shahs & Tsars",
    "hero.slide3.sub": "Prized across empires, the Karabakh horse defined prestige across the ancient world.",
    "hero.cta.primary": "Discover the Breed",
    "hero.cta.secondary": "View Gallery ↓",
    "about.label": "About the Breed",
    "about.title": "Born in the <em>Caucasus</em>,<br />Built for Eternity",
    "about.lede": "The Karabakh horse — <em>Qarabağ atı</em> — is a mountain-steppe racing and riding breed from the ancient Karabakh region of Azerbaijan.",
    "about.p1": "For centuries these horses were nurtured by the Khans of Karabakh and coveted by Persian shahs, Russian tsars, and European nobles. Their distinctive metallic golden-chestnut coat, compact yet powerful build, and fiery yet gentle temperament set them apart.",
    "about.p2": "Today, recognized as Azerbaijan's national symbol, dedicated preservation programs are working to restore a breed that once came perilously close to extinction.",
    "about.metric": "Years of Heritage",
    "about.pillar1.label": "Ancient Lineage",
    "about.pillar1.desc": "Over 2,500 years of traceable heritage from the mountain-steppes of the South Caucasus.",
    "about.pillar2.label": "Remarkable Speed",
    "about.pillar2.desc": "Compact yet blazingly fast — historically used in the prestigious sport of Chovgan.",
    "about.pillar3.label": "Mountain Stamina",
    "about.pillar3.desc": "Evolved for high-altitude terrain; surefooted where larger breeds falter.",
    "about.pillar4.label": "Metallic Sheen",
    "about.pillar4.desc": "Their signature golden coat shimmers with a natural metallic luster unlike any other breed.",
    "about.cta": "Explore the Gallery →",
    "facts.label": "Did You Know?",
    "facts.title": "<em>Eight</em> Fascinating Facts",
    "facts.quote": "\"The Karabakh horse is not merely an animal — it is a poem written in flesh and speed.\"",
    "facts.cite": "— Azerbaijani Folk Saying",
    "horses.label": "The Legends",
    "horses.title": "Famous <em>Karabakh</em> Horses",
    "horses.watchLabel": "Watch",
    "horses.watchText": "See Karabakh horses in their natural glory",
    "horses.videoTitle": "Karabakh Horses",
    "contact.label": "Get in Touch",
    "contact.title": "Connect With <em>Us</em>",
    "contact.lede": "Whether you're a researcher, enthusiast, or someone captivated by the beauty of Karabakh horses — we'd love to hear from you.",
    "contact.info.location": "Location",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.form.sentTitle": "Message Sent!",
    "contact.form.sentText": "Thank you for reaching out. We'll get back to you soon.",
    "contact.form.sendAnother": "Send Another",
    "contact.form.fullName": "Full Name",
    "contact.form.emailAddress": "Email Address",
    "contact.form.message": "Message",
    "contact.form.placeholderMessage": "Your message...",
    "contact.form.placeholderEmail": "you@example.com",
    "contact.form.placeholderName": "Your name",
    "contact.form.error.nameRequired": "Name is required",
    "contact.form.error.emailRequired": "Email is required",
    "contact.form.error.emailInvalid": "Invalid email",
    "contact.form.error.messageRequired": "Message is required",
    "contact.form.submit": "Send Message →",
    "contact.form.sending": "Sending...",
    "footer.tagline": "Preserving the golden legacy of Azerbaijan's most treasured breed — one story, one stride at a time.",
    "footer.learnMore": "Learn more on Wikipedia →",
    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.stayUpdated": "Stay Updated",
    "footer.subscribeText": "Subscribe for news about breed preservation.",
    "footer.emailPlaceholder": "your@email.com",
    "footer.rights": "All rights reserved.",
    "gallery.label": "Visual Stories",
    "gallery.title": "A Gallery of <em>Beauty</em>",
    "gallery.subtitle": "Each image captures a moment of grace, power, and timeless elegance.",
    "gallery.caption.1": "Kehraba — The Golden One",
    "gallery.caption.2": "Classic Karabakh Profile",
    "gallery.caption.3": "Free in the Highlands",
    "gallery.caption.4": "Chestnut Coat at Dusk",
    "gallery.caption.5": "Gallop at Dawn",
    "gallery.caption.6": "Spirit of the Steppes",
    "gallery.caption.7": "Majestic Stride",
    "gallery.caption.8": "Noble Portrait",
    "gallery.caption.9": "Wild & Free",
    "facts.item.1.title": "Ancient Origins",
    "facts.item.1.text": "The Karabakh horse is one of the world's oldest breeds, with roots tracing back over 2,500 years in the mountain-steppes of the South Caucasus.",
    "facts.item.2.title": "Metallic Golden Coat",
    "facts.item.2.text": "Their signature chestnut or bay coat carries a distinctive metallic sheen — a natural phenomenon that makes them unlike any other horse breed on Earth.",
    "facts.item.3.title": "National Symbol",
    "facts.item.3.text": "Officially recognized as the national horse of Azerbaijan, the Karabakh breed appears on postage stamps, state emblems, and cultural festivals.",
    "facts.item.4.title": "Exceptional Speed",
    "facts.item.4.text": "Despite their compact stature (14–15 hands), Karabakh horses are remarkably fast — historically used in the traditional sport of Chovgan (polo).",
    "facts.item.5.title": "Mountain Endurance",
    "facts.item.5.text": "Evolved in high-altitude terrain, they possess extraordinary stamina and sure-footedness, thriving where larger breeds would struggle.",
    "facts.item.6.title": "Critically Endangered",
    "facts.item.6.text": "At one point fewer than 50 pure Karabakh horses existed. Dedicated breeding programs in Azerbaijan are actively working to restore the population.",
    "facts.item.7.title": "Prized by Royalty",
    "facts.item.7.text": "Persian shahs, Russian tsars, and European nobles all coveted Karabakh horses — they were considered gifts worthy only of kings.",
    "facts.item.8.title": "Cultural Heritage",
    "facts.item.8.text": "The horse is central to Azerbaijani folk art, poetry, carpet weaving, and the UNESCO-listed tradition of Chovgan — a sport on horseback.",
    "horse.kehraba.meaning": "\"Amber\"",
    "horse.kehraba.desc": "Named for her luminous amber-gold coat, Kehraba is the most celebrated modern Karabakh mare — gentle in temperament yet blazingly fast on the track.",
    "horse.sumakh.meaning": "\"Sumac Berry\"",
    "horse.sumakh.desc": "A deep chestnut stallion with a fiery spirit, Sumakh embodies the wild mountain heritage of the breed — loyal, bold, and breathtakingly agile.",
    "horse.zaman.meaning": "\"Time\"",
    "horse.zaman.desc": "Zaman represents the timeless nature of the breed — a stately, refined horse whose pedigree can be traced back unbroken for generations in Agdam.",
  },
  ru: {
    "brand.name": "Karabakh Horses",
    "nav.home": "Главная",
    "nav.about": "О породе",
    "nav.gallery": "Галерея",
    "nav.facts": "Факты",
    "nav.horses": "Лошади",
    "nav.contact": "Контакты",
    "lang.label": "Язык",
    "lang.az": "AZ",
    "lang.en": "EN",
    "lang.ru": "RU",
    "hero.kicker": "Живая легенда Азербайджана",
    "hero.slide1.headline": "Золотая лошадь Кавказа",
    "hero.slide1.sub": "Живой символ азербайджанского наследия — сильный, изящный, вечный.",
    "hero.slide2.headline": "Скорость, рождённая древними горами",
    "hero.slide2.sub": "Веками разводилась в высокогорных степях Карабаха — непревзойдённая выносливость.",
    "hero.slide3.headline": "Ценилась шахами и царями",
    "hero.slide3.sub": "Дорожила империями — карабахская лошадь была символом престижа в древнем мире.",
    "hero.cta.primary": "Узнать о породе",
    "hero.cta.secondary": "Смотреть галерею ↓",
    "about.label": "О породе",
    "about.title": "Рождённая на <em>Кавказе</em>,<br />созданная для вечности",
    "about.lede": "Карабахская лошадь — <em>Qarabağ atı</em> — горно-степная порода верховых и скаковых лошадей из древнего региона Карабах в Азербайджане.",
    "about.p1": "Веками этих лошадей выращивали карабахские ханы, а персидские шахи, русские цари и европейская знать высоко их ценили. Металлический золотисто-каштановый окрас, компактное, но мощное телосложение и горячий, но мягкий темперамент выделяют породу.",
    "about.p2": "Сегодня, признанная национальным символом Азербайджана, порода восстанавливается благодаря программам сохранения — когда-то она была на грани исчезновения.",
    "about.metric": "лет наследия",
    "about.pillar1.label": "Древняя родословная",
    "about.pillar1.desc": "Более 2 500 лет прослеживаемой истории из горно-степных районов Южного Кавказа.",
    "about.pillar2.label": "Выдающаяся скорость",
    "about.pillar2.desc": "Компактная, но невероятно быстрая — исторически использовалась в престижной игре чёвган.",
    "about.pillar3.label": "Горная выносливость",
    "about.pillar3.desc": "Приспособлена к высотам; уверенно держится там, где более крупные породы сдают.",
    "about.pillar4.label": "Металлический блеск",
    "about.pillar4.desc": "Фирменный золотистый окрас переливается естественным металлическим блеском.",
    "about.cta": "Открыть галерею →",
    "facts.label": "Знаете ли вы?",
    "facts.title": "<em>Восемь</em> интересных фактов",
    "facts.quote": "«Карабахская лошадь — это не просто животное; это поэма, написанная плотью и скоростью».",
    "facts.cite": "— Азербайджанская народная мудрость",
    "horses.label": "Легенды",
    "horses.title": "Знаменитые <em>карабахские</em> лошади",
    "horses.watchLabel": "Смотреть",
    "horses.watchText": "Посмотрите карабахских лошадей во всей их естественной красоте",
    "horses.videoTitle": "Karabakh Horses",
    "contact.label": "Связаться с нами",
    "contact.title": "Свяжитесь с <em>нами</em>",
    "contact.lede": "Будь вы исследователь, энтузиаст или просто очарованы красотой карабахских лошадей — будем рады вашему сообщению.",
    "contact.info.location": "Место",
    "contact.info.phone": "Телефон",
    "contact.info.email": "Email",
    "contact.form.sentTitle": "Сообщение отправлено!",
    "contact.form.sentText": "Спасибо за обращение. Мы скоро свяжемся с вами.",
    "contact.form.sendAnother": "Отправить ещё",
    "contact.form.fullName": "Имя и фамилия",
    "contact.form.emailAddress": "Email",
    "contact.form.message": "Сообщение",
    "contact.form.placeholderMessage": "Ваше сообщение...",
    "contact.form.placeholderEmail": "you@example.com",
    "contact.form.placeholderName": "Ваше имя",
    "contact.form.error.nameRequired": "Имя обязательно",
    "contact.form.error.emailRequired": "Email обязателен",
    "contact.form.error.emailInvalid": "Некорректный email",
    "contact.form.error.messageRequired": "Сообщение обязательно",
    "contact.form.submit": "Отправить →",
    "contact.form.sending": "Отправка...",
    "footer.tagline": "Сохраняем золотое наследие самой ценной породы Азербайджана — история за историей, шаг за шагом.",
    "footer.learnMore": "Узнать больше в Wikipedia →",
    "footer.explore": "Разделы",
    "footer.connect": "Связь",
    "footer.stayUpdated": "Будьте в курсе",
    "footer.subscribeText": "Подпишитесь на новости о сохранении породы.",
    "footer.emailPlaceholder": "your@email.com",
    "footer.rights": "Все права защищены.",
    "gallery.label": "Визуальные истории",
    "gallery.title": "Галерея <em>красоты</em>",
    "gallery.subtitle": "Каждый кадр передаёт момент грации, силы и вечной элегантности.",
    "gallery.caption.1": "Кехраба — «золотая»",
    "gallery.caption.2": "Классический профиль",
    "gallery.caption.3": "Свобода в высокогорье",
    "gallery.caption.4": "Каштановый окрас на закате",
    "gallery.caption.5": "Галоп на рассвете",
    "gallery.caption.6": "Дух степей",
    "gallery.caption.7": "Величественный шаг",
    "gallery.caption.8": "Благородный портрет",
    "gallery.caption.9": "Дикая и свободная",
    "facts.item.1.title": "Древнее происхождение",
    "facts.item.1.text": "Карабахская лошадь — одна из древнейших пород мира; её история насчитывает более 2 500 лет в горно-степных районах Южного Кавказа.",
    "facts.item.2.title": "Металлический золотой окрас",
    "facts.item.2.text": "Фирменный каштановый или гнедой окрас имеет выраженный металлический блеск — редкое природное явление.",
    "facts.item.3.title": "Национальный символ",
    "facts.item.3.text": "Официально признана национальной лошадью Азербайджана; встречается на марках, эмблемах и на культурных фестивалях.",
    "facts.item.4.title": "Исключительная скорость",
    "facts.item.4.text": "Несмотря на компактный рост (14–15 хендов), карабахские лошади очень быстры; исторически использовались в чёвгане (поло).",
    "facts.item.5.title": "Горная выносливость",
    "facts.item.5.text": "Сформировалась в высокогорье, обладает большой выносливостью и уверенностью шага.",
    "facts.item.6.title": "Под угрозой исчезновения",
    "facts.item.6.text": "В какой-то момент чистокровных карабахских лошадей оставалось меньше 50. Программы разведения помогают восстановить популяцию.",
    "facts.item.7.title": "Ценилась знатью",
    "facts.item.7.text": "Персидские шахи, русские цари и европейская знать высоко ценили карабахских лошадей — их считали подарком, достойным королей.",
    "facts.item.8.title": "Культурное наследие",
    "facts.item.8.text": "Лошадь занимает важное место в азербайджанском фольклоре, поэзии, ковроткачестве и традиции чёвгана, включённой в список ЮНЕСКО.",
    "horse.kehraba.meaning": "«Янтарь»",
    "horse.kehraba.desc": "Названная за сияющий янтарно-золотой окрас, Кехраба — самая известная современная карабахская кобыла: спокойная по характеру, но очень быстрая на дорожке.",
    "horse.sumakh.meaning": "«Сумах»",
    "horse.sumakh.desc": "Темно-каштановый жеребец с огненным нравом; Сумах воплощает горное наследие породы — верный, смелый и невероятно ловкий.",
    "horse.zaman.meaning": "«Время»",
    "horse.zaman.desc": "Заман символизирует вечность породы — статный, утончённый конь, родословная которого прослеживается поколениями в Агдаме.",
  },
};


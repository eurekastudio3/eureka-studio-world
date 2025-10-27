// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// i18n strings
const t = {
  en: {
    "nav.about":"About", "nav.works":"Works", "nav.contact":"Contact",
    "hero.title":"Making candles is simple — and wonderful time for everyone.",
    "hero.subtitle":"High-quality craft scents, cozy colors and textures that turn moments into memories.",
    "cta.viewWorks":"View our works", "cta.contact":"Contact",
    "about.title":"About",
    "about.intro":"Each piece is handmade in small batches; inspired by color, texture and light.",
    "about.f1":"Handmade & limited production",
    "about.f2":"Carefully selected pigments & essences",
    "about.f3":"Custom design options",
    "works.title":"Works",
    "works.intro":"Each design is made with love — a balance of color and texture.",
    "prod.evilEye.name":"Evil Eye", "prod.evilEye.desc":"A protective symbol that brings calm and balance.",
    "prod.summerCocktail.name":"Summer Cocktail", "prod.summerCocktail.desc":"Layered colors that recall a breezy summer drink.",
    "prod.chocoCream.name":"Choco Cream", "prod.chocoCream.desc":"Sweet vibes, creamy textures, modern look.",
    "prod.goldenNoir.name":"Gold Noir", "prod.goldenNoir.desc":"Matte black body with elegant gold details.",
    "prod.caramelCrumble.name":"Caramel Crumble", "prod.caramelCrumble.desc":"Warm caramel notes and a delicious look.",
    "prod.sunsetOrange.name":"Sunset Orange", "prod.sunsetOrange.desc":"Citrus glow inspired by golden-hour skies.",
    "contact.title":"Contact", "contact.note":"For questions and orders:",
    "footer.all":"All rights reserved."
  },
  tr: {
    "nav.about":"Hakkında","nav.works":"Çalışmalar","nav.contact":"İletişim",
    "hero.title":"Mum yapmak basit — ve herkes için harika bir birlikte-zaman.",
    "hero.subtitle":"Yüksek kaliteli esanslar, sıcak renkler ve dokular; anları anıya dönüştürür.",
    "cta.viewWorks":"Çalışmalarımıza Bak","cta.contact":"İletişime Geç",
    "about.title":"Hakkında",
    "about.intro":"Her parça küçük serilerde elde üretilir; renkten, dokudan ve ışıktan ilham alır.",
    "about.f1":"El yapımı & sınırlı üretim",
    "about.f2":"Özenle seçilmiş pigment & esanslar",
    "about.f3":"Kişiye özel tasarım seçenekleri",
    "works.title":"Çalışmalar",
    "works.intro":"Her tasarım sevgiyle yapılır — renk ve dokunun uyumu.",
    "prod.evilEye.name":"Nazar Boncuğu","prod.evilEye.desc":"Huzur ve denge getiren koruyucu bir sembol.",
    "prod.summerCocktail.name":"Tropik Katman","prod.summerCocktail.desc":"Yaz esintilerini anımsatan canlı katmanlar.",
    "prod.chocoCream.name":"Çikolatalı Krema","prod.chocoCream.desc":"Tatlı esintiler, kremamsı dokular, modern görünüm.",
    "prod.goldenNoir.name":"Gold Noir","prod.goldenNoir.desc":"Mat siyah gövde, zarif altın detaylar.",
    "prod.caramelCrumble.name":"Karamel Crumble","prod.caramelCrumble.desc":"Sıcak karamel notalarıyla nefis bir görünüm.",
    "prod.sunsetOrange.name":"Günbatımı Turuncu","prod.sunsetOrange.desc":"Altın saat gökyüzünden esinlenen narenciye ışıltısı.",
    "contact.title":"İletişim","contact.note":"Sorular ve siparişler için:",
    "footer.all":"Tüm hakları saklıdır."
  },
  he: {
    "nav.about":"אודות","nav.works":"עבודות","nav.contact":"יצירת קשר",
    "hero.title":"הכנת נרות היא פשוטה — וזמן איכות נהדר לכולם.",
    "hero.subtitle":"ניחוחות איכותיים, צבעים ומרקמים מחממים שמייחדים כל רגע.",
    "cta.viewWorks":"לצפייה בעבודות","cta.contact":"צור קשר",
    "about.title":"אודות",
    "about.intro":"כל פריט מיוצר בעבודת יד בסדרות קטנות; בהשראת צבע, מרקם ואור.",
    "about.f1":"עבודת יד ויצור מוגבל",
    "about.f2":"פיגמנטים ותמציות נבחרים בקפידה",
    "about.f3":"אפשרויות עיצוב בהתאמה אישית",
    "works.title":"עבודות",
    "works.intro":"כל עיצוב נוצר באהבה — איזון בין צבע למרקם.",
    "prod.evilEye.name":"עין המזל","prod.evilEye.desc":"סמל הגנה שמביא רוגע ואיזון.",
    "prod.summerCocktail.name":"קוקטייל קיץ","prod.summerCocktail.desc":"שכבות צבע המזכירות משקה קיצי ורענן.",
    "prod.chocoCream.name":"שוקו קרם","prod.chocoCream.desc":"אוירה מתוקה, מרקמים קרמיים ומראה מודרני.",
    "prod.goldenNoir.name":"גולד נואר","prod.goldenNoir.desc":"גוף שחור מאט עם פרטים מוזהבים אלגנטיים.",
    "prod.caramelCrumble.name":"קראמל קרמבל","prod.caramelCrumble.desc":"נגיעות קראמל חמימות ומראה מגרה.",
    "prod.sunsetOrange.name":"שקיעה כתומה","prod.sunsetOrange.desc":"זוהר הדרים בהשראת שעת הזהב.",
    "contact.title":"יצירת קשר","contact.note":"לשאלות והזמנות:",
    "footer.all":"כל הזכויות שמורות."
  }
};

// apply translation
const applyLang = (lang) => {
  const dict = t[lang] || t.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
};

// init
const select = document.getElementById("lang");
select.addEventListener("change", e => {
  const lang = e.target.value;
  localStorage.setItem("eureka-lang", lang);
  applyLang(lang);
});

// load saved or default
applyLang(localStorage.getItem("eureka-lang") || "en");
select.value = document.documentElement.lang || "en";

export const siteConfig = {
  name: "Furtech Teknoloji",
  legalName: "Furtech Teknoloji A.Ş.",
  url: "https://furtech.com.tr",
  logoIcon: "/logo-icon.png",
  tagline: "İşletmenizin bütün dijital sistemi, tek ekipten.",
  description:
    "Kadıköy merkezli Furtech Teknoloji; web sitesi, mobil uygulama, turnike ve kartlı geçiş, POS ve ERP sistemlerini kurar, sosyal medya, Google ve Meta reklamlarıyla işletmenizi büyütür.",
  email: "furkantosun@furtech.com.tr",
  contactFormEmail: "furkantosun@furtech.com.tr",
  phone: "+90 538 484 0141",
  whatsapp: "905384840141",
  address: "Kadıköy, İstanbul",
  serviceArea: "Kadıköy merkez, Türkiye geneli hizmet",
  hours: "Pazartesi – Cuma, 09:00 – 18:00",
};

export const navLinks = [
  { href: "/services", label: "Hizmetler" },
  { href: "/projects", label: "Projeler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export type ServiceGroup = "build" | "grow";

export type Service = {
  id: string;
  group: ServiceGroup;
  title: string;
  short: string;
  problem: string;
  solution: string;
  deliverables: string[];
  command: string;
  project?: { label: string; href: string };
};

export const serviceGroups: Record<ServiceGroup, { title: string; summary: string }> = {
  build: {
    title: "Kuruyoruz",
    summary: "İşletmenizin çalıştığı yazılımı ve donanımı baştan kurar, birbirine bağlarız.",
  },
  grow: {
    title: "Büyütüyoruz",
    summary: "Kurduğumuz sisteme müşteri getiririz: içerik, reklam ve ölçüm.",
  },
};

export const services: Service[] = [
  {
    id: "web",
    group: "build",
    title: "Web sitesi",
    short: "Müşterinin sizi bulduğu, güvendiği ve teklif istediği site.",
    problem: "Siteniz yavaş, mobilde dağılıyor ya da Google'da çıkmıyor; ziyaretçi gelip teklif istemeden çıkıyor.",
    solution:
      "Hızlı açılan, mobilde kusursuz çalışan, Google'a uygun kurumsal siteler kuruyoruz. Form, WhatsApp ve arama butonlarına dönüşüm takibi bağlıyoruz; hangi reklamın müşteri getirdiğini görürsünüz.",
    deliverables: ["Next.js ile hızlı kurumsal site", "Mobil öncelikli tasarım", "SEO ve Google İşletme uyumu", "Form, WhatsApp ve arama takibi"],
    command: "furtech kur web-sitesi",
    project: { label: "Asaf Alüminyum kurumsal sitesi", href: "/projects#asaf-aluminyum" },
  },
  {
    id: "mobile",
    group: "build",
    title: "Mobil uygulama",
    short: "Fikirden App Store ve Google Play'e kadar iOS ve Android uygulama.",
    problem: "Uygulama fikriniz var ama tasarım, yazılım ve mağaza yayını için üç ayrı ekiple uğraşmak istemiyorsunuz.",
    solution:
      "Kullanıcı deneyimini tasarlıyor, React Native ile iOS ve Android'i tek kod tabanında geliştiriyor, mağaza yayınına kadar götürüyoruz. Yayından sonra güncelleme ve bakımı da biz yapıyoruz.",
    deliverables: ["UX ve arayüz tasarımı", "iOS ve Android (React Native)", "Bildirim, ödeme ve hesap altyapısı", "App Store ve Google Play yayını"],
    command: "furtech kur mobil-uygulama",
    project: { label: "Psyconnect uygulaması", href: "/projects#psyconnect" },
  },
  {
    id: "access",
    group: "build",
    title: "Turnike ve kartlı geçiş",
    short: "Kart, bileklik ya da QR ile giriş; bakiye yükleme ve merkezi kontrol.",
    problem: "Turnikeler eski, kart sistemi başka firmada, giriş verisi hiçbir yazılımla konuşmuyor.",
    solution:
      "Turnike ve kart okuyucuları yeniliyor, RFID/NFC kart ve bakiye sistemini kendi yazılımımızla kuruyoruz. Her giriş anında panele düşer; kaç kişinin içeride olduğunu canlı görürsünüz.",
    deliverables: ["Turnike ve kart okuyucu kurulumu", "RFID / NFC kart ve bileklik", "Bakiye yükleme sistemi", "Anlık ziyaretçi sayımı"],
    command: "furtech kur gecis-sistemi",
    project: { label: "Bodrum Aquapark", href: "/projects#bodrum-aquapark" },
  },
  {
    id: "erp",
    group: "build",
    title: "POS, ödeme ve ERP",
    short: "Satış noktaları, ödeme yöntemleri, stok ve personel tek altyapıda.",
    problem: "Kasadaki satış, depodaki stok ve personel takibi ayrı yerlerde; ay sonunda rakamlar tutmuyor.",
    solution:
      "Satış noktası yazılımını, ödeme yöntemlerini ve ERP'yi aynı veritabanına bağlıyoruz. Her satış stoktan düşer, her vardiya kayda geçer; kayıp ve kaçak görünür hale gelir.",
    deliverables: ["Satış noktası (POS) yazılımı", "Nakit, kart ve bakiye ile ödeme", "Stok ve depo takibi", "Personel ve İK modülü"],
    command: "furtech kur pos-erp",
    project: { label: "Bodrum Aquapark", href: "/projects#bodrum-aquapark" },
  },
  {
    id: "panel",
    group: "build",
    title: "Yönetim paneli",
    short: "Ciro, stok, personel ve raporlar tek ekranda, canlı.",
    problem: "Günün cirosunu öğrenmek için üç kişiyi aramanız gerekiyor; rapor hazırlamak günler sürüyor.",
    solution:
      "İşletmenize özel bir yönetim paneli yazıyoruz: günlük ciro, düşük stok uyarısı, giderler, en çok satan ürünler ve personel performansı tek ekranda, yetkiye göre görünür.",
    deliverables: ["Canlı ciro ve gider ekranı", "Düşük stok uyarıları", "Rol ve yetki yönetimi", "Otomatik raporlar"],
    command: "furtech kur yonetim-paneli",
    project: { label: "Bodrum Aqua işletme paneli", href: "/projects#bodrum-aquapark" },
  },
  {
    id: "ai",
    group: "build",
    title: "Yapay zeka entegrasyonu",
    short: "Tekrarlayan işleri otomasyona, soruları akıllı asistana devredin.",
    problem: "Ekibiniz her gün aynı soruları yanıtlıyor, aynı tabloları elle dolduruyor.",
    solution:
      "Mevcut sistemlerinize yapay zeka bağlıyoruz: müşteri sorularını yanıtlayan asistanlar, belge ve veri işleyen otomasyonlar, verinizden özet çıkaran raporlar.",
    deliverables: ["Müşteri asistanı (chatbot)", "Süreç otomasyonu", "Veri analizi ve özet raporlar", "Mevcut yazılımlara entegrasyon"],
    command: "furtech kur yapay-zeka",
  },
  {
    id: "social",
    group: "grow",
    title: "Sosyal medya yönetimi",
    short: "Instagram ve LinkedIn'de düzenli, ölçülen ve iş getiren içerik.",
    problem: "Hesaplar haftalarca boş kalıyor; paylaşım yapılsa da kimden müşteri geldiği bilinmiyor.",
    solution:
      "Aylık içerik takvimi çıkarıyor, Reels ve motion videoları üretiyor, paylaşıyor ve gelen mesajları yönetiyoruz. Her ay hangi içeriğin talep getirdiğini raporluyoruz.",
    deliverables: ["Aylık içerik takvimi", "Reels ve motion video üretimi", "Instagram ve LinkedIn yönetimi", "Aylık performans raporu"],
    command: "furtech buyut sosyal-medya",
  },
  {
    id: "google",
    group: "grow",
    title: "Google reklamları",
    short: "Sizi arayan müşterinin karşısına ilk siz çıkın.",
    problem: "Müşteri hizmetinizi Google'da arıyor, rakibinizi buluyor; ya da reklama para veriyorsunuz ama sonucu göremiyorsunuz.",
    solution:
      "Arama ve harita kampanyalarını kuruyor, form, arama ve WhatsApp dönüşümlerini ölçüyoruz. Bütçe, tıklama değil talep getiren kelimelere gider.",
    deliverables: ["Arama ve harita kampanyaları", "Dönüşüm takibi kurulumu", "Anahtar kelime ve bütçe optimizasyonu", "Google İşletme Profili"],
    command: "furtech buyut google-ads",
  },
  {
    id: "meta",
    group: "grow",
    title: "Meta reklamları",
    short: "Instagram ve Facebook'ta doğru kişiye, doğru videoyla ulaşın.",
    problem: "Gönderiyi öne çıkarıyorsunuz, beğeni geliyor ama teklif gelmiyor.",
    solution:
      "Hedef kitleyi işletmenize göre kuruyor, reklam videolarını biz üretiyor, mesaj ve form kampanyalarını yönetiyoruz. Hangi reklamın kaç talep getirdiği her hafta önünüzde.",
    deliverables: ["Instagram ve Facebook kampanyaları", "Reklam videosu ve görsel üretimi", "Hedef kitle ve yeniden pazarlama", "Haftalık sonuç raporu"],
    command: "furtech buyut meta-ads",
  },
];

export type Project = {
  id: string;
  client: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  scope: string[];
  results?: string[];
};

export const projects: Project[] = [
  {
    id: "bodrum-aquapark",
    client: "Bodrum Aquapark",
    title: "10 yıllık sistemden sıfırdan dijital operasyona",
    summary:
      "İlk gittiğimizde yazılım yaklaşık on yıllıktı; turnikeler ve işletmedeki dokunmatik ekranlı cihazların hepsi eskiydi. Hepsini yeniledik, sıfırdan yazılım altyapısı kurduk, yeni ödeme yöntemlerini ve ERP sistemini devreye aldık.",
    image: "/projects/bodrum-aquapark.jpg",
    imageAlt: "Bodrum Aquapark'ın havadan görünümü",
    scope: [
      "Server ve network altyapısı",
      "Turnike ve kartlı geçiş",
      "Satış noktası ve bakiye yükleme",
      "Yeni ödeme yöntemleri",
      "ERP, stok ve personel paneli",
    ],
    results: [
      "Stok kayıpları %25 azaldı",
      "Çalışan verimliliği ölçülebilir hale geldi",
      "Ziyaretçi ve alışveriş yapan müşteri sayısı anlık izleniyor",
      "Tüm operasyon tek ekrandan yönetiliyor",
    ],
  },
  {
    id: "asaf-aluminyum",
    client: "Asaf Alüminyum",
    title: "Üretim firması için kurumsal web sitesi",
    summary:
      "Avrupa, Orta Doğu ve Kafkasya'ya ihracat yapan bir alüminyum üreticisinin kurumsal sitesi: ürünler, mimari sistemler, üretim tesisleri ve referanslar tek, hızlı bir sitede.",
    image: "/projects/web-development.jpg",
    imageAlt: "Asaf Alüminyum kurumsal web sitesinin ana sayfası",
    scope: ["Kurumsal web tasarımı", "Ürün ve sistem sayfaları", "Mobil uyumlu arayüz", "SEO altyapısı"],
  },
  {
    id: "psyconnect",
    client: "Psyconnect",
    title: "iOS ve Android mobil uygulama",
    summary:
      "Psyconnect'in mobil uygulamasını iOS ve Android için geliştirdik: kullanıcı deneyimi, performans ve büyüyebilen bir altyapı merkezde.",
    image: "/projects/mobile-app.jpg",
    imageAlt: "Psyconnect logosu",
    scope: ["UX ve arayüz tasarımı", "iOS ve Android geliştirme", "Mağaza yayını", "Bakım ve güncellemeler"],
  },
];

export const references = [
  { id: "asaf-aluminyum", name: "Asaf Alüminyum", sector: "Alüminyum ve üretim" },
  { id: "ayka-turizm", name: "Ayka Turizm", sector: "Turizm ve eğlence" },
  { id: "yegenler-insaat", name: "Yeğenler İnşaat Nakliyat", sector: "İnşaat ve lojistik" },
  { id: "psyconnect", name: "Psyconnect", sector: "Mobil uygulama" },
];

export const stats = [
  { value: "100+", label: "tamamlanan proje" },
  { value: "85+", label: "mutlu müşteri" },
  { value: "8+", label: "yıllık deneyim" },
];

export const process = [
  {
    title: "Keşif",
    text: "İşletmenizi yerinde ya da görüntülü inceliyoruz. Hangi sistem nerede tıkanıyor, neyi değiştirmek gerçekten fark yaratır, birlikte çıkarıyoruz.",
  },
  {
    title: "Plan ve teklif",
    text: "Kapsamı, takvimi ve bütçeyi tek sayfada netleştiriyoruz. Ne alacağınızı, ne zaman alacağınızı başlamadan bilirsiniz.",
  },
  {
    title: "Kurulum",
    text: "Yazılımı geliştiriyor, cihazları kuruyor, eski verinizi taşıyoruz. Her hafta çalışan bir parça gösteriyoruz.",
  },
  {
    title: "Yayın ve destek",
    text: "Sistemi devreye alıyor, ekibinizi eğitiyoruz. Yayından sonra bakım, güncelleme ve teknik destek bizde.",
  },
];

export const values = [
  { title: "Tek muhatap", text: "Yazılım, donanım ve pazarlama için ayrı firmalarla uğraşmazsınız." },
  { title: "Ölçülebilir sonuç", text: "Her işi rakamla raporlarız: kaç talep, ne kadar tasarruf, hangi kayıp kapandı." },
  { title: "Şeffaf süreç", text: "Takvim, bütçe ve ilerleme her aşamada önünüzde." },
  { title: "Uzun vadeli destek", text: "Teslimattan sonra da bakım ve destekle yanınızdayız." },
];

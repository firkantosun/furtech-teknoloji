export const siteConfig = {
  name: "Furtech Teknoloji",
  url: "https://furtech.com.tr",
  logoIcon: "/logo-icon.png",
  tagline: "Geleceği Kodluyoruz",
  description:
    "Web sitesi, mobil uygulama, geçiş sistemleri ve operasyon yazılımlarıyla işletmenizin dijital altyapısını uçtan uca kuruyoruz.",
  email: "furkantosunoficial@gmail.com",
  contactFormEmail: "furkantosun@furtech.com.tr",
  phone: "+90 538 484 0141",
  whatsapp: "905384840141",
  address: "İstanbul, Türkiye",
};

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/projects", label: "Projeler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export const services = [
  {
    id: "web",
    title: "Web Sitesi Geliştirme",
    description:
      "Modern, hızlı ve mobil uyumlu kurumsal web siteleri. Şirketinizin dijital vitrini olacak sade ve profesyonel arayüzler.",
    icon: "Code2",
    features: ["Next.js", "SEO uyumu", "Mobil responsive", "Hızlı yükleme"],
  },
  {
    id: "mobile",
    title: "Mobil Uygulama Geliştirme",
    description:
      "Psyconnect başta olmak üzere iOS ve Android uyumlu mobil uygulamalar. UX, performans ve ölçeklenebilir altyapı odaklı.",
    icon: "Smartphone",
    features: ["iOS & Android", "React Native", "App Store yayını", "Push bildirimler"],
  },
  {
    id: "access",
    title: "Geçiş Sistemleri ve Kartlı Altyapılar",
    description:
      "Turnike, kart okuyucu, bakiye yönetimi ve giriş kontrol sistemleri için yazılım ve entegrasyon çözümleri.",
    icon: "ShieldCheck",
    features: ["RFID & NFC", "Turnike entegrasyonu", "Bakiye yönetimi", "Merkezi kontrol"],
  },
  {
    id: "panel",
    title: "Yönetim Paneli ve Operasyon Yazılımları",
    description:
      "Personel, satış, raporlama, stok ve yetkilendirme süreçlerini tek panelden yöneten özel yazılım çözümleri.",
    icon: "Cog",
    features: ["Dashboard", "Raporlama", "Yetkilendirme", "Operasyon modülleri"],
  },
  {
    id: "aquapark",
    title: "Dijital Sistem Kurulumu",
    description:
      "Server, networking, kartlı geçiş, turnike, POS, bakiye yükleme ve merkezi yönetim ekranlarını kapsayan uçtan uca altyapı.",
    icon: "Network",
    features: ["Server & network", "Turnike & POS", "İK paneli", "Merkezi yönetim"],
  },
  {
    id: "ai",
    title: "Yapay Zeka Çözümleri",
    description:
      "İş süreçlerinize entegre yapay zeka: akıllı otomasyon, veri analizi, chatbot ve özel model geliştirme ile operasyonel verimlilik.",
    icon: "Brain",
    features: ["LLM entegrasyonu", "Akıllı otomasyon", "Veri analizi", "Özel AI modelleri"],
  },
];

/**
 * Proje / hizmet alanı görselleri — dosyaları /public/projects/ altına ekleyin.
 *
 * Önerilen görsel özellikleri (tüm kartlar 16:10 oranında):
 * - Boyut: 1600 × 1000 px
 * - Oran: 16:10
 * - Format: WebP
 * - Dosya boyutu: mümkünse 400 KB altında
 */
export const projects = [
  {
    id: "web-development",
    title: "Web Sitesi Geliştirme",
    category: "Web Geliştirme",
    description:
      "Modern, hızlı, mobil uyumlu ve kurumsal web siteleri geliştiriyoruz. Şirketlerin dijital vitrini olacak sade, güven veren ve profesyonel arayüzler tasarlıyoruz.",
    image: "/projects/web-development.jpg",
    tags: ["Next.js", "SEO", "Responsive"],
  },
  {
    id: "mobile-app",
    title: "Mobil Uygulama Geliştirme",
    category: "Mobil Uygulama",
    description:
      "Psyconnect başta olmak üzere iOS ve Android uyumlu mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimi, performans ve ölçeklenebilir altyapıyı merkeze alan uygulama çözümleri sunuyoruz.",
    image: "/projects/mobile-app.jpg",
    tags: ["iOS", "Android", "Psyconnect"],
  },
  {
    id: "bodrum-aquapark",
    title: "Bodrum Aquapark Dijital Sistem Kurulumu",
    category: "Aquapark Altyapısı",
    description:
      "Bodrum'da yürüttüğümüz kapsamlı projede; server kurulumu, networking altyapısı, kartlı geçiş sistemleri, turnike entegrasyonları, satış noktası yazılımı, bakiye yükleme sistemi, personel/İK paneli ve merkezi yönetim ekranlarını kapsayan uçtan uca bir dijital operasyon altyapısı geliştiriyoruz.",
    image: "/projects/bodrum-aquapark.jpg",
    tags: ["Server", "Turnike", "POS", "İK Paneli"],
  },
  {
    id: "management-panel",
    title: "Yönetim Paneli ve Operasyon Yazılımları",
    category: "Operasyon Yazılımı",
    description:
      "İşletmelerin personel, satış, raporlama, stok, yetkilendirme ve operasyon süreçlerini tek panelden yönetmesini sağlayan özel yazılım çözümleri geliştiriyoruz.",
    image: "/projects/management-panel.jpg",
    tags: ["Dashboard", "Raporlama", "Operasyon"],
  },
];

/**
 * Referans logoları — dosyaları /public/references/ altına ekleyin.
 * Önerilen: şeffaf PNG veya SVG, yatay logo, max ~400 px genişlik.
 */
export const references = [
  {
    id: "asaf-aluminyum",
    name: "Asaf Alüminyum",
    sector: "Alüminyum & Üretim",
    logo: "/references/asaf-aluminyum.webp",
  },
  {
    id: "ayka-turizm",
    name: "Ayka Turizm",
    sector: "Turizm & Eğlence",
    logo: "/references/ayka-turizm.webp",
  },
  {
    id: "yegenler-insaat",
    name: "Yeğenler İnşaat Nakliyat",
    sector: "İnşaat & Lojistik",
    logo: "/references/yegenler-insaat.webp",
  },
  {
    id: "psyconnect",
    name: "Psyconnect",
    sector: "Mobil Uygulama",
    logo: "/references/psyconnect.webp",
  },
];

export const stats = [
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "85+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıllık Deneyim" },
  { value: "%99", label: "Uptime Garantisi" },
];

export const values = [
  {
    title: "İnovasyon",
    description: "En güncel teknolojilerle sürekli gelişen çözümler sunuyoruz.",
  },
  {
    title: "Güvenilirlik",
    description: "Projelerinizi zamanında ve söz verdiğimiz kalitede teslim ediyoruz.",
  },
  {
    title: "Şeffaflık",
    description: "Her aşamada açık iletişim ve düzenli raporlama ile ilerliyoruz.",
  },
  {
    title: "Uzun Vadeli Ortaklık",
    description: "Teslimattan sonra da bakım ve destek ile yanınızdayız.",
  },
];

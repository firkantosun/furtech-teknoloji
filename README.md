# Furtech Teknoloji — Kurumsal Web Sitesi

Modern, premium kurumsal web sitesi. Next.js 15, Tailwind CSS 4 ve Framer Motion ile geliştirilmiştir.

## Özellikler

- **Sayfalar:** Ana Sayfa, Hizmetler, Projeler, Hakkımızda, İletişim
- **Tasarım:** Koyu lacivert & bej palet, glassmorphism, animasyonlar
- **Bileşenler:** Navbar, Footer, WhatsApp butonu, iletişim formu, proje kartları
- **Responsive:** Mobil, tablet ve masaüstü uyumlu

## Kurulum

```bash
cd furtech-teknoloji
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Production Build

```bash
npm run build
npm start
```

## Özelleştirme

- **Şirket bilgileri:** `lib/data.ts` — e-posta, telefon, WhatsApp numarası
- **Hizmetler & projeler:** `lib/data.ts` — `services` ve `projects` dizileri
- **Renkler:** `app/globals.css` — `@theme` değişkenleri

## Deploy

Vercel, Netlify veya herhangi bir Node.js hosting ile deploy edilebilir:

```bash
npx vercel
```

## Teknolojiler

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

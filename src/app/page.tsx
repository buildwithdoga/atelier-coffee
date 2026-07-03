"use client";

import { useState } from "react";

const menu = [
  ["Espresso", "₺95", "Yoğun, net ve karakterli."],
  ["Flat White", "₺145", "Kadifemsi süt ve dengeli espresso."],
  ["V60", "₺165", "Tek köken çekirdeklerle yavaş demleme."],
  ["Cold Brew", "₺155", "Serin, yumuşak ve düşük asiditeli."],
  ["Matcha Latte", "₺170", "Premium matcha ve ipeksi süt."],
  ["San Sebastian", "₺210", "Kremamsı, günlük hazırlanan tatlı."],
];

const gallery = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="grain min-h-screen overflow-hidden bg-[#f7f1e8] text-[#17120d]">
      <div className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-[#17120d] text-[#f7f1e8]">
        <div className="text-center">
          <p className="luxury-font text-5xl">Atelier Coffee</p>
          <p className="mt-4 text-xs uppercase tracking-[0.5em] text-white/50">
            Moda / İstanbul
          </p>
        </div>
      </div>

      <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7b56d]/20 blur-3xl" />

      <nav className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-white/25 bg-black/40 text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <a href="#" className="leading-none">
            <div className="text-xl font-semibold tracking-tight">Atelier Coffee</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-white/50">
              Moda / İstanbul
            </div>
          </a>

          <div className="hidden items-center gap-10 text-[17px] font-medium tracking-wide md:flex">
            <a href="#menu" className="transition hover:text-[#d7b56d]">Menü</a>
            <a href="#story" className="transition hover:text-[#d7b56d]">Hikayemiz</a>
            <a href="#gallery" className="transition hover:text-[#d7b56d]">Galeri</a>
            <a href="#visit" className="transition hover:text-[#d7b56d]">İletişim</a>
          </div>

          <div className="hidden items-center gap-4 text-sm md:flex">
            <a href="tel:+905550000000" className="transition hover:text-[#d7b56d]">Ara</a>
            <a href="https://instagram.com" className="rounded-full border border-white/20 px-4 py-2 transition hover:bg-white hover:text-black">
              Instagram
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            Menü
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-lg">
              <a onClick={() => setOpen(false)} href="#menu">Menü</a>
              <a onClick={() => setOpen(false)} href="#story">Hikayemiz</a>
              <a onClick={() => setOpen(false)} href="#gallery">Galeri</a>
              <a onClick={() => setOpen(false)} href="#visit">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2200&auto=format&fit=crop"
          alt="Atelier Coffee"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 md:pb-28">
          <div className="glass animate-fade-up max-w-5xl rounded-[2rem] border border-white/20 p-7 text-white shadow-2xl md:rounded-[2.5rem] md:p-12">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60 md:text-sm">
              Specialty Coffee · Fresh Bakery · Artisan Desserts
            </p>

            <h1 className="text-6xl font-semibold leading-[0.88] tracking-tight md:text-9xl">
              İstanbul’un <br />
              en zarif <br />
              kahve deneyimi.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Atelier Coffee; özenle seçilmiş çekirdekleri, sakin atmosferi ve
              günlük hazırlanan tatlılarıyla Moda’da modern bir kahve ritüeli sunar.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#menu" className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-white/85">
                Menüyü İncele
              </a>
              <a href="#visit" className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Haritada Aç
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-white/70 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-lg text-white">★★★★★ 4.9</p>
                <p className="mt-1">1.287 Google yorumu</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-white">Her gün açık</p>
                <p className="mt-1">08:00 - 22:00</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-white">Moda / Kadıköy</p>
                <p className="mt-1">İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/40 md:text-sm">
          İmza Lezzetler
        </p>
        <h2 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-8xl">
          Sade menü, güçlü karakter.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {menu.map(([name, price, desc]) => (
            <div key={name} className="group rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)]">
              <div className="mb-8 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <span className="rounded-full bg-black px-4 py-2 text-sm text-white transition duration-300 group-hover:scale-110">
                  {price}
                </span>
              </div>
              <p className="leading-7 text-black/60">{desc}</p>
              <div className="mt-8 h-px w-full bg-black/10" />
              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-black/35">
                Atelier Selection
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#17120d] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
              alt="Kafe iç mekan"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105 md:h-[620px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40 md:text-sm">
              Hikayemiz
            </p>
            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
              2020’den beri kahveyi bir ritüel olarak görüyoruz.
            </h2>
            <p className="mt-8 text-base leading-8 text-white/60 md:text-lg">
              Atelier Coffee, hızlı tüketim kültürüne karşı daha yavaş, daha
              özenli ve daha estetik bir kahve deneyimi yaratmak için tasarlandı.
              Her fincan; çekirdek seçimi, demleme tekniği ve sunum detaylarıyla
              ayrı bir ritüel olarak hazırlanır.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/40 md:text-sm">
              Galeri
            </p>
            <h2 className="text-5xl font-semibold tracking-tight md:text-8xl">
              Mekânın ruhu.
            </h2>
          </div>
          <a href="https://instagram.com" className="text-sm underline underline-offset-4">
            Instagram’da takip et
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={src} className={`group overflow-hidden rounded-[2rem] bg-black ${i === 0 || i === 5 ? "md:col-span-2" : ""}`}>
              <img
                src={src}
                alt="Atelier Coffee galeri"
                className="h-80 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-70"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Ayşe K.", "Moda’daki en şık ve huzurlu kahve noktası."],
            ["Deniz A.", "Kahveler dengeli, atmosfer çok kaliteli."],
            ["Mert S.", "Çalışmak ve arkadaşlarla buluşmak için ideal."],
          ].map(([name, text]) => (
            <div key={name} className="rounded-[2rem] border border-black/10 bg-white/70 p-8 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl">
              <p className="mb-5 text-xl">★★★★★</p>
              <p className="mb-6 text-lg leading-8 text-black/70">“{text}”</p>
              <p className="font-medium">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-black text-white shadow-2xl md:grid-cols-2">
          <div className="p-10 md:p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40 md:text-sm">
              İletişim
            </p>
            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Bizi ziyaret edin.
            </h2>
            <div className="mt-10 space-y-4 leading-7 text-white/60">
              <p>Caferağa Mah. Moda Cad. No:24 Kadıköy / İstanbul</p>
              <p>Her gün açık · 08:00 - 22:00</p>
              <p>+90 555 000 00 00</p>
              <p>hello@ateliercoffee.co</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+905550000000" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80">
                Telefonla Ara
              </a>
              <a href="https://maps.google.com" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Haritada Aç
              </a>
            </div>
          </div>

          <iframe
            title="Atelier Coffee Harita"
            src="https://www.google.com/maps?q=Moda%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul&output=embed"
            className="h-[420px] w-full border-0 md:h-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 text-sm text-black/50 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-black">Atelier Coffee</p>
            <p className="mt-3 leading-7">
              Moda / Kadıköy · İstanbul <br />
              Specialty coffee & artisan bakery
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#menu">Menü</a>
            <a href="#story">Hikayemiz</a>
            <a href="#gallery">Galeri</a>
            <a href="#visit">İletişim</a>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://tiktok.com">TikTok</a>
            <a href="https://maps.google.com">Google Maps</a>
            <p className="pt-4">© 2026 · Build with Doga</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
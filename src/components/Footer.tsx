import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-namelaka.png";
import novspectra from "@/assets/novspectra.png.asset.json";

export const Footer = () => {
  return (
    <footer className="relative mt-12 bg-burgundy-deep text-pink-soft overflow-hidden">
      <div className="absolute inset-0 bg-pattern-gold opacity-20" />
      <div className="container relative py-16 md:py-24 grid md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="" className="w-8 h-8" />
            <span className="font-serif text-2xl tracking-[0.2em]">NAMELAKA</span>
          </div>
          <p className="text-sm leading-relaxed text-pink-soft/70 max-w-xs">
            Кондитерська майстерня в Києві.
            Створюємо десерти, від яких варто закохатись.
          </p>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-2 mt-6 text-sm hover:text-gold transition-colors"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            @namelaka.kyiv
          </a>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Локації</h4>
          <ul className="space-y-5 text-sm">
            <li>
              <p className="font-serif text-lg text-pink-soft mb-1">Намелака · Поділ</p>
              <p className="flex items-start gap-2 text-pink-soft/70"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={1.5} /> Межигірська, 63, Київ</p>
              <p className="flex items-center gap-2 text-pink-soft/70 mt-1"><Phone className="w-3.5 h-3.5" strokeWidth={1.5} /> +380 67 123 45 67</p>
            </li>
            <li>
              <p className="font-serif text-lg text-pink-soft mb-1">Намелака · Центр</p>
              <p className="flex items-start gap-2 text-pink-soft/70"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={1.5} /> Велика Васильківська, 51</p>
              <p className="flex items-center gap-2 text-pink-soft/70 mt-1"><Phone className="w-3.5 h-3.5" strokeWidth={1.5} /> +380 67 765 43 21</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Години</h4>
          <ul className="space-y-2 text-sm text-pink-soft/80">
            <li className="flex justify-between"><span>Пн — Чт</span><span>09:00 — 22:00</span></li>
            <li className="flex justify-between"><span>Пт — Сб</span><span>09:00 — 23:00</span></li>
            <li className="flex justify-between"><span>Неділя</span><span>10:00 — 22:00</span></li>
          </ul>
          <p className="mt-8 text-xs text-pink-soft/50">
            cafe.namelaka.ua — © {new Date().getFullYear()} NAMELAKA
          </p>
        </div>
      </div>

      {/* Створено Novspectra */}
      <div className="relative border-t border-gold/20">
        <div className="container py-9 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">
          <a
            href="https://novspectra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:gap-5"
          >
            <img
              src={novspectra.url}
              alt="Novspectra"
              className="w-12 h-12 md:w-16 md:h-16 shrink-0 object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-105"
            />
            <span className="leading-tight">
              <span className="block text-[0.6rem] tracking-[0.3em] uppercase text-pink-soft/50 mb-1.5">
                Сайт розроблено
              </span>
              <span className="block font-serif text-2xl md:text-4xl text-pink-soft transition-colors group-hover:text-gold">
                Made by Novspectra<span className="text-gold">.com</span>
              </span>
            </span>
          </a>

          <a
            href="https://novspectra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/30 bg-pink-soft/5 px-6 md:px-8 py-3.5 hover:bg-pink-soft/10 hover:border-gold/60 transition-all"
          >
            <span className="text-sm md:text-base text-pink-soft/80 group-hover:text-pink-soft transition-colors">
              Хочете таке саме?
            </span>
            <span className="font-serif text-lg md:text-xl text-gold">novspectra.com</span>
            <span aria-hidden className="text-gold transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

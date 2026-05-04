import hero from "@/assets/hero-pastries.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container pt-8 md:pt-14">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-elegant">
          {/* Background photo */}
          <img
            src={hero}
            alt="Колекція тістечок NAMELAKA"
            width={1920}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Pink gradient overlay */}
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          {/* Gold pattern overlay */}
          <div className="absolute inset-0 bg-pattern-gold opacity-40 mix-blend-overlay" />
          {/* Soft top/bottom vignette for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-soft/0 via-transparent to-pink-soft/60" />

          {/* Content */}
          <div className="relative px-6 py-20 md:px-16 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <span className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.25em] uppercase text-burgundy font-medium mb-6 md:mb-8">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Est. Kyiv
            </span>

            <h1 className="animate-float-up font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tight text-burgundy-deep font-medium text-balance">
              NAMELAKA
            </h1>

            <p className="animate-float-up [animation-delay:120ms] mt-5 md:mt-7 text-base md:text-lg text-burgundy/80 tracking-[0.2em] uppercase font-light">
              Кафе · Кондитерська · Київ
            </p>

            <p className="animate-float-up [animation-delay:200ms] mt-6 md:mt-8 max-w-xl text-sm md:text-base text-burgundy/75 leading-relaxed">
              Авторські десерти, торти на замовлення та ритуал ранкової кави —
              у серці столиці з любов&apos;ю до деталей.
            </p>

            <div className="animate-float-up [animation-delay:280ms] mt-9 md:mt-12 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 px-7 md:px-9 py-3.5 md:py-4 rounded-full bg-burgundy text-primary-foreground text-sm md:text-base font-medium tracking-wide shadow-elegant hover:bg-burgundy-deep transition-all hover:scale-[1.02] active:scale-[0.99]"
              >
                Замовити доставку
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 rounded-full glass text-burgundy text-sm md:text-base font-medium tracking-wide hover:bg-white/80 transition-all"
              >
                Замовити з собою
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

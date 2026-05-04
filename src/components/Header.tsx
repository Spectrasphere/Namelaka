import { Menu, ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/store/cart";
import logo from "@/assets/logo-namelaka.png";

export const Header = () => {
  const { count, open } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button aria-label="Меню" className="p-2 -ml-2 text-burgundy hover:text-accent transition-colors">
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <a href="/" className="flex items-center gap-2 group" aria-label="NAMELAKA">
          <img src={logo} alt="" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-burgundy font-medium">
            NAMELAKA
          </span>
        </a>

        <div className="flex items-center gap-1">
          <button aria-label="Пошук" className="p-2 text-burgundy hover:text-accent transition-colors hidden sm:block">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={open}
            aria-label="Кошик"
            className="relative flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-pink/60 hover:bg-pink transition-all hover:shadow-soft"
          >
            <ShoppingBag className="w-4 h-4 text-burgundy" strokeWidth={1.75} />
            <span className="text-sm font-medium text-burgundy hidden sm:inline">Кошик</span>
            <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-burgundy text-primary-foreground text-xs font-semibold flex items-center justify-center">
              {count}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

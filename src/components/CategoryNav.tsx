import { categories, Category } from "@/data/products";
import { Cake, Cookie, Gift, IceCream, Sparkles, Heart, CircleDot } from "lucide-react";

const ICONS: Record<Category, typeof Cake> = {
  "Солодощі": Sparkles,
  "Міні-торти": Cookie,
  "Торти": Cake,
  "Пуфи": CircleDot,
  "Шоколад": Heart,
  "Цукерки": IceCream,
  "Подарункові сертифікати": Gift,
};

type Props = {
  active: Category | "all";
  onChange: (c: Category | "all") => void;
};

export const CategoryNav = ({ active, onChange }: Props) => {
  return (
    <nav className="no-scrollbar overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <ul className="flex gap-2 md:gap-3 min-w-max md:flex-wrap md:min-w-0">
        <li>
          <button
            onClick={() => onChange("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
              active === "all"
                ? "bg-burgundy text-primary-foreground shadow-soft"
                : "bg-pink/40 text-burgundy hover:bg-pink/70"
            }`}
          >
            Усе меню
          </button>
        </li>
        {categories.map((c) => {
          const Icon = ICONS[c];
          const isActive = active === c;
          return (
            <li key={c}>
              <button
                onClick={() => onChange(c)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-burgundy text-primary-foreground shadow-soft"
                    : "bg-pink/40 text-burgundy hover:bg-pink/70"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {c}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

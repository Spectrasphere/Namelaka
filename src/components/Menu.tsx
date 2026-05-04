import { useMemo, useState } from "react";
import { products, Category } from "@/data/products";
import { CategoryNav } from "./CategoryNav";
import { ProductCard } from "./ProductCard";

export const Menu = () => {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="menu" className="container py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
            Меню
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl text-burgundy-deep leading-[1.05] text-balance">
            Маленькі шедеври,<br />
            <span className="italic text-burgundy/80">створені з душею</span>
          </h2>
        </div>
        <p className="text-sm text-burgundy/70 max-w-sm leading-relaxed">
          Кожен десерт — авторська рецептура нашого шефа-кондитера.
          Ми готуємо щодня зі свіжих сезонних інгредієнтів.
        </p>
      </div>

      <CategoryNav active={active} onChange={setActive} />

      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-20 text-burgundy/60 italic">
          Скоро тут з&apos;являться нові смаколики
        </p>
      )}
    </section>
  );
};

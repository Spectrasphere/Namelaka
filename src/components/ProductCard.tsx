import { Heart, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";

export const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { add, wishlist, toggleWish } = useCart();
  const wished = wishlist.has(product.id);

  return (
    <article
      className="group relative animate-float-up"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative rounded-3xl bg-gradient-card pt-24 pb-6 px-5 md:pt-28 md:pb-7 md:px-6 transition-all duration-500 hover:shadow-card hover:-translate-y-1">
        {/* Floating image */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:-top-14 w-32 h-32 md:w-44 md:h-44 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-full shadow-card"
          />
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWish(product.id)}
          aria-label="Додати до обраного"
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${wished ? "fill-burgundy text-burgundy" : "text-burgundy/70"}`}
            strokeWidth={1.5}
          />
        </button>

        <div className="mt-4 text-center">
          <h3 className="font-serif text-xl md:text-2xl text-burgundy-deep leading-tight font-medium">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-burgundy/60 line-clamp-1">{product.description}</p>

          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="font-serif text-2xl text-burgundy font-semibold">
              ₴{product.price.toLocaleString("uk-UA")}
            </span>
            <button
              onClick={() => add(product)}
              className="inline-flex items-center gap-1.5 pl-3 pr-4 py-2 rounded-full bg-burgundy text-primary-foreground text-xs font-medium hover:bg-burgundy-deep transition-all hover:shadow-soft active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              В кошик
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

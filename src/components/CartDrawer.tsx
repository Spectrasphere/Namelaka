import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart";
import { useEffect } from "react";

export const CartDrawer = () => {
  const { isOpen, close, items, setQty, total, clear } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-burgundy-deep/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-background shadow-elegant transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-border/60">
          <div>
            <h3 className="font-serif text-2xl text-burgundy-deep">Ваш кошик</h3>
            <p className="text-xs text-burgundy/60 mt-0.5">{items.length} позицій</p>
          </div>
          <button onClick={close} aria-label="Закрити" className="p-2 hover:bg-pink/40 rounded-full transition-colors">
            <X className="w-5 h-5 text-burgundy" strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-pink/40 flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-burgundy/60" strokeWidth={1.5} />
              </div>
              <p className="font-serif text-xl text-burgundy-deep">Кошик порожній</p>
              <p className="text-sm text-burgundy/60 mt-2 max-w-xs">
                Додайте улюблені десерти — і ми приготуємо їх для вас
              </p>
              <button
                onClick={close}
                className="mt-6 px-6 py-2.5 rounded-full bg-burgundy text-primary-foreground text-sm font-medium hover:bg-burgundy-deep transition-colors"
              >
                До меню
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 p-3 rounded-2xl bg-gradient-card">
                  <img src={i.image} alt={i.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base text-burgundy-deep leading-tight truncate">{i.name}</h4>
                    <p className="text-sm text-burgundy font-medium mt-1">
                      ₴{(i.price * i.qty).toLocaleString("uk-UA")}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 self-center bg-background/70 rounded-full px-1 py-1">
                    <button onClick={() => setQty(i.id, i.qty - 1)} className="w-7 h-7 rounded-full hover:bg-pink/60 flex items-center justify-center transition-colors" aria-label="Менше">
                      <Minus className="w-3 h-3 text-burgundy" strokeWidth={2} />
                    </button>
                    <span className="text-sm font-medium text-burgundy w-5 text-center">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} className="w-7 h-7 rounded-full hover:bg-pink/60 flex items-center justify-center transition-colors" aria-label="Більше">
                      <Plus className="w-3 h-3 text-burgundy" strokeWidth={2} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border/60 px-6 py-5 bg-pink-soft/40 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-burgundy/70 tracking-wide uppercase">Разом</span>
              <span className="font-serif text-3xl text-burgundy-deep font-semibold">
                ₴{total.toLocaleString("uk-UA")}
              </span>
            </div>
            <button className="w-full py-4 rounded-full bg-burgundy text-primary-foreground font-medium tracking-wide hover:bg-burgundy-deep transition-all shadow-elegant active:scale-[0.99]">
              Оформити замовлення →
            </button>
            <button onClick={clear} className="w-full text-xs text-burgundy/60 hover:text-burgundy transition-colors">
              Очистити кошик
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

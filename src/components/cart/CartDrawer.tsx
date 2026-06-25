import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "./CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, isOpen, closeCart, setQuantity, removeItem, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-forest-deep">
            Votre panier {count > 0 && <span className="text-foreground/50 text-base font-normal">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag className="size-10 text-foreground/30" />
            <p className="mt-4 font-display text-lg text-forest-deep">Votre panier est vide</p>
            <p className="mt-2 text-sm text-foreground/60">Découvrez Le Kit RECOVR.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 mt-6 divide-y divide-border">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-5">
                  {item.image && (
                    <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-sand/40">
                      <img src={item.image} alt={item.name} className="size-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-forest-deep">{item.name}</p>
                    <p className="text-sm text-foreground/60 mt-0.5">{item.price.toFixed(0)}€</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="size-8 inline-flex items-center justify-center text-forest-deep"
                          aria-label="Diminuer"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="size-8 inline-flex items-center justify-center text-forest-deep"
                          aria-label="Augmenter"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-foreground/50 hover:text-forest-deep transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-display font-bold text-forest-deep">
                    {(item.price * item.quantity).toFixed(0)}€
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 mt-2 space-y-4">
              <div className="flex justify-between text-sm text-foreground/70">
                <span>Sous-total</span>
                <span className="font-semibold text-forest-deep">{subtotal.toFixed(0)}€</span>
              </div>
              <div className="flex justify-between text-xs text-foreground/60">
                <span>Livraison</span>
                <span>Offerte</span>
              </div>
              <div className="flex justify-between font-display text-lg text-forest-deep border-t border-border pt-4">
                <span>Total</span>
                <span>{subtotal.toFixed(0)}€</span>
              </div>
              <button className="btn-primary w-full justify-center">Passer commande</button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-foreground/60 hover:text-forest-deep transition-colors"
              >
                Continuer mes achats
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

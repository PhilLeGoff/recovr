import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/components/cart/CartContext";
import { products, type Product } from "@/lib/products";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique | RECOVR · Récupération & mobilité premium" },
      { name: "description", content: "Découvrez toute la collection RECOVR : rouleaux en liège, élastiques, accessoires de mobilité et textile éco-responsable." },
      { property: "og:title", content: "Boutique RECOVR" },
      { property: "og:description", content: "Le matériel premium pour récupérer mieux." },
    ],
    links: [{ rel: "canonical", href: "/boutique" }],
  }),
  component: BoutiquePage,
});

const categories = ["Tout", "Kit", "Récupération", "Mobilité", "Activation", "Textile", "Accessoires"] as const;
type Cat = (typeof categories)[number];

function BoutiquePage() {
  const [cat, setCat] = useState<Cat>("Tout");
  const filtered = useMemo(
    () => (cat === "Tout" ? products : products.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <>
      <div className="bg-forest-deep text-background text-center text-[12px] tracking-[0.18em] uppercase font-semibold py-2.5 px-4">
        Soldes d'été · jusqu'à -25% · livraison offerte dès 60€
      </div>
      <section className="container-x pt-20 lg:pt-28 pb-12">
        <Reveal>
          <p className="eyebrow">Boutique</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] text-forest-deep">
            La collection <span className="italic font-serif font-medium">RECOVR.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/70">
            Conçue en France, fabriquée en Europe, pensée pour durer. Chaque pièce répond à un besoin précis de la routine de récupération.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold tracking-wide text-forest-deep/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden>🇫🇷</span> Conçu en France</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden>🌿</span> Matériaux éco-responsables</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden>↩</span> Retours offerts 30 jours</span>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-all ${
                cat === c
                  ? "bg-forest-deep text-background"
                  : "border border-border text-forest-deep hover:bg-sand/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}


function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    openCart();
  };

  const isKit = product.id === "kit-recovr-v1";
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-border transition-all hover:border-forest-deep/30 hover:shadow-[0_20px_60px_-30px_rgba(1,77,35,0.35)]">
      <Link
        to={isKit ? "/le-kit" : "/boutique"}
        className="relative block aspect-square overflow-hidden bg-sand/40"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
          {product.badge && (
            <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-deep">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-forest-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-background">
              -{discount}%
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest-accent">{product.category}</p>
        <h3 className="mt-2 font-display text-lg font-extrabold text-forest-deep leading-tight">{product.name}</h3>
        <p className="mt-1 text-[13px] text-foreground/65 leading-snug">{product.tagline}</p>
        {product.madeIn && product.madeIn !== "France" && (
          <p className="mt-2 text-[11px] text-foreground/50">Fabriqué au {product.madeIn === "Portugal" ? "Portugal" : "sein de l'UE"}</p>
        )}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-forest-deep">{product.price}€</span>
            {product.compareAt && (
              <span className="text-xs text-foreground/40 line-through">{product.compareAt}€</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            aria-label={`Ajouter ${product.name} au panier`}
            className="inline-flex size-10 items-center justify-center rounded-full bg-forest-deep text-background transition-all hover:scale-105 hover:bg-forest-accent"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}


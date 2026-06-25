import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

const nav = [
  { to: "/le-kit", label: "Le Kit" },
  { to: "/boutique", label: "Boutique" },
  { to: "/engagements", label: "Nos Engagements" },
  { to: "/conseils", label: "Conseils" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between md:h-24">
        <Link to="/" className="text-forest-deep flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium tracking-wide text-foreground/80 hover:text-forest-deep transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-forest-deep after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left"
              activeProps={{ className: "text-forest-deep" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 text-[13px] font-semibold text-forest-deep hover:opacity-80 transition-opacity"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag className="size-4" />
            <span className="hidden md:inline">Panier</span>
            {count > 0 && (
              <span className="ml-1 inline-flex min-w-5 h-5 items-center justify-center rounded-full bg-forest-deep px-1.5 text-[11px] font-bold text-background">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-border text-forest-deep"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-x flex flex-col py-6 gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display font-extrabold text-forest-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

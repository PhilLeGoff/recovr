import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf, Shield, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/components/cart/CartContext";
import kitHero from "@/assets/kit-hero.jpg";
import corkRollerImg from "@/assets/cork-roller.jpg";
import ballImg from "@/assets/massage-ball.jpg";
import bandsImg from "@/assets/bands.jpg";

import athleteImg from "@/assets/athlete-mobility.jpg";

export const Route = createFileRoute("/le-kit")({
  head: () => ({
    meta: [
      { title: "Le Kit RECOVR | Récupération, mobilité, activation" },
      { name: "description", content: "Découvrez Le Kit RECOVR : rouleau en liège naturel, balle de massage, élastiques et sac de transport. Un système complet pour récupérer chaque jour." },
      { property: "og:title", content: "Le Kit RECOVR" },
      { property: "og:description", content: "Le système complet de récupération éco-responsable." },
      { property: "og:image", content: kitHero },
      { property: "og:url", content: "/le-kit" },
    ],
    links: [{ rel: "canonical", href: "/le-kit" }],
  }),
  component: KitPage,
});

function KitPage() {
  const { addItem, openCart } = useCart();
  const handleAdd = () => {
    addItem({ id: "kit-recovr-v1", name: "Le Kit RECOVR", price: 35, image: kitHero });
    openCart();
  };
  return (
    <>
      <section className="container-x pt-12 lg:pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand/40">
              <img src={kitHero} alt="Le Kit RECOVR" className="size-full object-cover" />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow">Édition n°1</p>
              <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.4rem)] text-forest-deep">
                Le Kit <span className="italic font-serif font-medium">RECOVR</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75 max-w-lg">
                Quatre outils premium en liège naturel et latex, pensés comme un système complet pour la mobilité, la récupération et l'activation musculaire.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex items-baseline gap-4">
                <span className="font-display text-5xl font-extrabold text-forest-deep">35€</span>
                <span className="text-foreground/50 line-through">50€</span>
                <span className="text-xs tracking-[0.18em] uppercase font-semibold text-forest-accent">Offre lancement · 100 premiers kits</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-accent/10 px-4 py-2 text-[12px] font-semibold tracking-wide text-forest-deep">
                <span className="size-2 rounded-full bg-forest-accent animate-pulse" />
                Plus que <strong className="font-extrabold">69 kits</strong> disponibles à 35€
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={handleAdd} className="btn-primary">Ajouter au panier <ArrowRight className="size-4" /></button>
                <Link to="/contact" className="btn-ghost">Nous écrire</Link>
              </div>
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { i: Truck, t: "Livraison offerte" },
                  { i: Shield, t: "Garantie 2 ans" },
                  { i: Leaf, t: "Matériaux durables" },
                ].map(({ i: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3 rounded-2xl border border-border p-4">
                    <Icon className="size-4 text-forest-accent" />
                    <span className="text-sm font-semibold text-forest-deep">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand/30 py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Composition</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] text-forest-deep">
              Quatre pièces, <span className="italic font-serif font-medium">pensées ensemble.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: corkRollerImg, t: "Rouleau en liège", d: "33 × 14 cm. Densité optimisée pour les fascias profonds." },
              { img: ballImg, t: "Balle de massage", d: "Travail ciblé : voûte plantaire, trapèzes, fessiers." },
              { img: bandsImg, t: "Grand élastique", d: "Pour les exercices de mobilité et d'étirement actif." },
              { img: bandsImg, t: "Petit élastique", d: "Activation des épaules, hanches et fessiers." },
              { img: athleteImg, t: "Guide d'utilisation", d: "Routines vidéo dédiées : 8, 15 ou 25 minutes." },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <article className="overflow-hidden rounded-3xl bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.t} loading="lazy" className="size-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-forest-deep">{p.t}</h3>
                    <p className="mt-2 text-[15px] text-foreground/70">{p.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Matériaux</p>
              <h2 className="mt-5 text-[clamp(1.8rem,3.5vw,2.8rem)] text-forest-deep">
                Une <span className="italic font-serif font-medium">qualité</span> qui se ressent.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              ["Liège portugais certifié", "Issu de forêts gérées durablement, sans abattre l'arbre."],
              ["Latex naturel", "Sans phtalates, sans BPA, traçable."],
              ["Coton bio GOTS", "Pour le sac de transport, teinté naturellement."],
              ["Assemblage en Europe", "Atelier à proximité, transport raisonné."],
            ].map(([t, d]) => (
              <Reveal key={t}>
                <div className="border-t border-border pt-5">
                  <div className="flex items-center gap-3"><Check className="size-4 text-forest-accent" /><p className="font-display font-extrabold text-forest-deep">{t}</p></div>
                  <p className="mt-2 text-[15px] text-foreground/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

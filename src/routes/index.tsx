import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Minus,
  Plus,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import kitHero from "@/assets/kit-hero.jpg";
import athleteImg from "@/assets/athlete-mobility.jpg";
import corkRollerImg from "@/assets/cork-roller.jpg";
import ballImg from "@/assets/massage-ball.jpg";
import bandsImg from "@/assets/bands.jpg";
import bagImg from "@/assets/bag.jpg";
import forestImg from "@/assets/forest-runner.jpg";
import corkBarkImg from "@/assets/cork-bark.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RECOVR | Kit de récupération sportive éco-responsable" },
      {
        name: "description",
        content:
          "Le kit de récupération premium conçu pour les athlètes : rouleau en liège, balle de massage, élastiques de mobilité. Performez durablement, naturellement.",
      },
      { property: "og:title", content: "RECOVR | Naturellement Performant" },
      { property: "og:description", content: "Votre performance commence par votre récupération." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <KitContents />
      <Routine />
      <Benefits />
      <Cork />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-bone via-bone to-sand/40" />
      <div className="container-x grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 pt-12 lg:pt-20 pb-24">
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-deep/15 bg-bone/60 px-4 py-1.5 backdrop-blur w-fit">
              <Leaf className="size-3.5 text-forest-accent" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-forest-deep">
                Édition Liège · Made in Europe
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-[clamp(2.6rem,6.2vw,5.5rem)] font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-forest-deep">
              Votre performance<br />
              commence par votre<br />
              <span className="italic font-serif font-medium text-forest-rich">récupération.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-[17px] md:text-lg leading-relaxed text-foreground/75">
              Le kit de récupération sportive éco-responsable conçu pour améliorer votre mobilité,
              soulager les tensions musculaires et vous aider à performer durablement.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/le-kit" className="btn-primary group">
                Découvrir le Kit RECOVR
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#routine" className="btn-ghost">Comment ça fonctionne</a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-9 rounded-full border-2 border-bone bg-linear-to-br from-sand to-forest-accent/60" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-forest-deep">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="size-3.5 fill-current" />)}
                  <span className="ml-2 text-xs font-semibold">4,9 / 5</span>
                </div>
                <p className="text-xs text-foreground/60 mt-0.5">+ de 2 400 athlètes nous font confiance</p>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <motion.img
              style={{ scale }}
              src={kitHero}
              alt="Le Kit RECOVR — rouleau en liège, balle, élastiques et sac"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-ink/55 to-transparent">
              <div className="flex items-end justify-between text-bone">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase opacity-80">Édition n°1</p>
                  <p className="font-display font-extrabold text-xl">Le Kit RECOVR</p>
                </div>
                <p className="text-2xl font-display font-extrabold">89€</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -bottom-6 hidden md:flex flex-col gap-1 rounded-2xl bg-bone/95 backdrop-blur p-5 shadow-[var(--shadow-card)] border border-border">
            <p className="eyebrow">Routine</p>
            <p className="font-display font-extrabold text-xl text-forest-deep">8 min / jour</p>
            <p className="text-xs text-foreground/60">Pour un corps plus mobile</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Liège naturel certifié", "Made in Europe", "Livraison neutre en carbone", "Garantie 2 ans", "+2 400 athlètes", "Routine 8 min"];
  return (
    <div className="border-y border-border bg-bone py-5 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-[12px] tracking-[0.25em] uppercase text-forest-deep/70 font-semibold flex items-center gap-16">
            {t}
            <span className="size-1 rounded-full bg-forest-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  const items = [
    { n: "01", t: "Fatigue accumulée", d: "Une dette physique qui s'installe semaine après semaine." },
    { n: "02", t: "Tensions musculaires", d: "Des chaînes raides qui freinent votre amplitude." },
    { n: "03", t: "Manque de mobilité", d: "Une perte progressive de fluidité dans le mouvement." },
    { n: "04", t: "Risque de blessure", d: "Des micro-traumatismes qui finissent par devenir des arrêts." },
    { n: "05", t: "Baisse de performance", d: "Un plateau invisible que l'entraînement seul ne lève pas." },
  ];
  return (
    <section className="container-x py-32 lg:py-44">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div className="lg:sticky lg:top-32 self-start">
          <Reveal>
            <p className="eyebrow">Le problème</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-forest-deep">
              Vous vous entraînez dur.<br />
              <span className="italic font-serif font-medium">Mais récupérez-vous vraiment ?</span>
            </h2>
            <p className="mt-7 text-foreground/70 max-w-md leading-relaxed">
              La performance ne se construit pas seulement à l'entraînement.
              Elle se construit dans ce que votre corps fait entre deux séances.
            </p>
          </Reveal>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.05}>
              <li className="group flex items-center gap-8 py-7 transition-colors hover:bg-sand/30 px-2">
                <span className="text-xs tracking-[0.2em] text-forest-rich/60 font-semibold w-8">{it.n}</span>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-forest-deep">{it.t}</h3>
                  <p className="mt-1 text-foreground/70 text-[15px]">{it.d}</p>
                </div>
                <ArrowUpRight className="size-5 text-forest-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-bone">
      <div className="absolute inset-0 -z-0 opacity-20" style={{ backgroundImage: `url(${forestImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-linear-to-b from-forest-deep/95 via-forest-deep/85 to-forest-deep/95" />
      <div className="container-x relative py-32 lg:py-44">
        <Reveal>
          <p className="eyebrow text-sand">La solution RECOVR</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] text-bone">
            Une routine complète en <span className="italic font-serif font-medium text-sand">quelques minutes</span> par jour.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            { t: "Self-massage", d: "Libérez les tensions profondes avec le rouleau et la balle en liège naturel." },
            { t: "Mobilité", d: "Travaillez l'amplitude articulaire grâce aux élastiques calibrés." },
            { t: "Activation", d: "Préparez votre corps avant l'effort et réinitialisez-le après." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={0.1 + i * 0.1}>
              <div>
                <div className="text-sand/80 text-xs tracking-[0.25em] uppercase font-semibold">0{i + 1}</div>
                <div className="hairline my-4 opacity-40" />
                <h3 className="font-display text-2xl text-bone">{b.t}</h3>
                <p className="mt-3 text-bone/75 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- KIT CONTENTS ---------- */
function KitContents() {
  const products = [
    { img: corkRollerImg, t: "Rouleau en liège naturel", d: "Libère les tensions musculaires profondes.", size: "lg" },
    { img: ballImg, t: "Balle de massage plantaire", d: "Soulage les pieds et améliore la mobilité." },
    { img: bandsImg, t: "Grand élastique", d: "Travail de mobilité et d'amplitude." },
    { img: bandsImg, t: "Petit élastique", d: "Activation musculaire et renforcement." },
    { img: bagImg, t: "Sac de transport", d: "Votre récupération partout avec vous." },
  ];
  return (
    <section className="container-x py-32 lg:py-44">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <Reveal>
          <div>
            <p className="eyebrow">Le contenu du Kit</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.6rem)] text-forest-deep">
              Cinq outils, <span className="italic font-serif font-medium">un système complet.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/le-kit" className="btn-ghost">Voir tout le kit <ArrowRight className="size-4" /></Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-6 md:grid-rows-2">
        {products.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.06} className={
            i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3 lg:col-span-2"
          }>
            <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card hover:shadow-[var(--shadow-card)] transition-all">
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[10px] tracking-[0.22em] uppercase text-forest-rich/70 font-semibold">0{i + 1} / 05</p>
                <h3 className="mt-2 font-display text-xl md:text-2xl text-forest-deep">{p.t}</h3>
                <p className="mt-2 text-[15px] text-foreground/70 leading-relaxed">{p.d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- ROUTINE ---------- */
function Routine() {
  const steps = [
    { t: "Activation", d: "Réveillez vos chaînes musculaires avec quelques exercices d'élastique.", time: "2 min" },
    { t: "Mobilité", d: "Ouvrez les articulations et préparez l'amplitude du mouvement.", time: "3 min" },
    { t: "Entraînement", d: "Performez avec un corps prêt, sans compensations parasites.", time: "—" },
    { t: "Récupération", d: "Relâchez les tensions au rouleau et à la balle, drainage et retour au calme.", time: "5 min" },
  ];
  return (
    <section id="routine" className="bg-sand/40 py-32 lg:py-44">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Comment utiliser RECOVR</p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] text-forest-deep">
            Un rituel quotidien, <span className="italic font-serif font-medium">structuré comme un entraînement.</span>
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-7 hidden md:block h-px bg-forest-deep/15" />
          <ol className="grid gap-12 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <li className="relative">
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center size-14 rounded-full bg-forest-deep text-bone font-display font-extrabold text-lg">
                      {i + 1}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase font-semibold text-forest-rich">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-forest-deep">{s.t}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed text-[15px]">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const benefits = [
    "Plus de mobilité",
    "Moins de tensions",
    "Meilleure récupération",
    "Prévention des blessures",
    "Plus de fluidité",
    "Sensation de légèreté",
  ];
  return (
    <section className="container-x py-32 lg:py-44">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img src={athleteImg} alt="Athlète en mobilité" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Les bénéfices</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] text-forest-deep">
              Ce que votre corps <span className="italic font-serif font-medium">ressent.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <li className="flex items-start gap-4 border-t border-border pt-5">
                  <Sparkles className="mt-1 size-4 text-forest-accent shrink-0" />
                  <span className="font-display font-extrabold text-lg text-forest-deep tracking-tight">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- CORK ---------- */
function Cork() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[640px]">
          <img src={corkBarkImg} alt="Écorce de chêne-liège" loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="bg-forest-deep text-bone px-6 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-sand">Pourquoi le liège ?</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] text-bone">
              Inspiré par <span className="italic font-serif font-medium text-sand">la nature.</span>
            </h2>
            <p className="mt-7 max-w-md text-bone/75 leading-relaxed">
              Le liège est récolté sans abattre l'arbre, qui continue à pousser et à absorber du CO₂.
              Un matériau d'exception qui réunit longévité, légèreté et performance.
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-y-8 gap-x-10">
            {[
              ["Durable", "Résiste à l'usage intensif."],
              ["Renouvelable", "Récolté sans abattre l'arbre."],
              ["Léger", "Se transporte partout."],
              ["Résistant", "Une densité parfaite pour le massage."],
              ["Naturel", "Faible impact environnemental."],
              ["Hypoallergénique", "Confort sur la peau."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li className="border-t border-bone/20 pt-4">
                  <p className="font-display font-extrabold text-bone">{t}</p>
                  <p className="text-sm text-bone/65 mt-1">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARISON ---------- */
function Comparison() {
  const without = ["Corps raide", "Tensions récurrentes", "Mobilité limitée", "Fatigue accumulée"];
  const with_ = ["Mouvement plus fluide", "Meilleure récupération", "Plus de confort", "Meilleure performance"];
  return (
    <section className="container-x py-32 lg:py-44">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Avant / Après</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] text-forest-deep">
            La différence se <span className="italic font-serif font-medium">ressent.</span>
          </h2>
        </div>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-border bg-bone p-10">
            <p className="eyebrow text-foreground/40">Sans RECOVR</p>
            <ul className="mt-8 space-y-5">
              {without.map((t) => (
                <li key={t} className="flex items-center gap-4 text-foreground/60">
                  <span className="grid place-items-center size-7 rounded-full border border-foreground/20">
                    <X className="size-3.5" />
                  </span>
                  <span className="font-display font-extrabold text-lg line-through decoration-1 decoration-foreground/30">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-forest-deep text-bone p-10 shadow-[var(--shadow-soft)]">
            <p className="eyebrow text-sand">Avec RECOVR</p>
            <ul className="mt-8 space-y-5">
              {with_.map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="grid place-items-center size-7 rounded-full bg-sand text-forest-deep">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-display font-extrabold text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { q: "En trois semaines, mes douleurs lombaires post-running ont disparu. Le kit est devenu un rituel.", n: "Camille R.", r: "Marathonienne, Paris" },
    { q: "Une qualité de finition impressionnante. Le rouleau en liège change tout.", n: "Antoine D.", r: "Triathlète, Lyon" },
    { q: "Enfin une marque qui prend la récupération au sérieux. Design impeccable, efficacité réelle.", n: "Sarah M.", r: "CrossFit coach, Bordeaux" },
  ];
  return (
    <section className="bg-bone py-32 lg:py-44">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Témoignages</p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] text-forest-deep">
            Des athlètes qui ont fait de la récupération <span className="italic font-serif font-medium">une priorité.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <figure className="h-full rounded-3xl bg-card border border-border p-8 flex flex-col">
                <div className="flex gap-1 text-forest-deep">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="size-4 fill-current" />)}
                </div>
                <blockquote className="mt-6 font-display text-xl text-forest-deep leading-snug tracking-[-0.01em]">
                  « {t.q} »
                </blockquote>
                <figcaption className="mt-auto pt-8">
                  <p className="font-semibold text-forest-deep">{t.n}</p>
                  <p className="text-sm text-foreground/60">{t.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "À qui s'adresse le Kit RECOVR ?", a: "À tout athlète ou personne active qui souhaite intégrer une routine de récupération efficace, sans encombrer son intérieur." },
    { q: "Combien de temps faut-il par jour ?", a: "Une routine complète tient en 8 minutes. La régularité prime sur la durée." },
    { q: "Le liège est-il vraiment durable ?", a: "Oui. Le liège est récolté tous les 9 ans sans abattre l'arbre, qui continue d'absorber du CO₂ pendant plus de 200 ans." },
    { q: "Quelle est la garantie ?", a: "Deux ans. Si un élément vous fait défaut, nous le remplaçons." },
    { q: "Livraison et retours ?", a: "Livraison neutre en carbone offerte dès 60€. Retours gratuits sous 30 jours." },
  ];

  return (
    <section className="container-x py-32 lg:py-44">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-forest-deep">
              Tout ce que vous <span className="italic font-serif font-medium">voulez savoir.</span>
            </h2>
            <p className="mt-6 text-foreground/65 max-w-sm">Une question reste sans réponse ? <Link to="/contact" className="underline underline-offset-4 decoration-forest-accent">Écrivez-nous</Link>.</p>
          </div>
        </Reveal>
        <div className="border-t border-border">
          {items.map((it, i) => (
            <details key={i} className="group border-b border-border py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display font-extrabold text-lg md:text-xl text-forest-deep tracking-[-0.01em]">{it.q}</span>
                <span className="grid place-items-center size-9 rounded-full border border-forest-deep/20 text-forest-deep transition-transform group-open:rotate-90">
                  <Plus className="size-4 group-open:hidden" />
                  <Minus className="size-4 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-2xl">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWSLETTER ---------- */
function Newsletter() {
  return (
    <section className="container-x pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-deep text-bone p-10 md:p-20">
        <div className="absolute -right-32 -top-32 size-[420px] rounded-full bg-forest-accent/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-sand">Newsletter</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] text-bone">
                Rejoignez le <span className="italic font-serif font-medium text-sand">mouvement RECOVR</span>
              </h2>
              <p className="mt-6 max-w-lg text-bone/75 leading-relaxed">
                Recevez des conseils exclusifs sur la récupération, la mobilité et la performance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <label className="text-xs tracking-[0.2em] uppercase text-bone/60 font-semibold">Votre e-mail</label>
              <div className="flex items-center gap-2 border-b border-bone/30 pb-3">
                <input type="email" required placeholder="vous@exemple.fr" className="flex-1 bg-transparent text-bone placeholder:text-bone/40 outline-none text-lg" />
                <button className="text-sand font-semibold text-sm tracking-[0.15em] uppercase hover:text-bone transition-colors">S'abonner</button>
              </div>
              <p className="text-xs text-bone/50">Pas de spam. Désinscription en un clic.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

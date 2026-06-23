import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import athleteImg from "@/assets/athlete-mobility.jpg";
import corkImg from "@/assets/cork-roller.jpg";
import forestImg from "@/assets/forest-runner.jpg";
import ballImg from "@/assets/massage-ball.jpg";

export const Route = createFileRoute("/conseils")({
  head: () => ({
    meta: [
      { title: "Conseils Récupération | Journal RECOVR" },
      { name: "description", content: "Articles, routines et conseils d'experts pour mieux récupérer, gagner en mobilité et prévenir les blessures." },
      { property: "og:title", content: "Conseils Récupération — RECOVR" },
      { property: "og:description", content: "Le journal de la récupération sportive." },
      { property: "og:url", content: "/conseils" },
    ],
    links: [{ rel: "canonical", href: "/conseils" }],
  }),
  component: ConseilsPage,
});

function ConseilsPage() {
  const articles = [
    { t: "Pourquoi la récupération est essentielle", c: "Science", img: athleteImg, d: "Comprendre les mécanismes physiologiques qui font de la récupération l'autre moitié de la performance.", mins: "6 min" },
    { t: "Les meilleures routines post-entraînement", c: "Routines", img: corkImg, d: "Trois routines complètes — 5, 10 et 20 minutes — pour récupérer après chaque type d'effort.", mins: "8 min" },
    { t: "Comment améliorer sa mobilité", c: "Mobilité", img: forestImg, d: "Un protocole simple pour gagner en amplitude articulaire en quelques semaines.", mins: "10 min" },
    { t: "Prévenir les blessures grâce à la récupération", c: "Prévention", img: ballImg, d: "Les signaux faibles à écouter et les gestes quotidiens qui évitent les arrêts forcés.", mins: "7 min" },
  ];
  return (
    <>
      <section className="container-x pt-16 lg:pt-24 pb-20">
        <Reveal>
          <p className="eyebrow">Le Journal</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] text-forest-deep">
            Conseils récupération, <span className="italic font-serif font-medium">par RECOVR.</span>
          </h1>
        </Reveal>
      </section>

      <section className="container-x pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.06}>
              <Link to="/conseils" className="group block">
                <article>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                    <img src={a.img} alt={a.t} loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-semibold text-forest-rich">
                    <span>{a.c}</span><span className="size-1 rounded-full bg-forest-rich/40" /><span className="text-foreground/50">{a.mins} de lecture</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl text-forest-deep tracking-[-0.02em]">{a.t}</h2>
                  <p className="mt-3 text-foreground/70 leading-relaxed max-w-xl">{a.d}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-forest-deep">
                    Lire l'article <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

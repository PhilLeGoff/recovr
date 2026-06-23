import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import forestImg from "@/assets/forest-runner.jpg";
import corkBark from "@/assets/cork-bark.jpg";

export const Route = createFileRoute("/engagements")({
  head: () => ({
    meta: [
      { title: "Nos Engagements | RECOVR" },
      { name: "description", content: "Durabilité, matériaux responsables, transport raisonné, garantie longue. Les engagements concrets de RECOVR." },
      { property: "og:title", content: "Nos Engagements — RECOVR" },
      { property: "og:description", content: "Une marque construite sur la durée." },
      { property: "og:url", content: "/engagements" },
    ],
    links: [{ rel: "canonical", href: "/engagements" }],
  }),
  component: EngagementsPage,
});

function EngagementsPage() {
  const pillars = [
    { n: "01", t: "Matériaux durables", d: "Liège portugais certifié, latex naturel, coton bio. Aucun plastique inutile dans nos kits." },
    { n: "02", t: "Sourcing responsable", d: "Nos partenaires sont sélectionnés sur des critères sociaux et environnementaux stricts." },
    { n: "03", t: "Transport raisonné", d: "Assemblage en Europe, livraison neutre en carbone, emballages sans plastique." },
    { n: "04", t: "Conçu pour durer", d: "Garantie 2 ans, pièces remplaçables à l'unité. La meilleure écologie est l'objet qu'on ne rachète pas." },
  ];
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <img src={forestImg} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink/85" />
        </div>
        <div className="container-x relative py-40 lg:py-52 text-bone">
          <Reveal>
            <p className="eyebrow text-sand">Nos engagements</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.4rem)] text-bone">
              La meilleure performance est celle qui <span className="italic font-serif font-medium text-sand">dure.</span>
            </h1>
            <p className="mt-8 max-w-xl text-bone/80 leading-relaxed text-lg">
              Nous construisons RECOVR comme un objet qu'on garde — pour le corps, pour la planète.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-32">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <article>
                <p className="text-xs tracking-[0.22em] uppercase text-forest-rich/70 font-semibold">{p.n}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-forest-deep tracking-[-0.02em]">{p.t}</h3>
                <div className="hairline my-6" />
                <p className="text-foreground/70 leading-relaxed text-[16px] max-w-xl">{p.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-forest-deep text-bone overflow-hidden">
        <img src={corkBark} alt="" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-forest-deep/80" />
        <div className="container-x relative py-32 text-center">
          <Reveal>
            <p className="eyebrow text-sand">Impact</p>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.8rem)] text-bone max-w-3xl mx-auto">
              Chaque kit vendu plante <span className="italic font-serif font-medium text-sand">un arbre.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-bone/75 leading-relaxed">
              Nous reversons une partie de chaque vente à des projets de reforestation en Europe.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import athleteImg from "@/assets/athlete-mobility.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos | RECOVR" },
      { name: "description", content: "L'histoire, la mission et les valeurs de RECOVR — la marque française de récupération et mobilité." },
      { property: "og:title", content: "À Propos — RECOVR" },
      { property: "og:description", content: "Naturellement performant, depuis Paris." },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x pt-16 lg:pt-24 pb-20">
        <Reveal>
          <p className="eyebrow">À propos</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(2.6rem,6.4vw,5.6rem)] text-forest-deep">
            Faire de la récupération <span className="italic font-serif font-medium">un geste quotidien.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/75">
            RECOVR est née d'une conviction simple : les athlètes les plus durables ne sont pas ceux qui s'entraînent le plus, mais ceux qui récupèrent le mieux. Nous concevons des outils premium, sobres et durables, pour faire de la récupération une habitude — pas une option.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-32">
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden rounded-[2rem]">
            <img src={athleteImg} alt="Athlète en mobilité avec RECOVR" className="size-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="container-x py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {[
            { t: "Mission", d: "Rendre la récupération simple, efficace et désirable, pour aider chaque athlète à performer durablement." },
            { t: "Vision", d: "Devenir la référence européenne de la récupération éco-responsable, à la croisée du sport, du design et du soin." },
            { t: "Valeurs", d: "Sobriété, exigence, longévité. Concevoir moins, mais mieux — pour le corps comme pour la planète." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="border-t border-border pt-8">
                <p className="text-xs tracking-[0.22em] uppercase font-semibold text-forest-rich">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl text-forest-deep">{b.t}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

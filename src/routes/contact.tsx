import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | RECOVR" },
      { name: "description", content: "Une question, un projet, une demande presse ? Écrivez-nous. L'équipe RECOVR répond sous 24h." },
      { property: "og:title", content: "Contact — RECOVR" },
      { property: "og:description", content: "Parlons récupération." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-x pt-16 lg:pt-24 pb-32">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.8rem)] text-forest-deep">
              Parlons <span className="italic font-serif font-medium">récupération.</span>
            </h1>
            <p className="mt-8 max-w-md text-foreground/70 leading-relaxed text-lg">
              Une question, un partenariat, une demande presse ? Notre équipe vous répond sous 24h ouvrées.
            </p>
            <ul className="mt-12 space-y-6 text-forest-deep">
              <li className="flex items-center gap-4"><Mail className="size-4 text-forest-accent" /><span>bonjour@recovr.fr</span></li>
              <li className="flex items-center gap-4"><Phone className="size-4 text-forest-accent" /><span>+33 1 84 60 12 00</span></li>
              <li className="flex items-center gap-4"><MapPin className="size-4 text-forest-accent" /><span>Paris, France</span></li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6"
          >
            {[
              { l: "Nom", n: "name", t: "text" },
              { l: "E-mail", n: "email", t: "email" },
              { l: "Objet", n: "subject", t: "text" },
            ].map((f) => (
              <div key={f.n}>
                <label className="text-[11px] tracking-[0.22em] uppercase font-semibold text-forest-rich">{f.l}</label>
                <input
                  type={f.t}
                  name={f.n}
                  required
                  className="mt-2 w-full bg-transparent border-b border-border py-2 text-forest-deep outline-none focus:border-forest-deep transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-[11px] tracking-[0.22em] uppercase font-semibold text-forest-rich">Message</label>
              <textarea
                rows={5}
                required
                className="mt-2 w-full bg-transparent border-b border-border py-2 text-forest-deep outline-none focus:border-forest-deep transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Envoyer le message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

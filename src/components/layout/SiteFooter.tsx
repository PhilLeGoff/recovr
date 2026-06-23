import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

const columns = [
  {
    title: "Produit",
    links: [
      { to: "/le-kit", label: "Le Kit RECOVR" },
      { to: "/conseils", label: "Conseils récupération" },
      { to: "/engagements", label: "Nos engagements" },
    ],
  },
  {
    title: "Marque",
    links: [
      { to: "/a-propos", label: "À propos" },
      { to: "/contact", label: "Contact" },
      { to: "/conseils", label: "Journal" },
    ],
  },
  {
    title: "Aide",
    links: [
      { to: "/contact", label: "Livraison & retours" },
      { to: "/contact", label: "Nous écrire" },
      { to: "/contact", label: "Service client" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="container-x pt-24 pb-12">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="text-bone"><Logo /></div>
            <p className="mt-6 max-w-sm text-bone/70 leading-relaxed text-[15px]">
              Le système de récupération éco-responsable conçu pour les athlètes qui veulent performer durablement.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex max-w-md items-center gap-2 border-b border-bone/30 pb-3"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                className="flex-1 bg-transparent text-sm placeholder:text-bone/40 outline-none"
              />
              <button type="submit" className="text-xs font-semibold tracking-[0.2em] uppercase text-sand hover:text-bone transition-colors">
                Rejoindre
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bone/50 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-[14px] text-bone/85 hover:text-sand transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-bone/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] tracking-[0.18em] uppercase text-bone/50">
            RECOVR — Naturellement Performant
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-bone/55">
            <a href="#" className="hover:text-bone">Mentions légales</a>
            <a href="#" className="hover:text-bone">Politique de confidentialité</a>
            <a href="#" className="hover:text-bone">CGV</a>
            <span>© {new Date().getFullYear()} RECOVR Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import kitHero from "@/assets/kit-hero.jpg";
import rollerClassic from "@/assets/products/roller-classic.jpg";
import rollerPro from "@/assets/products/roller-pro.jpg";
import rollerTravel from "@/assets/products/roller-travel.jpg";
import triggerStick from "@/assets/products/trigger-stick.jpg";
import ballSolo from "@/assets/products/ball-solo.jpg";
import ballDuo from "@/assets/products/ball-duo.jpg";
import ballMini from "@/assets/products/ball-mini.jpg";
import bandLight from "@/assets/products/band-light.jpg";
import bandMedium from "@/assets/products/band-medium.jpg";
import bandHeavy from "@/assets/products/band-heavy.jpg";
import miniBands from "@/assets/products/mini-bands.jpg";
import strap from "@/assets/products/strap.jpg";
import yogaBlock from "@/assets/products/yoga-block.jpg";
import yogaMat from "@/assets/products/yoga-mat.jpg";
import kneeSleeves from "@/assets/products/knee-sleeves.jpg";
import socks from "@/assets/products/socks.jpg";
import tee from "@/assets/products/tee.jpg";
import hoodie from "@/assets/products/hoodie.jpg";
import tote from "@/assets/products/tote.jpg";
import bottle from "@/assets/products/bottle.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  image: string;
  category: "Kit" | "Récupération" | "Mobilité" | "Activation" | "Accessoires" | "Textile";
  badge?: string;
  madeIn?: "France" | "Portugal" | "Europe";
};

export const products: Product[] = [
  { id: "kit-recovr-v1", slug: "le-kit", name: "Le Kit RECOVR", tagline: "Le système complet · 100 premiers à 35€ (69 restants)", price: 35, compareAt: 50, image: kitHero, category: "Kit", badge: "Best-seller", madeIn: "France" },
  { id: "cork-roller-classic", slug: "rouleau-liege-classic", name: "Rouleau Liège Classic", tagline: "33 × 14 cm · densité standard", price: 39, image: rollerClassic, category: "Récupération", madeIn: "Portugal" },
  { id: "cork-roller-pro", slug: "rouleau-liege-pro", name: "Rouleau Liège Pro", tagline: "45 × 14 cm · densité ferme", price: 49, compareAt: 59, image: rollerPro, category: "Récupération", badge: "Nouveau", madeIn: "Portugal" },
  { id: "cork-roller-travel", slug: "rouleau-liege-travel", name: "Rouleau Liège Travel", tagline: "20 × 12 cm · format voyage", price: 29, image: rollerTravel, category: "Récupération", madeIn: "Portugal" },
  { id: "trigger-stick", slug: "stick-myofascial", name: "Stick Myofascial", tagline: "Liège & hêtre · auto-massage ciblé", price: 34, compareAt: 42, image: triggerStick, category: "Récupération", madeIn: "France" },
  { id: "ball-solo", slug: "balle-massage", name: "Balle de Massage", tagline: "Liège naturel · Ø 7 cm", price: 19, image: ballSolo, category: "Récupération", madeIn: "Portugal" },
  { id: "ball-duo", slug: "double-balle", name: "Double Balle", tagline: "Pour le rachis & les cervicales", price: 24, compareAt: 29, image: ballDuo, category: "Récupération", madeIn: "Portugal" },
  { id: "ball-mini", slug: "balle-pieds", name: "Balle Pieds", tagline: "Voûte plantaire · Ø 5 cm", price: 14, image: ballMini, category: "Récupération", madeIn: "Portugal" },
  { id: "band-light", slug: "elastique-light", name: "Élastique Light", tagline: "5-12 kg · activation", price: 18, image: bandLight, category: "Activation", madeIn: "Europe" },
  { id: "band-medium", slug: "elastique-medium", name: "Élastique Medium", tagline: "12-25 kg · renforcement", price: 22, image: bandMedium, category: "Activation", madeIn: "Europe" },
  { id: "band-heavy", slug: "elastique-heavy", name: "Élastique Heavy", tagline: "25-45 kg · puissance", price: 26, image: bandHeavy, category: "Activation", madeIn: "Europe" },
  { id: "band-loop-set", slug: "mini-bands-set", name: "Mini Bands · Set de 3", tagline: "Latex naturel · 3 résistances", price: 24, compareAt: 32, image: miniBands, category: "Activation", madeIn: "Europe" },
  { id: "strap-mobility", slug: "sangle-etirement", name: "Sangle d'Étirement", tagline: "10 boucles · coton bio", price: 28, image: strap, category: "Mobilité", madeIn: "France" },
  { id: "yoga-block-cork", slug: "brique-liege", name: "Brique Liège", tagline: "Stabilité & alignement", price: 22, image: yogaBlock, category: "Mobilité", madeIn: "Portugal" },
  { id: "yoga-mat", slug: "tapis-liege", name: "Tapis Liège", tagline: "183 × 61 cm · antidérapant naturel", price: 79, compareAt: 99, image: yogaMat, category: "Mobilité", badge: "Nouveau", madeIn: "Portugal" },
  { id: "knee-sleeves", slug: "genouilleres", name: "Genouillères 7 mm", tagline: "Néoprène recyclé · la paire", price: 49, image: kneeSleeves, category: "Accessoires", madeIn: "Europe" },
  { id: "compression-socks", slug: "chaussettes-compression", name: "Chaussettes Compression", tagline: "Récupération post-effort", price: 32, compareAt: 39, image: socks, category: "Textile", madeIn: "France" },
  { id: "recovery-tee", slug: "tee-recuperation", name: "Tee Récupération", tagline: "Coton bio · oversize · unisexe", price: 45, image: tee, category: "Textile", madeIn: "France" },
  { id: "recovery-hoodie", slug: "hoodie-recovr", name: "Hoodie RECOVR", tagline: "Coton bio brossé · vert forêt", price: 89, compareAt: 109, image: hoodie, category: "Textile", madeIn: "France" },
  { id: "tote-bag", slug: "sac-tote", name: "Sac Tote Coton", tagline: "Coton bio GOTS · 100% recyclable", price: 19, image: tote, category: "Accessoires", madeIn: "France" },
  { id: "water-bottle", slug: "gourde-inox", name: "Gourde Inox 750ml", tagline: "Acier inoxydable · isotherme 12h", price: 29, image: bottle, category: "Accessoires", madeIn: "Europe" },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

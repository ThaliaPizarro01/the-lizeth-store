export type Product = {
  id: string;
  name: string;
  type: "joya" | "fragancia";
  categories: string[]; // para los filtros
  label: string; // texto chico sobre el nombre
  price: number;
  description: string;
  image: string; // imagen de la card
  images: [string, string]; // galería del modal
};

const j = (f: string) => `/imagenes/joyas/${f}`;
const f = (n: string) => `/imagenes/fragancias/${n}`;

export const products: Product[] = [
  { id: "anillo-espiral", name: "Anillo Espiral", type: "joya", categories: ["anillo"], label: "Anillo", price: 28,
    description: "Diseño en espiral, delicado y ajustable, ideal para el día a día.",
    image: j("anillo3.png"), images: [j("anillo3.png"), j("anillo3a.png")] },
  { id: "pulsera-estrella", name: "Pulsera Estrella", type: "joya", categories: ["pulsera"], label: "Pulsera", price: 40,
    description: "Un detalle sutil y femenino para tu día a día.",
    image: j("pulsera2.png"), images: [j("pulsera2.png"), j("pulsera2a.png")] },
  { id: "espiral-dorado", name: "Espiral Dorado", type: "joya", categories: ["collar"], label: "Collar", price: 40,
    description: "Collar de cadena fina con dije espiral, perfecto para uso diario.",
    image: j("collar1.png"), images: [j("collar1.png"), j("collar1a.png")] },
  { id: "collar-valerie", name: "Collar Valerie", type: "joya", categories: ["collar"], label: "Collar", price: 35,
    description: "Diseño en forma de gota con dije de cristal azul ovalado y detalles brillantes.",
    image: j("Collar-Valerie-1.png"), images: [j("Collar-Valerie-1.png"), j("Collar-Valerie-1a.png")] },
  { id: "anillo-margaret", name: "Anillo Margaret", type: "joya", categories: ["anillo"], label: "Anillo", price: 25,
    description: "Diseño en flor en combinación de colores dorado y plateado, delicado y ajustable.",
    image: j("Anillo-Margaret-1.png"), images: [j("Anillo-Margaret-1.png"), j("Anillo-Margaret-1a.png")] },
  { id: "aretes-bianca", name: "Aretes Bianca", type: "joya", categories: ["aretes"], label: "Aretes", price: 32,
    description: "Diseño dorados con cristal azul en forma de lágrima y circones superiores.",
    image: j("Aretes-Bianca-1.png"), images: [j("Aretes-Bianca-1.png"), j("Aretes-Bianca-1a.png")] },
  { id: "aretes-esferas", name: "Aretes Esferas", type: "joya", categories: ["aretes"], label: "Aretes", price: 25,
    description: "Diseño en forma de esferas doradas, delicado y perfecto para el día a día.",
    image: j("Aretes-esferas-1.png"), images: [j("Aretes-esferas-1.png"), j("Aretes-esferas-1a.png")] },
  { id: "aretes-gala", name: "Aretes Gala", type: "joya", categories: ["aretes"], label: "Aretes", price: 32,
    description: "Diseño moderno y elegante, con piedras brillantes, perfecto para el día a día.",
    image: j("Aretes-Gala-1.png"), images: [j("Aretes-Gala-1.png"), j("Aretes-Gala-1a.png")] },
  { id: "collar-noemi", name: "Collar Noemi", type: "joya", categories: ["collar"], label: "Collar", price: 33,
    description: "Diseño en forma de corazón de color dorado con detalle en rojo, delicado y combinable.",
    image: j("Collar-Noemi-1.png"), images: [j("Collar-Noemi-1.png"), j("Collar-Noemi-1a.png")] },
  { id: "anillo-amaranta", name: "Anillo Amaranta", type: "joya", categories: ["anillo"], label: "Anillo", price: 24,
    description: "Diseño en flores, delicado y ajustable, ideal para el día a día.",
    image: j("Anillo-Amaranta-1.png"), images: [j("Anillo-Amaranta-1.png"), j("Anillo-Amaranta-1a.png")] },
  { id: "set-brisa-azul", name: "Set Brisa Azul", type: "joya", categories: ["collar", "aretes"], label: "Collar + Aretes", price: 60,
    description: "Juego de collar Valerie y aretes Bianca. El conjunto perfecto para lucir un estilo fresco, elegante y luminoso.",
    image: j("set-brisa-azul.png"), images: [j("Aretes-Bianca-1.png"), j("Collar-Valerie-1.png")] },

  { id: "love-spell", name: "Love Spell", type: "fragancia", categories: [], label: "Victoria's Secret", price: 65,
    description: "Durazno, flor de cerezo y jazmín. El clásico ícono de Victoria's Secret.",
    image: f("love-spell.png"), images: [f("love-spell.png"), f("love-spell.png")] },
  { id: "aqua-kiss", name: "Aqua Kiss", type: "fragancia", categories: [], label: "Victoria's Secret", price: 65,
    description: "Melón y cítricos, ligero y energizante, con shimmer.",
    image: f("aqua-kiss.png"), images: [f("aqua-kiss.png"), f("aqua-kiss.png")] },
];

export const jewelryFilters = [
  { key: "todos", label: "Todas" },
  { key: "collar", label: "Collares" },
  { key: "pulsera", label: "Pulseras" },
  { key: "anillo", label: "Anillos" },
  { key: "aretes", label: "Aretes" },
];
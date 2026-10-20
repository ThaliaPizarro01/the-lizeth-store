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
  { id: "anillo-espiral", name: "Anillo Espiral", type: "joya", categories: ["anillo"], label: "Anillo", price: 20,
    description: "Diseño en espiral, delicado y ajustable, ideal para el día a día.",
    image: j("anillo3.png"), images: [j("anillo3.png"), j("anillo3a.png")] },
  { id: "pulsera-estrella", name: "Pulsera Estrella", type: "joya", categories: ["pulsera"], label: "Pulsera", price: 30,
    description: "Un detalle sutil y femenino para tu día a día.",
    image: j("pulsera2.png"), images: [j("pulsera2.png"), j("pulsera2a.png")] },
  { id: "espiral-dorado", name: "Collar Espiral Dorado", type: "joya", categories: ["collar"], label: "Collar", price: 28,
    description: "Collar de cadena fina con dije espiral, perfecto para uso diario.",
    image: j("collar1.png"), images: [j("collar1.png"), j("collar1a.png")] },
  { id: "aretes-brillo", name: "Aretes Brillos", type: "joya", categories: ["aretes"], label: "Aretes", price: 28,
    description: "Una piedra brillante que atrapa la luz en cualquier momento del día.",
    image: j("Aretes-Brillo2.jpg"), images: [j("Aretes-Brillo2.jpg"), j("Aretes-Brillo2b.jpg")] },
  { id: "anillo-margaret", name: "Anillo Margaret", type: "joya", categories: ["anillo"], label: "Anillo", price: 23,
    description: "Diseño en flor en combinación de colores dorado y plateado, delicado y ajustable.",
    image: j("Anillo-Margaret-1.png"), images: [j("Anillo-Margaret-1.png"), j("Anillo-Margaret-1a.png")] },
  { id: "aretes-fashie", name: "Aretes Fashie", type: "joya", categories: ["aretes"], label: "Aretes", price: 35,
    description: "Piedra rosa tallada con marco dorado. Un detalle que da color a tu look sin esfuerzo.",
    image: j("Aretes-Fashie5.jpg"), images: [j("Aretes-Fashie5.jpg"), j("Aretes-Fashie5a.jpg")] },
  { id: "anillo-party", name: "Anillo Pary", type: "joya", categories: ["anillo"], label: "Anillo", price: 20,
    description: "Dos bolitas doradas que hacen la diferencia. Abierto y regulable, se ajusta a tu talla y se lleva solo o combinado con otros anillos.",
    image: j("anillo2.png"), images: [j("anillo2.png"), j("anillo2a.png")] },
  { id: "collar-respery", name: "Collar Rispery", type: "joya", categories: ["collar"], label: "Collar", price: 28,
    description: "Cadena fina con pequeñas piedras brillantes. Delicado, para usar todos los días.",
    image: j("Collar-Rispery4.jpg"), images: [j("Collar-Rispery4.jpg"), j("Collar-Rispery4a.jpg")] },
  { id: "pulsera-esencia", name: "Pulsera Esencia", type: "joya", categories: ["pulsera"], label: "Pulsera", price: 25,
    description: "Cadena gruesa con dije de corazón. Se ve fuerte y se lleva sola o combinada con otras pulseras.",
    image: j("Pulsera-Esencia1.jpg"), images: [j("Pulsera-Esencia1.jpg"), j("Pulsera-Esencia1a.jpg")] },
  // { id: "anillo-amaranta", name: "Anillo Amaranta", type: "joya", categories: ["anillo"], label: "Anillo", price: 24,
  //   description: "Diseño en flores, delicado y ajustable, ideal para el día a día.",
  //   image: j("Anillo-Amaranta-1.png"), images: [j("Anillo-Amaranta-1.png"), j("Anillo-Amaranta-1a.png")] },
  { id: "set-aretes-brillo", name: "Set Aretes Brillo", type: "joya", categories: ["aretes"], label: "Aretes", price: 25,
    description: "Argollas, aretes con circonita y aretes de bolita en un solo set. Tres estilos para combinar según el día.",
    image: j("Set-Aretes-Brillo3.jpg"), images: [j("Set-Aretes-Brillo3.jpg"), j("Set-Aretes-Brillo3a.jpg")] },

  { id: "love-spell", name: "Love Spell", type: "fragancia", categories: ["shimmer"], label: "Victoria's Secret", price: 65,
    description: "Frutal. Floral. Romántico. Dulce. Femenino. Clásico, con shimmer.",
    image: f("love-spell-shimmer.png"), images: [f("love-spell-shimmer.png"), f("love-spell-shimmer.png")] },
  { id: "aqua-kiss", name: "Aqua Kiss", type: "fragancia", categories: ["shimmer"], label: "Victoria's Secret", price: 65,
    description: "Fresco. Acuático. Ligero. Limpio. Refrescante, con shimmer.",
    image: f("aqua-kiss-shimmer.png"), images: [f("aqua-kiss-shimmer.png"), f("aqua-kiss-shimmer.png")] },
  { id: "coconut-passion", name: "Coconut Passion", type: "fragancia", categories: [], label: "Victoria's Secret", price: 65,
    description: "Cremoso. Tropical. Dulce. Cálido. Coco. Vainilla.",
    image: f("coconut-passion.png"), images: [f("coconut-passion.png"), f("coconut-passion.png")] },
  // { id: "velvet-petals", name: "Velvet Petals", type: "fragancia", categories: ["shimmer"], label: "Victoria's Secret", price: 65,
  //   description: "Floral. Suave. Dulce. Delicado. Femenino. Envolvente, con shimmer.",
  //   image: f("velvet-petals-shimmer.png"), images: [f("velvet-petals-shimmer.png"), f("velvet-petals-shimmer.png")] },
];

export const jewelryFilters = [
  { key: "todos", label: "Todas" },
  { key: "collar", label: "Collares" },
  { key: "pulsera", label: "Pulseras" },
  { key: "anillo", label: "Anillos" },
  { key: "aretes", label: "Aretes" },
];

export const fragranceFilters = [
  { key: "todos", label: "Todas" },
  { key: "shimmer", label: "Con Shimmer" },
  { key: "no-shimmer", label: "Sin Shimmer" },
];
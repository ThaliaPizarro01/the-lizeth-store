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
  { id: "espiral-dorado", name: "Collar Espiral Dorado", type: "joya", categories: ["collar"], label: "Collar", price: 28,
    description: "Collar de cadena fina con dije espiral, perfecto para uso diario.",
    image: j("collar1.png"), images: [j("collar1.png"), j("collar1a.png")] },
  { id: "aretes-cloudette", name: "Aretes Claudette", type: "joya", categories: ["aretes"], label: "Aretes", price: 28,
    description: "Diseño en forma de gota con una piedra de circonia en el centro y un marco liso y pulido. Son discretos y elegantes, y combinan con cualquier look, del trabajo a una salida especial. De acero inoxidable 316L, hipoalergénico y de gran durabilidad.",
    image: j("ARETES-CLOUDETTE.jpg"), images: [j("ARETES-CLOUDETTE.jpg"), j("ARETES-CLOUDETTE1a.jpg")] },
  { id: "collar-dione", name: "Collar Dione", type: "joya", categories: ["collar"], label: "Collar", price: 28,
    description: "Diseño en capas que combina cadenas de distintos estilos, una de bolitas y otras finas, con un pequeño dije de piedra brillante. Da el look de varios collares en una sola pieza. De acero inoxidable 316L, resistente y duradero.",
    image: j("COLLAR-DIONE.jpg"), images: [j("COLLAR-DIONE.jpg"), j("COLLAR-DIONE1a.jpg")] },
  { id: "pulsera-mia", name: "Pulsera Mía", type: "joya", categories: ["pulsera"], label: "Pulsera", price: 25,
    description: "Cadena fina dorada con tres piedras de circonia engastadas, con cierre y extensor ajustable. Es un accesorio sutil y femenino que se adapta a cualquier estilo. De acero inoxidable 316L con enchape de oro 18K PVD, resistente al agua y duradero.",
    image: j("PULSERA-MIA.jpg"), images: [j("PULSERA-MIA.jpg"), j("PULSERA-MIA1a.jpg")] },
  { id: "anillo-party", name: "Anillo Party", type: "joya", categories: ["anillo"], label: "Anillo", price: 20,
    description: "Dos bolitas doradas que hacen la diferencia. Abierto y regulable, se ajusta a tu talla y se lleva solo o combinado con otros anillos.",
    image: j("anillo2.png"), images: [j("anillo2.png"), j("anillo2a.png")] },
  { id: "collar-rispery", name: "Collar Rispery", type: "joya", categories: ["collar"], label: "Collar", price: 28,
    description: "Cadena fina con pequeñas piedras brillantes. Delicado, para usar todos los días.",
    image: j("Collar-Rispery4.jpg"), images: [j("Collar-Rispery4.jpg"), j("Collar-Rispery4a.jpg")] },
  // { id: "pulsera-esencia", name: "Pulsera Esencia", type: "joya", categories: ["pulsera"], label: "Pulsera", price: 25,
  //   description: "Cadena gruesa con dije de corazón. Se ve fuerte y se lleva sola o combinada con otras pulseras.",
  //   image: j("Pulsera-Esencia1.jpg"), images: [j("Pulsera-Esencia1.jpg"), j("Pulsera-Esencia1a.jpg")] },
  // { id: "anillo-amaranta", name: "Anillo Amaranta", type: "joya", categories: ["anillo"], label: "Anillo", price: 24,
  //   description: "Diseño en flores, delicado y ajustable, ideal para el día a día.",
  //   image: j("Anillo-Amaranta-1.png"), images: [j("Anillo-Amaranta-1.png"), j("Anillo-Amaranta-1a.png")] },
  // { id: "set-aretes-brillo", name: "Set Aretes Brillo", type: "joya", categories: ["aretes"], label: "Aretes", price: 25,
  //   description: "Argollas, aretes con circonita y aretes de bolita en un solo set. Tres estilos para combinar según el día.",
  //   image: j("Set-Aretes-Brillo3.jpg"), images: [j("Set-Aretes-Brillo3.jpg"), j("Set-Aretes-Brillo3a.jpg")] },

  { id: "love-spell", name: "Love Spell", type: "fragancia", categories: ["shimmer"], label: "Victoria's Secret", price: 65,
    description: "Frutal. Floral. Romántico. Dulce. Femenino. Clásico, con shimmer.",
    image: f("love-spell-shimmer.png"), images: [f("love-spell-shimmer.png"), f("love-spell-shimmer.png")] },

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
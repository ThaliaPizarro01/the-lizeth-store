export type Combo = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string; // imagen principal (card y primera foto)
  images: [string, string, string]; // principal + los dos productos que contiene
  includes: string[];
};

const c = (n: string) => `/imagenes/combos/${n}`;

export const combos: Combo[] = [
  {
    id: "combo-amor-estelar", name: "Combo Amor Estelar", price: 88,
    description: "Love Spell Shimmer de Victoria's Secret más los Aretes Brillos.\nEl regalo perfecto para brillar.",
    image: c("Combo-Amor-Estelar.jpg"),
    images: [c("Combo-Amor-Estelar.jpg"), "/imagenes/fragancias/love-spell-shimmer.png", "/imagenes/joyas/Aretes-Brillo2.jpg"],
    includes: ["Love Spell Shimmer (Victoria's Secret)", "Aretes Brillos"]
  },
  {
    id: "combo-amor-marino", name: "Combo Amor Marino", price: 88,
    description: "Aqua Kiss Shimmer de Victoria's Secret más los Aretes Brillos.\nFresco, elegante y brillante.",
    image: c("Combo-Amor-Marino.jpg"),
    images: [c("Combo-Amor-Marino.jpg"), "/imagenes/fragancias/aqua-kiss-shimmer.png", "/imagenes/joyas/Aretes-Brillo2.jpg"],
    includes: ["Aqua Kiss Shimmer (Victoria's Secret)", "Aretes Brillos"]
  },
  {
    id: "combo-brillo-estelar", name: "Combo Brillo Estelar", price: 45,
    description: "Un brazalete de estrellas con detalles de perla y un anillo abierto con bolitas doradas. \nDos piezas para llevar el brillo a todo tu look.",
    image: c("Combo-Brillo-Estelar.jpg"),
    images: [c("Combo-Brillo-Estelar.jpg"), "/imagenes/joyas/pulsera2.png", "/imagenes/joyas/anillo2.png"],
    includes: ["Pulsera Estrella", "Anillo Party"]
  },
  {
    id: "combo-destello-elegante", name: "Combo Destello Elegante", price: 50,
    description: "Unos aretes con piedra brillante y un collar fino con piedras, para llevar el brillo todos los días.",
    image: c("Combo-Destello-Elegante.jpg"),
    images: [c("Combo-Destello-Elegante.jpg"), "/imagenes/joyas/Collar-Rispery4.jpg", "/imagenes/joyas/Aretes-Brillo2.jpg"],
    includes: ["Collar Rispery", "Aretes Brillos"]
  },
  {
    id: "combo-armonia-de-primavera", name: "Combo Armonía de Primavera", price: 46,
    description: "Un dije espiral dorado y un anillo flor bicolor. Dos piezas con diseño propio para destacar en cualquier look.",
    image: c("Armonia-de-Primavera.jpg"),
    images: [c("Armonia-de-Primavera.jpg"), "/imagenes/joyas/collar1.png", "/imagenes/joyas/Anillo-Margaret-1.png"],
    includes: ["Collar Espiral Dorado", "Anillo Margareth"]
  },
  // {
  //   id: "combo-arurum-esencial", name: "Combo Aurum Esencial", price: 40,
  //   description: "Una pulsera de cadena gruesa con dije de corazón y un anillo abierto con bolitas doradas. \nDos piezas que se combinan con todo y se llevan juntas o por separado.",
  //   image: c("Combo-Aurum-Esencial.jpg"),
  //   images: [c("Combo-Aurum-Esencial.jpg"), "/imagenes/joyas/Pulsera-Esencia1.jpg", "/imagenes/joyas/anillo2.png"],
  //   includes: ["Pulsera Esencia", "Anillo Party"]
  // },
  {
    id: "combo-aura-rosa", name: "Combo Aura Rosa", price: 52,
    description: "Unos aretes con piedra rosa tallada y un anillo con textura en espiral. \nDos piezas para darle un toque especial a tu look.",
    image: c("combo-Aura-Rosa.jpg"),
    images: [c("combo-Aura-Rosa.jpg"), "/imagenes/joyas/Aretes-Fashie5.jpg", "/imagenes/joyas/anillo3.png"],
    includes: ["Aretes Fashie", "Anillo Espiral"]
  },
];

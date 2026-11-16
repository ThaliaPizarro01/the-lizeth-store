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
    id: "combo-set-luminoso", name: "Set Luminoso", price: 50,
    description: "Combina el collar Dione, con sus cadenas finas en capas y un pequeño dije de piedra brillante, y los aretes Cloudette, con una piedra en forma de gota. Es un conjunto plateado, delicado y elegante, ideal para regalar o para estrenar. De acero inoxidable 316L..",
    image: c("Set-Luminoso.jpg"),
    images: [c("Set-Luminoso.jpg"), "/imagenes/joyas/ARETES-CLOUDETTE.jpg", "/imagenes/joyas/COLLAR-DIONE.jpg"],
    includes: ["Collar Dione", "Aretes Claudette"]
  },


  {
    id: "combo-set-brillo-estelar", name: "Set Brillo Estelar", price: 45,
    description: "Combina el collar Rispery, de cadena fina con pequeñas piedras brillantes, y la pulsera Mía, con tres piedras engastadas y cierre ajustable. Un conjunto dorado, femenino y elegante. De acero inoxidable 316L con enchape de oro 18K, resistente al agua y duradero.",
    image: c("set-brillo-estelar.jpg"),
    images: [c("set-brillo-estelar.jpg"), "/imagenes/joyas/Collar-Rispery4.jpg", "/imagenes/joyas/PULSERA-MIA.jpg"],
    includes: ["Collar Rispery", "Pulsera Mía"]
  },



  {
    id: "combo-set-Solstice", name: "Set Solstice", price: 48,
    description: "Incluye el collar Rispery, una cadena fina con pequeñas piedras brillantes, y el anillo Party, abierto y regulable, con dos bolitas doradas. Dos piezas sutiles que se complementan para el día a día. De acero inoxidable 316L con enchape de oro 18K, resistente al agua y duradero.",
    image: c("Set-Solstice.jpg"),
    images: [c("Set-Solstice.jpg"), "/imagenes/joyas/Collar-Rispery4.jpg", "/imagenes/joyas/anillo2.png"],
    includes: ["Collar Rispery", "Anillo Party"]
  },

];

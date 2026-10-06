// Para activar o desactivar la oferta del 10% en TODO el sitio, cambia este valor.
export const DISCOUNT_ACTIVE = false;
export const DISCOUNT_PERCENT = 0.1;
export const DISCOUNT_BADGE_SRC = "/imagenes/redes/10-por-ciento.png";

export const formatPrice = (n: number) => `S/ ${n.toFixed(2)}`;
export const discountedPrice = (n: number) => n * (1 - DISCOUNT_PERCENT);
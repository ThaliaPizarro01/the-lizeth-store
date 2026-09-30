import { DISCOUNT_ACTIVE, DISCOUNT_BADGE_SRC, discountedPrice, formatPrice } from "@/lib/discounts";

export function Price({ value }: { value: number }) {
  if (!DISCOUNT_ACTIVE) return <>{formatPrice(value)}</>;
  return (
    <>
      <span className="price-original">{formatPrice(value)}</span>{" "}
      <span className="price-discounted">{formatPrice(discountedPrice(value))}</span>
    </>
  );
}

export function DiscountBadge() {
  if (!DISCOUNT_ACTIVE) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={DISCOUNT_BADGE_SRC} alt="10% de descuento" className="discount-badge" />;
}
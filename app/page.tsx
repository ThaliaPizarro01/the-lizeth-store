import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import { About, Categories, HowToBuy, Payments } from "@/components/StaticSections";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Hero />
        <Categories />
        <ProductGrid />
        <HowToBuy />
        <Payments />
        <About />
        <FAQ />
        <Counter />
      </div>

      <a className="whatsapp" target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp"
        href="https://wa.me/51907134693?text=%C2%A1Hola!%20%F0%9F%92%95%F0%9F%8E%80%20me%20interesa%20uno%20de%20tus%20productos%20%E2%98%BA%EF%B8%8F">
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
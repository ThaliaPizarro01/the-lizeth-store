import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";  

// Poppins: 300, 400, 500, 600 (igual que en el HTML original)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap", // Importante: display=swap como en el HTML original
});

// Cormorant Garamond: 400, 500, 600, 700 (igual que en el HTML original)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap", // Importante: display=swap como en el HTML original
});

export const metadata: Metadata = {
  title: "The Lizeth Store | Joyas Premium y Fragancias en Perú",
  description:
    "The Lizeth Store - Joyas de acero inoxidable premium y fragancias importadas en Perú. Collares, aretes, pulseras, anillos y perfumes originales para mujeres profesionales. Envíos a Lima y provincias.",
  keywords:
    "joyas de acero inoxidable perú, joyas premium lima, fragancias importadas perú, perfumes originales, tienda online joyas, regalos para mujeres",
  authors: [{ name: "The Lizeth Store" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://thelizethstore.com",
  },
  openGraph: {
    title: "The Lizeth Store | Joyas Premium y Fragancias",
    description:
      "Descubre nuestras joyas de acero inoxidable premium y fragancias importadas. Productos originales para mujeres que trabajan. Envíos a todo Perú.",
    images: [
      {
        url: "https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png",
      },
    ],
    url: "https://thelizethstore.com",
    type: "website",
    siteName: "The Lizeth Store",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lizeth Store | Joyas y Fragancias Importadas",
    description:
      "Compra joyas de acero premium y fragancias originales importadas en Perú",
    images: ["https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png"
        />
        {/* Schema.org - OnlineStore */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "OnlineStore",
              name: "The Lizeth Store",
              url: "https://thelizethstore.com",
              logo: "https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png",
              description:
                "Tienda online de joyas premium de acero inoxidable y fragancias importadas en Perú",
              telephone: "+51907134693",
              sameAs: [
                "https://www.instagram.com/the.lizeth.store/",
                "https://www.facebook.com/profile.php?id=61593919891451",
                "https://www.tiktok.com/@the.lizeth.store",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PE",
                addressRegion: "Lima",
                addressLocality: "Lima",
              },
              priceRange: "S/ 24 - S/ 65",
            }),
          }}
        />
        {/* Schema.org - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              name: "The Lizeth Store",
              url: "https://thelizethstore.com",
              logo: "https://thelizethstore.com/imagenes/marca/logo-sin-fondo.png",
              description:
                "Joyas premium de acero inoxidable y fragancias importadas originales",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+51907134693",
                availableLanguage: "es",
              },
              sameAs: [
                "https://www.instagram.com/the.lizeth.store/",
                "https://www.facebook.com/profile.php?id=61593919891451",
                "https://www.tiktok.com/@the.lizeth.store",
              ],
            }),
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJ1CSZMZYL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZJ1CSZMZYL');
            `,
          }}
        />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
          {/* Botón flotante WhatsApp */}
          <a
            className="whatsapp"
            href="https://wa.me/51907134693?text=%C2%A1Hola!%20%F0%9F%92%95%F0%9F%8E%80%20me%20interesa%20uno%20de%20tus%20productos%20%E2%98%BA%EF%B8%8F"
            target="_blank"
            rel="noreferrer"
            aria-label="Escríbenos por WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.05 2C6.505 2 2 6.505 2 12.05c0 1.89.516 3.66 1.41 5.176L2 22l4.94-1.377A9.98 9.98 0 0 0 12.05 22.1C17.596 22.1 22.1 17.596 22.1 12.05 22.1 6.505 17.596 2 12.05 2zm0 18.267a8.184 8.184 0 0 1-4.176-1.145l-.3-.178-3.098.864.83-3.02-.196-.31a8.19 8.19 0 0 1-1.264-4.428c0-4.522 3.68-8.202 8.204-8.202 4.522 0 8.202 3.68 8.202 8.202 0 4.523-3.68 8.217-8.202 8.217z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
import CategorySubHeader from "@/components/CategorySubHeader/CategorySubHeader";
import FeatureCardsClient from "@/components/FeatureCards/FeatureCardsClient";
import ProductCarouselClient from "@/components/ProductCarousel/ProductCarouselClient";
import Header from "@/components/header/Header";
import Slider from "@/components/Slide/Slider";
import TopInfoBar from "@/components/topinfobar/TopInfoBar";
import "@/styles/globals.css";
import { ReactNode } from "react";

interface SliderImage {
  src: string;
  alt: string;
}

export const metadata = {
  title: "Estação das Letras",
  description: "Livraria online com alma e propósito",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const sliderImages: SliderImage[] = [
    { src: "/slider/2210.jpg", alt: "Promoção de Verão" },
    {
      src: "/slider/2211.jpg",
      alt: "Novos Lançamentos de Livros",
    },
    {
      src: "/slider/2212.jpg",
      alt: "Oferta Especial de Aniversário",
    },
  ];

  return (
    <html lang="pt-BR">
      <body>
        <TopInfoBar />
        <Header />
        <CategorySubHeader />
        <Slider images={sliderImages} />
        <FeatureCardsClient />
        <ProductCarouselClient />
        {children}
      </body>
    </html>
  );
}

import CategorySubHeader from "@/components/CategorySubHeader";
import FeatureCards from "@/components/FeatureCards";
import Header from "@/components/header/Header";
import Slider from "@/components/Slider";
import TopInfoBar from "@/components/topinfobar/TopInfoBar";
import "@/styles/globals.css";
import { ReactNode } from "react";

interface SliderImage {
  src: string;
  alt: string;
}

interface CardItem {
  id: string;
  label: string;
  onClick?: () => void;
  href?: string;
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

    const featureCardsData: CardItem[] = [
      {
        id: "card1",
        label: "Livros em Destaque",
        onClick: () => console.log("Clicou em Destaque!"),
      },
      {
        id: "card2",
        label: "Promoções Imperdíveis",
        onClick: () => console.log("Clicou em Promoções!"),
      },
      {
        id: "card3",
        label: "Novidades",
        onClick: () => console.log("Clicou em Novidades!"),
      },
    ];



  return (
    <html lang="pt-BR">
      <body>
        <TopInfoBar />
        <Header />
        <CategorySubHeader />
        <Slider images={sliderImages} />
        <FeatureCards cards={featureCardsData} />
        {children}
      </body>
    </html>
  );
}

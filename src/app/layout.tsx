import Header from "@/components/header/Header";
import TopInfoBar from "@/components/topinfobar/TopInfoBar";
import "@/styles/globals.css";
import { ReactNode } from "react";
import CategorySubHeader from "@/components/CategorySubHeader";
import Slider from "@/components/Slider";


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
        {children}
      </body>
    </html>
  );
}

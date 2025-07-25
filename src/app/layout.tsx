import Header from "@/components/header/Header";
import TopInfoBar from "@/components/topinfobar/TopInfoBar";
import "@/styles/globals.css";
import { ReactNode } from "react";
import CategorySubHeader from "@/components/CategorySubHeader";
import Slider from "@/components/Slider";

export const metadata = {
  title: "Estação das Letras",
  description: "Livraria online com alma e propósito",
};

export default function RootLyout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <TopInfoBar />
        <Header />
        <CategorySubHeader />
        <Slider />
        {children}
      </body>
    </html>
  );
}

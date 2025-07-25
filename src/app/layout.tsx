import "@/styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/header/Header";
import TopInfoBar from "@/components/topinfobar/TopInfoBar";

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
        {children}
      </body>
    </html>
  );
}

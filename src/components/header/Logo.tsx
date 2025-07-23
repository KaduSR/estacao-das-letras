
import Image from "next/image";
import { Island_Moments } from "next/font/google";

const islandMoments = Island_Moments({ weight: "400", subsets: ["latin"] });

export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/Logo.svg"
        alt="Logo Estação das Letras"
        width={80}
        height={80}
        priority
      />
      <span className={`${islandMoments.className} text-2xl text-gray-800`}>
        Estação das Letras
      </span>
    </div>
  );
}

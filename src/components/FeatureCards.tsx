"use client";
import React from "react";
import Image from "next/image";

interface CardItem {
  id: string;
  label: string;
  onClick: () => void;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface FeatureCardsProps {
  cards: CardItem[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards }) => {
  return (
    <div className="mx-auto flex justify-center space-x-6 my-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 
                w-[550px] h-[250px] flex items-center cursor-pointer"
          onClick={card.onClick}
        >
          {card.label && (
            <span className="text-gray-700 font-semibold text-lg">
              {card.label}
            </span>
          )}
          {card.imageSrc && (
            <Image
              src={card.imageSrc}
              alt={card.imageAlt || card.label}
              width={100} 
              height={100} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

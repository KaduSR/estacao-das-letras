"use client";
import React from "react";
import Image from "next/image";

interface ImageType {
  id: string;
  label: string;
  onClick: () => void;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface FeatureCardsProps {
  cards: ImageType[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards }) => {
  return (
    <div className="mx-auto flex justify-center space-x-6 my-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-300  shadow-md hover:shadow-lg shadow-gray-400 rounded-3xl transition-shadow duration-300 
                w-[535px] h-[174px] flex items-center cursor-pointer mt-2"
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

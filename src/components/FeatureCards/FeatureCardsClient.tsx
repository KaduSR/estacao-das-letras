'use client';

import React from 'react';
import FeatureCards from './FeatureCards'

interface CardItem {
    id: string;
    label: string;
    onClick: () => void;
    href?: string;
}

const FeatureCardsClient: React.FC = () => {
    const featureCardsData: CardItem[] = [
        {id: "card1", label: "Livros em Destaque", onClick: () => console.log("Clicou em Destaque!")},
        {id: "card2", label: "Promoções Imperdíveis", onClick: () => console.log("Clicou em Promoções!")},
        {id: "card3", label: "Novidades", onClick: () => console.log("Clicou em Novidades!")},
    ];

    return (
            <FeatureCards cards={featureCardsData} />
    );
};

export default FeatureCardsClient;
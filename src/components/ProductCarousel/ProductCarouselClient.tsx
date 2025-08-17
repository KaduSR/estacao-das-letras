'use client';
import React from 'react';
import ProductCarousel from './ProductCarousel';

interface Product {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    author: string;
    price: number;
}

const ProductCarouselClient: React.FC = () => {
    const productData: Product[] = [
        {
            id: "1",
            imageSrc: "/LivrosDestaque/product1.jpg",
            imageAlt: "Product 1",
            title: "Product 1",
            author: "Author 1",
            price: 29.99,
        },
        {
            id: "2",
            imageSrc: "/LivrosDestaque/product2.jpg",
            imageAlt: "Product 2",
            title: "Product 2",
            author: "Author 2",
            price: 39.99,
        },
        {
            id: "3",
            imageSrc: "/LivrosDestaque/product3.jpeg",
            imageAlt: "Product 3",
            title: "Product 3",
            author: "Author 3",
            price: 49.99,
        },
         {
            id: "4",
            imageSrc: "/LivrosDestaque/product3.jpeg",
            imageAlt: "Product 3",
            title: "Product 3",
            author: "Author 3",
            price: 49.99,
        },
         {
            id: "5",
            imageSrc: "/LivrosDestaque/product3.jpeg",
            imageAlt: "Product 3",
            title: "Product 3",
            author: "Author 3",
            price: 49.99,
        },
        
    ];

    return (
        <ProductCarousel
            products={productData}
            itemsPerPage={5} />
    );
};

export default ProductCarouselClient;
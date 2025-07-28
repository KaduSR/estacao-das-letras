"use client"; 

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useCurrencyFormatter } from "@/hooks/useCurrencyFormatter";

export interface Product {
  
  id: string; 
  imageSrc: string; 
  imageAlt: string; 
  title: string; 
  author: string; 
  price: number; 
}

interface ProductCarouselProps {
  products: Product[]; 
  itemsPerPage?: number; 
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  itemsPerPage = 5,
}) => {
  const { formatCurrency } = useCurrencyFormatter();
  const [currentIndex, setCurrentIndex] = useState<number>(0); 
  const carouselInnerRef = useRef<HTMLDivElement>(null); 
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null); 

  const totalPages = Math.ceil(products.length / itemsPerPage); 

  const goToPage = useCallback(
    
    (pageIndex: number) => {
    
      let newIndex = pageIndex; 
      if (newIndex >= totalPages) {
        
        newIndex = 0; 
      } else if (newIndex < 0) {
        
        newIndex = totalPages - 1; 
      }
      setCurrentIndex(newIndex); 
    },
    [totalPages] 
  ); 

  const nextPage = useCallback(() => {
    
    goToPage(currentIndex + 1); 
  }, [goToPage, currentIndex]); 

  const prevPage = useCallback(() => {
    
    goToPage(currentIndex - 1); 
  }, [goToPage, currentIndex]); 

  const stopAutoSlide = useCallback(() => {
    
    if (slideIntervalRef.current) {
    
      clearInterval(slideIntervalRef.current);
    }
  }, []); 

  const startAutoSlide = useCallback(() => {
    stopAutoSlide(); 
    slideIntervalRef.current = setInterval(nextPage, 5000); 
  }, [stopAutoSlide, nextPage]); 

  const resetInterval = useCallback(() => {

    stopAutoSlide(); 
    startAutoSlide(); 
  }, [stopAutoSlide, startAutoSlide]); 

  useEffect(() => {
    
    startAutoSlide(); 
    return () => {
      
      stopAutoSlide(); 
    }; 
  }, [currentIndex, startAutoSlide, stopAutoSlide]); 

  useEffect(() => {
   
    if (carouselInnerRef.current) {
   
      carouselInnerRef.current.style.transform = `translateX(${
       
        -currentIndex * (100 / itemsPerPage) 
      }%)`; 
    } 
  }, [currentIndex, itemsPerPage]); 

  if (!products || !Array.isArray(products) || products.length === 0) {
    
    console.warn(
      "ProductCarousel received empty or invalid 'products' prop. No carousel will be displayed." 
    );
    return null; 
  }

  return (
    <section className="relative mx-auto max-w-[1913px] py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 uppercase">
        DESTAQUES DA SEMANA
      </h2>
      <div className="relative overflow-hidden">
        <div
          ref={carouselInnerRef}
          className="flex transition-transform duration-500 ease-in-out"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          style={{ width: `${(products.length / itemsPerPage) * 100}%` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[218px] h-[505px] bg-white rounded-md shadow-md
                         flex flex-col items-center p-4 m-3 cursor-pointer
                         hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="w-full h-40 bg-gray-200 rounded-sm mb-4 flex items-center justify-center text-gray-500">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={125} 
                  height={178} 
                  className="rounded-sm object-cover w-full h-full"
                />
                IMAGEM
              </div>

              <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {product.author}
              </p>
              <p className="text-lg font-bold text-green-600 mb-4">
{formatCurrency(product.price)}              </p>

              <button
                className="mt-auto w-full py-2 bg-lime-500 text-white font-bold rounded-md
                           hover:bg-lime-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Adicionar ${product.title} ao carrinho!`);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 2zM5.25 9.25a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5H5.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7 6.5A2.5 2.5 0 019.5 4h1A2.5 2.5 0 0113 6.5v.75a.75.75 0 001.5 0V6.5A4 4 0 0010 3a4 4 0 00-4 3.5v.75a.75.75 0 001.5 0V6.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ADICIONAR</span>
              </button>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <>
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full text-2xl
                         hover:bg-opacity-80 transition-colors duration-300 z-20 focus:outline-none"
              onClick={() => {
                prevPage();
                resetInterval();
              }}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full text-2xl
                         hover:bg-opacity-80 transition-colors duration-300 z-20 focus:outline-none"
              onClick={() => {
                nextPage();
                resetInterval();
              }}
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <span
              key={pageIndex}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                pageIndex === currentIndex
                  ? "bg-gray-700"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => {
                goToPage(pageIndex);
                resetInterval();
              }}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;

"use client";
import { ShoppingBag } from "lucide-react";
import { useCurrencyFormatter } from "@/hooks/useCurrencyFormatter";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

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
      <h2 className="text-3xl font-bold text-center mb-8 uppercase text-black">
        DESTAQUES DA SEMANA
      </h2>
      <div className="relative overflow-hidden mx-auto">
        <div
          ref={carouselInnerRef}
          className="flex transition-transform duration-500 ease-in-out justify-center"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          style={{ width: `${(products.length / itemsPerPage) * 100}%` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[200px] h-[505px] bg-white rounded-2xl shadow-md
                flex flex-col items-center p-4 m-3 cursor-pointer
                hover:shadow-lg transition-shadow duration-300 border border-gray-200 shadow-gray-400"
            >
              <div className="w-full h-40 mb-4 flex items-center justify-center text-gray-500">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={125}
                  height={178}
                  className="rounded-lg object-cover mt-2"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 text-center mb-1 mt-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {product.author}
              </p>
              <div className="flex items-left w-full mb-2 mt-35">
                <p className="text-2xl font-bold text-black">
                  {formatCurrency(product.price)}
                </p>
              </div>

              <button
                className="mb-10 w-full py-2 bg-lime-500 text-black font-bold rounded-full
                hover:bg-black transition-colors duration-300 flex items-center justify-center space-x-1 hover:text-white  cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Adicionar ${product.title} ao carrinho!`);
                }}
              >
                <ShoppingBag />
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

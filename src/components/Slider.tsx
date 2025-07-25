"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
}

interface SliderProps {
  images: ImageType[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderImagesRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = images.length;

  const showSlide = (index: number) => {
    let newIndex = index;
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const resetInterval = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [currentIndex]);

  useEffect(() => {
    if (sliderImagesRef.current) {
      sliderImagesRef.current.style.transform = `translateX(${
        -currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div
      className="mx-auto rounded-lg shadow-2xl shadow-gray-500 overflow-hidden bg-white border border-gray-700 relative mt-2"
      style={{ width: "1694.11px", height: "426px" }}
    >
      <div
        ref={sliderImagesRef}
        className="flex transition-transform duration-500 ease-in-out"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1694}
            height={426}
            className="w-[1694.11px] h-[426px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

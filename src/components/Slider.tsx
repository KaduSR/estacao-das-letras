import React, { useState, useEffect, useRef } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderIntervalRef = useRef(null);
  const sliderImagensRef = useRef(null);

  const totalSlides = images.length;

  const showSlides = (index) => {
    let newIndex = index;
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    showSlides(currentIndex + 1);
  };
  const prevSlide = () => {
    showSlides(currentIndex - 1);
  };
  const startAutoSlide = () => {
    StopAutoSlide();
    sliderIntervalRef.current = setInterval(nextSlide, 5000);
  };

  const StopAutoSlide = () => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }
  };
  const resetInterval = () => {
    StopAutoSlide();
    startAutoSlide();
  };
  useEffect(() => {
    startAutoSlide();
    return () => {
      StopAutoSlide();
    };
  });
};

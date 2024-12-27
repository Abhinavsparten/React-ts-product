import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const slides: string[] = [
    "https://i.postimg.cc/kXSjwPcW/5763409-2980380.jpg",
    "https://i.postimg.cc/4xbWkvjd/13530001-5279593.jpg",
    "https://i.postimg.cc/pdvzvgKb/37452114-8485575.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      nextSlide();
    }, 3000); // Change slide in 4 seconds


    return () => clearTimeout(intervalId);
  }, [currentSlide]); 

  return (
    <div className="relative w-full sm:h-[75vh] overflow-hidden">
      {/* Carousel Content */}
      <div
        className=" flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 ">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className=" w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="custom-button left-4"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="custom-button right-4"
      >
        &#10095;
      </button>
    </div>
    
  );
};

export default Carousel;

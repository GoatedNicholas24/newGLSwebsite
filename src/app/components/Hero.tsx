'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Hero({ 
  title = "Journey Beyond the wild",
  subtitle = "Discover Africa's Untamed Beauty!",
  backgroundImage,
  
  
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = backgroundImage ? [backgroundImage] : [
    '/May-be-an-image-of-big-cat-and-nature-5.jpg',
    '/May-be-an-image-of-big-cat-and-nature-5 copy.jpg',
    '/May-be-an-image-of-big-cat-and-nature-5 copy 2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000); // Change slide every 20 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Detect if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? (
    <section className="relative h-100 w-full border-0" >
      {/* Background Slideshow */}
      <div className="absolute inset-0 border-0 rounded-lg ">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 border-0 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
           >
            <Image
              src={slide}
              alt="African Safari"
              fill
              className="object-cover border-0 rounded-lg"
              
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30 border-0" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 border-0">
        <div className="text-center max-w-6xl mx-auto border-0">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight border-0 ">
            {title}
           
          </h1> 
          <p className="mt-4 text-2xl md:text-3xl text-white/80 border-0">{subtitle}</p>
           
          
        </div>
      </div>
    </section>
  ) : (
    <section className="relative h-100 w-full border-0">
      {/* Background Slideshow */}
      <div className="absolute inset-0 border-0 rounded-lg ">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 border-0 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt="African Safari"
              fill
              className="object-cover border-0 rounded-lg"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30 border-0" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 border-0">
        <div className="text-center max-w-6xl mx-auto border-0">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight border-0 ">
            {title}
          </h1>

          <p className="mt-4 text-2xl md:text-3xl text-white/80 border-0">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}


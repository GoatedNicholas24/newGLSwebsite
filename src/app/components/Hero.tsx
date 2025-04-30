'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
 

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  
 
}

export default function Hero({ 
  title = "Discover Africa's Untamed Beauty",
  subtitle = "Journey Beyond the wild.",
  backgroundImage,
  
  
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = backgroundImage ? [backgroundImage] : [
    '/images/hero_slideshow/simba-safari-camp-uganda-0294.webp',
    '/images/hero_slideshow/Image-may-contain-sky-nature-and-outdoor.jpg',
    '/images/hero_slideshow/May-be-an-image-of-big-cat-and-nature-5.jpg',
    '/images/hero_slideshow/Beach-Lake-Kivu-Rwanda.jpg',
    '/images/hero_slideshow/buffaloes-kidepo-1600w.jpg',
    '/images/hero_slideshow/DSC_4384.jpg',
    '/images/hero_slideshow/forestlake-1600w.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000); // Change slide every 20 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full border-0" >
      {/* Background Slideshow */}
      <div className="absolute inset-0 border-0 rounded-lg ">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`relative inset-0 transition-opacity duration-1000 border-0 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt="African Safari"
              fill
              className="object-cover border-0 rounded-lg"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30 border-0" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 border-0">
        <div className="text-center max-w-6xl mx-auto border-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight border-0 ">
            {title}
          </h1>
          
          <p className="mt-4 text-3xl md:text-4xl text-white/80 border-0">{subtitle}</p>
           
          
        </div>
      </div>
    </section>
  );
} 

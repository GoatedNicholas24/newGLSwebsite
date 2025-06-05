'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    quote: 'An unforgettable experience! The guides were incredibly knowledgeable and made us feel safe throughout the entire journey. The wildlife sightings were beyond our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Singapore',
    flag: '🇸🇬',
    rating: 5,
    quote: 'The attention to detail and personalized service was exceptional. Every moment was carefully planned, allowing us to fully immerse ourselves in the beauty of Africa.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    quote: "From the moment we arrived, we were treated like family. The team went above and beyond to ensure our safari was perfect. Can't wait to return!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    country: 'Spain',
    flag: '🇪🇸',
    rating: 5,
    quote: "The most professional and well-organized safari company I've experienced. Their commitment to sustainable tourism is truly commendable.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#557553] mb-4">What Our Guests Say</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of Africa with us.
          </p>
        </motion.div>

        <div className="relative h-[430px]">
          <AnimatePresence mode="wait">
           
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
                className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col md:flex-row gap-8 border border-gray-100"
              >
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#557553]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="text-2xl">{testimonials[currentIndex].flag}</span>
                      <span className="text-gray-600">{testimonials[currentIndex].country}</span>
                    </div>
                    <div className="flex justify-center mt-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 flex items-center">
                  <blockquote className="text-lg sm:text-xl text-gray-700 italic leading-relaxed">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>
                </div>
              
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#557553] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
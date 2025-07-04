'use client';

import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  // All testimonials removed as requested
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const testimonialsPerView = 3;
  
  // Calculate responsive testimonialsPerView value
  const [viewportWidth, setViewportWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getTestimonialsPerView = useCallback(() => {
    if (viewportWidth < 640) return 1;
    if (viewportWidth < 1024) return 2;
    return 3;
  }, [viewportWidth]);
  
  const currentTestimonialsPerView = getTestimonialsPerView();
  
  // Autoplay
  useEffect(() => {
    if (!isAutoplay) return;
    
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => 
        prev === testimonials.length - currentTestimonialsPerView ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [activeIndex, isAutoplay, currentTestimonialsPerView]);
  
  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  
  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => 
      prev === testimonials.length - currentTestimonialsPerView 
        ? testimonials.length - currentTestimonialsPerView 
        : prev + 1
    );
  };
  
  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      React.createElement(Star, {
        key: i,
        className: `w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`
      })
    ));
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          
        </div>
        
        <div className="relative">
          {/* Testimonial slider controls */}
          <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous"
            >
              {React.createElement(ChevronLeft, { className: "w-6 h-6 text-gray-700 dark:text-gray-300" })}
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - currentTestimonialsPerView}
              className={`p-2 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                activeIndex === testimonials.length - currentTestimonialsPerView ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next"
            >
              {React.createElement(ChevronRight, { className: "w-6 h-6 text-gray-700 dark:text-gray-300" })}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
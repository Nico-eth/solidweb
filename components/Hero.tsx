'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-700 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-64 h-64 bg-primary-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div 
            className={`lg:w-1/2 space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white">Solid Marketing</span>
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Development  & Marketing Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Your trusted platform offering custom development solutions, marketing strategies, and professional scripts for cryptocurrencies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="btn-primary flex items-center justify-center gap-2 text-lg group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div 
            className={`lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90 rounded-xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                
                {/* Code terminal view */}
                <div className="relative p-4 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-hidden font-mono text-sm text-gray-300">
                    <div className="flex items-center">
                      <span className="text-primary-400">$</span>
                      <span className="ml-2 text-gray-100">npm install solid-marketing</span>
                    </div>
                    <div className="mt-2 text-gray-400">Installing packages...</div>
                    <div className="mt-2 text-gray-400">✓ Dependencies installed successfully</div>
                    <div className="mt-4 flex items-center">
                      <span className="text-primary-400">$</span>
                      <span className="ml-2 text-gray-100">solid-launch <span className="text-primary-400">--product</span> volume-bot</span>
                    </div>
                    <div className="mt-2 text-green-400">✓ Volume bot deployed successfully</div>
                    <div className="mt-4 flex items-center">
                      <span className="text-primary-400">$</span>
                      <span className="ml-2 text-gray-100">solid-status</span>
                    </div>
                    <div className="mt-2 text-gray-300">
                      <span className="text-green-400">● Active:</span> 3 bots running
                    </div>
                    <div className="mt-1 text-gray-300">
                      <span className="text-primary-400">● Stats:</span> 10.5M volume generated
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className="text-primary-400">$</span>
                      <span className="ml-2 text-gray-100 animate-pulse">█</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-px bg-primary-500/20 blur-xl rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
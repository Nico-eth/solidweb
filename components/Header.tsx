'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Moon, Sun, ShoppingCart } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/solidweblogo.png" alt="Solid Marketing Logo" width={40} height={40} className="h-10 w-auto" priority />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Solid Marketing</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium transition-colors">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium transition-colors">Products</Link>
            <Link href="/features" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium transition-colors">Features</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium transition-colors">FAQ</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 font-medium transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={
                `p-2 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ` +
                (theme === 'dark'
                  ? 'bg-gray-800 border-primary-500 text-yellow-400 hover:bg-gray-700'
                  : 'bg-white border-primary-500 text-primary-700 hover:bg-primary-50')
              }
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? React.createElement(Sun, { size: 20 }) : React.createElement(Moon, { size: 20 })}
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? React.createElement(X, { size: 24 }) : React.createElement(Menu, { size: 24 })}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container-custom py-4 space-y-3">
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/features" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/faq" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
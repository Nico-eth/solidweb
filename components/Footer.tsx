'use client';

import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Features', href: '/features' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const productLinks = [
  { name: 'Volume Bots', href: '/products/1' },
  { name: 'Marketing Bots', href: '/products/3' },
  { name: 'Token Launchpad', href: '/products/5' },
  { name: 'Solana Trading Bot', href: '/products/8' },
  { name: 'Solana Sniper Bot', href: '/products/9' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Logo and About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/solidweblogo.png" alt="Solid Marketing Logo" width={72} height={72} className="h-18 w-auto" priority />
            </Link>
            <p className="text-gray-400 mb-6 pr-8">
              Your trusted platform offering professional software solutions and marketing services for cryptocurrencies.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/solidmarkt" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary-800 transition-colors" aria-label="GitHub">
                GitHub
              </Link>
              <Link href="https://t.me/solidmarketing" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary-800 transition-colors" aria-label="Telegram">
                Telegram
              </Link>
              <a href="https://t.me/solid_marketing" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary-800 transition-colors" aria-label="Telegram Channel">
                Telegram Channel
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-400 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-400 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-primary-400 hover:text-primary-300 flex items-center mt-2">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 mt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Solid Marketing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
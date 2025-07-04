'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { BarChart2, Rocket, MessageSquare, Terminal, Code, Shield, DollarSign, Server, Crosshair } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Volume Bots",
    icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
    description: "Volume bots operating on Solana, Tron, Base, Bsc, Ethereum networks."
  },
  {
    id: 2,
    name: "Trending-Upvote Bots",
    icon: <Rocket className="w-8 h-8 text-yellow-500" />,
    description: "Trending and upvote bots for platforms like Dextools, coinmarketcap and similar."
  },
  {
    id: 3,
    name: "Marketing Bots",
    icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    description: "Marketing and automation bots for Telegram, Instagram, Discord, and Twitter."
  },
  {
    id: 4,
    name: "Telegram Accounts",
    icon: <Terminal className="w-8 h-8 text-purple-600" />,
    description: "Ready-to-use Telegram accounts with number or session files."
  },
  {
    id: 5,
    name: "Token Launchpad",
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    description: "Custom software for token launchpads and memecoin launches. Professional launchpad solutions for your token launch."
  },
  {
    id: 6,
    name: "Telegram Custom Buy Bot",
    icon: <Code className="w-8 h-8 text-indigo-500" />,
    description: "Custom bots like @delugebuybot, @buytech on Telegram."
  },
  {
    id: 7,
    name: "Solana LP Remover",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    description: "LP remover tool for Solana network tokens."
  },
  {
    id: 8,
    name: "Solana Trading Bot",
    icon: <DollarSign className="w-8 h-8 text-emerald-500" />,
    description: "Automated trading bot for Solana network."
  },
  {
    id: 9,
    name: "Solana Sniper Bot",
    icon: <Crosshair className="w-8 h-8 text-gray-700" />,
    description: "Sniper bot for Solana network."
  }
];

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen py-32 bg-white dark:bg-gray-900">
        <div className={`container-custom max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}> 
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">Explore our range of professional bots, tools, and solutions for the crypto and blockchain space.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="mb-4">{product.icon}</div>
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage; 
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ChevronRight, Terminal, MessageSquare, Shield, Rocket, BarChart2, Code, Server, DollarSign } from 'lucide-react';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Volume Bots',
    description: 'Volume bots operating on Solana, Tron, Base, Bsc, Ethereum networks.',
    icon: React.createElement(BarChart2, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'Specially developed bots to generate high-performance trading volume on various networks. Easy-to-use interface with automated transactions, real-time monitoring, and adjustable volume levels.',
    features: [
      'Multi-chain support',
      'Customizable transaction amounts',
      'Automatic trading',
      'Sell - buy settings',
      'Automatic wallet creation',
      'Spread balance between wallets'
    ],
    comingSoon: false
  },
  {
    id: 2,
    name: 'Trending-Upvote Bots',
    description: 'Trending and upvote bots for platforms like Dextools, coinmarketcap and similar.',
    icon: React.createElement(Rocket, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'Bots designed to highlight your project on popular crypto platforms. Helps you rise in trend lists and rankings on platforms like DEXtools, Coinmarketcap, DEXScreener, Geckoterminal etc.',
    features: ['Platform-specific optimization', 'Natural-looking interaction', 'Track chart rise', 'Upvote campaigns'],
    comingSoon: false,
    customText: 'You can reach us via Telegram DM'
  },
  {
    id: 3,
    name: 'Marketing Bots',
    description: 'Marketing and automation bots for Telegram, Instagram, Discord, and Twitter',
    icon: React.createElement(MessageSquare, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'Comprehensive bot package that automates your marketing activities on social media platforms. DM sending, message forwarding, group copying, and more.',
    features: ['Telegram DM-Forwarder-Shill', 'Instagram DM-Like-Comment', 'Discord DM', 'Twitter Comment-Shill-DM-Auto Tweet'],
    comingSoon: false
  },
  {
    id: 4,
    name: 'Telegram Accounts',
    description: 'Ready-to-use Telegram accounts with number or session files',
    icon: React.createElement(Terminal, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'Ready Telegram accounts for your marketing and communication activities. Delivered for use either with a number or session files.',
    features: ['Instant delivery', 'Verified accounts', 'Telegram API support'],
    comingSoon: false,
    customText: 'Valid for bulk purchases only.'
  },
  {
    id: 5,
    name: 'Token Launchpad',
    description: 'Custom software for token launchpads and memecoin launches Professional launchpad solutions for your token launch.',
    icon: React.createElement(Rocket, { className: 'w-6 h-6 text-primary-500' }),
    detailed: '',
    features: ['Customizable interface', 'Secure smart contract'],
    comingSoon: false
  },
  {
    id: 6,
    name: 'Telegram Custom Buy Bot',
    description: 'Custom bots like @delugebuybot, @buytech on Telegram',
    icon: React.createElement(Code, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'It allows you to display alerts to buyers of your tokens in your telegram groups. From the smallest purchase to the largest purchase, increase engagement, and help build community. Can be customized with colors and designs to match your brand identity.',
    features: [
      'Personalized design',
      'Instant buy notifications',
      'Community competitions'
    ],
    comingSoon: false
  },
  {
    id: 7,
    name: 'Solana LP Remover',
    description: 'LP remover tool for Solana network tokens',
    icon: React.createElement(Shield, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'A tool that allows you to securely manage your token\'s liquidity pool on the Solana network. You can perform scheduled or conditional LP removal operations.',
    features: [
      'Schedulable operations',
      'Secure removal',
      'Low gas fees',
      'Real-time monitoring',
      'Full automation'
    ],
    comingSoon: false
  },
  {
    id: 8,
    name: 'Solana Trading Bot',
    description: 'Automated trading bot for Solana network',
    icon: React.createElement(DollarSign, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'A powerful trading bot that can automatically buy and sell, set strategies, monitor price movements, and seize profit opportunities on the Solana network.',
    features: ['Strategy creation', 'Risk management', 'Automated trading', 'Market monitoring'],
    comingSoon: false
  },
  {
    id: 9,
    name: 'Solana Sniper Bot',
    description: 'Sniper bot for Solana network',
    icon: React.createElement(Server, { className: 'w-6 h-6 text-primary-500' }),
    detailed: 'A sniper bot that can instantly detect and quickly buy newly launched tokens on the Solana network. Allows you to be among the first buyers and catch potential opportunities.',
    features: ['Ultra-fast transactions', 'Token filtering', 'Anti-scam protection', 'Multiple buying strategies'],
    comingSoon: false
  }
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer special tools and professional solutions developed for your success in the cryptocurrency market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`card group p-6 transition-all duration-300 hover:shadow-lg ${
                activeProduct === product.id ? 'ring-2 ring-primary-500 shadow-md' : ''
              }`}
              onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
            >
              <div className="flex items-start justify-between">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  {product.icon}
                </div>
                {product.comingSoon && (
                  <span className="px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{product.description}</p>
              
              {activeProduct === product.id && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <p className="text-gray-700 dark:text-gray-300">{product.detailed}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-primary-500 mt-1 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {product.customText && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{product.customText}</p>
                  )}
                  
                  <div className="pt-4">
                    <Link 
                      href={`/products/${product.id}`} 
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      More Details
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
              
              {activeProduct !== product.id && (
                <button 
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group-hover:underline"
                  onClick={() => setActiveProduct(product.id)}
                >
                  More
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 
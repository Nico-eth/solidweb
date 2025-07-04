'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { BarChart2, ChevronLeft } from 'lucide-react';

const features = [
  'Multi-chain support (Solana, Tron, Base, Bsc, Ethereum)',
  'Customizable transaction amounts',
  'Automatic trading',
  'Sell - buy settings',
  'Automatic wallet creation',
  'Spread balance between wallets',
  'Real-time monitoring',
  'Adjustable volume levels'
];

const VolumeBotsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen py-32 bg-white dark:bg-gray-900">
        <div className="container-custom max-w-2xl mx-auto">
          <Link
            href="/products"
            className={`inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Products
          </Link>
          <div className={`flex flex-col items-center text-center mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '250ms' }}>
            <BarChart2 className="w-16 h-16 text-blue-600 mb-4" />
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Volume Bots (Market Maker Bot)</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Specially developed bots to generate high-performance trading volume on various networks. Easy-to-use interface with automated transactions, real-time monitoring, and adjustable volume levels.
            </p>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 p-4 rounded text-blue-800 dark:text-blue-200 text-base transition-all duration-1000" style={{ transitionDelay: '400ms', ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(40px)' }) }}>
              <b>Note:</b> These bots are designed for DEX (decentralized exchange) platforms. If you need a CEX (centralized exchange) bot, we can develop a custom solution for you. Please contact us for details.
            </div>
          </div>
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '550ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`mb-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${700 + idx * 120}ms` }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VolumeBotsPage; 
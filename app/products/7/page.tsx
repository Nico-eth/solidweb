'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { Shield, ChevronLeft } from 'lucide-react';

const features = [
  'Schedulable operations',
  'Secure removal',
  'Low gas fees',
  'Real-time monitoring',
  'Full automation'
];

const SolanaLPRemoverPage = () => {
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
            <Shield className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Solana LP Remover</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              A tool that allows you to securely manage your token's liquidity pool on the Solana network. You can perform scheduled or conditional LP removal operations with full automation and low gas fees.
            </p>
          </div>
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`mb-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${550 + idx * 120}ms` }}
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

export default SolanaLPRemoverPage; 
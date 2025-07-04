'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CheckCircle, Shield, Clock, CreditCard, Star, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: 'Secure Systems',
    description: 'All our products are developed with the highest security standards. None of your data is stored. Your payments are made confidentially and protected securely.'
  },
  {
    icon: <Clock className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: '24/7 Support',
    description: 'Our technical team is always ready to answer your questions and solve your problems. You can quickly reach us via Telegram.'
  },
  {
    icon: <Star className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: 'High Quality',
    description: 'Our products are created by professional developers and have undergone comprehensive testing.'
  },
  {
    icon: <Users className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: 'Custom Solutions',
    description: 'We develop solutions tailored to your needs. You can contact us for customization of our existing products or for a completely new product.'
  },
  {
    icon: <CreditCard className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: 'Crypto Payments',
    description: 'We accept all payments with cryptocurrencies. You can pay with Bitcoin, Ethereum, BNB, USDT, and other popular coins.'
  },
  {
    icon: <CheckCircle className="w-14 h-14 text-primary-500 drop-shadow-lg" />,
    title: 'Cross-Platform Compatibility',
    description: 'Bots that require installation are compatible with Windows, Mac, Linux.'
  },
];

const FeaturesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-24 text-center bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-16 shadow-lg">
          <div className={`container-custom max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}> 
            <h1 className="text-5xl font-extrabold mb-4">Why Choose Us?</h1>
            <p className="text-xl opacity-90 mb-2">We go beyond the basics. Discover the unique features that set us apart and help you succeed in the crypto world.</p>
          </div>
        </section>
        {/* Features List */}
        <section>
          <div className="container-custom max-w-4xl mx-auto space-y-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center md:items-stretch ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} delay-[${(idx + 1) * 150}]`}
                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
                  <div className="rounded-full bg-primary-100 dark:bg-primary-900/40 p-6 mb-4 md:mb-0 shadow-xl group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center px-0 md:px-10">
                  <h3 className="text-2xl font-bold mb-2 text-primary-700 dark:text-primary-300">{feature.title}</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full mb-4" />
                  <p className="text-lg text-gray-700 dark:text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="mt-20 py-12 bg-primary-600 text-white text-center rounded-2xl shadow-xl mx-4 md:mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-2">Still have questions?</h2>
          <p className="mb-6 text-lg">Contact us and our team will be happy to help you.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary-700 font-bold rounded-lg shadow hover:bg-primary-100 transition-colors">Contact Us</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage; 
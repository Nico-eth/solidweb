'use client';

import { CheckCircle, Shield, Clock, CreditCard, Star, Users } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-primary-500" />,
    title: 'Secure Systems',
    description: 'All our products are developed with the highest security standards. None of your data is stored. Your payments are made confidentially and protected securely.'
  },
  {
    icon: <Clock className="w-10 h-10 text-primary-500" />,
    title: '24/7 Support',
    description: 'Our technical team is always ready to answer your questions and solve your problems. You can quickly reach us via Telegram.'
  },
  {
    icon: <Star className="w-10 h-10 text-primary-500" />,
    title: 'High Quality',
    description: 'Our products are created by professional developers and have undergone comprehensive testing.'
  },
  {
    icon: <Users className="w-10 h-10 text-primary-500" />,
    title: 'Custom Solutions',
    description: 'We develop solutions tailored to your needs. You can contact us for customization of our existing products or for a completely new product.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary-500" />,
    title: 'Crypto Payments',
    description: 'We accept all payments with cryptocurrencies. You can pay with Bitcoin, Ethereum, BNB, USDT, and other popular coins.'
  },
  {
    icon: React.createElement(CheckCircle, { className: 'w-10 h-10 text-primary-500' }),
    title: 'Cross-Platform Compatibility',
    description: 'Bots that require installation are compatible with Windows, Mac, Linux.'
  },
];

const Features = () => (
  <section id="features" className="py-20 bg-white dark:bg-gray-900">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Our Features</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover the advantages of working with us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

const faqs = [
  {
    question: "How can I purchase your products?",
    answer: "You can purchase our products through our website. After selecting the product you want, simply add it to your cart and proceed to the payment step. You can securely make your payments with cryptocurrencies."
  },
  {
    question: "Which cryptocurrencies do you accept?",
    answer: "We accept popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), BNB, USDT, USDC, and Solana (SOL). If you want to pay with a different cryptocurrency, please contact us."
  },
  {
    question: "How do volume bots work?",
    answer: "Our volume bots create trading volume by automatically executing buy and sell transactions on the crypto pairs you specify. Our bots can operate on various blockchain networks, and you can customize parameters such as transaction amount and frequency. Our bots are developed for DEX. If you want personalized CEX bots, please contact us."
  },
  {
    question: "Do you provide technical support for your products?",
    answer: "Yes, we provide 24/7 technical support for all our products. If you encounter any issues, you can reach our support team via Telegram. We will assist you as soon as possible."
  },
  {
    question: "Do you offer custom project development services?",
    answer: "Yes, we can develop projects tailored to your specific needs. You can contact us for customization of our existing products or for a completely new project. Our team will evaluate your requirements and offer you a suitable solution."
  },
  {
    question: "How do Trending and Upvote bots work?",
    answer: "Our Trending and Upvote bots are designed to increase your project's visibility on platforms like Dextools and Coinmarketcap. Our bots help your project enter trending lists by simulating natural user behavior at certain intervals."
  },
  {
    question: "What are the use cases for Telegram accounts?",
    answer: "Our Telegram accounts can be used for many purposes such as marketing campaigns, group management, API usage for your bots, and interacting with your community. Accounts are delivered with a phone number or session files and are ready to use immediately."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us directly via Telegram. You can also reach us by filling out the contact form on our website. We will get back to you as soon as possible."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  {activeIndex === index ?
                    React.createElement(ChevronUp, { className: 'h-6 w-6 text-primary-600' }) :
                    React.createElement(ChevronDown, { className: 'h-6 w-6 text-gray-500 dark:text-gray-400' })
                  }
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100 mt-3 pr-12' : 'max-h-0 opacity-0'}`}
                style={{ pointerEvents: activeIndex === index ? 'auto' : 'none' }}
              >
                {activeIndex === index && (
                  <div>
                    {faq.question === "How do volume bots work?" ? (
                      <>
                        <p className="text-base text-gray-600 dark:text-gray-400">
                          Our volume bots create trading volume by automatically executing buy and sell transactions on the crypto pairs you specify. Our bots can operate on various blockchain networks, and you can customize parameters such as transaction amount and frequency.
                        </p>
                        <small className="block mt-2 text-xs text-gray-400 dark:text-gray-500 italic">
                          Our bots are developed for DEX. If you want personalized CEX bots, please contact us.
                        </small>
                      </>
                    ) : (
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Do you have more questions?
          </p>
          <a 
            href="/contact" 
            className="inline-block mt-4 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
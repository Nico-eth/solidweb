'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 text-center bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-16 shadow-lg">
          <div className={`container-custom max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}> 
            <h1 className="text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90 mb-2">Answers to common questions about our products and services.</p>
          </div>
        </section>
        {/* FAQ Accordion */}
        <section>
          <div className="container-custom max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`py-5 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${(idx + 1) * 150}ms` }}>
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={activeIndex === idx}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    {activeIndex === idx ?
                      <ChevronUp className="h-6 w-6 text-primary-600" /> :
                      <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    }
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-96 opacity-100 mt-3 pr-2' : 'max-h-0 opacity-0'}`}
                  style={{ pointerEvents: activeIndex === idx ? 'auto' : 'none' }}
                >
                  {activeIndex === idx && (
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

export default FAQPage; 
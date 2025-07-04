'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            You can contact us for your projects, questions, or suggestions. We will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Your message has been sent successfully! We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                    placeholder="Your Name Surname"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      {React.createElement(Send, { className: 'w-5 h-5' })}
                      <span>Send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Quick Contact Only (removed Our Contact Information) */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
            <p className="mb-6">
              For urgent questions or requests, you can reach us via Telegram. You can get a quick response 24/7.
            </p>
            <a 
              href="https://t.me/solidmarketing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Telegram: @solidmarketing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
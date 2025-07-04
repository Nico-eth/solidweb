'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to API or email)
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24">
        <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
          <h1
            className={`text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Contact Us
          </h1>
          <p
            className={`text-lg text-gray-600 dark:text-gray-300 mb-8 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '250ms' }}
          >
            Have a question or want to work with us? Reach out via Telegram or the form below.
          </p>
          <div
            className={`flex flex-col items-center mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="https://t.me/solidmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow hover:bg-primary-700 transition-colors mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 3.75 2.25 12l6.75 2.25M21.75 3.75l-4.5 16.5-6.75-6.75m11.25-9.75-11.25 9.75" />
              </svg>
              Message us on Telegram
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '550ms' }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '850ms' }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary-600 text-white font-bold rounded-lg shadow hover:bg-primary-700 transition-colors"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </div>
            {submitted && (
              <p className="text-green-600 dark:text-green-400 text-center mt-2">Thank you for reaching out! We will get back to you soon.</p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPage = () => (
  <>
    <Header />
    <main className="min-h-screen py-32 bg-white dark:bg-gray-900">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          This Privacy Policy explains how Solid Marketing handles your information. We are committed to processing only the minimum data necessary for the operation of our website and services.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>We do <b>not</b> collect or store any personal data unless you submit it via our contact form.</li>
            <li>We only process technical data strictly necessary for your browser and our website to function (such as basic connection logs or cookies required for site operation).</li>
            <li>No personal data is collected, sold, or processed for any other purpose.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">2. Use of Information</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Information you provide via the contact form is used solely to respond to your inquiry.</li>
            <li>We will <b>never</b> share, sell, or rent your personal information with anyone. If required by law, we may disclose information submitted via the contact form to authorities. If you have not submitted any information, we have no personal data to provide.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">3. Cookies & Analytics</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>We may use cookies that are strictly necessary for the operation of our website. We do not use analytics or tracking cookies for marketing or profiling purposes.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">4. Data Security</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>We implement industry-standard security measures to protect any data you submit via the contact form.</li>
            <li>No method of transmission over the Internet or electronic storage is 100% secure, but we strive to use commercially acceptable means to protect your information.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">5. Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>You may request to access, update, or delete your personal information submitted via the contact form by contacting us.</li>
            <li>We will comply with all applicable data protection laws.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">6. Changes to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">7. Contact</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us via the form on our website or via Telegram.
          </p>
        </section>
        <div className="text-xs text-gray-400 mt-8">Effective date: {new Date().toLocaleDateString()}</div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPage; 
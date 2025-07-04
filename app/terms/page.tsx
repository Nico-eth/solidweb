import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsPage = () => (
  <>
    <Header />
    <main className="min-h-screen py-32 bg-white dark:bg-gray-900">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Use</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">By accessing or using the Solid Marketing website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">2. Permitted Use</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>You may use our website and services only for lawful purposes and in accordance with these terms.</li>
            <li>You agree not to misuse, disrupt, or attempt to gain unauthorized access to any part of our website or services.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">3. No Guarantees or Warranties</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Our website and services are provided on an "as is" and "as available" basis without warranties of any kind.</li>
            <li>We do not guarantee the accuracy, completeness, or reliability of any content or service provided.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">4. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>All content, trademarks, and intellectual property on this website are owned by Solid Marketing or its licensors.</li>
            <li>You may not copy, reproduce, or distribute any content from this website without our prior written consent.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">5. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>You are responsible for any information you submit via our contact form and for complying with all applicable laws.</li>
            <li>You must not use our services for any illegal or unauthorized purpose.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">6. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>To the fullest extent permitted by law, Solid Marketing shall not be liable for any damages arising from your use of our website or services.</li>
            <li>This includes, but is not limited to, direct, indirect, incidental, or consequential damages.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">7. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">We may update these Terms of Use from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website constitutes acceptance of the revised terms.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white drop-shadow dark:drop-shadow-lg">8. Contact</h2>
          <p className="text-gray-600 dark:text-gray-300">If you have any questions about these Terms of Use, please contact us via the form on our website or via Telegram.</p>
        </section>
        <div className="text-xs text-gray-400 mt-8">Effective date: {new Date().toLocaleDateString()}</div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsPage; 
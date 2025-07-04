'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { BarChart2, ChevronLeft, X } from 'lucide-react';

const features = [
  'Multi-chain support (Solana, Tron, Base, Bsc, Ethereum)',
  'Customizable transaction amounts',
  'Automatic trading',
  'Sell - buy settings',
  'Automatic wallet creation',
  'Spread balance between wallets',
  'Real-time monitoring',
  'Adjustable volume levels',
  'All source codes are shared with your purchase.'
];

const networks = [
  'Solana',
  'Tron',
  'Base',
  'Bsc',
  'Ethereum'
];

const PaymentPanel = ({ open, onClose, widgetType, selectedNetwork }: { open: boolean, onClose: () => void, widgetType: 'multi' | 'single' | null, selectedNetwork?: string }) => {
  // Responsive scaling for the widget
  const [scale, setScale] = React.useState(1);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleResize() {
      const maxWidgetHeight = 700;
      const minPanelHeight = 320;
      const panelHeight = panelRef.current?.offsetHeight || window.innerHeight;
      if (panelHeight < maxWidgetHeight) {
        setScale(panelHeight / maxWidgetHeight);
      } else {
        setScale(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <div
      ref={panelRef}
      className={`fixed top-0 right-0 h-full z-50 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 w-full sm:w-[320px] md:w-[350px] lg:w-[400px] max-w-full flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Complete Your Payment {widgetType === 'single' && selectedNetwork ? `(${selectedNetwork})` : ''}
        </h2>
        <button
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
      {/* Smaller, more subtle warning note below the title */}
      <div className="w-full px-3 pt-1 pb-1 text-[10px] text-gray-500 dark:text-gray-400 bg-transparent flex items-start gap-1">
        <span className="mr-1">⚠️</span>
        <span>
          <b>Note:</b> If the amount you send is close to the expected payment, the transaction will still be processed (minor differences are accepted). However, if the amount is significantly higher or lower, your payment will be automatically refunded.
        </span>
      </div>
      <div className="flex-1 overflow-auto p-2 flex flex-col items-center justify-center">
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            width: scale < 1 ? `${100 / scale}%` : '100%',
            height: scale < 1 ? `${700 * scale}px` : '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {widgetType === 'multi' && (
            <iframe src="https://nowpayments.io/embeds/payment-widget?iid=5416816659" width="350" height="700" frameBorder="0" scrolling="no" style={{ overflowY: 'hidden', border: 'none', background: 'transparent' }} title="Multi-Chain Payment Widget"></iframe>
          )}
          {widgetType === 'single' && (
            <iframe src="https://nowpayments.io/embeds/payment-widget?iid=5940196766" width="350" height="700" frameBorder="0" scrolling="no" style={{ overflowY: 'hidden', border: 'none', background: 'transparent' }} title="Specific Network Payment Widget"></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

function PaymentTabs({ onBuy, onNetworkChange }: { onBuy: (type: 'multi' | 'single') => void, onNetworkChange: (network: string) => void }) {
  const [tab, setTab] = useState<'multi' | 'single'>('multi');
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [showWidget, setShowWidget] = useState(false);
  const [widgetType, setWidgetType] = useState<'multi' | 'single' | null>(null);

  useEffect(() => {
    if (tab === 'single') {
      onNetworkChange(selectedNetwork);
    }
  }, [selectedNetwork, tab, onNetworkChange]);

  // Restore paymentInfo warning note
  const paymentInfo = null;

  return (
    <div className={`w-full max-w-xl mx-auto relative transition-transform duration-500`}>
      {/* Payment margin info */}
      {paymentInfo}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        <button
          className={`flex-1 py-2 px-4 text-lg font-medium transition-colors rounded-t-md focus:outline-none ${tab === 'multi' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'}`}
          onClick={() => { setTab('multi'); }}
        >
          Multi-Chain Bot
        </button>
        <button
          className={`flex-1 py-2 px-4 text-lg font-medium transition-colors rounded-t-md focus:outline-none ${tab === 'single' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'}`}
          onClick={() => { setTab('single'); }}
        >
          Specific Network Bot
        </button>
      </div>
      {tab === 'multi' && (
        <div className={`bg-white dark:bg-gray-900 p-6 rounded shadow text-center transition-transform duration-500`}>
          <div className="mb-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500</div>
            <div className="text-gray-700 dark:text-gray-200 mb-2">Get a bot that supports all the following networks:</div>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {['Solana', 'Tron', 'Base', 'Bsc', 'Ethereum'].map(network => (
                <span key={network} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-semibold border border-blue-300 dark:border-blue-700">{network}</span>
              ))}
            </div>
            <div className="mb-4 text-green-700 dark:text-green-300 text-sm font-medium">All source codes are shared with your purchase.</div>
            <div className="flex justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                onClick={() => onBuy('multi')}
              >
                Buy Multi-Chain Bot
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center text-sm text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 p-3 rounded">
              <span className="mr-2">ℹ️</span>
              <span>
                If you want another network or special service like a CEX bot, contact us on <a href="https://t.me/solidmarketing" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-300">Telegram</a>.
              </span>
            </div>
          </div>
        </div>
      )}
      {tab === 'single' && (
        <div className={`bg-white dark:bg-gray-900 p-6 rounded shadow text-center transition-transform duration-500`}>
          <div className="mb-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">$350</div>
            <div className="text-gray-700 dark:text-gray-200 mb-4">Choose a specific network for your bot.</div>
            <div className="mb-4">
              <label htmlFor="network-select" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">Select Network</label>
              <select
                id="network-select"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={selectedNetwork}
                onChange={e => {
                  setSelectedNetwork(e.target.value);
                  onNetworkChange(e.target.value);
                }}
              >
                {networks.map(network => (
                  <option key={network} value={network}>{network}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 text-green-700 dark:text-green-300 text-sm font-medium">All source codes are shared with your purchase.</div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
              onClick={() => onBuy('single')}
            >
              Buy for {selectedNetwork}
            </button>
            <div className="mt-4 flex items-center justify-center text-sm text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 p-3 rounded">
              <span className="mr-2">ℹ️</span>
              <span>
                If you want another network or special service like a CEX bot, contact us on <a href="https://t.me/solidmarketing" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-300">Telegram</a>.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const VolumeBotsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [widgetType, setWidgetType] = useState<'multi' | 'single' | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  useEffect(() => { setIsVisible(true); }, []);

  // Handler for opening payment
  const handleBuy = (type: 'multi' | 'single') => {
    setWidgetType(type);
    setPaymentOpen(true);
  };

  // Main content and payment panel in flex row
  return (
    <>
      <Header />
      <main className="min-h-screen py-32 bg-white dark:bg-gray-900">
        <div className="flex flex-row relative transition-all duration-500" style={{ minHeight: '70vh' }}>
          {/* Main Content */}
          <div className={`flex-1 transition-transform duration-500 ${paymentOpen ? 'sm:translate-x-[-200px]' : ''}`} style={{ maxWidth: paymentOpen ? 'calc(100% - 320px)' : '100%', transition: 'max-width 0.5s, transform 0.5s' }}>
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
              </div>
              <div className={`mb-8 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                {!showPurchase && (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-lg shadow transition-colors mb-2"
                    onClick={() => setShowPurchase(true)}
                  >
                    Buy Now
                  </button>
                )}
                <div className={`w-full ${showPurchase ? 'max-h-[2000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'} overflow-hidden transition-all duration-500`}
                     style={{ transitionProperty: 'max-height, opacity, transform' }}>
                  {showPurchase && <PaymentTabs onBuy={handleBuy} onNetworkChange={setSelectedNetwork} />}
                </div>
              </div>
              <div className={`flex flex-col items-center text-center mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '550ms' }}>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  Specially developed bots to generate high-performance trading volume on various networks. Easy-to-use interface with automated transactions, real-time monitoring, and adjustable volume levels.
                </p>
                <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 p-4 rounded text-blue-800 dark:text-blue-200 text-base transition-all duration-1000" style={{ transitionDelay: '700ms', ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(40px)' }) }}>
                  <span className="mr-2">ℹ️</span>
                  <b>Note:</b> These bots are designed for DEX (decentralized exchange) platforms. If you need a CEX (centralized exchange) bot, we can develop a custom solution for you. Please contact us for details.
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-lg space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Payment Panel */}
          <PaymentPanel open={paymentOpen} onClose={() => setPaymentOpen(false)} widgetType={widgetType} selectedNetwork={selectedNetwork} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VolumeBotsPage; 

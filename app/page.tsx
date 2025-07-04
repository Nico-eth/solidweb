import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
} 
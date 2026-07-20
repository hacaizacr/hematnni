import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProductCarousel from './components/ProductCarousel';
import Education from './components/Education';
import Shipping from './components/Shipping';
import FAQ from './components/FAQ';
import Wholesale from './components/Wholesale';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AgeGate from './components/AgeGate';
import WebServicesCTA from './components/WebServicesCTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#070b14] text-white selection:bg-yellow-500/30">
      <AgeGate />
      <Navbar />
      
      <main>
        <Hero />
        <TrustBadges />
        <ProductCarousel />
        <Education />
        <Shipping />
        <FAQ />
        <Wholesale />
        <WebServicesCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CartDrawer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

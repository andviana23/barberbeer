import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AppSection from './components/AppSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Subscription from './components/Subscription';
import WhatsAppButton from './components/WhatsAppButton';
import { Agendamento } from './components/Agendamento'; // Import the new component
import * as meta from './services/meta';
import { useGoogleAds } from './hooks/useGoogleAds'; // Import the new hook

// Main page layout component
const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Subscription />
    <AppSection />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </>
);

function App() {
  useEffect(() => {
    meta.init();
  }, []);

  // --- Consent Management ---
  // This state should be managed by your cookie consent solution.
  // For demonstration, it's set to true. Set to false to test opt-out.
  const [hasConsent] = useState(true);

  // Initialize Google Ads tracking. The hook will handle all logic.
  useGoogleAds({ hasConsent });

  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </div>
  );
}

// Main App component wrapped with BrowserRouter
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
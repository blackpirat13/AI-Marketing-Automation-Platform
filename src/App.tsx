import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Affiliate from './components/Affiliate';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { useAuthStore } from './stores/authStore';

function App() {
  const { isModalOpen } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Pricing />
              <Affiliate />
            </>
          } />
        </Routes>
        <Footer />
        {isModalOpen && <AuthModal />}
      </div>
    </Router>
  );
}

export default App;
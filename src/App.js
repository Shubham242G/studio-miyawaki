import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services/Services';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import PersonalBranding from './pages/services/PersonalBranding';
import SEOOptimization from './pages/services/SeoOptimzation';
import PerformanceManagement from './pages/services/PerformanceManagement';

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/webDevelopment" element={<WebDevelopment />} />
          <Route path="/services/personalBranding" element={<PersonalBranding />} />
          <Route path="/services/seoOptimzation" element={<SEOOptimization />} />
          <Route path="/services/performanceManagement" element={<PerformanceManagement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App; // Just export App, not the Root with the Router

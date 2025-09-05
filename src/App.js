// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Hero />
          <About />
          <Services />
          <Contact />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;

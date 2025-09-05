// src/components/Layout.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children, title = "Studio Miyawaki - Digital Craftsmanship" }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Studio Miyawaki - Crafting digital experiences with Japanese precision and global vision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-25"
          >
            <Navigation />
            <main>{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center z-50"
  >
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-4xl font-light text-stone-800 tracking-wider font-playfair">
          Studio Miyawaki
        </h1>
        <div className="w-24 h-px bg-stone-600 mx-auto mt-4" />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-32 h-px bg-stone-400 mx-auto"
      />
    </div>
  </motion.div>
);

export default Layout;

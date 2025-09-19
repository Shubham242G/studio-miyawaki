// src/components/Layout.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';
 

const Layout = ({ children, title = "Studio Miyawaki - Digital Craftsmanship" }) => {
  // Use a state that checks sessionStorage first
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('hasLoaded'));

  useEffect(() => {
    // If loading is active, set a timer and then update sessionStorage
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Set the flag in sessionStorage after the loading animation is complete
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2500); // Increased duration slightly for a smoother experience
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

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
          // Pass the background image path to the LoadingScreen component
          <LoadingScreen 
            key="loading" 
            backgroundImage="/images/your-loading-background.jpg" // <-- SET YOUR IMAGE PATH HERE
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-25"
          >
            <BackgroundVideo
              src="/videos/miyawaki.mp4"
              poster="/images/aboutUs.jpg"
            />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- (BackgroundVideo component remains unchanged) ---
const BackgroundVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [dim, setDim] = useState(0.12);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    const onCanPlay = () => tryPlay();
    video.addEventListener('canplay', onCanPlay);
    tryPlay();

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPRM = () => {
      if (mql.matches) {
        try { video.pause(); } catch {}
        setDim(0.5);
      } else {
        tryPlay();
      }
    };
    applyPRM();
    mql.addEventListener?.('change', applyPRM);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const threshold = Math.max(window.innerHeight * 0.6, 480);
        const y = window.scrollY || 0;
        const t = Math.min(y / threshold, 1);
        const min = mql.matches ? 0.5 : 0.12;
        const max = mql.matches ? 0.65 : 0.06;
        setDim(min + (max - min) * t);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      mql.removeEventListener?.('change', applyPRM);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <video
        ref={videoRef}
        className="w-full h-full object-cover filter brightness-110 contrast-110 saturate-110"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black" style={{ opacity: dim }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
    </div>
  );
};


// --- UPDATED LOADING SCREEN COMPONENT ---
const LoadingScreen = ({ backgroundImage }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center"
 style={{ backgroundImage: `url('/images/loadingScreen.jpg')` }} // <-- SET YOUR IMAGE PATH HERE
  >
  
    {/* Dark overlay to ensure text readability */}
    <div className="absolute inset-0 bg-black/50" />
    
    <div className="relative z-10 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        {/* Text color changed to light to contrast with the dark overlay */}
        <h1 className="text-4xl font-light text-stone-100 tracking-wider font-playfair">
          Studio Miyawaki
        </h1>
        <div className="w-24 h-px bg-stone-300 mx-auto mt-4" />
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


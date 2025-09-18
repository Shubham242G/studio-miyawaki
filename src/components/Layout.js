// src/components/Layout.js
import React, { useState, useEffect, useRef } from 'react';
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
            {/* Global background video layer */}
            <BackgroundVideo
              src="/videos/miyawaki.mp4"       // put your public/ video here, e.g. public/video/banner.mp4
              poster="/images/aboutUs.jpg"   // optional poster for first frame
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

const BackgroundVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  // 1) Make baseline dim lighter so video is more visible at the top
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
        // 2) Keep PRM darker baseline but still a bit lighter than before
        setDim(0.5); // was 0.65
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
        // 3) Cap the maximum dim much lower to keep video visible as content scrolls
        const min = mql.matches ? 0.5 : 0.12;   // PRM baseline stays a bit darker
        const max = mql.matches ? 0.65 : 0.06;  // was 0.75 / 0.6
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
      {/* 4) Optional: gentle clarity boost on the video itself */}
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
      {/* 5) Scrim uses the lighter baseline and lower cap via `dim` */}
      <div className="absolute inset-0 bg-black" style={{ opacity: dim }} />
      {/* 6) Soften the vertical gradient so it doesn’t over-mask the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
    </div>
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

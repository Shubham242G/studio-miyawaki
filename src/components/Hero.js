// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-stone-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.005,
            y: mousePosition.y * -0.005
          }}
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-stone-200/20 to-amber-200/10 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-6xl mx-auto"
      >
        {/* Japanese Character Accent */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="text-6xl font-light text-stone-300 tracking-wider font-noto-jp">
            美
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-7xl sm:text-8xl lg:text-9xl font-extralight text-stone-900 mb-6 leading-[0.85] tracking-tight font-playfair"
        >
          Studio
          <span className="block text-stone-600 italic font-light">
            Miyawaki
          </span>
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-12"
        >
          <div className="w-16 h-px bg-stone-400" />
          <div className="mx-4 w-2 h-2 bg-stone-400 rounded-full" />
          <div className="w-16 h-px bg-stone-400" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-stone-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
        >
          Crafting digital experiences with
          <span className="italic font-medium"> precision</span>,
          <span className="italic font-medium"> elegance</span>, and
          <span className="italic font-medium"> purpose</span>.
        </motion.p>

        {/* Services Preview */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          {['Web Development', 'SEO Excellence', 'Personal Branding'].map((service, index) => (
            <motion.div
              key={service}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-stone-50/50 backdrop-blur-sm border border-stone-200/30 hover:border-stone-300/50 transition-all duration-500"
            >
              <div className="w-8 h-8 bg-stone-200 rounded-full mx-auto mb-4" />
              <h3 className="text-stone-800 font-light tracking-wider uppercase text-sm">
                {service}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScroll('#contact')}
            className="group bg-stone-900 text-stone-50 px-12 py-4 font-light tracking-widest uppercase text-sm hover:bg-stone-800 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Begin Journey</span>
            <div className="absolute inset-0 bg-stone-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.button>
          
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScroll('#services')}
            className="border border-stone-400 text-stone-700 px-12 py-4 font-light tracking-widest uppercase text-sm hover:bg-stone-50 hover:border-stone-600 transition-all duration-300"
          >
            View Services
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-stone-400 cursor-pointer group"
          onClick={() => handleScroll('#about')}
        >
          <div className="w-px h-16 bg-stone-300 group-hover:bg-stone-400 transition-colors mb-3" />
          <span className="text-xs font-light tracking-[0.2em] uppercase rotate-90 origin-center">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

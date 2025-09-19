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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-11 blur-none"
        src="/videos/miyawaki.mp4"
        type="video/mp4"
      />

      {/* Seamless transition gradient to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 "
        aria-hidden="true"
      />

      {/* Subtle Parallax Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005,
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full "
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.002,
            y: mousePosition.y * -0.002,
          }}
          className="absolute bottom-1/3 left-1/4 w-64 h-64 "
        />
      </div>

      {/* Main content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-[200px]">
          <span className="text-7xl font-light text-red-500 tracking-wider font-noto-jp">美</span>
        </motion.div>
        
        {/* Gold accent line */}
        <motion.div 
          variants={itemVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-16"
        />

        
      </motion.div>
    </section>
  );
};

export default Hero;

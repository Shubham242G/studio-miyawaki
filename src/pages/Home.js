// pages/Home.js
import React from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCode, FiPalette, FiTrendingUp, FiCheck, FiArrowRight, FiInfo } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
      import { BrowserRouter as Router } from 'react-router-dom';
      import { HelmetProvider } from 'react-helmet-async';
      import Layout from '../components/Layout';
      import Hero from '../components/Hero';
      import About from '../components/MiniAbout';
      import Services from '../components/MiniServices';
      import Contact from '../components/MiniContact';

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks",
      icon: '/icons/webDev.png',
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: ["React & Next.js", "Full-Stack Solutions", "Responsive Design"]
    },
    {
      title: "Personal Branding",
      description: "Complete brand identity and visual design solutions that tell your story",
      icon: "✨",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      features: ["Logo Design", "Visual Identity", "Brand Guidelines"]
    },
    {
      title: "Digital Marketing",
      description: "Strategic public relations and digital marketing campaigns that drive results",
      icon: "📈",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["SEO Optimization", "Social Media", "Content Strategy"]
    },
    {
      title: "SEO Services",
      description: "Special SEO optimization",
      icon: "📈",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["SEO Optimization", "Social Media", "Content Strategy"]
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle drag end for swipe functionality
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
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



  const stats = [
    { number: "150+", label: "Projects Delivered", suffix: "" },
    { number: "50+", label: "Happy Clients", suffix: "" },
    { number: "5+", label: "Years Experience", suffix: "" },
    { number: "99", label: "Client Satisfaction", suffix: "%" }
  ];

  return (
    <>
      <SEO />      

              <Layout>
                <Hero />
                <Services />
                <About />
                <Contact />
              </Layout>

    </>
  );
};

export default Home;

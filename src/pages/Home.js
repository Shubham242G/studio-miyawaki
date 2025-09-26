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
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M20.52 3.48A11.866 11.866 0 0012 0C5.373 0 0 5.373 0 12c0 2.123.556 4.206 1.63 6.012L0 24l6.132-1.61A11.919 11.919 0 0012 24c6.627 0 12-5.373 12-12 0-3.223-1.28-6.22-3.48-8.52zM12 22c-1.918 0-3.713-.577-5.22-1.561l-.374-.24-3.636.956.97-3.55-.25-.397A9.947 9.947 0 012 12c0-5.514 4.486-10 10-10 2.674 0 5.175 1.04 7.07 2.927a9.941 9.941 0 012.93 7.072c0 5.514-4.487 10-10 10zm5.512-7.333l-1.17-.568c-.157-.076-.338-.113-.52-.105a1.362 1.362 0 00-.96.44c-.273.329-.541.676-.775 1.038a1.058 1.058 0 01-.568.407 2.095 2.095 0 01-1.313-.035c-.399-.146-1.31-.482-2.49-1.465a9.71 9.71 0 01-2.34-2.858c-.34-.66-.37-1.224-.1-1.597a1.63 1.63 0 01.59-.538.993.993 0 01.506-.174c.157 0 .3.024.43.07a.857.857 0 01.25.144.313.313 0 01.11.17 4.06 4.06 0 01.044.408c.025.232-.003.392-.052.495-.058.13-.086.212-.128.253-.037.037-.083.066-.176.113-.068.034-.045.06.045.113.17.103.638.88.685.943.01.019.023.041.037.067a.139.139 0 01.06.07c.006.02 0 .039 0 .06 0 .094-.019.16-.038.227-.037.12-.294.406-.471.54-.177.135-.329.188-.435.218a.274.274 0 01-.17.003 1.77 1.77 0 01-.312-.088 3.1 3.1 0 01-.682-.494 3.33 3.33 0 01-1.134-1.45 2.43 2.43 0 01-.183-1.208c.035-.462.346-1.134.691-1.51a3.772 3.772 0 012.21-1.25 4.092 4.092 0 013.802.957c.645.68.753 1.42.768 1.483a1.59 1.59 0 01-.676 1.772z" />
          </svg>
        </a>
        <Hero />
        <Services />
        <About />
        <Contact />
      </Layout>

    </>
  );
};

export default Home;

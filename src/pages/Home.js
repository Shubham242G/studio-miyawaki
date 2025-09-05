// pages/Home.js
import React from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCode, FiPalette, FiTrendingUp, FiCheck, FiArrowRight, FiInfo } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';


// Add this to your HTML head or CSS file for Google Fonts

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
      <div className="min-h-screen font-['Inter'] antialiased">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-5xl mx-auto"
          >

            {/* Clean Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-light text-gray-900  leading-[0.9] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Create
              <span className="block font-normal text-gray-700">
                Digital Magic
              </span>
            </motion.h1>

            {/* Subtle Divider */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-px bg-gray-900 mx-auto mb-12"
            />

            {/* Refined Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Transform your vision into extraordinary digital experiences through our comprehensive
              <span className="font-medium text-gray-900"> development</span>,
              <span className="font-medium text-gray-900"> design</span>, and
              <span className="font-medium text-gray-900"> strategy</span> services.
            </motion.p>

            {/* Minimalist Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white px-12 py-4 text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Begin Project</span>
                <div className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-900 text-gray-900 px-12 py-4 text-sm font-medium tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Subtle Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto"
            >
              <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                <div className="text-2xl font-light text-gray-900 mb-1">150+</div>
                <div className="text-xs text-gray-500 tracking-wider uppercase">Projects</div>
              </div>
              <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                <div className="text-2xl font-light text-gray-900 mb-1">98%</div>
                <div className="text-xs text-gray-500 tracking-wider uppercase">Success</div>
              </div>
              <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                <div className="text-2xl font-light text-gray-900 mb-1">5+</div>
                <div className="text-xs text-gray-500 tracking-wider uppercase">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Minimal Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-gray-400 cursor-pointer group"
            >
              <div className="w-px h-12 bg-gray-300 group-hover:bg-gray-400 transition-colors mb-2"></div>
              <span className="text-xs font-light tracking-wider uppercase">Scroll</span>
            </motion.div>
          </motion.div>
        </section>


        {/* Enhanced Services Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-50 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-indigo-600 text-lg font-semibold tracking-wide uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Services That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Inspire</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                We craft comprehensive digital solutions that elevate your brand and accelerate your growth
              </p>
            </motion.div>

            <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
              {/* Slider Container */}
              <div
                className="relative"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <motion.div
                  className="flex"
                  animate={{ x: `-${currentIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                >
                  {services.map((service, index) => (
                    <div key={service.title} className="w-full flex-shrink-0 min-h-[700px] relative">
                      {/* Minimal background decoration */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gray-200 rounded-full blur-2xl opacity-20"></div>
                      </div>

                      {/* Content Container */}
                      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
                        <div className="text-center max-w-4xl mx-auto">

                          {/* Service Category */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-8"
                          >
                            <span className="inline-block px-6 py-2 bg-gray-900 text-white text-xs font-medium tracking-wider uppercase rounded-full">
                              Service {String(index + 1).padStart(2, '0')}
                            </span>
                          </motion.div>

                          {/* Title */}
                          <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {service.title}
                          </motion.h2>

                          {/* Divider Line */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-px bg-gray-900 mx-auto mb-12"
                          />

                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-16 font-light max-w-3xl mx-auto"
                          >
                            {service.description}
                          </motion.p>

                          {/* Features Section */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-16"
                          >
                            <h3 className="text-lg font-medium text-gray-900 mb-8 tracking-wider uppercase">
                              Core Capabilities
                            </h3>
                            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.8 + i * 0.1 }}
                                  className="text-center py-6 px-4 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-gray-300 transition-all duration-300"
                                >
                                  <div className="w-2 h-2 bg-gray-900 rounded-full mx-auto mb-4"></div>
                                  <span className="text-gray-700 font-medium text-sm">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Stats Section */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-16"
                          >
                            <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                              <div className="text-2xl font-light text-gray-900 mb-1">98%</div>
                              <div className="text-xs text-gray-500 tracking-wider uppercase">Success Rate</div>
                            </div>
                            <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                              <div className="text-2xl font-light text-gray-900 mb-1">2.5k+</div>
                              <div className="text-xs text-gray-500 tracking-wider uppercase">Projects</div>
                            </div>
                            <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
                              <div className="text-2xl font-light text-gray-900 mb-1">24/7</div>
                              <div className="text-xs text-gray-500 tracking-wider uppercase">Support</div>
                            </div>
                          </motion.div>

                          {/* CTA Buttons */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                          >
                            <motion.button
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              className="bg-gray-900 text-white px-12 py-4 text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden"
                            >
                              <span className="relative z-10">Begin Project</span>
                              <div className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </motion.button>

                            <motion.button
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              className="border border-gray-900 text-gray-900 px-12 py-4 text-sm font-medium tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
                            >
                              View Portfolio
                            </motion.button>
                          </motion.div>

                          {/* Quote or Additional Info */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="mt-16 pt-8 border-t border-gray-200"
                          >
                            <p className="text-gray-500 italic text-sm font-light">
                              "Excellence is not a skill, it's an attitude."
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Minimal Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 z-20 group"
              >
                <svg className="w-4 h-4 mx-auto group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 z-20 group"
              >
                <svg className="w-4 h-4 mx-auto group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Minimalist Pagination */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-3">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-px transition-all duration-300 ${index === currentIndex
                          ? 'w-12 bg-gray-900'
                          : 'w-6 bg-gray-300 hover:bg-gray-500'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Counter */}
              <div className="absolute top-8 right-8 text-gray-500 text-sm font-light tracking-wider z-20">
                {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </div>
            </div>

          </div>
        </section>



        {/* Enhanced Stats Section */}
        <section className="py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Impact in Numbers
              </h2>
              <p className="text-indigo-200 text-lg">
                Trusted by businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    className="text-5xl sm:text-6xl font-black mb-3 bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <div className="text-indigo-200 text-base font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-indigo-200/30 to-transparent rounded-full transform translate-x-48"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-transparent rounded-full transform -translate-x-40"
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-indigo-600 text-lg font-semibold tracking-wide uppercase mb-6 block">Ready to Start?</span>
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Create Something
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Ready to transform your digital presence? Let's discuss your project and bring your vision to life with our expert team.
              </p>

              <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Let's Talk
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:text-indigo-600 transition-colors flex items-center"
                >
                  Schedule a Call
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

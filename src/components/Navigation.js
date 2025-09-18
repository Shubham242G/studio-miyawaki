// src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // 1. Import NavLink and Link
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Update navItems to use route paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* 3. Wrap Logo in a <Link> to navigate home */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <h2 className="text-2xl font-light text-stone-800 tracking-wider font-playfair">
                Studio Miyawaki
              </h2>
            </motion.div>
          </Link>

          {/* 4. Use NavLink for navigation items */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                // Style the active link
                className={({ isActive }) =>
                  `text-stone-700 hover:text-stone-900 font-light tracking-wide text-sm uppercase transition-colors duration-300 relative group ${
                    isActive ? 'font-semibold text-stone-900' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    {item.name}
                    {/* Underline for active or hovered link */}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-px bg-stone-800 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ transformOrigin: 'center' }}
                    />
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          {/* 5. Update CTA Button to be a Link */}
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-stone-800 text-stone-50 px-6 py-2 text-sm font-light tracking-wider uppercase hover:bg-stone-900 transition-all duration-300"
            >
              Start Project
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

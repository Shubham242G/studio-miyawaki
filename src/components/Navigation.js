// src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
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

          {/* CTA Button on large screens */}
          <Link to="/contact" className="hidden lg:block">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-stone-800 text-stone-50 px-6 py-2 text-sm font-light tracking-wider uppercase hover:bg-stone-900 transition-all duration-300"
            >
              Start Project
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-stone-800 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c5a572]"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                // Close icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 backdrop-blur-md shadow-md border-t border-stone-200/50">
          <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)} // close menu on link click
                className={({ isActive }) =>
                  `text-stone-700 hover:text-stone-900 font-light tracking-wide text-base uppercase transition-colors duration-300 ${
                    isActive ? 'font-semibold text-stone-900' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-800 text-stone-50 px-6 py-2 text-sm font-light tracking-wider uppercase hover:bg-stone-900 transition-all duration-300"
              >
                Start Project
              </motion.button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;

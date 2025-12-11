// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-light text-stone-100 mb-6 tracking-wider font-playfair">
              Studio Miyawaki
            </h3>
            <p className="text-stone-400 font-light leading-relaxed mb-6">
              Crafting digital experiences with Japanese precision and global vision. 
              Every project is an opportunity to create something exceptional.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl font-noto-jp">美</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-100 font-medium tracking-wider uppercase text-sm mb-6">
              Services
            </h4>
            <div className="space-y-3">
              {['Web Development', 'SEO Excellence', 'Personal Branding', 'Digital Strategy'].map((service) => (
                <button
                  key={service}
                  onClick={() => handleNavClick('#services')}
                  className="block text-stone-400 font-light hover:text-stone-200 transition-colors duration-300 text-left"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-100 font-medium tracking-wider uppercase text-sm mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-stone-400 font-light">www.@studiomiyawaki.com</p>
              <p className="text-stone-400 font-light">Response within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 font-light text-sm">
            © 2025 Studio Miyawaki. All rights reserved.
          </p>
          <p className="text-stone-500 font-light text-sm italic">
            Crafted with attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

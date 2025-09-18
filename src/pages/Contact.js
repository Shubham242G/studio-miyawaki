// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

// Re-use the same page transition variants from About.js
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const Contact = () => {
  return (
    <motion.div
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="min-h-screen bg-[#F8F7F4] flex items-center"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full px-8">
        {/* Left Side: Info & Aesthetic */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="text-stone-500 font-light tracking-[0.2em] uppercase text-sm mb-4 block">
                Get In Touch
            </span>
            <h1 className="text-7xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
              Let's Create Together
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-[#c5a572]/50 via-[#c5a572] to-transparent mb-12" />
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-light mb-12">
              Have a project in mind or simply wish to discuss an idea? We welcome the opportunity to connect and explore the possibilities.
            </p>
            <div className="font-light space-y-4 text-stone-700">
                <p><strong>Email:</strong> hiroshi@studiomiyawaki.com</p>
                <p><strong>Location:</strong> Ginza, Tokyo, Japan</p>
            </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full bg-transparent border-b border-stone-300 py-3 text-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#c5a572] transition-colors font-light" />
                </div>
                 <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full bg-transparent border-b border-stone-300 py-3 text-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#c5a572] transition-colors font-light" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" rows="4" placeholder="Your Message" className="w-full bg-transparent border-b border-stone-300 py-3 text-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#c5a572] transition-colors font-light resize-none"></textarea>
                </div>
                <div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        type="submit" 
                        className="px-12 py-4 bg-[#1a1a1a] text-white font-light tracking-widest uppercase text-sm hover:bg-[#c5a572] hover:text-black transition-colors duration-300"
                    >
                        Send Inquiry
                    </motion.button>
                </div>
            </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

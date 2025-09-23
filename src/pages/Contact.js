import React from 'react';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ypeplcf",
      "template_2gdcgwl",
      e.currentTarget,
      "am1VZPuktoi7yeO5J"
    )
      .then(() => alert("Message Sent!"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <motion.div
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="relative min-h-screen bg-[#F8F7F4] flex items-center"
      style={{
        backgroundImage: `url('/images/contact.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
      <div className="relative mt-[70px] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full px-8">
        {/* Left Side: Info & Aesthetic */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>

          <h1 className="text-7xl font-semibold text-white mb-12 tracking-tight font-playfair leading-snug">
            Let's Create Together
          </h1>
          <div className="w-28 h-px bg-gradient-to-r from-[#c5a572]/80 via-[#c5a572] to-transparent mb-16" />
          <p className="text-2xl text-white max-w-lg leading-relaxed mb-3 font-medium">
            Have a project in mind or simply wish to discuss an idea? We welcome the opportunity to connect and explore the possibilities.
          </p>
          <div className="font-semibold space-y-5 text-white text-lg">
            <p><strong>Email:</strong> hiroshi@studiomiyawaki.com</p>
            <p><strong>Location:</strong> Ginza, Tokyo, Japan</p>
          </div>
        </motion.div>


        {/* Right Side: Contact Form */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="sr-only text-black">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white py-4 text-xl text-white placeholder-white focus:outline-none focus:border-[#c5a572] transition-colors font-semibold"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only text-black">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-white py-4 text-xl text-white placeholder-white focus:outline-none focus:border-[#c5a572] transition-colors font-semibold"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only text-black">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-white py-4 text-xl text-white placeholder-white focus:outline-none focus:border-[#c5a572] transition-colors font-semibold resize-none"
              ></textarea>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-14 py-5 bg-[#1a1a1a] text-white font-semibold tracking-widest uppercase text-base hover:bg-[#c5a572] hover:text-black transition-colors duration-300"
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

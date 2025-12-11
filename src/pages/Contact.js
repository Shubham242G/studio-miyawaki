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
    emailjs
      .sendForm(
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
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/images/contact.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Softer warm overlay for contrast (not pure white) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e5]/90 via-[#f5f0e5]/75 to-[#f5f0e5]/60 pointer-events-none" />

      <div className="relative mt-[70px] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full px-8">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-7xl font-light text-black mb-12 tracking-tight font-playfair leading-snug">
            Let's Create Together
          </h1>
          <div className="w-28 h-px bg-gradient-to-r from-[#c5a572]/80 via-[#c5a572] to-transparent mb-16" />
          <p className="text-black text-xl md:text-2xl max-w-lg leading-relaxed mb-3 font-light">
            Have a project in mind or simply want to explore an idea? Share a few details and we’ll take it from there.
          </p>
          <div className="space-y-5 text-lg text-black">
            <p className="font-light">
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:hiroshi@studiomiyawaki.com" className="underline underline-offset-2">
                connect.studiomiyawaki@gmail.com
              </a>
            </p>
            <p className="font-light">
              <span className="font-medium">Phone:</span> +91 8354907784
            </p>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8 text-black">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-black/70 py-4 text-lg md:text-xl text-black placeholder-black/70 focus:outline-none focus:border-[#c5a572] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-black/70 py-4 text-lg md:text-xl text-black placeholder-black/70 focus:outline-none focus:border-[#c5a572] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-black/70 py-4 text-lg md:text-xl text-black placeholder-black/70 focus:outline-none focus:border-[#c5a572] transition-colors font-light resize-none"
              />
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-14 py-5 bg-black text-white font-light tracking-[0.2em] uppercase text-sm md:text-base hover:bg-[#c5a572] hover:text-black transition-colors duration-300"
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

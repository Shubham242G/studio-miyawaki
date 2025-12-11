import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Re-use the same page transition variants
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

const services = [
  { 
    title: "Web Development", 
    description: "We build digital foundations that are both elegant and enduring. Our websites are crafted with performance, scalability, and artistic integrity at their core, creating a seamless experience for every user.",
    route: "/services/webDevelopment" 
  },
  { 
    title: "SEO Optimization", 
    description: "We elevate your presence, ensuring your voice is heard in the digital echo. Through meticulous strategy and technical precision, we connect your brand with the audience it's meant to reach.",
    route: "/services/seoOptimzation" 
  },
  { 
    title: "Personal Branding", 
    description: "We shape narratives that define legacies. We work with you to distill your unique essence into a compelling digital identity that resonates with authority and authenticity.",
    route: "/services/personalBranding" 
  },
  { 
    title: "Performance Management", 
    description: "Helping companies to increase their productivity",
    route: "/services/performanceManagement" 
  }
];

const projects = [
  { 
    title: "MedNLaw", 
    description: "Licensing & legal solutions for medical professionals.", 
    image: "/images/MednLaw.png", 
    link: "https://mednlaw.com/" 
  },
  { 
    title: "Unsaathi", 
    description: "A supportive platform for divorce and legal guidance.", 
    image: "/images/unsaathi.png", 
    link: "https://unsaathi.com/" 
  },
  { 
    title: "GSLO", 
    description: "Comprehensive legal services for the modern enterprise.", 
    image: "/images/GSLO.jpg", 
    link: "https://gslo.in/" 
  },
  { 
    title: "Gaurav Sharma", 
    description: "A personal hub for legal expertise and thought leadership.", 
    image: "/images/gaurav-sharma-white.png",
    link: "https://gauravsharma.org/" 
  },
];

const tileHoverVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    scale: 1,
  },
  hover: {
    rotateX: 5,
    rotateY: 5,
    boxShadow: "0 40px 80px rgba(197, 165, 114, 0.25)",
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

const brushSvgMask = `
<svg width="0" height="0" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="brush-mask" maskUnits="userSpaceOnUse">
      <path fill="white" d="M40,20 C160,0 380,150 350,350 Q160,400 40,280 Z" />
    </mask>
  </defs>
</svg>`;

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

function ProjectTile({ project, index }) {
  const controls = useAnimation();

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <motion.div
        className="w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-indigo-900/90 via-indigo-800/80 to-indigo-900/90 rounded-2xl relative overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10 mb-6 hover:mb-8 transition-all duration-300"
        variants={tileHoverVariants}
        initial="rest"
        whileHover="hover"
        animate={controls}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#c5a572]/0 via-[#c5a572]/10 to-[#c5a572]/0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.4 }}
        />

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-30"
          aria-label={`Open link to ${project.title}`}
        />
      </motion.div>

      {/* Text content below card */}
      <motion.div 
        className="text-center text-white max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + index * 0.1 }}
      >
        <motion.h3
          custom={0}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl lg:text-3xl font-light tracking-widest drop-shadow-xl font-playfair mb-2 group-hover:text-[#c5a572] transition-colors duration-500"
        >
          {project.title}
        </motion.h3>
        <motion.p
          custom={1}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="text-sm lg:text-base font-light drop-shadow-lg leading-relaxed line-clamp-2"
        >
          {project.description}
        </motion.p>
      </motion.div>
    </div>
  );
}

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ backgroundImage: `url('/images/services.jpg')` }}
      className="min-h-screen bg-cover bg-center bg-fixed py-40 px-8 sm:px-12 lg:px-16 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Hero */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-7xl font-playfair text-center font-light text-stone-50 mb-8">
            Our Craft
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-24" />
        </motion.div>

        {/* Services list */}
        <div className="mb-40 bg-stone-50/70 backdrop-blur-sm p-8 sm:px-12 sm:py-12 rounded-lg">
          {services.map((service, index) => (
            <div key={index} className="border-b border-stone-300 last:border-b-0">
              <motion.header
                initial={false}
                onClick={() => handleServiceClick(service.route)}
                className="flex justify-between items-center cursor-pointer py-8"
              >
                <h2 className="text-4xl font-playfair font-light text-stone-800">
                  {service.title}
                </h2>
                <motion.div animate={{ rotate: 45 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="#c5a572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.header>
            </div>
          ))}
        </div>

        {/* Projects section – subtle, animated, integrated */}
        <section className="relative max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-playfair font-light text-stone-50 mb-3">
              Selected Projects
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-stone-900/65 backdrop-blur-md border border-white/10 rounded-3xl px-6 sm:px-10 py-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 items-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border border-white/10 bg-indigo-900/40">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity duration-200" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-playfair font-light text-stone-50 mb-1 group-hover:text-[#c5a572] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Subtle arrow */}
                  <motion.div
                    className="hidden sm:flex items-center text-stone-300 group-hover:text-[#c5a572]"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default Services;

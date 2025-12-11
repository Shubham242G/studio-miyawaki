// src/pages/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Page transition variants (no changes)
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

const teamMembers = [
  { name: "Vatsala Singh", role: "Creative Director", image: "/images/vatsala.jpeg" },
  { name: "Manan Kapoor", role: "Content Uploader", image: "/images/manan.jpeg" },
  { name: "ekampreet paji", role: "Graphic Designer", image: "/images/paji.jpeg" },
  { name: "Shubham HANDSOME Godiyal", role: "Web Designer", image: "/images/shubham.jpeg" }
];

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      id="about"
      className="relative min-h-screen overflow-hidden py-40 bg-fixed"
      style={{
        backgroundImage: `url('images/aboutUs.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        imageRendering: 'auto'
      }}
    >
      {/* Semi-transparent overlay to ensure text readability over the background image */}
      <div className="absolute inset-0 bg-stone-50/70" />

      {/* Container for all page content, now sits on top of the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* --- NEW: OUR VISION SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h2 className="text-6xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
            Our Vision
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-12" />
          <p className="text-xl text-stone-600 leading-relaxed font-light">
            Studio Miyawaki embodies the philosophy of natural growth and harmony, inspired by the Miyawaki forest methodology. We nurture digital ecosystems that thrive through careful cultivation, diversity, and resilience. Our commitment to precision has positioned us as leaders in digital innovation, blending tradition with cutting-edge technology to shape the future of online experiences.
          </p>
        </motion.div>

        {/* --- REDESIGNED: PHILOSOPHY SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 mb-40"
        >
          {[
            { kanji: "匠", title: "Takumi - Craftsmanship", description: "Every line of code, pixel, and interaction is crafted with meticulous attention to detail." },
            { kanji: "简", title: "Kanso - Simplicity", description: "We eliminate the unnecessary to reveal the essential, creating clarity in complexity." },
            { kanji: "和", title: "Wa - Harmony", description: "Balancing aesthetics, functionality, and purpose with elegant precision." }
          ].map((principle) => (
            <motion.div
              key={principle.title}
              whileHover={{ y: -8 }}
              className="group text-center p-10 bg-white/60 backdrop-blur-lg border border-stone-200/50 hover:border-[#c5a572]/60 transition-colors duration-400 shadow-lg shadow-black/5"
            >
              <div className="text-7xl font-light text-stone-400/80 mb-6 font-noto-jp group-hover:text-[#c5a572]/80 transition-colors duration-400">
                {principle.kanji}
              </div>
              <h3 className="text-2xl font-medium text-stone-800 mb-4 tracking-wide font-playfair">
                {principle.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* --- REDESIGNED: TEAM SECTION --- */}
        <div className="mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-5xl font-light text-stone-900 mb-6 font-playfair">
              Meet Our Artisans
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Team Member Navigation (no description, no expand) */}
            <div className="flex flex-col space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  onMouseEnter={() => setActiveTeamMember(index)}
                  className="group cursor-pointer text-left py-4 border-b border-stone-300/70"
                >
                  <motion.h4
                    animate={{ color: activeTeamMember === index ? '#1a1a1a' : '#57534e' }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-light mb-2 font-playfair"
                  >
                    {member.name}
                  </motion.h4>
                  <p className="text-stone-500 font-light uppercase tracking-widest text-xs mb-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Member Display (photo only) */}
            <div className="lg:col-span-1 relative h-[500px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTeamMember}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={teamMembers[activeTeamMember].image} 
                    alt={teamMembers[activeTeamMember].name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

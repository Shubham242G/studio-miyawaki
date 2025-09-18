// src/pages/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Page transition variants
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
  { name: "Hiroshi Miyawaki", role: "Creative Director", bio: "With 15+ years in digital artistry, Hiroshi guides our vision with Japanese precision and a global perspective.", image: "/team/hiroshi.jpg" },
  { name: "Yuki Tanaka", role: "Web Designer", bio: "Yuki is the artisan of our digital spaces, weaving code and design into functional, beautiful experiences.", image: "/team/yuki.jpg" },
  { name: "Sakura Watanabe", role: "Graphic Designer", bio: "Sakura breathes life into brands, blending traditional aesthetics with modern visual narratives.", image: "/team/sakura.jpg" },
  { name: "Kenjiro Sato", role: "Project Lead", bio: "Kenjiro ensures every project flows in harmony, bridging client vision with our creative process seamlessly.", image: "/team/kenjiro.jpg" }
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
      className="relative py-40 min-h-screen overflow-hidden bg-gradient-to-b from-stone-50/10 via-rose-100/20 to-stone-50/10"
    >
        {/* Your existing Philosophy section code goes here - it's already great! */}
        {/* ... */}
        
        {/* Interactive Team Section - An Enhanced Version */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 mt-40">
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
              {/* Team Member Navigation */}
              <div className="flex flex-col space-y-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    onMouseEnter={() => setActiveTeamMember(index)}
                    className="group cursor-pointer text-left py-4 border-b border-stone-200/70"
                  >
                    <motion.h4
                      animate={{ color: activeTeamMember === index ? '#1a1a1a' : '#78716c' }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-light mb-2 font-playfair"
                    >
                      {member.name}
                    </motion.h4>
                    <p className="text-stone-500 font-light uppercase tracking-widest text-xs mb-3">
                      {member.role}
                    </p>
                    <AnimatePresence>
                      {activeTeamMember === index && (
                        <motion.p 
                          className="text-stone-600 font-light text-base leading-relaxed"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                          {member.bio}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Team Member Display */}
              <div className="lg:col-span-1 relative h-[700px] overflow-hidden">
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
    </motion.section>
  );
};

export default About;

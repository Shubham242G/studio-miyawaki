// src/components/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    { name: "Hiroshi Miyawaki", role: "Founder & Creative Director", bio: "15+ years crafting digital experiences with Japanese precision and global vision.", image: "/team/hiroshi.jpg" },
    { name: "Yuki Tanaka", role: "Lead Developer", bio: "Full-stack architect specializing in scalable, performance-driven solutions.", image: "/team/yuki.jpg" },
    { name: "Sakura Watanabe", role: "UX/UI Designer", bio: "Blending traditional Japanese aesthetics with modern user-centered design.", image: "/team/sakura.jpg" }
  ];

  return (
    // The main section is a container for our layers. The base background is now a neutral stone color.
    <section id="about" className="relative overflow-hidden">
      
      <div
        aria-hidden="true"
        className="absolute  left-0 right-0 h-[500px] w-full bg-cover bg-center bg-no-repeat pointer-events-none z-20"
        
      />

      <div className="relative z-30 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-40">
        
        {/* Section Header (Original code, no changes) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <span className="text-stone-500 font-light tracking-[0.3em] uppercase text-sm mb-4 block">
            About Studio
          </span>
          <h2 className="text-7xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
            Our Philosophy
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-12" />
          <p className="text-xl text-stone-600 max-w-5xl mx-auto leading-relaxed font-light">
            Rooted in the Japanese principles of <em className="font-medium text-stone-700">craftsmanship</em>, 
            <em className="font-medium text-stone-700"> attention to detail</em>, and <em className="font-medium text-stone-700">respect for simplicity</em>, 
            we create digital experiences that resonate deeply while achieving exceptional business results.
          </p>
        </motion.div>

        {/* Philosophy Cards (Original code, no changes) */}
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
              className="
                group text-center p-10 
                bg-white/40 backdrop-blur-lg 
                border border-white/30 
                hover:border-[#c5a572]/60 transition-colors duration-400
                shadow-lg shadow-black/5
              "
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

        {/* Interactive Team Section (Original code, no changes) */}
        <div className="mb-20">
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

          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Team Member Display */}
            <div className="lg:col-span-2 relative h-[600px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTeamMember}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={teamMembers[activeTeamMember].image} 
                    alt={teamMembers[activeTeamMember].name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Team Member Navigation */}
            <div className="flex flex-col space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  onMouseEnter={() => setActiveTeamMember(index)}
                  className="group cursor-pointer text-left py-2"
                >
                  <motion.h4
                    animate={{ color: activeTeamMember === index ? '#292524' : '#78716c' }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light mb-2 tracking-tight font-playfair"
                  >
                    {member.name}
                  </motion.h4>
                  <p className="text-stone-500 font-light uppercase tracking-wider text-sm mb-3">
                    {member.role}
                  </p>
                  <motion.p 
                    className="text-stone-600 font-light text-base leading-relaxed h-16"
                    animate={{ opacity: activeTeamMember === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>
                  <div className="h-px mt-4"
                       style={{
                         width: '100%',
                         background: 'linear-gradient(to right, #e7e5e4, #d6d3d1, #e7e5e4)'
                       }}
                  >
                    <motion.div
                      className="h-full"
                      style={{ background: 'linear-gradient(to right, transparent, #c5a572, transparent)' }}
                      animate={{ scaleX: activeTeamMember === index ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

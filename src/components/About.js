// src/components/About.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const teamMembers = [
    {
      name: "Hiroshi Miyawaki",
      role: "Founder & Creative Director",
      bio: "15+ years crafting digital experiences with Japanese precision and global vision.",
      image: "/team/hiroshi.jpg"
    },
    {
      name: "Yuki Tanaka",
      role: "Lead Developer",
      bio: "Full-stack architect specializing in scalable, performance-driven solutions.",
      image: "/team/yuki.jpg"
    },
    {
      name: "Sakura Watanabe",
      role: "UX/UI Designer", 
      bio: "Blending traditional Japanese aesthetics with modern user-centered design.",
      image: "/team/sakura.jpg"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-stone-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-stone-500 font-light tracking-[0.3em] uppercase text-sm mb-4 block">
            About Studio
          </span>
          <h2 className="text-6xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
            Our Philosophy
          </h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-12" />
          
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-light">
            Rooted in the Japanese principles of <em className="font-medium">craftsmanship</em>, 
            <em className="font-medium"> attention to detail</em>, and <em className="font-medium">respect for simplicity</em>, 
            we create digital experiences that resonate deeply with users while achieving exceptional business results.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 mb-32"
        >
          {[
            { 
              kanji: "匠", 
              title: "Takumi - Craftsmanship", 
              description: "Every line of code, every pixel, every interaction is crafted with meticulous attention to detail." 
            },
            { 
              kanji: "简", 
              title: "Kanso - Simplicity", 
              description: "We eliminate the unnecessary to reveal the essential, creating clarity in complexity." 
            },
            { 
              kanji: "和", 
              title: "Wa - Harmony", 
              description: "Balancing aesthetics with functionality, tradition with innovation, form with purpose." 
            }
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-8 bg-white/40 backdrop-blur-sm border border-stone-200/50 hover:border-stone-300/70 transition-all duration-500"
            >
              <div className="text-6xl font-light text-stone-300 mb-6 font-noto-jp">
                {principle.kanji}
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4 tracking-wide">
                {principle.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-light text-stone-900 mb-6 font-playfair">
              Meet Our Team
            </h3>
            <div className="w-16 h-px bg-stone-400 mx-auto" />
          </motion.div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 bg-stone-200">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                    {/* Replace with actual images */}
                    <span className="text-4xl text-stone-400">👤</span>
                  </div>
                  <div className={`absolute inset-0 bg-stone-900/10 transition-opacity duration-300 ${
                    activeTeamMember === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-medium text-stone-800 mb-2 tracking-wide">
                    {member.name}
                  </h4>
                  <p className="text-stone-500 font-light uppercase tracking-wider text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.8 };

const PersonalBranding = () => {
  return (
    <motion.div
      initial="initial" animate="in" exit="out" 
      variants={pageVariants} transition={pageTransition}
      style={{ backgroundImage: `url('/images/services.jpg')` }}
      className="min-h-screen bg-cover bg-center bg-fixed py-40 px-8 sm:px-12 lg:px-16 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-7xl font-playfair text-center font-light text-stone-50 mb-8">Personal Branding</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-24" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-40 bg-stone-50/70 backdrop-blur-sm p-12 sm:p-16 rounded-3xl">
          
          <div>
            <h2 className="text-5xl font-playfair font-light text-stone-800 mb-12">Executive Presence Framework</h2>
            <div className="space-y-6">
              {[
                "LinkedIn Authority Building + Ghostwriting (10x Views)",
                "Personal Website + Portfolio (Next.js + Notion CMS)",
                "YouTube/Podcast Guest Strategy + Video Repurposing",
                "Twitter/X Thought Leadership + Viral Thread Framework",
                "HARO + Podcast Guesting + Media Features",
                "Signature Framework + Lead Magnet System"
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start space-x-4 py-4"
                >
                  <div className="w-3 h-3 bg-[#c5a572] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xl font-light text-stone-700 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-light text-stone-800 mb-4">Authority Metrics</h3>
              <ul className="text-stone-600 space-y-2 text-lg">
                <li>• 10x LinkedIn Impressions</li>
                <li>• 5x Website Traffic</li>
                <li>• Premium Client Pipeline</li>
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-full bg-stone-900 text-stone-50 px-12 py-6 font-light tracking-widest uppercase text-lg rounded-xl hover:bg-stone-800 transition-all duration-300 shadow-2xl border border-stone-800/50"
            >
              Become Industry Authority
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalBranding;

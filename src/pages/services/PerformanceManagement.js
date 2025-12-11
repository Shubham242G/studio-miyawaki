import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.8 };

const PerformanceManagement = () => {
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
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl lg:text-8xl font-playfair font-light text-white mb-6 tracking-tight drop-shadow-2xl">
            Performance Management
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-stone-100/90 text-lg lg:text-xl font-light leading-relaxed">
            Turning performance data into deliberate decisions, aligned behaviors, and teams that know exactly what winning looks like.
          </p>
        </motion.section>

        {/* MAIN CONTENT: TWO LIGHT CARDS */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enterprise Performance Framework */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-light text-stone-900 mb-10">
              Enterprise Performance Framework
            </h2>
            <div className="space-y-5">
              {[
                "End-to-end OKR design and rollout, from company vision down to individual scorecards.",
                "Quarterly business reviews (QBRs) with clear input/output metrics and accountable owners.",
                "Role-based scorecards that connect daily work to strategic objectives and outcomes.",
                "KPI hierarchy that aligns executive dashboards, team metrics, and individual targets.",
                "Feedback and review cadence that combines 1:1s, check-ins, and structured evaluations.",
                "Change management support so new performance rituals actually stick inside the org."
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-2.5 h-2.5 bg-[#c5a572] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg font-light text-stone-800 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Analytics + People Systems */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >
            <div className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-playfair font-light text-stone-900 mb-4">
                Analytics & People Systems
              </h3>
              <div className="space-y-3 text-stone-700 text-lg font-light leading-relaxed">
                <p>
                  We design KPI and performance dashboards that leaders actually use—clear, comparable, and focused 
                  on leading indicators instead of vanity metrics.
                </p>
                <p>
                  360° feedback, engagement surveys, and manager check-ins are integrated into one rhythm, so people 
                  systems reinforce business performance instead of sitting in HR silos.
                </p>
              </div>
            </div>

            <div className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-playfair font-light text-stone-900 mb-4">
                Measurable Business Impact
              </h3>
              <ul className="text-stone-700 space-y-2 text-lg">
                <li>• Improved productivity per team through clear priorities and less context switching.</li>
                <li>• Reduced regrettable attrition by aligning expectations, feedback, and growth paths.</li>
                <li>• Higher revenue per employee by focusing effort on the few metrics that move the P&amp;L.</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* CTA STRIP */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-stone-50/80 backdrop-blur-sm rounded-3xl px-8 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-playfair font-light text-stone-900 mb-3">
              Ready to upgrade how your teams perform?
            </h3>
            <p className="text-stone-700 text-lg font-light leading-relaxed">
              We help you move from ad hoc performance conversations to a structured operating system—
              where every quarter, team, and individual knows what success looks like and how it’s measured.
            </p>
          </div>

          <Link to="/contact" className="w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-stone-900 text-stone-50 px-10 py-4 font-light tracking-[0.25em] uppercase text-sm rounded-xl hover:bg-stone-800 transition-all duration-300 shadow-xl border border-stone-800/60"
            >
              Transform Your Teams
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PerformanceManagement;

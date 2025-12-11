import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.8 };

const WebDevelopment = () => {
  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate('/contact'); // <-- updated route here
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
            Web Development
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-stone-100/90 text-lg lg:text-xl font-light leading-relaxed">
            Bespoke, production-ready web experiences built with a balance of engineering precision and aesthetic intent.
          </p>
        </motion.section>

        {/* SECTION 1 + 2: TWO LIGHT CARDS */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Production-Ready Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-light text-stone-900 mb-10">
              Production-Ready Solutions
            </h2>
            <div className="space-y-5">
              {[
                "Next.js 15 App Router with Server Components for fast, scalable frontends.",
                "TypeScript, Zod, and tRPC for end-to-end type safety and predictable behavior.",
                "MongoDB Atlas, Prisma ORM, and Redis for robust data and caching layers.",
                "Vercel Edge Functions and PlanetScale MySQL for low-latency, global delivery.",
                "React Query and React Hook Form for resilient, UX-focused data flows.",
                "PWA-ready architectures with offline-first capabilities and service workers.",
                "Automated CI/CD pipelines with GitHub Actions and preview deployments."
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

          {/* Engineered with Intent + Performance Benchmarks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >
            <div className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-playfair font-light text-stone-900 mb-4">
                Engineered with Intent
              </h3>
              <p className="text-stone-700 text-lg font-light leading-relaxed mb-4">
                Every build is treated as a long-term asset, not a quick deployment. From URL structure to caching strategy, 
                the stack is tuned for maintainability, observability, and long-term performance.
              </p>
              <p className="text-stone-700 text-lg font-light leading-relaxed">
                Design decisions are paired with technical reasoning, ensuring every animation, component, and interaction 
                has a clear purpose and measurable impact.
              </p>
            </div>

            <div className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-playfair font-light text-stone-900 mb-4">
                Performance Benchmarks
              </h3>
              <ul className="text-stone-700 space-y-2 text-lg">
                <li>• Core Web Vitals targets: LCP &lt; 1.5s, FID &lt; 100ms, CLS &lt; 0.1</li>
                <li>• Bundle analysis, tree shaking, and route-level code splitting.</li>
                <li>• Image optimization with WebP/AVIF and responsive loading strategies.</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: CTA STRIP */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-stone-50/80 backdrop-blur-sm rounded-3xl px-8 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-playfair font-light text-stone-900 mb-3">
              Ready for a production launch?
            </h3>
            <p className="text-stone-700 text-lg font-light leading-relaxed">
              From first commit to final deployment, the pipeline is designed to be observable, reversible, and easy to iterate on.
              You get a system that can evolve with your product, not just a single release.
            </p>
          </div>
          <motion.button
            type="button"
            onClick={handleLaunchClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full lg:w-auto bg-stone-900 text-stone-50 px-10 py-4 font-light tracking-[0.25em] uppercase text-sm rounded-xl hover:bg-stone-800 transition-all duration-300 shadow-xl border border-stone-800/60"
          >
            Launch Production Site
          </motion.button>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default WebDevelopment;

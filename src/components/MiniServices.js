// src/components/Services.js
import React, { useState } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: "Web Development",
      subtitle: "Digital Architecture",
      description: "Bespoke web applications built with cutting-edge technologies, optimized for performance, scalability, and user experience.",
      features: [
        "Custom React Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development & Integration"
      ],
      process: [
        "Discovery & Planning",
        "Design & Architecture",
        "Development & Testing",
        "Deployment & Optimization"
      ]
    },
    {
      title: "SEO Excellence",
      subtitle: "Digital Visibility",
      description: "Strategic search engine optimization that combines technical expertise with content mastery to achieve sustainable organic growth.",
      features: [
        "Technical SEO Audits",
        "Content Strategy & Creation",
        "Local SEO Optimization",
        "Performance Analytics"
      ],
      process: [
        "Comprehensive Audit",
        "Strategy Development",
        "Implementation & Monitoring",
        "Continuous Optimization"
      ]
    },
    {
      title: "Social media Management",
      subtitle: "Digital Identity",
      description: "Comprehensive personal brand development that authentically represents your expertise and values across all digital touchpoints.",
      features: [
        "Brand Strategy & Positioning",
        "Visual Identity Design",
        "Content & Messaging",
        "Digital Presence Management"
      ],
      process: [
        "Brand Discovery",
        "Strategic Positioning",
        "Visual Development",
        "Launch & Evolution"
      ]
    },
    {
      title: "Performance Marketing",
      subtitle: "Digital Visibility",
      description: "Strategic search engine optimization that combines technical expertise with content mastery to achieve sustainable organic growth.",
      features: [
        "Technical Performance Audits",
        "Content Strategy & Creation",
        "Local Performance Optimization",
        "Performance Analytics"
      ],
      process: [
        "Comprehensive Audit",
        "Strategy Development",
        "Implementation & Monitoring",
        "Continuous Optimization"
      ]
    },
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Motion variants with reduced-motion awareness
  const easeOutExpo = [0.22, 1, 0.36, 1];
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOutExpo } }
  };
  const fadeRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOutExpo } }
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="services"
        aria-labelledby="services-title"
        className="
          relative py-32
          bg-stone-50
          [background:radial-gradient(120%_80%_at_70%_0%,rgba(0,0,0,0.04),transparent_60%)]
          overflow-hidden
        "
      >
        {/* Kintsugi-inspired fine gold line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a572]/70 to-transparent"
        />

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="text-center mb-24"
          >
            <span className="text-stone-500 font-light tracking-[0.3em] uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2
              id="services-title"
              className="text-6xl font-light text-stone-900 mb-8 tracking-tight font-playfair"
            >
              Services
            </h2>
            <div className="w-24 h-px bg-stone-300/80 mx-auto mb-12" />
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
              We offer three core services, each delivered with the precision and attention to detail
              that defines Japanese craftsmanship.
            </p>
          </motion.div>

          {/* Services Navigation */}
          <nav aria-label="Service categories" className="flex justify-center mb-16">
            <div className="flex space-x-8">
              {services.map((service, index) => {
                const active = activeService === index;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    aria-current={active ? 'true' : undefined}
                    className={[
                      "group relative pb-4 transition-colors duration-300 outline-none",
                      active
                        ? "text-stone-900"
                        : "text-stone-500 hover:text-stone-700 focus-visible:text-stone-900"
                    ].join(" ")}
                  >
                    <span className="font-light tracking-wider uppercase text-sm">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute -bottom-px left-0 h-[2px] w-full origin-left",
                        "bg-gradient-to-r from-transparent via-[#c5a572] to-transparent",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        "transition-transform duration-500 ease-out"
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Active Service Content */}
          <motion.div
            key={activeService}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Service Details */}
              <motion.div variants={fadeLeft}>
                <h3 className="text-5xl font-light text-stone-900 mb-4 font-playfair">
                  {services[activeService].title}
                </h3>
                <p className="text-stone-500 font-light tracking-wider uppercase text-sm mb-8">
                  {services[activeService].subtitle}
                </p>

                <p className="text-xl text-stone-600 leading-relaxed font-light mb-12">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="mb-12">
                  <h4 className="text-stone-800 font-medium tracking-wider uppercase text-sm mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: index * 0.08, duration: 0.4, ease: easeOutExpo }
                          }
                        }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-stone-400/70" />
                        <span className="text-stone-700 font-light">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={handleContactClick}
                  className="
                    inline-flex items-center justify-center
                    bg-stone-900 text-stone-50 px-8 py-3
                    font-light tracking-widest uppercase text-sm
                    hover:bg-stone-800 transition-colors duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/20
                    shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]
                  "
                >
                  Discuss Project
                </motion.button>
              </motion.div>

              {/* Process Timeline */}
              <motion.div
                variants={fadeRight}
                className="
                  relative rounded
                  bg-white/60 backdrop-blur-md
                  border border-stone-200/70 p-8
                  shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]
                "
              >
                <h4 className="text-stone-800 font-medium tracking-wider uppercase text-sm mb-8 text-center">
                  Our Process
                </h4>

                {/* Shoji-like subtle divider */}
                <div aria-hidden="true" className="absolute inset-x-8 top-16 h-px bg-stone-200/70" />

                <div className="space-y-6">
                  {services[activeService].process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.12, duration: 0.45, ease: easeOutExpo }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-8 h-8 bg-stone-100 border border-stone-300 flex items-center justify-center">
                        <span className="text-stone-600 text-sm font-light">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-stone-700 font-light">
                          {step}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Subtle bottom gold accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c5a572]/70 to-transparent"
        />
      </section>
    </MotionConfig>
  );
};

export default Services;

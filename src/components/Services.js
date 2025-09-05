// src/components/Services.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

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
      title: "Personal Branding",
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
    }
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-amber-50/30 to-stone-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-stone-500 font-light tracking-[0.3em] uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-6xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
            Services
          </h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-12" />
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            We offer three core services, each delivered with the precision and attention to detail 
            that defines Japanese craftsmanship.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-8">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`pb-4 border-b-2 transition-colors duration-300 ${
                  activeService === index 
                    ? 'border-stone-800 text-stone-900' 
                    : 'border-transparent text-stone-500 hover:text-stone-700'
                }`}
              >
                <span className="font-light tracking-wider uppercase text-sm">
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Service Details */}
            <div>
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
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-stone-400 rounded-full" />
                      <span className="text-stone-600 font-light">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="bg-stone-900 text-stone-50 px-8 py-3 font-light tracking-widest uppercase text-sm hover:bg-stone-800 transition-colors duration-300"
              >
                Discuss Project
              </motion.button>
            </div>

            {/* Process Timeline */}
            <div className="bg-white/50 backdrop-blur-sm border border-stone-200/50 p-8">
              <h4 className="text-stone-800 font-medium tracking-wider uppercase text-sm mb-8 text-center">
                Our Process
              </h4>
              
              <div className="space-y-6">
                {services[activeService].process.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

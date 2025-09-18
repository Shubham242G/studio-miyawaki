import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  { title: "Web Development", description: "We build digital foundations that are both elegant and enduring. Our websites are crafted with performance, scalability, and artistic integrity at their core, creating a seamless experience for every user.", icon: "..." },
  { title: "SEO Optimization", description: "We elevate your presence, ensuring your voice is heard in the digital echo. Through meticulous strategy and technical precision, we connect your brand with the audience it's meant to reach.", icon: "..." },
  { title: "Personal Branding", description: "We shape narratives that define legacies. We work with you to distill your unique essence into a compelling digital identity that resonates with authority and authenticity.", icon: "..." }
];

const projects = [
    { title: "MedNLaw", description: "Licensing & legal solutions for medical professionals.", image: "/projects/mednlaw.jpg" },
    { title: "Unsaathi", description: "A supportive platform for divorce and legal guidance.", image: "/projects/unsaathi.jpg" },
    { title: "GSLO", description: "Comprehensive legal services for the modern enterprise.", image: "/projects/gslo.jpg" },
];

const Services = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <motion.div
        initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
        style={{ backgroundImage: `url('/images/services.jpg')` }}
        className="min-h-screen bg-cover bg-center bg-fixed py-40 px-8 sm:px-12 lg:px-16 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-7xl font-playfair text-center font-light text-stone-50 mb-8">Our Craft</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-24" />
        </motion.div>

        {/* --- CHANGE HERE --- */}
        {/* Changed bg-stone-50/90 to bg-stone-50/70 for more transparency */}
        <div className="mb-40 bg-stone-50/70 backdrop-blur-sm p-8 sm:p-12 rounded-lg">
            {services.map((service, index) => (
                <div key={index} className="border-b border-stone-300 last:border-b-0">
                    <motion.header
                        initial={false}
                        onClick={() => setExpanded(expanded === index ? false : index)}
                        className="flex justify-between items-center cursor-pointer py-8"
                    >
                        <h2 className="text-4xl font-playfair font-light text-stone-800">{service.title}</h2>
                        <motion.div animate={{ rotate: expanded === index ? 45 : 0 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="#c5a572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </motion.div>
                    </motion.header>
                    <AnimatePresence initial={false}>
                        {expanded === index && (
                            <motion.section
                                key="content"
                                initial="collapsed" animate="open" exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                                transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <p className="pb-12 max-w-3xl text-lg font-light text-stone-600 leading-relaxed">{service.description}</p>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

        {/* --- AND CHANGE HERE --- */}
        {/* Also changed bg-stone-50/90 to bg-stone-50/70 */}
        <div className="text-center bg-stone-50/70 backdrop-blur-sm p-8 sm:p-12 rounded-lg">
            <h2 className="text-5xl font-playfair font-light text-stone-900 mb-6">Case Studies</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-20" />
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.title}
                        className="group relative overflow-hidden h-96"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:bg-black/70">
                            <h3 className="text-3xl font-playfair text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">{project.title}</h3>
                            <p className="text-stone-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  { 
    title: "Web Development", 
    route: "/services/webDevelopment"
  },
  { 
    title: "SEO Optimization", 
    route: "/services/seoOptimzation"
  },
  { 
    title: "Personal Branding", 
    route: "/services/personalBranding"
  },
  { 
    title: "Performance Management", 
    route: "/services/performanceManagement"
  }
];

const projects = [
  { title: "MedNLaw", description: "Licensing & legal solutions for medical professionals.", image: "/images/MednLaw.png", link: "https://mednlaw.com/" },
  { title: "Unsaathi", description: "A supportive platform for divorce and legal guidance.", image: "/images/Unsaathi.svg", link: "https://unsaathi.com/" },
  { title: "GSLO", description: "Comprehensive legal services for the modern enterprise.", image: "/images/GSLO.jpg", link: "https://gslo.in/" },
];

const tileHoverVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
    scale: 1,
  },
  hover: {
    rotateX: 10,
    rotateY: 10,
    boxShadow: "0 40px 50px rgba(0,0,0,0.35)",
    scale: 1.1,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const brushSvgMask = `
<svg width="0" height="0" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="brush-mask" maskUnits="userSpaceOnUse">
      <path fill="white" d="M40,20 C160,0 380,150 350,350 Q160,400 40,280 Z" />
    </mask>
  </defs>
</svg>`;

const textRevealVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function ProjectTile({ project }) {
  const controls = useAnimation();

  return (
    <motion.div
      className="w-72 h-96 bg-gradient-to-tr from-indigo-900/80 via-indigo-800/70 to-indigo-900/90 rounded-3xl cursor-pointer relative overflow-hidden shadow-lg"
      variants={tileHoverVariants}
      initial="rest"
      whileHover="hover"
      animate={controls}
      style={{
        perspective: 1200,
        WebkitMaskImage: "url(#brush-mask)",
        maskImage: "url(#brush-mask)",
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat'
      }}
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("rest")}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-90"
      />

      <motion.div className="absolute bottom-10 left-6 right-6 text-white z-20">
        <motion.h3
          custom={0}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold tracking-wider drop-shadow-lg font-playfair select-none"
        >
          {project.title}
        </motion.h3>
        <motion.p
          custom={1}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="mt-2 text-sm font-light drop-shadow-sm leading-relaxed pointer-events-none"
        >
          {project.description}
        </motion.p>
      </motion.div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-30"
        aria-label={`Open link to ${project.title}`}
      />
    </motion.div>
  );
}

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <motion.div
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
      style={{
        backgroundImage: `url('/images/services.jpg')`,
      }}
      className="min-h-screen bg-cover bg-center bg-fixed py-40 px-8 sm:px-12 lg:px-16 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-7xl font-playfair text-center font-light text-stone-50 mb-8">Our Craft</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-24" />
        </motion.div>

        {/* Services list: only navigation, no description/expansion */}
        <div className="mb-40 bg-stone-50/70 backdrop-blur-sm p-8 sm:p-12 rounded-lg">
          {services.map((service, index) => (
            <div key={index} className="border-b border-stone-300 last:border-b-0">
              <motion.header
                initial={false}
                onClick={() => handleServiceClick(service.route)}
                className="flex justify-between items-center cursor-pointer py-8"
              >
                <h2 className="text-4xl font-playfair font-light text-stone-800">
                  {service.title}
                </h2>
                <motion.div animate={{ rotate: 45 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="#c5a572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.header>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto mb-40">
          {/* Inject SVG mask in DOM for mask usage */}
          <div dangerouslySetInnerHTML={{ __html: brushSvgMask }} />

          <div className="flex flex-wrap justify-center gap-14 -mt-10">
            {projects.map((project) => (
              <ProjectTile key={project.title} project={project} />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Services;

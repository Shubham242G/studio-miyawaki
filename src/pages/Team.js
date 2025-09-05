// pages/Team.js
import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Lead Developer & CTO",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud architecture. Passionate about creating scalable web solutions.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      image: "👨‍💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Award-winning designer with expertise in brand identity and user experience. Creates compelling visual stories that resonate with audiences.",
      skills: ["UI/UX Design", "Branding", "Adobe Creative Suite", "Figma"],
      image: "👩‍🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "PR & Marketing Lead",
      bio: "Strategic communication expert with 7+ years in digital marketing and public relations. Builds strong brand narratives and campaigns.",
      skills: ["Digital Marketing", "PR Strategy", "Content Creation", "Analytics"],
      image: "👨‍💼",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEO 
        title="Meet Our Team - Expert Web Developers & Designers"
        description="Get to know our talented team of web developers, designers, and marketing experts who deliver premium digital solutions."
        keywords="web development team, design team, development experts, creative professionals"
        url="https://yourwebsite.com/team"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The creative minds and technical experts behind every successful project
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Profile Image */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className={`text-8xl bg-gradient-to-r ${member.gradient} bg-clip-text`}>
                        {member.image}
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                        {member.role}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">
                          Expertise:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in collaboration, innovation, and delivering exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We stay ahead of trends and technologies to deliver cutting-edge solutions",
                  icon: "💡"
                },
                {
                  title: "Client Focused",
                  description: "Your success is our success. We're committed to exceeding expectations",
                  icon: "🎯"
                },
                {
                  title: "Quality Driven",
                  description: "We maintain the highest standards in everything we create and deliver",
                  icon: "⭐"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-purple-100 mb-10">
                Let's discuss your project and see how our team can bring your vision to life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;

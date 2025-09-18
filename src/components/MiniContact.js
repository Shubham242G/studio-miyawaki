// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS (you'll need to get these from emailjs.com)
  const SERVICE_ID = 'your_service_id';
  const TEMPLATE_ID = 'your_template_id';
  const USER_ID = 'your_user_id';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          budget: formData.budget,
        },
        USER_ID
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '', budget: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-stone-50 to-amber-50/50">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-stone-500 font-light tracking-[0.3em] uppercase text-sm mb-4 block">
            Start Your Journey
          </span>
          <h2 className="text-6xl font-light text-stone-900 mb-8 tracking-tight font-playfair">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-12" />
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how we can bring your vision to life with precision, elegance, and purpose.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-light text-stone-900 mb-6 font-playfair">
                Get in Touch
              </h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                Ready to create something exceptional? We'd love to hear about your project 
                and explore how our expertise can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-100 border border-stone-200 flex items-center justify-center">
                  <span className="text-stone-600">📧</span>
                </div>
                <div>
                  <p className="text-stone-500 font-light uppercase tracking-wider text-xs">Email</p>
                  <p className="text-stone-800 font-light">hello@studiomiyawaki.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-100 border border-stone-200 flex items-center justify-center">
                  <span className="text-stone-600">🌐</span>
                </div>
                <div>
                  <p className="text-stone-500 font-light uppercase tracking-wider text-xs">Location</p>
                  <p className="text-stone-800 font-light">Tokyo, Japan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-100 border border-stone-200 flex items-center justify-center">
                  <span className="text-stone-600">⏰</span>
                </div>
                <div>
                  <p className="text-stone-500 font-light uppercase tracking-wider text-xs">Response Time</p>
                  <p className="text-stone-800 font-light">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Excellence</option>
                    <option value="branding">Personal Branding</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-light uppercase tracking-wider text-xs mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full p-4 bg-white/50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 font-light resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-stone-900 text-stone-50 py-4 font-light tracking-widest uppercase text-sm hover:bg-stone-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 text-green-700 font-light"
                >
                  Thank you! We'll be in touch within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 text-red-700 font-light"
                >
                  Something went wrong. Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

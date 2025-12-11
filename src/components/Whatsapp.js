import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesOptions = [
  "Web Development",
  "SEO Optimization",
  "Personal Branding",
  "Performance Management",
];

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: servicesOptions[0],
    email: "",
  });

  const phoneNumber = "918354907784"; // include country code (example: 91 for India)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleOpenWhatsApp = () => {
    const text = `Hi, my name is ${form.name || "N/A"}.
I am in: ${form.business || "N/A"}.
I am interested in: ${form.service || "N/A"}.
My email: ${form.email || "N/A"}.`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        {/* Simple WhatsApp icon using SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 2.09.61 4.02 1.77 5.72L2 22l4.47-1.86a9.83 9.83 0 0 0 5.57 1.7h.01c5.46 0 9.88-4.42 9.88-9.88C21.93 6.42 17.5 2 12.04 2zm0 17.8h-.01c-1.76 0-3.48-.47-4.99-1.36l-.36-.21-2.65 1.1.57-2.8-.18-.29a8.1 8.1 0 0 1-1.24-4.35c0-4.49 3.65-8.14 8.15-8.14 2.17 0 4.21.85 5.74 2.39a8.06 8.06 0 0 1 2.39 5.75c0 4.5-3.66 8.15-8.17 8.15zm4.46-6.15c-.25-.13-1.47-.73-1.7-.82-.23-.09-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.26-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.26.92 2.47 1.05 2.64.13.17 1.8 2.75 4.37 3.85.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.49-.3z" />
        </svg>
      </motion.button>

      {/* Modal / Form */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-[320px] sm:w-[360px] bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl border border-stone-200 p-5"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-playfair font-light text-stone-900">
                Start a WhatsApp chat
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-stone-500 hover:text-stone-800 text-sm"
              >
                Close
              </button>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#c5a572]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1">
                    Business / Profession
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={handleChange("business")}
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#c5a572]"
                    placeholder="E.g. Law firm, SaaS founder, consultant"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    type="button"
                    className="px-4 py-2 text-xs font-medium tracking-widest uppercase bg-stone-900 text-white rounded-md hover:bg-stone-800"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1">
                    What kind of service are you looking for?
                  </label>
                  <select
                    value={form.service}
                    onChange={handleChange("service")}
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#c5a572]"
                  >
                    {servicesOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    type="button"
                    className="px-4 py-2 text-xs font-medium tracking-widest uppercase border border-stone-300 text-stone-700 rounded-md hover:bg-stone-100"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    className="px-4 py-2 text-xs font-medium tracking-widest uppercase bg-stone-900 text-white rounded-md hover:bg-stone-800"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#c5a572]"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="text-xs text-stone-500 leading-relaxed">
                  Submit your E-mail and we will be in touch with you.
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    type="button"
                    className="px-4 py-2 text-xs font-medium tracking-widest uppercase border border-stone-300 text-stone-700 rounded-md hover:bg-stone-100"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleOpenWhatsApp}
                    type="button"
                    className="px-4 py-2 text-xs font-medium tracking-widest uppercase bg-[#25D366] text-white rounded-md hover:bg-[#1ebe5d]"
                  >
                    Go to WhatsApp
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWhatsApp;

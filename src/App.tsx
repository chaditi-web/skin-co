/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

type Page = 'home' | 'about' | 'results' | 'booking';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-clinic-sage selection:text-white">
      {/* Persistent Header */}
      <header className="sticky top-0 z-50 bg-clinic-bg/90 backdrop-blur-sm border-b border-clinic-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <h1 className="text-2xl font-serif text-clinic-charcoal tracking-tight">Skin & Co.</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">Dermatology & Aesthetics</p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-sans font-light tracking-wide">
            <button onClick={() => navigateTo('home')} className={`nav-link ${currentPage === 'home' ? 'opacity-100 font-normal' : ''}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`nav-link ${currentPage === 'about' ? 'opacity-100 font-normal' : ''}`}>About</button>
            <button onClick={() => navigateTo('results')} className={`nav-link ${currentPage === 'results' ? 'opacity-100 font-normal' : ''}`}>Before & After</button>
            <button 
              onClick={() => navigateTo('booking')}
              className="bg-clinic-olive text-white px-8 py-2.5 rounded-full hover:bg-clinic-olive/90 transition-colors duration-300"
            >
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-clinic-bg border-b border-clinic-charcoal/10 flex flex-col p-8 space-y-6 md:hidden"
            >
              <button onClick={() => navigateTo('home')} className="text-left text-lg font-serif">Home</button>
              <button onClick={() => navigateTo('about')} className="text-left text-lg font-serif">About</button>
              <button onClick={() => navigateTo('results')} className="text-left text-lg font-serif">Before & After</button>
              <button 
                onClick={() => navigateTo('booking')}
                className="bg-clinic-olive text-white px-8 py-3 rounded-full text-center"
              >
                Book Appointment
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage onBooking={() => navigateTo('booking')} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {currentPage === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsPage />
            </motion.div>
          )}

          {currentPage === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookingPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-clinic-bg border-t border-clinic-charcoal/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-serif text-clinic-charcoal">Skin & Co.</h2>
            <p className="text-xs opacity-50 mt-1 uppercase tracking-widest">Est. 2014 • Noida, India</p>
          </div>
          <div className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <p className="text-xs opacity-40">© 2026 Skin & Co. Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ onBooking }: { onBooking: () => void }) {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Replace with clinic hero image */}
        <div className="absolute inset-0 bg-clinic-sage/20">
          <div className="w-full h-full bg-[#E5E2D9] flex items-center justify-center text-clinic-charcoal/30 flex-col space-y-4">
             <div className="w-24 h-px bg-clinic-charcoal/20"></div>
             <p className="font-serif italic text-2xl">Clinic Interior / Hero Image</p>
             <div className="w-24 h-px bg-clinic-charcoal/20"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl bg-clinic-bg/40 backdrop-blur-md p-10 md:p-16">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] text-clinic-charcoal"
            >
              Unlock the Secret to <br /><span className="italic">Healthy, Confident</span> Skin.
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg font-sans font-light leading-relaxed opacity-80"
            >
              Experience medical luxury with a personalized touch. Our clinic blends advanced dermatological science with an editorial aesthetic to redefine your skin health journey.
            </motion.p>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onBooking}
              className="mt-10 flex items-center space-x-3 group"
            >
              <span className="uppercase text-xs tracking-[0.3em] font-medium border-b border-clinic-charcoal pb-1 group-hover:pr-4 transition-all duration-300">Start Your Journey</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-serif mb-2">500+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Happy Patients</span>
          </div>
          <div className="w-px h-12 bg-clinic-charcoal/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-serif mb-2">10+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Years Experience</span>
          </div>
          <div className="w-px h-12 bg-clinic-charcoal/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-serif mb-2">2</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Specialisations</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h3 className="text-3xl font-serif leading-tight">Founded on the belief that dermatological care should be as refined as it is curative.</h3>
        <p className="font-sans font-light text-lg leading-relaxed opacity-70">
          Skin & Co. is not a hospital; it is a sanctuary for your skin. We move beyond standard procedures to offer a holistic experience where clinical expertise meets an unspoken luxury. From persistent acne to advanced anti-aging, we treat the medical root of your concern within a space designed for calm.
        </p>
      </section>

      {/* Find Us */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Find Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-clinic-sage mt-1" size={20} />
                <div>
                  <p className="font-medium">Skin & Co. Clinic</p>
                  <p className="opacity-70 leading-relaxed">B-14, Sector 18, Noida,<br />Uttar Pradesh 201301</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-clinic-sage" size={20} />
                <p className="opacity-70">+91 (555) 012-3456</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-clinic-sage" size={20} />
                <p className="opacity-70">hello@skinandco.in</p>
              </div>
            </div>
            <div className="bg-clinic-sage/5 p-8 border-l-2 border-clinic-sage">
              <p className="font-serif italic text-xl">"The location was chosen for its accessibility and quietude, ensuring your visit starts with peace of mind."</p>
            </div>
          </div>
          <div className="h-[400px] bg-clinic-sage/10 relative overflow-hidden grayscale contrast-75 hover:grayscale-0 transition-all duration-700">
            {/* Replace with actual Google Maps embed link */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.208151322!2d77.31745484887373!3d28.571249767355152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44977465363%3A0x60f9ee925a666991!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714856000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Replace with doctor photo */}
        <div className="relative aspect-[3/4] bg-clinic-sage/10 overflow-hidden">
          <div className="w-full h-full bg-[#E0DDD1] flex items-center justify-center text-clinic-charcoal/30 flex-col">
            <div className="absolute top-8 left-8 border-l border-t border-clinic-charcoal/20 w-12 h-12"></div>
            <div className="absolute bottom-8 right-8 border-r border-b border-clinic-charcoal/20 w-12 h-12"></div>
            <p className="font-serif italic text-xl uppercase tracking-widest px-12 text-center">Dr. Aranya Sharma<br />Lead Dermatologist</p>
          </div>
        </div>

        <div className="space-y-10">
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-serif italic text-clinic-charcoal/90 leading-tight"
          >
             "Every skin has a history. My job is to listen to it."
          </motion.h3>
          
          <div className="space-y-6 font-sans font-light text-lg leading-relaxed opacity-80">
            <p>
              Dr. Aranya Sharma brings over a decade of clinical excellence in medical and aesthetic dermatology. After completing her MD from the All India Institute of Medical Sciences, she envisioned a clinic that married rigorous clinical results with an elevated patient experience.
            </p>
            <p>
              Her philosophy is "Subtle Correction, Significant Health." She believes that the best dermatology is invisible—leaving you looking like a rested, vibrant version of yourself, rather than a changed person.
            </p>
          </div>

          <div className="pt-8 border-t border-clinic-charcoal/10 flex flex-wrap gap-8">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-clinic-sage">Education</p>
              <p className="text-sm font-sans">MBBS, MD Dermatology (AIIMS)</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-clinic-sage">Experience</p>
              <p className="text-sm font-sans">10+ Years Professional Practice</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-clinic-sage">Memberships</p>
              <p className="text-sm font-sans">Indian Association of Dermatologists</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-clinic-sage/5 py-24 px-12 text-center space-y-12 rounded-lg">
        <h2 className="text-3xl font-serif uppercase tracking-widest font-light">Our Medical Ethics</h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="text-3xl font-serif italic opacity-30">01.</div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-medium">Transparency</h4>
            <p className="text-sm opacity-60 leading-relaxed">Honest consultation without pushing unnecessary aesthetic procedures.</p>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-serif italic opacity-30">02.</div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-medium">Science First</h4>
            <p className="text-sm opacity-60 leading-relaxed">Every treatment is backed by peer-reviewed evidence and clinical safety.</p>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-serif italic opacity-30">03.</div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-medium">Artistry</h4>
            <p className="text-sm opacity-60 leading-relaxed">An editorial eye for aesthetics that respects facial harmony and natural aging.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-5xl font-serif">Real People. Real Results.</h2>
        <p className="font-sans font-light text-lg opacity-70 leading-relaxed">
          At Skin & Co., success is measured by the confidence our patients regain. All procedures are performed under strict clinical protocols by licensed dermatologists.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          { title: "Acne Scarring Treatment", label: "Fractional CO2 Laser • 4 Sessions" },
          { title: "Pigmentation Correction", label: "Chemical Peel • 3 Sessions" },
          { title: "Facial Harmonization", label: "Dermal Fillers • 1 Session" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-default"
          >
            <div className="flex space-x-2 aspect-[4/3]">
              {/* Replace with actual images */}
              <div className="flex-1 bg-clinic-sage/10 relative overflow-hidden group-hover:bg-clinic-sage/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-40">Before</span>
                </div>
              </div>
              <div className="flex-1 bg-clinic-olive/5 relative overflow-hidden group-hover:bg-clinic-olive/10 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-40">After</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-xl font-serif">{item.title}</h4>
              <p className="text-xs uppercase tracking-widest opacity-50">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-20 border-t border-clinic-charcoal/5 text-center px-6">
        <p className="text-xs font-sans font-light tracking-wide opacity-50 max-w-xl mx-auto italic">
          Disclaimer: Results may vary based on individual skin type, metabolism, and lifestyle. All medical procedures are performed by a licensed dermatologist using medical-grade equipment.
        </p>
      </div>
    </div>
  );
}

function BookingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-serif">Your Skin Deserves Attention.</h2>
          <p className="font-sans font-light text-lg opacity-70">Fill in your details below to request a clinical consultation.</p>
        </div>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors peer"
              />
              <label 
                htmlFor="name"
                className="absolute left-0 top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-clinic-sage peer-[:not(:placeholder-shown)]:-top-4"
              >
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors peer"
              />
              <label 
                htmlFor="email"
                className="absolute left-0 top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-clinic-sage peer-[:not(:placeholder-shown)]:-top-4"
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <input 
                type="tel" 
                id="phone"
                placeholder=" "
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors peer"
              />
              <label 
                htmlFor="phone"
                className="absolute left-0 top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-clinic-sage peer-[:not(:placeholder-shown)]:-top-4"
              >
                Phone Number
              </label>
            </div>

            <div className="relative group">
              <select 
                id="concern"
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors appearance-none"
              >
                <option value="">Primary Concern</option>
                <option value="acne">Acne & Scars</option>
                <option value="eczema">Eczema / Rashes</option>
                <option value="pigment">Pigmentation</option>
                <option value="botox">Botox & Fillers</option>
                <option value="hair">Hair Loss</option>
                <option value="other">Other</option>
              </select>
              <label 
                htmlFor="concern"
                className="absolute left-0 -top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50"
              >
                Concern
              </label>
            </div>

            <div className="relative group md:col-span-2">
              <input 
                type="date" 
                id="date"
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors"
                placeholder="Preferred Date"
              />
              <label 
                htmlFor="date"
                className="absolute left-0 -top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50"
              >
                Preferred Date
              </label>
            </div>

            <div className="relative group md:col-span-2">
              <textarea 
                id="message"
                placeholder=" "
                rows={1}
                className="w-full bg-transparent border-b border-clinic-charcoal/20 py-4 outline-none focus:border-clinic-sage transition-colors peer resize-none"
              />
              <label 
                htmlFor="message"
                className="absolute left-0 top-4 text-xs uppercase tracking-[0.2em] font-medium opacity-50 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-clinic-sage peer-[:not(:placeholder-shown)]:-top-4"
              >
                Message (Optional)
              </label>
            </div>
          </div>

          <div className="pt-8 space-y-6">
            <button 
              type="submit"
              className="w-full bg-clinic-olive text-white py-5 rounded-full text-sm uppercase tracking-[0.3em] font-medium hover:bg-clinic-olive/90 h-[60px] flex items-center justify-center transition-all duration-300"
            >
              Request Appointment
            </button>
            <p className="text-center text-xs opacity-50 tracking-wide">
              Your data is secured. We'll confirm your slot via phone within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

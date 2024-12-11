import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, Play } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

export const RelocationSection = () => {
  return (
    <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
      <BackgroundAnimation />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
          alt="Family moving"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Are You Looking To Relocate To The Area?
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Let our experienced team guide you through your relocation journey. 
              We'll help you find the perfect community that matches your lifestyle 
              and needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-brand-primary hover:bg-brand-light 
                  px-6 py-3 rounded-full transition-all duration-300 shadow-lg 
                  hover:shadow-brand-primary/20"
              >
                <Phone size={20} />
                Talk to an Agent
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-white hover:bg-white/10 
                  px-6 py-3 rounded-full transition-all duration-300"
              >
                <Users size={20} />
                Learn About Our Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
              alt="Lakewood Ranch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-brand-primary hover:bg-brand-light rounded-full
                  flex items-center justify-center mb-4 shadow-lg"
              >
                <Play size={24} className="text-white ml-1" />
              </motion.button>
              <h3 className="text-2xl font-semibold">Lakewood Ranch, FL</h3>
              <p className="text-white/80">Take a virtual tour of our community</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
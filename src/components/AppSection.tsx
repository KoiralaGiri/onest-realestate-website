import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, Heart, Bell } from 'lucide-react';
import StoreButton from './ui/StoreButton';

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your perfect home with our advanced search filters"
  },
  {
    icon: Heart,
    title: "Saved Favorites",
    description: "Keep track of properties you love"
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified about new listings that match your criteria"
  }
];

const AppSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Download the <span className="text-[#b68319]">oNest App</span>
            </h2>
            <p className="text-gray-400">
              Take your home search on the go with our powerful mobile app.
              Available for iOS and Android devices.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-[#b68319] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <StoreButton store="apple" />
              <StoreButton store="google" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Smartphone className="w-full h-auto text-[#b68319]" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#b68319]/20 to-transparent rounded-full filter blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Home, 
  Building, 
  GraduationCap, 
  Briefcase, 
  Car,
  ArrowRight
} from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

const features = [
  {
    icon: Home,
    title: "Housing Options",
    description: "From urban condos to suburban homes"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Top-rated schools and universities"
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Thriving job market and opportunities"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Easy access to metro and highways"
  }
];

const RelocationSection1 = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#b68319] rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-6 h-6" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Journey to <br />
                <span className="text-[#b68319]">Northern Virginia</span>
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Let us guide you through every step of your relocation journey. 
                Our expert team understands the unique challenges of moving to NOVA 
                and will help you find the perfect community that matches your lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[#b68319]">
                      <feature.icon className="w-5 h-5" />
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-[#b68319] text-white rounded-lg font-semibold 
                    flex items-center justify-center gap-2 hover:bg-[#8e6614] transition-colors"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-[#b68319] text-[#b68319] rounded-lg 
                    font-semibold hover:bg-[#b68319]/5 transition-colors"
                >
                  Download Relocation Guide
                </motion.button>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#b68319]/10 rounded-full blur-2xl" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#b68319]/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Content - Interactive Map */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607"
                  alt="Northern Virginia Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                      <div className="text-2xl font-bold">2.5M+</div>
                      <div className="text-sm opacity-80">Residents</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-80">Communities</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm opacity-80">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Building Icons */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 text-[#b68319]"
            >
              <Building className="w-16 h-16" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelocationSection1;
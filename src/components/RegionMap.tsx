import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, DollarSign, Users } from 'lucide-react';

interface RegionStat {
  icon: typeof MapPin;
  label: string;
  value: string;
}

const RegionStats: RegionStat[] = [
  {
    icon: Home,
    label: 'Properties',
    value: '2,500+'
  },
  {
    icon: DollarSign,
    label: 'Avg. Price',
    value: '$750k'
  },
  {
    icon: Users,
    label: 'Population',
    value: '2.5M+'
  },
  {
    icon: MapPin,
    label: 'Communities',
    value: '50+'
  }
];

const RegionMap = () => {
  return (
    <section className="py-20 bg-[#131720] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Explore Northern Virginia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the unique charm and opportunities each region has to offer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607"
                alt="Northern Virginia Aerial View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131720] via-[#131720]/50 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {RegionStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#1e2430]/80 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <div className="w-10 h-10 mx-auto mb-2 bg-[#b68319]/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#b68319]" />
                    </div>
                    <div className="font-bold text-xl text-[#b68319]">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#b68319]">
              Prime Location, Endless Opportunities
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Northern Virginia offers an unparalleled blend of urban sophistication and suburban 
              tranquility. From the bustling streets of Arlington to the historic charm of Alexandria, 
              each region presents unique opportunities for homeowners and investors alike.
            </p>
            <div className="space-y-4">
              {[
                'Access to Washington D.C. and major employment centers',
                'Top-rated school districts and educational institutions',
                'Rich cultural heritage and modern amenities',
                'Diverse housing options from urban condos to luxury estates'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#b68319] rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3 bg-[#b68319] text-white rounded-lg font-semibold hover:bg-[#8e6614] transition-colors"
            >
              Explore Communities
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegionMap;
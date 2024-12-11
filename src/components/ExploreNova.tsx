import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MapPin, Home, DollarSign, Users } from 'lucide-react';

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

const ExploreNova = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 30
  });

  const headerY = useTransform(smoothProgress, [0, 0.1], [50, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const firstSectionX = useTransform(smoothProgress, [0.1, 0.3], [-50, 0]);
  const firstSectionOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const imageY = useTransform(smoothProgress, [0.1, 0.3], [50, 0]);
  const statsY = useTransform(smoothProgress, [0.3, 0.5], [30, 0]);
  const statsOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const secondSectionY = useTransform(smoothProgress, [0.5, 0.7], [50, 0]);
  const secondSectionOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          style={{ 
            y: headerY,
            opacity: headerOpacity
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Exploring NOVA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the charm and opportunities of Northern Virginia's diverse neighborhoods
          </p>
        </motion.div>

        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            style={{ 
              x: firstSectionX,
              opacity: firstSectionOpacity
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#b68319]">
              Your Journey To The Perfect Home Starts Here
            </h3>
            <p className="text-gray-600">
              Northern Virginia offers a perfect blend of urban convenience and suburban comfort.
              From historic Alexandria to vibrant Arlington, discover communities that match your lifestyle.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center space-x-2 text-[#b68319] font-semibold"
            >
              <span>Explore Communities</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            style={{ 
              y: imageY,
              opacity: firstSectionOpacity
            }}
            className="rounded-2xl overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
              alt="NOVA Community"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            style={{ 
              y: statsY,
              opacity: statsOpacity
            }}
            className="space-y-6 order-2 md:order-1"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <motion.img
                style={{
                  scale: useTransform(smoothProgress, [0.3, 0.5], [0.95, 1])
                }}
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607"
                alt="Northern Virginia Aerial View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RegionStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  style={{
                    opacity: statsOpacity,
                    y: useTransform(smoothProgress, 
                      [0.3 + (index * 0.05), 0.5 + (index * 0.05)], 
                      [20, 0]
                    )
                  }}
                  className="bg-white shadow-lg rounded-lg p-4 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-[#b68319]/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#b68319]" />
                  </div>
                  <div className="font-bold text-xl text-[#b68319]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ 
              y: secondSectionY,
              opacity: secondSectionOpacity
            }}
            className="space-y-6 order-1 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[#b68319]">
              Prime Location, Endless Opportunities
            </h3>
            <p className="text-gray-600 leading-relaxed">
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
                  style={{
                    opacity: secondSectionOpacity,
                    x: useTransform(smoothProgress, 
                      [0.5 + (index * 0.05), 0.7 + (index * 0.05)], 
                      [-20, 0]
                    )
                  }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#b68319] rounded-full" />
                  <span className="text-gray-600">{feature}</span>
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

export default ExploreNova;
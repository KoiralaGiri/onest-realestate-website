import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { BackgroundAnimation } from './BackgroundAnimation';

const communities = [
  {
    name: 'Anna Maria Island',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
    description: 'Paradise found on this barrier island with pristine beaches and laid-back island living.'
  },
  {
    name: 'Bird Key',
    image: 'https://images.unsplash.com/photo-1582880421648-a7154a8c99c1?auto=format&fit=crop&q=80',
    description: 'Exclusive waterfront living with stunning bay views and private boat docks.'
  },
  {
    name: 'Bradenton',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80',
    description: 'Historic charm meets modern coastal living with diverse neighborhoods.'
  },
  {
    name: 'Casey Key',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80',
    description: 'Secluded barrier island featuring luxury estates and private beaches.'
  },
  {
    name: 'Downtown Sarasota',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80',
    description: 'Urban sophistication with world-class dining, arts, and waterfront views.'
  },
  {
    name: 'Siesta Key',
    image: 'https://images.unsplash.com/photo-1548515943-25f3dafed0a6?auto=format&fit=crop&q=80',
    description: 'Award-winning beaches and vibrant village life in this tropical paradise.'
  },
  {
    name: 'Longboat Key',
    image: 'https://images.unsplash.com/photo-1571041804726-53e8bf082096?auto=format&fit=crop&q=80',
    description: 'Sophisticated island living with pristine beaches and world-class resorts.'
  }
];

export const FeaturedCommunities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isInView] = useInView(0.2);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-brand-primary py-20 overflow-hidden relative"
    >
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Featured Communities
          </h2>
          <p className="text-lg text-amber-100/90">
            Explore our handpicked selection of premier neighborhoods,
            each offering its own unique charm and lifestyle.
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-4 justify-center items-center mx-auto max-w-[1200px] 
            overflow-x-auto pb-8 px-4 scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              layout
              initial={false}
              animate={{ 
                width: activeIndex === index ? 400 : 120,
                transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
              }}
              className="relative h-[500px] overflow-hidden rounded-2xl cursor-pointer
                bg-gradient-to-b from-black/20 to-black/60 hover:shadow-2xl"
              onClick={() => handleClick(index)}
              style={{ originX: 0 }}
            >
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={false}
                animate={{ scale: activeIndex === index ? 1 : 1.2 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              >
                <img
                  src={community.image}
                  alt={community.name}
                  className="h-full w-full object-cover object-center"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"
                  animate={{ opacity: activeIndex === index ? 0.9 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="relative h-full flex flex-col justify-end p-6">
                <motion.div
                  animate={{
                    x: activeIndex === index ? 0 : 40,
                    rotate: activeIndex === index ? 0 : -90,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="flex items-center gap-3"
                >
                  <MapPin size={20} className="text-amber-400" />
                  <h3 className="text-xl font-semibold text-white whitespace-nowrap">
                    {community.name}
                  </h3>
                </motion.div>

                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {community.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-amber-400 hover:text-amber-300
                        mt-6 text-sm group"
                    >
                      Explore Area 
                      <ChevronRight size={16} className="transition-transform duration-300
                        group-hover:translate-x-1" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
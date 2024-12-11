import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CommunityItem } from './CommunityItem';
import { useInView } from '../../hooks/useInView';
import { communities } from './communities.data';

export const FeaturedCommunities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isInView] = useInView(0.2);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-gradient-to-br from-amber-800 to-amber-700 py-24 overflow-hidden"
    >
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
            <CommunityItem
              key={community.name}
              community={community}
              index={index}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
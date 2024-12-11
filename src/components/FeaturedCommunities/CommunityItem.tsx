import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommunityStats } from './CommunityStats';
import { CommunityItemProps } from './types';

export const CommunityItem: React.FC<CommunityItemProps> = ({
  community,
  isActive,
  onClick,
  index,
}) => {
  const { name, image, description, stats } = community;

  return (
    <motion.div
      layout
      initial={false}
      animate={{ 
        width: isActive ? 400 : 120,
        transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
      }}
      className="relative h-[500px] overflow-hidden rounded-2xl cursor-pointer
        bg-gradient-to-b from-black/20 to-black/60 hover:shadow-2xl"
      onClick={onClick}
      style={{ originX: 0 }}
    >
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={false}
        animate={{ scale: isActive ? 1 : 1.2 }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"
          animate={{ opacity: isActive ? 0.9 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="relative h-full flex flex-col justify-end p-6">
        <motion.div
          animate={{
            x: isActive ? 0 : 40,
            rotate: isActive ? 0 : -90,
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3"
        >
          <MapPin size={20} className="text-amber-400" />
          <h3 className="text-xl font-semibold text-white whitespace-nowrap">{name}</h3>
        </motion.div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-white/90 text-sm leading-relaxed mb-4">{description}</p>
              <CommunityStats {...stats} />
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
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
import React, { memo } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommunityAccordionItemProps {
  name: string;
  image: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const CommunityAccordionItem = memo(({ 
  name, 
  image, 
  description, 
  isActive, 
  onClick,
  index 
}: CommunityAccordionItemProps) => {
  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isActive ? 500 : 100,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
      className="relative h-[450px] overflow-hidden rounded-2xl cursor-pointer
        bg-gradient-to-b from-black/20 to-black/80 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
          animate={{
            scale: isActive ? 1 : 1.2,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"
          animate={{ 
            opacity: isActive ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6">
        <motion.div
          animate={{
            x: isActive ? 0 : 40,
            rotate: isActive ? 0 : -90,
            originX: 0,
            originY: 0
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <MapPin size={24} className="text-amber-400" />
          <h3 className="text-2xl font-semibold text-white whitespace-nowrap">{name}</h3>
        </motion.div>

        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20,
            height: isActive ? 'auto' : 0
          }}
          transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
          className="space-y-4 mt-4 overflow-hidden"
        >
          <p className="text-white/90 text-base leading-relaxed">{description}</p>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300
              transition-colors duration-300 text-base group"
          >
            Explore Area 
            <ChevronRight size={18} className="transition-transform duration-300
              group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
});

CommunityAccordionItem.displayName = 'CommunityAccordionItem';
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { CardSpotlight } from '../ui/card-spotlight';
import { cn } from '../../utils/cn';

interface BentoItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  size?: 'small' | 'default' | 'large' | 'tall' | 'wide';
  bgImage?: string;
  gradient?: string;
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  default: 'col-span-2 row-span-1',
  large: 'col-span-2 row-span-2',
  tall: 'col-span-1 row-span-2',
  wide: 'col-span-3 row-span-1'
};

export const BentoItem: React.FC<BentoItemProps> = ({
  icon: Icon,
  title,
  description,
  className,
  size = 'default',
  bgImage,
  gradient = 'from-neutral-900 to-neutral-800'
}) => {
  return (
    <CardSpotlight className={cn(sizeClasses[size], className)}>
      <motion.div
        className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {bgImage && (
          <>
            <motion.img
              src={bgImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}

        <div className={cn(
          "relative h-full p-6 flex flex-col",
          "bg-gradient-to-br",
          gradient,
          "group transition-all duration-500"
        )}>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          <div className="mt-auto">
            <motion.h3
              className="font-display text-xl font-bold text-white mb-2"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-white/70 text-sm"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.9 }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b68319] to-amber-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </CardSpotlight>
  );
};
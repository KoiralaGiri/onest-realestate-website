import React from 'react';
import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';

interface StoreButtonProps {
  store: 'apple' | 'google';
  className?: string;
}

const StoreButton: React.FC<StoreButtonProps> = ({ store, className = '' }) => {
  const isApple = store === 'apple';
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative px-6 py-3
        overflow-hidden rounded-full
        bg-white/10 backdrop-blur-sm
        border border-white/20
        transition-all duration-500
        ${className}
      `}
    >
      <div className="
        absolute inset-0
        bg-gradient-to-r from-white/20 to-white/10
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-500
        origin-left
      " />
      
      <div className="relative z-10 flex items-center gap-2">
        {isApple ? (
          <Apple className="w-6 h-6 text-white" />
        ) : (
          <PlayCircle className="w-6 h-6 text-white" />
        )}
        <div className="text-left">
          <div className="text-xs text-white/80">Download on the</div>
          <div className="text-sm font-semibold text-white">
            {isApple ? 'App Store' : 'Google Play'}
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default StoreButton;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface AnimatedButtonProps {
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Button content */}
      <div className="relative flex items-center space-x-2">
        <span className="font-semibold text-lg text-white">
          Explore oNest Ecosystem
        </span>
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;
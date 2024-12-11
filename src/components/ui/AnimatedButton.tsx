import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  icon = <ArrowRight className="w-5 h-5" />,
  variant = 'primary'
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative px-8 py-4
        overflow-hidden rounded-full
        ${variant === 'primary' ? 'bg-[#1e2430]' : 'bg-[#b68319]'}
        transition-all duration-500
        ${className}
      `}
    >
      <div className={`
        absolute inset-0
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-amber-500 to-amber-600'
          : 'bg-gradient-to-r from-[#8e6614] to-[#b68319]'
        }
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-500
        origin-left
      `} />
      
      <div className="
        relative z-10 flex items-center justify-center gap-2
        text-amber-500 group-hover:text-white
        transition-colors duration-300
      ">
        <span className="font-semibold">{children}</span>
        <motion.div
          className="transform group-hover:translate-x-1 transition-transform duration-300"
        >
          {icon}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;
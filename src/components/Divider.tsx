import React from 'react';
import { motion } from 'framer-motion';

interface DividerProps {
  type?: 'wave' | 'curve' | 'angle';
  from: string;
  to: string;
  direction?: 'up' | 'down';
}

export const Divider: React.FC<DividerProps> = ({ 
  type = 'wave', 
  from, 
  to,
  direction = 'down'
}) => {
  const paths = {
    wave: "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,61.3L1440,58.7",
    curve: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64",
    angle: "M0,0L1440,128L1440,0L0,0Z"
  };

  return (
    <div className={`absolute ${direction === 'down' ? '-bottom-1' : '-top-1'} left-0 right-0 h-24 overflow-hidden pointer-events-none`}>
      <motion.svg 
        viewBox="0 0 1440 128" 
        className={`absolute w-[200%] h-full ${direction === 'up' ? 'rotate-180' : ''}`}
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <path
          d={paths[type]}
          fill={from}
          fillOpacity="1"
          className="animate-wave"
        />
      </motion.svg>
      <svg 
        viewBox="0 0 1440 128" 
        className={`absolute w-full h-full ${direction === 'up' ? 'rotate-180' : ''}`}
      >
        <path
          d={paths[type]}
          fill={to}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};
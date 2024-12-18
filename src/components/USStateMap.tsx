// USMap.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface USMapProps {
  activeState: string | null;
  onStateHover: (state: string, event: React.MouseEvent) => void;
}

const USMap: React.FC<USMapProps> = ({ activeState, onStateHover }) => {
  return (
    <svg
      viewBox="0 0 959 593"
      className="w-full h-full"
    >
      <motion.g id="states">
        <motion.path
          d="M872.06,192.45l-2.06,4.64v11.87l-1.81,2.58v2.58l1.29,2.32l2.58,2.58l.77,7.48l-1.55,3.35v2.32l2.32.52l1.81-1.29l2.32,1.29l2.58,2.32l3.35,3.35l2.32,3.61l1.29,3.09l-1.29,2.32l-2.32.26l-1.29,1.29l.26,2.32l1.29,2.32l3.09,1.81l1.81,2.32l-2.32,2.32l-1.55,2.58l-2.32,2.32l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81l-2.32,1.29l-2.32,1.81"
          fill={activeState === 'FL' ? '#C4933F' : '#D1D5DB'}
          stroke="#1F2937"
          strokeWidth="1"
          onMouseEnter={(e) => onStateHover('FL', e)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        {/* Add more state paths here */}
        
        {/* Example state label */}
        <text
          x="885"
          y="220"
          className="text-xs font-medium"
          fill="#1F2937"
          textAnchor="middle"
        >
          FL
        </text>
      </motion.g>

      {/* Add background effects for active state */}
      {activeState && (
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          width="100%"
          height="100%"
          fill="#C4933F"
        />
      )}
    </svg>
  );
};

export default USMap;
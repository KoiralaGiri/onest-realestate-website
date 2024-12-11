import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionVariants = {
  up: { hidden: { y: 50 }, visible: { y: 0 } },
  down: { hidden: { y: -50 }, visible: { y: 0 } },
  left: { hidden: { x: -50 }, visible: { x: 0 } },
  right: { hidden: { x: 50 }, visible: { x: 0 } }
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up'
}) => {
  const ref = useRef(null);
  const { controls, inView } = useInView(ref);

  const variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction].hidden
    },
    visible: {
      opacity: 1,
      ...directionVariants[direction].visible,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
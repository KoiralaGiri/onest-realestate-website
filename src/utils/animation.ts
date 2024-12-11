import { useScroll, useTransform, MotionValue } from 'framer-motion';

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const slideInVariants = {
  hidden: (direction = 'left') => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50
  }),
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const useScrollAnimation = (start = 0, end = 1) => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [100, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  
  return { opacity, y, scale };
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};
import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
  variant?: 'wave' | 'slope' | 'curve';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '',
  variant = 'wave'
}) => {
  const clipPaths = {
    wave: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.8%, 29% 40.9%, 30% 40.05%, 31% 39.3%, 32% 38.65%, 33% 38.05%, 34% 37.55%, 35% 37.15%, 36% 36.85%, 37% 36.6%, 38% 36.5%, 39% 36.45%, 40% 36.4%, 41% 36.35%, 42% 36.35%, 43% 36.3%, 44% 36.3%, 45% 36.3%, 46% 36.3%, 47% 36.35%, 48% 36.4%, 49% 36.5%, 50% 36.6%, 51% 36.75%, 52% 36.9%, 53% 37.1%, 54% 37.3%, 55% 37.5%, 56% 37.75%, 57% 38%, 58% 38.25%, 59% 38.55%, 60% 38.85%, 61% 39.15%, 62% 39.5%, 63% 39.85%, 64% 40.2%, 65% 40.6%, 66% 41%, 67% 41.4%, 68% 41.8%, 69% 42.25%, 70% 42.7%, 71% 43.15%, 72% 43.65%, 73% 44.15%, 74% 44.65%, 75% 45.15%, 76% 45.7%, 77% 46.25%, 78% 46.8%, 79% 47.4%, 80% 48%, 81% 48.6%, 82% 49.2%, 83% 49.8%, 84% 50.4%, 85% 51%, 86% 51.6%, 87% 52.2%, 88% 52.8%, 89% 53.4%, 90% 54%, 91% 54.6%, 92% 55.2%, 93% 55.8%, 94% 56.4%, 95% 57%, 96% 57.6%, 97% 58.2%, 98% 58.8%, 99% 59.4%, 100% 60%)',
    slope: 'polygon(0 0, 100% 0, 100% 100%, 0 60%)',
    curve: 'polygon(0 0, 100% 0, 100% 100%, 0 85%, 0 60%)'
  };

  return (
    <motion.div
      className={`relative h-32 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div 
        className="absolute inset-0 bg-white"
        style={{ clipPath: clipPaths[variant] }}
      />
    </motion.div>
  );
};
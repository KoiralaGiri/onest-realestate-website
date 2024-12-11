import React from 'react';
import { DollarSign, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsProps {
  avgPrice: string;
  schools: string;
  lifestyle: string;
}

export const CommunityStats: React.FC<StatsProps> = ({ avgPrice, schools, lifestyle }) => {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-4 mt-4 border-t border-white/20 pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <DollarSign size={16} className="text-amber-400 mb-1" />
        <span className="text-white/90 text-sm">{avgPrice}</span>
      </div>
      <div className="flex flex-col items-center">
        <GraduationCap size={16} className="text-amber-400 mb-1" />
        <span className="text-white/90 text-sm">{schools}</span>
      </div>
      <div className="flex flex-col items-center">
        <Heart size={16} className="text-amber-400 mb-1" />
        <span className="text-white/90 text-sm">{lifestyle}</span>
      </div>
    </motion.div>
  );
};
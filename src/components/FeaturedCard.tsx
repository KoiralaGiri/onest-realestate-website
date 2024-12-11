import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeaturedCardProps {
  image: string;
  title: string;
  description: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
      <div className="absolute bottom-0 left-0 p-4">
        <h4 className="text-white text-lg font-bold mb-1">{title}</h4>
        <p className="text-white/80 text-sm mb-2">{description}</p>
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center text-[#b68319] font-medium group"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default FeaturedCard;
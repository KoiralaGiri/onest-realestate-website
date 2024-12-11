import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const AnimatedCTAButton = () => (
  <motion.button
    whileHover="hover"
    className="relative mt-6 overflow-hidden group"
  >
    <motion.div
      variants={{
        hover: {
          scaleX: 1,
          transition: { duration: 0.3, ease: "easeInOut" }
        }
      }}
      className="absolute inset-0 bg-[#b68319] rounded-lg scale-x-0 origin-left"
    />
    <div className="relative px-6 py-3 flex items-center space-x-2">
      <span className="text-[#b68319] group-hover:text-white transition-colors duration-300">
        View Their Property
      </span>
      <motion.div
        variants={{
          hover: {
            x: 5,
            transition: { duration: 0.3, ease: "easeInOut" }
          }
        }}
        className="text-[#b68319] group-hover:text-white transition-colors duration-300"
      >
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </div>
  </motion.button>
);

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="absolute -top-4 -left-4 w-12 h-12 bg-[#b68319] rounded-full flex items-center justify-center"
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Quote className="w-6 h-6 text-white" />
        </motion.div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.location}</p>
              <div className="flex text-[#b68319] mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-700 leading-relaxed"
          >
            {testimonial.text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 inline-block px-4 py-2 bg-[#b68319]/10 text-[#b68319] rounded-full text-sm font-medium"
          >
            {testimonial.purchaseType}
          </motion.div>
          <AnimatedCTAButton />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={testimonial.propertyImage}
          alt="Client's Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
    </motion.div>
  );
};
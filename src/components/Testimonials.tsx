import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  propertyImage: string;
  rating: number;
  purchaseType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Alexandria, VA",
    text: "oNest made our first home buying experience incredibly smooth. Their expertise in the NOVA market is unmatched! The team's dedication to finding us the perfect home exceeded all our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    propertyImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    rating: 5,
    purchaseType: "First-time Buyer"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Arlington, VA",
    text: "The team's dedication to finding us the perfect home was remarkable. They went above and beyond at every step, making sure we found exactly what we were looking for in our dream neighborhood.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    propertyImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    rating: 5,
    purchaseType: "Luxury Home Buyer"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Vienna, VA",
    text: "Professional, knowledgeable, and genuinely caring. oNest helped us sell our home for top dollar in record time. Their marketing strategy and attention to detail were exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    propertyImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    rating: 5,
    purchaseType: "Home Seller"
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped our clients find their perfect homes
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[currentIndex].id}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#b68319]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';

const HeroBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToListings = () => {
    const listingsSection = document.getElementById('handpicked-homes');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607"
          alt="Northern Virginia Skyline"
          className="w-full h-full object-cover"
          style={{ y: smoothY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      {/* Bottom Curves */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto fill-white transform translate-y-1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,120 720,-120 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full min-h-screen flex items-center justify-center text-white px-4"
        style={{ opacity }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <AnimatedText
            text="HONESTY IS OUR COMMITMENT REAL ESTATE IS OUR PASSION"
            highlightWords={["COMMITMENT", "PASSION"]}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            Your Next Move, Made Simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <AnimatedButton onClick={scrollToListings} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
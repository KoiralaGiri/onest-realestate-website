import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroBanner1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.innerText.split(' ');
      textRef.current.innerHTML = words
        .map((word, i) => {
          const isHighlight = word === 'COMMITMENT' || word === 'PASSION';
          return `<span class="word-wrap">
            <span class="word ${isHighlight ? 'text-[#b68319]' : ''}" 
                  style="animation-delay: ${i * 0.1}s">
              ${word}
            </span>
          </span>`;
        })
        .join(' ');

      gsap.from('.word', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
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
          <div
            ref={textRef}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-tight"
          >
            HONESTY IS OUR COMMITMENT REAL ESTATE IS OUR PASSION
          </div>

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
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: '#8e6614',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#b68319] text-white rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Explore oNest Ecosystem
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner1;

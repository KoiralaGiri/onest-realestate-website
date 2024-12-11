import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  highlightWords: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, highlightWords }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = text.split(' ');
      textRef.current.innerHTML = words
        .map((word, i) => {
          const isHighlight = highlightWords.includes(word);
          return `
            <span class="word-wrap">
              <span class="word relative inline-block">
                ${word}
                ${isHighlight ? `
                  <span class="absolute inset-0 overflow-hidden">
                    <span class="highlight-text text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                      ${word}
                    </span>
                  </span>
                ` : ''}
              </span>
            </span>
          `;
        })
        .join(' ');

      // Animate words sliding up
      gsap.from('.word', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1
      });

      // Animate highlight fill effect
      gsap.to('.highlight-text', {
        clipPath: 'inset(0 0 0 0)',
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.8
      });
    }
  }, [text, highlightWords]);

  return (
    <div 
      ref={textRef}
      className="text-4xl md:text-6xl font-serif mb-8 leading-tight tracking-tight"
    />
  );
};

export default AnimatedText;
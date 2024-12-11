import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Shuffle, Smile } from 'lucide-react';
import '../styles/ValueSection.css';
import { TypingAnimation } from './ui/typewriter-effect.tsx';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const words = [
  {
    text: 'Redefining How ',
  },

  {
    text: 'People',
  },
  {
    text: 'Find Their',
  },
  {
    text: 'Dream',
    className: 'text-[#b68319]-500 dark:text-[b68319]-500',
  },
  {
    text: 'Homes.',
    className: 'text-[#b68319]-500 dark:text-[b68319]-500',
  },
];

const ValuesSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 2000,
      y: Math.random() * 1000,
      size: 100,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + Math.sin(particle.y * 0.1) * 0.2,
          opacity:
            particle.y < 0 ? Math.random() * 0.5 + 0.1 : particle.opacity,
          y: particle.y < 0 ? 100 : particle.y - particle.speed, // Corrected y logic
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: <Flame size={32} />,
      title: 'Audacity',
      description:
        'Pushing boundaries and embracing innovation in real estate.',
    },
    {
      icon: <Shuffle size={32} />,
      title: 'Resilience',
      description: 'Adapting and thriving in an ever-changing market.',
    },
    {
      icon: <Smile size={32} />,
      title: 'Together',
      description: 'Building lasting relationships and community connections.',
    },
  ];

  return (
    <section className="values-section">
      <div className="particles-container">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle"
              animate={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
              }}
              transition={{
                duration: 0.05,
                ease: 'linear',
              }}
              style={{
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="values-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="values-header"
        >
          <h1 className="values-title">
            <TypingAnimation
              className="TypeAnimation"
              text="Redefining How People Find Their Dream Homes"
              duration={50}
            />
          </h1>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`value-card ${index === 2 ? 'value-card-wide' : ''}`}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="values-details"
        >
          <h2 className="values-subtitle"></h2>
          <ul className="values-list"></ul>
          <p className="values-description">
            Discover the ONEST difference—where exceptional service, community
            values, and innovative solutions come together to create an
            experience tailored just for you.
          </p>
          <button className="playbook-button">Read our oNest playbook</button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import FeaturedCard from './FeaturedCard';
import { menuContent } from '../data/menuContent';

interface MegaMenuProps {
  isOpen: boolean;
  type: keyof typeof menuContent;
  onClose: () => void;
}

const menuVariants = {
  initial: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: 'top'
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const linkVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  hover: { x: 10, color: '#b68319' }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, type, onClose }) => {
  const content = menuContent[type];

  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 z-50"
          />
          
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full left-0 w-screen bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 z-40"
            onMouseLeave={onClose}
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 grid grid-cols-3 gap-8">
                  {content.sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10">
                          <Player
                            autoplay
                            loop
                            src={section.icon}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                        {section.links.map((link, linkIdx) => (
                          <motion.div
                            key={linkIdx}
                            variants={linkVariants}
                            whileHover="hover"
                            className="group"
                          >
                            <Link
                              to="#"
                              className="flex items-center space-x-3 text-gray-600 hover:text-[#b68319] transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span>{link}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="col-span-4"
                >
                  <FeaturedCard
                    image={content.featuredImage}
                    title={`Featured ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                    description={`Discover the best ${type} opportunities in Northern Virginia`}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
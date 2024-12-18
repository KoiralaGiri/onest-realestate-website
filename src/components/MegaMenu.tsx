import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuContent, iconMap, MenuType } from '../types/menuTypes';

interface MegaMenuProps {
  isOpen: boolean;
  type: MenuType;
  onClose: () => void;
  navItemRect?: DOMRect | null;
}

const MENU_WIDTH = 600;

const menuVariants = {
  initial: { 
    opacity: 0,
    y: -4,
    scaleX: 0.98,
    scaleY: 0.98,
    transformOrigin: "top"
  },
  animate: { 
    opacity: 1,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const itemVariants = {
  initial: { 
    opacity: 0,
    y: 8,
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    }
  }
};

const iconVariants = {
  initial: { 
    rotate: 0,
    scale: 1
  },
  hover: { 
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, type, onClose, navItemRect }) => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (navItemRect) {
      const viewportWidth = window.innerWidth;
      let xPos = navItemRect.left + (navItemRect.width / 2) - (MENU_WIDTH / 2);
      xPos = Math.max(16, Math.min(viewportWidth - MENU_WIDTH - 16, xPos));

      setMenuPosition({
        x: xPos,
        y: navItemRect.bottom + 8
      });
    }
  }, [navItemRect]);

  const content = menuContent[type];
  if (!content) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={`menu-${type}`}
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed w-[600px] bg-white shadow-xl rounded-xl z-40 overflow-hidden border border-gray-100"
          style={{
            left: menuPosition.x,
            top: menuPosition.y
          }}
          onMouseLeave={onClose}
        >
          <motion.div className="p-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4">
                <div className="space-y-2">
                  {content.sections[0].links.map((item, idx) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <motion.div
                        key={`${type}-${idx}`}
                        variants={itemVariants}
                        className="group"
                      >
                        <Link
                          to="#"
                          className="block hover:bg-[#C4933F]/10 rounded-lg p-3 transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className="flex-shrink-0"
                              initial="initial"
                              whileHover="hover"
                              variants={iconVariants}
                            >
                              <Icon className="w-5 h-5 text-[#C4933F]" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-gray-900 text-sm font-medium">
                                {item.title}
                              </h3>
                              <p className="text-gray-500 text-xs mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="col-span-2"
                variants={itemVariants}
              >
                <div className="relative h-full rounded-lg overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <motion.img 
                    src={content.featuredImage}
                    alt={content.featuredTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {content.featuredTitle}
                    </h3>
                    <p className="text-gray-200 text-xs">
                      {content.featuredDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
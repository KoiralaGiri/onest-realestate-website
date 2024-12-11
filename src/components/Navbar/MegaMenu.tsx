import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MegaMenuItem {
  title: string;
  links: string[];
  icon: string;
}

interface MegaMenuSection {
  sections: MegaMenuItem[];
  featuredImage: string;
}

interface MegaMenuProps {
  isOpen: boolean;
  type: string;
  content: Record<string, MegaMenuSection>;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, type, content, onClose }) => {
  const currentContent = content[type];

  if (!currentContent) return null;

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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-screen bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 grid grid-cols-3 gap-8">
                  {currentContent.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#b68319]/10 rounded-lg flex items-center justify-center">
                          <img src={section.icon} alt="" className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900">{section.title}</h3>
                      </div>
                      <div className="space-y-2 pl-4 border-l-2 border-gray-100">
                        {section.links.map((link, linkIdx) => (
                          <motion.div
                            key={linkIdx}
                            whileHover={{ x: 4 }}
                            className="group"
                          >
                            <Link
                              to="#"
                              className="flex items-center space-x-2 text-gray-600 hover:text-[#b68319] transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span>{link}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="col-span-4 relative rounded-xl overflow-hidden"
                >
                  <img
                    src={currentContent.featuredImage}
                    alt="Featured"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
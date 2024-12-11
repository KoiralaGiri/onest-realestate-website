import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MegaMenu } from './MegaMenu';
import { megaMenuContent } from './megaMenuContent';
import { cn } from '../../utils/cn';

const navItems = [
  { path: '/about', label: 'About Us', hasMega: true },
  { path: '/buyers', label: 'Buyers', hasMega: true },
  { path: '/sellers', label: 'Sellers', hasMega: true },
  { path: '/communities', label: 'Communities', hasMega: true },
  { path: '/tools', label: 'Tools', hasMega: true }
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMouseEnter = (type: string) => {
    setActiveMegaMenu(type);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left Section - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 flex-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                onMouseEnter={() => item.hasMega && handleMouseEnter(item.label.toLowerCase())}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <NavLink {...item} />
                {item.hasMega && (
                  <MegaMenu
                    isOpen={activeMegaMenu === item.label.toLowerCase()}
                    type={item.label.toLowerCase()}
                    content={megaMenuContent}
                    onClose={() => setActiveMegaMenu(null)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Center Section - Logo */}
          <div className="flex-shrink-0 mx-4">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-[#b68319]"
              >
                oNest
              </motion.div>
            </Link>
          </div>

          {/* Right Section - Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
            <ActionButton>Contact Us</ActionButton>
            <ActionButton variant="primary">Login</ActionButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-20 p-4 bg-white/90 backdrop-blur-md rounded-3xl mx-4 shadow-lg lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.path} {...item} mobile />
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <ActionButton className="w-full">Contact Us</ActionButton>
                  <ActionButton variant="primary" className="w-full">Login</ActionButton>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const NavLink = ({ path, label, mobile }: { path: string; label: string; mobile?: boolean }) => (
  <Link to={path}>
    <motion.span
      className={cn(
        "relative font-medium text-gray-700 hover:text-[#b68319] transition-colors",
        mobile ? "block py-2" : "inline-block"
      )}
      whileHover={{ x: mobile ? 4 : 0 }}
    >
      {label}
      <motion.span
        className="absolute inset-x-0 bottom-0 h-0.5 bg-[#b68319] rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  </Link>
);

const ActionButton = ({ 
  children, 
  variant, 
  className 
}: { 
  children: React.ReactNode; 
  variant?: 'primary'; 
  className?: string;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "px-6 py-2 rounded-full font-medium transition-colors",
      variant === 'primary'
        ? "bg-[#b68319] text-white hover:bg-[#8e6614]"
        : "text-gray-700 hover:text-[#b68319] border border-gray-300 hover:border-[#b68319]",
      className
    )}
  >
    {children}
  </motion.button>
);

export default Navbar;
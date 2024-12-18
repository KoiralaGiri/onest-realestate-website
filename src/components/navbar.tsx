import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Send, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import { MenuType } from '../types/menuTypes';
import logo from '/src/images/onest.png';

interface NavLink {
  to: string;
  label: string;
  delay: string;
  megaMenuType?: MenuType;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MenuType | null>(null);
  const [activeNavRect, setActiveNavRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    
    if (currentScrollY < 50) {
      setIsVisible(true);
    } else if (scrollDelta > 10) {
      setIsVisible(false);
      setActiveMegaMenu(null);
    } else if (scrollDelta < -5) {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [controlNavbar]);

  const navLinks: NavLink[] = [
    { to: '/about', label: 'About Us', delay: '0.7s', megaMenuType: 'aboutUs' },
    { to: '/buyers', label: 'Buyers', delay: '0.8s', megaMenuType: 'buyers' },
    { to: '/sellers', label: 'Sellers', delay: '0.9s', megaMenuType: 'sellers' },
    { to: '/communities', label: 'Communities', delay: '1s', megaMenuType: 'communities' },
    { to: '/resources', label: 'Resources', delay: '1.1s', megaMenuType: 'resources' }
  ];

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, megaMenuType?: MenuType) => {
    if (megaMenuType) {
      setActiveNavRect(event.currentTarget.getBoundingClientRect());
      setActiveMegaMenu(megaMenuType);
    }
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
    setActiveNavRect(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] transform ${
        hasAnimated ? 'animate-slideDown' : ''
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div 
        className="bg-white rounded-full shadow-lg py-2 opacity-0 animate-fadeIn relative"
        style={{
          animationDelay: '0.3s',
          animationDuration: '0.4s',
          animationFillMode: 'forwards'
        }}
      >
        <nav className="max-w-7xl mx-auto px-8">
          <div className="flex items-center h-14">
            {/* Left Navigation Links */}
            <div className="flex items-center space-x-8 flex-1">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  onMouseEnter={(e) => handleMouseEnter(e, link.megaMenuType)}
                  className="relative"
                >
                  <Link
                    to={link.to}
                    className="opacity-0 animate-fadeInUp text-gray-700 relative group hidden md:block"
                    style={{
                      animationDelay: link.delay,
                      animationDuration: '0.4s',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4933F] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: '0.5s',
                  animationDuration: '0.4s',
                  animationFillMode: 'forwards'
                }}
              >
                <img src={logo} alt="NEST Logo" className="h-8" />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6 flex-1 justify-end">
              <Link 
                to="/contact"
                className="opacity-0 animate-fadeInUp inline-flex items-center gap-2 px-4 py-2 text-gray-700 group hidden md:inline-flex"
                style={{
                  animationDelay: '1.2s',
                  animationDuration: '0.4s',
                  animationFillMode: 'forwards'
                }}
              >
                <span className="relative inline-flex items-center gap-2">
                  Contact oNest
                  <Send 
                    size={16} 
                    className="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" 
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4933F] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link 
                to="/login"
                className="opacity-0 animate-fadeInUp px-6 py-2 bg-[#C4933F] text-white rounded-full hover:bg-[#B38438] transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: '1.3s',
                  animationDuration: '0.4s',
                  animationFillMode: 'forwards'
                }}
              >
                Login
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: '1.4s',
                  animationDuration: '0.4s',
                  animationFillMode: 'forwards'
                }}
                type="button"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        {activeMegaMenu && (
          <MegaMenu
            isOpen={!!activeMegaMenu}
            type={activeMegaMenu}
            onClose={handleMouseLeave}
            navItemRect={activeNavRect}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden mt-2 bg-white rounded-2xl shadow-lg overflow-hidden
          transition-all duration-200 ease-in-out transform origin-top
          ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}
      >
        <div className="p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <Link 
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact oNest
            </Link>
            <Link 
              to="/login"
              className="block px-4 py-2 bg-[#C4933F] text-white rounded-lg text-center hover:bg-[#B38438] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
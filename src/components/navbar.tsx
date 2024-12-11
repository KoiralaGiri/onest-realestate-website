import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Menu, X } from 'lucide-react';
import '../styles/navbar.css';
import Logo from '../images/onest.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container animate-slideDown">
      <nav className="navbar">
        <div className="navbar-content">
          {/* Hamburger Menu Button */}
          <button className="menu-button animate-fadeIn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Logo */}
          <Link to="/" className="logo-container animate-fadeIn">
            <img src={Logo} alt="NEST Logo" className="logo-image" />
          </Link>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            {/* Navigation Links */}
            <div className="nav-links">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/buyers"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Buyers
              </Link>
              <Link
                to="/sellers"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sellers
              </Link>
              <Link
                to="/communities"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Communities
              </Link>
              <Link
                to="/tools"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="mobile-buttons">
              <Link
                to="/contact"
                className="contact-button"
                onClick={() => setIsMenuOpen(false)}
              >
                <Send size={16} />
                Contact eNest
              </Link>
              <Link
                to="/login"
                className="login-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links animate-fadeIn">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/buyers" className="nav-link">
              Buyers
            </Link>
            <Link to="/sellers" className="nav-link">
              Sellers
            </Link>
            <Link to="/communities" className="nav-link">
              Communities
            </Link>
            <Link to="/tools" className="nav-link">
              Tools
            </Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="desktop-right-buttons animate-fadeIn">
            <Link to="/contact" className="contact-button">
              <Send size={16} />
              Contact eNest
            </Link>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu} />
      )}
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/onest.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Navigation */}
          <div className="footer-section">
            <h3>Buyers</h3>
            <ul className="footer-links">
              <li><Link to="/email-marketing">Email Marketing</Link></li>
              <li><Link to="/campaigns">Campaigns</Link></li>
              <li><Link to="/branding">Branding</Link></li>
              <li><Link to="/offline">Offline</Link></li>
            </ul>
          </div>
          
          {/* Middle Left Navigation */}
          <div className="footer-section">
            <h3>Sellers</h3>
            <ul className="footer-links">
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          
          {/* Center CTA Section */}
          <div className="cta-section">
            <p className="cta-text">Are you ready?</p>
            <h2 className="cta-heading">Let's get started</h2>
            <Link to="/get-started" className="get-started-btn">
              Get started 🏠
            </Link>
            <Link to="/contact" className="contact-link">Contact Us</Link>
          </div>

          {/* Right Navigation */}
          <div className="footer-section">
            <h3>Buyers</h3>
            <ul className="footer-links">
              <li><Link to="/email-marketing">Email Marketing</Link></li>
              <li><Link to="/campaigns">Campaigns</Link></li>
              <li><Link to="/branding">Branding</Link></li>
              <li><Link to="/offline">Offline</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <img src={Logo} alt="eNest Logo" className="footer-logo" />
          <div className="copyright">
            Copyright © {new Date().getFullYear()} eNest Real Estate.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
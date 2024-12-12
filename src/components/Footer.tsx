import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/onest.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-grid">
          {/* About Us Section */}
          <div className="footer-section">
            <img src={Logo} alt="NEST Logo" className="footer-logo" />
            <h3>About Us</h3>
            <p className="footer-description">
              Transforming lives through real estate.
            </p>
            <Link to="/learn-more" className="footer-link">
              Learn More
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>

          {/* Buyers Section */}
          <div className="footer-section">
            <h3>Buyers</h3>
            <ul className="footer-links">
              <li><Link to="/email-marketing">Email Marketing</Link></li>
              <li><Link to="/campaigns">Campaigns</Link></li>
              <li><Link to="/branding">Branding</Link></li>
              <li><Link to="/offline">Offline</Link></li>
            </ul>
          </div>

          {/* Sellers Section */}
          <div className="footer-section">
            <h3>Sellers</h3>
            <ul className="footer-links">
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Communities Section */}
          <div className="footer-section">
            <h3>Communities</h3>
            <p>Discover the ONEST difference—where exceptional service, community values, and innovative solutions come together.</p>
            <Link to="/read-playbook" className="footer-link">
              Read our oNest Playbook
            </Link>
          </div>

          {/* Tools Section */}
          <div className="footer-section">
            <h3>Tools</h3>
            <ul className="footer-links">
              <li><Link to="/audacity">Audacity</Link></li>
              <li><Link to="/resilience">Resilience</Link></li>
              <li><Link to="/together">Together</Link></li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Are you ready?</h2>
          <h2>Let's get started</h2>
          <Link to="/get-started" className="cta-btn">
            Get Started 🏠
          </Link>
          <Link to="/contact" className="cta-link">Contact Us</Link>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3>Team oNest</h3>
          <ul className="team-grid">
            <li>Anjana Budhathoki - Principal Broker</li>
            <li>Suresh Sapkota - Associate Broker</li>
            <li>Suman Mahara - Supervising Broker</li>
            <li>Prayash Bhusal - REALTOR®</li>
            <li>Tek Narayan Yadav - REALTOR®</li>
            <li>Deepak Sharma - REALTOR®</li>
            <li>Purna Shahi - REALTOR®</li>
            <li>Sarah Nazeer - REALTOR®</li>
            <li>Sumit Sanjel - REALTOR®</li>
            <li>Abhaya Karki - REALTOR®</li>
          </ul>
          <Link to="/all-agents" className="footer-link">
            See All Agents
          </Link>
          <Link to="/careers" className="footer-link">
            Join Our Team
          </Link>
        </div>

        {/* Bottom Section */}
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

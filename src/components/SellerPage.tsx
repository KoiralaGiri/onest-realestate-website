import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Zap, Users } from 'lucide-react';
import '../styles/SellerPage.css';
import FlipCard from './ui/flip-card.tsx';
import img1 from '../images/rb_28181.png'
import img2 from '../images/rb_26789.png'
import img3 from '../images/rb_26955.png'
import img4 from '../images/rb_26846.png'
import './SmartSellingSolutions.js'
import SmartSellingSolutions from './SmartSellingSolutions.js';
import HomeValueCalculator from './home-value-calculator.tsx';
import Exclusive from './exclusive.tsx';

const Particle = ({ index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  useEffect(() => {
    const moveParticle = () => {
      setPosition({
        x: position.x + (Math.random() - 0.5),
        y: position.y + (Math.random() - 0.5)
      });
    };

    const interval = setInterval(moveParticle, 100);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div
      className="particle"
      style={{
        width: index % 2 ? '6px' : '4px',
        height: index % 2 ? '6px' : '4px',
        left: `${position.x}%`,
        top: `${position.y}%`
      }}
    />
  );
};

const FeatureCard = ({ number, description, icon: Icon, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="feature-card"
    >
      <div className="card-background" />
      
      <div className="icon-container">
        <div className="icon-background" />
        <div className="icon-wrapper">
          <Icon size={32} color="#B8860B" />
        </div>
      </div>

      <div className="feature-number">{number}</div>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const SellerPage = () => {
  

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in');
      }, index * 200);
    });
  }, []);

  return (
    <div className="seller-page">
      <section className="hero-section">
        <div className="overlay"></div>
        
        <div className="hero-content">
          <div className="text-wrapper">
            <div className="main-title animate-fade">
              <h1>
                <span className="bold">DISCOVER</span> YOUR HOME'S<br />
                TRUE <span className="bold">VALUE</span>
              </h1>
            </div>
            
            <div className="sub-title animate-fade">
              <div>TAKE THE <span className="bold">FIRST STEP</span> TOWARD</div>
              <div><span className="bold">MAXIMIZING</span> YOUR</div>
              <div className="investment-line">
                <span className="bold">INVESTMENT</span> TODAY.
                <div className="animated-line"></div>
              </div>
            </div>

            <div className="button-container animate-fade">
              <button className="estimate-button">
                Get Your Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-content">
          <h2 className="info-heading animate-fade">
            You Only Get One Chance to Make a First Impression. 
            Let oNest Make It Unforgettable.
          </h2>
          
          <p className="info-description animate-fade">
            At oNest, we set the standards for showcasing properties with precision 
            and impact. By methodically evaluating our comprehensive market analysis, 
            we create a targeted strategy that maximizes your property's potential 
            in today's dynamic market.
          </p>

          <button className="value-button animate-fade">
            DETERMINE THE VALUE OF YOUR HOME
          </button>
        </div>
      </section>

      {/* Why oNest Section */}
      <section className="why-onest-section">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}

        <div className="why-onest-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="why-onest-header"
          >
            <h2 className="why-onest-subtitle">Discover Excellence</h2>
            <h1 className="why-onest-title">Why oNest?</h1>
            <p className="why-onest-description">
            Experience the perfect harmony of expertise, trust, and success with oNest's real estate.
            </p>
          </motion.div>

          <div className="feature-cards-container">
            <FlipCard title='Our Mission, Your Success' description='At oNest, we are passionate about what we do. Our mission is to ensure every client experiences a smooth, personalized, and successful transaction.'/>
            <FlipCard title='Unmatched Expertise' description='We pride ourselves on being one of the most efficient real estate teams, excelling in both market expertise and agent-to-transaction ratios. '/>
            <FlipCard title='Proven Strategies' description="Our proven strategies ensure the shortest marketing periods and the highest sales prices in the market. "/>
            <FlipCard title='Exceeding Expectations' description="oNest agents are among the best in the industry. When you choose oNest, you're backed by a team dedicated to exceeding expectations." />
                
             
          </div>
        </div>
      </section>
      <SmartSellingSolutions />
      <HomeValueCalculator />
      <Exclusive />
    </div>
  );
};

export default SellerPage;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Home, 
  Megaphone 
} from 'lucide-react';
import '../styles/SmartSellingSolutions.css';
import HomeValueCalculator from './home-value-calculator.tsx';

const ResourceCard = ({ icon: Icon, title, description, linkText }) => {
  return (
    <motion.div 
      className="resource-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-wrapper">
        <Icon className="icon" size={32} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href="#" className="card-link">
        {linkText} 
        <span>→</span>
      </a>
    </motion.div>
  );
};

const SmartSellingSolutions = () => {
  const resources = [
    {
      icon: LineChart,
      title: "Market Analysis",
      description: "Get detailed insights into your local market, including comparable sales, pricing trends, and optimal listing strategies.",
      linkText: "Learn More"
    },
    {
      icon: Home,
      title: "Home Preparation",
      description: "Discover the most effective improvements and staging techniques to enhance your property's appeal and value.",
      linkText: "Explore Tips"
    },
    {
      icon: Megaphone,
      title: "Marketing Suite",
      description: "Access professional photography, virtual tours, and targeted advertising to reach qualified buyers.",
      linkText: "View Tools"
    }
  ];

  return (
    <section className="seller-section">
      {/* Background Shapes */}
      <div className="background-shape shape-1"></div>
      <div className="background-shape shape-2"></div>
      <div className="background-shape shape-3"></div>

      <div className="content-wrapper">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Smart Selling Solutions
            <span className="title-underline"></span>
          </h2>
          <p className="section-description">
            Access our comprehensive suite of tools and resources designed to help you maximize 
            your property's value and streamline the selling process.
          </p>
        </motion.div>

        
      </div>
      <div className="resources-grid">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              linkText={resource.linkText}
            />
          ))}
        </div>
    </section>
  );
};

export default SmartSellingSolutions;
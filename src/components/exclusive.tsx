import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/exclusive.css';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  specs: string[];
  image: string;
  tag: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Madaket- 11 Mississippi Avenue",
    location: "Madaket",
    price: "$3,850,000",
    specs: ["3 Bedrooms", "3 Bathrooms", "1.51 Acres"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "oNest EXCLUSIVE"
  },
  {
    id: 2,
    title: "Hummock Pond- 69 Hummock Pond Road",
    location: "Hummock Pond",
    price: "$10,995,000",
    specs: ["8 Bedrooms", "7 Full + 1 Half Baths", "2.21 Acres"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "oNest EXCLUSIVE"
  },
  {
    id: 3,
    title: "Town- 2 White Elephant Way",
    location: "Town",
    price: "$7,595,000",
    specs: ["4 Bedrooms", "4 Full + 1 Half Baths", "0.12 Acres"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "oNest EXCLUSIVE"
  },
  {
    id: 4,
    title: "Town- 2  Elephant Way",
    location: "Town",
    price: "$7,595,000",
    specs: ["4 Bedrooms", "4 Full + 1 Half Baths", "0.12 Acres"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=500",
    tag: "oNest EXCLUSIVE"
  }
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      className="property-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <span className="property-tag">{property.tag}</span>
      </div>
      <div className="property-content">
        <div className="property-location">
          <Home className="location-icon" />
          <span>{property.location}</span>
        </div>
        <h3>{property.title}</h3>
        <div className="property-specs">
          {property.specs.map((spec, index) => (
            <span key={index}>{spec}</span>
          ))}
        </div>
        <div className="property-price">{property.price}</div>
      </div>
    </motion.div>
  );
}

export default function Exclusive() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < properties.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="exclusives-section">
      <h2 className="section-title">oNest Exclusives - Just for you!</h2>
      
      <div className="property-carousel">
        <motion.button
          className="carousel-btn prev"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex === 0}
        >
          <ChevronLeft />
        </motion.button>

        <div className="property-carousel-wrapper" 
          style={{ transform: `translateX(-${currentIndex * (400 + 24)}px)` }}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <motion.button
          className="carousel-btn next"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex === properties.length - 1}
        >
          <ChevronRight />
        </motion.button>
      </div>

      <div className="expert-section">
        <h2>Talk With an Island Expert</h2>
        <p>
          Whether you are just exploring the idea or you are ready to sell, 
          contact one of our agents for answers and to discuss the estimated 
          value of your home.
        </p>
        <div className="expert-buttons">
          <motion.button
            className="btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET YOUR ESTIMATED SALE VALUE
          </motion.button>
          <motion.button
            className="btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEE OUR CLIENTS IN THE NEWS
          </motion.button>
        </div>
      </div>
    </div>
  );
}
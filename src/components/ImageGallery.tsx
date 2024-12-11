import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1690574169354-d6cc4299cf84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Forest Adventure",
      description: "Misty forest with tall trees"
    },
    {
      src: "https://images.unsplash.com/photo-1604863050568-110a8f3cfe37?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Canyon Journey",
      description: "Deep canyon with dramatic cliffs"
    },
    {
      src: "https://images.unsplash.com/photo-1730892787380-5108255a014e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ocean View",
      description: "Aerial view of turquoise waters"
    }
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={image.title}
            className={`gallery-image ${
              hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''
            }`}
          />
          
          <div className={`text-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Timeline.css';

const TimelineData = [
  {
    year: 2018,
    events: [
      'Started working on the idea'
    ]
  },
  {
    year: 2019,
    events: [
      'F10 accelerator',
      'Incorporation',
      'First lender clients'
    ]
  },
  {
    year: 2020,
    events: [
      'Series A funding',
      'International expansion'
    ]
  },
  {
    year: 2021,
    events: [
      'Product launch',
      'Team growth'
    ]
  }
];

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(TimelineData.length).fill(false));

  useEffect(() => {
    // Initialize first item as visible
    setIsVisible(prev => {
      const newState = [...prev];
      newState[0] = true;
      return newState;
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Make items visible based on scroll position
      setIsVisible(prev => {
        const newState = [...prev];
        TimelineData.forEach((_, index) => {
          const threshold = windowHeight * (index * 0.2);
          if (scrollPosition > threshold) {
            newState[index] = true;
          }
        });
        return newState;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    setActiveIndex(prev => Math.min(prev + 1, TimelineData.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-header">
          <h2 className="timeline-title">Company timeline</h2>
          <div className="navigation-buttons">
            <button 
              onClick={handlePrev}
              className="nav-button"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="nav-icon" />
            </button>
            <button 
              onClick={handleNext}
              className="nav-button"
              disabled={activeIndex === TimelineData.length - 1}
            >
              <ChevronRight className="nav-icon" />
            </button>
          </div>
        </div>
        
        <div className="timeline-cards">
          {TimelineData.map((item, index) => (
            <div
              key={item.year}
              className={`timeline-card ${isVisible[index] ? 'visible' : ''}`}
            >
              <div className="card-content">
                <h3 className="year">{item.year}</h3>
                <div className="events">
                  {item.events.map((event, eventIndex) => (
                    <p key={eventIndex} className="event">{event}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;